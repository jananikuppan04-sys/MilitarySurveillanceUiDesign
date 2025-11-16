import { useState } from "react";
import { LiveFusedVideo } from "./components/LiveFusedVideo";
import { VisScreen } from "./components/VisScreen";
import { MwirScreen } from "./components/MwirScreen";
import { MapView } from "./components/MapView";
import { RecordingsPage } from "./components/RecordingsPage";
import { SystemHealth } from "./components/SystemHealth";
import { LoginScreen } from "./components/LoginScreen";
import { Sidebar } from "./components/Sidebar";
import { MilitaryBackground } from "./components/MilitaryBackground";
import { CommanderLanding } from "./components/CommanderLanding";
import { TroopSelection } from "./components/TroopSelection";
import type { Commander } from "./components/CommanderLanding";
import type { TroopMember } from "./components/TroopSelection";
import { Toaster } from "./components/ui/sonner";

type Screen = "commander-landing" | "login" | "troop-selection" | "fused" | "vis" | "mwir" | "map" | "recordings" | "health";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("commander-landing");
  const [selectedCommander, setSelectedCommander] = useState<Commander | null>(null);
  const [selectedTroopMember, setSelectedTroopMember] = useState<TroopMember | null>(null);

  const handleCommanderSelect = (commander: Commander) => {
    setSelectedCommander(commander);
    setCurrentScreen("login");
  };

  const handleLogin = () => {
    setCurrentScreen("troop-selection");
  };

  const handleTroopMemberSelect = (member: TroopMember) => {
    setSelectedTroopMember(member);
    setCurrentScreen("fused");
  };

  const handleLogout = () => {
    setSelectedCommander(null);
    setSelectedTroopMember(null);
    setCurrentScreen("commander-landing");
  };

  // Commander Landing Page
  if (currentScreen === "commander-landing") {
    return (
      <>
        <MilitaryBackground />
        <CommanderLanding onSelectCommander={handleCommanderSelect} />
        <Toaster position="top-right" />
      </>
    );
  }

  // Login Page
  if (currentScreen === "login" && selectedCommander) {
    return (
      <>
        <MilitaryBackground />
        <LoginScreen onLogin={handleLogin} commander={selectedCommander} />
        <Toaster position="top-right" />
      </>
    );
  }

  // Troop Selection Page
  if (currentScreen === "troop-selection" && selectedCommander) {
    return (
      <>
        <MilitaryBackground />
        <TroopSelection commander={selectedCommander} onSelectMember={handleTroopMemberSelect} />
        <Toaster position="top-right" />
      </>
    );
  }

  // Main Application with Sidebar
  return (
    <>
      <MilitaryBackground />
      <div className="flex h-screen bg-[#0a0e12] text-zinc-100 overflow-hidden relative z-10">
        <Sidebar currentScreen={currentScreen} onNavigate={setCurrentScreen} />
        
        <div className="flex-1 flex flex-col">
          {currentScreen === "fused" && <LiveFusedVideo onLogout={handleLogout} />}
          {currentScreen === "vis" && <VisScreen onLogout={handleLogout} />}
          {currentScreen === "mwir" && <MwirScreen onLogout={handleLogout} />}
          {currentScreen === "map" && <MapView onLogout={handleLogout} />}
          {currentScreen === "recordings" && <RecordingsPage onLogout={handleLogout} />}
          {currentScreen === "health" && <SystemHealth onLogout={handleLogout} />}
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
}