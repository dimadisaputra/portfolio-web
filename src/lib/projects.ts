import { getCollection, type CollectionEntry } from "astro:content";
import { DEFAULT_LANG, FACES, LANGS, type Face, type Lang } from "../i18n";

export type Project = CollectionEntry<"projects">;

/** Entry ids are `<lang>/<slug>`. */
export const langOf = (e: Project) => e.id.split("/")[0] as Lang;
export const slugOf = (e: Project) => e.id.split("/").slice(1).join("/");

/** The framing for this face, falling back to the neutral description. */
export const angleOf = (e: Project, face: Face) =>
  e.data.angle?.[face] ?? e.data.description;

export const yearOf = (e: Project) =>
  (e.data.updatedDate ?? e.data.pubDate).getFullYear();

/**
 * Projects for one face in one language, newest first.
 *
 * A missing translation falls back to the default-language entry rather than
 * disappearing, so a partially translated site degrades instead of showing
 * someone an empty page.
 */
export async function getProjects(face: Face, lang: Lang): Promise<Project[]> {
  const all = await getCollection("projects", ({ data }) => !data.draft);
  const onFace = all.filter((e) => e.data.faces.includes(face));

  const picked = new Map<string, Project>();
  for (const e of onFace) if (langOf(e) === DEFAULT_LANG) picked.set(slugOf(e), e);
  for (const e of onFace) if (langOf(e) === lang) picked.set(slugOf(e), e);

  return [...picked.values()].sort(
    (a, b) => +b.data.pubDate - +a.data.pubDate,
  );
}

/** Every `[face]/[lang]/work/[slug]` combination. */
export async function projectPaths() {
  const paths = [];
  for (const face of FACES) {
    for (const lang of LANGS) {
      const projects = await getProjects(face, lang);
      for (const [n, entry] of projects.entries()) {
        paths.push({
          params: { face, lang, slug: slugOf(entry) },
          props: { entry, next: projects[(n + 1) % projects.length] },
        });
      }
    }
  }
  return paths;
}
