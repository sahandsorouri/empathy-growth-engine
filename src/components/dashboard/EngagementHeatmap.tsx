
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit } from "lucide-react";

type HeatmapDay = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
type HeatmapHour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

interface HeatmapCell {
  day: HeatmapDay;
  hour: HeatmapHour;
  value: number; // Between 0-10
  isOptimal: boolean;
}

const daysOfWeek: HeatmapDay[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Sample data
const generateHeatmapData = (): HeatmapCell[] => {
  const data: HeatmapCell[] = [];
  const optimalTimes = [
    { day: 'Tue' as HeatmapDay, hour: 18 as HeatmapHour },
    { day: 'Wed' as HeatmapDay, hour: 12 as HeatmapHour },
    { day: 'Thu' as HeatmapDay, hour: 19 as HeatmapHour },
    { day: 'Sat' as HeatmapDay, hour: 10 as HeatmapHour },
    { day: 'Sun' as HeatmapDay, hour: 13 as HeatmapHour },
  ];

  daysOfWeek.forEach(day => {
    // Only show hours between 6-23 for cleaner UI
    for (let hour = 6; hour <= 23; hour++) {
      const hourTyped = hour as HeatmapHour;
      // Base engagement level
      let value = Math.floor(Math.random() * 4) + 1;

      // Higher engagement during evening hours
      if (hour >= 17 && hour <= 21) {
        value += Math.floor(Math.random() * 3) + 2;
      }

      // Weekend boost
      if ((day === 'Sat' || day === 'Sun') && hour >= 10 && hour <= 18) {
        value += Math.floor(Math.random() * 2) + 1;
      }

      // Ensure max value of 10
      value = Math.min(value, 10);

      // Check if this is an optimal time
      const isOptimal = optimalTimes.some(t => t.day === day && t.hour === hourTyped);
      if (isOptimal) {
        value = 10; // Ensure optimal times have max value
      }

      data.push({ day, hour: hourTyped, value, isOptimal });
    }
  });

  return data;
};

const heatmapData = generateHeatmapData();

const getColorForValue = (value: number): string => {
  if (value >= 9) return 'bg-emerald-500';
  if (value >= 7) return 'bg-emerald-400';
  if (value >= 5) return 'bg-emerald-300';
  if (value >= 3) return 'bg-emerald-200';
  return 'bg-emerald-100';
};

export function EngagementHeatmap() {
  const formatHour = (hour: number): string => {
    return hour === 0 ? '12 AM' : 
           hour === 12 ? '12 PM' : 
           hour < 12 ? `${hour} AM` : 
           `${hour - 12} PM`;
  };

  return (
    <Card className="stats-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Engagement Heatmap</CardTitle>
            <CardDescription>AI-powered optimal posting times</CardDescription>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <BrainCircuit className="h-3 w-3" /> AI Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="flex">
              <div className="w-12"></div>
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="w-7 text-center text-xs text-muted-foreground">
                  {formatHour(i + 6)}
                </div>
              ))}
            </div>
            <TooltipProvider>
              {daysOfWeek.map((day) => (
                <div key={day} className="flex items-center">
                  <div className="w-12 py-1 text-xs font-medium">{day}</div>
                  {Array.from({ length: 18 }).map((_, hourIndex) => {
                    const hour = (hourIndex + 6) as HeatmapHour;
                    const cell = heatmapData.find(d => d.day === day && d.hour === hour);
                    if (!cell) return <div key={hourIndex} className="w-7 h-7"></div>;
                    
                    return (
                      <Tooltip key={hourIndex}>
                        <TooltipTrigger asChild>
                          <div 
                            className={`w-7 h-7 m-0.5 rounded ${getColorForValue(cell.value)} flex items-center justify-center`}
                          >
                            {cell.isOptimal && (
                              <div className="w-2 h-2 rounded-full bg-white animate-pulse-subtle"></div>
                            )}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{day} at {formatHour(hour)}</p>
                          <p className="font-medium">
                            {cell.value >= 8 ? 'High engagement' : 
                             cell.value >= 5 ? 'Medium engagement' : 
                             'Low engagement'}
                          </p>
                          {cell.isOptimal && (
                            <p className="text-xs font-semibold text-emerald-500">Optimal posting time</p>
                          )}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
