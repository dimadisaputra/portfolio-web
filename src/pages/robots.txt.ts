import type { APIRoute } from "astro";
import { FACE_DOMAIN } from "../site-config";

// Served on every host (the rewrite excludes anything with a file extension),
// so the sitemap reference has to be absolute.
export const GET: APIRoute = ({ site }) => {
  const sitemap = FACE_DOMAIN
    ? `https://${FACE_DOMAIN}/sitemap-index.xml`
    : new URL("sitemap-index.xml", site).href;

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
