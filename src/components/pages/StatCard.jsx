import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

export function StatCard({
  title,
  value,
  change,
  changeLabel,
  icon,
  iconBg,
  color,
  backround,
 
}) {
  const isPositive = change >= 0;
  
  return (
    <div
      className={
        `p-4 rounded-xl ${backround} border bg-linear-to-br`
        
      }
    >
      <div className="flex items-start justify-between">
        <div className={` ${iconBg} ${color} rounded-xl p-3`}>
          {icon}
        </div>
        <div
          className={
            "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium"
         }
        >
          {isPositive ? (
            <TrendingUp className="h-3 w-3 text-green-500" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-500" />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="mt-1 font-display text-2xl font-bold text-foreground">
          {value}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{changeLabel}</p>
      </div>
    </div>
  );
}