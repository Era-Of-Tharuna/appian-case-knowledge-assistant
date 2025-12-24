# Appian Case Knowledge Assistant (Bolt)

Enterprise case management system with intelligent AI-powered policy knowledge retrieval for Appian workflows.

## Prerequisites
- Node.js 18+ and npm
- Git
- A GitHub account
- (Optional) Vercel CLI for direct deploys: `npm i -g vercel`

## Local Setup

Run from the `bolt` folder:

```bash
cd d:\appian-ai-case-helper\bolt
npm install
npm run dev
```

Open the local dev server URL shown (e.g., `http://localhost:5173`).

## Build & Preview

Create a production build and preview it locally:

```bash
npm run build
npm run preview
```

The `dist` folder will contain the production output.

## Push to GitHub

If you haven't already added the remote:

```bash
git remote add origin https://github.com/Era-Of-Tharuna/appian-case-knowledge-assistant.git
git branch -M main
git push -u origin main
```

## Deploy to Vercel

**Option A — Deploy via GitHub (recommended):**
- Connect the GitHub repository to Vercel in the Vercel dashboard and select the `main` branch. Vercel will build automatically.

**Option B — Deploy with Vercel CLI:**

```bash
npm i -g vercel
vercel --prod
```

Follow the prompts.

## Tech Stack
- Vite
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Features
- Real-time case details input
- AI-powered policy matching
- Relevance scoring
- Source document citations
- Responsive UI for Appian integration

🌍 Real-World Impact

Reduces agent handling time

Minimizes compliance errors

Improves decision accuracy

Enhances productivity within Appian workflows