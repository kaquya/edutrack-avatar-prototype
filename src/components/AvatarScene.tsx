import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";

function PlaceholderAvatar() {
    return (
        <group position={[0, 0, 0]}>
            {/* head */}
            <mesh position={[0, 1.75, 0]}>
                <sphereGeometry args={[0.28, 32, 32]} />
                <meshStandardMaterial color="#f2c6a0" />
            </mesh>

            {/* body */}
            <mesh position={[0, 1.1, 0]}>
                <capsuleGeometry args={[0.32, 0.7, 8, 16]} />
                <meshStandardMaterial color="#2563eb" />
            </mesh>

            {/* left arm */}
            <mesh position={[-0.42, 1.12, 0]} rotation={[0, 0, -0.25]}>
                <capsuleGeometry args={[0.09, 0.55, 8, 12]} />
                <meshStandardMaterial color="#f2c6a0" />
            </mesh>

            {/* right arm */}
            <mesh position={[0.42, 1.12, 0]} rotation={[0, 0, 0.25]}>
                <capsuleGeometry args={[0.09, 0.55, 8, 12]} />
                <meshStandardMaterial color="#f2c6a0" />
            </mesh>

            {/* left leg */}
            <mesh position={[-0.15, 0.45, 0]}>
                <capsuleGeometry args={[0.1, 0.65, 8, 12]} />
                <meshStandardMaterial color="#111827" />
            </mesh>

            {/* right leg */}
            <mesh position={[0.15, 0.45, 0]}>
                <capsuleGeometry args={[0.1, 0.65, 8, 12]} />
                <meshStandardMaterial color="#111827" />
            </mesh>
        </group>
    );
}

export default function AvatarScene() {
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

            <PlaceholderAvatar />

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