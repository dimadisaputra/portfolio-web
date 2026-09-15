---
title: "Network QoS Dashboard Scraper"
seoTitle: "Scraper Dashboard QoS Jaringan — Intersepsi API dengan Playwright | Portofolio Dimas Adi Saputra"
description: "Scraper batch untuk dashboard kualitas layanan jaringan milik pemerintah yang mengambil data grafik dengan menangkap panggilan API dashboard itu sendiri di setiap kombinasi filter."
author: "Dimas Adi Saputra"
pubDate: 2026-04-28
updatedDate: 2026-04-28
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "Semua kombinasi filter, diambil dari API dashboard itu sendiri, bukan dari UI-nya."
tags: ["Python", "Playwright", "Pandas", "Docker", "Web Scraping"]
---

## Ringkasan Proyek

Dikerjakan di TAN Digital untuk operator telko nasional. Kodenya privat dan detail klien tidak dicantumkan.

Regulator pemerintah menerbitkan hasil pengukuran kualitas layanan jaringan di dashboard Looker Studio, tanpa fitur ekspor untuk seluruh data. Klien butuh semua lokasi pengukuran dalam satu dataset datar. Mengklik UI satu per satu makan waktu beberapa menit per kombinasi, jadi scraper ini membaca apa yang diambil dashboard itu sendiri.

## Tanggung Jawab Utama

- **Intersepsi API**: Menangkap respons data batch internal dashboard dengan Playwright agar ekstraksi cepat dan andal, dengan ekspor CSV lewat UI sebagai cadangan.
- **Penemuan filter**: Membaca semua opsi dropdown secara otomatis dan mengiterasi setiap unit dan lokasi pengukuran, sekaligus menangkap provinsi dan kabupaten/kota yang dipilih otomatis oleh cross-filter dashboard.
- **Kelengkapan**: Memvalidasi bahwa 14 metrik dasar wajib tertangkap di setiap kombinasi, dan membedakan data yang memang tidak ada dari data yang cuma belum termuat.
- **Ketahanan**: Menyimpan checkpoint JSONL append-only dengan `--resume`, hanya mengubah filter yang berbeda dari kondisi sebelumnya, dan me-restart browser setiap 50 kombinasi untuk menahan kebocoran memori Chromium.
- **Output**: Menghasilkan kolom per tanggal plus rata-rata keseluruhan untuk grafik time series, digabung jadi satu `combined.csv`, dan dikemas dalam Docker.

## Hasil

- Waktu pengambilan turun dari **3–4 menit jadi 30–60 detik** per kombinasi filter.
- Run yang terputus bisa dilanjutkan dari titik terakhir, tanpa mengulang dari awal.

## Teknologi

- Python, Playwright (Chromium)
- Pandas, openpyxl
- Docker

## Catatan & Pelajaran

- Kalau halaman menampilkan data yang diambilnya dari jaringan, tab network adalah API yang lebih baik daripada DOM.
- Checkpoint dan "hanya ubah yang berubah" lebih penting daripada kecepatan mentah begitu batch berjalan berjam-jam.
