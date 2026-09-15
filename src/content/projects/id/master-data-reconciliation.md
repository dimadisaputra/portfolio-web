---
title: "Site & Tenant Master Data Reconciliation"
seoTitle: "Rekonsiliasi Master Data Site & Tenant — Python & Pandas | Portofolio Dimas Adi Saputra"
description: "Rekonsiliasi yang bisa diulang untuk 228 ribu+ master data site dan tenant antara sistem lama dan platform operasional, dijalankan sebelum migrasi data ke production."
author: "Dimas Adi Saputra"
pubDate: 2026-07-22
updatedDate: 2026-07-23
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "228 ribu data, dua sistem, dan daftar jujur semua yang tidak cocok."
tags: ["Python", "Pandas", "SQL", "openpyxl", "Data Quality"]
---

## Ringkasan Proyek

Dikerjakan di TAN Digital untuk perusahaan menara telekomunikasi. Kodenya privat dan detail klien tidak dicantumkan.

Sebelum semua site dan tenant dari sistem lama dipindahkan ke platform operasional production, klien perlu tahu persis seberapa jauh perbedaan keduanya. Saya membandingkan kedua dataset dari ujung ke ujung dan menyusun laporan selisih yang bisa langsung ditindaklanjuti tim bisnis.

## Tanggung Jawab Utama

- **Ekstraksi**: Menulis query ekstrak untuk kedua sistem dan menyimpannya di repository supaya setiap run bisa diulang.
- **Normalisasi**: Membersihkan perbedaan representasi yang sistematis sebelum pencocokan, supaya perbedaan format tidak muncul sebagai konflik.
- **Pencocokan**: Mencocokkan site dan tenant berdasarkan kunci functional location lewat script Python berbasis konfigurasi.
- **Deteksi selisih**: Menemukan data yang hanya ada di sistem lama, data yang hanya ada di platform, konflik nilai per field, konflik status, ID yang terpotong, field sumber yang kosong, dan kunci duplikat.
- **Pelaporan**: Menyerahkan workbook Excel, ringkasan HTML, dan README untuk setiap entitas.

## Hasil

| | Sistem lama | Platform | Cocok | Hanya di sistem lama | Konflik nilai | Kunci duplikat |
|---|---|---|---|---|---|---|
| Site | 94.667 | 69.919 | 69.918 | 24.749 | 134.893 | 54 |
| Tenant | 133.462 | 103.713 | 103.709 | 29.753 | 115.918 | 96 |

Totalnya: **228 ribu+ data** dibandingkan, **54 ribu+ data** belum ada di platform, dan **250 ribu+ konflik field** ditemukan sebelum migrasi.

## Teknologi

- Python, Pandas
- SQL
- openpyxl, laporan HTML

## Catatan & Pelajaran

- Rekonsiliasi baru berguna kalau kategorinya bisa diterjemahkan jadi keputusan: "hilang", "konflik", dan "duplikat" masing-masing butuh penanggung jawab yang berbeda.
- Normalisasi sebelum pencocokan adalah pembeda antara laporan berisi masalah nyata dan laporan berisi spasi.
