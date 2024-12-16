import React, { useEffect, useState } from 'react';

interface ResourceStats {
  cpu: number;
  memory: number;
  storage: number;
  network: number;
}

export function ResourceMonitor() {
  const [stats, setStats] = useState<ResourceStats>({
    cpu: 0,
    memory: 0,
    storage: 0,
    network: 0,
  });

  useEffect(() => {
    // Mock data - replace with real resource monitoring
    const interval = setInterval(() => {
      setStats({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        storage: 75 + Math.random() * 10,
        network: Math.random() * 100,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <ResourceBar label="CPU Usage" value={stats.cpu} />
      <ResourceBar label="Memory Usage" value={stats.memory} />
      <ResourceBar label="Storage Usage" value={stats.storage} />
      <ResourceBar label="Network Usage" value={stats.network} />
    </div>
  );
}

function ResourceBar({ label, value }: { label: string; value: number }) {
  const percentage = Math.round(value);
  const getColor = (value: number) => {
    if (value < 60) return 'bg-green-500';
    if (value < 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-primary rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor(percentage)} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
