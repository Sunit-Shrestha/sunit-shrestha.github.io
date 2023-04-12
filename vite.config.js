import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
export default defineConfig({
  root: "src",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
      },
    },
  },
});
