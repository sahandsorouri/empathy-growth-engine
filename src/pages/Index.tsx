
import { BarChart3, Eye, Rocket, ThumbsUp, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { EngagementHeatmap } from "@/components/dashboard/EngagementHeatmap";
import { ContentPerformance } from "@/components/dashboard/ContentPerformance";
import { AudienceOverview } from "@/components/dashboard/AudienceOverview";
import { AiInsights } from "@/components/dashboard/AiInsights";
import { AccountSummary } from "@/components/dashboard/AccountSummary";
import { PerformanceTrends } from "@/components/dashboard/PerformanceTrends";
import { ContentSuggestions } from "@/components/dashboard/ContentSuggestions";
import { LatestPostInteractions } from "@/components/dashboard/LatestPostInteractions";
import { NextPostIdeas } from "@/components/dashboard/NextPostIdeas";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Welcome to InstaAI Dashboard ✨",
      description: "AI-powered insights are ready for your review",
      duration: 5000,
    });
  }, [toast]);

  return (
    <PageLayout>
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-2" style={{
            background: 'linear-gradient(to right, rgb(15, 23, 42), rgb(139, 92, 246), rgb(99, 102, 241))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            AI Dashboard
          </h1>
          <p className="text-slate-600 text-lg">
            Intelligent insights and predictive analytics for your Instagram growth
          </p>
        </div>

        {/* Key metrics row */}
        <div className="dashboard-grid">
          <StatCard 
            title="Total Impressions" 
            value="198.5K" 
            icon={<Eye className="h-5 w-5" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard 
            title="Engagement Rate" 
            value="5.2%" 
            icon={<ThumbsUp className="h-5 w-5" />}
            trend={{ value: 0.8, isPositive: true }}
          />
          <StatCard 
            title="Total Followers" 
            value="15.4K" 
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 3.2, isPositive: true }}
          />
          <StatCard 
            title="Reach" 
            value="112.3K" 
            icon={<Rocket className="h-5 w-5" />}
            trend={{ value: 8.7, isPositive: true }}
          />
        </div>
        
        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceTrends />
          </div>
          <div className="flex flex-col space-y-6">
            <AccountSummary />
            <AudienceOverview />
          </div>
        </div>
        
        {/* Content and insights row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ContentSuggestions />
          </div>
          <div className="flex flex-col space-y-6">
            <LatestPostInteractions />
            <NextPostIdeas />
          </div>
        </div>
        
        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EngagementHeatmap />
          <ContentPerformance />
        </div>
        
        <AiInsights />
      </div>
    </PageLayout>
  );
};

export default Index;
