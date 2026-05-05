import { useGLTF } from "@react-three/drei";
import type { AttachmentId } from "../types/avatar";
import { attachments } from "../data/attachments";

type AttachmentModelProps = {
    attachmentId: AttachmentId;
};

const attachmentTransforms: Record<
AttachmentId,
{
    position: [number, number, number];
    scale: number;
}
> = {
  backpack: {
    position: [0, 1.1, -0.28],
    scale: 1,
  },
  glasses: {
    position: [0, 1.77, 0.25],
    scale: 1,
  },
  book: {
    position: [0.5, 0.95, 0.18],
    scale: 1,
  },
};

export default function AttachmentModel({ attachmentId }: AttachmentModelProps) {
    const attachment = attachments.find((item) => item.id === attachmentId);

    if (!attachment?.modelPath) {
        return null;
    }

    const gltf = useGLTF(attachment.modelPath);
    const transform = attachmentTransforms[attachmentId];

    return (
        <primitive
            object={gltf.scene}
            position={transform.position}
            scale={transform.scale}
        />
    );
}