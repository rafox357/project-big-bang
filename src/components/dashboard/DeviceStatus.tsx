import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface Device {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'warning';
  type: 'hub' | 'sensor' | 'controller';
  lastSeen: Date;
}

export function DeviceStatus() {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    // Mock data - replace with real device data
    setDevices([
      {
        id: '1',
        name: 'Main Hub',
        status: 'online',
        type: 'hub',
        lastSeen: new Date(),
      },
      {
        id: '2',
        name: 'Temperature Sensor',
        status: 'online',
        type: 'sensor',
        lastSeen: new Date(),
      },
      {
        id: '3',
        name: 'Light Controller',
        status: 'warning',
        type: 'controller',
        lastSeen: new Date(),
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
          {devices.map((device, index) => (
            <DeviceNode
              key={device.id}
              position={[
                Math.cos(index * (Math.PI * 2) / devices.length) * 2,
                Math.sin(index * (Math.PI * 2) / devices.length) * 2,
                0,
              ]}
              status={device.status}
            />
          ))}
        </Canvas>
      </div>

      <div className="space-y-2">
        {devices.map((device) => (
          <div
            key={device.id}
            className="flex items-center justify-between p-2 bg-primary rounded-lg"
          >
            <div>
              <h3 className="font-medium">{device.name}</h3>
              <p className="text-sm text-secondary">
                Last seen: {device.lastSeen.toLocaleTimeString()}
              </p>
            </div>
            <StatusBadge status={device.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DeviceNode({ position, status }: { position: [number, number, number]; status: string }) {
  const color = status === 'online' ? '#22c55e' : status === 'warning' ? '#eab308' : '#ef4444';

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors = {
    online: 'bg-green-500',
    warning: 'bg-yellow-500',
    offline: 'bg-red-500',
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        colors[status as keyof typeof colors]
      }`}
    >
      {status}
    </span>
  );
}
