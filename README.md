# Anirban Baisya — Portfolio

> Personal portfolio website built with React.js, Tailwind CSS v4, Framer Motion & Lucide Icons.

🔗 **Live Demo:** [https://anirban-portfolio-v2.netlify.app](https://anirban-portfolio-v2.netlify.app)

---

## Tech Stack

- **React.js** (Vite)
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **Lucide React** — icons
- **GitHub REST API** — auto-fetches public repos

## Features

- Dark / Light mode toggle with localStorage persistence
- GitHub projects auto-fetched and cached (30 min)
- Scroll-spy navigation with active section highlighting
- Fully responsive (mobile + desktop)
- Animated scroll progress bar

## Getting Started

```bash
# Clone the repo
git clone https://github.com/anirban-baisya/portfolio-v2.git
cd portfolio-v2

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, About, Skills, Experience, Projects, Education...
│   └── ui/          # Badge, Card, Button, ThemeToggle, ScrollProgress...
├── context/         # ThemeContext (dark/light mode)
├── data/            # portfolioData.js — edit your info here
└── hooks/           # useScrollSpy, useGitHubProjects
```

## Customization

All personal content lives in one file — **`src/data/portfolioData.js`**.
Can be update name, skills, experience, projects and certifications there.

---

Made by [Anirban Baisya](https://github.com/anirban-baisya)
