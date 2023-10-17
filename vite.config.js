import { resolve } from "path";
import { defineConfig } from "vite";

/**
 * Vite config
 */

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.tsx"),
			name: "formx",
			fileName: "index",
		},
		rollupOptions: {
			external: ["react"],
		},
	},
});
