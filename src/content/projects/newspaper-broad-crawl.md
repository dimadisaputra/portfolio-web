---
title: "Newspaper Broad Crawl"
seoTitle: "Automated News Article Scraping and Parsing | Dimas Adi Saputra Portfolio"
description: "Developed a system to scrape and parse articles from a dynamic list of online media domains from a database, converting the data to JSON and streaming it to Kafka."
author: "Dimas Adi Saputra"
pubDate: 2023-11-01
updatedDate: 2023-11-30
canonicalURL: "https://dimadisaputra.vercel.app/projects/newspaper-broad-crawl"
draft: false
image: "../_images/newspaper-broad-crawl.jpg"
imageAlt: "Data pipeline for the Newspaper Broad Crawl project streaming to Kafka"
category: "Data & AI"
tags: ["Python", "Newspaper3k", "PostgreSQL", "Apache Kafka"]
---

## Project Overview

The objective of this project is to scrape and parse articles from various online media portal links or domains provided in a database table, such as detik.com and antara.com. The expected output from scraping articles includes the link, domain, title, content, date, and author. The scraped data is then converted into JSON format and produced to a Kafka topic for further processing.

## Key Responsibilities

- **Input Source**: Fetch a list of links or domains from a designated database table.
- **Scraping and Parsing**: Perform scraping and parsing of articles from each provided link or domain to extract the specified data fields: Link, Domain, Title, Content, Date, and Author.
- **Data Conversion & Streaming**: Convert the scraped data into JSON format and produce it to Kafka for further processing.

## Technologies Used

- Python
- Newspaper3k
- PostgreSQL
- Apache Kafka
