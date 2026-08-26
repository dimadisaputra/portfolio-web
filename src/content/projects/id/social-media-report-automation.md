---
title: "Social Media Report Automation"
seoTitle: "Social Media Report Automation — Sistem Pelaporan Bertenaga AI | Portofolio Dimas Adi Saputra"
description: "Sistem pelaporan otomatis yang menghasilkan laporan analisis media sosial lengkap — visual dan narasi — langsung ke Google Docs atau Slides dengan Python dan OpenAI."
author: "Dimas Adi Saputra"
pubDate: 2025-09-01
updatedDate: 2025-09-01
draft: false
image: "../../_images/social-media-report-automation.jpg"
imageAlt: "Thumbnail proyek Social Media Report Automation"
category: "Data & AI"
faces: ["de"]
angle:
  de: "Analisis yang menulis sendiri deck presentasinya."
tags: ["Python", "Google Workspace API", "OpenAI", "NLP", "Matplotlib", "Seaborn", "NumPy"]
---

## Ringkasan Proyek

**Social Media Report Automation** mengotomatiskan seluruh proses pelaporan, dari analisis data media sosial sampai pembuatan visual dan narasinya.
Berangkat dari dataset media sosial yang sudah difilter relevansinya dan dianalisis sentimennya (diekspor sebagai CSV), sistem ini menghasilkan laporan lengkap di **Google Docs atau Google Slides**, berikut visual dan teks yang ditulis AI.

Tujuannya memangkas waktu pelaporan manual secara drastis, dengan memproduksi grafik, insight naratif, dan ringkasan terstruktur yang langsung siap ditinjau.

## Tanggung Jawab Utama

- **Pembuatan Laporan Otomatis**: Membangun sistem yang mengubah data media sosial terproses jadi laporan Google Docs atau Slides yang rapi lewat **Google Workspace API**.
- **Visualisasi Data**: Menghasilkan visual dinamis — **pie chart, bar chart, word cloud, timeline, dan social network analysis (SNA)** — dengan pustaka visualisasi Python.
- **Narasi Berbasis AI**: Mengintegrasikan **OpenAI API** untuk menulis narasi laporan secara otomatis, misalnya merangkum topik post dan membaca respons audiens.
- **Pengolahan Data**: Membangun tahap preprocessing untuk membersihkan dan mengagregasi data sentiment dan relevansi dari file CSV.
- **Otomatisasi Alur**: Merancang sistem agar bisa dijalankan manual maupun terjadwal lewat **cron job**.

## Status Saat Ini

Sistem sudah selesai dan mampu menghasilkan laporan analitik lengkap — dari data CSV sampai Google Docs atau Slides jadi — termasuk **elemen visual dan narasi AI**.
Saat ini eksekusinya masih manual, tapi desainnya sudah mendukung penjadwalan otomatis lewat cron.

## Rencana Berikutnya

- **Otomatisasi Penuh**: Menyambungkan prosesnya ke sistem penjadwalan atau orchestration (Prefect atau Airflow) supaya benar-benar end-to-end.
- **Dashboard Interaktif**: Membangun dashboard untuk memilih dataset, menyesuaikan visual, dan memicu pembuatan laporan dengan sekali klik.

## Teknologi

- Python
- Google Workspace API (Docs & Slides)
- OpenAI API
- Matplotlib
- Seaborn
- NumPy
- Pandas
- Cron (untuk otomatisasi opsional)

## Catatan & Pelajaran

- Pengalaman mengintegrasikan **pembuatan teks AI dengan alur pembuatan dokumen otomatis**.
- Kemampuan **data storytelling** yang lebih baik: menggabungkan visual dan narasi supaya laporannya berdampak.
- Belajar implementasi praktis **otomatisasi Google Workspace** untuk kebutuhan business intelligence.
- Merancang alur kerja yang siap disambungkan ke **ETL dan penjadwalan** di kemudian hari.
