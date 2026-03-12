# 🔐 IAM / Okta Login Flow Simulator

![HTML](https://img.shields.io/badge/HTML-Frontend-orange)
![CSS](https://img.shields.io/badge/CSS-Styling-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow)
![JSON](https://img.shields.io/badge/JSON-Data-lightgrey)
![Cybersecurity](https://img.shields.io/badge/Focus-Identity%20Security-darkgreen)
![Status](https://img.shields.io/badge/Project-Live-success)


A lightweight cybersecurity project that simulates a modern **Identity and Access Management (IAM)** login flow using **username/password authentication, Multi-Factor Authentication (MFA), session tokens, brute-force protection, and role-based access display**.

This project demonstrates core identity security concepts used by platforms like **Okta, Auth0, and Microsoft Entra ID**.

---

## 🚀 Overview

Identity is one of the most critical layers in modern cybersecurity. Attackers frequently target login systems through weak credentials, brute-force attempts, password spraying, and MFA abuse.

This project was built to demonstrate how a secure login workflow functions and how identity systems reduce authentication risk through layered security controls.

---

## ✨ Features

- Username and password authentication
- MFA verification flow
- Session token generation
- Failed login attempt tracking
- Account lockout after repeated failed attempts
- Role-based user display
- Logout functionality
- Clean responsive interface

---

## 🛠 Tech Stack

- **HTML** – application structure
- **CSS** – UI styling and responsive layout
- **JavaScript** – authentication and security logic
- **JSON** – simulated user database

---

## 📂 Project Structure

```text
iam-login-flow-simulator/
├── index.html
├── style.css
├── script.js
├── users.json
└── README.md





⚙️ How It Works
1. The user enters a username and password.
2. The application validates the credentials against a local JSON user database.
3. If the credentials are correct, the MFA prompt appears.
4. The user enters the correct 6-digit MFA code.
5. The app generates a simulated session token.
6. The dashboard displays the authenticated user and assigned role.
7. If repeated failures occur, the application locks the account to simulate brute-force protection.





🧪 Test Credentials
Admin User
* Username: admin
* Password: Password123!
* MFA Code: 123456
Security Analyst User
* Username: analyst
* Password: SecurePass456!
* MFA Code: 654321





🔐 Security Concepts Demonstrated
This project highlights important cybersecurity concepts, including:
* Authentication
* Multi-Factor Authentication (MFA)
* Session management
* Brute-force mitigation
* Role-based access awareness
* Login security monitoring
These concepts are foundational for roles in:
* Identity and Access Management (IAM)
* SOC Analysis
* Security Engineering
* Cloud Identity Security
* GRC with technical security awareness


🎯 Why This Project Matters
Modern organizations rely heavily on identity security platforms to protect users, applications, and enterprise resources.
This project demonstrates practical understanding of:
* secure authentication workflows
* defensive login protections
* access control fundamentals
* identity-focused security design
It is a strong hands-on portfolio project for cybersecurity professionals building skills in IAM, SOC, cloud, and defensive security


👩‍💻 Author
Tylesha Alexander
Cybersecurity | GRC | Threat Detection | Identity Security | AI Security
Building hands-on security projects that demonstrate real-world defensive concepts and practical cybersecurity workflows.


