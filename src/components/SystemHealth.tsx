import { useState, useEffect } from "react";
import { StatusBar } from "./StatusBar";
import { Badge } from "./ui/badge";
import {
  Cpu,
  HardDrive,
  Thermometer,
  Fan,
  Wifi,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface GaugeCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
  status: "normal" | "warning" | "critical";
}

function GaugeCard({ title, value, unit, icon, color, status }: GaugeCardProps) {
  const data = [{ value, fill: color }];

  return (
    <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-5 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-zinc-300">{title}</h3>
        </div>
        <Badge
          className={
            status === "normal"
              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
              : status === "warning"
              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
              : "bg-red-500/20 text-red-400 border-red-500/50"
          }
        >
          {status}
        </Badge>
      </div>

      <div className="relative h-40">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            barSize={12}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
              fill={color}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl text-zinc-100">{value}</div>
          <div className="text-sm text-zinc-500">{unit}</div>
        </div>
      </div>
    </div>
  );
}

interface SystemHealthProps {
  onLogout?: () => void;
}

export function SystemHealth({ onLogout }: SystemHealthProps) {
  // State for dynamic values
  const [cpuUsage, setCpuUsage] = useState(42);
  const [memoryUsage, setMemoryUsage] = useState(68);
  const [diskUsage, setDiskUsage] = useState(45);
  const [gpuTemp, setGpuTemp] = useState(58);
  const [cpuTemp, setCpuTemp] = useState(52);
  const [networkLatency, setNetworkLatency] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      // CPU Usage: varies between 35-75%
      setCpuUsage(prev => {
        const change = (Math.random() - 0.5) * 10;
        return Math.max(35, Math.min(75, prev + change));
      });

      // Memory Usage: varies between 60-85%
      setMemoryUsage(prev => {
        const change = (Math.random() - 0.5) * 8;
        return Math.max(60, Math.min(85, prev + change));
      });

      // Disk Usage: varies between 40-55%
      setDiskUsage(prev => {
        const change = (Math.random() - 0.5) * 5;
        return Math.max(40, Math.min(55, prev + change));
      });

      // GPU Temperature: varies between 50-72°C
      setGpuTemp(prev => {
        const change = (Math.random() - 0.5) * 6;
        return Math.max(50, Math.min(72, prev + change));
      });

      // CPU Temperature: varies between 45-65°C
      setCpuTemp(prev => {
        const change = (Math.random() - 0.5) * 5;
        return Math.max(45, Math.min(65, prev + change));
      });

      // Network Latency: varies between 8-25ms
      setNetworkLatency(prev => {
        const change = (Math.random() - 0.5) * 4;
        return Math.max(8, Math.min(25, prev + change));
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatus = (value: number, thresholds: [number, number]): "normal" | "warning" | "critical" => {
    if (value < thresholds[0]) return "normal";
    if (value < thresholds[1]) return "warning";
    return "critical";
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <StatusBar onLogout={onLogout} />

      <div className="flex-1 p-6 space-y-6 overflow-auto">
        {/* System Overview */}
        <div>
          <h2 className="text-emerald-400 text-xl mb-4">System Health Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <GaugeCard
              title="CPU Usage"
              value={Math.round(cpuUsage)}
              unit="%"
              icon={<Cpu className="w-5 h-5 text-blue-400" />}
              color="#3b82f6"
              status={getStatus(cpuUsage, [60, 80])}
            />
            <GaugeCard
              title="Memory Usage"
              value={Math.round(memoryUsage)}
              unit="%"
              icon={<HardDrive className="w-5 h-5 text-emerald-400" />}
              color="#10b981"
              status={getStatus(memoryUsage, [75, 90])}
            />
            <GaugeCard
              title="Disk Usage"
              value={Math.round(diskUsage)}
              unit="%"
              icon={<HardDrive className="w-5 h-5 text-purple-400" />}
              color="#a855f7"
              status={getStatus(diskUsage, [70, 85])}
            />
            <GaugeCard
              title="GPU Temperature"
              value={Math.round(gpuTemp)}
              unit="°C"
              icon={<Thermometer className="w-5 h-5 text-orange-400" />}
              color="#f97316"
              status={getStatus(gpuTemp, [65, 75])}
            />
            <GaugeCard
              title="CPU Temperature"
              value={Math.round(cpuTemp)}
              unit="°C"
              icon={<Thermometer className="w-5 h-5 text-red-400" />}
              color="#ef4444"
              status={getStatus(cpuTemp, [60, 70])}
            />
            <GaugeCard
              title="Network Latency"
              value={Math.round(networkLatency)}
              unit="ms"
              icon={<Wifi className="w-5 h-5 text-cyan-400" />}
              color="#06b6d4"
              status={getStatus(networkLatency, [15, 20])}
            />
          </div>
        </div>
      </div>
    </div>
  );
}