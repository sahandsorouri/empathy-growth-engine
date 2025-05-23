
import PageLayout from "@/components/layout/PageLayout";
import { AiInsights as AiInsightsComponent } from "@/components/dashboard/AiInsights";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Lightbulb, MessageSquareText } from "lucide-react";

const AiInsights = () => {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Insights</h1>
          <p className="text-muted-foreground mt-1">
            Advanced AI-generated insights and recommendations
          </p>
        </div>

        <div className="space-y-4">
          <AiInsightsComponent />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="stats-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-insight" />
                  <CardTitle>Content Suggestions</CardTitle>
                </div>
                <CardDescription>AI-generated content ideas based on your audience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium">Behind-the-Scenes Series</h4>
                    <p className="text-sm text-muted-foreground">Show your product development process to increase authenticity and trust.</p>
                  </li>
                  <li className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium">User Experience Spotlight</h4>
                    <p className="text-sm text-muted-foreground">Feature real customers using your products in their daily lives.</p>
                  </li>
                  <li className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium">Interactive Poll Stories</h4>
                    <p className="text-sm text-muted-foreground">Engage your audience with opinion polls about industry trends.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="stats-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageSquareText className="h-5 w-5 text-insight" />
                  <CardTitle>Caption Templates</CardTitle>
                </div>
                <CardDescription>AI-optimized caption structures for better engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium">Question + Value + CTA</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "Ever wondered how to [pain point]? Here are 3 proven ways to [solution]. Which one will you try first? Let us know below! 👇"
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium">Story + Lesson + Question</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "When we first started [story beginning], we didn't realize that [challenge]. Here's what we learned: [lesson]. What's been your experience with this?"
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="font-medium">Statistic + Insight + Tip</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "Did you know that [surprising stat]? This means [explanation of relevance]. Pro tip: try [actionable advice] to leverage this insight!"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="stats-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-insight" />
                  <CardTitle>Competitive Analysis</CardTitle>
                </div>
                <CardDescription>AI-powered competitive intelligence</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-6 text-center">
                <h3 className="text-lg font-medium mb-2">Advanced Competitive Analysis Coming Soon</h3>
                <p className="text-muted-foreground">
                  Soon you'll be able to track competitor performance, analyze their content strategy, and identify market gaps.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default AiInsights;
