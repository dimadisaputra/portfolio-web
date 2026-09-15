---
title: "Network QoS Dashboard Scraper"
seoTitle: "Network QoS Dashboard Scraper - Playwright API Interception | Dimas Adi Saputra Portfolio"
description: "A batch scraper for a government network quality-of-service dashboard that captures chart data by intercepting the dashboard's own API calls across every filter combination."
author: "Dimas Adi Saputra"
pubDate: 2026-04-28
updatedDate: 2026-04-28
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "Every filter combination, captured from the dashboard's own API instead of its UI."
tags: ["Python", "Playwright", "Pandas", "Docker", "Web Scraping"]
---

## Project Overview

Built at TAN Digital for a national telco operator. The code is private and client details are withheld.

A government regulator publishes network quality-of-service measurements on a Looker Studio dashboard, with no export for the full dataset. The client needed every measurement location as one flat dataset. Clicking through the UI took minutes per combination, so the scraper reads what the dashboard itself fetches.

## Key Responsibilities

- **API interception**: Captured the dashboard's internal batched data responses with Playwright for fast, reliable extraction, with a UI-driven CSV export kept as a fallback.
- **Filter discovery**: Read every dropdown option programmatically and iterated each measurement unit and location, auto-capturing the province and regency the dashboard cross-filters to.
- **Completeness**: Validated that 14 required base metrics were captured for each combination, and detected when missing data was genuinely missing rather than transient.
- **Resilience**: Kept an append-only JSONL checkpoint with `--resume`, changed only the filters that differed from the previous state, and restarted the browser every 50 combinations to contain Chromium memory leaks.
- **Output**: Produced per-date columns plus overall averages for time-series charts, merged into a single `combined.csv`, and packaged it all in Docker.

## Results

- Capture time dropped from **3–4 minutes to 30–60 seconds** per filter combination.
- Interrupted runs resume where they stopped instead of starting over.

## Technologies Used

- Python, Playwright (Chromium)
- Pandas, openpyxl
- Docker

## Highlights & Learnings

- When a page renders data it fetched, the network tab is a better API than the DOM.
- Checkpointing and "only change what changed" matter more than raw speed once a batch runs for hours.
