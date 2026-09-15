---
title: "Middleware Data Integration Platform"
seoTitle: "Middleware Data Integration Platform — Pipeline ETL/CDC & API Builder | Portofolio Dimas Adi Saputra"
description: "Review dan kontribusi ke platform integrasi data self-hosted tempat pengguna menghubungkan database, membangun pipeline ETL/CDC di kanvas visual, memuat data ke warehouse, dan menerbitkan REST API."
author: "Dimas Adi Saputra"
pubDate: 2026-08-31
updatedDate: 2026-09-03
draft: false
category: "Data & AI"
cvRank: 1
cvSummary: "Berkontribusi ke platform self-hosted (Go, React, PostgreSQL) untuk membangun pipeline ETL/CDC di kanvas visual, memuat data ke warehouse, dan menerbitkannya sebagai REST API; 49 commit berisi perbaikan replikasi CDC, pemetaan tipe data, paralelisme worker, pengaman RBAC, dan dashboard monitoring."
faces: ["de", "se"]
angle:
  de: "CDC yang berhenti kehilangan perubahan, dan setting worker yang benar-benar membagi pekerjaan."
  se: "Review dan perbaikan di platform Go + React: pipeline berbasis kanvas, API builder, RBAC."
tags: ["Go", "React", "PostgreSQL", "CDC", "TypeScript", "Redis"]
---

## Ringkasan Proyek

Platform di TAN Digital yang dibangun untuk klien pemerintah. Kodenya privat dan detail klien tidak dicantumkan.

Middleware adalah platform integrasi data self-hosted: pengguna menghubungkan sumber PostgreSQL, MySQL, Oracle, atau ClickHouse, membangun pipeline ETL dan CDC di kanvas drag-and-drop, memuat hasilnya ke warehouse, lalu menerbitkannya sebagai REST API untuk vendor eksternal — tanpa menulis kode service. Saya tidak membangunnya dari nol; saya bergabung untuk me-review dari sudut pandang data engineer, lalu memperbaiki temuan dari review itu.

## Tanggung Jawab Utama

- **Review platform**: Menjalankan pipeline dan API secara lokal, mempelajari kedua repository, dan menyusun daftar temuan internal soal validasi pipeline, deteksi cycle dan node yang terputus, notifikasi kegagalan, health check sumber data, metadata data lake, monitoring API, dan RBAC.
- **CDC**: Memperbaiki empat cara log replicator kehilangan atau salah menempatkan perubahan, menghentikan pengosongan kolom yang tidak dikirim sumber, dan menjaga tipe kolom sumber tetap utuh.
- **Pipeline**: Membuat setting worker di node transform benar-benar membagi pekerjaan, memastikan semua baris CSV yang diunggah termuat, berhenti memetakan `tinyint` MySQL ke boolean, dan mencatat swap yang menerbitkan staged load.
- **Worker**: Mengukur keaktifan run berdasarkan lease dan menentukan ukuran pool worker dari situ.
- **RBAC**: Menolak perubahan permission yang mengosongkan role bawaan, dan menjaga penyimpanan role yang tidak memberi akses apa pun.
- **Monitoring & UI**: Memfilter run dan trafik API berdasarkan app, folder, dan rentang waktu, memisahkan pipeline dan API ke tab masing-masing, menampilkan log run secara real-time, memperingatkan apa saja yang masih memakai sumber data sebelum dihapus, dan merombak tab test API.

## Hasil

- **49 commit** di backend Go (27) dan frontend React (22) selama Agustus–September 2026.
- Jalur kehilangan data di CDC ditutup sebelum platform sampai ke klien.

## Teknologi

- Go, pgx, PostgreSQL logical replication, MySQL binlog
- Redis, MinIO, Prometheus
- Node transform Python yang di-sandbox
- React 18, TypeScript, Vite, TanStack Query, Tailwind
- Casbin RBAC, Docker

## Catatan & Pelajaran

- Membaca kode CDC orang lain dengan kecurigaan seorang data engineer menemukan bug yang tidak akan ketemu lewat test fitur: kolom yang hilang dan tipe yang salah terlihat seperti sukses.
- Pengaman kecil di UI — "sumber data ini masih dipakai tiga pipeline" — mencegah lebih banyak insiden daripada kebanyakan validasi di backend.
