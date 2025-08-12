# nextjs-boilerplate

A minimal Next.js starter with TypeScript and Tailwind CSS. Uses the App Router (`/app`), ships with sensible defaults, and is ready to deploy to Vercel.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (with PostCSS config)

## Features

- ✅ App Router structure under `app/`
- ✅ Reusable components under `components/`
- ✅ Tailwind configured (`tailwind.config.ts`, `postcss.config.mjs`)
- ✅ Ready for Vercel deployment with CI/CD

**Repo layout (top level):**
app/
components/
keys/
public/
utils/
middleware.ts
next.config.ts
postcss.config.mjs
tailwind.config.ts
tsconfig.json


## Getting started

### 1 Install dependencies
```bash
npm install
```

### 2 Run the dev server
```bash
npm run dev
```
Open http://localhost:3000 to view the app.

### 3 Build & start (production)
```bash
npm run build
npm start
```