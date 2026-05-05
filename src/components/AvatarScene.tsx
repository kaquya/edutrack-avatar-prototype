import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { AvatarId, AttachmentId, AnimationId } from "../types/avatar";
import type { PerformanceMetrics } from "../types/performance";
import AvatarModel from "./AvatarModel";
import AttachmentModel from "./AttachmentModel";
import { getAvatarConfig } from "../data/avatars";

const USE_GLB_MODELS = false;

type AvatarSceneProps = {
  avatarId: AvatarId;
  enabledAttachments: AttachmentId[];
  animationId: AnimationId;
  onPerformanceUpdate: (metrics: PerformanceMetrics) => void;
};

type PlaceholderAvatarProps = {
  avatarId: AvatarId;
  animationId: AnimationId;
};

type PlaceholderAttachmentProps = {
  attachmentId: AttachmentId;
};

type ScenePerformanceTrackerProps = {
  onPerformanceUpdate: (metrics: PerformanceMetrics) => void;
};

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

function PlaceholderAvatar({ avatarId, animationId }: PlaceholderAvatarProps) {
  const avatar = getAvatarConfig(avatarId);

  const groupRef = useRef<any>(null);
  const leftArmRef = useRef<any>(null);
  const rightArmRef = useRef<any>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (!groupRef.current) return;

    groupRef.current.position.y = 0;

    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = -0.25;
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = 0.25;
    }

    if (animationId === "idle") {
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.03;
    }

    if (animationId === "walk") {
      groupRef.current.position.y = Math.abs(Math.sin(t * 3)) * 0.05;

      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.z = -0.25 + Math.sin(t * 3) * 0.5;
        rightArmRef.current.rotation.z = 0.25 - Math.sin(t * 3) * 0.5;
      }
    }

    if (animationId === "wave" && rightArmRef.current) {
      rightArmRef.current.rotation.z = 0.9 + Math.sin(t * 5) * 0.45;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh position={[0, 1.75, 0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color="#f2c6a0" />
      </mesh>

      <mesh position={[0, 1.1, 0]} scale={avatar.bodyScale}>
        <capsuleGeometry args={[0.32, 0.7, 8, 16]} />
        <meshStandardMaterial color={avatar.bodyColor} />
      </mesh>

      <mesh
        ref={leftArmRef}
        position={[-avatar.shoulderWidth, 1.12, 0]}
        rotation={[0, 0, -0.25]}
      >
        <capsuleGeometry args={[0.09, 0.55, 8, 12]} />
        <meshStandardMaterial color="#f2c6a0" />
      </mesh>

      <mesh
        ref={rightArmRef}
        position={[avatar.shoulderWidth, 1.12, 0]}
        rotation={[0, 0, 0.25]}
      >
        <capsuleGeometry args={[0.09, 0.55, 8, 12]} />
        <meshStandardMaterial color="#f2c6a0" />
      </mesh>

      <mesh position={[-0.15, 0.45, 0]}>
        <capsuleGeometry args={[0.1, 0.65, 8, 12]} />
        <meshStandardMaterial color={avatar.legColor} />
      </mesh>

      <mesh position={[0.15, 0.45, 0]}>
        <capsuleGeometry args={[0.1, 0.65, 8, 12]} />
        <meshStandardMaterial color={avatar.legColor} />
      </mesh>
    </group>
  );
}

function ScenePerformanceTracker({
  onPerformanceUpdate,
}: ScenePerformanceTrackerProps) {
  const frameCountRef = useRef(0);
  const lastUpdateTimeRef = useRef(performance.now());

  useFrame(({ gl }) => {
    frameCountRef.current++;

    const currentTime = performance.now();

    if (currentTime - lastUpdateTimeRef.current >= 1000) {
      onPerformanceUpdate({
        fps: frameCountRef.current,
        drawCalls: gl.info.render.calls,
        triangles: gl.info.render.triangles,
        geometries: gl.info.memory.geometries,
        textures: gl.info.memory.textures,
      });

      frameCountRef.current = 0;
      lastUpdateTimeRef.current = currentTime;
    }
  });

  return null;
}

export default function AvatarScene({
  avatarId,
  enabledAttachments,
  animationId,
  onPerformanceUpdate,
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

      <ScenePerformanceTracker onPerformanceUpdate={onPerformanceUpdate} />

      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 5, 3]} intensity={2} />

      <Suspense
        fallback={
          <PlaceholderAvatar avatarId={avatarId} animationId={animationId} />
        }
      >
        {USE_GLB_MODELS ? (
          <AvatarModel avatarId={avatarId} />
        ) : (
          <PlaceholderAvatar avatarId={avatarId} animationId={animationId} />
        )}
      </Suspense>

      {enabledAttachments.map((attachmentId) => (
        <Suspense
          key={attachmentId}
          fallback={<PlaceholderAttachment attachmentId={attachmentId} />}
        >
          {USE_GLB_MODELS ? (
            <AttachmentModel attachmentId={attachmentId} />
          ) : (
            <PlaceholderAttachment attachmentId={attachmentId} />
          )}
        </Suspense>
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