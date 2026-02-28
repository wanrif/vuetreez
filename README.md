# VueTreez

VueTreez is a Vue 3 + TypeScript starter that includes routing, i18n, theme switching, state persistence, and Tailwind CSS v4.

## Features

- Vue 3 with Composition API and TypeScript
- Vite 7 development/build pipeline
- Tailwind CSS v4 with custom design tokens (emerald + shark palette)
- Route-based layout setup with shared header/nav behavior
- Responsive navigation (desktop links + mobile drawer)
- Theme switcher (light, dark, auto) with persisted preference
- Internationalization with English and Indonesian locales
- Persisted locale and app state via Pinia + pinia-plugin-persistedstate + zipson
- Custom 404 page with navigation actions
- Oxlint-based linting and Prettier formatting

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Vue Router
- Vue I18n
- Pinia
- VueUse
- Tailwind CSS v4
- Oxlint
- Prettier

## Routes

- `/` : Landing page
- `/about` : About page
- `/:pathMatch(.*)*` : Not Found page

## Project Structure

```text
src/
  assets/
    css/main.css
    images/
  components/
    Navbar.vue
    Header.vue
    ThemeSwitcher.vue
    Language.vue
    Card.vue
  i18n/
    en.json
    id.json
    index.ts
  layouts/
    MainLayout.vue
  pages/
    LandingPage/index.vue
    About/index.vue
    NotFound/index.vue
  router/
    index.ts
  stores/
    i18n.store.ts
  App.vue
  main.ts
```

## Getting Started

### Prerequisites

- Bun 1.3+

### Install

```bash
bun install
```

### Run Development Server

```bash
bun run dev
```

Default dev URL: `http://localhost:5173`

### Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## Quality Checks

### Lint

```bash
bun run lint
```

### Format

```bash
bun run format
```

## Notes

- Lint rules are configured in `.oxlintrc.json`.
- Path aliases are configured in `tsconfig.json` and `vite.config.ts`.
- Theme mode is persisted under `__vuetreez__theme`.
- Persisted Pinia store keys are prefixed with `__vuetreez__`.
