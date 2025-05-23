
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Calendar,
  Home,
  PieChart,
  Settings,
  TrendingUp,
  Users,
  Menu,
  X,
  BrainCircuit,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type SidebarItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const sidebarItems: SidebarItem[] = [
  { name: "Dashboard", href: "/", icon: <Home size={20} /> },
  { name: "Analytics", href: "/analytics", icon: <BarChart3 size={20} /> },
  { name: "Audience", href: "/audience", icon: <Users size={20} /> },
  { name: "Content", href: "/content", icon: <PieChart size={20} /> },
  { name: "Engagement", href: "/engagement", icon: <TrendingUp size={20} /> },
  { name: "Calendar", href: "/calendar", icon: <Calendar size={20} /> },
];

const secondarySidebarItems: SidebarItem[] = [
  { name: "AI Insights", href: "/ai-insights", icon: <BrainCircuit size={20} /> },
  { name: "Settings", href: "/settings", icon: <Settings size={20} /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const sidebarContent = (
    <div className="h-full flex flex-col bg-sidebar p-4 text-sidebar-foreground">
      <div className="flex items-center mb-8 gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-600">
          <BrainCircuit size={24} className="text-white" />
        </div>
        <div className="font-bold text-lg">InstaAI</div>
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </Button>
        )}
      </div>
      
      <div className="space-y-1">
        {sidebarItems.map((item) => (
          <SidebarLink key={item.name} item={item} />
        ))}
      </div>
      
      <div className="mt-auto pt-4 border-t border-sidebar-border space-y-1">
        {secondarySidebarItems.map((item) => (
          <SidebarLink key={item.name} item={item} />
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-50"
          onClick={() => setOpen(true)}
        >
          <Menu size={20} />
        </Button>
        <div 
          className={cn(
            "fixed inset-0 z-40 bg-black/50 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          )} 
          onClick={() => setOpen(false)}
        />
        <div 
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {sidebarContent}
        </div>
      </>
    );
  }

  return <div className="hidden md:block w-64 h-full">{sidebarContent}</div>;
}

function SidebarLink({ item }: { item: SidebarItem }) {
  const isActive = window.location.pathname === item.href;
  
  return (
    <Link 
      to={item.href} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      )}
    >
      {item.icon}
      <span>{item.name}</span>
    </Link>
  );
}
