# Aman Sinha Portfolio

Portfolio website built with React, Vite, GSAP, Framer Motion, and Tailwind CSS.

## Development

- Install dependencies: `npm install`
- Start local server: `npm run dev`
- Build (default, Netlify-compatible): `npm run build`

## Deployment Setup

This repo is configured for both hosts:

- GitHub Pages (repo path): `/aman-sinha-portfolio/`
- Netlify (root path): `/`

The base path is selected by Vite mode in `vite.config.js`.

## GitHub Pages

- Build for GitHub Pages: `npm run build:github`
- Deploy to `gh-pages` branch: `npm run deploy:github`

Live URL:

- https://amansinha11-dev.github.io/aman-sinha-portfolio/

## Netlify

- Build for Netlify: `npm run build:netlify`
- `netlify.toml` is included with:
	- build command: `npm run build:netlify`
	- publish directory: `dist`
	- SPA redirect: `/* -> /index.html`

In Netlify, connect this repo and keep the default `netlify.toml` settings.
