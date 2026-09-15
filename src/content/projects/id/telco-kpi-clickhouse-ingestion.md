---
title: "Telco KPI ClickHouse Ingestion"
seoTitle: "Ingestion KPI Telko ke ClickHouse — Streaming ETL, Retention & Grafana Loki | Portofolio Dimas Adi Saputra"
description: "Pipeline ETL inkremental yang idempoten untuk menyinkronkan dataset KPI jaringan dari data warehouse operator telko ke ClickHouse, lengkap dengan retention, backfill, dan observability Grafana Loki."
author: "Dimas Adi Saputra"
pubDate: 2026-05-21
updatedDate: 2026-05-21
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "29,8 juta baris dalam sekitar dua menit, dan run kedua tidak mengubah apa pun."
tags: ["Python", "ClickHouse", "PostgreSQL", "Grafana Loki", "Docker", "ETL"]
---

## Ringkasan Proyek

Dikerjakan di TAN Digital untuk operator telko nasional. Kodenya privat dan detail klien tidak dicantumkan.

Database proyek butuh dataset KPI jaringan — red coverage, funnel sektor mingguan, pemakaian harian per cell, dan master lookup mingguan — yang disinkronkan dari data warehouse PostgreSQL dan ClickHouse milik operator. Script yang ada memang jalan, tapi lambat, menampung satu periode penuh di memori, dan susah dipantau. Saya mulai dengan membongkarnya, lalu membangun ulang ingestion-nya di atas ClickHouse.

## Tanggung Jawab Utama

- **Reverse engineering & benchmark**: Memetakan ingestion Python, SQL, dan n8n yang sudah ada — pemetaan sumber ke tujuan, perilaku full vs inkremental, lineage, partisi — membandingkan transfer PostgreSQL ke ClickHouse dan ClickHouse ke ClickHouse, lalu mendokumentasikan bottleneck-nya: buffering di memori, pemrosesan periode yang berurutan, dan jeda mutation asinkron.
- **Desain skema**: Menulis DDL ClickHouse untuk empat tabel, lengkap dengan pemetaan tipe, pilihan engine, serta kunci `ORDER BY` dan partisi per tabel.
- **Pipeline engine**: Membangun engine ingestion bersama dengan primitif streaming yang hemat memori: `query_rows_stream` ClickHouse, server-side cursor, dan COPY PostgreSQL.
- **Idempotensi**: Memuat setiap periode dengan pola hapus-lalu-muat ulang plus pengecekan jumlah baris, jadi run ulang tidak pernah menggandakan data.
- **Retention & backfill**: Menambahkan script retention berbasis konfigurasi YAML dan backfill historis satu bulan bergulir.
- **Observability**: Mengirim log JSON terstruktur (jumlah baris, durasi, tahap, periode sumber vs tujuan) ke Grafana Loki dan membangun dashboard Grafana untuk ketersediaan data sumber, deteksi gap, error, dan kesehatan operasional.

## Hasil

| Pipeline | Baris | Waktu | Throughput |
|---|---|---|---|
| Red coverage (mingguan) | 29,78 jt | 124 dtk | **238 rb baris/dtk** |
| Master lookup mingguan | 811 rb | 21 dtk | 38 rb baris/dtk |
| Funnel sektor mingguan, mode cursor | 269 rb | 47 dtk (dari 65) | 5,6 rb baris/dtk (dari 4,1 rb) |
| Pemakaian cell (harian), batch 100 rb | 31 rb | 10 dtk (dari 13) | 3 rb baris/dtk |

Cursor-based streaming dan tuning batch memangkas waktu load hingga **28%**, dan semua tabel lolos validasi jumlah baris, sampel, dan kesamaan hasil query.

## Teknologi

- Python, clickhouse-connect, psycopg2
- ClickHouse, PostgreSQL
- Grafana, Grafana Loki
- Docker, konfigurasi YAML

## Catatan & Pelajaran

- Streaming alih-alih buffering adalah perubahan paling berdampak — pemakaian memori tetap datar sebesar apa pun data seminggu.
- Di ClickHouse, `DELETE` adalah mutation asinkron; muat ulang yang idempoten harus memperhitungkan itu, kalau tidak jumlah barisnya bohong untuk sementara.
- Dashboard yang membandingkan periode sumber dan tujuan menangkap pipeline yang macet lebih cepat daripada alert error mana pun.
