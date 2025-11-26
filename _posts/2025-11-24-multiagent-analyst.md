---
layout: post
title: "Automating Financial Intelligence: An End-to-End AI Workflow"
subtitle: "Orchestrating autonomous agents, data pipelines, and reporting with GitHub Actions"
date: 2025-11-24 12:00:00 -0400
background: '/img/posts/multiagent/how-to-read-financial-statements.jpg'
---

> **Editor's Note:** This post was written by AI based on my prompts to demonstrate the capabilities of the system described below.

In software engineering, the ultimate goal is often to remove the human from the loop for repetitive cognitive tasks. We've mastered this for CI/CD pipelines and infrastructure, but complex analytical workflows—like evaluating an investment portfolio—have largely remained manual.

My latest project, the **Multi-Agent Portfolio Analyst**, isn't just about "using AI for trading." It is a case study in **workflow automation**: building a resilient, autonomous system that ingests raw data, orchestrates complex reasoning, and delivers finished intelligence without human intervention.

Here is how I engineered an "AI Employee" that works 24/7.

## The Engineering Challenge

The problem with most "AI scripts" is that they are brittle. They run once on a laptop and break the moment an API changes or a context window overflows. To build a robust analyst service, I needed to treat it like a production data pipeline.

The architecture focuses on three automation pillars:
1.  **Autonomous Data Ingestion** (ETL)
2.  **Orchestrated Agentic Reasoning** (The Logic Layer)
3.  **Scheduled Delivery** (CI/CD for Insights)

### 1. The Data Pipeline: Context is King

Automation fails without reliable data. I built a structured **Data Module** that acts as the system's ground truth. Instead of feeding an LLM raw internet search results, the system maintains a local SQLite state.

*   **Ingestion:** Scripts automatically fetch price action, news sentiment, and account equity from the **Alpaca API**.
*   **Normalization:** Data is cleaned and stored in a relational schema (SQLite), creating a history of "portfolio snapshots."
*   **Retrieval:** When agents need to make a decision, they query this structured history, ensuring their "opinions" are grounded in math, not hallucinations.

### 2. Orchestrating the "Brain": Agent Workflows

The core innovation here is the shift from a single prompt to a **Multi-Agent Workflow**. Using **CrewAI**, I modeled the decision-making process of a real investment firm.

I defined two specialized agents with opposing goals to force a dialectic, often called "Adversarial Analysis":

*   **The Bull Agent:** An optimist who looks for growth potential, positive momentum, and strong fundamentals.
*   **The Bear Agent:** A pessimist (or realist) who hunts for risks, overvaluation, and negative divergences.

```python
# Simplified CrewAI Agent Definition
bull_agent = Agent(
    role="Bullish Analyst",
    goal="Find opportunities and defend long positions.",
    backstory="You are a growth-focused investor...",
    llm="gpt-4o"
)

bear_agent = Agent(
    role="Bearish Analyst",
    goal="Identify risks and protect capital.",
    backstory="You are a risk manager concerned with capital preservation...",
    llm="gpt-4o"
)
```

This isn't just a chat. It's a **directed graph of tasks**.

1.  **Analysis Phase:** Both agents independently ingest the portfolio data and generate their arguments.
2.  **Debate Phase:** The system feeds the Bull's arguments to the Bear for critique, and vice-versa.
3.  **Synthesis Phase:** A "Manager Agent" reviews the debate and produces a balanced, actionable report.

This structured workflow significantly reduces bias and hallucinations, ensuring that the final output is rigorous and balanced.

### 3. The Delivery: "Set and Forget" with GitHub Actions

The most critical part of automation is reliability. A script that you have to run manually isn't an automated system; it's just a tool.

To turn this into a service, I leveraged **GitHub Actions** as a cron scheduler.

*   **Trigger:** Every Friday at 10:00 PM UTC.
*   **Environment:** A fleeting container spins up, installs dependencies via Poetry, and hydrates the database.
*   **Execution:** The agent crew runs the analysis.
*   **Delivery:** A **Reporting Module** renders the insights into a Jinja2 HTML template and dispatches it via SMTP.

The result? I receive a professional, deep-dive portfolio report in my inbox every week, completely hands-off.

## What's Next: The Backlog

Building an autonomous system is an iterative process. While the current version provides solid insights, I have a roadmap to make the analyst even smarter:

*   **Portfolio Generation:** Implement a "Starter Flow" where the AI suggests an initial portfolio allocation based on user interests and risk tolerance if no stocks are currently held.
*   **Enhanced Intelligence:** Integrate more sophisticated news providers and sentiment analysis models to catch nuance that simple keyword matching misses.
*   **Technical Analysis Agent:** Add a specialized agent dedicated solely to technical indicators (RSI, MACD, Moving Averages) to provide better entry and exit timing context.


This project demonstrates that **workflow automation** is about more than just moving data from A to B. It's about orchestrating intelligence. By combining robust data engineering (SQLite/Alpaca) with agentic AI (CrewAI) and CI/CD scheduling (GitHub Actions), we can build systems that don't just "help" us work, but actually *do* the work.

The code for this project is open-source. [Check out the code on GitHub](https://github.com/tomascufaro/multiagent_trade_system/tree/main).

I am open to collaborations to expand this system or apply these automation principles to new domains. If you're interested, feel free to reach out!

*Technologies used: Python, CrewAI, Alpaca API, SQLite, GitHub Actions, Jinja2.*
