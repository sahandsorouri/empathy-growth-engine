
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function AccountSummary() {
  return (
    <Card className="ai-card overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-16 w-16 border-2 border-white/30 shadow-lg">
                <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Account image" />
                <AvatarFallback className="bg-white/20 text-white font-bold">AC</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-bold text-xl">Adventurist Co.</div>
                <div className="text-white/80 text-sm">@adventurist_co</div>
              </div>
              <Sparkles className="ml-auto opacity-60" size={20} />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold text-xl">15.4K</div>
                <div className="text-white/80 text-xs">Followers</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold text-xl">642</div>
                <div className="text-white/80 text-xs">Following</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="font-bold text-xl">128</div>
                <div className="text-white/80 text-xs">Posts</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm font-semibold text-slate-700">Account Health</div>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
              Excellent
            </Badge>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between py-2">
              <span className="text-slate-600">Profile Completeness</span>
              <span className="font-semibold text-slate-900">100%</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-slate-600">Posting Consistency</span>
              <span className="font-semibold text-slate-900">High</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-slate-600">Engagement Rate</span>
              <span className="font-semibold text-slate-900">5.2%</span>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="w-full rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700 font-medium">
              View Full Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
