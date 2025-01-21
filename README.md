# raquel-petsitting.github.io

Raquel Petsitting is a project made on request to showcase services of local brands.

## Setup

### Install dependencies

`npm install`

### Run locally

`npm run dev`

### Build

`npm run build`

the destination folder is ./docs

### Deploy

The `.gitignore` file on the `dev` branch will ignore the build result (`/docs` folder) so you can:

1. Commit the changes on the `dev` branch
2. Build the app
3. Checkout to `preprod` branch (should point to `main` at all times)
4. Commit the `/docs` folder
5. Open a PR to the `main` branch

Whenever the PR is accepted, github actions build and deploy the content of `docs` to [raquel-petsitting.github.io](https://raquel-petsitting.github.io/).

## Techs used

### Web building tool

- **Vite** - `vite.config.js`

### UI Library

- **React**
  - **React-DOM** - browser specific API
  - **React-Router-DOM** - Routing in the App

### Styling

- **Tailwind** - `tailwind.config.js` - CSS-in-JS
  - **PostCSS** - `postcss.config.js` - CSS syntax transformations
  - **AutoPrefixer** - `` - PostCSS plugin that adds vendor prefixes
