import { useState } from "react";
import { StatusBar } from "./StatusBar";
import { HudOverlay } from "./HudOverlay";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import {
  Crosshair,
  Eye,
  Thermometer,
  Camera,
  Video,
  Circle,
} from "lucide-react";

interface LiveFusedVideoProps {
  onLogout?: () => void;
}

export function LiveFusedVideo({ onLogout }: LiveFusedVideoProps) {
  const [hudEnabled, setHudEnabled] = useState(true);
  const [fusionEnabled, setFusionEnabled] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [crosshairEnabled, setCrosshairEnabled] = useState(true);

  const handleToggleCrosshair = () => {
    setCrosshairEnabled(!crosshairEnabled);
    toast.success(`Crosshair ${!crosshairEnabled ? "enabled" : "disabled"}`);
  };

  const handleScreenshot = () => {
    toast.success("Screenshot captured successfully");
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    toast.success(isRecording ? "Recording stopped" : "Recording started");
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Top Status Bar */}
      <StatusBar onLogout={onLogout} />

      {/* Main Content */}
      <div className="flex-1 flex p-4 gap-4 overflow-auto">
        {/* Video Panel */}
        <div className="flex-1 bg-[#12181f] rounded-xl border border-zinc-800/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden relative min-h-[500px]">
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center">
            <div className="text-center space-y-4">
              <Video className="w-16 h-16 text-zinc-700 mx-auto" />
              <p className="text-zinc-600">LIVE FEED</p>
              <div className="flex items-center justify-center gap-2">
                <Circle className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
                <span className="text-zinc-500 text-sm">STREAMING</span>
              </div>
            </div>
          </div>

          {/* HUD Overlay */}
          {hudEnabled && <HudOverlay showCrosshair={crosshairEnabled} />}

          {/* Recording Indicator */}
          {isRecording && (
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-red-500/20 border border-red-500/50 rounded-lg backdrop-blur-sm">
              <Circle className="w-2 h-2 text-red-500 fill-red-500 animate-pulse" />
              <span className="text-red-400 text-sm">REC</span>
            </div>
          )}
        </div>

        {/* Right Control Panel */}
        <div className="w-64 space-y-4">
          {/* Controls Card */}
          <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-4 space-y-4 shadow-lg">
            <h3 className="text-emerald-400 text-sm tracking-wider mb-3">
              VIDEO CONTROLS
            </h3>

            {/* HUD Toggle */}
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg border border-zinc-800/30">
              <Label htmlFor="hud-toggle" className="text-zinc-300 text-sm">
                HUD Overlay
              </Label>
              <Switch
                id="hud-toggle"
                checked={hudEnabled}
                onCheckedChange={setHudEnabled}
              />
            </div>

            {/* Fusion Toggle */}
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg border border-zinc-800/30">
              <Label htmlFor="fusion-toggle" className="text-zinc-300 text-sm">
                Fusion Mode
              </Label>
              <Switch
                id="fusion-toggle"
                checked={fusionEnabled}
                onCheckedChange={setFusionEnabled}
              />
            </div>

            <div className="h-px bg-zinc-800/50 my-3" />

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button
                onClick={handleToggleCrosshair}
                variant="outline"
                className="w-full justify-start gap-2 bg-zinc-900/30 border-zinc-700/50 text-zinc-300 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400"
              >
                <Crosshair className="w-4 h-4" />
                Toggle Crosshair
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 bg-zinc-900/30 border-zinc-700/50 text-zinc-300 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400"
              >
                <Eye className="w-4 h-4" />
                Switch to VIS
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 bg-zinc-900/30 border-zinc-700/50 text-zinc-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400"
              >
                <Thermometer className="w-4 h-4" />
                Switch to MWIR
              </Button>

              <Button
                onClick={handleScreenshot}
                variant="outline"
                className="w-full justify-start gap-2 bg-zinc-900/30 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50"
              >
                <Camera className="w-4 h-4" />
                Screenshot
              </Button>

              <Button
                onClick={handleToggleRecording}
                className={`w-full justify-start gap-2 ${
                  isRecording
                    ? "bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30"
                    : "bg-zinc-900/30 border-zinc-700/50 text-zinc-300 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400"
                }`}
                variant="outline"
              >
                <Circle
                  className={`w-4 h-4 ${isRecording ? "fill-red-400" : ""}`}
                />
                {isRecording ? "Stop Recording" : "Start Recording"}
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-4 space-y-3 shadow-lg">
            <h3 className="text-emerald-400 text-sm tracking-wider mb-2">
              QUICK STATS
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Resolution</span>
                <span className="text-zinc-300">1920x1080</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Frame Rate</span>
                <span className="text-zinc-300">30 FPS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Bitrate</span>
                <span className="text-zinc-300">8.5 Mbps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Codec</span>
                <span className="text-zinc-300">H.265</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}