# Portfolio

My personal developer portfolio, built with React 18, Vite 5 and React Router. It deploys to GitHub Pages automatically.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To check the production build:

```bash
npm run build
npm run preview
```

## Editing content

All of the text on the site lives in **`src/data/content.js`**. Replace anything in `[square brackets]` with your own words.

- **Highlighted word:** in `profile.headline`, wrap a word in `*asterisks*` to give it the yellow highlight.
- **Photo and project screenshots:** put the files in `public/`, then set `profile.photo` or a project's `image` to the filename (for example `'me.jpg'`). Leave as `''` to show a placeholder.
- **Links:** a project's `demo` or `code` link is hidden when it is `''`.
- **Add or remove items:** the arrays (`experience`, `projects`, `extracurriculars`, `awards`, `leadership`) can be any length.

Also update the `<title>`, description and Open Graph tags in `index.html`.

Styling is in `src/styles.css`; colours and fonts are CSS variables at the top of the file.

## Deploying to GitHub Pages

1. Push this project to a GitHub repository on the `main` branch.
2. In the repo, go to **Settings > Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it. You can watch it in the **Actions** tab.

The site uses `HashRouter` (URLs look like `/#/projects`) so refreshing any page works on GitHub Pages, and `base: './'` in `vite.config.js` means it works under any repo name.
