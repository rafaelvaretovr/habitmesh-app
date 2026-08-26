# habitmesh-app

Small Vue 3 side project: track daily habits as a heatmap grid

Started as a weekend hack, grew on me.

## Examples

```bash
# open http://localhost:5173
# click a cell to toggle that day
```

## What it does

- State persisted to localStorage
- GitHub-style contribution grid per habit
- Composition API + script setup
- Vite dev setup with hot reload

## Installation

```bash
npm install
npm run dev
```

## Project structure

```text
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md
│   └── dependabot.yml
├── docs/
│   ├── development.md
│   ├── roadmap.md
│   └── usage.md
├── scripts/
│   └── dev.sh
├── src/
│   ├── App.vue
│   ├── config.js
│   └── store.js
├── .editorconfig
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── package.json
└── vite.config.js
```

## Development

```bash
npm install
npm test
```

## License

MIT. Do whatever you want.
