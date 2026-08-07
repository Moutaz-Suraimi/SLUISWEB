import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Stars, Sphere, Torus, Ring } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.3;
      ringRef.current.rotation.y = t * 0.1;
      ringRef.current.rotation.z = t * 0.2;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = -t * 0.2;
      outerRingRef.current.rotation.y = t * 0.25;
    }
  });

  return (
    <group>
      {/* Central Distorted 3D Crystal Gem */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} scale={1.6}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#2563eb"
            emissive="#3b82f6"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
            wireframe={true}
            transparent={true}
            opacity={0.85}
            distort={0.4}
            speed={2.5}
          />
        </mesh>
      </Float>

      {/* Inner Glowing Orbiting Ring */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={ringRef} scale={2.4}>
          <torusGeometry args={[1, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#93c5fd"
            emissiveIntensity={1.2}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      {/* Outer Orbit Ring */}
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={outerRingRef} scale={3.2}>
          <torusGeometry args={[1, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={1.5}
            roughness={0.1}
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

function FloatingParticles({ count = 80 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sca = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sca[i] = Math.random() * 0.8 + 0.2;
    }
    return [pos, sca];
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#60a5fa"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function ThreeScene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
      <Canvas style={{ background: "transparent" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />

        {/* Ambient & Directional Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#60a5fa" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#38bdf8" />
        <pointLight position={[0, 0, 2]} intensity={2} color="#93c5fd" />

        {/* Floating 3D Elements */}
        <FloatingCore />
        <FloatingParticles count={100} />

        {/* Background Star field */}
        <Stars radius={40} depth={20} count={2000} factor={3} saturation={0} fade speed={1.2} />
      </Canvas>

      {/* Smooth gradient transition to page body */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </div>
  );
}
