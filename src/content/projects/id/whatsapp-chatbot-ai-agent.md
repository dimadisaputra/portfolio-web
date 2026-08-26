---
title: "Whatsapp Chatbot AI Agent"
seoTitle: "Whatsapp Chatbot AI Agent — Otomatisasi Laporan Warga | Portofolio Dimas Adi Saputra"
description: "Sistem chatbot cerdas untuk menangani laporan warga lewat WhatsApp. AI agent-nya berinteraksi secara dinamis sampai informasi laporan lengkap, lalu mengategorikannya."
author: "Dimas Adi Saputra"
pubDate: 2025-02-14
updatedDate: 2025-02-14
draft: false
image: "../../_images/whatsapp-chatbot-ai-agent.jpg"
imageAlt: "Thumbnail proyek Whatsapp Chatbot AI Agent"
category: "Data & AI"
faces: ["de", "se"]
angle:
  de: "LLM yang terus bertanya sampai laporannya benar-benar lengkap."
  se: "WhatsApp sebagai antarmuka sistem pelaporan warga."
tags: ["Python", "FastAPI", "Docker", "WWebJS", "OpenAI", "Chatbot", "Node JS", "Javascript"]
---

## Ringkasan Proyek

**Whatsapp Chatbot AI Agent** adalah sistem untuk mengotomatiskan penyampaian laporan warga lewat WhatsApp. Chatbot-nya bertindak sebagai asisten berbasis AI yang berinteraksi langsung dengan pengguna, mengumpulkan informasi yang dibutuhkan seperti jenis laporan, lokasi, dan bukti foto. Setelah semua data terkumpul, sistem otomatis mengategorikan laporan sesuai dinas yang menangani (misalnya pekerjaan umum, keamanan, atau kebersihan).

Proyek ini menggabungkan otomatisasi pesan real-time, pemrosesan bahasa alami, dan desain alur kerja berbasis AI untuk merapikan komunikasi layanan publik.

## Tanggung Jawab Utama

- **Desain Alur Percakapan**: Menyusun alur percakapan yang mengumpulkan informasi terstruktur dari warga lewat obrolan WhatsApp yang terasa natural.
- **Logika Kategorisasi AI**: Mengintegrasikan **OpenAI API** untuk menentukan dinas mana yang harus menangani tiap laporan berdasarkan isi keluhannya.
- **Otomatisasi WhatsApp**: Memakai **WWebJS (whatsapp-web.js)** untuk memproses pesan dan mengirim balasan secara real-time.
- **Integrasi Backend**: Membangun layanan backend dengan **FastAPI** untuk menjembatani event WhatsApp, respons AI, dan logika sistem.
- **Kontainerisasi**: Menjalankan seluruh komponen lewat **Docker** agar lingkungannya terisolasi dan mudah diskalakan.

## Status Saat Ini

Pengembangan selesai sampai **tahap kategorisasi AI** — chatbot berhasil mengumpulkan informasi laporan secara lengkap dan menentukan dinas tujuannya secara otomatis.
Tahap berikutnya — penyimpanan ke database, integrasi dashboard, dan konfirmasi status ke pelapor — sudah direncanakan tapi belum dikerjakan karena batasan ruang lingkup dan waktu proyek.

## Rencana Berikutnya

- **Antarmuka Dashboard**: Membangun dashboard web supaya staf dinas bisa melihat dan mengelola laporan yang masuk.
- **Sistem Tiket**: Menerapkan sistem tiket terstruktur untuk melacak dan menutup tiap laporan.
- **Integrasi Database**: Menyimpan data laporan, interaksi pengguna, dan log penyelesaian di database relasional atau NoSQL.
- **Konfirmasi Penyelesaian**: Mengirim notifikasi otomatis ke pelapor begitu kasusnya ditandai selesai.

## Teknologi

- Python
- FastAPI
- Docker
- WWebJS (whatsapp-web.js)
- OpenAI API
- Node.js
- JavaScript
