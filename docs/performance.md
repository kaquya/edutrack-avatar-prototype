# Performance Guide

## Overview

This document outlines how performance is handled and evaluated in the EduTrack avatar prototype.

The goal is to ensure that 3D avatars can be rendered smoothly in a browser environment.

---

## Key Metrics

The prototype focuses on the following performance metrics:

- FPS (Frames Per Second)
- Triangle count
- Draw calls
- Number of objects
- Texture usage

---

## Target Performance

- Stable FPS (target: ~60 FPS)
- No major frame drops during interaction
- Fast initial loading time
- Smooth camera movement

---

## Performance Risks

Performance in browser-based 3D rendering can be affected by:

- High polygon count
- Large textures
- Too many draw calls
- Complex materials
- Excessive lighting
- Too many animated objects

---

## Optimization Rules

To maintain good performance:

### Models

- Keep avatars low-poly (approx. 5k–20k triangles)
- Avoid unnecessary geometry
- Merge meshes where possible

### Textures

- Use small textures (512–1024)
- Avoid high-resolution textures unless required
- Prefer simple materials over complex shaders

### Scene

- Limit number of lights
- Avoid heavy shadow calculations
- Keep environment simple
- Avoid too many objects in the scene

### Rendering

- Limit device pixel ratio (DPR)
- Avoid unnecessary re-renders
- Use efficient asset loading

---

## Implementation Notes

The prototype includes a basic performance panel displaying:

- FPS (updated every second)

Further metrics (optional future improvements):

- Draw calls
- Triangle count
- Memory usage

---

## Browser Considerations

Performance will vary depending on:

- GPU capability
- Device type (desktop vs mobile)
- Browser implementation
- Screen resolution

The prototype should be tested on different devices where possible.

---

## Testing Approach

Performance should be tested by:

- Switching avatars
- Enabling multiple attachments
- Rotating the camera continuously
- Observing FPS stability

---

## Goal of This Prototype

The purpose of this prototype is not maximum visual quality.

It is to:

- validate feasibility of browser-based avatars
- identify performance limits
- establish asset guidelines for future development

---