import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingContactNode() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.1;
      ringRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group>
      {/* 3D Polyhedron Wireframe Mesh */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#00A3FF"
            wireframe
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Outer Cyan Neon Glowing Ring */}
      <mesh ref={ringRef} scale={2.4}>
        <torusGeometry args={[1, 0.03, 16, 100]} />
        <meshBasicMaterial color="#00E0FF" />
      </mesh>

      {/* Central Glowing Core Sphere */}
      <Sphere args={[0.35, 32, 32]} scale={1}>
        <meshBasicMaterial color="#FFFFFF" />
      </Sphere>
    </group>
  );
}

export function Contact3DScene() {
  return (
    <div className="relative h-64 w-full rounded-3xl overflow-hidden bg-[#030712] border border-slate-800 shadow-xl">
      <Canvas style={{ background: "transparent" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={1} />
        <FloatingContactNode />
      </Canvas>

      {/* Top Left Badge matching image */}
      <div className="absolute top-4 left-5 z-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-md px-3.5 py-1 text-[0.7rem] font-bold tracking-wider text-white uppercase">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          3D INTERACTIVE CONTACT HUB
        </span>
      </div>
    </div>
  );
}
