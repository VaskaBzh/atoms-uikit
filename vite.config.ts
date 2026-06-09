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
			entry: path.resolve(__dirname, "index.ts"),
			name: "atoms-uikit",
			fileName: (format) => `atoms-uikit.${format}.js`
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				exports: "named",
				globals: {
					vue: "Vue"
				}
			},
			input: {
				main: path.resolve(__dirname, "index.ts")
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