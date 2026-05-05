import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import type { AvatarId, AttachmentId } from "../types/avatar";
import { getAvatarConfig } from "../data/avatars";

type AvatarSceneProps = {
    avatarId: AvatarId;
    enabledAttachments: AttachmentId[];
};

type PlaceholderAvatarProps = {
    avatarId: AvatarId;
};

type PlaceholderAttachmentProps = {
    attachmentId: AttachmentId;
}

function PlaceholderAttachment({ attachmentId }: PlaceholderAttachmentProps) {
    if (attachmentId === "backpack") {
        return (
            <mesh position={[0, 1.1, -0.28]} scale={[0.7, 0.9, 0.22]}>
                <boxGeometry args={[0.7, 0.8, 0.25]} />
                <meshStandardMaterial color="#334155" />
            </mesh>
        );
    }

    if (attachmentId === "glasses") {
        return (
            <group position={[0, 1.77, 0.25]}>
                <mesh position={[-0.11, 0, 0]}>
                    <torusGeometry args={[0.085, 0.012, 8, 24]} />
                    <meshStandardMaterial color="#111827" />
                </mesh>

                <mesh position={[0.11, 0, 0]}>
                    <torusGeometry args={[0.085, 0.012, 8, 24]} />
                    <meshStandardMaterial color="#111827" />
                </mesh>

                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.08, 0.015, 0.015]} />
                    <meshStandardMaterial color="#111827" />
                </mesh>
            </group>
        );
    }

    if (attachmentId === "book") {
        return (
            <group position={[0.5, 0.95, 0.18]} rotation={[0.25, 0, -0.25]}>
                <mesh scale={[0.28, 0.38, 0.06]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#dc2626" />
                </mesh>

                <mesh position={[0, 0, 0.04]} scale={[0.23, 0.32, 0.025]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#f8fafc" />
                </mesh>
            </group>
        );
    }

    return null;
}

function PlaceholderAvatar({ avatarId }: PlaceholderAvatarProps) {
    const avatar = getAvatarConfig(avatarId);

    return (
        <group position={[0, 0, 0]}>
            {/* head */}
            <mesh position={[0, 1.75, 0]}>
                <sphereGeometry args={[0.28, 32, 32]} />
                <meshStandardMaterial color="#f2c6a0" />
            </mesh>

            {/* body */}
            <mesh position={[0, 1.1, 0]} scale={avatar.bodyScale}>
                <capsuleGeometry args={[0.32, 0.7, 8, 16]} />
                <meshStandardMaterial color={avatar.bodyColor} />
            </mesh>

            {/* left arm */}
            <mesh
                position={[-avatar.shoulderWidth, 1.12, 0]}
                rotation={[0, 0, -0.25]}
            >
                <capsuleGeometry args={[0.09, 0.55, 8, 12]} />
                <meshStandardMaterial color="#f2c6a0" />
            </mesh>

            {/* right arm */}
            <mesh
                position={[avatar.shoulderWidth, 1.12, 0]}
                rotation={[0, 0, 0.25]}
            >
                <capsuleGeometry args={[0.09, 0.55, 8, 12]} />
                <meshStandardMaterial color="#f2c6a0" />
            </mesh>

            {/* left leg */}
            <mesh position={[-0.15, 0.45, 0]}>
                <capsuleGeometry args={[0.1, 0.65, 8, 12]} />
                <meshStandardMaterial color={avatar.legColor} />
            </mesh>

            {/* right leg */}
            <mesh position={[0.15, 0.45, 0]}>
                <capsuleGeometry args={[0.1, 0.65, 8, 12]} />
                <meshStandardMaterial color={avatar.legColor} />
            </mesh>
        </group>
    );
}

export default function AvatarScene({
    avatarId,
    enabledAttachments
}: AvatarSceneProps) {
    return (
        <Canvas
            camera={{ position: [0, 1.6, 4], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{
                antialias: true,
                powerPreference: "high-performance",
            }}
        >
            <color attach="background" args={["#eef2f7"]} />

            <ambientLight intensity={1.1} />
            <directionalLight position={[3, 5, 3]} intensity={2} />

            <PlaceholderAvatar avatarId={avatarId} />

            {enabledAttachments.map((attachmentId) => (
                <PlaceholderAttachment
                    key={attachmentId}
                    attachmentId={attachmentId}
                />
            ))}

            <ContactShadows
                position={[0, -0.01, 0]}
                opacity={0.35}
                scale={5}
                blur={2}
            />

            <OrbitControls
                target={[0, 1.1, 0]}
                enablePan={false}
                minDistance={2.5}
                maxDistance={6}
            />
        </Canvas>
    );
}