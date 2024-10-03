import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
export default defineConfig({
  site: 'https://karthiksivanadiyan.github.io',
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  site: 'https://lexingtonthemes.com',
  integrations: [preact(), tailwind(), sitemap()]
});