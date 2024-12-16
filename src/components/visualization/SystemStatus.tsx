import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function HexRing({ radius, height, segments = 6, color = '#3b82f6', progress = 1 }) {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      )
    );
  }

  const tubeGeometry = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(points),
    segments * 4,
    height,
    8,
    true
  );

  return (
    <mesh>
      <primitive object={tubeGeometry} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.7}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

function StatusRing({ value, maxValue, radius, label, color }) {
  const progress = value / maxValue;
  const ringRef = useRef();

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={ringRef}>
      <HexRing radius={radius} height={0.1} color={color} />
      <HexRing
        radius={radius * 0.8}
        height={0.05}
        color={color}
        progress={progress}
      />
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}: {Math.round(value)}%
      </Text>
    </group>
  );
}

function DataParticles({ count = 50 }) {
  const positions = useRef(
    Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ),
      speed: Math.random() * 0.02 + 0.01,
    }))
  );

  useFrame(() => {
    positions.current.forEach((particle) => {
      particle.position.y += particle.speed;
      if (particle.position.y > 5) {
        particle.position.y = -5;
      }
    });
  });

  return (
    <group>
      {positions.current.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export function SystemStatus() {
  const [stats, setStats] = React.useState({
    cpu: 0,
    memory: 0,
    network: 0,
    storage: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.random() * 100,
        memory: 60 + Math.random() * 20,
        network: Math.random() * 100,
        storage: 75 + Math.random() * 10,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
        />

        <group position={[0, 0, 0]}>
          <StatusRing
            value={stats.cpu}
            maxValue={100}
            radius={2}
            label="CPU"
            color="#3b82f6"
          />
          <StatusRing
            value={stats.memory}
            maxValue={100}
            radius={1.5}
            label="Memory"
            color="#22c55e"
          />
          <StatusRing
            value={stats.network}
            maxValue={100}
            radius={1}
            label="Network"
            color="#8b5cf6"
          />
          <StatusRing
            value={stats.storage}
            maxValue={100}
            radius={0.5}
            label="Storage"
            color="#eab308"
          />
        </group>

        <DataParticles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
