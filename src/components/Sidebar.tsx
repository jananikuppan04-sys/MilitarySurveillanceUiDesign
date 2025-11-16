import { cn } from "../lib/utils";
import {
  Video,
  Eye,
  Thermometer,
  Map,
  FileVideo,
  Activity,
  Shield,
} from "lucide-react";

type Screen = "fused" | "vis" | "mwir" | "map" | "recordings" | "health";

interface SidebarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const navItems = [
  { id: "fused" as Screen, icon: Video, label: "Fused Video" },
  { id: "vis" as Screen, icon: Eye, label: "VIS Sensor" },
  { id: "mwir" as Screen, icon: Thermometer, label: "MWIR Sensor" },
  { id: "map" as Screen, icon: Map, label: "Map View" },
  { id: "recordings" as Screen, icon: FileVideo, label: "Recordings" },
  { id: "health" as Screen, icon: Activity, label: "System Health" },
];

export function Sidebar({ currentScreen, onNavigate }: SidebarProps) {
  return (
    <div className="w-20 bg-[#0f1419] border-r border-zinc-800/50 flex flex-col items-center py-6 space-y-2">
      {/* Logo */}
      <div className="mb-6 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
        <Shield className="w-6 h-6 text-emerald-400" />
      </div>

      {/* Navigation Items */}
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "group relative w-14 h-14 rounded-lg flex items-center justify-center transition-all",
              isActive
                ? "bg-emerald-500/20 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                : "bg-zinc-900/30 border border-zinc-800/30 hover:bg-zinc-800/50 hover:border-zinc-700/50"
            )}
          >
            <Icon
              className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-emerald-400" : "text-zinc-500 group-hover:text-zinc-300"
              )}
            />

            {/* Tooltip */}
            <div className="absolute left-full ml-4 px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-md text-xs whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-lg">
              {item.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}
