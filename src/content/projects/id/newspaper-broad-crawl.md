---
title: "Newspaper Broad Crawl"
seoTitle: "Scraping dan Parsing Artikel Berita Otomatis | Portofolio Dimas Adi Saputra"
description: "Sistem untuk men-scrape dan mem-parsing artikel dari daftar domain media online yang dinamis di database, lalu mengubahnya jadi JSON dan mengalirkannya ke Kafka."
author: "Dimas Adi Saputra"
pubDate: 2023-11-01
updatedDate: 2023-11-30
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "Daftar domain yang berubah tiap hari, dialirkan ke Kafka sebagai JSON."
tags: ["Python", "Newspaper3k", "PostgreSQL", "Apache Kafka"]
---

## Ringkasan Proyek

Tujuan proyek ini men-scrape dan mem-parsing artikel dari berbagai tautan atau domain portal media online yang tersimpan di tabel database, seperti detik.com dan antara.com. Keluaran yang diharapkan mencakup tautan, domain, judul, isi, tanggal, dan penulis. Data hasil scraping lalu diubah ke JSON dan dikirim ke topik Kafka untuk diproses lebih lanjut.

## Tanggung Jawab Utama

- **Sumber Input**: Mengambil daftar tautan atau domain dari tabel database yang ditentukan.
- **Scraping dan Parsing**: Men-scrape dan mem-parsing artikel dari setiap tautan atau domain untuk mengambil field: Tautan, Domain, Judul, Isi, Tanggal, dan Penulis.
- **Konversi & Streaming**: Mengubah data hasil scraping ke format JSON lalu mengirimkannya ke Kafka untuk diproses lebih lanjut.

## Teknologi

- Python
- Newspaper3k
- PostgreSQL
- Apache Kafka
