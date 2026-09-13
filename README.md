# Uttam Karmakar — React Devfolio

A React/Vite recreation of the one-page Drupal developer portfolio design.

## Stack

- React
- Vite
- SCSS using Sass modules (`@use` / `@forward`)
- No UI framework
- No icon package

## Sections

- Fixed header + active section navigation
- Hero
- About
- Projects
- Technical skills
- Contact
- Footer

## Run locally

```bash
npm install
npm run dev
```

Vite will print a local URL, normally `http://localhost:5173`.

## Update portfolio content

Almost all text/content is centralized in:

```text
src/data/portfolioData.js
```

Edit that file for:

- name
- navigation
- hero copy
- about copy
- projects
- technologies
- skill groups
- email/phone/location
- LinkedIn/GitHub/Drupal.org URLs

## Replace images

Images live in:

```text
src/assets/
```

Current files:

```text
hero-uttam.png
about-uttam.jpg
project-hcltech.png
project-innoraft.png
project-cummins.png
```

You can overwrite those files with new images and keep the same filenames, or change the imports in `src/data/portfolioData.js`.

## SCSS structure

```text
src/styles/
├── abstracts/
│   ├── _index.scss
│   ├── _variables.scss
│   └── _mixins.scss
├── base/
│   ├── _index.scss
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _global.scss
├── layout/
│   ├── _index.scss
│   ├── _container.scss
│   ├── _header.scss
│   ├── _navigation.scss
│   └── _footer.scss
├── components/
│   ├── _index.scss
│   ├── _button.scss
│   ├── _hero.scss
│   ├── _about.scss
│   ├── _projects.scss
│   ├── _project-card.scss
│   ├── _skills.scss
│   ├── _skill-group.scss
│   └── _contact.scss
├── utilities/
│   ├── _index.scss
│   ├── _accessibility.scss
│   ├── _animations.scss
│   └── _responsive.scss
└── main.scss
```

Do not edit compiled CSS manually. Vite compiles SCSS automatically while running or building.

## Production build

```bash
npm run build
```

The production site is generated in:

```text
dist/
```

Preview it locally with:

```bash
npm run preview
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the site whenever a commit is pushed to `main`.

1. In the GitHub repository, open **Settings → Pages** and enable Pages by setting **Build and deployment → Source** to **GitHub Actions**. Do this before running the workflow; otherwise **Configure Pages** fails with `Get Pages site failed: Not Found`.
2. Push the changes to `main` (or rerun **Deploy to GitHub Pages** from the **Actions** tab). After the workflow succeeds, the site will be available at `https://uttamkarmakar007.github.io/dev-portfolio/`.

The workflow sets Vite's base path to `/dev-portfolio/` for this repository. Local builds and Netlify builds keep the default `/` path. If the repository is renamed or a custom domain is used, update `PAGES_BASE_PATH` in the workflow (`/` for a custom domain).

## Deploy to Netlify

This React version can be deployed to Netlify.

### Git-based deployment

1. Push the project to GitHub/GitLab.
2. Import the repository into Netlify.
3. Netlify will read `netlify.toml`.
4. Build command: `npm run build`
5. Publish directory: `dist`

### Manual deployment

Build locally:

```bash
npm install
npm run build
```

Then deploy the generated `dist` folder through Netlify.
