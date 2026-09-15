/**
 * English is the source of truth for the shape of the dictionary.
 * `id.ts` is typed as `Dict`, so a missing or misspelled key fails typecheck.
 */
const en = {
  meta: {
    locale: "en-US",
    label: "English",
    short: "EN",
  },

  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
    cv: "CV",
    menu: "Menu",
    close: "Close",
    skipToContent: "Skip to content",
  },

  common: {
    available: "Open to interesting problems",
    scroll: "Scroll",
    year: "Year",
    stack: "Stack",
    role: "Role",
    source: "Source",
    allWork: "All work",
    backToWork: "Back to work",
    next: "Next",
    otherFace: "Also a",
    rights: "All rights reserved.",
    builtWith: "Built with Astro. Typeset in Geist and Instrument Serif.",
  },

  gateway: {
    eyebrow: "Dimas Adi Saputra",
    prompt: "Two disciplines. Pick a door.",
    hint: "You can switch sides at any time.",
    enter: "Enter",
  },

  home: {
    capabilitiesTitle: "What I actually do",
    selectedWork: "Selected work",
    stackTitle: "Tools I reach for",
    ctaTitle: "Got something worth building?",
    ctaBody: "I read every message.",
    ctaAction: "Start a conversation",
  },

  work: {
    title: "Work",
    lead: "Things I built, and what they were really about.",
    count: (n: number) => `${n} projects`,
    empty: "Nothing here yet.",
  },

  about: {
    title: "About",
    storyTitle: "Story",
    experienceTitle: "Experience",
    educationTitle: "Education",
    present: "Present",
    gpa: "GPA",
  },

  contact: {
    title: "Contact",
    lead: "The fastest way to reach me is email. I read every message and reply to the ones that are actually addressed to me.",
    localTime: "Local time",
    elsewhere: "Elsewhere",
    formTitle: "Or send it from here",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    sending: "Sending…",
    sent: "Sent. I'll get back to you.",
    error: "That didn't go through. Email me directly instead.",
  },

  cv: {
    title: "Curriculum Vitae",
    download: "Download PDF",
    print: "Print this page",
    printHint: "Or open your browser's print dialogue and choose “Save as PDF”.",
    summary: "Summary",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    selectedProjects: "Selected projects",
    languages: "Languages",
    updated: "Updated",
  },

  notFound: {
    title: "Lost",
    body: "That page doesn't exist. It may never have.",
    home: "Back to the start",
  },

  /**
   * The two faces. Same person, different framing — this is where the site
   * stops being one portfolio with a filter and becomes two portfolios.
   */
  faces: {
    de: {
      role: "Data Engineer",
      kicker: "The Pipeline",
      statement:
        "I get data out of places that would rather not give it up, and land it somewhere a business can actually query.",
      lead: "Pipelines that move tens of millions of rows in minutes, integrations between systems that were never meant to talk, and models served next to the data they read.",
      cvSummary:
        "Data engineer with 2+ years of experience (including internships) building ETL/ELT pipelines, data integrations and web scrapers. Currently delivering high-throughput pipelines (up to 238K rows/sec) on PostgreSQL and ClickHouse and ML-backed services for telco and government clients, using AI coding agents (Claude Code) to ship faster across data, backend and ML work. Proven track record in optimising workflows, including cutting reporting time by 95%.",
      story: [
        "I started by writing scrapers for sites that did not want to be scraped, and never really stopped.",
        "At Nolimit Indonesia I built collectors for news portals, TikTok and Google Maps. At Alpha Data Labs the work moved up the stack: relevance classification, sentiment, and the reports that went to beauty brands, state-owned enterprises and political campaigns.",
        "At TAN Digital the scale went up. I moved a national telco operator's network KPIs into ClickHouse at up to 238K rows a second, built an ID card OCR service from the first labelled image to a model on Triton, and developed a device-certification integration between two government systems — with AI coding agents doing the typing, so my time goes into design and verification.",
        "What I care about now is the unglamorous part — that the second run produces the same numbers as the first, that a failure is loud rather than silent, and that the person reading the dashboard has a reason to trust it.",
      ],
      capabilities: [
        {
          title: "Ingestion at scale",
          body: "Streaming from PostgreSQL into ClickHouse at hundreds of thousands of rows a second, and Playwright against sites and dashboards that actively resist.",
        },
        {
          title: "Warehouse modelling",
          body: "Bronze, silver and gold layers in Snowflake, dbt for transformation, MERGE patterns that stay idempotent when the loader runs twice.",
        },
        {
          title: "Integration & observability",
          body: "Mapping, gap detection and append-only logs between systems that disagree — and Grafana Loki dashboards that show a gap before a user does.",
        },
        {
          title: "ML in production",
          body: "Datasets labelled in-house, YOLOv8 trained, OCR engines benchmarked, and the winner served on NVIDIA Triton behind a real API.",
        },
      ],
    },
    se: {
      role: "Software Engineer",
      kicker: "The Workshop",
      statement:
        "I build the whole thing — from the scraper nobody sees to the interface someone actually opens.",
      lead: "Backends, desktop apps, dashboards and chatbots. The unglamorous middle where data turns into a product.",
      cvSummary:
        "Full-stack engineer building products on top of data: Go backends, Flutter apps, integration platforms, dashboards and chatbots, usually including the pipeline underneath them.",
      story: [
        "Most of my work starts underneath the interface, in the part nobody sees, and then has to become something a person can open.",
        "I have shipped a desktop app for a travel company, a comparison engine across three Indonesian marketplaces, a WhatsApp chatbot that collects citizen reports, and dashboards sitting on pipelines I wrote myself. More recently: Go backends for an OCR service and a government certification system, fixes across a data integration platform, and Flutter features for field-operations apps.",
        "I am comfortable being the only engineer on a thing. That means writing the crawler, the API, the schema and the front end — and knowing which of those to keep boring.",
      ],
      capabilities: [
        {
          title: "End to end",
          body: "Go, FastAPI, Node, React, Flutter, Electron. I have shipped every layer of the stack, including the parts I would rather not have written.",
        },
        {
          title: "Products on top of data",
          body: "Dashboards, comparison engines and reporting tools where the hard part is the pipeline behind the screen.",
        },
        {
          title: "AI where it earns its place",
          body: "Chatbots that keep asking until a report is complete, and LLM calls that run inside the warehouse instead of exporting it.",
        },
        {
          title: "Shipping",
          body: "Docker, CI, and the discipline to stop building and put it in front of someone.",
        },
      ],
    },
  },
};

/** Every other locale must satisfy this exactly — no missing, no extra keys. */
export type Dict = typeof en;

export default en;
