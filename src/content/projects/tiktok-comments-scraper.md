---
title: "TikTok Comments Scraper"
seoTitle: "TikTok Comments Scraping Pipeline with Kafka | Dimas Adi Saputra Portfolio"
description: "A system to scrape comments and metadata from specific TikTok videos, which are then formatted to JSONL and streamed to Kafka for real-time processing."
author: "Dimas Adi Saputra"
pubDate: 2023-08-01
updatedDate: 2023-09-30
canonicalURL: "https://dimadisaputra.vercel.app/projects/tiktok-comments-scraper"
draft: false
image: "../_images/tiktok-comments-scraper.jpg"
imageAlt: "Thumbnail of TikTok Comments Scraper with Kafka integration"
category: "Data & AI"
tags: ["Python", "Playwright", "PostgreSQL", "Apache Kafka"]
---

## Project Overview

This project aims to scrape comments from specific TikTok videos. The data collected includes comments, username, date, video ID, author username, and comment count.

## Key Responsibilities

- **Task Automation**: The program checks the database for tasks with a pending status, performs scraping, and updates the task status to running, and then to success or error.
- **Data Collection**: The collected data includes comments, username, date, video ID, author username, and comment count.
- **Data Formatting & Streaming**: The collected data is converted into JSONL format and is then produced/streamed to Kafka for further processing.

## Technologies Used

- Python
- Playwright
- PostgreSQL
- Apache Kafka
