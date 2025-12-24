# Appian Case Knowledge Assistant

Enterprise case management system with intelligent AI-powered policy knowledge retrieval for Appian workflows.

## Project Structure

```
appian-case-knowledge-assistant/
├── bolt/                    # Vite + React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── data/            # Knowledge base
│   │   ├── types/           # TypeScript types
│   │   ├── utils/           # Utility functions
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── README.md            # Project-specific instructions
└── README.md                # This file

```

## Quick Start

Navigate to the `bolt` folder and follow the instructions in `bolt/README.md`:

```bash
cd bolt
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite reports).

## Deployment

### GitHub
The project is already pushed to:
```
https://github.com/Era-Of-Tharuna/appian-case-knowledge-assistant.git
```

### Vercel
To deploy to Vercel, see `bolt/README.md` for detailed instructions.

## Features
- Real-time case details input
- AI-powered policy matching
- Relevance scoring
- Source document citations
- Responsive UI for Appian integration

## Tech Stack
- Vite
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
