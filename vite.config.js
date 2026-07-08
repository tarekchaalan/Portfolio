import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// NOTE: must be named vite.config.js — Vite does not recognize .jsx config
// files and silently falls back to an all-defaults config.
export default defineConfig({
  plugins: [react()],
  base: "/", // Fixed: should be "/" for custom domain
  build: {
    outDir: "dist", // Output folder
  },
  resolve: {
    alias: {
      "@": "/src", // Alias for easier imports
    },
  },
  esbuild: {
    jsx: "automatic",
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
});
