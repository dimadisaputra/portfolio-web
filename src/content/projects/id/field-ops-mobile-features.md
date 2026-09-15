---
title: "Field Operations Mobile Features"
seoTitle: "Fitur Mobile Operasional Lapangan — Peta, Deep Link & Approval di Flutter | Portofolio Dimas Adi Saputra"
description: "Fitur Flutter untuk dua aplikasi operasional lapangan milik perusahaan menara telekomunikasi: navigasi rute fiber optik, penandaan warna segmen, monitoring site, flagging pengunjung, dan deep link dari push notification."
author: "Dimas Adi Saputra"
pubDate: 2026-08-04
updatedDate: 2026-09-10
draft: false
category: "Web & App"
faces: ["se"]
angle:
  se: "Peta, deep link, dan alur approval di dua aplikasi Flutter untuk teknisi lapangan."
tags: ["Flutter", "Dart", "Melos", "Maps", "Push Notifications"]
---

## Ringkasan Proyek

Dikerjakan di TAN Digital untuk perusahaan menara telekomunikasi. Kodenya privat dan detail klien tidak dicantumkan.

Dua aplikasi Flutter dipakai orang-orang yang merawat rute fiber optik dan site menara. Saya mengerjakan sejumlah fitur di kedua aplikasi berdasarkan spesifikasi fungsional, dengan bantuan AI coding agent untuk implementasinya, lalu membawa setiap fitur melewati QA internal dan UAT.

## Tanggung Jawab Utama

- **Navigasi rute**: Menampilkan estimasi jarak di pemilih titik fiber optik, menambahkan tombol refresh lokasi, mem-parsing koordinat kunjungan dengan aman, dan memperkuat permintaan izin lokasi dan kamera.
- **Penandaan warna segmen**: Mengimplementasikan penandaan status tiga warna untuk segmen rute dengan legenda peta yang sepenuhnya diatur dari backend, dan membatasi ukuran legenda supaya peta tetap bisa digeser.
- **Monitoring site**: Menambahkan layar monitoring site, approval clock-out, dan flagging pengunjung untuk pengguna site management.
- **Notifikasi**: Menyambungkan push notification dengan deep link langsung ke monitoring, approval clock-out, dan flagging pengunjung, serta mengulang request otomatis setelah login ulang karena 403.
- **Siklus QA**: Menyelesaikan 17 temuan UAT dan feedback internal, serta merilis build APK untuk setiap putaran testing.

## Hasil

- 18 commit di kedua aplikasi, dengan setiap fitur masuk ready-to-test di sprint-nya.

## Teknologi

- Flutter, Dart
- Workspace multi-package Melos, clean architecture
- Peta dan geolokasi, push notification
- GitHub Actions untuk release notes

## Catatan & Pelajaran

- AI coding agent membuat stack yang belum familiar cepat produktif, tapi review-nya — edge case izin, lebar layout yang tidak dibatasi — tetap harus saya yang pegang.
- Konfigurasi dari backend (seperti legenda segmen) membuat rilis aplikasi mobile tidak jadi penghambat saat aturan bisnis berubah.
