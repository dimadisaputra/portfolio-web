import en from "./en";
import id from "./id";
import { FACE_DOMAIN } from "../site-config";

export const FACES = ["de", "se"] as const;
export const LANGS = ["en", "id"] as const;

export type Face = (typeof FACES)[number];
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "en";
export const DEFAULT_FACE: Face = "de";

export const OTHER_FACE: Record<Face, Face> = { de: "se", se: "de" };
export const OTHER_LANG: Record<Lang, Lang> = { en: "id", id: "en" };

const dicts = { en, id };

/** Locale strings for a language. Resolved at build time — free at runtime. */
export const t = (lang: Lang) => dicts[lang];

export const isFace = (v: unknown): v is Face => FACES.includes(v as Face);
export const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);

/**
 * getStaticPaths cross product for every `[face]/[lang]` route.
 * Astro's built-in `i18n` config assumes the locale is the first path segment;
 * here `[face]` is, because that segment is what the host rewrite consumes in
 * production. So the routing is rolled by hand.
 */
export const facePaths = () =>
  FACES.flatMap((face) => LANGS.map((lang) => ({ params: { face, lang } })));

/**
 * A link within the current face.
 *
 * Locally that is `/de/en/work`. In production the face lives in the hostname
 * and Vercel rewrites `de.example.com/en/work` back to `/de/en/work`, so the
 * markup must NOT contain the `/de` prefix or it would be applied twice.
 */
export const href = (face: Face, lang: Lang, sub = "") =>
  FACE_DOMAIN ? `/${lang}${sub}` : `/${face}/${lang}${sub}`;

/**
 * A link to a specific face — the face switch, the footer cross-link, the
 * gateway. In production this crosses hosts, so it has to be absolute.
 */
export const faceHref = (face: Face, lang: Lang, sub = "") =>
  FACE_DOMAIN
    ? `https://${face}.${FACE_DOMAIN}/${lang}${sub}`
    : `/${face}/${lang}${sub}`;

/**
 * The part of a build-time pathname after `/face/lang`, so the face and
 * language switchers keep you on the page you were already reading.
 * Always operates on the generated path, which keeps the face segment.
 */
export const subPath = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean);
  return parts.length > 2 ? `/${parts.slice(2).join("/")}` : "";
};

/** Absolute canonical URL for a page. */
export const canonical = (
  site: URL | undefined,
  face: Face,
  lang: Lang,
  sub = "",
) =>
  FACE_DOMAIN
    ? `https://${face}.${FACE_DOMAIN}/${lang}${sub}`
    : new URL(`/${face}/${lang}${sub}`, site ?? "http://localhost:4321").href;

export { FACE_DOMAIN };
