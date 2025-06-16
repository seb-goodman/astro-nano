import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static",
  adapter: vercelStatic({
    analytics: true,
    webAnalytics: {
      enabled: true,
    },
  }),
});
