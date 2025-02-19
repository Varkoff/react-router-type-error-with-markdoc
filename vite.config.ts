import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
// import babel from "vite-plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";

const MODE = process.env.NODE_ENV;

export default defineConfig({
	build: {
		cssMinify: MODE === "production",
		sourcemap: true,
	},
	server: {
		open: true,
		port: 3000,
	},

	plugins: [reactRouter(), tsconfigPaths()],
});
