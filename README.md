# FitAlong Web

Public website for FitAlong / 练搭.

## Public pages

- `/en/` and `/zh/`
- `/en/privacy/` and `/zh/privacy/`
- `/en/support/` and `/zh/support/`
- `/en/terms/` and `/zh/terms/`

The site is a static Vite build deployed to GitHub Pages. It contains only public product, support, legal, and privacy information. Never add cloud credentials, API keys, user data, or internal deployment configuration.

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

The production deployment is managed by `.github/workflows/deploy-pages.yml`.

## License

The website source code is licensed under the
[Apache License 2.0](./LICENSE).

The FitAlong and 练搭 names, logos, visual identity, brand assets, legal
policies, privacy notices, marketing copy, and editorial content are excluded
from that license and remain copyright © 2026 Zijie Yang. See
[NOTICE](./NOTICE) for details.
