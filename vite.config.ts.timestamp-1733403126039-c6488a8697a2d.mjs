// vite.config.ts
import { defineConfig } from "file:///mnt/shared/git-repos/stormwind/src/opt/atoms-uikit/node_modules/vite/dist/node/index.js";
import { ElementPlusResolver } from "file:///mnt/shared/git-repos/stormwind/src/opt/atoms-uikit/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///mnt/shared/git-repos/stormwind/src/opt/atoms-uikit/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///mnt/shared/git-repos/stormwind/src/opt/atoms-uikit/node_modules/unplugin-vue-components/dist/vite.js";
import dts from "file:///mnt/shared/git-repos/stormwind/src/opt/atoms-uikit/node_modules/vite-plugin-dts/dist/index.mjs";
import cssInjectedByJsPlugin from "file:///mnt/shared/git-repos/stormwind/src/opt/atoms-uikit/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import vue from "file:///mnt/shared/git-repos/stormwind/src/opt/atoms-uikit/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "/mnt/shared/git-repos/stormwind/src/opt/atoms-uikit";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin({ useStrictCSP: true, relativeCSSInjection: false }),
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
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "index.ts"),
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
        main: path.resolve(__vite_injected_original_dirname, "index.ts")
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  css: {
    transformer: "postcss",
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/style.css"; 
        `
      }
    }
  },
  // @ts-ignore
  test: {
    environment: "jsdom",
    pool: "vmThreads"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L3NoYXJlZC9naXQtcmVwb3Mvc3Rvcm13aW5kL3NyYy9vcHQvYXRvbXMtdWlraXRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvc2hhcmVkL2dpdC1yZXBvcy9zdG9ybXdpbmQvc3JjL29wdC9hdG9tcy11aWtpdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L3NoYXJlZC9naXQtcmVwb3Mvc3Rvcm13aW5kL3NyYy9vcHQvYXRvbXMtdWlraXQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIG1lcmdlQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tY3NzLWluamVjdGVkLWJ5LWpzXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHR2dWUoKSxcblx0XHRjc3NJbmplY3RlZEJ5SnNQbHVnaW4oeyB1c2VTdHJpY3RDU1A6IHRydWUsIHJlbGF0aXZlQ1NTSW5qZWN0aW9uOiBmYWxzZSB9KSxcblx0XHRkdHMoe1xuXHRcdFx0cm9sbHVwVHlwZXM6IHRydWVcblx0XHR9KSxcblx0XHRBdXRvSW1wb3J0KHtcblx0XHRcdGltcG9ydHM6IFtcInZ1ZVwiXSxcblx0XHRcdHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG5cdFx0XHQvLyBkaXJzOiBbJy4vc3JjJ10sXG5cdFx0XHRkdHM6IFwiLi9hdXRvLWltcG9ydHMuZC50c1wiXG5cdFx0fSksXG5cdFx0Q29tcG9uZW50cyh7XG5cdFx0XHRyZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXG5cdFx0fSlcblx0XSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHRcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKVxuXHRcdH1cblx0fSxcblx0YnVpbGQ6IHtcblx0XHRvdXREaXI6IFwiZGlzdFwiLFxuXHRcdGxpYjoge1xuXHRcdFx0ZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiaW5kZXgudHNcIiksXG5cdFx0XHRuYW1lOiBcImF0b21zLXVpa2l0XCIsXG5cdFx0XHRmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGF0b21zLXVpa2l0LiR7Zm9ybWF0fS5qc2Bcblx0XHR9LFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdGV4dGVybmFsOiBbXCJ2dWVcIl0sXG5cdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0ZXhwb3J0czogXCJuYW1lZFwiLFxuXHRcdFx0XHRnbG9iYWxzOiB7XG5cdFx0XHRcdFx0dnVlOiBcIlZ1ZVwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRpbnB1dDoge1xuXHRcdFx0XHRtYWluOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImluZGV4LnRzXCIpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzb3VyY2VtYXA6IHRydWUsXG5cdFx0ZW1wdHlPdXREaXI6IHRydWVcblx0fSxcblx0Y3NzOiB7XG5cdFx0dHJhbnNmb3JtZXI6IFwicG9zdGNzc1wiLFxuXHRcdHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcblx0XHRcdHNjc3M6IHtcblx0XHRcdFx0YWRkaXRpb25hbERhdGE6IGBcblx0XHRcdFx0ICBAaW1wb3J0IFwic3JjL3N0eWxlLmNzc1wiOyBcblx0XHRcdFx0YFxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0Ly8gQHRzLWlnbm9yZVxuXHR0ZXN0OiB7XG5cdFx0ZW52aXJvbm1lbnQ6ICdqc2RvbScsXG5cdFx0cG9vbDogXCJ2bVRocmVhZHNcIixcblx0fSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsU0FBUyxvQkFBaUM7QUFDclgsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sU0FBUztBQUNoQixZQUFZLFVBQVU7QUFQdEIsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsSUFBSTtBQUFBLElBQ0osc0JBQXNCLEVBQUUsY0FBYyxNQUFNLHNCQUFzQixNQUFNLENBQUM7QUFBQSxJQUN6RSxJQUFJO0FBQUEsTUFDSCxhQUFhO0FBQUEsSUFDZCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVixTQUFTLENBQUMsS0FBSztBQUFBLE1BQ2YsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUE7QUFBQSxNQUVqQyxLQUFLO0FBQUEsSUFDTixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVixXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNsQyxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sS0FBVSxhQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNyQztBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNKLE9BQVksYUFBUSxrQ0FBVyxVQUFVO0FBQUEsTUFDekMsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsZUFBZSxNQUFNO0FBQUEsSUFDNUM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNkLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1IsS0FBSztBQUFBLFFBQ047QUFBQSxNQUNEO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTixNQUFXLGFBQVEsa0NBQVcsVUFBVTtBQUFBLE1BQ3pDO0FBQUEsSUFDRDtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNKLGFBQWE7QUFBQSxJQUNiLHFCQUFxQjtBQUFBLE1BQ3BCLE1BQU07QUFBQSxRQUNMLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxNQUdqQjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUE7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNMLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxFQUNQO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
