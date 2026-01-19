import { DollarSign, TrendingUp, Utensils, Users } from "lucide-react";
import { StatCard } from "@/components/pages/StatCard";
import { RevenueChart } from "@/components/pages/RevenueChart";
import { CostBreakdown } from "@/components/pages/CostBreakdown";
import { RecentTransactions } from "@/components/pages/RecentTransactions";
import { AIInsights } from "@/components/pages/AIInsights";

export function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Today's Revenue"
          value="$4,285"
          change={12.5}
          changeLabel="vs yesterday"
          icon={<DollarSign className="h-5 w-5" />}
          className="animate-fade-in stagger-1"
        />
        <StatCard
          title="Food Cost %"
          value="32%"
          change={-2.1}
          changeLabel="target: 30%"
          icon={<Utensils className="h-5 w-5" />}
          variant="warning"
          className="animate-fade-in stagger-2"
        />
        <StatCard
          title="Labor Cost %"
          value="28%"
          change={1.5}
          changeLabel="within target"
          icon={<Users className="h-5 w-5" />}
          variant="success"
          className="animate-fade-in stagger-3"
        />
        <StatCard
          title="Net Profit"
          value="$12,450"
          change={8.3}
          changeLabel="this month"
          icon={<TrendingUp className="h-5 w-5" />}
          variant="success"
          className="animate-fade-in stagger-4"
        />
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <CostBreakdown />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentTransactions />
        <AIInsights />
      </div>
    </div>
  );
}