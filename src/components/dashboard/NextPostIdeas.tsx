import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Clock, TrendingUp, Zap } from "lucide-react";

interface PostIdea {
  id: number;
  title: string;
  type: "photo" | "reel" | "carousel" | "story";
  urgency: "high" | "medium" | "low";
  trendScore: number;
  estimatedTime: string;
}

const nextIdeas: PostIdea[] = [
  {
    id: 1,
    title: "Trending Audio Reel",
    type: "reel",
    urgency: "high",
    trendScore: 94,
    estimatedTime: "15 min"
  },
  {
    id: 2,
    title: "Weekly Tips Carousel",
    type: "carousel",
    urgency: "medium",
    trendScore: 87,
    estimatedTime: "30 min"
  },
  {
    id: 3,
    title: "Story Poll",
    type: "story",
    urgency: "high",
    trendScore: 82,
    estimatedTime: "5 min"
  },
  {
    id: 4,
    title: "Behind the Scenes",
    type: "photo",
    urgency: "low",
    trendScore: 76,
    estimatedTime: "10 min"
  }
];

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case "high": return "bg-red-100 text-red-700";
    case "medium": return "bg-amber-100 text-amber-700";
    case "low": return "bg-green-100 text-green-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "reel": return "bg-purple-100 text-purple-700";
    case "carousel": return "bg-blue-100 text-blue-700";
    case "story": return "bg-pink-100 text-pink-700";
    case "photo": return "bg-indigo-100 text-indigo-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

export function NextPostIdeas() {
  return (
    <Card className="ai-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-slate-800">
          <Lightbulb className="h-5 w-5" style={{ color: 'rgb(234, 179, 8)' }} />
          Quick Post Ideas
        </CardTitle>
        <CardDescription className="text-slate-500">AI-prioritized content suggestions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {nextIdeas.map((idea) => (
            <div key={idea.id} className="p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-all duration-200 group" style={{
              backgroundColor: 'rgb(248, 250, 252)'
            }}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="font-medium text-slate-800 text-sm mb-1 group-hover:text-slate-900 transition-colors">
                    {idea.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`text-xs ${getTypeColor(idea.type)}`}>
                      {idea.type}
                    </Badge>
                    <Badge className={`text-xs ${getUrgencyColor(idea.urgency)}`}>
                      {idea.urgency}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
                    <TrendingUp className="h-3 w-3" />
                    {idea.trendScore}%
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="h-3 w-3" />
                    {idea.estimatedTime}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="h-1 bg-slate-100 rounded-full flex-1 mr-3 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${idea.trendScore}%`,
                      backgroundColor: 'rgb(168, 85, 247)'
                    }}
                  />
                </div>
                <Button variant="outline" size="sm" className="h-6 text-xs px-2 hover:bg-white" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                  <Zap className="h-3 w-3 mr-1" />
                  Start
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
