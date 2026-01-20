import { Sparkles, TrendingDown, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const insights = [
  {
    id: "1",
    type: "warning",
    title: "Food Cost Spike Detected",
    description: "Protein expenses increased 15% this week. Beef prices from your main supplier are up.",
    action: "Review alternatives",
  },
  {
    id: "2",
    type: "opportunity",
    title: "Labor Optimization",
    description: "Tuesday afternoons show low traffic but full staffing. Consider reducing 2 hours.",
    action: "Adjust schedule",
  },
  {
    id: "3",
    type: "tip",
    title: "Tax Deduction Reminder",
    description: "Q4 equipment purchases may qualify for Section 179 deduction. $3,200 saved last year.",
    action: "Learn more",
  },
];

export function AIInsights() {
  const getIcon = (type) => {
    switch (type) {
      case "warning":
        return AlertTriangle;
      case "opportunity":
        return TrendingDown;
      case "tip":
        return Lightbulb;
      default:
        return Lightbulb;
    }
  };

  const getStyles = (type) => {
    switch (type) {
      case "warning":
        return "border-red-500/30 bg-red-500/5";
      case "opportunity":
        return "border-green-500/30 bg-green-500/5";
      case "tip":
        return "border-amber-500/30 bg-amber-500/5";
      default:
        return "border-blue-500/30 bg-blue-500/5";
    }
  };

  const getIconStyles = (type) => {
    switch (type) {
      case "warning":
        return "bg-red-500/20 text-red-500";
      case "opportunity":
        return "bg-green-500/20 text-green-500";
      case "tip":
        return "bg-yellow-500/20 text-amber-500";
      default:
        return "bg-blue-500/20 text-blue-500";
    }
  };

  return (
    <div className="stat-card border p-4 rounded-xl border-slate-600 bg-card">
      <div className="mb-6 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-yellow-500" />
        <h3 className=" text-lg font-semibold dark:text-slate-300">
          AI Insights
        </h3>
      </div>

      <div className="space-y-3">
        {insights.map((insight) => {
          const Icon = getIcon(insight.type);
          return (
            <div
              key={insight.id}
              className={cn(
                "rounded-xl border p-4 transition-all hover:shadow-soft",
                getStyles(insight.type)
              )}
            >
              <div className="flex gap-3">
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                    getIconStyles(insight.type)
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium dark:text-slate-300">{insight.title}</h4>
                  <p className="mt-1 text-sm dark:text-gray-400">
                    {insight.description}
                  </p>
                  {insight.action && (
                    <button className="mt-2 text-sm font-medium text-yellow-500 hover:underline">
                      {insight.action} →
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}