import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "text-16px-p-2px": resolve(__dirname, "text-16px,p-2px.html"),
        "text-16px-p-4px": resolve(__dirname, "text-16px,p-4px.html"),
        "text-16px-p-6px": resolve(__dirname, "text-16px,p-6px.html"),
        "text-16px-p-8px": resolve(__dirname, "text-16px,p-8px.html"),
        "text-14px-p-0px": resolve(__dirname, "text-14px,p-0px.html"),
        "text-14px-p-2px": resolve(__dirname, "text-14px,p-2px.html"),
        "text-14px-p-4px": resolve(__dirname, "text-14px,p-4px.html"),
        "text-14px-p-6px": resolve(__dirname, "text-14px,p-6px.html"),
        "text-14px-p-8px": resolve(__dirname, "text-14px,p-8px.html"),
      },
    },
  },
});
