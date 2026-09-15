---
title: "Middleware Data Integration Platform"
seoTitle: "Middleware Data Integration Platform - ETL/CDC Pipelines & API Builder | Dimas Adi Saputra Portfolio"
description: "Review and contributions to a self-hosted data integration platform where users connect databases, build ETL/CDC pipelines on a visual canvas, load a warehouse and publish REST APIs."
author: "Dimas Adi Saputra"
pubDate: 2026-08-31
updatedDate: 2026-09-03
draft: false
category: "Data & AI"
faces: ["de", "se"]
angle:
  de: "CDC that stopped losing changes, and a worker setting that actually splits the work."
  se: "Review and fixes across a Go + React platform: canvas pipelines, API builder, RBAC."
tags: ["Go", "React", "PostgreSQL", "CDC", "TypeScript", "Redis"]
---

## Project Overview

A platform at TAN Digital, built for a government client. The code is private and client details are withheld.

Middleware is a self-hosted data integration platform: users connect PostgreSQL, MySQL, Oracle or ClickHouse sources, build ETL and CDC pipelines on a drag-and-drop canvas, load the result into a warehouse, and publish it as REST APIs for external vendors — without writing service code. I did not build it from scratch; I joined to review it from a data engineer's perspective and then fix what the review found.

## Key Responsibilities

- **Platform review**: Ran the pipeline and API stack locally, explored both repositories, and wrote the internal feedback register covering pipeline validation, cycle and disconnected-node detection, failure notifications, data-source health checks, data lake metadata, API monitoring and RBAC.
- **CDC**: Fixed four ways the log replicator lost or misplaced changes, stopped it blanking columns the source never sent, and kept source column types intact.
- **Pipelines**: Made a transform node's worker setting actually split the work, loaded every row of uploaded CSVs, stopped mapping MySQL `tinyint` to boolean, and logged the swap that publishes a staged load.
- **Workers**: Measured run liveness by lease and sized the worker pool from it.
- **RBAC**: Refused permission writes that would empty a built-in role, and guarded role saves that grant nothing.
- **Monitoring & UI**: Filtered runs and API traffic by app, folder and time range, split pipelines and APIs into tabs, streamed real-time run logs, warned what still uses a data source before deleting it, and reworked the API tests tab.

## Results

- **49 commits** across the Go backend (27) and React frontend (22) in August–September 2026.
- Data-loss paths in CDC closed before the platform went to the client.

## Technologies Used

- Go, pgx, PostgreSQL logical replication, MySQL binlog
- Redis, MinIO, Prometheus
- Python sandboxed transform nodes
- React 18, TypeScript, Vite, TanStack Query, Tailwind
- Casbin RBAC, Docker

## Highlights & Learnings

- Reading someone else's CDC code with a data engineer's paranoia finds bugs that feature tests never will: missing columns and wrong types look like success.
- Small UI guards — "this data source is still used by three pipelines" — prevent more incidents than most backend validation.
