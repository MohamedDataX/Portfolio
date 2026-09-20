import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// base = "/Portfolio/" for GitHub Pages project site (repo name).
// Override via VITE_BASE (e.g. "/" for a custom domain or user page).
export default defineConfig({
  base: process.env.VITE_BASE ?? "/Portfolio/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
