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
<img width="687" height="269" alt="Screenshot 2026-04-03 at 11 35 16 AM" src="https://github.com/user-attachments/assets/f67786d0-7e59-418a-8732-3716663fd357" />



---

## 🧠 What This Project Does

This project simulates a **procurement system** inspired by Zip:

- Creates purchase requests
- Validates input
- Automatically approves or routes for approval based on the amount
- Detects if two same purchase requests have been intitiated by the same company. 

---
<!-- GETTING STARTED -->
## ⚙️ Getting Started


1. Clone the repository
```sh
git clone https://github.com/randomexperiment/takehome-ci-project.git
cd takehome-ci-project
```
2. Install Dependencies
```sh
npm install
```
3. Run Linting
```sh
npm install
```
4. Run Tests
```sh
npm test
```
---
<!-- CI Pipeline -->
## 🔄 CI Pipeline
This project uses GitHub Actions to enforce quality on every PR.

Pipeline Steps:

- **Checkout code**
- **Install dependencies**
- **Run ESLint**
- **Run Jest tests**
   
---
<!-- Branch Protection -->
## 🔐 Branch Protection Rules

The main branch is protected with:

- ✅ Required PR reviews (1 approval)
- ✅ Required CI checks to pass
- ❌ No direct commits allowed
- 🔁 Squash/rebase merge strategy

---

<!-- Failure Conditions -->
## ❌ Failure Conditions
A PR will be blocked if:

- Lint errors exist
- Unit tests fail
- CI pipeline fails
- No approval is provided

---
<!-- Notify -->
## 🔔 Notifications
GitHub provides:

- PR status updates
- Email notifications
- UI alerts in the repository

---
<!-- Options -->
## ⭐ Optional integrations:
- Slack notifications
- Webhooks

---
<!-- Metrics -->
## 📊 Metrics (Scalability Considerations)

| Metric        | Description                |
| ------------- | -------------------------- |
| MTTR          | Time to fix failing builds |
| Failure Rate  | % of failed CI runs        |
| Build Time    | CI execution duration      |
| Test Coverage | Code coverage %            |



