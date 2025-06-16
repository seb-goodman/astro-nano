import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import { defineConfig } from "astro/config";
// Import /serverless for a Serverless SSR site
import vercelStatic from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static",
  adapter: vercelStatic(),
});
