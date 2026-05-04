# Blender Asset Guide

## Overview

This document explains how to create, prepare, and export 3D assets for the EduTrack avatar prototype.

All assets must follow these guidelines to ensure correct rendering and consistent behaviour in the browser.

---

## General Rules

- Keep models low-poly
- Avoid unnecessary detail
- Use simple materials
- Avoid complex shaders
- Avoid large textures
- Keep naming consistent

---

## Avatar Requirements

Each avatar must:

- Be centered at world origin `(0, 0, 0)`
- Have feet aligned with ground (`y = 0`)
- Face forward (positive Z-axis)
- Use consistent scale across all avatars

---

## Attachment Requirements

Attachments (e.g. backpack, glasses, book) must:

- Be modeled separately
- Be centered around their intended attachment point
- Use consistent scale relative to avatars

---

## Recommended Poly Count

- Avatars: ~5,000 – 20,000 triangles
- Attachments: as low as possible

This is a prototype, so simplicity is preferred over detail.

---

## Materials & Textures

- Prefer solid colors or simple materials
- If textures are used:
  - Keep them small (512–1024)
  - Avoid unnecessary maps
- Avoid complex node setups

---

## Naming Convention

Use clear and consistent names:

```txt
male.glb
female.glb
neutral.glb

backpack.glb
glasses.glb
book.glb
```

---