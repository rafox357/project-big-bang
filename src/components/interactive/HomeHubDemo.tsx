import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const HomeHubModel = () => {
  const mesh = useRef();
  const { nodes, materials } = useGLTF('/models/home-hub.glb');

  return (
    <group ref={mesh}>
      <mesh geometry={nodes.hub.geometry} material={materials.hubMaterial}>
        <meshStandardMaterial
          color="#00e5ff"
          metalness={0.8}
          roughness={0.2}
          emissive="#00e5ff"
          emissiveIntensity={0.2}
        />
      </mesh>
      <pointLight position={[0, 2, 0]} color="#00e5ff" intensity={1} />
    </group>
  );
};

const ConnectedDevice = ({ position, label, color = '#ff3d00' }) => {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          metalness={0.5}
          roughness={0.5}
          emissive={color}
          emissiveIntensity={0.2}
        />
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
      <pointLight position={[0, 0, 0]} color={color} intensity={0.5} />
    </group>
  );
};

const ConnectionLine = ({ start, end, color = '#00e5ff' }) => {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} opacity={0.5} transparent linewidth={2} />
    </line>
  );
};

export default function HomeHubDemo() {
  return (
    <div className="h-[600px] w-full">
      <Canvas camera={{ position: [0, 5, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <HomeHubModel />
        
        <ConnectedDevice position={[-4, 0, -4]} label="Smart Devices" />
        <ConnectedDevice position={[4, 0, -4]} label="Security System" />
        <ConnectedDevice position={[-4, 0, 4]} label="Storage" />
        <ConnectedDevice position={[4, 0, 4]} label="AI Processor" />
        
        <ConnectionLine start={[0, 0, 0]} end={[-4, 0, -4]} />
        <ConnectionLine start={[0, 0, 0]} end={[4, 0, -4]} />
        <ConnectionLine start={[0, 0, 0]} end={[-4, 0, 4]} />
        <ConnectionLine start={[0, 0, 0]} end={[4, 0, 4]} />
        
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