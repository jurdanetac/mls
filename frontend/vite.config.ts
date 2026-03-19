import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // https://vite.dev/guide/static-deploy#github-pages/
  base: "/mls/",
  plugins: [react()],
});
