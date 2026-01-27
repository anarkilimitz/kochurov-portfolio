import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
	plugins: [
		viteImagemin({
			mozjpeg: { quality: 78 },
			pngquant: { quality: [0.7, 0.85], speed: 4 },
			svgo: true,
			webp: { quality: 78 },
		}),
	],

	build: {
		rollupOptions: {
			input: {
				main: 'index.html',
				case: 'case.html',
			},
		},
	},
});
