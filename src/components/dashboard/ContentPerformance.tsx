
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Image, FileVideo, Megaphone, MessageCircle } from "lucide-react";

interface ContentType {
  type: string;
  icon: JSX.Element;
  engagement: number;
  change: number;
  recommendation: string;
}

const contentTypes: ContentType[] = [
  { 
    type: "Reels", 
    icon: <FileVideo className="h-4 w-4" />, 
    engagement: 82, 
    change: 14, 
    recommendation: "Continue creating short-form vertical videos with trending audio" 
  },
  { 
    type: "Carousel Posts", 
    icon: <Image className="h-4 w-4" />, 
    engagement: 75, 
    change: 9, 
    recommendation: "Include 5-7 slides with valuable tips or informational content" 
  },
  { 
    type: "Stories", 
    icon: <Megaphone className="h-4 w-4" />, 
    engagement: 64, 
    change: -5, 
    recommendation: "Add more interactive elements like polls and questions" 
  },
  { 
    type: "Single Images", 
    icon: <Image className="h-4 w-4" />, 
    engagement: 48, 
    change: -12, 
    recommendation: "Focus on high-quality visuals with educational captions" 
  },
  { 
    type: "Text Posts", 
    icon: <MessageCircle className="h-4 w-4" />, 
    engagement: 32, 
    change: -23, 
    recommendation: "Convert text content into more visual formats" 
  },
];

export function ContentPerformance() {
  return (
    <Card className="stats-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>AI analysis by content type</CardDescription>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <BrainCircuit className="h-3 w-3" /> AI Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px] pr-4">
          <div className="space-y-5">
            {contentTypes.map((content) => (
              <div key={content.type} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-muted rounded-md p-1">
                      {content.icon}
                    </div>
                    <span className="font-medium">{content.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{content.engagement}%</span>
                    <span 
                      className={`text-xs ${content.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}
                    >
                      {content.change > 0 ? '+' : ''}{content.change}%
                    </span>
                  </div>
                </div>
                <Progress value={content.engagement} className="h-2" />
                <div className="bg-muted rounded-md p-3 text-sm">
                  <span className="font-medium text-xs text-muted-foreground">AI Recommendation:</span>
                  <p className="text-sm">{content.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
