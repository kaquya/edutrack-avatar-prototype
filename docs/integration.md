# Avatar Integration Guide (Tech Documentation)

## Overview

This document explains how avatars are integrated, modified, and extended in the EduTrack avatar prototype.

---

## File Format

All 3D assets must use:

```txt
.glb (GLTF Binary)
```

Reason:
- Fast loading
- Compact format
- Supported by three.js
- Supports animations     

---

## Folder Structure

```txt
public/models/avatars
public/models/attachments
```

---

## Avatar Requirements

Each avatar must follow these rules:
- Positioned at world origin `(0, 0, 0)`
- Feet aligned to ground level `(y = 0)`
- Facing forward (positive Z-axis)
- Consistent scale across all avatars

---

## How Avatars Are Loaded

Avatars are loaded using React Three Fiber:

```ts
useGLTF("/models/avatars/male.glb")
```

Rendered via:

```ts
<primitive object={gltf.scene} />
```

---

## Avatar Switching

Avatars are switched by changing the model path:

```ts
const avatar = avatars[avatarId];
```

No reloading logic required.

---

## Attachments

Attachments are separate `.glb` files.

Examples:

```txt
backpack.glb
glasses.glb
book.glb
```

They are manually positioned:

```ts
const positionMap = {
    backpack: [0, 1.2, -0.35],
    glasses:  [0, 1.75, 0.28],
};
```

---

## Modify Avatars

To modify an avatar:
1. Open the .blend file in Blender
2. Edit mesh/materials
3. Export as .glb
4. Replace file in:

```txt
public/models/avatars/
```

No code changes required if structure stays consistent.

---

## Adding a New Avatar

1. Create new `.glb`
2. Place in:

```txt
public/models/avatars/
```

3. Add config in:

```ts
src/data/avatars.ts
```

4. Define position + scale

---

## Animations (Optional)

If animations exist:
- Stored in `gltf.animations`
- Can be played using Drei animation hooks

---

## Constraints

- Keep models low-poly
- Avoid large textures
- Keep scale consistent
- Avoid unnecessary complexity

---

### Purpose

This system is designed to be:
- easy to extend
- easy to maintain
- performant in browser environments

---

---

## Common Issues

- Avatar appears too small or too large → scale mismatch
- Avatar floats above ground → incorrect origin
- Attachment misplaced → incorrect position offsets
- Model not loading → wrong file path or export format

Ensure all models follow the Blender guidelines.

---