/**
 * Production apex domain. Each face is served from a subdomain of it:
 * `de.<domain>` and `se.<domain>`.
 *
 * Leave as `null` until the domain is actually bought and pointed at Vercel.
 * While it is null the site is path-based (`/de/en/...`) and every canonical,
 * hreflang and internal link stays on the Vercel URL — pointing them at a
 * domain that does not resolve would be worse than not having them.
 *
 * Setting this one value flips the whole site over:
 *   - internal links drop the `/de` prefix, because the host rewrite adds it
 *   - the face switch becomes an absolute cross-host link
 *   - canonicals and the sitemap move to the subdomains
 *
 * It must be set together with the rewrites in `vercel.json`, never alone.
 */
export const FACE_DOMAIN: string | null = null;
