---
title: "Threads Post Reply Scraper"
seoTitle: "Threads Post Reply Scraper | Portofolio Dimas Adi Saputra"
description: "Proyek berbasis Python untuk menarik seluruh balasan dari sebuah post Threads lewat request GraphQL, dan menyimpannya dalam format JSON, CSV, atau XLSX."
author: "Dimas Adi Saputra"
pubDate: 2024-08-01
updatedDate: 2024-08-15
repoURL: "https://github.com/dimadisaputra/threads-scraper"
draft: false
image: "../../_images/threads-post-reply-scraper.jpg"
imageAlt: "Diagram proses scraping balasan di Threads"
category: "Data & AI"
faces: ["de"]
angle:
  de: "GraphQL tak berdokumentasi, dipaginasi sampai balasan terakhir."
tags: ["Python", "Beautiful Soup", "GraphQL", "Web Scraping"]
---

## Ringkasan Proyek

Proyek ini adalah **scraper berbasis Python** untuk mengambil dan menyimpan balasan dari post di Threads, platform sosial berbasis teks milik Instagram. Tujuan utamanya mengumpulkan informasi detail dari tiap balasan dan menyimpannya dalam format terstruktur untuk dianalisis.

## Fitur Utama

- **Mengambil Balasan**: Menarik seluruh balasan dari sebuah URL post Threads.
- **Ekstraksi Data**: Mengambil detail tiap balasan — username, timestamp, jumlah like, isi balasan, dan lainnya.
- **Paginasi**: Menelusuri halaman berikutnya secara otomatis supaya tidak ada balasan yang terlewat.
- **Banyak Format Ekspor**: Menyimpan hasilnya ke **JSON, CSV, atau XLSX**, menyesuaikan kebutuhan pemakaian berikutnya.

## Cara Kerja

Scraper bekerja dalam dua langkah:

1. **Mengambil Payload yang Dibutuhkan**: Scraper mengirim request `GET` ke URL post target untuk mendapatkan data awal, khususnya `post_id` dan token `fb_dtsg`, dari isi halamannya.
2. **Mengambil Data Balasan**: Dengan payload tadi, scraper mengirim request `POST` ke endpoint GraphQL. Request ini mengembalikan data balasan dalam JSON. Script memeriksa apakah masih ada halaman berikutnya dan mengulang prosesnya sampai semua balasan terkumpul, lalu mem-parsing dan menyimpannya ke file.

## Teknologi

- Python
- Beautiful Soup

## Tantangan

Tantangan terbesarnya adalah **reverse engineering platform Threads** untuk memahami cara mereka mengambil data. Solusinya menuntut ketelitian mengidentifikasi endpoint GraphQL yang benar, plus trial and error yang cukup panjang sampai berhasil menirukan panggilan API untuk mengambil balasan.
