import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/site.config.ts";

// Static output: plain HTML files, hostable on Cloudflare Pages, Netlify, Vercel or any server.
export default defineConfig({
  site: site.url,
  output: "static",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
