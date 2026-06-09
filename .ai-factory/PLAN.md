# Git Flow + Commit Convention — Конфигурация

**Дата:** 2026-06-09
**Режим:** Fast

## Настройки

- Testing: нет
- Logging: стандартный
- Docs: нет

## Задачи

### Фаза 1: Git Flow

**Задача 1: Создать ветку `develop`**
- Создать ветку `develop` от `master`
- Запушить `develop` на remote
- Команды:
  ```
  git checkout master
  git pull origin master
  git checkout -b develop
  git push -u origin develop
  ```

**Задача 2: Обновить `config.yaml` под Git Flow**
- Файл: `.ai-factory/config.yaml`
- Изменить `base_branch: master` → `base_branch: develop`
- `branch_prefix: feature/` — оставить (стандарт Git Flow)
- Добавить комментарий о Git Flow: hotfix/ и release/ ветки от master

### Фаза 2: .gitignore

**Задача 3: Обновить `.gitignore`**
- Файл: `.gitignore`
- Добавить:
  ```
  # AI Factory планы (локальные, не для git)
  .ai-factory/plans/
  .ai-factory/PLAN.md

  # Claude Code локальные настройки
  .claude/settings.local.json
  ```

### Фаза 3: Conventional Commits

**Задача 4: Добавить конфигурацию commitlint**
- Установить dev-зависимости: `@commitlint/cli`, `@commitlint/config-conventional`
- Создать `.commitlintrc.json`:
  ```json
  {
    "extends": ["@commitlint/config-conventional"],
    "rules": {
      "type-enum": [2, "always", [
        "feat", "fix", "docs", "style", "refactor",
        "test", "chore", "ci", "perf", "revert"
      ]]
    }
  }
  ```

**Задача 5: Добавить Husky для pre-commit и commit-msg хуков**
- Установить: `husky`
- Инициализировать: `npx husky init`
- Добавить `.husky/commit-msg`:
  ```sh
  npx --no -- commitlint --edit "$1"
  ```
- Добавить `"prepare": "husky"` в `package.json` scripts

## Commit Plan

```
Задача 1-2:  chore: set up git flow with develop branch
Задача 3:    chore: update gitignore with ai-factory plans and local settings
Задача 4-5:  chore: add commitlint and husky for conventional commits
```
