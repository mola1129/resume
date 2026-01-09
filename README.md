# Resume / Portfolio

Personal resume and portfolio website built with Astro 5, Vue 3, and Tailwind CSS 4.

🌐 **Live Site**: https://mola1129.dev

## ✨ Features

- 🚀 **Astro 5** - Fast, modern static site generator
- 🎨 **Vue 3** - Interactive UI components
- 💅 **Tailwind CSS 4** - Utility-first styling with Vite plugin
- 🎭 **shadcn-vue** - Beautiful, accessible UI components
- 🌓 **Dark Mode** - Automatic theme switching
- 📱 **Responsive** - Mobile-first design
- 🧪 **Visual Regression Testing** - Automated UI testing with Playwright

## 🚀 Quick Start

### Prerequisites

- Node.js 24+
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/mola1129/resume.git
cd resume

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open http://localhost:4321 in your browser.

## 📦 Available Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run visual regression tests |
| `pnpm test:ui` | Run tests in UI mode |
| `pnpm test:update` | Update test snapshots |

## 🧪 Visual Regression Testing

This project uses Playwright for automated visual regression testing to ensure UI consistency across updates.

### First-time Setup

```bash
# Install Playwright browsers (one-time setup)
pnpm exec playwright install chromium --with-deps

# Build the site
pnpm build

# Generate baseline snapshots
pnpm test:update
```

### Running Tests

```bash
# Run all visual regression tests
pnpm test

# View test results in browser
pnpm test:report
```

**What gets tested:**
- Desktop (1920×1080)
- Tablet (768×1024)
- Mobile (Pixel 7)
- Light & Dark modes

Tests run automatically on every PR via GitHub Actions.

For detailed VRT documentation, see [tests/README.md](tests/README.md).

## 🏗️ Project Structure

```
/
├── src/
│   ├── components/    # Vue & Astro components
│   │   └── ui/       # shadcn-vue components
│   ├── data/         # Content & data definitions
│   ├── layouts/      # Page layouts
│   ├── pages/        # Routes (file-based routing)
│   ├── styles/       # Global CSS & Tailwind config
│   └── lib/          # Utilities
├── tests/            # Visual regression tests
├── public/           # Static assets
└── dist/             # Build output (generated)
```

## 🎨 Tech Stack

- **Framework**: [Astro 5](https://astro.build/) - Islands architecture
- **UI Library**: [Vue 3](https://vuejs.org/) - Composition API
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Vite plugin
- **Components**: [shadcn-vue](https://www.shadcn-vue.com/) - Based on Radix UI
- **Testing**: [Playwright](https://playwright.dev/) - Visual regression testing
- **Deployment**: GitHub Pages - Automated via GitHub Actions

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Deployment workflow:**
1. Push to `main` branch
2. GitHub Actions builds the site
3. Deploys to https://mola1129.dev

See [.github/workflows/deploy.yml](.github/workflows/deploy.yml) for details.

## 📝 Development Workflow

### Making Changes

```bash
# 1. Create a feature branch
git checkout -b feature/my-change

# 2. Make changes and test locally
pnpm dev

# 3. Run tests
pnpm build
pnpm test

# 4. Commit and push
git add .
git commit -m "Description of changes"
git push -u origin feature/my-change

# 5. Create a Pull Request
# Visual regression tests will run automatically
```

### Updating Design

When making intentional visual changes:

```bash
# 1. Make your changes
# 2. Update snapshots
pnpm test:update

# 3. Commit the new snapshots
git add tests/*-snapshots/
git commit -m "Update visual snapshots for design changes"
```

## 🔧 Configuration

- **Astro**: `astro.config.mjs`
- **TypeScript**: `tsconfig.json`
- **Tailwind**: `src/styles/global.css` (using @theme directive)
- **shadcn-vue**: `components.json`
- **Playwright**: `playwright.config.ts`
- **Git Hooks**: `lefthook.yml`

## 📄 License

This project is personal and not licensed for reuse.

## 🙋 Questions?

For questions about Astro, see the [Astro documentation](https://docs.astro.build).

For questions about this project's visual regression testing setup, see [tests/README.md](tests/README.md).
