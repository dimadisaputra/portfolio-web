---
title: "Null Region Backfill Workflow"
seoTitle: "Workflow Backfill Region Kosong — n8n, PostgreSQL & ClickHouse | Portofolio Dimas Adi Saputra"
description: "Workflow n8n terjadwal yang mencari data transaksi dengan region kosong lalu mengisinya dari pemetaan terbaru di data warehouse, dengan lookup PostgreSQL dulu lalu ClickHouse."
author: "Dimas Adi Saputra"
pubDate: 2026-06-10
updatedDate: 2026-06-11
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "Region yang kosong diisi setiap enam jam, dan hanya kalau warehouse benar-benar tahu jawabannya."
tags: ["n8n", "PostgreSQL", "ClickHouse", "SQL", "Automation"]
---

## Ringkasan Proyek

Dikerjakan di TAN Digital untuk operator telko nasional. Kodenya privat dan detail klien tidak dicantumkan.

Data transaksi masuk dengan region yang kosong atau NULL, dan itu merusak semua laporan per region yang dibangun di atasnya. Perbaikannya harus bisa diulang, murah dijalankan, dan hati-hati: region hanya diisi kalau pemetaan terbaru di data warehouse benar-benar yakin.

## Tanggung Jawab Utama

- **SQL dulu**: Menulis dan memvalidasi setiap query secara terpisah sebelum menyambungkannya ke workflow.
- **Workflow**: Membangun workflow n8n dengan 12 node — fetch, self-lookup, split dan routing, pemetaan minggu terbaru dan region, join dan filter, update, dan logging.
- **Lookup dua tingkat**: Mencari region di PostgreSQL lebih dulu, lalu jatuh ke data minggu terbaru di data warehouse ClickHouse berdasarkan site ID.
- **Update yang aman**: Memperbarui data hanya kalau region yang cocok ditemukan, dan memakai tabel development terpisah selama testing.
- **Operasional**: Menjadwalkannya setiap enam jam dengan batch 100, serta menyerahkan workflow, SQL, dokumentasi alur eksekusi, dan hasil uji performa.

## Hasil

- Query diperbaiki setelah review, dan workflow terjadwal yang terdokumentasi diserahkan dalam tiga hari sejak task dimulai.

## Teknologi

- n8n
- PostgreSQL
- ClickHouse
- SQL

## Catatan & Pelajaran

- Untuk backfill, "jangan lakukan apa-apa kalau ragu" itu fitur: region yang salah lebih buruk daripada region yang kosong.
- Memvalidasi SQL secara terpisah sebelum membangun node membuat penyusunan workflow-nya nyaris membosankan.
