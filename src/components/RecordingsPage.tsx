import { useState } from "react";
import { StatusBar } from "./StatusBar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Search,
  Download,
  Play,
  FileVideo,
  Calendar,
  MapPin,
  HardDrive,
} from "lucide-react";

interface RecordingsPageProps {
  onLogout?: () => void;
}

export function RecordingsPage({ onLogout }: RecordingsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [sensorFilter, setSensorFilter] = useState("all");

  const handleDownload = (title: string) => {
    toast.success(`Downloading: ${title}`);
  };

  const handlePlay = (title: string) => {
    toast.success(`Playing: ${title}`);
  };

  const recordings = [
    {
      id: 1,
      thumbnail: "recording_1",
      title: "Patrol Sector A7",
      date: "2025-11-16",
      time: "14:23:45",
      duration: "00:12:34",
      sensor: "Fused",
      gps: "34.0522°N, 118.2437°W",
      range: "847m",
      size: "2.4 GB",
      tags: ["patrol", "routine"],
    },
    {
      id: 2,
      thumbnail: "recording_2",
      title: "Target Track Alpha",
      date: "2025-11-16",
      time: "12:45:12",
      duration: "00:08:21",
      sensor: "MWIR",
      gps: "34.0565°N, 118.2398°W",
      range: "1.2km",
      size: "1.8 GB",
      tags: ["target", "tracking"],
    },
    {
      id: 3,
      thumbnail: "recording_3",
      title: "Perimeter Sweep",
      date: "2025-11-15",
      time: "09:15:33",
      duration: "00:15:47",
      sensor: "VIS",
      gps: "34.0498°N, 118.2411°W",
      range: "654m",
      size: "3.1 GB",
      tags: ["perimeter", "routine"],
    },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <StatusBar onLogout={onLogout} />

      <div className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-emerald-400 text-2xl mb-2">Recordings Archive</h2>
            <p className="text-zinc-500">Access and manage surveillance recordings</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#12181f] rounded-lg border border-zinc-800/50">
            <HardDrive className="w-5 h-5 text-emerald-400" />
            <div>
              <p className="text-zinc-400 text-xs">Storage</p>
              <p className="text-emerald-400 text-sm">2.4 TB / 5 TB</p>
            </div>
          </div>
        </div>

        {/* Main Panel - Recordings Grid */}
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {recordings.map((recording) => (
              <div
                key={recording.id}
                className="bg-[#12181f] rounded-xl border border-zinc-800/50 overflow-hidden shadow-lg hover:border-zinc-700 transition-colors group"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center">
                  <FileVideo className="w-12 h-12 text-zinc-700" />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-zinc-300 font-mono">
                    {recording.duration}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      size="sm"
                      onClick={() => handlePlay(recording.title)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="text-zinc-200 mb-1">{recording.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="w-3 h-3" />
                      <span>{recording.date} {recording.time}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {recording.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metadata */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-zinc-800/50">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-zinc-500">
                        <span>Sensor:</span>
                        <span className="text-zinc-300">{recording.sensor}</span>
                      </div>
                      <div className="flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3 h-3" />
                        <span className="text-zinc-300">{recording.range}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-zinc-500">
                        <HardDrive className="w-3 h-3" />
                        <span className="text-zinc-300">{recording.size}</span>
                      </div>
                      <div className="flex items-center gap-1 text-zinc-500">
                        <span className="text-zinc-300 truncate">{recording.gps}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <Button
                    onClick={() => handleDownload(recording.title)}
                    variant="outline"
                    size="sm"
                    className="w-full bg-zinc-900/30 border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50"
                  >
                    <Download className="w-3 h-3 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}