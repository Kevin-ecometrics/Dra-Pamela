import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "http://www.doctorapamelaperez.com/",
  integrations: [
    tailwind(),
    metaTags(),
    partytown(),
    sitemap(),
    robotsTxt(),
    react(),
    astroI18next(),
  ],
});
