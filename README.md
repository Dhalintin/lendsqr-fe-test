# Lendsqr Frontend Assessment

A responsive dashboard-style web application built as part of the Lendsqr frontend engineering assessment.

The project implements key pages and features from the provided Figma design using **React**, **TypeScript**, **Vite**, **React Router**, and **SCSS (CSS Modules)** — no external UI libraries were used.

## Features Implemented

- **Login page** (public)
- **Protected dashboard layout** with fixed sidebar and sticky header
- **Users list page** with:
  - Stats cards (total users, active, with loans, with savings)
  - Paginated, sortable table
  - Inline row editing
  - Contextual action menu (View Details, Blacklist User, Activate User)
- **User Details page** with:
  - Profile header (avatar, name, ID, tier, balance, bank)
  - Tab navigation (General Details, Documents, Bank Details, Loans, Savings, App & System)
  - Personal Information, Education & Employment, Socials, and Guarantor sections
- **Routing & auth simulation** (protected routes)
- **State management** using React hooks (`useState`, `useMemo`)
- **Sorting** on table columns (asc/desc)
- **Pagination** with items-per-page selector

## Tech Stack

- **React** 18+
- **TypeScript**
- **Vite** (build tool & dev server)
- **React Router v6** (routing)
- **SCSS + CSS Modules** (scoped styling)
- **React Hooks** (state & memoization)

## Folder Structure

```
lendsqr-frontend/
├── public/
│ ├── svgs/
│ └── index.html
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Dashboard/
│ │ │ ├── Header/
│ │ │ ├── Pagination/
│ │ │ ├── SideBar/
│ │ │ ├── StatsCard/
│ │ │ ├── UserDetails/
│ │ │ └── UsersTable/
│ │ ├── Login/
│ │ └── shared/
│ ├── context/
│ │ └── AuthContext.tsx
│ ├── pages/
│ │ ├── Dashboard.tsx
│ │ ├── Login.tsx
│ │ └── NotFound.tsx
│ ├── styles/
│ │ ├── base/
│ │ ├── variables/
│ │ └── main.scss
│ ├── utils/
│ ├── App.tsx
│ └── main.tsx
├── .eslintrc.cjs
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

## Code Structure Highlights

- **Feature slicing** — components grouped by domain (Dashboard/)
- **CSS Modules** — all component styles scoped (`*.module.scss`)
- **Global styles** — variables, reset, base rules in `styles/main.scss`
- **Routing** — protected routes using `DashboardLayout` + `RequireAuth`
- **State** — local `useState` + `useMemo` (no Redux for this scope)
- **TypeScript** — full typing on props, state, interfaces
- **Responsive** — media queries in SCSS (mobile-first adjustments)
- **Accessibility** — semantic HTML, labels, focus states

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/lendsqr-frontend.git
cd lendsqr-frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

Open → http://localhost:5173Available Scriptsbash

npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## How to Run / Test ManuallyLogin page

→ http://localhost:5173/login

- **Fill the login form with random data**
- **Click login**

### Made with for Lendsqr Frontend Assessment

January 2026
