import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const Node = ({ position, label, color = '#00e5ff' }) => {
  const mesh = useRef();

  return (
    <group position={position}>
      <mesh ref={mesh}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

const EcosystemVisualization = () => {
  return (
    <div className="h-[600px] w-full">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Central Hub - Home Computer */}
        <Node position={[0, 0, 0]} label="Home Computer" color="#ff3d00" />
        
        {/* Connected Nodes */}
        <Node position={[-4, 3, 0]} label="Smart Devices" />
        <Node position={[4, 3, 0]} label="Security System" />
        <Node position={[-4, -3, 0]} label="Local AI" />
        <Node position={[4, -3, 0]} label="Data Storage" />
        
        {/* Lines connecting nodes */}
        <lineSegments>
          <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(8, 6, 0)]} />
          <lineBasicMaterial attach="material" color="#00e5ff" opacity={0.5} transparent />
        </lineSegments>
        
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default EcosystemVisualization;