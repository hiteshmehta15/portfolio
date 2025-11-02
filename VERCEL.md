# Deploying this portfolio to Vercel

This project is a Create React App (CRA) app. Vercel can host it as a static site using the production build output in the `build/` folder.

What was added to make it Vercel-ready:

- `vercel.json` — instructs Vercel to run the static build and route all requests to `index.html` so client-side routing works (SPA).

Quick deploy steps (recommended):

1. Push your repository to GitHub (or GitLab/Bitbucket).
2. Go to https://vercel.com and sign in.
3. Click "New Project" → "Import Git Repository" and select your repo.
4. When Vercel asks for build settings, use the defaults for a static React app:
   - Framework Preset: "Create React App" (Vercel usually detects this automatically)
   - Build Command: `npm run build`
   - Output Directory: `build`
5. Click Deploy. Vercel will run the build and publish the site.

Local verification (before deploying):

```powershell
cd "c:\Users\Hitesh Mehta\Desktop\portfolio\portfolio"
npm install
npm run build
# Verify build/ folder exists and contains index.html
```

Notes:
- If you use client-side routing (React Router), the `vercel.json` routes entry sends all requests to `index.html` so deep links work.
- If you later add environment variables (API keys, etc.), set them in the Vercel Dashboard (Project Settings → Environment Variables).

That's it — push to GitHub and import on Vercel. If you want, I can also create a GitHub Action or add a deploy button to the README.
