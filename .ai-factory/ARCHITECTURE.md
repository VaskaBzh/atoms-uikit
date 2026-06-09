# Архитектура: Изолированные компонентные модули

## Обзор

`atoms-uikit` следует паттерну **изолированных компонентных модулей** — каждый UI-компонент является полностью самодостаточным модулем со своим публичным API, TypeScript-контрактами, стилями и тестами. Это адаптация принципов Structured Modules для библиотеки компонентов: вместо бизнес-модулей (User, Order) — UI-компоненты (Button, Input, Select).

Паттерн выбран, поскольку:
- Каждый компонент независим и не зависит от других компонентов (за исключением явного использования дочерних компонентов через импорт)
- Единый слой абстракции над Element Plus требует чёткого разграничения: что управляется библиотекой, а что передаётся в El-компоненты
- Средний размер проекта (30+ компонентов) требует структуры, которая не усложняется при добавлении новых компонентов

## Обоснование выбора

- **Тип проекта:** Библиотека UI-компонентов (переиспользуемый пакет)
- **Стек:** Vue 3 + TypeScript + Element Plus
- **Ключевой фактор:** Высокая независимость компонентов + необходимость в единообразном публичном API (`AtomsXxx`)

## Структура директорий

```
src/
├── components/
│   ├── index.ts                    # Регистрирует все компоненты как AtomsXxx
│   │
│   ├── <component-name>/           # ── КОМПОНЕНТНЫЙ МОДУЛЬ ──
│   │   ├── Main<Name>.vue          # Реализация компонента
│   │   ├── index.ts                # Публичный API модуля
│   │   ├── contracts/              # TypeScript-контракты (интерфейсы пропсов)
│   │   │   ├── <Name>PropsContract.ts
│   │   │   └── index.ts
│   │   ├── enums/                  # Перечисления (только при необходимости)
│   │   │   ├── <Name>Enum.ts
│   │   │   └── index.ts
│   │   ├── consts/                 # Константы (только при необходимости)
│   │   │   └── <Name>Const.ts
│   │   ├── styles/                 # SCSS-файлы (только при необходимости)
│   │   │   └── <name>.scss
│   │   └── test/                   # Тесты Vitest
│   │       ├── Main<Name>.test.ts
│   │       └── mocks/              # Тестовые данные (только при необходимости)
│   │           ├── <Name>Mock.ts
│   │           └── index.ts
│   │
│   └── [остальные компоненты...]
│
├── types/                          # Общие типы (cross-cutting)
│   ├── ColorTypes.ts               # ColorType
│   ├── SizeTypes.ts                # SizeType
│   ├── FormTypes.ts
│   ├── TreeTypes.ts
│   ├── UniversalTypes.ts
│   └── index.ts
│
├── composables/                    # Vue composables (cross-cutting)
│   ├── theme.ts                    # isDark
│   └── index.ts
│
└── test-utils/                     # Утилиты тестирования (cross-cutting)
    ├── factories/
    │   └── MountFactory.ts
    ├── traits/
    │   ├── AttributesTrait.ts
    │   ├── ElementFinderTrait.ts
    │   └── SlotTrait.ts
    └── index.ts
```

## Правила зависимостей

Зависимости направлены от внешнего к внутреннему:

- ✅ `src/components/index.ts` → импортирует из `<component>/index.ts`
- ✅ `<component>/Main<Name>.vue` → импортирует из `<component>/contracts`
- ✅ `<component>/Main<Name>.vue` → импортирует из `src/types`, `src/composables`
- ✅ `<component>/Main<Name>.vue` → явно импортирует дочерние компоненты (`MainIcon`)
- ✅ `<component>/test/*.test.ts` → импортирует из `src/test-utils`
- ❌ `<component>/contracts` → НЕ импортирует из других компонентов
- ❌ `<component>/index.ts` → НЕ импортирует из `src/components/index.ts` (нет циклов)
- ❌ `src/types` → НЕ импортирует из компонентов
- ❌ `src/composables` → НЕ импортирует из компонентов

## Взаимодействие модулей

- Компоненты **не зависят друг от друга** через `src/components/index.ts` — только прямые импорты
- Если компонент использует другой (например, Button использует Icon), он импортирует его напрямую: `import { MainIcon } from "@/components/icon"`
- Общие типы и composables живут в `src/types/` и `src/composables/` — они кросс-компонентные
- Регистрация всех компонентов с `AtomsXxx`-префиксом происходит только в `src/components/index.ts`

## Ключевые принципы

1. **Изоляция модуля:** Каждый компонент — самостоятельная единица. Добавление нового компонента не требует изменений в существующих.
2. **Явный публичный API:** Каждый модуль экспортирует только через `index.ts`. Импорт напрямую из `Main<Name>.vue` — антипаттерн.
3. **Контракты как единственная истина:** Интерфейс `<Name>PropsContract` — источник правды о пропсах. `withDefaults(defineProps<Contract>(), {...})` в компоненте.
4. **Тонкий слой абстракции:** Компоненты пробрасывают пропсы в El-компоненты, добавляя только необходимую логику (префикс `is` для булевых пропсов, slot-поддержку, icon-позиционирование).
5. **CSS custom properties:** Кастомизация через CSS-переменные Element Plus, переопределяемые через `:global()` внутри `<style scoped>`.

## Примеры кода

### Анатомия нового компонента

```typescript
// src/components/badge/contracts/BadgePropsContract.ts
import { ColorType } from "@/types";

export interface BadgePropsContract {
    value?: string | number;
    type?: ColorType;
    isDot?: boolean;
    isHidden?: boolean;
    max?: number;
}
```

```typescript
// src/components/badge/index.ts
export { default as MainBadge } from "./MainBadge.vue";
export type { BadgePropsContract } from "./contracts";
```

```vue
<!-- src/components/badge/MainBadge.vue -->
<template>
    <el-badge
        :value="value"
        :type="type"
        :is-dot="isDot"
        :hidden="isHidden"
        :max="max"
    >
        <slot />
    </el-badge>
</template>

<script setup lang="ts">
import { BadgePropsContract } from "./contracts";

withDefaults(
    defineProps<BadgePropsContract>(),
    {
        type: "primary",
        isDot: false,
        isHidden: false,
    }
);
</script>
```

### Регистрация компонента в публичном API

```typescript
// src/components/index.ts — добавить в uiComponents
import { MainBadge } from "./badge";

export const uiComponents = {
    // ...существующие компоненты...
    AtomsBadge: MainBadge,
}
```

### Тест нового компонента

```typescript
// src/components/badge/test/MainBadge.test.ts
import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";

const componentName = "badge";

describe(`check ${componentName} props`, () => {
    it("provided props", () => {
        const value = 5;
        const type = "danger";
        const isDot = true;

        const wrapper = MountFactory.constructMount(componentName, true, {
            props: { value, type, isDot }
        });

        const elBadge = ElementFinderTrait.findComponentByName(wrapper, "ElBadge");
        expect(AttributesTrait.getProp(elBadge, "value")).toBe(value);
        expect(AttributesTrait.getProp(elBadge, "type")).toBe(type);
        expect(AttributesTrait.getProp(elBadge, "isDot")).toBe(isDot);
    });

    it("default props", () => {
        const wrapper = MountFactory.constructMount(componentName, true);
        expect(AttributesTrait.getProp(wrapper, "type")).toBe("primary");
        expect(AttributesTrait.getProp(wrapper, "isDot")).toBe(false);
    });
});
```

## Антипаттерны

- ❌ **Импорт не через index.ts:** `import MainButton from "@/components/button/MainButton.vue"` — используй `import { MainButton } from "@/components/button"`
- ❌ **Логика в contracts:** Интерфейсы пропсов должны содержать только типы, без default-значений и вычислений
- ❌ **Прямое использование El-компонентов снаружи:** Потребители библиотеки должны использовать `AtomsXxx`, а не `ElXxx` напрямую
- ❌ **Кросс-компонентная зависимость через index:** Если Button нужен Icon, импортируй из `@/components/icon`, не из `@/components`
- ❌ **Стили без CSS custom properties:** Хардкод цветов/размеров вместо использования `--el-*` переменных
- ❌ **Булевые пропсы без префикса is:** `disable` вместо `isDisable`, `loading` вместо `isLoading`
