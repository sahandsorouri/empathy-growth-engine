
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "18-24", value: 23 },
  { name: "25-34", value: 42 },
  { name: "35-44", value: 19 },
  { name: "45+", value: 16 },
];

const COLORS = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

const GenderData = [
  { name: "Women", value: 68 },
  { name: "Men", value: 30 },
  { name: "Non-binary", value: 2 },
];

const GENDER_COLORS = ["#8B5CF6", "#C4B5FD", "#E9D5FF"];

export function AudienceOverview() {
  return (
    <Card className="stats-card">
      <CardHeader>
        <CardTitle>Audience Demographics</CardTitle>
        <CardDescription>Age and gender distribution</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-[200px]">
            <h4 className="text-sm font-medium mb-2 text-center">Age Groups</h4>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="h-[200px]">
            <h4 className="text-sm font-medium mb-2 text-center">Gender</h4>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={GenderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {GenderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                  ))}
                </Pie>
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
