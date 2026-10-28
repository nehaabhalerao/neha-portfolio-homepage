# Neha Bhalerao — Portfolio Homepage

A responsive personal portfolio homepage built with Next.js 14, React, TypeScript, Tailwind CSS, and Lucide icons. A lightweight Canvas component animates the starfield without extra dependencies; CSS adds the atmospheric lighting and orbital details. Background motion pauses for reduced-motion preferences and when the browser tab is hidden.

The shared navigation includes a keyboard-accessible mobile menu. Portfolio and experience details remain in the App Router page, while the animated background and menu are isolated client components.

## Run locally

1. Install Node.js 18.17 or later.
2. Extract this project and open the folder in a terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000.

## Personalize before publishing

- Add your real LinkedIn and GitHub URLs. They were not included as full URLs in the resume provided, so this starter does not guess them.
- If you want a resume download button, place a PDF copy in `public/resume.pdf` and add a link to `/resume.pdf`.
- Add public repository/demo links to projects when available.
- Confirm that professional project descriptions are safe to share publicly.
- Update the email address if it changes.

## Deploy

Push the project to GitHub and import the repository into Vercel. The default Next.js build settings should work.
