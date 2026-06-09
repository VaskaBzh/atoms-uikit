# Базовые правила проекта

> Автоопределённые соглашения из анализа кодовой базы. Редактируйте по необходимости.

## Соглашения об именовании

- **Файлы компонентов:** PascalCase с префиксом `Main` → `MainButton.vue`, `MainInput.vue`
- **Файлы контрактов:** PascalCase + суффикс `PropsContract` → `ButtonPropsContract.ts`
- **Файлы типов:** PascalCase + суффикс `Types` или `Type` → `ColorTypes.ts`, `SizeTypes.ts`
- **Файлы enum:** PascalCase + суффикс `Enum` → `DateTypeEnum.ts`
- **Файлы констант:** PascalCase + суффикс `Const` → `ButtonSelectorConst.ts`
- **Переменные и пропсы:** camelCase
- **Булевые пропсы:** префикс `is` → `isDisable`, `isLoading`, `isRound`
- **CSS-классы:** kebab-case с BEM-нотацией → `button`, `button_icon`, `button_icon-right`
- **Экспортируемые компоненты:** префикс `Atoms` → `AtomsButton`, `AtomsInput`

## Структура модулей

- `src/components/<name>/` — каждый компонент в отдельной директории
- `src/components/<name>/contracts/` — TypeScript-интерфейсы пропсов
- `src/components/<name>/test/` — vitest-тесты
- `src/components/<name>/test/mocks/` — тестовые моки
- `src/components/<name>/enums/` — перечисления (если есть)
- `src/components/<name>/consts/` — константы (если есть)
- `src/types/` — общие типы (`ColorType`, `SizeType`, `UniversalObjectType`)
- `src/composables/` — Vue composables (например, `isDark` для темы)
- `src/test-utils/` — утилиты тестирования (`MountFactory`, трейты)

## Обработка ошибок

- Валидация пропсов через TypeScript-интерфейсы (`withDefaults(defineProps<Contract>(), {...})`)
- Нет runtime-обработки ошибок внутри компонентов (делегируется вызывающей стороне)

## Тестирование

- Фреймворк: Vitest 2 + `@vue/test-utils`
- Паттерн: `MountFactory.constructMount(componentName, useGlobal, options)`
- Трейты: `AttributesTrait`, `ElementFinderTrait`, `SlotTrait`
- Структура тестов: `describe('check X props', ...)`, `describe('check X slots', ...)`
- Имена тест-файлов: `Main<Name>.test.ts` в `test/` рядом с компонентом

## Стили

- SCSS с `scoped`-стилями в `.vue`-файлах
- CSS custom properties Element Plus переопределяются через `:global()` в scoped-блоке
- Размеры через rem-единицы
- Отдельные `.scss`-файлы в `styles/` при необходимости (например, `input.scss`)
