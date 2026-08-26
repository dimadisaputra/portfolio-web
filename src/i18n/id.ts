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
    print: "Unduh sebagai PDF",
    printHint: "Membuka dialog cetak browser — pilih “Save as PDF”.",
    summary: "Ringkasan",
    experience: "Pengalaman",
    education: "Pendidikan",
    skills: "Keahlian",
    selectedProjects: "Proyek pilihan",
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
      lead: "Scraper yang tahan bot detection, warehouse yang tetap benar saat dijalankan dua kali, dan orchestration yang gagal dengan berisik, bukan diam-diam.",
      cvSummary:
        "Data engineer yang bekerja di ingestion skala besar — web scraping, streaming, dan pemodelan warehouse — beserta analisis dan pelaporan di atasnya.",
      story: [
        "Saya mulai dengan menulis scraper untuk situs yang tidak mau di-scrape, dan tidak pernah benar-benar berhenti.",
        "Di Nolimit Indonesia saya membangun collector untuk portal berita, TikTok, dan Google Maps. Di Alpha Data Labs pekerjaannya naik satu tingkat: klasifikasi relevansi, sentiment, dan laporan yang sampai ke brand kecantikan, BUMN, dan kampanye politik.",
        "Yang sekarang saya pedulikan justru bagian yang tidak glamor — bahwa run kedua menghasilkan angka yang sama dengan run pertama, bahwa kegagalan berisik dan bukan diam-diam, dan bahwa orang yang membaca dashboard punya alasan untuk percaya.",
      ],
      capabilities: [
        {
          title: "Ingestion skala besar",
          body: "Scrapy, Playwright, dan GraphQL mentah untuk situs yang aktif menolak. Rotasi token, cooldown bertingkat, ribuan domain.",
        },
        {
          title: "Pemodelan warehouse",
          body: "Lapisan bronze, silver, dan gold di Snowflake, transformasi lewat dbt, pola MERGE yang tetap idempoten saat loader jalan dua kali.",
        },
        {
          title: "Orchestration",
          body: "Prefect dan Kafka. Concurrency yang aman saat dibatalkan, parameter dinamis, dan pipeline yang langsung memberi tahu begitu rusak.",
        },
        {
          title: "Analisis yang sampai",
          body: "Sentiment, klasifikasi, dan grafik yang akhirnya dibaca orang yang memutuskan anggaran.",
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
        "Full-stack engineer yang membangun produk di atas data: API, dashboard, aplikasi desktop, dan chatbot — biasanya sekalian dengan pipeline di bawahnya.",
      story: [
        "Sebagian besar pekerjaan saya dimulai di bawah antarmuka, di bagian yang tidak terlihat siapa pun, lalu harus berubah jadi sesuatu yang bisa dibuka orang.",
        "Saya pernah merilis aplikasi desktop untuk perusahaan travel, mesin pembanding produk lintas tiga marketplace Indonesia, chatbot WhatsApp untuk laporan warga, dan dashboard yang berdiri di atas pipeline buatan saya sendiri.",
        "Saya terbiasa jadi satu-satunya engineer di sebuah proyek. Artinya menulis crawler, API, skema, dan front end sekaligus — dan tahu bagian mana yang sebaiknya dibiarkan membosankan.",
      ],
      capabilities: [
        {
          title: "Ujung ke ujung",
          body: "FastAPI, Node, React, Electron. Saya pernah merilis setiap lapisan stack, termasuk bagian yang sebenarnya malas saya tulis.",
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
