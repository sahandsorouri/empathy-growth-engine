
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
      <Card className={cn("ai-card", className)}>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-sm font-medium text-slate-600">
            <Skeleton className="h-4 w-24" />
          </CardTitle>
          <Skeleton className="h-8 w-8 rounded-xl" />
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-3xl font-bold">
            <Skeleton className="h-8 w-16" />
          </div>
          <Skeleton className="h-4 w-20 mt-2" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("ai-card group hover:shadow-xl transition-all duration-300", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-sm font-medium text-slate-600">{title}</CardTitle>
        {icon && (
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 text-indigo-600 group-hover:scale-110 transition-transform duration-200">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-3xl font-bold text-slate-900 mb-2">{value}</div>
        {trend && (
          <div className={cn("flex items-center gap-1 text-sm font-medium", 
            trend.isPositive ? "text-emerald-600" : "text-rose-500"
          )}>
            <span className="text-lg">
              {trend.isPositive ? "↗" : "↘"}
            </span>
            <span>
              {Math.abs(trend.value)}%
            </span>
            <span className="text-slate-500 ml-1 font-normal">vs last period</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
