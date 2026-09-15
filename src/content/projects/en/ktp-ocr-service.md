---
title: "KTP OCR Service"
seoTitle: "KTP OCR Service - YOLOv8, CRNN on NVIDIA Triton & Go API | Dimas Adi Saputra Portfolio"
description: "An end-to-end OCR service for Indonesian ID cards (KTP): an in-house labelled dataset, YOLOv8 field detection, a CRNN recogniser served on NVIDIA Triton, and a Go API with field-level encryption."
author: "Dimas Adi Saputra"
pubDate: 2026-09-01
updatedDate: 2026-09-01
draft: false
category: "Data & AI"
faces: ["de", "se"]
angle:
  de: "From 384 labelled images to a CRNN on Triton that reads ID cards field by field."
  se: "An OCR model behind a Go API that encrypts every field it returns."
tags: ["Python", "YOLOv8", "NVIDIA Triton", "ONNX", "Go", "OCR"]
---

## Project Overview

Built at TAN Digital for a client's field-operations mobile app. The code is private and client details are withheld.

Technicians and residents have to fill in identity forms from their ID card (KTP) during a field workflow. This service reads a photo of the card and prefills the form: it detects each field on the card, recognises the text, cleans it up, and hands it back to the app encrypted. I owned it from the first labelled image to the production endpoint.

## Key Responsibilities

- **Dataset**: Reviewed 384 real card images — 211 labelled with bounding boxes across 15 fields (NIK, name, address, RT/RW, village, district and more) and 173 kept as negative samples for blur, glare, damage and wrong orientation.
- **Field detection**: Trained a YOLOv8 model to locate each field on the card and exported it to ONNX.
- **OCR benchmark**: Compared EasyOCR, PaddleOCR, Tesseract, TrOCR, SuryaOCR, GLM-OCR and PARSeq on real cards against a ground truth, and studied INT8 quantization for the heavier models.
- **Serving**: Built the two-stage pipeline on NVIDIA Triton Inference Server — YOLOv8 detection, then a DocTR CRNN recogniser — and consolidated the experimental engines out of production once the benchmark settled.
- **Post-processing**: Added projection-profile word splitting for names and addresses, fuzzy matching of villages and districts against Indonesia's administrative-division database, and a layered regex clean-up for addresses.
- **Backend API**: Built the Go endpoint the mobile app calls, with persistence, AES-256-GCM field-level encryption of every returned value and NIK masking in logs, following Indonesia's personal data protection law.

## Results

- Name spacing accuracy rose from **0% to 84%** on real cards, and character error rate dropped from 0.23 to 0.19, without retraining the recogniser.
- A hybrid quantization (FP32 encoder, INT8 decoder) cut TrOCR from 1.47 GB to 916 MB — 37% smaller with near-identical output.
- One production endpoint serves both technician and resident scans, returning only the fields each context needs.

## Technologies Used

- Python, YOLOv8, ONNX, ONNX Runtime quantization
- NVIDIA Triton Inference Server, DocTR (CRNN)
- rapidfuzz, Pandas
- Go, PostgreSQL, AES-256-GCM
- Docker

## Highlights & Learnings

- Negative samples matter as much as labels: teaching the pipeline what an unusable photo looks like prevents confident garbage.
- The most accurate engine is not automatically the right one; latency, model size and what runs on Triton decided the production choice.
- Encryption at the field level, not just TLS, is what makes it reasonable to send personal data to a phone.
