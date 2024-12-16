import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { DeviceStatus } from './DeviceStatus';
import { ResourceMonitor } from './ResourceMonitor';
import { NetworkStatus } from './NetworkStatus';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user?.email}</h1>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors"
        >
          Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-secondary p-6 rounded-lg shadow-theme">
          <h2 className="text-xl font-semibold mb-4">Device Status</h2>
          <DeviceStatus />
        </div>

        <div className="bg-secondary p-6 rounded-lg shadow-theme">
          <h2 className="text-xl font-semibold mb-4">Resource Usage</h2>
          <ResourceMonitor />
        </div>

        <div className="bg-secondary p-6 rounded-lg shadow-theme">
          <h2 className="text-xl font-semibold mb-4">Network Status</h2>
          <NetworkStatus />
        </div>
      </div>
    </div>
  );
}
