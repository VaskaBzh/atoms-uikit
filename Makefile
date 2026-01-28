#   build     - собрать uikit (локально)
#   link      - зарегистрировать uikit в глобальной npm-линковке
#   unlink    - удалить глобальную линковку (опционально)
#   clean     - удалить артефакты сборки (не затрагивает линковку)
#   rebuild   - полный цикл: сборка + линковка (без удаления)
#   distclean - сборка + линковка + удаление временных файлов
#   TODO: need to check

.PHONY: build link unlink clean rebuild distclean

# Пути и настройки
SRC_DIR = .
BUILD_DIR = dist
PACKAGE_NAME = atoms-uikit

build:
	@echo "Собираем $(PACKAGE_NAME)..."
	npm install
	npm run build
	@echo "Сборка завершена: $(BUILD_DIR)/"

link:
	@echo "Регистрируем $(PACKAGE_NAME) в глобальной npm-линковке..."
	npm link
	@echo "Теперь можно использовать 'npm link $(PACKAGE_NAME)' в других проектах"

unlink:
	@echo "Удаляем глобальную линковку $(PACKAGE_NAME)..."
	npm unlink $(PACKAGE_NAME) || echo "Линковка не найдена или уже удалена"
	@echo "Глобальная линковка удалена"

clean:
	@echo "Очищаем артефакты сборки..."
	rm -rf $(BUILD_DIR) node_modules package-lock.json
	@echo "Очистка завершена"

rebuild: build link
	@echo "$(PACKAGE_NAME) собран и зарегистрирован для линковки"

distclean: rebuild
	@echo "Удаляем временные файлы (кроме глобальной линковки)..."
	# Не удаляем глобальную линковку — она хранится в npm-глобальном каталоге
	rm -rf node_modules package-lock.json
	@echo "Временные файлы удалены. Линковка сохранена."