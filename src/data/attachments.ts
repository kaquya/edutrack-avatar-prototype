import type { AttachmentId } from "../types/avatar";

export type AttachmentConfig = {
    id: AttachmentId;
    label: string;
    modelPath?: string;
};

export const attachments: AttachmentConfig[] = [
    {
        id: "backpack",
        label: "Backpack",
        modelPath: "/models/attachments/backpack.glb",
    },
    {
        id: "glasses",
        label: "Glasses",
        modelPath: "/models/attachments/glasses.glb",
    },
    {
        id: "book",
        label: "Book",
        modelPath: "/models/attachments/book.glb",
    },
];