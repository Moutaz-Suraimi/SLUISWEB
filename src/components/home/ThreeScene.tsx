import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// 3D Sluisweb Logo Mesh (Stylized S Prism)
function LogoPrism() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.35;
      groupRef.current.rotation.x = Math.cos(t * 0.4) * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={1.1}>
      {/* Upper Polygon Arm */}
      <mesh position={[-0.2, 0.4, 0]} rotation={[0, 0, -0.4]}>
        <boxGeometry args={[0.9, 0.35, 0.4]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#3b82f6"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
      {/* Center Polygon Arm */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[1.1, 0.35, 0.4]} />
        <meshStandardMaterial
          color="#0284c7"
          emissive="#38bdf8"
          emissiveIntensity={0.7}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      {/* Lower Polygon Arm */}
      <mesh position={[0.2, -0.4, 0]} rotation={[0, 0, -0.4]}>
        <boxGeometry args={[0.9, 0.35, 0.4]} />
        <meshStandardMaterial
          color="#1d4ed8"
          emissive="#2563eb"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
    </group>
  );
}

function Hero3DCenterpiece() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const orbitRingRef = useRef<THREE.Mesh>(null);
  const cube1Ref = useRef<THREE.Mesh>(null);
  const cube2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.15;
      sphereRef.current.rotation.x = t * 0.08;
    }
    if (orbitRingRef.current) {
      orbitRingRef.current.rotation.z = t * 0.25;
      orbitRingRef.current.rotation.x = 0.5 + Math.sin(t * 0.2) * 0.1;
    }
    if (cube1Ref.current) {
      cube1Ref.current.rotation.x = t * 0.4;
      cube1Ref.current.rotation.y = t * 0.5;
    }
    if (cube2Ref.current) {
      cube2Ref.current.rotation.x = -t * 0.3;
      cube2Ref.current.rotation.y = t * 0.35;
    }
  });

  return (
    <group position={[0, -0.1, 0]}>
      {/* Pedestal Base Ring Stand matching screenshot */}
      <mesh position={[0, -1.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.2, 2.4, 0.18, 64]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* Glowing Inner Pedestal Ring */}
      <mesh position={[0, -1.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 2.1, 64]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>

      {/* Geodesic Wireframe Sphere */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh ref={sphereRef} scale={1.9}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.9}
            wireframe
            roughness={0.1}
            transparent
            opacity={0.65}
          />
        </mesh>
      </Float>

      {/* Central 3D Logo Prism */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <LogoPrism />
      </Float>

      {/* Neon Orbiting Ring Around Centerpiece */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh ref={orbitRingRef} position={[0, 0, 0]} rotation={[1.1, 0.4, 0]} scale={2.4}>
          <torusGeometry args={[1, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#93c5fd"
            emissiveIntensity={1.4}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Floating 3D Blue Glass Cubes */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.8}>
        <mesh ref={cube1Ref} position={[2.2, 1.5, 0.5]} scale={0.45}>
          <boxGeometry args={[1, 1, 1]} />
          <MeshDistortMaterial
            color="#3b82f6"
            emissive="#2563eb"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.8}
            distort={0.1}
          />
        </mesh>
      </Float>
      <Float speed={2.2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={cube2Ref} position={[-2.1, 0.7, -0.5]} scale={0.35}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.9}
            roughness={0.15}
            metalness={0.85}
          />
        </mesh>
      </Float>
    </group>
  );
}

function FloatingParticles({ count = 50 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return [pos];
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#60a5fa"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function ThreeScene() {
  return (
    <div className="w-full aspect-square max-w-[460px] mx-auto relative select-none pointer-events-none">
      <Canvas
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        style={{ background: "transparent" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6.2]} fov={45} />

        {/* Studio Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 15, 10]} intensity={2.5} color="#93c5fd" />
        <directionalLight position={[-10, -10, -10]} intensity={1.2} color="#38bdf8" />
        <pointLight position={[0, 2, 3]} intensity={2} color="#3b82f6" />

        {/* Floating 3D Centerpiece & Particles */}
        <Hero3DCenterpiece />
        <FloatingParticles count={50} />
      </Canvas>
    </div>
  );
}
