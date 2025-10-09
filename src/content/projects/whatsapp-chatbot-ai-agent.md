---
title: "Whatsapp Chatbot AI Agent"
seoTitle: "Whatsapp Chatbot AI Agent - Smart Report Automation | Dimas Adi Saputra Portfolio"
description: "An intelligent chatbot system built for automated citizen report handling via WhatsApp. The AI agent interacts dynamically to collect complete report information and categorize it for further processing."
author: "Dimas Adi Saputra"
pubDate: 2025-02-14
updatedDate: 2025-02-14
canonicalURL: "https://dimadisaputra.vercel.app/projects/whatsapp-chatbot-ai-agent"
draft: false
image: "../_images/whatsapp-chatbot-ai-agent.jpg"
imageAlt: "Thumbnail of the Whatsapp Chatbot AI Agent project"
category: "Data & AI"
tags: ["Python", "FastAPI", "Docker", "WWebJS", "OpenAI", "Chatbot", "Node JS", "Javascript"]
---

## Project Overview

The **Whatsapp Chatbot AI Agent** is a system designed to automate citizen report submissions through WhatsApp. The chatbot acts as an AI-driven assistant that interacts directly with users, collecting necessary information such as report type, location, and photo evidence. Once all required data is gathered, the system automatically categorizes the report based on the relevant department (e.g., public works, security, sanitation).

This project demonstrates the integration of real-time messaging automation, natural language processing, and AI-based workflow design to streamline public service communication.

## Key Responsibilities

- **Conversation Workflow Design**: Developed the conversation flow to dynamically collect structured information from citizens through natural WhatsApp chat.
- **AI Categorization Logic**: Integrated **OpenAI API** to automatically identify which department should handle each report based on the content of the complaint.
- **WhatsApp Automation**: Utilized **WWebJS (whatsapp-web.js)** to handle real-time message processing and response delivery.
- **Backend Integration**: Implemented the backend service using **FastAPI** to coordinate between WhatsApp events, AI responses, and system logic.
- **Containerization**: Deployed all components using **Docker** for isolated and scalable runtime environments.

## Current Status

The project development was completed up to the **AI categorization phase**, where the chatbot successfully gathered complete report information and assigned the proper department automatically.  
Further stages — including database storage, dashboard integration, and status confirmation to users — are planned but not yet implemented due to project scope and timeline constraints.

## Future Plans

- **Dashboard Interface**: Build a web dashboard for department staff to view and manage incoming reports.
- **Ticket Management System**: Implement a structured ticketing system for tracking and closing each report.
- **Database Integration**: Store all report data, user interactions, and resolution logs in a relational or NoSQL database.
- **Completion Confirmation**: Automatically send resolution notifications back to users once a case is marked as resolved.

## Technologies Used

- Python
- FastAPI
- Docker
- WWebJS (whatsapp-web.js)
- OpenAI API
- Node.js
- JavaScript
