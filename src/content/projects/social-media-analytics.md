---
title: "Social Media Analytics"
seoTitle: "Social Media Analytics - Full-Stack Data Pipeline & Dashboard | Dimas Adi Saputra Portfolio"
description: "A full-stack data pipeline and analytics dashboard for monitoring TikTok and Instagram performance, featuring AI-powered sentiment analysis via Snowflake Cortex."
author: "Dimas Adi Saputra"
pubDate: 2026-02-01
updatedDate: 2026-02-01
canonicalURL: "https://dimadisaputra.vercel.app/projects/social-media-analytics"
repoURL: "https://github.com/dimadisaputra/social-media-analytics"
draft: false
image: "../_images/social-media-analytics.png"
imageAlt: "Thumbnail of the Social Media Analytics project"
category: "Data & AI"
tags: ["Python", "Snowflake", "dbt", "Streamlit", "Prefect", "Playwright", "Web Scraping"]
---

## Project Overview

The **Social Media Analytics** project is a full-stack data pipeline and analytics dashboard designed for monitoring TikTok and Instagram performance. 
It extracts raw data from social platforms, ingests it into a cloud data warehouse, transforms it into analytics-ready models, and visualizes the insights. A standout feature is the integration of AI-powered sentiment analysis processed directly within the data warehouse.

The goal is to provide a comprehensive, automated end-to-end ELT solution that tracks engagement metrics, audience sentiment, and platform performance to drive data-informed decisions.

## Key Responsibilities

- **Data Ingestion & Web Scraping**: Developed custom scrapers using Python, Playwright (for TikTok bot detection mitigation), and Instaloader to extract post and comment data reliably.
- **Data Warehousing & ELT Architecture**: Engineered a multi-layer (Bronze, Silver, Gold) data warehouse in **Snowflake** using the MERGE pattern to process raw JSON into fact and dimension tables.
- **Data Transformation**: Built and managed robust data models using **dbt**, ensuring idempotent loads, clean schema designs, and deduplicated dimension mapping.
- **AI Sentiment Analysis**: Integrated **Snowflake Cortex (`CORTEX.SENTIMENT()`)** for incremental, cost-efficient sentiment scoring on social media comments without extracting data from the warehouse.
- **Orchestration**: Automated the end-to-end workflow (scrape → load → transform) using **Prefect 3**, complete with custom cancellation-safe concurrency and dynamic parameters.
- **Interactive Dashboard**: Designed a **Streamlit** dashboard featuring KPI cards, trend charts, scatter plots, and sentiment word clouds to visualize cross-platform metrics interactively.

## Current Status

The data pipeline and dashboard are fully operational. The system successfully extracts raw events, manages them through the Snowflake bronze layer, transforms them via dbt into silver and gold layers, and serves dynamic insights through the Streamlit analytics UI.

## Future Plans

- **Expanded Platform Support**: Integrate additional social media platforms to broaden the cross-platform analytical scope.
- **Advanced Analytics**: Implement deeper machine learning capabilities for trend forecasting and detailed audience engagement predictions.

## Technologies Used

- Python 3.12+
- Snowflake (Data Warehouse & Cortex AI)
- dbt (Data Build Tool)
- Streamlit & Plotly
- Prefect 3
- Playwright & Instaloader
- Pydantic Settings & python-dotenv

## Highlights & Learnings

- Gained extensive experience in designing scalable **ELT architectures** and managing multi-layer data warehouses.
- Mastered advanced web scraping techniques, including token rotation, escalating cooldowns, and bot detection mitigation strategies.
- Learned how to seamlessly integrate **AI capabilities directly into SQL workflows** using Snowflake Cortex, optimizing for cloud compute costs through incremental materialization.
- Improved skills in robust data orchestration, ensuring fault-tolerant, clean, and highly concurrent pipeline executions.