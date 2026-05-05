import type { QualityId } from "../types/avatar";

export type QualitySetting = {
    id: QualityId;
    label: string;
    dpr: [number, number];
    shadowsEnabled: boolean;
    shadowOpacity: number;
    shadowBlur: number;
};

export const qualitySettings: QualitySetting[] = [
    {
        id: "low",
        label: "Low",
        dpr: [1, 1],
        shadowsEnabled: false,
        shadowOpacity: 9,
        shadowBlur: 0,
    },
    {
        id: "medium",
        label: "Medium",
        dpr: [1, 1.5],
        shadowsEnabled: true,
        shadowOpacity: 0.25,
        shadowBlur: 1.5,
    },
    {
        id: "high",
        label: "High",
        dpr: [1, 2],
        shadowsEnabled: true,
        shadowOpacity: 0.35,
        shadowBlur: 2.5,
    },
];

export function getQualitySetting(id: QualityId): QualitySetting {
    return qualitySettings.find((setting) => setting.id === id) ?? qualitySettings[1];
}