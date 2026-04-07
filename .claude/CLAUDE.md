# Workspace for a44be380-4c03-4817-92ac-4533c2e8f22c

## Company GitHub Repository
- **Repository:** https://github.com/iakobidzedavid/educloud
- **Owner/Repo:** iakobidzedavid/educloud
- **Branch:** main

This workspace is cloned from the company repository.

## Current Codebase Structure

The following is the ACTUAL file tree from the GitHub repository.
Use these exact paths when creating or modifying files.

```
educloud/
  README.md
  next.config.ts
  package.json
  postcss.config.mjs
  tsconfig.json
  documents/
    .gitkeep
  src/
    app/
      globals.css
      layout.tsx
      page.tsx
      about/
      contact/
      platform/
      privacy/
      resources/
      services/
      solutions/
      terms/
    components/
      CTA.tsx
      Features.tsx
      Footer.tsx
      Header.tsx
      Hero.tsx
      HowItWorks.tsx
      Impact.tsx
      Metrics.tsx
      Pricing.tsx
      Testimonials.tsx
```

BEFORE writing any code, use Read and Glob tools to understand existing files.
Place new files in the correct directories shown above.

## Deliverables & Documents

All research, reports, plans, and documents MUST be saved in the
`docs/` directory with a date prefix (YYYY-MM-DD) for future reference:

  docs/2026-04-07_market_research.md
  docs/2026-04-07_technical_feasibility.md
  docs/2026-04-07_competitor_analysis.md

Always include the date prefix so future agents know when the document
was created.

## Application Development

This company's application is built and deployed via **Claude CLI** (AI code generation).
Claude CLI generates production-ready code, pushes to GitHub feature branches, and creates PRs.

### How App Development Works
- Development tasks describe WHAT to build in the task description
- Claude CLI has full codebase access — it reads existing code, writes new files, and runs builds
- Changes are committed to feature branches and submitted as GitHub PRs for review
- You can write code directly when working on development tasks

### Document Storage
- `documents/` — Research, reports, analysis, plans (Markdown)
- Save all non-code deliverables as Markdown files in the `documents/` directory

### For Development Tasks
- Read existing code to understand patterns and conventions
- Write production-ready code that follows project style
- Run tests and fix any failures before committing
- Create a feature branch, commit changes, and push for review

Files are also synced to S3 automatically after execution.