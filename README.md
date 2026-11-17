# Vorizo Info Tech

Modern, decoupled web application and CMS for **Vorizo Info Tech**.

---

## Architecture Overview

The repository is structured into two decoupled, independent applications:

```text
vorizo/
├── frontend/       # Next.js 16 (React 19) website (deployed to Vercel)
└── backend/        # Payload CMS 3 + Supabase PostgreSQL (deployed to Vercel/Render)
```

- **`frontend/`**: Ultra-fast Next.js website. Fetches dynamic content from the backend REST API (`/api/testimonials`, `/api/jobs`, etc.). If the backend is offline or not configured, it gracefully falls back to complete built-in default content so the site never crashes.
- **`backend/`**: Standalone Payload CMS 3 admin dashboard (`/admin`) and REST/GraphQL API connected to Supabase PostgreSQL.

---

## 🚀 Quick Start (Local Development)

### 1. Backend (Payload CMS)
```bash
cd backend
npm install
npm run dev
```
- Admin Panel: [http://localhost:3001/admin](http://localhost:3001/admin)
- API endpoint: [http://localhost:3001/api](http://localhost:3001/api)
- Default credentials: `test@example.com` / `password123`

### 2. Frontend (Website)
```bash
cd frontend
npm install
npm run dev
```
- Website: [http://localhost:3000](http://localhost:3000)
- Configured via `frontend/.env.local`:
  ```env
  NEXT_PUBLIC_CMS_URL=http://localhost:3001
  ```

---

## 🌐 Deployment Guide

### Deploying Frontend to Vercel
1. In Vercel Project Settings &rarr; **General** &rarr; **Root Directory**:
   - Set to `frontend`.
2. In Vercel Project Settings &rarr; **Environment Variables**:
   - `NEXT_PUBLIC_CMS_URL`: Your deployed backend URL (e.g. `https://your-backend.vercel.app` or `https://your-backend.onrender.com`).
3. Deploy! The frontend builds in seconds with zero database friction.

### Deploying Backend to Vercel / Render
1. Set the **Root Directory** to `backend`.
2. Configure **Environment Variables**:
   - `DATABASE_URI`: Your Supabase connection string (Port 5432 session pooler):
     ```text
     postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres
     ```
   - `PAYLOAD_SECRET`: Your 64-char secret key.
   - `NEXT_PUBLIC_SERVER_URL`: Your deployed backend production domain.
