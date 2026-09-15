---
title: "Site & Tenant Master Data Reconciliation"
seoTitle: "Site & Tenant Master Data Reconciliation - Python & Pandas | Dimas Adi Saputra Portfolio"
description: "A reproducible reconciliation of 228K+ site and tenant master records between a legacy system and an operations platform, run before a production data migration."
author: "Dimas Adi Saputra"
pubDate: 2026-07-22
updatedDate: 2026-07-23
draft: false
category: "Data & AI"
faces: ["de"]
angle:
  de: "228K records, two systems, and an honest list of everything that doesn't match."
tags: ["Python", "Pandas", "SQL", "openpyxl", "Data Quality"]
---

## Project Overview

Built at TAN Digital for a telecom tower company. The code is private and client details are withheld.

Before dumping every site and tenant from a legacy system into the production operations platform, the client needed to know exactly how far apart the two were. I compared both datasets end to end and produced a discrepancy report the business team could act on.

## Key Responsibilities

- **Extraction**: Wrote the extract queries for both systems and kept them in the repository so every run is reproducible.
- **Normalisation**: Cleaned systematic representation differences before matching, so formatting noise did not show up as conflicts.
- **Matching**: Matched sites and tenants on their functional-location keys in a config-driven Python script.
- **Discrepancy detection**: Identified records only in the legacy system, records only in the platform, field-level value conflicts, status conflicts, truncated identifiers, empty source fields and duplicate keys.
- **Reporting**: Delivered Excel workbooks, HTML summaries and a README per entity.

## Results

| | Legacy | Platform | Matched | Legacy only | Value conflicts | Duplicate keys |
|---|---|---|---|---|---|---|
| Site | 94,667 | 69,919 | 69,918 | 24,749 | 134,893 | 54 |
| Tenant | 133,462 | 103,713 | 103,709 | 29,753 | 115,918 | 96 |

In total: **228K+ records** compared, **54K+ missing** from the platform and **250K+ field conflicts** surfaced before migration.

## Technologies Used

- Python, Pandas
- SQL
- openpyxl, HTML reports

## Highlights & Learnings

- A reconciliation is only useful if its categories map to decisions: "missing", "conflicting" and "duplicate" each need a different owner.
- Normalising before matching is the difference between a report of real problems and a report of whitespace.
