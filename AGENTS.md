# AGENTS.md

> Этот файл — структурная карта проекта для AI-агентов и новых разработчиков. Обновляйте при значительных изменениях структуры.

## Обзор проекта

`atoms-uikit` — библиотека UI-компонентов на базе Vue 3, построенная поверх Element Plus. Предоставляет упрощённый API с единым префиксом `Atoms` для более чем 30 компонентов и публикуется как ES/UMD-модуль.

## Технический стек

- **Язык:** TypeScript 5
- **Фреймворк:** Vue 3 (`<script setup>` + Composition API)
- **База компонентов:** Element Plus 2.x
- **Сборщик:** Vite 5 (lib mode)
- **Тесты:** Vitest 2 + `@vue/test-utils`
- **Стили:** SCSS + CSS custom properties

## Структура проекта

```
atoms-uikit/
├── index.ts                    # Точка входа библиотеки (реэкспорт uiComponents)
├── src/
│   ├── App.vue                 # Демо-приложение для разработки
│   ├── components/             # Все UI-компоненты
│   │   ├── index.ts            # Реэкспорт всех компонентов (uiComponents, TestComponentsEnum)
│   │   ├── button/             # Пример структуры компонента:
│   │   │   ├── MainButton.vue          # Компонент
│   │   │   ├── index.ts                # Публичный API
│   │   │   ├── contracts/              # TypeScript-интерфейсы пропсов
│   │   │   │   ├── ButtonPropsContract.ts
│   │   │   │   └── index.ts
│   │   │   └── test/                   # Vitest-тесты
│   │   │       └── MainButton.test.ts
│   │   ├── [affix, alert, breadcrumbs, checkbox, collapse, date-picker, ...]
│   │   └── [divider, empty, form, icon, input, menu, modal, pagination, ...]
│   ├── types/                  # Общие TypeScript-типы
│   │   ├── ColorTypes.ts       # ColorType (primary, success, warning, danger, info)
│   │   ├── SizeTypes.ts        # SizeType (large, default, small)
│   │   ├── FormTypes.ts        # Типы валидации форм
│   │   ├── TreeTypes.ts        # Тип узла дерева
│   │   ├── UniversalTypes.ts   # UniversalObjectType
│   │   └── index.ts
│   ├── composables/            # Vue composables
│   │   ├── theme.ts            # isDark — реактивное состояние темы
│   │   └── index.ts
│   └── test-utils/             # Утилиты для тестирования компонентов
│       ├── factories/
│       │   └── MountFactory.ts # MountFactory.constructMount()
│       ├── traits/
│       │   ├── AttributesTrait.ts   # getProp(), getAttribute()
│       │   ├── ElementFinderTrait.ts # findComponentByName()
│       │   └── SlotTrait.ts
│       └── index.ts
├── dist/                       # Собранные артефакты (gitignored)
├── .ai-factory/                # AI Factory конфигурация
│   ├── config.yaml             # Настройки AI Factory
│   ├── DESCRIPTION.md          # Описание стека и архитектуры
│   ├── ARCHITECTURE.md         # Архитектурные паттерны
│   └── rules/
│       └── base.md             # Базовые соглашения кодовой базы
└── .claude/skills/             # Установленные AI-skills
    ├── vue/                    # Vue 3 паттерны (antfu)
    ├── vitest/                 # Vitest паттерны (antfu)
    └── vue-best-practices/     # Vue best practices (hyf0)
```

## Ключевые точки входа

| Файл | Назначение |
|------|-----------|
| `index.ts` | Точка входа библиотеки — реэкспортирует `uiComponents` и типы |
| `src/components/index.ts` | Регистрирует все компоненты как `AtomsXxx` |
| `src/types/index.ts` | Публичные типы: `ColorType`, `SizeType`, `TreeType`, `UniversalObjectType` |
| `src/test-utils/index.ts` | Test utilities: `MountFactory`, трейты |
| `vite.config.ts` | Конфигурация сборки (lib mode, alias `@` → `./src`) |
| `package.json` | Метаданные пакета, точки экспорта ES/UMD/types |

## Документация

| Документ | Путь | Описание |
|----------|------|---------|
| README | README.md | Документация и примеры использования |
| AI-описание | .ai-factory/DESCRIPTION.md | Стек, архитектура, нефункциональные требования |
| Архитектура | .ai-factory/ARCHITECTURE.md | Архитектурные паттерны и правила |

## AI-контекст файлы

| Файл | Назначение |
|------|-----------|
| AGENTS.md | Структурная карта для AI-агентов (этот файл) |
| .ai-factory/DESCRIPTION.md | Детальное описание проекта и стека |
| .ai-factory/ARCHITECTURE.md | Архитектурные решения и паттерны |
| .ai-factory/rules/base.md | Автообнаруженные соглашения кодовой базы |

## Правила для агентов

- Декомпозируй shell-команды: не объединяй независимые шаги через `&&`
  - Неверно: `git checkout master && git pull`
  - Верно: сначала `git checkout master`, затем `git pull origin master`
- Новые компоненты следуют структуре: `src/components/<name>/Main<Name>.vue` + `contracts/<Name>PropsContract.ts` + `test/Main<Name>.test.ts`
- Булевые пропсы используют префикс `is` (isDisable, isLoading, isRound)
- Экспортируемые компоненты именуются с префиксом `Atoms` в `uiComponents`
