import { useState } from "react";
import { StatusBar } from "./StatusBar";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import { Thermometer, Maximize, RotateCcw } from "lucide-react";

interface MwirScreenProps {
  onLogout?: () => void;
}

export function MwirScreen({ onLogout }: MwirScreenProps) {
  const [brightness, setBrightness] = useState([50]);
  const [contrast, setContrast] = useState([50]);
  const [sharpness, setSharpness] = useState([50]);
  const [gain, setGain] = useState([50]);

  const handleReset = () => {
    setBrightness([50]);
    setContrast([50]);
    setSharpness([50]);
    setGain([50]);
    toast.success("Settings reset to default");
  };

  const handleFullscreen = () => {
    toast.success("Entering fullscreen mode");
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <StatusBar onLogout={onLogout} />

      <div className="flex-1 flex p-4 gap-4 overflow-auto">
        {/* Video Panel */}
        <div className="flex-1 bg-[#12181f] rounded-xl border border-zinc-800/50 shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-zinc-950 to-black flex items-center justify-center">
            <div className="text-center space-y-4">
              <Thermometer className="w-16 h-16 text-orange-500/50 mx-auto" />
              <p className="text-orange-400">MWIR SENSOR FEED</p>
              <p className="text-zinc-600 text-sm">Mid-Wave Infrared Camera</p>
            </div>
          </div>

          {/* Sensor Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-orange-500/20 border border-orange-500/50 rounded-lg backdrop-blur-sm">
            <span className="text-orange-400 text-sm">THERMAL IMAGING</span>
          </div>

          {/* Temperature Scale */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-orange-500/30 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-32 rounded" style={{
                background: 'linear-gradient(to bottom, #fff, #ff0, #f80, #f00, #800, #000)'
              }} />
              <div className="flex flex-col justify-between h-32 text-xs font-mono">
                <span className="text-zinc-300">+50°C</span>
                <span className="text-zinc-400">+25°C</span>
                <span className="text-zinc-400">0°C</span>
                <span className="text-zinc-400">-25°C</span>
                <span className="text-zinc-300">-50°C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="w-80 space-y-4">
          <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-5 space-y-6 shadow-lg">
            <h3 className="text-orange-400 text-sm tracking-wider">
              MWIR CONTROLS
            </h3>

            {/* Brightness */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-zinc-300">Brightness</Label>
                <span className="text-zinc-500 text-sm">{brightness[0]}%</span>
              </div>
              <Slider
                value={brightness}
                onValueChange={setBrightness}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-400"
              />
            </div>

            {/* Contrast */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-zinc-300">Contrast</Label>
                <span className="text-zinc-500 text-sm">{contrast[0]}%</span>
              </div>
              <Slider
                value={contrast}
                onValueChange={setContrast}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-400"
              />
            </div>

            {/* Sharpness */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-zinc-300">Sharpness</Label>
                <span className="text-zinc-500 text-sm">{sharpness[0]}%</span>
              </div>
              <Slider
                value={sharpness}
                onValueChange={setSharpness}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-400"
              />
            </div>

            {/* Gain */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-zinc-300">Gain</Label>
                <span className="text-zinc-500 text-sm">{gain[0]}%</span>
              </div>
              <Slider
                value={gain}
                onValueChange={setGain}
                max={100}
                step={1}
                className="[&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-400"
              />
            </div>

            <div className="h-px bg-zinc-800/50 my-4" />

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button
                onClick={handleReset}
                variant="outline"
                className="w-full justify-start gap-2 bg-zinc-900/30 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Settings
              </Button>

              <Button
                onClick={handleFullscreen}
                variant="outline"
                className="w-full justify-start gap-2 bg-zinc-900/30 border-zinc-700/50 text-zinc-300 hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-orange-400"
              >
                <Maximize className="w-4 h-4" />
                View Fullscreen
              </Button>
            </div>
          </div>

          {/* Sensor Info */}
          <div className="bg-[#12181f] rounded-xl border border-zinc-800/50 p-4 space-y-3 shadow-lg">
            <h3 className="text-orange-400 text-sm tracking-wider">
              SENSOR INFO
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Type</span>
                <span className="text-zinc-300">Cooled MWIR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Resolution</span>
                <span className="text-zinc-300">640x480</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">FPS</span>
                <span className="text-zinc-300">30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">FOV</span>
                <span className="text-zinc-300">28°</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Status</span>
                <span className="text-emerald-400">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}