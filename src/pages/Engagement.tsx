
import PageLayout from "@/components/layout/PageLayout";
import { EngagementHeatmap } from "@/components/dashboard/EngagementHeatmap";

const Engagement = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Engagement Analysis</h1>
          <p className="text-muted-foreground mt-1">
            Track and optimize your audience engagement metrics
          </p>
        </div>

        <div className="space-y-4">
          <EngagementHeatmap />
          
          {/* Placeholder for future engagement analysis features */}
          <div className="bg-muted rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium mb-2">Additional Engagement Features Coming Soon</h3>
            <p className="text-muted-foreground">
              Comment sentiment analysis, engagement rate benchmarks, and follower interaction tracking.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Engagement;
