# MERIT+ — Student Merit Management System

**MERIT+** is a front-end web application developed for **IMS566** to help students track accumulated merit points, review completed programme history, browse upcoming rolling 7-day programmes, and view student profile details.

---

## Student & Project Information

* **Student Name:** Dhea Safia binti Adha
* **Student ID:** `2025123456`
* **Faculty:** Faculty of Information Management
* **Programme:** Bachelor (Hons) of Information Science System Management
* **Campus / College:** UiTM Puncak Perdana / Kolej Jasmine
* **Academic Session:** `2026/2027`
* **Course:** IMS566

---

## Demo Login Credentials

Use the following demo credentials on the login page (`index.html`):

* **Student ID:** `2025123456`
* **Password:** `merit123`

---

## Key Features & Pages

* **Login & Access Protection (`index.html`):** Authenticates demo student credentials using `localStorage` (`isLoggedIn`) and protects internal portal routes.
* **Dashboard (`dashboard.html`):** Displays summary cards (Total Accumulated Merit, College Merit, Non-College Merit), a **Doughnut Chart** (`#meritChart`) comparing College vs. Non-College merit, and a 7-day upcoming programmes table.
* **My Merit (`merit.html`):** Displays merit summary cards, a **Monthly Accumulated Merit Trend Stacked Bar Chart** (`#monthlyMeritChart`) across `Feb 2026` – `Jun 2026` (`College 0.75` vs. `Non-College 0.25`), the completed programme history table (`15 Completed`), and the merit calculation guide.
* **Programmes (`programs.html`):** Shows available rolling 7-day upcoming programmes with category badges, merit values, and a Bootstrap modal for viewing full programme descriptions and details.
* **My Profile (`profile.html`):** Displays the student's profile header, avatar initial, and academic/contact details.

---

## Merit Calculation Logic

Merit points are calculated dynamically from `completedProgrammes` in `app.js`:

| Category | Merit Points per Programme | Completed Count | Total Merit |
| :--- | :---: | :---: | :---: |
| **College** | `0.75` | `6` | `4.50` |
| **Non-College** | `0.25` | `9` | `2.25` |
| **Total Accumulated** | — | **`15`** | **`6.75`** |

---

## Tech Stack

* **HTML5**
* **CSS3** (`style.css`)
* **JavaScript (ES6+)** (`app.js`)
* **Bootstrap 5** (loaded via CDN)
* **Chart.js** (loaded via CDN for Doughnut and Stacked Bar visualizations)

---

## Project Structure

```text
merit-plus/
├── index.html
├── dashboard.html
├── merit.html
├── programs.html
├── profile.html
├── style.css
├── app.js
└── README.md