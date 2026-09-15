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
  /** Shorter bullets for /cv and the PDF; falls back to `points`. */
  cvPoints?: LS;
  /** Which face this role is worth showing on. */
  faces: Face[];
}

export const ROLES: Role[] = [
  {
    company: "TAN Digital",
    location: "South Tangerang",
    from: "2026-04",
    to: null,
    title: { en: "Data Engineer", id: "Data Engineer" },
    points: {
      en: [
        "Migrated network KPI data for a national telco operator from PostgreSQL to ClickHouse, with idempotent incremental streaming pipelines running at up to 238K rows/sec (29.8M rows in about two minutes).",
        "Cut load times by up to 28% through cursor-based streaming and batch tuning, and made the pipelines observable with structured logs in Grafana Loki and dashboards that flag source-versus-ingested gaps.",
        "Built an ID card (KTP) OCR service end to end: labelled 384 images, trained a YOLOv8 field detector, benchmarked seven OCR engines and served a CRNN pipeline on NVIDIA Triton, lifting name spacing accuracy from 0% to 84%.",
        "Exposed the OCR through a Go backend API with AES-256-GCM field-level encryption, because ID card data is protected personal data.",
        "Developed a device-certification data integration for a government regulator: pipelines on a data integration platform feed a Go certification CMS that maps, gap-fills and converts units before delivering to the national spectrum management system over SOAP.",
        "Contributed 49 commits to that self-hosted data integration platform: CDC replication fixes, type mapping, worker parallelism, RBAC safeguards and monitoring dashboards.",
        "Built a Playwright scraper for a government network QoS dashboard that intercepts its internal API responses, cutting capture time from 3–4 minutes to under a minute per filter combination.",
        "Reconciled 228K+ site and tenant master records between two systems for a telecom tower company, surfacing 54K+ missing records and 250K+ field conflicts before a production migration.",
        "Automated region backfills with a scheduled n8n workflow over PostgreSQL and ClickHouse, and exported fibre-optic routes from PostGIS.",
        "Shipped Flutter features for field-operations apps — route navigation, segment colour marking, push-notification deep links — working with AI coding agents throughout.",
      ],
      id: [
        "Memigrasikan data KPI jaringan milik operator telko nasional dari PostgreSQL ke ClickHouse, dengan streaming pipeline inkremental yang idempoten hingga 238 ribu baris/detik (29,8 juta baris dalam sekitar dua menit).",
        "Memangkas waktu load hingga 28% lewat cursor-based streaming dan tuning batch, lalu membuat pipeline-nya terpantau lewat log terstruktur di Grafana Loki dan dashboard yang menandai selisih data sumber dan data yang masuk.",
        "Membangun layanan OCR KTP dari ujung ke ujung: melabeli 384 gambar, melatih detektor field YOLOv8, membandingkan tujuh engine OCR, dan menyajikan pipeline CRNN di NVIDIA Triton — akurasi spasi nama naik dari 0% ke 84%.",
        "Menyediakan OCR tersebut lewat API backend Go dengan enkripsi AES-256-GCM per field, karena data KTP termasuk data pribadi yang dilindungi.",
        "Mengembangkan integrasi data sertifikasi perangkat untuk regulator pemerintah: pipeline di platform integrasi data mengalirkan data ke CMS sertifikasi berbasis Go yang memetakan, melengkapi, dan mengonversi satuan sebelum dikirim ke sistem manajemen spektrum nasional lewat SOAP.",
        "Berkontribusi 49 commit ke platform integrasi data self-hosted tersebut: perbaikan replikasi CDC, pemetaan tipe data, paralelisme worker, pengaman RBAC, dan dashboard monitoring.",
        "Membangun scraper Playwright untuk dashboard QoS jaringan milik pemerintah yang menangkap respons API internalnya, memangkas waktu pengambilan dari 3–4 menit jadi di bawah satu menit per kombinasi filter.",
        "Merekonsiliasi 228 ribu+ master data site dan tenant antara dua sistem untuk perusahaan menara telekomunikasi, menemukan 54 ribu+ data yang hilang dan 250 ribu+ konflik field sebelum migrasi ke production.",
        "Mengotomatiskan pengisian region yang kosong lewat workflow n8n terjadwal di atas PostgreSQL dan ClickHouse, serta mengekspor rute fiber optik dari PostGIS.",
        "Merilis fitur Flutter untuk aplikasi operasional lapangan — navigasi rute, penandaan warna segmen, deep link dari push notification — dengan bantuan AI coding agent di sepanjang prosesnya.",
      ],
    },
    cvPoints: {
      en: [
        "Migrated network KPI data for a national telco operator from PostgreSQL to ClickHouse with idempotent, incremental streaming pipelines processing up to 238K rows/sec (29.8M rows in ~2 minutes), cutting load time by up to 28% through cursor-based streaming and batch tuning, with Grafana Loki logging and dashboards for gap detection and pipeline health.",
        "Developed an end-to-end ID card (KTP) OCR service: labelled 384 images, trained a YOLOv8 field-detection model, benchmarked 7 OCR engines and deployed a CRNN pipeline on NVIDIA Triton with word splitting (spacing accuracy 0% → 84%) and fuzzy matching of region names, exposed through a Go backend API with AES-256-GCM field-level encryption for personal data.",
        "Developed a device-certification data integration for a government regulator: pipelines on a data integration platform extract certified-device records into a Go-based certification CMS, which maps and gap-fills them (unit conversion, provenance tracking) and delivers them to the national spectrum management system via SOAP, secured with OAuth2 PKCE SSO, RBAC and append-only integration logs.",
        "Built a Playwright scraper for a government network QoS dashboard that intercepts internal API responses across all filter combinations with crash-safe checkpointing, cutting capture time from ~3–4 minutes to under 1 minute per combination.",
      ],
      id: [
        "Memigrasikan data KPI jaringan milik operator telko nasional dari PostgreSQL ke ClickHouse dengan streaming pipeline inkremental yang idempoten hingga 238 ribu baris/detik (29,8 juta baris dalam ~2 menit), memangkas waktu load hingga 28% lewat cursor-based streaming dan tuning batch, dengan logging Grafana Loki dan dashboard untuk deteksi gap dan kesehatan pipeline.",
        "Mengembangkan layanan OCR KTP dari ujung ke ujung: melabeli 384 gambar, melatih model deteksi field YOLOv8, membandingkan 7 engine OCR, dan men-deploy pipeline CRNN di NVIDIA Triton dengan pemisahan kata (akurasi spasi 0% → 84%) dan fuzzy matching nama wilayah, disajikan lewat API backend Go dengan enkripsi AES-256-GCM per field untuk data pribadi.",
        "Mengembangkan integrasi data sertifikasi perangkat untuk regulator pemerintah: pipeline di platform integrasi data mengalirkan data perangkat bersertifikat ke CMS sertifikasi berbasis Go, yang memetakan dan melengkapinya (konversi satuan, pelacakan asal data) lalu mengirimnya ke sistem manajemen spektrum nasional lewat SOAP, diamankan dengan SSO OAuth2 PKCE, RBAC, dan log integrasi append-only.",
        "Membangun scraper Playwright untuk dashboard QoS jaringan milik pemerintah yang menangkap respons API internal di semua kombinasi filter dengan checkpoint tahan crash, memangkas waktu pengambilan dari ~3–4 menit jadi di bawah 1 menit per kombinasi.",
      ],
    },
    faces: ["de", "se"],
  },
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
    cvPoints: {
      en: [
        "Automated social media report generation, reducing manual processing time from 4 hours to ~10 minutes (95% efficiency gain) using Python and the Google Workspace API.",
        "Developed and maintained data pipelines for scraping, relevance classification and sentiment analysis for high-profile clients (beauty brands, SOEs, a ride-hailing brand and political campaigns).",
        "Built data visualisations with Pandas, Seaborn and Matplotlib that gave stakeholders actionable insights.",
        "Contributed to a WhatsApp chatbot for government feedback, improving public access to services.",
      ],
      id: [
        "Mengotomatiskan pembuatan laporan media sosial, memangkas waktu kerja manual dari 4 jam jadi ~10 menit (efisiensi 95%) dengan Python dan Google Workspace API.",
        "Mengembangkan dan merawat data pipeline untuk scraping, klasifikasi relevansi, dan sentiment analysis bagi klien besar (brand kecantikan, BUMN, brand ride-hailing, dan kampanye politik).",
        "Membuat visualisasi data dengan Pandas, Seaborn, dan Matplotlib yang memberi stakeholder insight siap ditindaklanjuti.",
        "Ikut mengembangkan chatbot WhatsApp untuk masukan warga ke pemerintah, sehingga layanan publik lebih mudah diakses.",
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
    cvPoints: {
      en: [
        "Developed scrapers for media websites, TikTok and Google Maps reviews, ensuring high data reliability.",
        "Maintained and optimised web scrapers to improve performance and handle site structure changes.",
        "Collaborated with analysts and engineers to improve access to business data and streamline internal workflows.",
      ],
      id: [
        "Mengembangkan scraper untuk situs media, TikTok, dan ulasan Google Maps dengan keandalan data yang tinggi.",
        "Merawat dan mengoptimalkan scraper agar lebih cepat dan tahan terhadap perubahan struktur situs.",
        "Bekerja sama dengan analis dan engineer untuk mempermudah akses data bisnis dan merapikan alur kerja internal.",
      ],
    },
    faces: ["de", "se"],
  },
];

export interface Education {
  school: string;
  location: string;
  /** Years. `to: null` means still studying. */
  from: string;
  to: string | null;
  field: L;
  /** Rendered only when set. */
  gpa?: string;
}

export const EDUCATION: Education[] = [
  {
    school: "Indonesia Open University",
    location: "South Tangerang",
    from: "2025",
    to: null,
    field: { en: "Information Systems", id: "Sistem Informasi" },
  },
  {
    school: "Madiun State Polytechnic",
    location: "Madiun",
    from: "2021",
    to: "2024",
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
