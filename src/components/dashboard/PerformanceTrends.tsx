
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  { date: "Apr 1", impressions: 12400, engagement: 824, followers: 14100 },
  { date: "Apr 8", impressions: 14200, engagement: 920, followers: 14250 },
  { date: "Apr 15", impressions: 15100, engagement: 1050, followers: 14500 },
  { date: "Apr 22", impressions: 16700, engagement: 1210, followers: 14800 },
  { date: "Apr 29", impressions: 18200, engagement: 1380, followers: 15100 },
  { date: "May 6", impressions: 17300, engagement: 1290, followers: 15200 },
  { date: "May 13", impressions: 19500, engagement: 1470, followers: 15400 },
];

export function PerformanceTrends() {
  return (
    <Card className="stats-card col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Performance Trends</CardTitle>
            <CardDescription>Key metrics over time</CardDescription>
          </div>
          <Badge variant="outline">Last 30 Days</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="impressions" className="w-full">
          <TabsList>
            <TabsTrigger value="impressions">Impressions</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="followers">Followers</TabsTrigger>
          </TabsList>
          <TabsContent value="impressions">
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="impressions"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="engagement">
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="engagement"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="followers">
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="followers"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
