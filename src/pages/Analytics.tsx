
import PageLayout from "@/components/layout/PageLayout";
import { PerformanceTrends } from "@/components/dashboard/PerformanceTrends";
import { EngagementHeatmap } from "@/components/dashboard/EngagementHeatmap";

const Analytics = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            In-depth analysis of your Instagram performance metrics
          </p>
        </div>

        <div className="space-y-4">
          <PerformanceTrends />
          <EngagementHeatmap />
          
          {/* Placeholder for future analytics content */}
          <div className="bg-muted rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium mb-2">Additional Analytics Features Coming Soon</h3>
            <p className="text-muted-foreground">
              Advanced reporting tools, custom date ranges, and data export capabilities.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Analytics;
