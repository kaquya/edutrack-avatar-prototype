import { useGLTF } from "@react-three/drei";
import type { AvatarId } from "../types/avatar";
import { getAvatarConfig } from "../data/avatars";

type AvatarModelProps = {
    avatarId: AvatarId;
};

export default function AvatarModel({ avatarId }: AvatarModelProps) {
    const avatar = getAvatarConfig(avatarId);

    if (!avatar.modelPath) {
        return null
    }

    const gltf = useGLTF(avatar.modelPath);

    return (
        <primitive
            object={gltf.scene}
            position={[0,0,0]}
            scale={1}
        />
    );
}