# Atoms UI Kit

UI Kit на базе **Vue 3 + TypeScript + Vite**, предназначенный для переиспользования в других проектах через `npm link`.

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

Автоматизация сборки и npm-линковки.

| Команда | Описание |
|---------|----------|
| `make build` | Установка зависимостей + сборка в `dist/` |
| `make link` | Регистрация пакета в глобальной npm-линковке |
| `make unlink` | Удаление глобальной npm-линковки |
| `make clean` | Очистка `dist/`, `node_modules/`, `package-lock.json` |
| `make rebuild` | `build` + `link` |
| `make distclean` | `rebuild` + очистка временных файлов |

---

## Использование в другом проекте

**1. Сборка и линковка UI Kit:**

```bash
make rebuild
```

**2. Подключение в целевом проекте:**

```bash
npm link atoms-uikit
```

**3. Импорт компонентов:**

```ts
import { AtomsButton, AtomsModal, AtomsTable } from 'atoms-uikit';
```

**4. Глобальная регистрация (опционально):**

```ts
import { InitUiComponents, InitUiIcons } from 'atoms-uikit';

app.use(InitUiComponents);
app.use(InitUiIcons);
```

---

## Примечания

- Глобальная npm-линковка не удаляется командами `clean` и `distclean`
- На Windows рекомендуется Git Bash или WSL
