
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function AccountSummary() {
  return (
    <Card className="stats-card">
      <CardContent className="p-0">
        <div className="p-6 bg-gradient-to-br from-brand-600 to-brand-800 text-white rounded-t-lg">
          <div className="flex items-center gap-4 mb-5">
            <Avatar className="h-16 w-16 border-2 border-white/50">
              <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Account image" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-bold text-xl">Adventurist Co.</div>
              <div className="text-white/80">@adventurist_co</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="font-bold text-xl">15.4K</div>
              <div className="text-white/80 text-xs">Followers</div>
            </div>
            <div>
              <div className="font-bold text-xl">642</div>
              <div className="text-white/80 text-xs">Following</div>
            </div>
            <div>
              <div className="font-bold text-xl">128</div>
              <div className="text-white/80 text-xs">Posts</div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium">Account Health</div>
            <Badge variant="outline" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100/80">
              Excellent
            </Badge>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Profile Completeness</span>
              <span className="font-medium">100%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Posting Consistency</span>
              <span className="font-medium">High</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Engagement Rate</span>
              <span className="font-medium">5.2%</span>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">View Full Profile</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
