// @ts-check
import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio-kathe.netlify.app/",
  integrations: [
    react(), 
    tailwind(),
    sitemap({
      customPages: [
        'https://portfolio-kathe.netlify.app/projects/erp-carrocerias-borgert',
        'https://portfolio-kathe.netlify.app/projects/portfolio-website',
        'https://portfolio-kathe.netlify.app/projects/order-management',
        'https://portfolio-kathe.netlify.app/projects/quotes-app',
      ],
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-AR',
        },
      },
    })
  ],
  image: {
    // Configuración para optimización automática de imágenes
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: 268402689, // ~16K x 16K
      }
    },
    // Formatos de salida preferidos
    domains: [],
    remotePatterns: [],
  },
  // Optimización de build
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      minify: true,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `images/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          manualChunks: (id) => {
            // Separar vendors de app code
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
  },
});
