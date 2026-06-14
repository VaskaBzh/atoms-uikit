# Atoms UI Kit

A Vue 3 component library built on top of [Element Plus](https://element-plus.org/), providing a consistent set of UI primitives under the `Atoms` prefix.

## Stack

- Vue 3 · TypeScript · Vite
- Element Plus
- SCSS
- Vitest

## Project structure

```
atoms-uikit/
├── src/
│   ├── components/      # Vue 3 components
│   ├── services/        # MessageService, NotificationService, LoadingService
│   ├── plugins/         # InitUiComponents, InitUiIcons, InitElementPlus
│   ├── directives/      # LoadingDirective
│   ├── composables/     # theme composable
│   ├── contracts/       # TypeScript service interfaces
│   ├── types/           # shared types (Color, Size, Form, Tree)
│   ├── lib/             # utilities
│   └── test-utils/      # test factories and traits
├── dist/                # build output
├── Makefile             # build automation
└── index.ts             # library entry point
```

## Components

All components are exported under the `Atoms` prefix:

| Category | Components |
|---|---|
| **Form** | `AtomsButton`, `AtomsInput`, `AtomsCheckbox`, `AtomsRadio`, `AtomsSelect`, `AtomsDatePicker`, `AtomsForm`, `AtomsFormItem`, `AtomsInputNumber`, `AtomsInputRange`, `AtomsAutocomplete`, `AtomsTimeSelect` |
| **Data** | `AtomsTable`, `AtomsTableColumn`, `AtomsTree`, `AtomsPagination`, `AtomsTag`, `AtomsStatistic`, `AtomsCountdown`, `AtomsCollapse` |
| **Navigation** | `AtomsMenu`, `AtomsMenuGroup`, `AtomsMenuItem`, `AtomsMenuSub`, `AtomsBreadcrumbs`, `AtomsTabs`, `AtomsTabPanel`, `AtomsSteps`, `AtomsStepsItem`, `AtomsTour`, `AtomsTourItem` |
| **Overlay** | `AtomsModal`, `AtomsPopover` |
| **Display** | `AtomsTitle`, `AtomsDivider`, `AtomsAlert`, `AtomsProgress`, `AtomsSkeleton`, `AtomsSkeletonItem`, `AtomsEmpty`, `AtomsIcon`, `AtomsTooltip` |
| **Layout** | `AtomsAffix` |

## Services

```ts
import { MessageService, NotificationService, LoadingService } from 'atoms-uikit'

MessageService.success('Saved!')
NotificationService.info({ title: 'Update', message: 'New version available' })

const loading = LoadingService.open()
loading.close()
```

## Installation

```bash
npm install atoms-uikit
```

Peer dependencies:

```bash
npm install vue@^3.4.0 element-plus@^2.7.6 @element-plus/icons-vue@^2.3.1
```

## Usage

### Full registration

```ts
import { createApp } from 'vue'
import { InitUiComponents, InitUiIcons, InitElementPlus } from 'atoms-uikit'
import 'element-plus/dist/index.css'
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

### Loading directive

```ts
import { LoadingDirectivePlugin } from 'atoms-uikit'

app.use(LoadingDirectivePlugin)
```

```html
<div v-loading="isLoading">...</div>
```

## Requirements

- Node.js ≥ 18
- npm ≥ 9
- GNU Make (Windows: Git Bash or WSL)

## Development

```bash
npm install       # install dependencies
npm run dev       # start dev playground
npm run build     # build to dist/
npm run test      # run tests
```

## Makefile

| Command | Description |
|---|---|
| `make build` | Install dependencies + build to `dist/` |
| `make clean` | Remove `dist/`, `node_modules/`, `package-lock.json` |
| `make rebuild` | `clean` + `build` |

## Using as a local dependency

**1. Build the UI Kit:**

```bash
make build
```

**2. Link in the target project:**

```bash
npm install ../uikit
```

This adds a permanent local dependency to `package.json`:

```json
"atoms-uikit": "file:../uikit"
```

After that, `npm install` in the target project will always pick up the latest `dist/` from the UI Kit.

**3. Import styles (at the app entry point):**

```ts
import 'element-plus/dist/index.css'
import 'atoms-uikit/clarity.css'
```

**4. Import components:**

```ts
import { AtomsButton, AtomsModal, AtomsTable } from 'atoms-uikit'
```

**5. Global registration (optional):**

```ts
import type { Plugin } from 'vue'
import { InitUiComponents, InitUiIcons, LoadingDirectivePlugin } from 'atoms-uikit'

app.use(InitUiComponents as Plugin)
app.use(InitUiIcons as Plugin)
app.use(LoadingDirectivePlugin as Plugin)
```

> After rebuilding the UI Kit (`make build`), changes are picked up automatically — no need to re-run `npm install` in the target project.
