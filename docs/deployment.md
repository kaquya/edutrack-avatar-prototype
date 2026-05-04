# Deployment Guide

## Overview

This document explains how to run, build, and deploy the EduTrack avatar prototype.

---

## Local Development

Start the development server:

```bash
npm run dev
```

The app will be available at:

```txt
http://localhost:5173
```

---

## Production Build

Create a production build:

```
npm run build
```

This generates the output in:

```
dist/
```

---

## Preview Production Build

Test the production build locally:

```
npm run preview
```

---

##  Vercel Deployment

The project is designed to be deployed using Vercel.

**Recommended Setup**
1. Push the project to GitHub
2. Import the repository into Vercel
3. Use the following settings:

```
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

Vercel will automatically create preview deployments for each branch.

---

## Deployment Workflow

Development follows this flow:

```
feature/* → develop → main
```

`feature/*` → individual tasks
`develop` → integration branch
`main` → stable / deployable version

---

## Notes

- Always test the production build before deploying
- Ensure assets (.glb files) are correctly placed in public/models/
- Verify that the application loads without errors after deployment

---