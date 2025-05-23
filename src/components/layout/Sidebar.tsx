
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
  Sparkles,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type SidebarItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const sidebarItems: SidebarItem[] = [
  { name: "Dashboard", href: "/", icon: <Home size={18} /> },
  { name: "Analytics", href: "/analytics", icon: <BarChart3 size={18} /> },
  { name: "Audience", href: "/audience", icon: <Users size={18} /> },
  { name: "Content", href: "/content", icon: <PieChart size={18} /> },
  { name: "Engagement", href: "/engagement", icon: <TrendingUp size={18} /> },
  { name: "Calendar", href: "/calendar", icon: <Calendar size={18} /> },
];

const secondarySidebarItems: SidebarItem[] = [
  { name: "AI Insights", href: "/ai-insights", icon: <Sparkles size={18} /> },
  { name: "Settings", href: "/settings", icon: <Settings size={18} /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const sidebarContent = (
    <div className="h-full flex flex-col bg-white/90 backdrop-blur-xl border-r border-slate-200/50 p-6 text-slate-700">
      <div className="flex items-center mb-10 gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
          <BrainCircuit size={20} className="text-white" />
        </div>
        <div className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          InstaAI
        </div>
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto hover:bg-slate-100 rounded-xl"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </Button>
        )}
      </div>
      
      <div className="space-y-2">
        {sidebarItems.map((item) => (
          <SidebarLink key={item.name} item={item} />
        ))}
      </div>
      
      <div className="mt-auto pt-6 border-t border-slate-200/50 space-y-2">
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
          className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-xl shadow-lg hover:bg-white/90 rounded-xl"
          onClick={() => setOpen(true)}
        >
          <Menu size={18} />
        </Button>
        <div 
          className={cn(
            "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          )} 
          onClick={() => setOpen(false)}
        />
        <div 
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {sidebarContent}
        </div>
      </>
    );
  }

  return <div className="hidden md:block w-72 h-full">{sidebarContent}</div>;
}

function SidebarLink({ item }: { item: SidebarItem }) {
  const isActive = window.location.pathname === item.href;
  
  return (
    <Link 
      to={item.href} 
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm",
        isActive 
          ? "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 shadow-sm" 
          : "hover:bg-slate-100/80 text-slate-600 hover:text-slate-900"
      )}
    >
      {item.icon}
      <span>{item.name}</span>
    </Link>
  );
}
