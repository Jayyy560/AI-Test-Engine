# Autonomous AI Test Engineer

Next.js implementation of the Admin / Core Team dashboard for the autonomous testing platform. The current milestone delivers the wireframe-level visual direction for the landing page showcased in the product brief.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard. Edits to `src/app/page.tsx` and `src/app/globals.css` hot-reload automatically.

## Project Structure

- `src/app/page.tsx` – Admin dashboard layout and sample data for KPIs, coverage, failures, and capabilities.
- `src/app/globals.css` – Custom design system matching the provided reference (gradients, cards, tabs, and responsive grid).
- `docs/wireframe.md` – Written wireframe describing the layout hierarchy and intent for future iterations.

## Next Steps

1. Hook the static metrics up to live data sources or API mocks.
2. Flesh out the Developer View and Test Generation tabs.
3. Add integration tests (Playwright/Cypress) for the dashboard interactions once data becomes dynamic.
