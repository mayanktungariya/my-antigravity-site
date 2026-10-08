# Mayank Tungariya — Developer Portfolio

Personal portfolio website for **Mayank Tungariya**, a first-year B.Tech CSE (AI/ML) student and aspiring prompt engineer.

Built with a minimal, technical, editorial feel — focusing on clean typography, whitespace, and programming fundamentals rather than generic AI landing page templates.

## Live Visual Component

Features the **React Bits Pro "Binary Orbits" component** — a WebGL orbital particle simulation rendered using Three.js, GPGPU simulation passes, OKLab color blending, multi-pass bloom, and interactive pointer perturbations (hover wake & click ripple).

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS
- **Visuals:** Three.js + WebGL2 Custom Shaders
- **Icons:** Lucide React + Custom SVG

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── binary-orbits.tsx    # React Bits Pro Binary Orbits simulation
│   │   ├── Navbar.tsx               # Sticky nav with active section indicator
│   │   ├── Hero.tsx                 # Hero section with orbital visual
│   │   ├── About.tsx                # First-year narrative & learning stack
│   │   ├── Projects.tsx             # Filterable practical projects
│   │   ├── Skills.tsx               # 3-tier honest skill categorization
│   │   ├── PromptEngineering.tsx    # Prompt comparison & structure breakdown
│   │   ├── Journey.tsx              # Timeline & ongoing goals
│   │   ├── GitHubBuilding.tsx       # Open learning showcase
│   │   ├── Contact.tsx              # Direct contact links
│   │   ├── Footer.tsx               # Minimal footer
│   │   └── icons.tsx                # Brand icons
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components.json                  # Shadcn & React Bits registry config
├── tailwind.config.js
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

## License

Personal project code by [Mayank Tungariya](https://github.com/mayanktungariya).
