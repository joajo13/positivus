import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@Components": path.resolve(__dirname, "./src/components"),
      "@Services": path.resolve(__dirname, "./src/services"),
      "@Pages": path.resolve(__dirname, "./src/pages"),
      "@Utils": path.resolve(__dirname, "./src/utils"),
    },
  },
})
