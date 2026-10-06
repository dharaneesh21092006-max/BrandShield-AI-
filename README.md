# BrandShield AI — Digital Risk Protection Platform
> **AI-Powered Digital Risk Protection for Social & Mobile App Ecosystems**  
> *Built for HacXLerate 2026 Round 1 (24-Hour Hackathon)*

---

## 🎯 The Core Differentiator
Most security monitoring dashboards are generic CRUD interfaces that dump raw alerts. **BrandShield AI** is purpose-built around an explainable, analyst-in-the-loop decision loop:

$$\text{Detect} \longrightarrow \text{Explain WHY} \longrightarrow \text{Calculate Risk} \longrightarrow \text{Classify Threat} \longrightarrow \text{Prioritize} \longrightarrow \text{Recommend Action}$$

---

## ⚡ Quick Start

### 1. Backend Server
```bash
cd backend
npm install
npm start
# Runs Express REST API on http://localhost:5001
```

### 2. Frontend Application
```bash
cd frontend
npm install
npm run dev
# Runs Modern Cyber SaaS Dashboard on http://localhost:3001
```

- **Frontend URL:** [http://localhost:3001](http://localhost:3001)
- **Backend API:** [http://localhost:5001](http://localhost:5001) (Proxied via frontend `/api`)

---

## 🏗️ Architecture & Project Structure

```
Digital risk Production Platform/
├── backend/
│   ├── src/
│   │   ├── engine/
│   │   │   ├── detectionEngine.js       # Master candidate evaluator & baseline matching
│   │   │   ├── lookalikeEngine.js       # Homoglyphs, leetspeak, Levenshtein, & lures
│   │   │   ├── riskScoringEngine.js     # Explainable 0-100 BrandShield Risk Score formula
│   │   │   ├── threatClassifier.js      # Threat taxonomy classifier
│   │   │   ├── aiSecurityAnalyst.js     # Grounded evidence narrative generator
│   │   │   └── recommendationEngine.js  # Actionable next steps (P1/P2/P3 checklists)
│   │   ├── adapters/
│   │   │   └── dataSourceAdapter.js     # Pluggable data adapter architecture
│   │   ├── data/
│   │   │   └── mockStore.js             # ROBONEX baseline & candidate threat seed
│   │   └── server.js                    # Express REST server
│   ├── public/                          # Official ROBONEX trademark logo asset
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api.js                       # Asynchronous REST client
│   │   ├── main.js                      # Core state management, scanner, & view renderer
│   │   └── style.css                    # Cyber Dark Mode design system & glassmorphism
│   ├── public/                          # Static assets
│   ├── index.html                       # Semantic HTML5 dashboard layout
│   ├── vite.config.js                   # Vite dev server with proxy configuration
│   └── package.json
│
└── README.md
```

---

## 🛡️ Registered Official Brand Baseline (ROBONEX)

The system establishes an authoritative baseline of **trusted/legitimate assets**:
- **Brand:** `ROBONEX` (Autonomous Robotics & AI Platforms)
- **Official Instagram Account:** `@robonex_official` (Verified)
- **Official Portal:** `https://robonex.example`
- **Official Mobile Application:** `ROBONEX Official` (`com.robonex.controlapp` | Publisher: `ROBONEX Technologies Inc.`)
- **Official Logo:** Registered Shield Cyber-R trademark

### Baseline Exclusion Rule (Zero False Positives):
Any candidate strictly matching a registered trusted baseline asset is **automatically awarded a 0/100 risk score**, classified as `Legitimate Official Asset`, and excluded from active threat alerts.

---

## 🧮 Explainable BrandShield Risk Score Formula

The **BrandShield Risk Score** (0–100) is transparently calculated using weighted multi-signal evidence:

$$\text{Risk Score} = 0.35 \times S_{\text{name}} + 0.25 \times S_{\text{logo}} + 0.20 \times M_{\text{publisher}} + 0.15 \times P_{\text{lure}} + 0.05 \times U_{\text{unregistered}}$$

| Factor | Weight | Description |
|---|---|---|
| **Name & Look-alike Similarity** | 35% | Levenshtein distance, token root alignment, leetspeak homoglyphs (`0` $\rightarrow$ `o`) |
| **Logo & Visual Similarity** | 25% | Iconography and trademark resemblance |
| **Publisher / Domain Mismatch** | 20% | Developer / registrar entity does not correspond to corporate identity |
| **Deceptive Lure Patterns** | 15% | Suffixes such as `support`, `care`, `official`, `verify`, `claims`, `billing` |
| **Unofficial Penalty** | 5% | Absence from verified baseline registry |

### Severity Thresholds:
- `81 – 100`: **CRITICAL** (Immediate P1 Triage)
- `61 – 80`: **HIGH** (Priority P2 Review)
- `31 – 60`: **MEDIUM** (Watchlist P3 Review)
- `0 – 30`: **LOW** (Benign / Incidental Match)
- `0`: **LEGITIMATE** (Verified Baseline Asset)

---

## 🤖 AI Security Analyst (Evidence-Grounded)

When a threat is selected or scanned, the **AI Security Analyst** generates a concise, grounded assessment based **only on deterministic evidence**:
- Uses safe, defensible terminology: *Potential, Suspicious, Likely impersonation, Requires verification*.
- Never makes unsubstantiated claims like "this account is definitely malicious."
- Generates:
  1. Executive assessment narrative
  2. Primary corroborating indicators
  3. Threat taxonomy rationale
  4. Human-in-the-loop recommended next steps

---

## 🎬 1-Click Hackathon Demo Story

1. Open **[http://localhost:3001](http://localhost:3001)**.
2. Review the **Executive Threat Prioritization Dashboard** with metrics, severity breakdown bars, and prioritized threats.
3. Switch to the **Digital Risk Scanner** tab.
4. Click **`[ 🚨 @robonex_support ]`** $\rightarrow$ Click **`[ ANALYZE DIGITAL RISK ]`**:
   - Score: **86/100 (CRITICAL)**
   - WHY: High lexical resemblance, visual logo match, publisher mismatch, support pattern lure.
   - Recommended Next Step: Prioritize manual verification and archive evidence.
5. Click **`[ 🛡️ Official ROBONEX Account ]`** $\rightarrow$ Click **`[ ANALYZE DIGITAL RISK ]`**:
   - Score: **0/100 (LEGITIMATE)**
   - Baseline match verified; excluded from threat queue.
6. Click **`[ ⚠️ ROB0NEX India ]`** $\rightarrow$ Click **`[ ANALYZE DIGITAL RISK ]`**:
   - Homoglyph detection: `'0'` substituted for `'o'`.
7. Click **`[ 📱 Fake ROBONEX App ]`**:
   - Publisher mismatch detected: `Apex Mobile Ltd` vs `ROBONEX Technologies Inc.`
8. Open **Threat Dossier Modal** on any candidate $\rightarrow$ Update status to **`Investigate`**, **`False Positive`**, or **`Resolved`** $\rightarrow$ Dashboard counters update in real time!
