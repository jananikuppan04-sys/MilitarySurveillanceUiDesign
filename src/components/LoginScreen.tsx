import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Commander } from "./CommanderLanding";

interface LoginScreenProps {
  onLogin: () => void;
  commander: Commander;
}

export function LoginScreen({ onLogin, commander }: LoginScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0e12] via-[#0f1419] to-[#1a1f26] relative z-10">
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Header with Commander Photo */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <ImageWithFallback
                  src={commander.photo}
                  alt={commander.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500/90 px-3 py-1 rounded-full">
                <span className="text-black text-xs">{commander.rank}</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-emerald-400 tracking-wider mb-1 text-2xl">{commander.name}</h1>
            <p className="text-zinc-400 text-sm">{commander.designation}</p>
            <p className="text-zinc-600 text-xs mt-1">Service Since {commander.startYear}</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-6 bg-[#12181f] rounded-xl border border-zinc-800/50 shadow-lg space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-zinc-300">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-[#0a0e12] border-zinc-700/50 text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500/50 focus:ring-emerald-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#0a0e12] border-zinc-700/50 text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500/50 focus:ring-emerald-500/20"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              SECURE LOGIN
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center space-y-1">
          <p className="text-zinc-600 text-xs">Version 2.4.1 | Build 20251116</p>
          <p className="text-zinc-700 text-xs">© 2025 Military Systems Division</p>
        </div>
      </div>
    </div>
  );
}