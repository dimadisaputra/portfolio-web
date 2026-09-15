---
title: "Device Certification Data Integration"
seoTitle: "Device Certification Data Integration - Go, SOAP & Data Pipelines | Dimas Adi Saputra Portfolio"
description: "A data integration that moves certified telecommunication device records from a government certification system into a national spectrum management system, through a pipeline, a mapping CMS and SOAP delivery."
author: "Dimas Adi Saputra"
pubDate: 2026-09-08
updatedDate: 2026-09-15
draft: false
category: "Data & AI"
faces: ["de", "se"]
angle:
  de: "Certified-device records, mapped and gap-filled on the way from one government system to another."
  se: "A Go CMS between two government systems, with SSO, RBAC and a log nobody can rewrite."
tags: ["Go", "PostgreSQL", "SOAP", "React", "OAuth2", "Data Integration"]
---

## Project Overview

Built at TAN Digital for a government regulator. The code is private and client details are withheld.

Telecommunication devices certified in the regulator's certification system also have to exist in the national spectrum management system. This integration moves them across in three steps: a pipeline on a self-hosted data integration platform extracts certified-device records from the source system, a certification CMS maps them to the target structure and flags whatever a person still has to fill in, and the CMS delivers the finished record over SOAP.

## Key Responsibilities

- **Requirements to scope**: Turned the software requirements specification into a scope baseline of 8 modules, 34 use cases and 179 functional requirements, then sliced it into 21 technical specs.
- **Extraction pipeline**: Built the pipeline that pulls certified-device records from the source REST API, using the certificate number as device identity and refusing records that arrive without one.
- **Mapping & gap filling**: Mapped source fields to the target structure with unit conversion (MHz to Hz, power strings to watts), per-field provenance markers and immutable mapping versions, and surfaced missing mandatory fields as a gap list instead of guessing.
- **Delivery**: Assembled SOAP envelopes for the target system's equipment-creation API, with retry parameters and endpoints configurable without code changes.
- **Security & audit**: Implemented OAuth2 Authorization Code + PKCE sign-in against the government SSO portal alongside local passwords, RBAC enforced server-side on every route, and append-only integration logs that keep each request and response verbatim.
- **Frontend**: Built the integration log search, the event detail drawer and the password screens in React.

## Results

- Primary author of both the CMS backend and frontend.
- A test enumerates the entire HTTP surface and fails if any route is left unguarded.
- Architecture decisions are recorded as ADRs, so every trade-off can be traced back to a requirement.

## Technologies Used

- Go, PostgreSQL, SQL migrations
- SOAP, REST
- OAuth2 / PKCE, JWKS, RBAC
- React, Vite, TypeScript
- Docker

## Highlights & Learnings

- Most of a government integration is deciding what *not* to guess: an unknown code list or a missing field becomes a visible gap, never a silent default.
- Treating logs as evidence rather than debug output changes the schema: append-only, verbatim payloads, searchable by device, user and time.
- Worked with AI coding agents for implementation while keeping the spec, review and verification in my own hands.
