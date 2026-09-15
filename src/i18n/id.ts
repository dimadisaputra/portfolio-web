import type { Dict } from "./en";

/**
 * Istilah teknis (pipeline, scraping, warehouse, orchestration) sengaja
 * dibiarkan Inggris — itu memang cara orang teknis Indonesia menulis, dan
 * menerjemahkannya justru bikin teksnya terasa asing.
 */
const id: Dict = {
  meta: {
    locale: "id-ID",
    label: "Bahasa Indonesia",
    short: "ID",
  },

  nav: {
    work: "Karya",
    about: "Tentang",
    contact: "Kontak",
    cv: "CV",
    menu: "Menu",
    close: "Tutup",
    skipToContent: "Lompat ke konten",
  },

  common: {
    available: "Terbuka untuk problem yang menarik",
    scroll: "Gulir",
    year: "Tahun",
    stack: "Stack",
    role: "Peran",
    source: "Kode",
    allWork: "Semua karya",
    backToWork: "Kembali ke karya",
    next: "Berikutnya",
    otherFace: "Juga seorang",
    rights: "Hak cipta dilindungi.",
    builtWith: "Dibangun dengan Astro. Huruf: Geist dan Instrument Serif.",
  },

  gateway: {
    eyebrow: "Dimas Adi Saputra",
    prompt: "Dua disiplin. Pilih pintunya.",
    hint: "Kamu bisa pindah sisi kapan saja.",
    enter: "Masuk",
  },

  home: {
    capabilitiesTitle: "Yang sebenarnya saya kerjakan",
    selectedWork: "Karya pilihan",
    stackTitle: "Alat yang saya pakai",
    ctaTitle: "Punya sesuatu yang layak dibangun?",
    ctaBody: "Semua pesan saya baca.",
    ctaAction: "Mulai obrolan",
  },

  work: {
    title: "Karya",
    lead: "Yang saya bangun, dan apa sebenarnya inti masalahnya.",
    count: (n: number) => `${n} proyek`,
    empty: "Belum ada apa-apa di sini.",
  },

  about: {
    title: "Tentang",
    storyTitle: "Cerita",
    experienceTitle: "Pengalaman",
    educationTitle: "Pendidikan",
    present: "Sekarang",
    gpa: "IPK",
  },

  contact: {
    title: "Kontak",
    lead: "Cara tercepat menghubungi saya lewat email. Semua pesan saya baca, dan saya balas yang memang ditujukan ke saya.",
    localTime: "Waktu setempat",
    elsewhere: "Di tempat lain",
    formTitle: "Atau kirim dari sini",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    send: "Kirim",
    sending: "Mengirim…",
    sent: "Terkirim. Nanti saya balas.",
    error: "Gagal terkirim. Email saya langsung saja.",
  },

  cv: {
    title: "Curriculum Vitae",
    download: "Unduh PDF",
    print: "Cetak halaman ini",
    printHint: "Atau buka dialog cetak browser lalu pilih “Save as PDF”.",
    summary: "Ringkasan",
    experience: "Pengalaman",
    education: "Pendidikan",
    skills: "Keahlian",
    selectedProjects: "Proyek pilihan",
    languages: "Bahasa",
    updated: "Diperbarui",
  },

  notFound: {
    title: "Tersesat",
    body: "Halaman itu tidak ada. Mungkin memang tidak pernah ada.",
    home: "Kembali ke awal",
  },

  faces: {
    de: {
      role: "Data Engineer",
      kicker: "The Pipeline",
      statement:
        "Saya mengambil data dari tempat yang sebenarnya tidak mau memberikannya, lalu mendaratkannya di tempat yang benar-benar bisa di-query.",
      lead: "Pipeline yang memindahkan puluhan juta baris dalam hitungan menit, integrasi antar sistem yang sebenarnya tidak dirancang untuk saling bicara, dan model yang disajikan dekat dengan data yang dibacanya.",
      cvSummary:
        "Data engineer dengan pengalaman 2+ tahun (termasuk magang) membangun pipeline ETL/ELT, integrasi data, dan web scraper. Saat ini menghadirkan pipeline ber-throughput tinggi (hingga 238 ribu baris/detik) di PostgreSQL dan ClickHouse serta layanan berbasis ML untuk klien telko dan pemerintah, memakai AI coding agent (Claude Code) agar pekerjaan data, backend, dan ML lebih cepat dirilis. Terbukti mengoptimalkan alur kerja, termasuk memangkas waktu pelaporan hingga 95%.",
      story: [
        "Saya mulai dengan menulis scraper untuk situs yang tidak mau di-scrape, dan tidak pernah benar-benar berhenti.",
        "Di Nolimit Indonesia saya membangun collector untuk portal berita, TikTok, dan Google Maps. Di Alpha Data Labs pekerjaannya naik satu tingkat: klasifikasi relevansi, sentiment, dan laporan yang sampai ke brand kecantikan, BUMN, dan kampanye politik.",
        "Di TAN Digital skalanya naik. Saya memindahkan KPI jaringan milik operator telko nasional ke ClickHouse dengan kecepatan hingga 238 ribu baris per detik, membangun layanan OCR KTP dari gambar pertama yang dilabeli sampai model yang jalan di Triton, dan mengembangkan integrasi sertifikasi perangkat antara dua sistem pemerintah — dengan AI coding agent yang mengetik, supaya waktu saya habis di desain dan verifikasi.",
        "Yang sekarang saya pedulikan justru bagian yang tidak glamor — bahwa run kedua menghasilkan angka yang sama dengan run pertama, bahwa kegagalan berisik dan bukan diam-diam, dan bahwa orang yang membaca dashboard punya alasan untuk percaya.",
      ],
      capabilities: [
        {
          title: "Ingestion skala besar",
          body: "Streaming dari PostgreSQL ke ClickHouse dengan ratusan ribu baris per detik, dan Playwright untuk situs maupun dashboard yang aktif menolak.",
        },
        {
          title: "Pemodelan warehouse",
          body: "Lapisan bronze, silver, dan gold di Snowflake, transformasi lewat dbt, pola MERGE yang tetap idempoten saat loader jalan dua kali.",
        },
        {
          title: "Integrasi & observability",
          body: "Pemetaan, deteksi gap, dan log append-only di antara sistem yang datanya tidak sepakat — plus dashboard Grafana Loki yang menunjukkan gap sebelum pengguna menemukannya.",
        },
        {
          title: "ML di production",
          body: "Dataset dilabeli sendiri, YOLOv8 dilatih, engine OCR dibandingkan, lalu pemenangnya disajikan di NVIDIA Triton di balik API sungguhan.",
        },
      ],
    },
    se: {
      role: "Software Engineer",
      kicker: "The Workshop",
      statement:
        "Saya membangun keseluruhannya — dari scraper yang tidak terlihat siapa pun sampai antarmuka yang benar-benar dibuka orang.",
      lead: "Backend, aplikasi desktop, dashboard, dan chatbot. Bagian tengah yang tidak glamor, tempat data berubah jadi produk.",
      cvSummary:
        "Full-stack engineer yang membangun produk di atas data: backend Go, aplikasi Flutter, platform integrasi, dashboard, dan chatbot — biasanya sekalian dengan pipeline di bawahnya.",
      story: [
        "Sebagian besar pekerjaan saya dimulai di bawah antarmuka, di bagian yang tidak terlihat siapa pun, lalu harus berubah jadi sesuatu yang bisa dibuka orang.",
        "Saya pernah merilis aplikasi desktop untuk perusahaan travel, mesin pembanding produk lintas tiga marketplace Indonesia, chatbot WhatsApp untuk laporan warga, dan dashboard yang berdiri di atas pipeline buatan saya sendiri. Belakangan: backend Go untuk layanan OCR dan sistem sertifikasi pemerintah, perbaikan di platform integrasi data, dan fitur Flutter untuk aplikasi operasional lapangan.",
        "Saya terbiasa jadi satu-satunya engineer di sebuah proyek. Artinya menulis crawler, API, skema, dan front end sekaligus — dan tahu bagian mana yang sebaiknya dibiarkan membosankan.",
      ],
      capabilities: [
        {
          title: "Ujung ke ujung",
          body: "Go, FastAPI, Node, React, Flutter, Electron. Saya pernah merilis setiap lapisan stack, termasuk bagian yang sebenarnya malas saya tulis.",
        },
        {
          title: "Produk di atas data",
          body: "Dashboard, mesin pembanding produk, dan tool pelaporan yang bagian sulitnya justru pipeline di belakang layar.",
        },
        {
          title: "AI yang memang perlu",
          body: "Chatbot yang terus bertanya sampai laporannya lengkap, dan panggilan LLM yang jalan di dalam warehouse alih-alih mengekspornya.",
        },
        {
          title: "Merilis",
          body: "Docker, CI, dan disiplin untuk berhenti membangun lalu menyodorkannya ke orang.",
        },
      ],
    },
  },
};

export default id;
