# Atoms UI Kit

UI Kit на базе **Vue 3 + TypeScript + Vite**, предназначенный для переиспользования в других проектах через локальную зависимость.

Проект использует Vue 3 `<script setup>` SFC и собирается в виде готового npm-пакета.

---

## Стек

- Vue 3
- TypeScript
- Vite
- Element Plus UI
- Vitest

---

## Структура проекта

```
atoms-uikit/
├── src/
│   ├── components/      # Vue 3 компоненты
│   ├── services/        # Сервисы (Message, Notification, Loading)
│   ├── plugins/         # Vue плагины (InitUiComponents, InitUiIcons)
│   ├── directives/      # Директивы (LoadingDirective)
│   ├── composables/     # Composables (theme)
│   ├── contracts/       # TypeScript интерфейсы сервисов
│   ├── types/           # Общие типы (Color, Size, Form, Tree)
│   ├── lib/             # Утилиты
│   └── test-utils/      # Тестовые утилиты (factories, traits)
├── dist/                # Результат сборки
├── Makefile             # Автоматизация сборки
└── index.ts             # Главная точка входа
```

---

## Компоненты

Все компоненты экспортируются с префиксом `Atoms`:

| Категория | Компоненты |
|-----------|------------|
| Формы | `AtomsButton`, `AtomsInput`, `AtomsCheckbox`, `AtomsRadio`, `AtomsSelect`, `AtomsDatePicker`, `AtomsForm` |
| Данные | `AtomsTable`, `AtomsTree`, `AtomsPagination`, `AtomsTag`, `AtomsStatistic` |
| Навигация | `AtomsMenu`, `AtomsBreadcrumbs`, `AtomsTab`, `AtomsStep` |
| Обратная связь | `AtomsModal`, `AtomsAlert`, `AtomsPopover`, `AtomsTooltip`, `AtomsTour` |
| Отображение | `AtomsTitle`, `AtomsDivider`, `AtomsCollapse`, `AtomsProgress`, `AtomsSkeleton`, `AtomsEmpty` |
| Прочее | `AtomsIcon`, `AtomsAffix` |

---

## Сервисы

```ts
import { MessageService, NotificationService, LoadingService } from 'atoms-uikit';
```

---

## Требования

- Node.js ≥ 18
- npm ≥ 9
- GNU Make (Windows: Git Bash или WSL)

---

## Установка и разработка

```bash
npm install         # Установка зависимостей
npm run dev         # Запуск dev-сервера
npm run build       # Сборка в dist/
npm run test        # Запуск тестов
```

---

## Makefile

| Команда | Описание |
|---------|----------|
| `make build` | Установка зависимостей + сборка в `dist/` |
| `make clean` | Очистка `dist/`, `node_modules/`, `package-lock.json` |
| `make rebuild` | `clean` + `build` |

---

## Использование в другом проекте

**1. Сборка UI Kit:**

```bash
make build
```

**2. Подключение в целевом проекте:**

```bash
npm install ../uikit
```

Это добавляет в `package.json` целевого проекта постоянную локальную зависимость:
```json
"atoms-uikit": "file:../uikit"
```

После этого `npm install` в целевом проекте всегда будет подхватывать актуальный `dist/` из uikit.

**3. Подключение CSS (в точке входа приложения):**

```ts
import 'element-plus/dist/index.css';   // стили Element Plus
import 'atoms-uikit/clarity.css';        // стили компонентов uikit
```

**4. Импорт компонентов:**

```ts
import { AtomsButton, AtomsModal, AtomsTable } from 'atoms-uikit';
```

**5. Глобальная регистрация (опционально):**

```ts
import type { Plugin } from 'vue';
import { InitUiComponents, InitUiIcons, LoadingDirectivePlugin } from 'atoms-uikit';

app.use(InitUiComponents as Plugin);
app.use(InitUiIcons as Plugin);
app.use(LoadingDirectivePlugin as Plugin);
```

---

## Примечания

- После пересборки uikit (`make build`) изменения подхватываются автоматически — повторный `npm install` в целевом проекте не нужен
- На Windows рекомендуется Git Bash или WSL для работы с Makefile
