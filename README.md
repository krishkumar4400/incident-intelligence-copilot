# 🚀 AI Incident Intelligence Copilot

> Reduce alert noise. Find root cause instantly. Eliminate on-call chaos.

---

## 🧠 Overview

AI Incident Intelligence Copilot is an AI-powered platform that helps SaaS teams:

* 🔕 Reduce alert noise (50–200 alerts → 1 incident)
* 🧠 Identify root cause automatically
* ⚡ Reduce MTTR (Mean Time To Resolution)
* 😴 Minimize on-call fatigue

Instead of replacing monitoring tools, it acts as an **intelligence layer on top of them**.

---

## 🎯 Problem

Modern cloud systems generate massive observability data:

* Logs
* Metrics
* Traces
* Alerts

### Pain Points

* 🚨 1 incident = 50–200 alerts
* ⏳ 1–3 hours spent on root cause analysis
* 😵 Engineers burned out due to on-call
* ❌ Tools show data, not reasoning

---

## 💡 Solution

AI Copilot that:

* Groups duplicate alerts
* Correlates logs + metrics + deployments
* Detects root cause
* Explains in plain English
* Suggests next steps
* Generates postmortems automatically

---

## ✨ Features

### 🔕 Alert Noise Reduction

* Intelligent clustering of alerts
* Reduce noise by 70–80%

### 🧠 Root Cause Analysis (RCA)

* Correlates:

  * Logs
  * Metrics
  * Deployments
* Outputs human-readable explanation

### 🔄 Deployment Awareness

* Detect issues caused by recent deploys
* Integrates with GitHub / CI-CD

### 📢 Slack Integration

* Sends incident summaries
* Reduces debugging chaos

### 📝 Auto Postmortem

* Generates timeline + root cause + impact

---

## 🏗️ Architecture

```bash
Observability Tools (Datadog / Prometheus / CloudWatch)
        ↓
Ingestion Layer
        ↓
Correlation Engine
        ↓
AI RCA Engine
        ↓
Slack / Dashboard Output
```

---

## 🛠 Tech Stack

* **Backend:** Node.js / FastAPI
* **AI Layer:** OpenAI / LLM APIs
* **Streaming:** Kafka / RabbitMQ
* **Database:** PostgreSQL + ClickHouse
* **Frontend:** React (Dashboard)
* **Cloud:** AWS

---

## 📦 Installation

```bash
git clone https://github.com/your-username/ai-incident-intelligence.git
cd ai-incident-intelligence
npm install
```

---

## ⚙️ Environment Variables

Create `.env`:

```env
PORT=4000
OPENAI_API_KEY=your_key
AWS_ACCESS_KEY=your_key
SLACK_WEBHOOK_URL=your_url
DATABASE_URL=postgres://...
```

---

## 🚀 Run Locally

```bash
docker-compose up --build
```

---

## 🔌 Integrations

* AWS CloudWatch
* Prometheus
* Datadog
* GitHub
* Slack

---

## 🎯 Target Users

* SaaS startups (10–100 engineers)
* Cloud-native teams
* No dedicated SRE
* Using Kubernetes / microservices

---

## 💰 Pricing (Planned)

* Starter → $99/month
* Growth → $299/month
* Pro → $499/month

---

## 📈 Roadmap

### Phase 1

* Alert ingestion
* Alert clustering

### Phase 2

* Deployment correlation

### Phase 3

* AI RCA engine

### Phase 4

* Slack + Dashboard

### Future

* Self-healing automation
* Cost-performance correlation
* AI SRE Copilot

---

## 🧨 Competitive Edge

| Feature           | Existing Tools | This Product |
| ----------------- | -------------- | ------------ |
| Alert Dedup       | Partial        | AI-based     |
| RCA               | Manual         | Automated    |
| Context Awareness | Low            | High         |
| UX                | Complex        | Simple       |

---

## 🧪 Example Output

```text
Incident Summary:

Payment-service v3.2 deployment increased DB connection usage.
Connection pool exhaustion caused latency spike.
Recommended Action: Rollback or increase pool size.
```

---

## ⚠️ Challenges

* False positives in RCA
* Data integration complexity
* Trust building

---

## 🤝 Contributing

PRs are welcome. For major changes, open an issue first.

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Krish Kumar

---

## ⭐ Vision

Build the **AI SRE Copilot for modern SaaS teams**

---

## Project Structure

ai-incident-intelligence/\
│\
├── README.md\
├── LICENSE\
├── .env.example\
├── docker-compose.yml\
├── package.json\
│\
├── apps/\
│   ├── api-server/\
│   │   ├── src/\
│   │   │   ├── controllers/\
│   │   │   ├── routes/\
│   │   │   ├── services/\
│   │   │   ├── middleware/\
│   │   │   ├── models/\
│   │   │   ├── utils/\
│   │   │   └── index.ts\
│   │   ├── Dockerfile\
│   │   └── package.json\
│   │\
│   ├── worker/\
│   │   ├── src/\
│   │   │   ├── consumers/\
│   │   │   ├── jobs/\
│   │   │   ├── processors/\
│   │   │   └── index.ts\
│   │   ├── Dockerfile\
│   │   └── package.json\
│   │\
│   ├── ai-engine/
│   │   ├── src/\
│   │   │   ├── prompts/\
│   │   │   ├── pipelines/\
│   │   │   ├── summarizer.ts\
│   │   │   ├── rca-engine.ts\
│   │   │   └── index.ts\
│   │   └── package.json\
│   │\
│   └── web-dashboard/\
│       ├── src/\
│       │   ├── components/\
│       │   ├── pages/\
│       │   ├── hooks/\
│       │   └── app.tsx\
│       └── package.json\
│\
├── packages/\
│   ├── ingestion/\
│   │   ├── aws/\
│   │   ├── prometheus/\
│   │   ├── datadog/\
│   │   └── index.ts\
│   │\
│   ├── correlation-engine/\
│   │   ├── alert-clustering.ts\
│   │   ├── dependency-graph.ts\
│   │   ├── anomaly-detector.ts\
│   │   └── index.ts\
│   │\
│   ├── integrations/\
│   │   ├── github/\
│   │   ├── slack/\
│   │   ├── pagerduty/\
│   │   └── index.ts\
│   │\
│   └── shared/\
│       ├── types/\
│       ├── constants/\
│       └── utils/\
│\
├── infra/\
│   ├── terraform/\
│   ├── k8s/\
│   └── scripts/\
│\
├── docs/\
│   ├── architecture.md\
│   ├── api-spec.md\
│   └── roadmap.md\
│\
└── tests/\
    ├── unit/\
    ├── integration/\
    └── e2e/

---

## Architecture Diagram

                           ┌──────────────────────────────┐
                           │   Observability Sources      │
                           │------------------------------│
                           │ Datadog | Prometheus         │
                           │ CloudWatch | Logs | Traces   │
                           │ APM | Metrics | Alerts       │
                           └──────────────┬───────────────┘
                                          │
                                          ▼
                    ┌────────────────────────────────────┐
                    │        Ingestion Layer             │
                    │------------------------------------│
                    │ - Webhooks / APIs                  │
                    │ - Pollers (CloudWatch, Prometheus) │
                    │ - Event Normalizer                 │
                    └──────────────┬─────────────────────┘
                                   │
                                   ▼
                    ┌────────────────────────────────────┐
                    │     Message Queue / Stream         │
                    │------------------------------------│
                    │ Kafka / RabbitMQ / Redis Streams   │
                    │ (decouple ingestion from compute)  │
                    └──────────────┬─────────────────────┘
                                   │
            ┌──────────────────────┼──────────────────────┐
            ▼                      ▼                      ▼

┌──────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
│ Alert Processor  │   │ Deployment Ingestor  │   │ Metrics/Logs Engine  │
│------------------│   │----------------------│   │----------------------│
│ - Dedup logic    │   │ - GitHub Webhooks    │   │ - Time-series data   │
│ - Time clustering│   │ - CI/CD events       │   │ - Anomaly detection  │
│ - Severity merge │   │ - Version tracking   │   │ - Signal correlation │
└─────────┬────────┘   └──────────┬───────────┘   └──────────┬───────────┘
          │                       │                          │
          └──────────────┬────────┴──────────────┬───────────┘
                         ▼                       ▼

                ┌────────────────────────────────────┐
                │     Correlation Engine             │
                │------------------------------------│
                │ - Service Dependency Graph         │
                │ - Temporal correlation             │
                │ - Change impact analysis           │
                │ - Root cause candidate scoring     │
                └──────────────┬─────────────────────┘
                               │
                               ▼
                ┌────────────────────────────────────┐
                │         AI Reasoning Layer         │
                │------------------------------------│
                │ - Prompt pipelines                │
                │ - Context builder                 │
                │ - RCA summarizer                  │
                │ - Explanation generator           │
                └──────────────┬─────────────────────┘
                               │
                               ▼
                ┌────────────────────────────────────┐
                │      Incident Intelligence API     │
                │------------------------------------│
                │ - Incident summary                │
                │ - Root cause                     │
                │ - Suggested actions              │
                │ - Postmortem generator           │
                └──────────────┬─────────────────────┘
                               │
        ┌──────────────────────┼────────────────────────┐
        ▼                      ▼                        ▼

┌──────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
│ Slack Integration│   │ Web Dashboard        │   │ API / SDK            │
│------------------│   │----------------------│   │----------------------│
│ - Alerts         │   │ - Incident view      │   │ - External access    │
│ - Summaries      │   │ - RCA timeline       │   │ - Integrations       │
│ - Actions        │   │ - Analytics          │   │                      │
└──────────────────┘   └──────────────────────┘   └──────────────────────┘

---

## End-to-End Data Flow

### Step 1: Incident Happens

* CPU spike
* Error rate increase
* Latency increase

#### Tools generate

* → 50–200 alerts

### Step 2: Ingestion Layer

* Alerts pulled via APIs / webhooks
* Data normalized into standard format:

{\
  "service": "payment-service",\
  "timestamp": "...",\
  "metric": "latency",\
  "severity": "high"\
}

### Step 3: Message Queue

* Events pushed into Kafka / queue
* Ensures:

  * Scalability
  * Async processing
  * No data loss

### Step 4: Alert Processor

* Clusters alerts by:
  * Time window
  * Service
  * Signal similarity

👉 Output:

1 incident instead of 100 alerts

### Step 5: Deployment Correlation

* GitHub webhook data:
  * “payment-service v3.2 deployed 5 min ago”

This becomes critical signal.

### Step 6: Metrics + Logs Engine

* Detect anomaly window
* Identify spike patterns
* Extract key signals

### Step 7: Correlation Engine (CORE BRAIN)

This is your moat.

It answers:

* What changed?
* What spiked?
* What depends on what?

It builds:

👉 Service dependency graph

Example:

* frontend → payment-service → database

Then:

👉 Scores possible root causes

### Step 8: AI Reasoning Layer

LLM gets structured context:

Service: payment-service \
Recent deploy: v3.2 \
Metric anomaly: DB connections ↑ \
Impact: latency spike

Generates:

* “Deployment v3.2 increased DB connection usage, causing connection pool exhaustion.”

### Step 9: Output Layer

* Slack message
* Dashboard update
* API response

---

### Core Components

1️⃣ Ingestion Layer

Role:

* Normalize all incoming data

Why important:

* Different tools → different formats

2️⃣ Correlation Engine (Most Important)

This is your real product.

NOT LLM.

It does:

* Temporal correlation
* Dependency mapping
* Change detection

LLM just explains.

3️⃣ AI Layer

Role:

* Convert structured reasoning → human explanation

NOT doing raw reasoning.

4️⃣ Message Queue

Why needed:

* High volume alerts
* Async processing
* Reliability

5️⃣ Dependency Graph

Future powerful feature:

* Maps services
* Tracks blast radius
* Improves RCA accuracy

---

### Scaling Architecture

🚀 Horizontal Scaling

* Multiple workers process alerts
* Kafka partitions distribute load

📊 Data Scaling
Use:

* ClickHouse → fast analytics
* Elasticsearch → logs
* PostgreSQL → metadata

⚡ Latency Goal

* Incident grouping: < 5 seconds
* RCA generation: < 10 seconds

---

### Moat

Not in:

❌ UI
❌ LLM
❌ integrations

But in:

✅ Correlation logic
✅ Data modeling
✅ Incident understanding

---

### Simplified Mental Model

Your system is:

* Observability Data → Structured Reasoning → AI Explanation

---

### MVP Architecture

* Alerts → Simple clustering → Deployment check → LLM summary → Slack

---

## System Goal

Convert noisy alerts + telemetry into one incident + root cause explanation in <10 seconds

---

### 1. High-Level Architecture

* Sources → Ingestion → Stream → Processing → Correlation → AI → Output

--

### 2. Component-Level Architecture

┌────────────────────────────┐
│     External Systems       │
│----------------------------│
│ Datadog | Prometheus       │
│ CloudWatch | Logs | Traces │
│ GitHub (deploy events)     │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│      Ingestion Layer       │
│----------------------------│
│ API Pullers / Webhooks     │
│ Event Normalizer           │
│ Schema Standardization     │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│     Event Stream Layer     │
│----------------------------│
│ Kafka / Redis Streams      │
│ Topic Partitioning         │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│     Processing Workers     │
│----------------------------│
│ Alert Clustering           │
│ Anomaly Detection          │
│ Deployment Matching        │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│   Correlation Engine       │  ← CORE MOAT
│----------------------------│
│ Dependency Graph           │
│ Temporal Correlation       │
│ Change Impact Analysis     │
│ Root Cause Scoring         │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│    AI Reasoning Layer      │
│----------------------------│
│ Context Builder            │
│ Prompt Engine              │
│ RCA Generator              │
└────────────┬───────────────┘
             │
             ▼
┌────────────────────────────┐
│     API + Output Layer     │
│----------------------------│
│ Slack | Dashboard | API    │
│ Incident Reports           │
└────────────────────────────┘

---

### 3. Data Flow

#### STEP 1: Alert Trigger

Example:

* Latency ↑
* Error rate ↑
* CPU ↑

→ 100 alerts generated

#### STEP 2: Ingestion Layer

Responsibilities:

* Pull from APIs OR receive webhook
* Normalize data

Standard Event Schema:
{\
  "source": "datadog",\
  "service": "payment-service",\
  "metric": "latency",\
  "value": 1200,\
  "threshold": 500,\
  "severity": "high",\
  "timestamp": 1710000000\
}

#### STEP 3: Stream Layer (Kafka)

Topics:

* alerts.raw
* deployments.events
* metrics.stream

Why Kafka?

* High throughput
* Async processing
* Fault tolerance

#### STEP 4: Processing Workers

* Alert Clustering Service

Goal:

* Convert 100 alerts → 1 incident

Logic:

* Sliding time window (e.g., 2 min)
* Same service grouping
* Metric similarity

Output:
{\
  "incident_id": "INC123",\
  "services": ["payment-service"],\
  "alerts_count": 87,\
  "time_window": "2 min"\
}

📈 Anomaly Detector

* Detect spike patterns
* Identify abnormal metrics

Use:

* Z-score / threshold / basic ML
🔄 Deployment Matcher

From GitHub:

{\
  "service": "payment-service",\
  "version": "v3.2",\
  "timestamp": "5 min ago"\
}

Attach to incident.

#### STEP 5: Correlation Engine (MOST IMPORTANT)

This is the REAL PRODUCT.
Inputs:

* Clustered incident
* Metric anomalies
* Deployment events
* Logs summary

## Subsystems

### 1️⃣ Dependency Graph Builder

Structure:

* frontend → payment-service → database

Stored as:

* Graph DB (Neo4j) OR
* In-memory adjacency list (MVP)

### 2️⃣ Temporal Correlation Engine

Checks:

* What changed before incident?
* Which signals spiked together?

### 3️⃣ Root Cause Scoring

Assign score:

| Factor             | Weight |
| ------------------ | ------ |
| Recent deployment  | +40    |
| Metric anomaly     | +30    |
| Dependency impact  | +20    |
| Historical pattern | +10    |

### Output

{\
  "root_cause_candidates": [\
    {\
      "service": "payment-service",\
      "reason": "deployment_v3.2",\
      "score": 0.87\
    }\
  ]\
}

### STEP 6: AI Reasoning Layer

Important:

* LLM ≠ brain
* LLM = storyteller

#### Context Builder

Service: payment-service\
Deployment: v3.2 (5 min before incident)\
Metric: DB connections ↑\
Impact: latency ↑\

#### Prompt

Explain root cause in simple terms for engineer.

#### Output

“Payment-service v3.2 increased DB connections, leading to connection pool exhaustion and latency spike.”

### STEP 7: Output Layer

#### Slack Message

 Incident Detected

Service: payment-service \
Root Cause: Deployment v3.2 caused DB overload \

Suggested Action:

* Rollback deployment
* Increase connection pool

#### Dashboard

* Timeline
* Root cause
* Impact graph

---

### 4. Data Storage Design

#### PostgreSQL

* incidents
* services
* deployments

#### ClickHouse / Elasticsearch

* logs
* metrics
* query analytics

#### Redis

* caching
* recent incidents

#### Graph Store (optional)

* service dependencies

---

## 5. Performance Design

### Requirements

* Alert grouping: < 5 sec
* RCA: < 10 sec

### Optimization

* Pre-aggregation in workers
* Cache recent deployments
* Stream-based processing

---

## 6. Scaling Strategy

### Horizontal Scaling

* Workers scale independently
* Kafka partitions distribute load

### Multi-Tenant Design

* Tenant ID in every event
* Isolated processing pipelines

### Fault Tolerance

* Retry queues
* Dead letter queue (DLQ)

---

## 7. MVP vs Production

MVP

* Alerts → Simple clustering → Deployment check → LLM → Slack

* No Kafka
* No Graph DB
* No complex ML

### Production (Later)

* Kafka
* Dependency graph
* Advanced scoring
* Multi-cloud ingestion

---

## Database Strategy

* PostgreSQL → structured data (core system)
* Optional later → ClickHouse (analytics), Redis (cache)

### Core Tables (Schema Design)

### 1. tenants: Multi-tenant SaaS foundation

CREATE TABLE tenants (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

### 2. services: Represents microservices

CREATE TABLE services (
    id UUID PRIMARY KEY,
    tenant_id UUID REFERENCES tenants(id),
    name TEXT NOT NULL,
    environment TEXT, -- prod, staging
    created_at TIMESTAMP DEFAULT NOW()
);

### 3. alerts: Raw alerts from tools

CREATE TABLE alerts (
    id UUID PRIMARY KEY,
    tenant_id UUID,
    service_id UUID,
    source TEXT, -- datadog / cloudwatch
    metric TEXT,
    value FLOAT,
    threshold FLOAT,
    severity TEXT,
    timestamp TIMESTAMP,
    raw_payload JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

### 4. incidents: Clustered alerts → 1 incident

CREATE TABLE incidents (
    id UUID PRIMARY KEY,
    tenant_id UUID,
    status TEXT DEFAULT 'open',
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    severity TEXT,
    alerts_count INT,
    created_at TIMESTAMP DEFAULT NOW()
);

### 5. incident_alerts (mapping)

CREATE TABLE incident_alerts (
    id UUID PRIMARY KEY,
    incident_id UUID REFERENCES incidents(id),
    alert_id UUID REFERENCES alerts(id)
);

### 6. deployments: GitHub / CI events

CREATE TABLE deployments (
    id UUID PRIMARY KEY,
    tenant_id UUID,
    service_id UUID,
    version TEXT,
    commit_hash TEXT,
    deployed_at TIMESTAMP,
    metadata JSONB
);

### 7. metrics_summary: Aggregated anomaly signals

CREATE TABLE metrics_summary (
    id UUID PRIMARY KEY,
    incident_id UUID,
    service_id UUID,
    metric TEXT,
    anomaly_score FLOAT,
    value FLOAT,
    detected_at TIMESTAMP
);

### 8. root_causes: Core output of your system

CREATE TABLE root_causes (
    id UUID PRIMARY KEY,
    incident_id UUID,
    service_id UUID,
    cause_type TEXT, -- deployment / infra / traffic
    confidence FLOAT,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

### 9. incident_reports: AI-generated summaries

CREATE TABLE incident_reports (
    id UUID PRIMARY KEY,
    incident_id UUID,
    summary TEXT,
    suggested_actions TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

### 10. service_dependencies (future powerful)

CREATE TABLE service_dependencies (
    id UUID PRIMARY KEY,
    tenant_id UUID,
    source_service_id UUID,
    target_service_id UUID
);

### 3. Relationships (Important)

Tenant\
 ├── Services\
 │    ├── Alerts\
 │    ├── Deployments\
 │\
 ├── Incidents\
 │    ├── Incident Alerts\
 │    ├── Metrics Summary\
 │    ├── Root Causes\
 │    ├── Reports\

### 4. Event Models

The system is event-driven.

### 1. Alert Event

{\
  "event_type": "ALERT_TRIGGERED",\
  "tenant_id": "t1",\
  "service": "payment-service",\
  "metric": "latency",\
  "value": 1200,\
  "threshold": 500,\
  "severity": "high",\
  "timestamp": 1710000000,\
  "source": "datadog"\
}

### 2. Deployment Event

{\
  "event_type": "DEPLOYMENT",\
  "tenant_id": "t1",\
  "service": "payment-service",\
  "version": "v3.2",\
  "commit": "abc123",\
  "timestamp": 1710000100\
}

### 3. Metric Anomaly Event

{\
  "event_type": "METRIC_ANOMALY",\
  "service": "payment-service",\
  "metric": "db_connections",\
  "value": 900,\
  "anomaly_score": 0.92,\
  "timestamp": 1710000200\
}

### 4. Incident Created Event

{\
  "event_type": "INCIDENT_CREATED",\
  "incident_id": "inc_123",\
  "services": ["payment-service"],\
  "alerts_count": 87,\
  "start_time": 1710000000\
}

### 5. RCA Result Event

{\
  "event_type": "RCA_GENERATED",\
  "incident_id": "inc_123",\
  "root_cause": {\
    "service": "payment-service",\
    "type": "deployment",\
    "confidence": 0.87\
  }\
}

### 5. Indexing Strategy

Add indexes early:

CREATE INDEX idx_alerts_service_time
ON alerts(service_id, timestamp);

CREATE INDEX idx_incidents_tenant
ON incidents(tenant_id);

CREATE INDEX idx_deployments_service_time
ON deployments(service_id, deployed_at);

CREATE INDEX idx_metrics_incident
ON metrics_summary(incident_id);

### 6. Query Examples (Real Usage)

#### Find incidents in last 1 hour

SELECT *FROM incidents
WHERE start_time > NOW() - INTERVAL '1 hour';

#### Find deployments before incident

SELECT* FROM deployments
WHERE service_id = 'payment-service'
AND deployed_at < incident.start_time
ORDER BY deployed_at DESC
LIMIT 1;

#### Get root cause

SELECT * FROM root_causes
WHERE incident_id = 'inc_123'
ORDER BY confidence DESC;

#### 7. Key Design Insight

The DB is NOT just storage.

It enables:

👉 Correlation
👉 Timeline reconstruction
👉 RCA scoring

🚀 8. MVP Simplification

alerts
incidents
deployments
root_causes

Skip:

❌ dependency graph
❌ metrics_summary
❌ complex analytics

🔥 Final Thought

The system is:

Event-driven + correlation-based + AI-assisted

Not:

CRUD SaaS app

## Goal

* building:
  * “Reasoning Engine for Incidents”

---
