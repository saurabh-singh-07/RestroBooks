import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Dashboard } from "@/pages/Dashboard";
import { AIChatWidget } from "@/components/dashboard/AIChatWidget";

const Index = () => {
  const [activeItem, setActiveItem] = useState("/");

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeItem={activeItem} onNavigate={setActiveItem} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header 
          title="Dashboard" 
          subtitle="Welcome back! Here's your restaurant's financial overview." 
        />
        <main className="flex-1 overflow-auto bg-muted/30">
          <Dashboard />
        </main>
      </div>
      <AIChatWidget />
    </div>
  );
};

export default Index;