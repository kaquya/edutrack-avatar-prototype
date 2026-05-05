import type { AttachmentId } from "../types/avatar";

export type AttachmentConfig = {
    id: AttachmentId;
    label: string;
};

export const attachments: AttachmentConfig[] = [
    {
        id: "backpack",
        label: "Backpack",
    },
    {
        id: "glasses",
        label: "Glasses",
    },
    {
        id: "book",
        label: "Book",
    },
];