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
});
