import fs from "node:fs/promises";
import { createRequire } from "node:module";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import type { APIRoute } from "astro";
import { facePaths, t, type Face, type Lang } from "../../../i18n";
import { NAME } from "../../../data/site";

export const getStaticPaths = facePaths;

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) =>
  fs.readFile(require.resolve(`${pkg}/files/${file}`));

/** Same palette as `global.css`. Satori cannot read CSS variables. */
const THEME = {
  de: { bg: "#0B0B0B", fg: "#E6E6E1", accent: "#C8FF4D", muted: "#6E7175" },
  se: { bg: "#F4F1EA", fg: "#141210", accent: "#FF3B14", muted: "#8A857C" },
} satisfies Record<Face, Record<string, string>>;

/** Minimal element helper — avoids pulling a JSX runtime into a .ts file. */
const h = (type: string, style: Record<string, unknown>, children?: unknown) =>
  ({ type, props: { style, children } }) as never;

export const GET: APIRoute = async ({ params }) => {
  const face = params.face as Face;
  const lang = params.lang as Lang;
  const c = THEME[face];
  const me = t(lang).faces[face];

  const [mono, monoBold, serif] = await Promise.all([
    font("@fontsource/geist-mono", "geist-mono-latin-400-normal.woff"),
    font("@fontsource/geist-mono", "geist-mono-latin-500-normal.woff"),
    font("@fontsource/instrument-serif", "instrument-serif-latin-400-normal.woff"),
  ]);

  const display = face === "de" ? "Geist Mono" : "Instrument Serif";

  const svg = await satori(
    h(
      "div",
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: 72,
        backgroundColor: c.bg,
        fontFamily: "Geist Mono",
      },
      [
        h(
          "div",
          {
            display: "flex",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: c.accent,
          },
          `${me.kicker} — ${me.role}`,
        ),
        h("div", { display: "flex", flexDirection: "column", gap: 28 }, [
          h(
            "div",
            {
              display: "flex",
              fontFamily: display,
              fontSize: face === "de" ? 104 : 124,
              fontWeight: 500,
              letterSpacing: face === "de" ? -4 : -2,
              lineHeight: 1,
              color: c.fg,
              textTransform: face === "de" ? "uppercase" : "none",
            },
            NAME,
          ),
          h(
            "div",
            {
              display: "flex",
              maxWidth: 900,
              fontSize: 26,
              lineHeight: 1.45,
              color: c.muted,
            },
            me.statement,
          ),
        ]),
        h(
          "div",
          {
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: c.muted,
          },
          [
            h("div", { display: "flex" }, `${face}.dimadisaputra.com`),
            h("div", { display: "flex", color: c.accent }, lang.toUpperCase()),
          ],
        ),
      ],
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
        { name: "Geist Mono", data: monoBold, weight: 500, style: "normal" },
        { name: "Instrument Serif", data: serif, weight: 400, style: "normal" },
      ],
    },
  );

  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
    .render()
    .asPng();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
