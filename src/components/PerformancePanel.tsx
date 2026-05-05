import type { PerformanceMetrics } from "../types/performance";

type PerformancePanelProps = {
    metrics: PerformanceMetrics;
};

export default function PerformancePanel({ metrics }: PerformancePanelProps) {
    return (
        <div className="performance-card">
            <strong>Performance</strong>
            <span>FPS: {metrics.fps}</span>
            <span>Draw calls: {metrics.drawCalls}</span>
            <span>Triangles: {metrics.triangles}</span>
            <span>Geometries: {metrics.geometries}</span>
            <span>Textures: {metrics.textures}</span>
        </div>
    )
}