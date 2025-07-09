import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // ✅ Add this line (MUST match your GitHub repo name)
  plugins: [react(), tailwindcss()],
});
