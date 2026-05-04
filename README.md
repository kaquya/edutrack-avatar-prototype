# EduTrack Avatar Prototype

## Overview

This project is a technical prototype for rendering and interacting with 3D avatars in the browser using React and three.js.

The goal is to evaluate whether EduTrack can integrate customizable avatars while maintaining good browser performance.

---

## Features

- Three placeholder avatars (male, female, neutral)
- Neutral 3D environment
- Orbit camera (user can rotate around avatar)
- Toggleable attachments (e.g. backpack, glasses, book)
- Basic placeholder animations
- Performance panel (FPS)
- Vercel deployment ready

---

## Tech Stack

- React (Vite)
- TypeScript
- three.js
- React Three Fiber
- Drei

---

## Getting Started

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build project:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

---

## Project Structure

```txt
docs/               → documentation
public/models/      → 3D assets (.glb)
src/components/     → React components
src/data/           → asset configs
src/types/          → shared types
```

---

## Purpose

This is not a production system.

It is a technical prototype to:

- validate rendering performance
- test avatar integration workflow
- define asset structure for EduTrack

--- 

## Documentation

See `/docs` for detailed technical documentation.

---

## Status

Work in progress (prototype phase)