import { useState, useEffect } from "react";

const GITHUB_USERNAME = "anirban-baisya";
const CACHE_KEY = "gh_repos_cache";
const CACHE_TTL = 1000 * 60 * 30; // 30 minutes cache lifetime

export function useGitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        // Check cache first
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL) { // if present time - cached data time < 30 minutes, use cache
            setRepos(data);
            setLoading(false);
            return;
          }
        }

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=public`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          if (response.status === 403) throw new Error("GitHub API rate limit exceeded. Try again later.");
          if (response.status === 404) throw new Error("GitHub user not found.");
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        // Filter out forked repos and sort by stars then update date
        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count)
              return b.stargazers_count - a.stargazers_count;
            return new Date(b.updated_at) - new Date(a.updated_at);
          }) // Sort higher-starred repos appear first
          .slice(0, 9) // Top 9 repos
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description || "No description provided.",
            html_url: r.html_url,
            homepage: r.homepage,
            language: r.language,
            stargazers_count: r.stargazers_count,
            forks_count: r.forks_count,
            watchers_count: r.watchers_count,
            topics: r.topics || [],
            updated_at: r.updated_at,
            open_issues_count: r.open_issues_count,
          }));

        // Cache result
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: filtered, timestamp: Date.now() })
        );

        setRepos(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return { repos, loading, error };
}

// Language color map (matching GitHub's colors)
export const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  default: "#6c63ff",
};
