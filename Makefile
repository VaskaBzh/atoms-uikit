#   build     - установить зависимости и собрать uikit
#   clean     - удалить артефакты сборки
#   rebuild   - clean + build

.PHONY: build clean rebuild

# Пути и настройки
SRC_DIR = .
BUILD_DIR = dist
PACKAGE_NAME = atoms-uikit

build:
	@echo "Собираем $(PACKAGE_NAME)..."
	npm install
	npm run build
	@echo "Сборка завершена: $(BUILD_DIR)/"

clean:
	@echo "Очищаем артефакты сборки..."
	rm -rf $(BUILD_DIR) node_modules package-lock.json
	@echo "Очистка завершена"

rebuild: clean build
	@echo "$(PACKAGE_NAME) пересобран"