---
title: "Threads Post Reply Scraper"
seoTitle: "Threads Post Reply Scraper | Dimas Adi Saputra Portfolio"
description: "A Python-based project to scrape all replies from a Threads post using GraphQL requests, saving the data in formats like JSON, CSV, or XLSX."
author: "Dimas Adi Saputra"
pubDate: 2024-08-01
updatedDate: 2024-08-15
canonicalURL: "https://dimadisaputra.vercel.app/projects/threads-post-reply-scraper"
draft: false
image: "../_images/threads-post-reply-scraper.jpg"
imageAlt: "Diagram showing the data scraping process for Threads replies"
category: "Data & AI"
tags: ["Python", "Beautiful Soup", "GraphQL", "Web Scraping"]
---

## Project Overview

This project is a **Python-based scraper** designed to fetch and save replies from posts on Threads, the text-based social platform from Instagram. The primary goal is to collect detailed information for each reply and store it in a structured format for analysis.

## Key Features

- **Fetch Replies**: Scrapes all replies from a specific Threads post URL.
- **Data Extraction**: Extracts detailed information for each reply, including username, timestamp, like count, reply text, and more.
- **Pagination**: Automatically navigates through multiple pages to ensure all replies are captured.
- **Multiple Export Formats**: Saves the collected data in **JSON, CSV, or XLSX formats**, providing flexibility for further use.

## How It Works

The scraper follows a two-step process to gather the data:

1. **Get Required Payloads**: Initially, the scraper sends a `GET` request to the target post's URL. This step is to retrieve necessary initial data, specifically the `post_id` and `fb_dtsg` token, from the page's content.
2. **Get Replies Data**: Using the obtained payloads, the scraper then sends a `POST` request to a GraphQL endpoint. This request fetches the replies data in JSON format. The script checks if there is a next page and repeats the process until all replies have been collected, after which it parses and saves the data to a file.

## Technologies Used

- Python
- Beautiful Soup

## Challenges

The main challenge was the difficulty in **reverse engineering the Threads platform** to understand its data-fetching mechanism. The solution required meticulously identifying the correct GraphQL endpoints and conducting a thorough process of trial and error to successfully replicate the API calls for fetching replies.
