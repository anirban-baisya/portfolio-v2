import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  Eye,
  Library,
  RefreshCw,
  AlertCircle,
  Github,
  Clock,
} from "lucide-react";
import { SectionWrapper, SectionHeader, fadeUpVariants } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useGitHubProjects, LANGUAGE_COLORS } from "@/hooks/useGitHubProjects";

function RepoCard({ repo, index }) {
  const langColor = LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.default;
  const updatedAt = new Date(repo.updated_at).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="h-full flex flex-col group">
        <CardContent className="flex flex-col h-full gap-3 p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                <Github size={13} className="text-brand-400" />
              </div>
              <h3
                className="font-bold text-sm text-foreground truncate group-hover:text-brand-400 transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {repo.name}
              </h3>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-muted-foreground hover:text-brand-400"
              aria-label="Open repo"
            >
              <Library size={14} />
            </a>
          </div>

          {/* Description */}
          <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">
            {repo.description}
          </p>

          {/* Topics */}
          {repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {repo.topics.slice(0, 3).map((t) => (
                <Badge key={t} variant="secondary" className="text-[10px] px-2 py-0.5">
                  {t}
                </Badge>
              ))}
            </div>
          )}

          {/* Footer stats */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: langColor }}
                  />
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Star size={11} />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={11} />
                {repo.forks_count}
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
              <Clock size={10} />
              {updatedAt}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 h-[180px] animate-pulse">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-muted" />
        <div className="h-4 w-32 rounded bg-muted" />
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-muted" />
        <div className="h-3 w-4/5 rounded bg-muted" />
        <div className="h-3 w-3/5 rounded bg-muted" />
      </div>
      <div className="mt-4 flex gap-2">
        <div className="h-3 w-16 rounded-full bg-muted" />
        <div className="h-3 w-10 rounded-full bg-muted" />
      </div>
    </div>
  );
}

export function GitHubProjects() {
  const { repos, loading, error } = useGitHubProjects();
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? repos : repos.slice(0, 6);

  return (
    <SectionWrapper id="github">
      <SectionHeader
        label="GitHub Activity"
        title="Open Source Repos"
        subtitle={
          loading
            ? "Fetching latest repositories from GitHub…"
            : error
            ? "Could not load GitHub repos."
            : `${repos.length} public repositories · auto-fetched from GitHub API`
        }
      />

      {/* Error state */}
      {error && (
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center gap-3 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 text-sm mb-6"
        >
          <AlertCircle size={16} className="flex-shrink-0" />
          <p>{error}</p>
        </motion.div>
      )}

      {/* Loading skeleton grid */}
      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Repos grid */}
      {!loading && !error && (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayed.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>

          {repos.length > 6 && (
            <motion.div
              variants={fadeUpVariants}
              className="flex justify-center mt-8 gap-3"
            >
              <button
                onClick={() => setShowAll((p) => !p)}
                className="btn-outline"
              >
                <Github size={15} />
                {showAll ? "Show Less" : `Show All ${repos.length} Repos`}
              </button>
              <a
                href="https://github.com/anirban-baisya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Library size={15} />
                GitHub Profile
              </a>
            </motion.div>
          )}
        </>
      )}
    </SectionWrapper>
  );
}
