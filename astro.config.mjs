// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { FACE_DOMAIN } from "./src/site-config";

// https://astro.build/config
export default defineConfig({
  site: "https://dimadisaputra.vercel.app",
  integrations: [
    sitemap({
      // Once the domain is live each page belongs to its face's subdomain, so
      // `/de/en/work` has to be published as `https://de.<domain>/en/work` —
      // the same URL a visitor sees, not the build-time path.
      serialize(item) {
        if (!FACE_DOMAIN) return item;
        const path = new URL(item.url).pathname;
        const [, face, ...rest] = path.split("/");
        if (face !== "de" && face !== "se") return undefined; // drop the gateway
        item.url = `https://${face}.${FACE_DOMAIN}/${rest.join("/")}`;
        return item;
      },
    }),
  ],
  // A bare face URL has no language; send it to the default.
  redirects: {
    "/de": "/de/en",
    "/se": "/se/en",
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Geist Mono",
      cssVariable: "--font-mono",
      weights: [400, 500, 700],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-sans",
      weights: [400, 500, 700],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.google(),
      name: "Instrument Serif",
      cssVariable: "--font-serif",
      weights: [400],
      styles: ["normal", "italic"],
      subsets: ["latin"],
    },
  ],
  vite: {
    // Astro and Tailwind each resolve their own copy of vite. The versions
    // match, but TypeScript treats them as distinct types, so the cast is
    // cosmetic — drop it once the installs dedupe.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
