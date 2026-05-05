import { useState } from "react";
import AvatarScene from "./components/AvatarScene";

import { avatars } from "./data/avatars";
import { attachments } from "./data/attachments";
import { animations } from "./data/animations";
import { qualitySettings } from "./data/qualitySettings";

import type { 
  AvatarId, 
  AttachmentId, 
  AnimationId,
  QualityId,
 } from "./types/avatar";

import PerformancePanel from "./components/PerformancePanel";
import type { PerformanceMetrics } from "./types/performance";

import "./index.css";

export default function App() {
  const [avatarId, setAvatarId] = useState<AvatarId>("neutral");
  const [enabledAttachments, setEnabledAttachments] = useState<AttachmentId[]>([]);
  const [animationId, setAnimationId] = useState<AnimationId>("idle");
  const [qualityId, setQualityId] = useState<QualityId>("medium");

  const toggleAttachment = (attachmentId: AttachmentId) => {
    setEnabledAttachments((current) =>
      current.includes(attachmentId)
        ? current.filter((id) => id !== attachmentId)
        : [...current, attachmentId]
    );
  };

  const initialPerformanceMetrics: PerformanceMetrics = {
    fps: 0,
    drawCalls: 0,
    triangles: 0,
    geometries: 0,
    textures: 0,
  };

  const [performanceMetrics, setPerformanceMetrics] =
    useState<PerformanceMetrics>(initialPerformanceMetrics);

  return (
    <main className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <p className="eyebrow">EduTrack Prototype</p>
          <h1>Avatar Viewer</h1>
          <p>
            Browser-based 3D avatar prototype for testing integration,
            attachments, and performance.
          </p>
        </div>

        <section className="panel-section">
          <h2>Avatar</h2>

          <div className="button-group">
            {avatars.map((avatar) => (
              <button
                key={avatar.id}
                className={avatarId === avatar.id ? "active" : ""}
                onClick={() => setAvatarId(avatar.id)}
              >
                {avatar.label}
              </button>
            ))}
          </div>
        </section>

        <section className="panel-section">
          <h2>Attachments</h2>

          <div className="button-group">
            {attachments.map((attachment) => (
              <button
                key={attachment.id}
                className={enabledAttachments.includes(attachment.id) ? "active" : ""}
                onClick={() => toggleAttachment(attachment.id)}
              >
                {attachment.label}
              </button>
            ))}
          </div>
        </section>

        <section className="panel-section">
          <h2>Animation</h2>

          <select
            value={animationId}
            onChange={(e) => setAnimationId(e.target.value as AnimationId)}
          >
            {animations.map((anim) => (
              <option key={anim.id} value={anim.id}>
                {anim.label}
              </option>
            ))}
          </select>
        </section>

        <section className="panel-section">
          <h2>Quality</h2>

          <select
            value={qualityId}
            onChange={(e) => setQualityId(e.target.value as QualityId)}
          >
            {qualitySettings.map((quality) => (
              <option key={quality.id} value={quality.id}>
                {quality.label}
              </option>
            ))}
          </select>
        </section>
      </aside>

      <section className="viewport">
        <AvatarScene
          avatarId={avatarId}
          enabledAttachments={enabledAttachments}
          animationId={animationId}
          qualityId={qualityId}
          onPerformanceUpdate={setPerformanceMetrics}
        />

        <PerformancePanel metrics={performanceMetrics} />
      </section>
    </main>
  );
}