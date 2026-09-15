---
title: "Telco KPI ClickHouse Ingestion"
seoTitle: "Telco KPI ClickHouse Ingestion - Streaming ETL, Retention & Grafana Loki | Dimas Adi Saputra Portfolio"
description: "Idempotent, incremental ETL pipelines that sync network KPI datasets from a telco operator's data warehouse into ClickHouse, with retention, backfill and Grafana Loki observability."
author: "Dimas Adi Saputra"
pubDate: 2026-05-21
updatedDate: 2026-05-21
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "29.8 million rows in about two minutes, and the second run changes nothing."
tags: ["Python", "ClickHouse", "PostgreSQL", "Grafana Loki", "Docker", "ETL"]
---

## Project Overview

Built at TAN Digital for a national telco operator. The code is private and client details are withheld.

A project database needed network KPI datasets — red-coverage, weekly sector funnels, cell-level daily usage and a weekly lookup master — synced from the operator's PostgreSQL and ClickHouse data warehouses. The existing scripts worked but were slow, buffered whole periods in memory and were hard to observe. I started by taking them apart, then rebuilt the ingestion on ClickHouse.

## Key Responsibilities

- **Reverse engineering & benchmarking**: Mapped the existing Python, SQL and n8n ingestion — source-to-target mapping, full versus incremental behaviour, lineage, partitioning — benchmarked PostgreSQL-to-ClickHouse and ClickHouse-to-ClickHouse transfers, and documented the bottlenecks: in-memory buffering, sequential period processing and asynchronous mutation lag.
- **Schema design**: Wrote the ClickHouse DDL for four tables, with type mapping, engine choice, `ORDER BY` and partition keys per table.
- **Pipeline engine**: Built a shared ingestion engine with memory-efficient streaming primitives: ClickHouse `query_rows_stream`, PostgreSQL server-side cursors and COPY.
- **Idempotency**: Loaded each period with delete-and-reload plus row-count checks, so a rerun never duplicates data.
- **Retention & backfill**: Added YAML-configured retention scripts and a rolling one-month historical backfill.
- **Observability**: Pushed structured JSON logs (rows, duration, stage, source versus destination periods) to Grafana Loki and built a Grafana dashboard for source availability, gap detection, errors and operational health.

## Results

| Pipeline | Rows | Time | Throughput |
|---|---|---|---|
| Red coverage (weekly) | 29.78M | 124s | **238K rows/s** |
| Weekly lookup master | 811K | 21s | 38K rows/s |
| Weekly sector funnel, cursor mode | 269K | 47s (from 65s) | 5.6K rows/s (from 4.1K) |
| Cell usage (daily), batch 100K | 31K | 10s (from 13s) | 3K rows/s |

Cursor-based streaming and batch tuning cut load time by up to **28%**, and every table passed row-count, sample and query-parity validation.

## Technologies Used

- Python, clickhouse-connect, psycopg2
- ClickHouse, PostgreSQL
- Grafana, Grafana Loki
- Docker, YAML configuration

## Highlights & Learnings

- Streaming instead of buffering was the single biggest change — memory stays flat no matter how large a week is.
- In ClickHouse a `DELETE` is an asynchronous mutation; idempotent reloads have to account for that or counts lie for a while.
- A dashboard that compares source and destination periods catches a stalled pipeline faster than any alert on errors.
