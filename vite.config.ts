import { defineConfig } from "vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	plugins: [
		vue(),
		dts({
			rollupTypes: true,
			tsconfigPath: "./tsconfig.app.json",
			include: ["index.ts", "src/**/*.ts", "src/**/*.vue"],
			entryRoot: ".",
		}),
		...(command === "serve" ? [
			AutoImport({
				imports: ["vue"],
				resolvers: [ElementPlusResolver()],
				dts: "./auto-imports.d.ts"
			}),
			Components({
				resolvers: [ElementPlusResolver()]
			})
		] : [])
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
	build: {
		outDir: "dist",
		lib: {
			entry: path.resolve(__dirname, "index.ts"),
			fileName: "index",
			formats: ["es"]
		},
		rollupOptions: {
			external: ["vue", /^element-plus/, /^@element-plus/],
			output: {
				exports: "named",
				globals: {
					vue: "Vue",
					"element-plus": "ElementPlus",
					"@element-plus/icons-vue": "ElementPlusIconsVue"
				}
			}
		},
		sourcemap: true,
		emptyOutDir: true,
		copyPublicDir: false
	},
	css: {
		transformer: "postcss",
	},
	// @ts-ignore
	test: {
		environment: "jsdom",
		pool: "vmThreads",
	},
}));
