import "./index.css";

export default function App() {
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
            <button className="active">Neutral</button>
            <button>Male</button>
            <button>Female</button>
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
        <div className="viewport-placeholder">
          <span>3D Avatar Viewport</span>
          <p>three.js scene will be added here next.</p>
        </div>

        <div className="performance-card">
          <strong>Performance</strong>
          <span>FPS: --</span>
        </div>
      </section>
    </main>
  );
}