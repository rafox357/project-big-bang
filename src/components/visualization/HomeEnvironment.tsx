import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Instance, Instances } from '@react-three/drei';
import * as THREE from 'three';

function Room({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const materials = useMemo(() => ({
    wall: new THREE.MeshStandardMaterial({ color: '#1a1b26' }),
    floor: new THREE.MeshStandardMaterial({ color: '#13151a' }),
  }), []);

  return (
    <group position={position} rotation={rotation}>
      {/* Floor */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <primitive object={materials.floor} attach="material" />
      </mesh>

      {/* Walls */}
      <mesh position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 4]} />
        <primitive object={materials.wall} attach="material" />
      </mesh>
      <mesh position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 4]} />
        <primitive object={materials.wall} attach="material" />
      </mesh>
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[10, 4]} />
        <primitive object={materials.wall} attach="material" />
      </mesh>
    </group>
  );
}

const DeviceGeometry = React.memo(() => (
  <sphereGeometry args={[0.3, 16, 16]} />
));

function Device({ position, name, type, status = 'online' }) {
  const [hover, setHover] = useState(false);

  const color = useMemo(() => {
    switch (status) {
      case 'online':
        return '#22c55e';
      case 'warning':
        return '#eab308';
      case 'offline':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  }, [status]);

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <DeviceGeometry />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hover ? 0.5 : 0.2}
          />
        </mesh>
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </Float>
    </group>
  );
}

const DataParticles = React.memo(({ count = 20 }) => {
  const meshRef = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] = Math.sin(time + i) * 2;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
});

export function HomeEnvironment() {
  const devices = useMemo(() => [
    { name: 'Hub', position: [0, 0, 0], type: 'hub', status: 'online' },
    { name: 'Living Room', position: [-2, 1, -2], type: 'sensor', status: 'online' },
    { name: 'Kitchen', position: [2, 1, -2], type: 'sensor', status: 'warning' },
    { name: 'Bedroom', position: [-2, 1, 2], type: 'controller', status: 'online' },
    { name: 'Office', position: [2, 1, 2], type: 'controller', status: 'offline' },
  ], []);

  return (
    <Canvas
      camera={{ position: [8, 8, 8], fov: 50 }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
      />

      <React.Suspense fallback={null}>
        <Room />
        {devices.map((device, index) => (
          <Device key={index} {...device} />
        ))}
        <DataParticles />
      </React.Suspense>

      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={15}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  );
}
