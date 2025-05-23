import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Lightbulb, Sparkles, Image, Calendar, Copy, Heart } from "lucide-react";

interface ContentIdea {
  id: number;
  title: string;
  description: string;
  type: "photo" | "reel" | "carousel" | "story";
  hashtags: string[];
  estimatedEngagement: string;
  trendScore: number;
}

const contentIdeas: ContentIdea[] = [
  {
    id: 1,
    title: "Behind-the-Scenes Monday",
    description: "Show your workspace setup or morning routine to build authentic connections with your audience.",
    type: "photo",
    hashtags: ["#BehindTheScenes", "#MondayMotivation", "#Workspace"],
    estimatedEngagement: "High",
    trendScore: 92
  },
  {
    id: 2,
    title: "Quick Tips Carousel",
    description: "Create a 5-slide carousel with actionable tips related to your niche. Educational content performs 40% better.",
    type: "carousel",
    hashtags: ["#Tips", "#Education", "#Value"],
    estimatedEngagement: "Very High",
    trendScore: 96
  },
  {
    id: 3,
    title: "Transformation Tuesday",
    description: "Share a before/after or progress story. These posts generate 67% more saves than average.",
    type: "reel",
    hashtags: ["#TransformationTuesday", "#Progress", "#Growth"],
    estimatedEngagement: "High",
    trendScore: 89
  },
  {
    id: 4,
    title: "Interactive Poll Story",
    description: "Ask your audience to choose between two options related to your upcoming content or products.",
    type: "story",
    hashtags: ["#Poll", "#Interactive", "#Community"],
    estimatedEngagement: "Medium",
    trendScore: 78
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "photo": return <Image className="h-4 w-4" />;
    case "reel": return <Sparkles className="h-4 w-4" />;
    case "carousel": return <Calendar className="h-4 w-4" />;
    case "story": return <Heart className="h-4 w-4" />;
    default: return <Image className="h-4 w-4" />;
  }
};

const getEngagementColor = (engagement: string) => {
  switch (engagement) {
    case "Very High": return "bg-emerald-100 text-emerald-800";
    case "High": return "bg-blue-100 text-blue-800";
    case "Medium": return "bg-amber-100 text-amber-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export function ContentSuggestions() {
  return (
    <Card className="ai-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Content Factory
            </CardTitle>
            <CardDescription className="text-slate-500">
              AI-generated content ideas tailored for your audience
            </CardDescription>
          </div>
          <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Generated
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contentIdeas.map((idea) => (
            <div key={idea.id} className="group bg-gradient-to-r from-slate-50/50 to-white/50 rounded-xl p-4 border border-slate-100/50 hover:border-slate-200/50 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-slate-100">
                    {getTypeIcon(idea.type)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {idea.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs capitalize bg-white/80">
                        {idea.type}
                      </Badge>
                      <Badge className={`text-xs ${getEngagementColor(idea.estimatedEngagement)}`}>
                        {idea.estimatedEngagement}
                      </Badge>
                      <span className="text-xs text-slate-500">
                        Trend Score: {idea.trendScore}%
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                {idea.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {idea.hashtags.map((hashtag, index) => (
                  <span key={index} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md">
                    {hashtag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 bg-slate-100 rounded-full w-16 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500"
                      style={{ width: `${idea.trendScore}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500">Trending</span>
                </div>
                <Button variant="outline" size="sm" className="h-7 text-xs bg-white/80 hover:bg-white">
                  Use Idea
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-100 mt-6 pt-4 bg-gradient-to-r from-slate-50/30 to-white/30">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
            <Sparkles className="h-4 w-4 mr-2" />
            Generate More Ideas
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
