import { useState } from "react";
import AvatarScene from "./components/AvatarScene";
import { avatars } from "./data/avatars";
import { attachments } from "./data/attachments";
import type { AvatarId, AttachmentId } from "./types/avatar";
import "./index.css";

export default function App() {
  const [avatarId, setAvatarId] = useState<AvatarId>("neutral");
  const [enabledAttachments, setEnabledAttachments] = useState<AttachmentId[]>([]);

  const toggleAttachment = (attachmentId: AttachmentId) => {
    setEnabledAttachments((current) => 
      current.includes(attachmentId)
        ? current.filter((id) => id !== attachmentId)
        : [...current, attachmentId]
      );
  };

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

          <select>
            <option>Idle</option>
            <option>Wave</option>
            <option>Walk</option>
          </select>
        </section>
      </aside>

      <section className="viewport">
        <AvatarScene 
          avatarId={avatarId} 
          enabledAttachments={enabledAttachments}
        />

        <div className="performance-card">
          <strong>Performance</strong>
          <span>FPS: --</span>
        </div>
      </section>
    </main>
  );
}