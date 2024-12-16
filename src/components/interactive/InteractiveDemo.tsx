import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const InteractiveHub = () => {
  const controls = useAnimation();
  const hubRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (hubRef.current) {
      hubRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <group ref={hubRef}>
      <mesh>
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial
          color="#00e5ff"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Home Hub
      </Text>
    </group>
  );
};

interface ConnectedDeviceProps {
  position: [number, number, number] | THREE.Vector3;
  label: string;
}

const ConnectedDevice: React.FC<ConnectedDeviceProps> = ({ position, label }) => {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff3d00" />
      </mesh>
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

export default function InteractiveDemo() {
  return (
    <div className="h-[600px] w-full">
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <InteractiveHub />
        
        <ConnectedDevice position={[-4, 0, -4]} label="Smart Device" />
        <ConnectedDevice position={[4, 0, -4]} label="Security System" />
        <ConnectedDevice position={[-4, 0, 4]} label="Storage" />
        <ConnectedDevice position={[4, 0, 4]} label="AI Processor" />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}