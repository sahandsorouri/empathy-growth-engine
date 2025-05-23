
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

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

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-lg">
        <p className="text-sm font-medium text-slate-800">
          {`${payload[0].name}: ${payload[0].value}%`}
        </p>
      </div>
    );
  }
  return null;
};

const LegendItem = ({ color, name, value }: { color: string; name: string; value: number }) => (
  <div className="flex items-center gap-2 text-sm">
    <div 
      className="w-3 h-3 rounded-full" 
      style={{ backgroundColor: color }}
    />
    <span className="text-slate-600">{name}</span>
    <span className="font-medium text-slate-800 ml-auto">{value}%</span>
  </div>
);

export function AudienceOverview() {
  return (
    <Card className="ai-card group hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-slate-800">Audience Demographics</CardTitle>
        <CardDescription className="text-slate-500">Age and gender distribution insights</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Age Groups */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800 text-center">Age Distribution</h4>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {data.map((entry, index) => (
                <LegendItem
                  key={entry.name}
                  color={COLORS[index % COLORS.length]}
                  name={entry.name}
                  value={entry.value}
                />
              ))}
            </div>
          </div>
          
          {/* Gender Distribution */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800 text-center">Gender Distribution</h4>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={GenderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {GenderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {GenderData.map((entry, index) => (
                <LegendItem
                  key={entry.name}
                  color={GENDER_COLORS[index % GENDER_COLORS.length]}
                  name={entry.name}
                  value={entry.value}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
