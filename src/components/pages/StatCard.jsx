import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

export function StatCard({
  title,
  value,
  change,
  changeLabel,
  icon,
  variant = "default",
  className,
}) {
  const isPositive = change >= 0;
  
  const variantStyles = {
    default: "from-card to-secondary/30",
    success: "from-success/10 to-success/5 border-success/20",
    warning: "from-warning/10 to-warning/5 border-warning/20",
    danger: "from-destructive/10 to-destructive/5 border-destructive/20",
  };

  const iconStyles = {
    default: "bg-primary/10 text-primary",
    success: "bg-success/20 text-success",
    warning: "bg-warning/20 text-warning",
    danger: "bg-destructive/20 text-destructive",
  };

  return (
    <div
      className={cn(
        "p-4 rounded-xl dark:border-slate-700 dark:text-slate-300 border bg-linear-to-br",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className={cn("rounded-xl p-3", iconStyles[variant])}>
          {icon}
        </div>
        <div
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
            isPositive
              ? "bg-success/10 text-success"
              : "bg-destructive/10 text-destructive"
          )}
        >
          {isPositive ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
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