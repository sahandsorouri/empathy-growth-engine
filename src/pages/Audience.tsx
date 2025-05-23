
import PageLayout from "@/components/layout/PageLayout";
import { AudienceOverview } from "@/components/dashboard/AudienceOverview";

const Audience = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Audience Insights</h1>
          <p className="text-muted-foreground mt-1">
            Understand your followers and target audience demographics
          </p>
        </div>

        <div className="space-y-4">
          <AudienceOverview />
          
          {/* Placeholder for future audience insights content */}
          <div className="bg-muted rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium mb-2">Additional Audience Features Coming Soon</h3>
            <p className="text-muted-foreground">
              Location analysis, interest segmentation, and follower growth trends.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Audience;
