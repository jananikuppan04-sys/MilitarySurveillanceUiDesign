import { useState } from "react";
import { StatusBar } from "./StatusBar";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Navigation, MapPin, Target } from "lucide-react";

interface MapViewProps {
  onLogout?: () => void;
}

export function MapView({ onLogout }: MapViewProps) {
  const [followCamera, setFollowCamera] = useState(true);
  const [showTargets, setShowTargets] = useState(true);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <StatusBar onLogout={onLogout} />

      <div className="flex-1 flex p-4 gap-4 overflow-auto">
        {/* Map Panel */}
        <div className="flex-1 bg-[#12181f] rounded-xl border border-zinc-800/50 shadow-lg overflow-hidden relative min-h-[500px]">
          {/* Tactical Grid Background */}
          <div 
            className="absolute inset-0 bg-[#0f1419]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Map Center Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <MapPin className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-emerald-400/30 rounded-full animate-ping" />
            </div>
          </div>

          {/* Camera Direction Arrow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative" style={{ transform: 'rotate(247deg)' }}>
              <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rotate-45" />
            </div>
          </div>

          {/* Path History Trail */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M 100 600 Q 200 550, 300 500 T 500 420 T 700 380 T 900 360"
              stroke="rgba(16, 185, 129, 0.3)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Target Markers */}
          <div className="absolute" style={{ top: '30%', left: '60%' }}>
            <Target className="w-6 h-6 text-red-400 animate-pulse" />
          </div>
          <div className="absolute" style={{ top: '65%', left: '40%' }}>
            <Target className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>

          {/* Map Overlay Info */}
          <div className="absolute top-4 left-4 space-y-2">
            <div className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm font-mono mb-2">
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">POSITION</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex gap-2">
                  <span className="text-zinc-500">LAT:</span>
                  <span className="text-zinc-300">34.0522°N</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-zinc-500">LON:</span>
                  <span className="text-zinc-300">118.2437°W</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-zinc-500">ALT:</span>
                  <span className="text-zinc-300">342m</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compass */}
          <div className="absolute top-4 right-4">
            <div className="relative w-20 h-20 bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-start justify-center pt-2">
                <span className="text-emerald-400 text-xs">N</span>
              </div>
              <div className="absolute inset-0 flex items-end justify-center pb-2">
                <span className="text-zinc-600 text-xs">S</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-start pl-2">
                <span className="text-zinc-600 text-xs">W</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-end pr-2">
                <span className="text-zinc-600 text-xs">E</span>
              </div>
              <Navigation 
                className="w-8 h-8 text-red-500" 
                style={{ transform: 'rotate(247deg)' }}
              />
            </div>
          </div>

          {/* Scale */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="w-24 h-0.5 bg-emerald-400" />
                <span className="text-zinc-300 text-xs font-mono">500m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="w-80 space-y-4">
          <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-5 space-y-4 shadow-lg">
            <h3 className="text-emerald-400 text-sm tracking-wider">
              MAP CONTROLS
            </h3>

            {/* Follow Camera Toggle */}
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg border border-zinc-800/30">
              <Label htmlFor="follow-camera" className="text-zinc-300 text-sm">
                Follow Camera
              </Label>
              <Switch
                id="follow-camera"
                checked={followCamera}
                onCheckedChange={setFollowCamera}
              />
            </div>

            {/* Show Targets Toggle */}
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg border border-zinc-800/30">
              <Label htmlFor="show-targets" className="text-zinc-300 text-sm">
                Show Targets
              </Label>
              <Switch
                id="show-targets"
                checked={showTargets}
                onCheckedChange={setShowTargets}
              />
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-4 space-y-3 shadow-lg">
            <h3 className="text-emerald-400 text-sm tracking-wider">
              LOCATION INFO
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Speed</span>
                <span className="text-zinc-300">0.0 km/h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Heading</span>
                <span className="text-zinc-300">247.8°</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Accuracy</span>
                <span className="text-zinc-300">±2.3m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Satellites</span>
                <span className="text-zinc-300">12</span>
              </div>
            </div>
          </div>

          {/* Detected Targets */}
          <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-4 space-y-3 shadow-lg">
            <h3 className="text-emerald-400 text-sm tracking-wider">
              DETECTED TARGETS
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-zinc-900/30 rounded border border-zinc-800/30">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-400" />
                  <span className="text-zinc-300 text-sm">Target Alpha</span>
                </div>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
                  847m
                </Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-zinc-900/30 rounded border border-zinc-800/30">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-yellow-400" />
                  <span className="text-zinc-300 text-sm">Target Bravo</span>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                  1.2km
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}