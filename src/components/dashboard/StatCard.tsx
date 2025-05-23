
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  loading?: boolean;
}

export function StatCard({ title, value, icon, trend, className, loading = false }: StatCardProps) {
  if (loading) {
    return (
      <Card className={cn("stats-card", className)}>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            <Skeleton className="h-4 w-24" />
          </CardTitle>
          <Skeleton className="h-8 w-8 rounded-full" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <Skeleton className="h-8 w-16" />
          </div>
          <Skeleton className="h-4 w-20 mt-2" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("stats-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div>{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn("text-xs flex items-center mt-1", 
            trend.isPositive ? "text-emerald-600" : "text-rose-600"
          )}>
            <span>
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </span>
            <span className="text-muted-foreground ml-1">vs last period</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}
