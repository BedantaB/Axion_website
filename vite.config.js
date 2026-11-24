import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Multi-page build: the homepage plus one static HTML page per entity, so
// /realty/, /interiors/, /infrastructure/, /fincorp/, /about/, /board-of-directors/ and /leadership-team/ work on any static host without rewrites.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        realty: path.resolve(__dirname, "realty/index.html"),
        interiors: path.resolve(__dirname, "interiors/index.html"),
        infrastructure: path.resolve(__dirname, "infrastructure/index.html"),
        fincorp: path.resolve(__dirname, "fincorp/index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        board: path.resolve(__dirname, "board-of-directors/index.html"),
        leadership: path.resolve(__dirname, "leadership-team/index.html"),
      },
    },
  },
});
