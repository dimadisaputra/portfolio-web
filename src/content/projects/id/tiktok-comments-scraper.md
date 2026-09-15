---
title: "TikTok Comments Scraper"
seoTitle: "Pipeline Scraping Komentar TikTok dengan Kafka | Portofolio Dimas Adi Saputra"
description: "Sistem untuk menarik komentar dan metadata dari video TikTok tertentu, diformat ke JSONL lalu dialirkan ke Kafka untuk pemrosesan real-time."
author: "Dimas Adi Saputra"
pubDate: 2023-08-01
updatedDate: 2023-09-30
draft: false
category: "Data & AI"
cvRank: 3
cvSummary: "Mengambil komentar TikTok beserta metadatanya (user, tanggal, ID video), mengubahnya ke JSONL, lalu mengalirkannya ke Kafka."
faces: ["de"]
angle:
  de: "Komentar ke JSONL ke Kafka, tanpa memicu deteksi."
tags: ["Python", "Playwright", "PostgreSQL", "Apache Kafka"]
---

## Ringkasan Proyek

Proyek ini menarik komentar dari video TikTok tertentu. Data yang dikumpulkan mencakup komentar, username, tanggal, ID video, username pembuat, dan jumlah komentar.

## Tanggung Jawab Utama

- **Otomatisasi Task**: Program memeriksa database untuk task berstatus pending, menjalankan scraping, lalu memperbarui status task jadi running, kemudian success atau error.
- **Pengumpulan Data**: Data yang dikumpulkan mencakup komentar, username, tanggal, ID video, username pembuat, dan jumlah komentar.
- **Formatting & Streaming**: Data yang terkumpul diubah ke format JSONL lalu dikirim ke Kafka untuk diproses lebih lanjut.

## Teknologi

- Python
- Playwright
- PostgreSQL
- Apache Kafka
