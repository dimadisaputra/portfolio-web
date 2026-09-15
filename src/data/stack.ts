import type { Face, Lang } from "../i18n";

/** Tools that actually show up in the work, not a wishlist. */
export const STACK: Record<Face, string[]> = {
  de: [
    "Python",
    "SQL",
    "Go",
    "PostgreSQL",
    "ClickHouse",
    "Snowflake",
    "dbt",
    "Apache Kafka",
    "Playwright",
    "n8n",
    "Grafana Loki",
    "YOLOv8",
    "NVIDIA Triton",
    "Pandas",
  ],
  se: [
    "TypeScript",
    "Go",
    "React",
    "Flutter",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Astro",
    "Electron",
    "Tailwind",
  ],
};

/** The same tools grouped for the CV, where a flat list reads as noise. */
export const CV_SKILLS: Record<
  Face,
  { label: Record<Lang, string>; items: string[] }[]
> = {
  de: [
    { label: { en: "Languages", id: "Bahasa pemrograman" }, items: ["Python", "SQL", "Go", "JavaScript/TypeScript"] },
    { label: { en: "Data Engineering", id: "Data Engineering" }, items: ["PostgreSQL", "ClickHouse", "Snowflake", "dbt", "Kafka", "Pandas", "n8n", "CDC"] },
    { label: { en: "ML & Model Serving", id: "ML & Model Serving" }, items: ["YOLOv8", "DocTR", "TrOCR", "PaddleOCR", "ONNX", "NVIDIA Triton"] },
    { label: { en: "Tools & AI", id: "Tools & AI" }, items: ["Playwright", "FastAPI", "Docker", "Git", "Grafana Loki", "Claude Code (agentic workflows)"] },
  ],
  se: [
    { label: { en: "Languages", id: "Bahasa pemrograman" }, items: ["TypeScript", "Go", "Python", "SQL", "Dart"] },
    { label: { en: "Backend & Data", id: "Backend & Data" }, items: ["Go", "FastAPI", "Node.js", "PostgreSQL", "Redis", "ClickHouse"] },
    { label: { en: "Frontend & Mobile", id: "Frontend & Mobile" }, items: ["React", "Flutter", "Astro", "Electron", "Tailwind"] },
    { label: { en: "Tools & AI", id: "Tools & AI" }, items: ["Docker", "Git", "Playwright", "Claude Code (agentic workflows)"] },
  ],
};
