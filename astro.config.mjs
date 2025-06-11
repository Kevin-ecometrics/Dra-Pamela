import { defineConfig } from "astro/config";
import metaTags from "astro-meta-tags";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://www.doctorapamelaperez.com/",
  integrations: [metaTags(), partytown(), sitemap(), robotsTxt(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});