export type AnimationId = "idle" | "wave" | "walk";

export const animations: { id: AnimationId; label: string }[] = [
    { id: "idle", label: "Idle" },
    { id: "wave", label: "Wave" },
    { id: "walk", label: "Walk" },
];