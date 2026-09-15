---
title: "KTP OCR Service"
seoTitle: "Layanan OCR KTP — YOLOv8, CRNN di NVIDIA Triton & API Go | Portofolio Dimas Adi Saputra"
description: "Layanan OCR KTP dari ujung ke ujung: dataset yang dilabeli sendiri, deteksi field dengan YOLOv8, recognizer CRNN yang disajikan di NVIDIA Triton, dan API Go dengan enkripsi per field."
author: "Dimas Adi Saputra"
pubDate: 2026-09-01
updatedDate: 2026-09-01
draft: false
category: "Data & AI"
faces: ["de", "se"]
angle:
  de: "Dari 384 gambar berlabel sampai CRNN di Triton yang membaca KTP field demi field."
  se: "Model OCR di balik API Go yang mengenkripsi setiap field yang dikembalikan."
tags: ["Python", "YOLOv8", "NVIDIA Triton", "ONNX", "Go", "OCR"]
---

## Ringkasan Proyek

Dikerjakan di TAN Digital untuk aplikasi mobile operasional lapangan milik klien. Kodenya privat dan detail klien tidak dicantumkan.

Teknisi dan warga harus mengisi formulir identitas dari KTP mereka saat alur kerja di lapangan. Layanan ini membaca foto KTP lalu mengisi formulirnya otomatis: mendeteksi setiap field di kartu, mengenali teksnya, merapikannya, dan mengembalikannya ke aplikasi dalam keadaan terenkripsi. Saya pegang dari gambar pertama yang dilabeli sampai endpoint production.

## Tanggung Jawab Utama

- **Dataset**: Meninjau 384 foto KTP asli — 211 dilabeli bounding box untuk 15 field (NIK, nama, alamat, RT/RW, kelurahan, kecamatan, dan lainnya) dan 173 disimpan sebagai sampel negatif untuk foto blur, silau, rusak, dan salah orientasi.
- **Deteksi field**: Melatih model YOLOv8 untuk menemukan posisi setiap field di kartu, lalu mengekspornya ke ONNX.
- **Benchmark OCR**: Membandingkan EasyOCR, PaddleOCR, Tesseract, TrOCR, SuryaOCR, GLM-OCR, dan PARSeq pada KTP asli terhadap ground truth, serta menguji quantization INT8 untuk model yang berat.
- **Serving**: Membangun pipeline dua tahap di NVIDIA Triton Inference Server — deteksi YOLOv8 lalu recognizer DocTR CRNN — dan mengeluarkan engine eksperimen dari production setelah hasil benchmark jelas.
- **Post-processing**: Menambahkan pemisahan kata berbasis projection profile untuk nama dan alamat, fuzzy matching kelurahan dan kecamatan terhadap database wilayah administratif Indonesia, dan pembersihan alamat dengan regex berlapis.
- **API backend**: Membangun endpoint Go yang dipanggil aplikasi mobile, lengkap dengan penyimpanan data, enkripsi AES-256-GCM untuk setiap nilai yang dikembalikan, dan NIK yang disamarkan di log, mengikuti UU Pelindungan Data Pribadi.

## Hasil

- Akurasi spasi nama naik dari **0% ke 84%** pada KTP asli, dan character error rate turun dari 0,23 ke 0,19, tanpa melatih ulang recognizer.
- Quantization hibrida (encoder FP32, decoder INT8) memangkas TrOCR dari 1,47 GB jadi 916 MB — 37% lebih kecil dengan hasil nyaris identik.
- Satu endpoint production melayani scan teknisi maupun warga, dan hanya mengembalikan field yang dibutuhkan masing-masing.

## Teknologi

- Python, YOLOv8, ONNX, quantization ONNX Runtime
- NVIDIA Triton Inference Server, DocTR (CRNN)
- rapidfuzz, Pandas
- Go, PostgreSQL, AES-256-GCM
- Docker

## Catatan & Pelajaran

- Sampel negatif sama pentingnya dengan label: mengajari pipeline seperti apa foto yang tidak layak mencegah hasil ngawur yang terlihat meyakinkan.
- Engine paling akurat belum tentu yang paling tepat; latency, ukuran model, dan apa yang bisa jalan di Triton yang menentukan pilihan production.
- Enkripsi di level field, bukan cuma TLS, yang membuat pengiriman data pribadi ke ponsel jadi masuk akal.
