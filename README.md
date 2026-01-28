# Atoms UI Kit

UI Kit на базе **Vue 3 + TypeScript + Vite**, предназначенный для переиспользования в других проектах через `npm link`.

Проект использует Vue 3 `<script setup>` SFC и собирается в виде готового npm-пакета.

---

## Требования

- Node.js ≥ 18
- npm ≥ 9
- GNU Make
    - Windows: Git Bash или WSL

---

## Установка

```bash
  npm install
```

## Makefile

В проекте используется Makefile для упрощения сборки, очистки и npm-линковки UI Kit.

Все команды выполняются из корня проекта.

---

### `make build`

Собирает UI Kit локально.

Что делает:
- устанавливает зависимости (`npm install`)
- запускает сборку (`npm run build`)
- результат сохраняется в `dist/`

```bash
  make build
```
---

### `make link`

Регистрирует пакет в глобальной npm-линковке.

```bash
  make link
```
Или
```bash
  npm link atoms-uikit
```
---

### `make unlink`

Удаляет глобальную npm-линковку пакета (если она существует).

```bash
  make unlink
```

Используется при полной очистке окружения или отладке линковки.

---

### `make clean`

Удаляет локальные артефакты сборки, не затрагивая глобальную npm-линковку.

Что чистит:
- `dist/`
- `node_modules/`
- `package-lock.json`

```bash
  make clean
```

---

### `make rebuild`

Полный цикл:
1. сборка
2. глобальная npm-линковка

```bash
  make rebuild
```

Эквивалентно:

```bash
  make build
  make link
```

---

### `make distclean`

Расширенный rebuild:
- сборка
- линковка
- удаление временных файлов

Глобальная npm-линковка сохраняется.

```bash
  make distclean
```

---

### Использование в другом проекте

1. Собрать и залинковать UI Kit:

```bash
  make rebuild
```

2. В целевом проекте:

```bash
  npm link atoms-uikit
```

3. Использование компонентов:

```ts
import { Button, Modal } from 'atoms-uikit';
```

---

### Разработка

Запуск dev-сервера:

```bash
  npm run dev
```

---

### Сборка

```bash
  npm run build
```

Результат сборки:

`dist/`

---

### Стек

- Vue 3
- TypeScript
- Vite
- Element Plus Ui
- npm link
- Makefile

---

### Примечания

- Глобальная npm-линковка хранится в npm-каталоге и не удаляется командами `clean` и `distclean`
- На Windows рекомендуется использовать Git Bash или WSL
