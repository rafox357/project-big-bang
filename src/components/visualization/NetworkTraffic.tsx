import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

function Connection({ start, end, intensity = 1, color = '#3b82f6' }) {
  const ref = useRef();
  const particles = useRef(
    Array.from({ length: 5 }, () => ({
      progress: Math.random(),
      speed: Math.random() * 0.02 + 0.01,
      size: Math.random() * 0.05 + 0.02,
    }))
  );

  useFrame(() => {
    particles.current.forEach((particle) => {
      particle.progress += particle.speed;
      if (particle.progress > 1) {
        particle.progress = 0;
      }
    });
  });

  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);
  const direction = endVec.clone().sub(startVec);
  const length = direction.length();

  return (
    <group>
      {/* Connection line */}
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, length, 8]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Data particles */}
      {particles.current.map((particle, i) => {
        const position = startVec.clone().lerp(endVec, particle.progress);
        return (
          <mesh key={i} position={position}>
            <sphereGeometry args={[particle.size, 8, 8]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={intensity}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Node({ position, name, type = 'device', connections = [] }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group position={position}>
      <group ref={ref}>
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 4) * Math.PI * 2) * 0.4,
              0,
              Math.sin((i / 4) * Math.PI * 2) * 0.4,
            ]}
          >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#3b82f6"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      {connections.map((connection, i) => (
        <Connection
          key={i}
          start={position}
          end={connection.position}
          intensity={connection.intensity}
          color={connection.color}
        />
      ))}
    </group>
  );
}

export function NetworkTraffic() {
  const [nodes, setNodes] = React.useState([]);

  useEffect(() => {
    // Mock network data
    setNodes([
      {
        name: 'Hub',
        position: [0, 0, 0],
        type: 'hub',
        connections: [
          { position: [-3, 2, -3], intensity: 0.8, color: '#3b82f6' },
          { position: [3, 2, -3], intensity: 0.6, color: '#22c55e' },
          { position: [-3, 2, 3], intensity: 0.4, color: '#8b5cf6' },
          { position: [3, 2, 3], intensity: 0.7, color: '#eab308' },
        ],
      },
      {
        name: 'Device 1',
        position: [-3, 2, -3],
        type: 'device',
        connections: [],
      },
      {
        name: 'Device 2',
        position: [3, 2, -3],
        type: 'device',
        connections: [],
      },
      {
        name: 'Device 3',
        position: [-3, 2, 3],
        type: 'device',
        connections: [],
      },
      {
        name: 'Device 4',
        position: [3, 2, 3],
        type: 'device',
        connections: [],
      },
    ]);
  }, []);

  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [8, 8, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
        />

        {nodes.map((node, i) => (
          <Node key={i} {...node} />
        ))}

        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={5}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
}
