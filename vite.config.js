import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置后，Vant各组件才生效
			styleImport({
				resolves: [VantResolve()],
				libs: [
					{
					  libraryName: 'vant',
					  esModule: true,
					  resolveStyle: (name) => `../es/${name}/style`
					}
				 ]
			}),

  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8888/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
