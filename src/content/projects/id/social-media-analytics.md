---
title: "Social Media Analytics"
seoTitle: "Social Media Analytics — Data Pipeline & Dashboard Full-Stack | Portofolio Dimas Adi Saputra"
description: "Data pipeline dan dashboard analitik full-stack untuk memantau performa TikTok dan Instagram, lengkap dengan sentiment analysis berbasis AI lewat Snowflake Cortex."
author: "Dimas Adi Saputra"
pubDate: 2026-02-01
updatedDate: 2026-02-01
repoURL: "https://github.com/dimadisaputra/social-media-analytics"
draft: false
category: "Data & AI"
faces: ["de", "se"]
angle:
  de: "Bronze sampai gold di Snowflake, sentiment dihitung di dalam warehouse."
  se: "Produk utuh: scraper, warehouse, orchestrator, dan dashboard."
tags: ["Python", "Snowflake", "dbt", "Streamlit", "Prefect", "Playwright", "Web Scraping"]
---

## Ringkasan Proyek

**Social Media Analytics** adalah data pipeline dan dashboard analitik full-stack untuk memantau performa TikTok dan Instagram.
Sistemnya menarik data mentah dari platform sosial, memuatnya ke cloud data warehouse, mengubahnya jadi model siap analisis, lalu memvisualkan hasilnya. Bagian yang paling menonjol: sentiment analysis berbasis AI yang diproses langsung di dalam data warehouse.

Tujuannya menyediakan solusi ELT end-to-end yang otomatis — melacak metrik engagement, sentiment audiens, dan performa lintas platform untuk mendukung keputusan berbasis data.

## Tanggung Jawab Utama

- **Data Ingestion & Web Scraping**: Membangun scraper dengan Python, Playwright (untuk menembus bot detection TikTok), dan Instaloader agar data post dan komentar bisa ditarik dengan andal.
- **Arsitektur Warehouse & ELT**: Merancang warehouse berlapis (Bronze, Silver, Gold) di **Snowflake** dengan pola MERGE untuk mengolah JSON mentah jadi tabel fact dan dimension.
- **Transformasi Data**: Membangun model data dengan **dbt** — load yang idempoten, skema yang bersih, dan pemetaan dimensi yang bebas duplikat.
- **Sentiment Analysis AI**: Mengintegrasikan **Snowflake Cortex (`CORTEX.SENTIMENT()`)** untuk penilaian sentiment secara inkremental dan hemat biaya, tanpa perlu mengeluarkan data dari warehouse.
- **Orchestration**: Mengotomatiskan alur scrape → load → transform dengan **Prefect 3**, lengkap dengan concurrency yang aman saat dibatalkan dan parameter dinamis.
- **Dashboard Interaktif**: Merancang dashboard **Streamlit** berisi KPI card, grafik tren, scatter plot, dan word cloud sentiment untuk membaca metrik lintas platform.

## Status Saat Ini

Pipeline dan dashboard sudah berjalan penuh. Sistem menarik event mentah, mengelolanya di bronze layer Snowflake, mentransformasinya lewat dbt ke silver dan gold, lalu menyajikannya di UI analitik Streamlit.

## Rencana Berikutnya

- **Menambah Platform**: Mengintegrasikan platform sosial lain supaya cakupan analisisnya lebih luas.
- **Analitik Lanjutan**: Menerapkan machine learning untuk forecasting tren dan prediksi engagement audiens.

## Teknologi

- Python 3.12+
- Snowflake (Data Warehouse & Cortex AI)
- dbt (Data Build Tool)
- Streamlit & Plotly
- Prefect 3
- Playwright & Instaloader
- Pydantic Settings & python-dotenv

## Catatan & Pelajaran

- Pengalaman panjang merancang **arsitektur ELT** yang skalabel dan mengelola warehouse berlapis.
- Mendalami teknik web scraping tingkat lanjut: rotasi token, cooldown bertingkat, dan mitigasi bot detection.
- Belajar mengintegrasikan **kemampuan AI langsung ke dalam alur SQL** lewat Snowflake Cortex, dan menekan biaya komputasi cloud lewat materialisasi inkremental.
- Menguatkan pemahaman soal orchestration yang tahan gagal, bersih, dan tetap benar saat berjalan paralel.
