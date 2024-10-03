import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: 'https://karthiksivanadiyan.github.io',
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  site: 'https://lexingtonthemes.com',
  integrations: [preact(), tailwind(),  sitemap()]
});