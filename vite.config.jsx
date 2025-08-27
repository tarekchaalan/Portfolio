import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
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
  server: {
    historyApiFallback: {
      rewrites: [{ from: /^\//, to: "/404.html" }],
    },
  },
});
