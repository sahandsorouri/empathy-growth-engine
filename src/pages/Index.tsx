
import { BarChart3, Eye, Rocket, ThumbsUp, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { EngagementHeatmap } from "@/components/dashboard/EngagementHeatmap";
import { ContentPerformance } from "@/components/dashboard/ContentPerformance";
import { AudienceOverview } from "@/components/dashboard/AudienceOverview";
import { AiInsights } from "@/components/dashboard/AiInsights";
import { AccountSummary } from "@/components/dashboard/AccountSummary";
import { PerformanceTrends } from "@/components/dashboard/PerformanceTrends";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Welcome to InstaAI Dashboard",
      description: "AI-powered insights are ready for your review",
      duration: 5000,
    });
  }, [toast]);

  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            AI-powered insights and analytics for your Instagram performance
          </p>
        </div>

        {/* Key metrics row */}
        <div className="dashboard-grid">
          <StatCard 
            title="Total Impressions" 
            value="198.5K" 
            icon={<Eye className="h-5 w-5 text-muted-foreground" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard 
            title="Engagement Rate" 
            value="5.2%" 
            icon={<ThumbsUp className="h-5 w-5 text-muted-foreground" />}
            trend={{ value: 0.8, isPositive: true }}
          />
          <StatCard 
            title="Total Followers" 
            value="15.4K" 
            icon={<Users className="h-5 w-5 text-muted-foreground" />}
            trend={{ value: 3.2, isPositive: true }}
          />
          <StatCard 
            title="Reach" 
            value="112.3K" 
            icon={<Rocket className="h-5 w-5 text-muted-foreground" />}
            trend={{ value: 8.7, isPositive: true }}
          />
        </div>
        
        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <PerformanceTrends />
          </div>
          <div className="flex flex-col space-y-4">
            <AccountSummary />
            <AudienceOverview />
          </div>
        </div>
        
        {/* AI insights row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EngagementHeatmap />
          <ContentPerformance />
        </div>
        
        <AiInsights />
      </div>
    </PageLayout>
  );
};

export default Index;
