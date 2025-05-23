
import PageLayout from "@/components/layout/PageLayout";
import { ContentPerformance } from "@/components/dashboard/ContentPerformance";

const Content = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Strategy</h1>
          <p className="text-muted-foreground mt-1">
            Analyze your content performance and optimize for engagement
          </p>
        </div>

        <div className="space-y-4">
          <ContentPerformance />
          
          {/* Placeholder for future content strategy features */}
          <div className="bg-muted rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium mb-2">Additional Content Features Coming Soon</h3>
            <p className="text-muted-foreground">
              Content calendar integration, hashtag analytics, and caption performance analysis.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Content;
