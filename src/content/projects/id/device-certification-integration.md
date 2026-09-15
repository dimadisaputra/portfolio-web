---
title: "Device Certification Data Integration"
seoTitle: "Integrasi Data Sertifikasi Perangkat — Go, SOAP & Data Pipeline | Portofolio Dimas Adi Saputra"
description: "Integrasi data yang memindahkan data perangkat telekomunikasi bersertifikat dari sistem sertifikasi pemerintah ke sistem manajemen spektrum nasional, lewat pipeline, CMS pemetaan, dan pengiriman SOAP."
author: "Dimas Adi Saputra"
pubDate: 2026-09-08
updatedDate: 2026-09-15
draft: false
category: "Data & AI"
faces: ["de", "se"]
angle:
  de: "Data perangkat bersertifikat, dipetakan dan dilengkapi dalam perjalanan dari satu sistem pemerintah ke sistem lain."
  se: "CMS berbasis Go di antara dua sistem pemerintah, lengkap dengan SSO, RBAC, dan log yang tidak bisa diubah."
tags: ["Go", "PostgreSQL", "SOAP", "React", "OAuth2", "Data Integration"]
---

## Ringkasan Proyek

Dikerjakan di TAN Digital untuk regulator pemerintah. Kodenya privat dan detail klien tidak dicantumkan.

Perangkat telekomunikasi yang sudah tersertifikasi di sistem sertifikasi regulator juga harus tercatat di sistem manajemen spektrum nasional. Integrasi ini memindahkannya dalam tiga tahap: pipeline di platform integrasi data self-hosted mengambil data perangkat bersertifikat dari sistem sumber, CMS sertifikasi memetakannya ke struktur tujuan dan menandai bagian yang masih harus diisi manusia, lalu CMS mengirim data yang sudah lengkap lewat SOAP.

## Tanggung Jawab Utama

- **Dari kebutuhan ke scope**: Menerjemahkan dokumen spesifikasi kebutuhan jadi scope baseline berisi 8 modul, 34 use case, dan 179 kebutuhan fungsional, lalu memecahnya jadi 21 spesifikasi teknis.
- **Pipeline ekstraksi**: Membangun pipeline yang menarik data perangkat bersertifikat dari REST API sumber, memakai nomor sertifikat sebagai identitas perangkat dan menolak data yang datang tanpa nomor itu.
- **Pemetaan & pelengkapan data**: Memetakan field sumber ke struktur tujuan dengan konversi satuan (MHz ke Hz, teks daya ke watt), penanda asal data per field, dan versi pemetaan yang tidak bisa diubah, serta menampilkan field wajib yang kosong sebagai daftar gap alih-alih menebaknya.
- **Pengiriman**: Menyusun SOAP envelope untuk API pembuatan perangkat di sistem tujuan, dengan parameter retry dan endpoint yang bisa diatur tanpa mengubah kode.
- **Keamanan & audit**: Mengimplementasikan login OAuth2 Authorization Code + PKCE ke portal SSO pemerintah berdampingan dengan password lokal, RBAC yang ditegakkan di server pada setiap rute, dan log integrasi append-only yang menyimpan request dan response apa adanya.
- **Frontend**: Membangun pencarian log integrasi, laci detail event, dan layar password dengan React.

## Hasil

- Penulis utama backend dan frontend CMS.
- Ada test yang mendata seluruh rute HTTP dan gagal kalau ada satu pun rute yang tidak dijaga.
- Keputusan arsitektur dicatat sebagai ADR, jadi setiap trade-off bisa ditelusuri balik ke kebutuhannya.

## Teknologi

- Go, PostgreSQL, migrasi SQL
- SOAP, REST
- OAuth2 / PKCE, JWKS, RBAC
- React, Vite, TypeScript
- Docker

## Catatan & Pelajaran

- Sebagian besar integrasi pemerintah adalah soal memutuskan apa yang *tidak* boleh ditebak: kode yang belum jelas atau field yang kosong jadi gap yang terlihat, bukan nilai default diam-diam.
- Memperlakukan log sebagai bukti, bukan sekadar output debug, mengubah desain skemanya: append-only, payload apa adanya, bisa dicari berdasarkan perangkat, user, dan waktu.
- Bekerja dengan AI coding agent untuk implementasi, sementara spesifikasi, review, dan verifikasi tetap saya pegang.
