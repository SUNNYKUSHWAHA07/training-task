# Tasks Office

This repository contains a simple **full-stack authentication demo** with:

- **Backend** (Node.js + Express + MongoDB)
  - Authentication endpoints (`/auth/register`, `/auth/login`, `/auth/profile`)
  - JWT cookie-based auth middleware

- **Frontend** (React + Vite)
  - Tailwind CSS styling
  - React Router v6 routing
  - TanStack Query (React Query) for data fetching
  - Example auth pages + a demo fetch list

---

## 📁 Project structure

```
backend/          # Express API (MongoDB + JWT auth)
frontend/         # Vite + React + Tailwind + React Query
  src/
    app/          # App bootstrapping + routing + providers
    api/          # API call helpers (axios)
    features/     # Feature modules (auth, profile, demo)
    components/   # Shared UI components
    config/       # Config helpers (Axios, query client)
    styles/       # Tailwind globals
```

---

## 🚀 Getting started

### 1) Backend (API)

1. Open a terminal and go to `backend/`:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server (example):
   ```bash
   node index.js
   ```

The backend listens on port **3000** by default and expects MongoDB running.

> 📌 Make sure your `.env` provides `JWT_SECRET` and `MONGO_URI` (or adjust `config/db.config.js` accordingly).

---

### 2) Frontend (React)

1. Open a new terminal and go to `frontend/`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the dev server:
   ```bash
   npm run dev
   ```

The frontend runs on **http://localhost:5173/** and calls the backend at **http://localhost:3000/**.

---

## ✅ App features

- **Signup / Login** (JWT stored in cookie)
- **Profile page** (protected route, requires auth)
- **React Query** used for data fetching + caching
- **Tailwind CSS** styling throughout
- **Global loading indicator** using `useIsFetching()`

---

## 🔧 Notes & Tips

- If you want to change the backend base URL, edit:
  - `frontend/src/config/axios/axiosInstance.js`

- Add new endpoints in:
  - Backend: `backend/routes/auth.routes.js` + `backend/controllers/auth.controller.js`
  - Frontend: `frontend/src/api/auth/*` + React Query hooks

---

Happy hacking! 🚀
