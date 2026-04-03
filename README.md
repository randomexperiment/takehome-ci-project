# Welcome to this repo - takehome-ci-project

# 🚀 CI/CD Demo Project (Node.js + GitHub Actions)

This project demonstrates a CI/CD pipeline using:

- Node.js (JavaScript)
- Jest (unit testing)
- ESLint (linting)
- GitHub Actions (CI pipeline)

The goal is to enforce **code quality, test validation, and merge protection** on every pull request.

---

## 📦 Project Structure
.
├── src/
│ └── procurement.js # Business logic (Zip-like workflow)
├── tests/
│ └── procurement.test.js # Unit tests
├── .github/
│ └── workflows/
│ └── ci.yml # CI pipeline configuration
├── package.json
└── README.md


---

## 🧠 What This Project Does

This project simulates a **procurement system** inspired by Zip:

- Creates purchase requests
- Validates input
- Automatically approves or routes for approval based on the amount
- Detects if two same purchase requests have been intitiated by the same company. 

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/zip-ci-demo.git
cd zip-ci-demo

### 2.Install Dependencies
npm install

### 3. Run Linting
npm install

### 4. Run Tests
npm test


🔄 CI Pipeline

This project uses GitHub Actions to enforce quality on every PR.

Pipeline Steps:
Checkout code
Install dependencies
Run ESLint
Run Jest tests

🔐 Branch Protection Rules

The main branch is protected with:

✅ Required PR reviews (1 approval)
✅ Required CI checks to pass
❌ No direct commits allowed
🔁 Squash/rebase merge strategy

❌ Failure Conditions
A PR will be blocked if:

- Lint errors exist
- Unit tests fail
- CI pipeline fails
- No approval is provided

🔔 Notifications
GitHub provides:

- PR status updates
- Email notifications
- UI alerts in the repository

Optional integrations:
- Slack notifications
- Webhooks


📊 Metrics (Scalability Considerations)
| Metric        | Description                |
| ------------- | -------------------------- |
| MTTR          | Time to fix failing builds |
| Failure Rate  | % of failed CI runs        |
| Build Time    | CI execution duration      |
| Test Coverage | Code coverage %            |



