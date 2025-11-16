import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Users, Shield } from "lucide-react";
import type { Commander } from "./CommanderLanding";

export interface TroopMember {
  id: string;
  name: string;
  designation: string;
  rank: string;
  stars: number;
  photo: string;
  status: "active" | "on-mission" | "standby";
}

interface TroopSelectionProps {
  commander: Commander;
  onSelectMember: (member: TroopMember) => void;
}

export function TroopSelection({ commander, onSelectMember }: TroopSelectionProps) {
  const troopMembers: TroopMember[] = [
    {
      id: "troop-001",
      name: "Captain Michael Torres",
      designation: "Field Operations Lead",
      rank: "Captain",
      stars: 3,
      photo: "https://images.unsplash.com/photo-1610410543887-77b60140519d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      status: "active",
    },
    {
      id: "troop-002",
      name: "Lt. Emily Watson",
      designation: "Surveillance Specialist",
      rank: "Lieutenant",
      stars: 2,
      photo: "https://images.unsplash.com/photo-1580711508011-43bf78c465c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      status: "on-mission",
    },
    {
      id: "troop-003",
      name: "Sgt. Ahmed Hassan",
      designation: "Tactical Intelligence",
      rank: "Sergeant",
      stars: 4,
      photo: "https://images.unsplash.com/photo-1574087988579-da02f0b90e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      status: "active",
    },
    {
      id: "troop-004",
      name: "Lt. Colonel Maria Santos",
      designation: "Communications Lead",
      rank: "Lt. Colonel",
      stars: 4,
      photo: "https://images.unsplash.com/photo-1714272663284-5ce8ab649ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      status: "standby",
    },
    {
      id: "troop-005",
      name: "Major Robert Kim",
      designation: "Drone Operations",
      rank: "Major",
      stars: 3,
      photo: "https://images.unsplash.com/photo-1751785407848-f7be1c93b833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      status: "active",
    },
    {
      id: "troop-006",
      name: "Captain Lisa Anderson",
      designation: "Sensor Systems",
      rank: "Captain",
      stars: 3,
      photo: "https://images.unsplash.com/photo-1731363106135-83fb05b5accb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      status: "on-mission",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500";
      case "on-mission":
        return "bg-orange-500";
      case "standby":
        return "bg-blue-500";
      default:
        return "bg-zinc-500";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "on-mission":
        return "On Mission";
      case "standby":
        return "Standby";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e12] flex flex-col p-8 relative z-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-500/30">
            <ImageWithFallback
              src={commander.photo}
              alt={commander.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-emerald-400 tracking-wider text-3xl">
              {commander.name}
            </h1>
            <p className="text-zinc-400">{commander.designation}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#12181f] border border-zinc-800/50 rounded-lg p-4">
          <Users className="w-6 h-6 text-emerald-400" />
          <div>
            <h2 className="text-emerald-400 text-xl">Select Troop Member to Monitor</h2>
            <p className="text-zinc-500 text-sm">Choose an operative to access their surveillance dashboard</p>
          </div>
        </div>
      </div>

      {/* Troop Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {troopMembers.map((member) => (
          <button
            key={member.id}
            onClick={() => onSelectMember(member)}
            className="group bg-[#12181f] border-2 border-zinc-800/50 rounded-xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 transform hover:scale-105 text-left"
          >
            {/* Photo and Status */}
            <div className="relative mb-4">
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg" />

              {/* Status Indicator */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded-md">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(member.status)} animate-pulse`} />
                <span className="text-white text-xs">{getStatusLabel(member.status)}</span>
              </div>

              {/* Stars */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-md">
                {Array.from({ length: member.stars }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-emerald-400 text-lg group-hover:text-emerald-300 transition-colors">
                  {member.name}
                </h3>
                <Shield className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>

              <p className="text-zinc-400 text-sm">
                {member.designation}
              </p>

              <div className="pt-2 border-t border-zinc-800/50">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-600 text-xs">Rank</span>
                  <span className="text-emerald-400 text-sm">{member.rank}</span>
                </div>
              </div>

              {/* Monitor Button */}
              <div className="pt-3">
                <div className="w-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 py-2 px-4 rounded-lg text-sm text-center group-hover:bg-emerald-500/20 transition-colors">
                  Monitor Dashboard →
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-zinc-600 text-sm">
        <p>Active Personnel: {troopMembers.filter(m => m.status === "active").length} | On Mission: {troopMembers.filter(m => m.status === "on-mission").length} | Standby: {troopMembers.filter(m => m.status === "standby").length}</p>
      </div>
    </div>
  );
}
