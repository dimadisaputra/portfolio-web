---
title: "Google Maps Reviews Scraper"
seoTitle: "Scraper Data Lokasi dan Ulasan Google Maps | Portofolio Dimas Adi Saputra"
description: "Proyek untuk menarik data lokasi dan ulasan dari Google Maps — rating, komentar, hingga metadata lokasi seperti koordinat dan gambar."
author: "Dimas Adi Saputra"
pubDate: 2023-09-01
updatedDate: 2023-09-30
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "Selenium melawan UI yang memang dibuat untuk menahannya, dalam skala ulasan."
tags: ["Python", "Selenium", "Beautiful Soup"]
---

## Ringkasan Proyek

Tujuan proyek ini menarik data lokasi dan ulasan dari Google Maps: nama lokasi, rating, komentar (nama pengulas, tanggal, isi ulasan), serta metadata lokasi seperti koordinat, tautan gambar, dan detail lain yang relevan.

## Tanggung Jawab Utama

- **Input Tautan Lokasi**: Program memakai tautan yang diberikan sebagai titik awal scraping di Google Maps.
- **Pengambilan Data**: Mengumpulkan nama lokasi, rating, komentar (nama pengulas, tanggal, isi ulasan), dan metadata lokasi (koordinat, tautan gambar, dan lainnya).
- **Penyimpanan Data**: Data yang berhasil ditarik disimpan dalam format JSON, CSV, atau XLSX (JSON sebagai default) di data buffer untuk diproses lebih lanjut.

## Teknologi

- Python
- Selenium
- Beautiful Soup
