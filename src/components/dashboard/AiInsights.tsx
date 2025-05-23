
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Insight {
  id: number;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
}

const insights: Insight[] = [
  {
    id: 1,
    title: "Audience Engagement Peak Detected",
    description: "Your audience is most active on weekends between 10 AM and 2 PM. Consider scheduling important content during these times.",
    priority: "high"
  },
  {
    id: 2,
    title: "Content Type Performance Shift",
    description: "Carousel posts are outperforming single images by 43%. We recommend focusing on multi-image content series.",
    priority: "high"
  },
  {
    id: 3,
    title: "Caption Length Analysis",
    description: "Posts with captions between 70-100 words receive 35% more engagement than shorter or longer captions.",
    priority: "medium"
  },
  {
    id: 4,
    title: "Hashtag Effectiveness",
    description: "Your niche-specific hashtags are driving 22% more reach than your general hashtags. Consider refining your hashtag strategy.",
    priority: "medium"
  },
];

export function AiInsights() {
  return (
    <Card className="stats-card overflow-hidden">
      <CardHeader className="insight-gradient">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">AI Insights</CardTitle>
            <CardDescription className="text-white/80">Actionable recommendations</CardDescription>
          </div>
          <Badge variant="outline" className="border-white/30 text-white flex items-center gap-1">
            <BrainCircuit className="h-3 w-3" /> AI Generated
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {insights.map((insight) => (
            <div key={insight.id} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-1">
                <h4 className="font-medium">{insight.title}</h4>
                <Badge 
                  variant={insight.priority === "high" ? "destructive" : "outline"} 
                  className={cn(
                    insight.priority === "medium" && "bg-amber-100 text-amber-800 hover:bg-amber-100/80",
                    insight.priority === "low" && "bg-emerald-100 text-emerald-800 hover:bg-emerald-100/80",
                  )}
                >
                  {insight.priority === "high" ? "High Priority" : 
                   insight.priority === "medium" ? "Medium Priority" : "Low Priority"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
              <Button variant="ghost" size="sm" className="flex items-center text-xs gap-1 pl-0 hover:pl-2 transition-all">
                Take Action <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
