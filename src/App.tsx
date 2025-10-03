import { useState } from "react";
import { AppSidebar } from "./components/AppSidebar";
import { TopNavbar } from "./components/TopNavbar";
import { DashboardView } from "./components/DashboardView";
import { CalendarView } from "./components/CalendarView";
import { CreatePostView } from "./components/CreatePostView";
import { AnalyticsView } from "./components/AnalyticsView";
import { MediaLibraryView } from "./components/MediaLibraryView";

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'calendar':
        return <CalendarView />;
      case 'create':
        return <CreatePostView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'media':
        return <MediaLibraryView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="h-screen flex bg-background dark">
      {/* Sidebar */}
      <AppSidebar activeView={activeView} onViewChange={setActiveView} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <TopNavbar />
        
        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {renderView()}
        </div>
      </div>
    </div>
  );
}
