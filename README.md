# Mukunthan Karuppaiah S — Portfolio

**Live site:** https://mukunthan-portfolio-z7if.vercel.app

Full Stack Engineer & DevOps · Spizen Technologies, Bangalore  
Built with Next.js 14, TailwindCSS, and Framer Motion. Deployed on Vercel.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | TailwindCSS 3 + custom design system |
| Animations | Framer Motion 10 |
| Icons | React Icons |
| Scroll | react-scroll |
| Deployment | Vercel (auto-deploy on push to `main`) |

---

## Project Structure

```
app/
├── components/
│   └── Header.jsx          scroll-aware nav with mobile drawer
├── sections/
│   ├── Hero.jsx            dot-grid landing with animated entry
│   ├── About.jsx           bio + 4-stat cards
│   ├── Experience.jsx      timeline of 3 professional roles
│   ├── Skills.jsx          tag-cloud across 6 skill categories
│   ├── Projects.jsx        featured cards + other projects grid
│   └── Contact.jsx         contact links + footer
├── styles/
│   └── globals.css         design tokens, component classes
├── layout.jsx              metadata, root layout
└── page.jsx                section composition
```

---

## Local Development

```bash
git clone https://github.com/Mukunth1004/mukunthan-portfolio.git
cd mukunthan-portfolio
npm install
npm run dev
# → http://localhost:3000
```

```bash
npm run build   # production build
npm start       # serve production build
npm run lint    # ESLint check
```

---

## Projects Showcased

### Featured

#### MyBuildGuide — Construction Project Management Platform
> Production · AppStore & PlayStore · Spizen Technologies

- Led Kubernetes cluster migration (7 services + 6 PostgreSQL DBs) from Orion to Hetzner K3s — 99.8% uptime
- Zero-downtime DB migration: taskmanager 207MB, erpdatabase 51K+ rows, plus accounting, guidebuilder, filesystem, buildpros
- Reduced API response time 50% for 100K+ record reports via indexing and pagination
- Resolved 20+ production bugs across 7 microservices
- Apache Superset KPI dashboards (Helm); Pro Partner Program serving 10K+ users

**Stack:** Kubernetes (K3s) · Docker · Hetzner · GitLab CI/CD · PostgreSQL · Helm · Traefik · React · Node.js

---

#### AI Document Intelligence Platform
> Active · Personal Project · June 2026–Present

- End-to-end RAG platform: FastAPI + Next.js + PostgreSQL + pgvector
- Semantic vector search with Hugging Face embeddings — supports PDF, DOCX, TXT, Markdown
- <500ms vector search response; Redis caching cut API calls by 60%
- Token-aware document chunking, JWT auth with user quotas, chat persistence
- Deployed on Vercel

**Stack:** FastAPI · Next.js · PostgreSQL · pgvector · Hugging Face · Redis · Google Gemini API · Vercel  
**Repo:** https://github.com/Mukunth1004/ai-document-intelligence

---

### Other Projects

#### CloudDeployX — GCP Cloud Run Deployment
> Active

Production-grade FastAPI REST API containerized with Docker multi-stage builds and deployed serverlessly on GCP Cloud Run. GitHub Actions CI/CD pipeline with Workload Identity Federation (zero static credentials). Includes structured JSON logging to Cloud Logging and uptime monitoring via Cloud Monitoring. CRUD API with liveness/readiness probes, 9-test pytest suite, and non-root container security.

**Stack:** FastAPI · Python 3.12 · Docker · GCP Cloud Run · GitHub Actions · Artifact Registry · Cloud Logging · Cloud Monitoring  
**Repo:** https://github.com/Mukunth1004/CloudDeployX

---

#### Faculty Information System — .NET Web Application
> Complete

Web-based ASP.NET application enabling faculty members to view and update their profiles, academic descriptions, and achievements. Role-based access control for faculty and administrative staff. Built with C# and the .NET MVC pattern.

**Stack:** C# · .NET · ASP.NET MVC · SQL Server  
**Repo:** https://github.com/Mukunth1004/Faculty-Information-System

---

#### Phoenix — Shopify Checkout Builder
> Live · Soft Suave Technologies

Full CSR → SSR migration of a Shopify checkout flow using Remix. PageSpeed improvements: Performance 45→86+, Accessibility 86→100, SEO 98→100. All Core Web Vitals improved. Reusable no-code components via Puck Editor.

**Stack:** Remix SSR · React · TypeScript · Shopify · Puck Editor

---

#### Cloud Cost Prediction — AWS Billing Forecasting
> Complete · KONE Elevator India

XGBoost regression model with engineered time-series features (hour, day_of_week, month) and MinMax scaling on AWS billing datasets. FastAPI backend exposing REST APIs for real-time cost forecasting across EC2, S3, Lambda, DynamoDB.

**Stack:** Python · XGBoost · FastAPI · Scikit-learn · AWS  
**Repo:** https://github.com/Mukunth1004/Cost-Prediction-AWS

---

#### No Limit Nodes
> Live

Production web platform with live traffic.

**Link:** https://nolimitnodes.com  
**Stack:** React · Node.js · Cloud Infrastructure

---

## Design System

The site uses a minimal black/white palette — no accent colors — with a custom component layer in `globals.css`:

| Class | Usage |
|---|---|
| `.btn-primary` | White fill pill button |
| `.btn-secondary` | Ghost border pill button |
| `.card-premium` | Dark glass card with border |
| `.badge` | Small tech tag |
| `.badge-accent` | Rounded status pill |
| `.section-eyebrow` | ALL CAPS spaced label above heading |
| `.section-heading` | Fluid-type section title |

---

## Deployment

Vercel auto-deploys every push to `main`. No config required.

**Live:** https://mukunthan-portfolio-z7if.vercel.app  
**Repo:** https://github.com/Mukunth1004/mukunthan-portfolio  
**Email:** mukunth.s1004@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/s-mukunth1004
