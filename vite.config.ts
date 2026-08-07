import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: {
        entry: "server",
        // Tell Nitro to output a Vercel-compatible bundle under .vercel/output
        preset: "vercel",
      },
    }),
    viteReact(),
  ],
});
