import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";

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
  ],
});
