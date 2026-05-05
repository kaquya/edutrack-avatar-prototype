import type { AvatarId } from "../types/avatar";

export type AvatarConfig = {
    id: AvatarId;
    label: string;
    bodyColor: string;
    legColor: string;
    shoulderWidth: number;
    bodyScale: [number, number, number];
    modelPath?: string;
};

export const avatars: AvatarConfig[] = [
    {
        id: "neutral",
        label: "Neutral",
        bodyColor: "#64748b",
        legColor: "#111827",
        shoulderWidth: 0.42,
        bodyScale: [1, 1, 1],
        modelPath: "/models/avatars/neutral.glb",
    },
    {
        id: "male",
        label: "Male",
        bodyColor: "#2563eb",
        legColor: "#1f2937",
        shoulderWidth: 0.48,
        bodyScale: [1.08, 1, 1],
        modelPath: "/models/avatars/male.glb",
    },
    {
        id: "female",
        label: "Female",
        bodyColor: "#c026d3",
        legColor: "#374151",
        shoulderWidth: 0.38,
        bodyScale: [0.92, 1.02, 1],
        modelPath: "/models/avatars/female.glb",
    },
];

export function getAvatarConfig(id: AvatarId): AvatarConfig {
    return avatars.find((avatar) => avatar.id === id) ?? avatars[0];
}