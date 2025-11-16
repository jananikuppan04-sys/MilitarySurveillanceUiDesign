import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Star } from "lucide-react";

export interface Commander {
  id: string;
  name: string;
  designation: string;
  rank: string;
  startYear: number;
  photo: string;
  serviceYears: number;
}

interface CommanderLandingProps {
  onSelectCommander: (commander: Commander) => void;
}

export function CommanderLanding({ onSelectCommander }: CommanderLandingProps) {
  const commanders: Commander[] = [
    {
      id: "cmd-001",
      name: "General Marcus Sterling",
      designation: "Supreme Commander",
      rank: "General",
      startYear: 1995,
      photo: "https://images.unsplash.com/photo-1580711508011-43bf78c465c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      serviceYears: 30,
    },
    {
      id: "cmd-002",
      name: "Admiral Sarah Chen",
      designation: "Naval Operations Chief",
      rank: "Admiral",
      startYear: 1998,
      photo: "https://images.unsplash.com/photo-1574087988579-da02f0b90e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      serviceYears: 27,
    },
    {
      id: "cmd-003",
      name: "Colonel James Rodriguez",
      designation: "Ground Forces Commander",
      rank: "Colonel",
      startYear: 2002,
      photo: "https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      serviceYears: 23,
    },
    {
      id: "cmd-004",
      name: "Wing Commander Aisha Patel",
      designation: "Air Force Operations",
      rank: "Wing Commander",
      startYear: 2005,
      photo: "https://images.unsplash.com/photo-1751785407848-f7be1c93b833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      serviceYears: 20,
    },
    {
      id: "cmd-005",
      name: "Brigadier David Thompson",
      designation: "Special Operations Lead",
      rank: "Brigadier",
      startYear: 2007,
      photo: "https://images.unsplash.com/photo-1731363106135-83fb05b5accb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      serviceYears: 18,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e12] flex flex-col items-center justify-center p-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="w-12 h-12 text-emerald-400" />
          <h1 className="text-emerald-400 tracking-wider text-4xl">
            MILITARY SURVEILLANCE SYSTEM
          </h1>
          <Shield className="w-12 h-12 text-emerald-400" />
        </div>
        <p className="text-zinc-500 text-lg">Select Commander to Access System</p>
      </div>

      {/* Commander Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl">
        {commanders.map((commander) => (
          <button
            key={commander.id}
            onClick={() => onSelectCommander(commander)}
            className="group bg-[#12181f] border-2 border-zinc-800/50 rounded-xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 transform hover:scale-105"
          >
            {/* Photo */}
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <ImageWithFallback
                src={commander.photo}
                alt={commander.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Rank Badge */}
              <div className="absolute top-3 right-3 bg-emerald-500/90 px-3 py-1 rounded-md flex items-center gap-1">
                <Star className="w-4 h-4 text-black fill-black" />
                <span className="text-black text-xs">{commander.rank}</span>
              </div>
            </div>

            {/* Info */}
            <div className="text-left space-y-2">
              <h3 className="text-emerald-400 text-lg group-hover:text-emerald-300 transition-colors">
                {commander.name}
              </h3>
              
              <p className="text-zinc-400 text-sm">
                {commander.designation}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-800/50">
                <div>
                  <p className="text-zinc-600 text-xs">Service Start</p>
                  <p className="text-zinc-300 text-sm">{commander.startYear}</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-600 text-xs">Experience</p>
                  <p className="text-zinc-300 text-sm">{commander.serviceYears} Years</p>
                </div>
              </div>

              {/* Access Button */}
              <div className="pt-3">
                <div className="w-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 py-2 px-4 rounded-lg text-sm group-hover:bg-emerald-500/20 transition-colors">
                  Access System →
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-zinc-600 text-sm">
        <p>Classified System • Authorized Personnel Only</p>
        <p className="text-xs mt-1">All activities are monitored and logged</p>
      </div>
    </div>
  );
}
