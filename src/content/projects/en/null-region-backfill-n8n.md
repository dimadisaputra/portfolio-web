---
title: "Null Region Backfill Workflow"
seoTitle: "Null Region Backfill Workflow - n8n, PostgreSQL & ClickHouse | Dimas Adi Saputra Portfolio"
description: "A scheduled n8n workflow that finds transaction records with missing regions and fills them from the latest data warehouse mapping, using a PostgreSQL-first, ClickHouse-second lookup."
author: "Dimas Adi Saputra"
pubDate: 2026-06-10
updatedDate: 2026-06-11
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "Missing regions filled every six hours, and only when the warehouse actually knows the answer."
tags: ["n8n", "PostgreSQL", "ClickHouse", "SQL", "Automation"]
---

## Project Overview

Built at TAN Digital for a national telco operator. The code is private and client details are withheld.

Transaction records were arriving with an empty or NULL region, which broke every regional report built on them. The fix had to be repeatable, cheap to run and conservative: fill a region only when the data warehouse's latest mapping is certain about it.

## Key Responsibilities

- **SQL first**: Wrote and validated every query on its own before wiring anything into the workflow.
- **Workflow**: Built a 12-node n8n workflow — fetch, self-lookup, split and routing, latest-week and region mapping, join and filter, update, and logging.
- **Two-tier lookup**: Looked up the region in PostgreSQL first and fell back to the latest week in the ClickHouse data warehouse by site ID.
- **Safe updates**: Updated a record only when a matching region was found, and used a separate development table during testing.
- **Operations**: Scheduled it every six hours with batches of 100, and delivered the workflow, the SQL, execution-flow documentation and performance-test results.

## Results

- Enhanced the queries after review and handed over a documented, scheduled workflow within three days of the task starting.

## Technologies Used

- n8n
- PostgreSQL
- ClickHouse
- SQL

## Highlights & Learnings

- For a backfill, "do nothing when unsure" is a feature: a wrong region is worse than an empty one.
- Validating SQL independently before building nodes made the workflow itself almost boring to assemble.
