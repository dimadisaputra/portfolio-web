import type { Face, Lang } from "../i18n";

type L = Record<Lang, string>;
type LS = Record<Lang, string[]>;

export interface Role {
  company: string;
  location: string;
  /** `YYYY-MM`. `to: null` means still there. */
  from: string;
  to: string | null;
  title: L;
  points: LS;
  /** Which face this role is worth showing on. */
  faces: Face[];
}

/* ---------------------------------------------------------------------------
   TODO — current role. Uncomment and fill in once the details are confirmed;
   nothing else needs changing. Deliberately left out rather than guessed, so
   the site never shows an invented job.

  {
    company: "",
    location: "",
    from: "20XX-XX",
    to: null,
    title: { en: "", id: "" },
    points: { en: ["", "", ""], id: ["", "", ""] },
    faces: ["de", "se"],
  },
   --------------------------------------------------------------------------- */

export const ROLES: Role[] = [
  {
    company: "Alpha Data Labs",
    location: "Remote",
    from: "2024-12",
    to: "2025-12",
    title: { en: "Data Engineer Intern", id: "Data Engineer Intern" },
    points: {
      en: [
        "Built social media data projects end to end: scraping, relevance classification and sentiment analysis.",
        "Analysed data for beauty brands, state-owned enterprises and political campaigns.",
        "Produced the visualisations that went into client reports, in Python, Pandas, Seaborn and Matplotlib.",
        "Contributed to a WhatsApp chatbot for collecting government feedback.",
      ],
      id: [
        "Membangun proyek data media sosial dari ujung ke ujung: scraping, klasifikasi relevansi, dan sentiment analysis.",
        "Menganalisis data untuk brand kecantikan, BUMN, dan kampanye politik.",
        "Membuat visualisasi yang masuk ke laporan klien, dengan Python, Pandas, Seaborn, dan Matplotlib.",
        "Ikut mengembangkan chatbot WhatsApp untuk mengumpulkan masukan warga ke pemerintah.",
      ],
    },
    faces: ["de", "se"],
  },
  {
    company: "Nolimit Indonesia",
    location: "Bandung",
    from: "2023-06",
    to: "2023-11",
    title: { en: "Data Engineer Intern", id: "Data Engineer Intern" },
    points: {
      en: [
        "Developed scrapers for news portals, TikTok and Google Maps reviews.",
        "Maintained and tuned existing scrapers for accuracy and throughput.",
        "Worked with analysts and engineers to make business data easier to get at.",
      ],
      id: [
        "Mengembangkan scraper untuk portal berita, TikTok, dan ulasan Google Maps.",
        "Merawat dan mengoptimalkan scraper yang sudah ada agar akurat dan cepat.",
        "Bekerja dengan analis dan engineer supaya data bisnis lebih mudah diakses.",
      ],
    },
    faces: ["de", "se"],
  },
];

export interface Education {
  school: string;
  location: string;
  /** TODO: confirm study years. Rendered only when non-empty. */
  period: string;
  field: L;
  gpa: string;
}

export const EDUCATION: Education[] = [
  {
    school: "Madiun State Polytechnic",
    location: "Madiun",
    period: "",
    field: { en: "Information Technology", id: "Teknologi Informasi" },
    gpa: "3.80",
  },
];

/** "2023-06" → "Jun 2023", localised. */
export function formatMonth(value: string, lang: Lang) {
  const [y, m] = value.split("-").map(Number);
  return new Date(y, m - 1).toLocaleDateString(
    lang === "id" ? "id-ID" : "en-GB",
    { month: "short", year: "numeric" },
  );
}

export const rolesFor = (face: Face) =>
  ROLES.filter((r) => r.faces.includes(face));
