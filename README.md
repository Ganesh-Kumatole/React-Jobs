# React-Jobs

Minimal job board demo built with React, Vite and Tailwind. This README provides a short, ordered set of steps for getting the project running locally (including `json-server` for API testing).

---

## Prerequisites

- Node.js (v16+), `npm` or `pnpm`
- Git (to clone the repo)

---

## Quick start

### 1. Clone the repo

- Description: copy the project to your machine.
- Command:

```bash
git clone https://github.com/Ganesh-Kumatole/React-Jobs.git
cd React-Jobs
```

### 2. Install dependencies

- Description: install packages required by the app (dev + runtime).
- Command:

```bash
npm install
```

### 3. Run `json-server` for a local API

- Description: `json-server` serves `src/jobs.json` as a mock REST API for CRUD testing.
- Command:

```bash
npm run server
```

- After starting, the jobs endpoint will be available at: `http://localhost:3000/jobs`

### 4. Start the dev server

- Description: run Vite in development mode with HMR.
- Command:

```bash
npm run dev
```

### 5. Preview / Build (production)

- Description: create an optimized build and optionally preview it locally.
- Commands:

```bash
npm run build
npm run preview
```

---

## Project structure

- `index.html`
- `package.json` (scripts: `dev`, `build`, `preview`, `server`)
- `src/`
  - `main.jsx`, `App.jsx`, `Layout.jsx`
  - `index.css`, `jobs.json`
  - `assets/`, `components/`, `hooks/`, `pages/`
