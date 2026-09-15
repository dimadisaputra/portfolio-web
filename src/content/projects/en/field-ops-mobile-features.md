---
title: "Field Operations Mobile Features"
seoTitle: "Field Operations Mobile Features - Flutter Maps, Deep Links & Approvals | Dimas Adi Saputra Portfolio"
description: "Flutter features for two field-operations apps used by a telecom tower company: fibre-optic route navigation, segment colour marking, site monitoring, visitor flagging and push-notification deep links."
author: "Dimas Adi Saputra"
pubDate: 2026-08-04
updatedDate: 2026-09-10
draft: false
category: "Web & App"
cvRank: 3
faces: ["se"]
angle:
  se: "Maps, deep links and approval flows in two Flutter apps for field technicians."
tags: ["Flutter", "Dart", "Melos", "Maps", "Push Notifications"]
---

## Project Overview

Built at TAN Digital for a telecom tower company. The code is private and client details are withheld.

Two Flutter apps support the people who maintain fibre-optic routes and tower sites. I delivered a set of features across both from functional specs, working with AI coding agents for the implementation and taking each feature through internal QA and UAT.

## Key Responsibilities

- **Route navigation**: Showed the estimated distance on the fibre-optic point selector, added a refresh-location action, parsed visit coordinates safely and hardened location and camera permission requests.
- **Segment colour marking**: Implemented three-colour status marking for route segments with a map legend driven entirely by backend configuration, and bounded the legend so the map stays interactive.
- **Site monitoring**: Added the site monitoring screen, clock-out approval and visitor flagging for site management users.
- **Notifications**: Wired push notifications with deep links straight into monitoring, clock-out approval and visitor flagging, and replayed requests automatically after a 403 re-login.
- **QA loop**: Resolved 17 UAT and internal feedback findings and shipped APK builds for each test round.

## Results

- 18 commits across the two apps, with every feature moved to ready-to-test within its sprint.

## Technologies Used

- Flutter, Dart
- Melos multi-package workspace, clean architecture
- Maps and geolocation, push notifications
- GitHub Actions for release notes

## Highlights & Learnings

- AI coding agents made an unfamiliar stack productive quickly, but the review — permission edge cases, unbounded layout widths — still had to be mine.
- Backend-driven configuration (like the segment legend) keeps a mobile release from being the bottleneck for a business rule change.
