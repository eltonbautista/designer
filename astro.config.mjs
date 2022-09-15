import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://www.eltonbautista.com/",
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind(),
    react(),
    robotsTxt({
      sitemap: false,
    }),
    sitemap(),
    compress(),
    astroImageTools,
  ],
});
