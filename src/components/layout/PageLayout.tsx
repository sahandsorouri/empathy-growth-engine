
import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        {children}
      </main>
    </div>
  );
}
