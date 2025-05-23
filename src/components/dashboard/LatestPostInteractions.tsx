
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, Eye } from "lucide-react";

interface PostInteraction {
  id: number;
  username: string;
  avatar: string;
  action: "liked" | "commented" | "shared" | "viewed";
  postImage: string;
  timeAgo: string;
  comment?: string;
}

const interactions: PostInteraction[] = [
  {
    id: 1,
    username: "sarah_designs",
    avatar: "/placeholder.svg",
    action: "liked",
    postImage: "/placeholder.svg",
    timeAgo: "2m ago"
  },
  {
    id: 2,
    username: "mike_photo",
    avatar: "/placeholder.svg",
    action: "commented",
    postImage: "/placeholder.svg",
    timeAgo: "5m ago",
    comment: "Amazing work! 🔥"
  },
  {
    id: 3,
    username: "jenny_art",
    avatar: "/placeholder.svg",
    action: "shared",
    postImage: "/placeholder.svg",
    timeAgo: "8m ago"
  },
  {
    id: 4,
    username: "alex_dev",
    avatar: "/placeholder.svg",
    action: "viewed",
    postImage: "/placeholder.svg",
    timeAgo: "12m ago"
  },
  {
    id: 5,
    username: "lisa_marketing",
    avatar: "/placeholder.svg",
    action: "liked",
    postImage: "/placeholder.svg",
    timeAgo: "15m ago"
  }
];

const getActionIcon = (action: string) => {
  switch (action) {
    case "liked": return <Heart className="h-4 w-4 text-red-500" />;
    case "commented": return <MessageCircle className="h-4 w-4 text-blue-500" />;
    case "shared": return <Share className="h-4 w-4 text-green-500" />;
    case "viewed": return <Eye className="h-4 w-4 text-slate-500" />;
    default: return <Eye className="h-4 w-4 text-slate-500" />;
  }
};

const getActionText = (action: string) => {
  switch (action) {
    case "liked": return "liked your post";
    case "commented": return "commented on your post";
    case "shared": return "shared your post";
    case "viewed": return "viewed your post";
    default: return "interacted with your post";
  }
};

export function LatestPostInteractions() {
  return (
    <Card className="ai-card">
      <CardHeader>
        <CardTitle className="text-slate-800">Latest Interactions</CardTitle>
        <CardDescription className="text-slate-500">Recent activity on your posts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {interactions.map((interaction) => (
            <div key={interaction.id} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-50/50 to-white/50 border border-slate-100/50 hover:border-slate-200/50 transition-all duration-200">
              <Avatar className="h-10 w-10">
                <AvatarImage src={interaction.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700">
                  {interaction.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-slate-800 text-sm">@{interaction.username}</span>
                  {getActionIcon(interaction.action)}
                </div>
                <p className="text-xs text-slate-600 mb-1">
                  {getActionText(interaction.action)}
                </p>
                {interaction.comment && (
                  <p className="text-xs text-slate-700 bg-white/60 rounded px-2 py-1 mt-1">
                    "{interaction.comment}"
                  </p>
                )}
                <span className="text-xs text-slate-400">{interaction.timeAgo}</span>
              </div>
              
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={interaction.postImage} 
                  alt="Post" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
