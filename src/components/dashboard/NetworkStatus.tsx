import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';

interface NetworkNode {
  id: string;
  name: string;
  type: 'device' | 'router' | 'internet';
  position: [number, number, number];
  connections: string[];
}

export function NetworkStatus() {
  const [nodes, setNodes] = useState<NetworkNode[]>([]);

  useEffect(() => {
    // Mock data - replace with real network topology
    setNodes([
      {
        id: '1',
        name: 'Home Hub',
        type: 'router',
        position: [0, 0, 0],
        connections: ['2', '3', '4'],
      },
      {
        id: '2',
        name: 'Living Room',
        type: 'device',
        position: [-2, 1, 0],
        connections: ['1'],
      },
      {
        id: '3',
        name: 'Bedroom',
        type: 'device',
        position: [2, 1, 0],
        connections: ['1'],
      },
      {
        id: '4',
        name: 'Internet',
        type: 'internet',
        position: [0, -2, 0],
        connections: ['1'],
      },
    ]);
  }, []);

  return (
    <div className="space-y-4">
      <div className="h-48">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          
          {/* Draw connections */}
          {nodes.map((node) =>
            node.connections.map((targetId) => {
              const target = nodes.find((n) => n.id === targetId);
              if (!target) return null;
              
              return (
                <Line
                  key={`${node.id}-${targetId}`}
                  points={[node.position, target.position]}
                  color="#4b5563"
                  lineWidth={1}
                />
              );
            })
          )}

          {/* Draw nodes */}
          {nodes.map((node) => (
            <NetworkNode
              key={node.id}
              position={node.position}
              type={node.type}
            />
          ))}
        </Canvas>
      </div>

      <div className="space-y-2">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="flex items-center justify-between p-2 bg-primary rounded-lg"
          >
            <div>
              <h3 className="font-medium">{node.name}</h3>
              <p className="text-sm text-secondary">{node.type}</p>
            </div>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                Connected
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NetworkNode({
  position,
  type,
}: {
  position: [number, number, number];
  type: string;
}) {
  const getColor = (type: string) => {
    switch (type) {
      case 'router':
        return '#3b82f6';
      case 'device':
        return '#22c55e';
      case 'internet':
        return '#8b5cf6';
      default:
        return '#6b7280';
    }
  };

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={getColor(type)} />
    </mesh>
  );
}
