import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tarekchaalan.com/", // Important for GitHub Pages
  build: {
    outDir: "dist", // Output folder
  },
  resolve: {
    alias: {
      "@": "/src", // Alias for easier imports
    },
  },
  server: {
    historyApiFallback: {
      rewrites: [{ from: /^\//, to: "/404.html" }],
    },
  },
});
