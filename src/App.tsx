import { useState } from "react";
import AvatarScene from "./components/AvatarScene";
import { avatars } from "./data/avatars";
import type { AvatarId } from "./types/avatar";
import "./index.css";

export default function App() {
  const [avatarId, setAvatarId] = useState<AvatarId>("neutral");

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
            <button>Backpack</button>
            <button>Glasses</button>
            <button>Book</button>
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
        <AvatarScene avatarId={avatarId} />

        <div className="performance-card">
          <strong>Performance</strong>
          <span>FPS: --</span>
        </div>
      </section>
    </main>
  );
}