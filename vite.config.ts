import { defineConfig, mergeConfig } from "vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts({
			rollupTypes: true
		}),
		AutoImport({
			imports: ["vue"],
			resolvers: [ElementPlusResolver()],
			// dirs: ['./src'],
			dts: "./auto-imports.d.ts"
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src")
		}
	},
	build: {
		outDir: "dist",
		lib: {
			entry: {
				index: path.resolve(__dirname, "index.ts"),
				button: path.resolve(__dirname, "src/components/button/index.ts"),
				affix: path.resolve(__dirname, "src/components/affix/index.ts"),
				alert: path.resolve(__dirname, "src/components/alert/index.ts"),
				breadcrumbs: path.resolve(__dirname, "src/components/breadcrumbs/index.ts"),
				checkbox: path.resolve(__dirname, "src/components/checkbox/index.ts"),
				collapse: path.resolve(__dirname, "src/components/collapse/index.ts"),
				"date-picker": path.resolve(__dirname, "src/components/date-picker/index.ts"),
				divider: path.resolve(__dirname, "src/components/divider/index.ts"),
				empty: path.resolve(__dirname, "src/components/empty/index.ts"),
				form: path.resolve(__dirname, "src/components/form/index.ts"),
				icon: path.resolve(__dirname, "src/components/icon/index.ts"),
				input: path.resolve(__dirname, "src/components/input/index.ts"),
				menu: path.resolve(__dirname, "src/components/menu/index.ts"),
				modal: path.resolve(__dirname, "src/components/modal/index.ts"),
				pagination: path.resolve(__dirname, "src/components/pagination/index.ts"),
				popover: path.resolve(__dirname, "src/components/popover/index.ts"),
				progress: path.resolve(__dirname, "src/components/progress/index.ts"),
				radio: path.resolve(__dirname, "src/components/radio/index.ts"),
				select: path.resolve(__dirname, "src/components/select/index.ts"),
				skeleton: path.resolve(__dirname, "src/components/skeleton/index.ts"),
				statistic: path.resolve(__dirname, "src/components/statistic/index.ts"),
				step: path.resolve(__dirname, "src/components/step/index.ts"),
				tab: path.resolve(__dirname, "src/components/tab/index.ts"),
				table: path.resolve(__dirname, "src/components/table/index.ts"),
				tag: path.resolve(__dirname, "src/components/tag/index.ts"),
				title: path.resolve(__dirname, "src/components/title/index.ts"),
				tooltip: path.resolve(__dirname, "src/components/tooltip/index.ts"),
				tour: path.resolve(__dirname, "src/components/tour/index.ts"),
				tree: path.resolve(__dirname, "src/components/tree/index.ts"),
			},
			formats: ["es"]
		},
		rollupOptions: {
			external: ["vue", "element-plus", "@element-plus/icons-vue"],
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
		emptyOutDir: true
	},
	css: {
		transformer: "postcss",
		// preprocessorOptions: {
		// 	scss: {
		// 		additionalData: `
		// 		  @use "src/style.css";
		// 		`
		// 	}
		// }
	},
	// @ts-ignore
	test: {
		environment: 'jsdom',
		pool: "vmThreads",
	},
});