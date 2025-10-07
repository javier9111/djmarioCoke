// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://javier9111.github.io', // o tu dominio personalizado
  base: '/djmarioCoke/', // Si usas repositorio, no olvides la barra final
  outDir: './dist',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
    vite: {
        plugins: [tailwindcss()],
      },
});
