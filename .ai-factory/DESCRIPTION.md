# atoms-uikit

## Обзор

Библиотека UI-компонентов на базе Vue 3 и TypeScript, построенная поверх Element Plus. Предоставляет упрощённый API с единообразным префиксом `Atoms` для всех компонентов. Собирается в ES-модуль через Vite и публикуется как переиспользуемый пакет.

## Ключевые особенности

- Более 30 компонентов: Button, Input, Select, Table, Form, Modal, DatePicker и другие
- Единый слой абстракции над Element Plus (компоненты именуются `AtomsXxx`)
- TypeScript-контракты пропсов через интерфейсы (`XxxPropsContract`)
- CSS-переменные через Element Plus design tokens + кастомные SCSS-правила
- Автоматический импорт Element Plus через `unplugin-auto-import` и `unplugin-vue-components` (только в dev-режиме)
- CSS выносится в отдельный файл `dist/style.css`
- Типизация через `vite-plugin-dts` с `rollupTypes: true` → единый `dist/index.d.ts`

## Технический стек

- **Язык:** TypeScript 5
- **Фреймворк:** Vue 3 (`<script setup>` + Composition API)
- **База компонентов:** Element Plus 2.x
- **Иконки:** `@element-plus/icons-vue`
- **Сборщик:** Vite 5 (lib mode, ES)
- **Тесты:** Vitest 2 + `@vue/test-utils` + `@testing-library/vue`
- **Стили:** SCSS + CSS custom properties
- **Утилиты:** Lodash

## Архитектурные заметки

Каждый компонент изолирован в отдельной директории `src/components/<name>/`:
- `Main<Name>.vue` — основной компонент
- `contracts/<Name>PropsContract.ts` — TypeScript-интерфейс пропсов
- `contracts/index.ts` — реэкспорт контрактов
- `index.ts` — публичный API компонента
- `test/Main<Name>.test.ts` — vitest-тесты
- `test/mocks/` — тестовые моки (при необходимости)
- `enums/` или `consts/` — при наличии перечислений/констант

Точка входа библиотеки — `index.ts` в корне (реэкспортирует `uiComponents` и `DateTypeEnum`).
Тест-утилиты (`MountFactory`, `AttributesTrait`, `ElementFinderTrait`, `SlotTrait`) находятся в `src/test-utils/`.

## Архитектура

Подробные архитектурные паттерны и правила описаны в `.ai-factory/ARCHITECTURE.md`.
**Паттерн:** Изолированные компонентные модули (Structured Modules, адаптировано для UI-библиотеки)

## Нефункциональные требования

- **Совместимость:** vue, element-plus, @element-plus/icons-vue — peer dependencies, не включаются в бандл (все под-пути `element-plus/*` перехватываются regex external)
- **Подключение у потребителя:**
  ```ts
  import { AtomsButton, InitUiComponents } from 'atoms-uikit'
  import 'element-plus/dist/index.css'  // потребитель сам подключает EP CSS
  import 'atoms-uikit/clarity.css'      // стили обёрток
  ```
- **Размер:** `dist/index.js` ~79 kB (gzip 16 kB), `dist/style.css` ~19 kB (только стили обёрток)
- **Типы:** единый `dist/index.d.ts` (~169 kB), собранный через `vite-plugin-dts` с `rollupTypes: true`
- **Source maps:** включены в production-сборке
