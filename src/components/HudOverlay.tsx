import { Crosshair, Navigation } from "lucide-react";

interface HudOverlayProps {
  showCrosshair?: boolean;
}

export function HudOverlay({ showCrosshair = true }: HudOverlayProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Crosshair Center */}
      {showCrosshair && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Crosshair className="w-12 h-12 text-emerald-400/70" strokeWidth={1.5} />
        </div>
      )}

      {/* Top Left HUD */}
      <div className="absolute top-4 left-4 space-y-2">
        <div className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-3 text-sm font-mono space-y-1">
          <div className="flex items-center gap-2">
            <Navigation className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-400">AZ:</span>
            <span className="text-zinc-300">247.8°</span>
          </div>
          <div className="flex gap-2">
            <span className="text-emerald-400">EL:</span>
            <span className="text-zinc-300">12.4°</span>
          </div>
          <div className="flex gap-2">
            <span className="text-emerald-400">RNG:</span>
            <span className="text-zinc-300">1,247m</span>
          </div>
        </div>
      </div>

      {/* Top Right HUD */}
      <div className="absolute top-4 right-4">
        <div className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-3 text-sm font-mono space-y-1">
          <div className="flex gap-2">
            <span className="text-emerald-400">LAT:</span>
            <span className="text-zinc-300">34.0522°N</span>
          </div>
          <div className="flex gap-2">
            <span className="text-emerald-400">LON:</span>
            <span className="text-zinc-300">118.2437°W</span>
          </div>
          <div className="flex gap-2">
            <span className="text-emerald-400">ALT:</span>
            <span className="text-zinc-300">342m</span>
          </div>
        </div>
      </div>

      {/* Bottom Left - Sensor Info */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-3 py-2">
          <div className="flex items-center gap-2 text-sm font-mono">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400">FUSION</span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-400">VIS+MWIR</span>
          </div>
        </div>
      </div>

      {/* Bottom Right - Timestamp */}
      <div className="absolute bottom-4 right-4">
        <div className="bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-3 py-2 text-sm font-mono">
          <span className="text-zinc-400">16:45:23.847 UTC</span>
        </div>
      </div>

      {/* Corner Brackets */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Top Left */}
        <path
          d="M 40 20 L 20 20 L 20 40"
          stroke="rgba(16, 185, 129, 0.4)"
          strokeWidth="2"
          fill="none"
        />
        {/* Top Right */}
        <path
          d="M calc(100% - 40) 20 L calc(100% - 20) 20 L calc(100% - 20) 40"
          stroke="rgba(16, 185, 129, 0.4)"
          strokeWidth="2"
          fill="none"
        />
        {/* Bottom Left */}
        <path
          d="M 40 calc(100% - 20) L 20 calc(100% - 20) L 20 calc(100% - 40)"
          stroke="rgba(16, 185, 129, 0.4)"
          strokeWidth="2"
          fill="none"
        />
        {/* Bottom Right */}
        <path
          d="M calc(100% - 40) calc(100% - 20) L calc(100% - 20) calc(100% - 20) L calc(100% - 20) calc(100% - 40)"
          stroke="rgba(16, 185, 129, 0.4)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Grid Lines */}
      <div className="absolute inset-0">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
}