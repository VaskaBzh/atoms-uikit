# Atoms UI Kit

A Vue 3 component library built on top of [Element Plus](https://element-plus.org/), providing a consistent set of UI primitives under the `Atoms` prefix.

## Overview

Atoms UI Kit wraps and extends Element Plus components with a unified API, strict TypeScript contracts, and a thin custom style layer. It is distributed as an ES module with bundled type declarations, making it easy to drop into any Vue 3 project that already depends on Element Plus.

**Version:** 1.0.1  
**Stack:** Vue 3 · TypeScript · Element Plus · Vite · SCSS · Vitest

## Components

The library ships 40+ components across the following categories:

| Category | Components |
|---|---|
| **Form** | Button, Checkbox, CheckboxGroup, DatePicker, Form, FormItem, Input, InputNumber, InputRange, Autocomplete, Radio, Select, SelectOption, TimeSelect |
| **Display** | Alert, Divider, Empty, Icon, Pagination, Progress, Skeleton, SkeletonItem, Statistic, Countdown, Tag, Title, Tooltip |
| **Navigation** | Breadcrumbs, Menu, MenuGroup, MenuItem, MenuSub, Steps, StepsItem, Tabs, TabPanel, Tour, TourItem |
| **Overlay** | Modal, Popover |
| **Data** | Collapse, Table, TableColumn, Tree |
| **Layout** | Affix |

All components are registered globally under the `Atoms*` prefix (e.g. `<AtomsButton>`, `<AtomsTable>`).

## Installation

```bash
npm install atoms-uikit
```

Peer dependencies that must be installed separately:

```bash
npm install vue@^3.4.0 element-plus@^2.7.6 @element-plus/icons-vue@^2.3.1
```

## Usage

### Full registration

```ts
import { createApp } from 'vue'
import { InitUiComponents, InitUiIcons, InitElementPlus } from 'atoms-uikit'
import 'atoms-uikit/clarity.css'

const app = createApp(App)

InitElementPlus(app)
InitUiIcons(app)
InitUiComponents(app)

app.mount('#app')
```

### Selective import

```ts
import { uiComponents } from 'atoms-uikit'

const { AtomsButton, AtomsTable } = uiComponents
```

### Services

```ts
import { MessageService, NotificationService, LoadingService } from 'atoms-uikit'

MessageService.success('Saved!')
NotificationService.info({ title: 'Update', message: 'New version available' })

const loading = LoadingService.open()
loading.close()
```

### Loading directive

```ts
import { LoadingDirectivePlugin } from 'atoms-uikit'

app.use(LoadingDirectivePlugin)
```

```html
<div v-loading="isLoading">...</div>
```

## Project structure

```
src/
  components/
    <component-name>/
      Main<Name>.vue       # component implementation
      contracts/           # TypeScript prop contracts
      enums/               # enums used by the component
      test/                # Vitest unit tests
        mocks/             # test fixtures
  services/                # MessageService, NotificationService, LoadingService
  plugins/                 # InitUiComponents, InitUiIcons, InitElementPlus
  directives/              # LoadingDirective
  types/                   # shared types (Color, Size, Form, Tree)
index.ts                   # library entry point
```

Each component folder is self-contained: implementation, types, and tests live together.

## Development

```bash
# install dependencies
npm install

# start dev playground
npm run dev

# run tests
npm test

# type-check + build library
npm run build
```

## Tech highlights

- **Vite** library mode with `vite-plugin-dts` — produces a single `index.js` + `index.d.ts` with rolled-up types
- **Element Plus** externalized — consumers supply their own copy, no double-bundling
- **SCSS** custom theme layer on top of Element Plus CSS variables
- **Vitest + jsdom** — unit tests for every component with `@testing-library/vue`
- **Husky + commitlint** — enforces Conventional Commits on every commit
- **TypeScript** strict prop contracts via dedicated `contracts/` modules per component
