import { DollarSign, TrendingUp, Utensils, Users } from "lucide-react";
import { StatCard } from "@/components/pages/StatCard";
import { RevenueChart } from "@/components/pages/RevenueChart";
import { CostBreakdown } from "@/components/pages/CostBreakdown";
import { RecentTransactions } from "@/components/pages/RecentTransactions";
import { AIInsights } from "@/components/pages/AIInsights";
const StatCardData = [
  {
    title : "Today's Revenue",
    change : 12.5,
    value : "$4,285",
    changeLabel: "Vs Yesterday",
    icon : DollarSign,
    color: 'text-amber-400',
    iconBg : "bg-amber-100",
    backround: "bg-slate-200"
  },
    {
    title :"Food Cost %",
    change : -2.1,
    value : "32%",
    changeLabel: "target: 30%",
    icon : Utensils,
    color: 'text-amber-400',
    iconBg : "bg-amber-200",
    backround: "bg-amber-100"
  },
    {
    title : "Labor Cost %",
    change : 1.5,
    value : "28%",
    changeLabel:"within target",
    icon : Users,
    color: 'text-green-400',
    iconBg : "bg-green-200",
    backround: "bg-green-100"
  },
    {
    title : "Net Profit",
    change : 8.3,
    value : "$12,450",
    changeLabel: "this month",
    icon : TrendingUp,
    color: 'text-green-400',
    iconBg : "bg-green-200",
    backround: "bg-green-100"
  }
]
export function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {
          StatCardData.map((item, index)=>{
            return <StatCard 
                    key ={index}
                    change = {item.change}
                    value = {item.value}
                    changeLabel = {item.changeLabel}
                    icon = <item.icon/>
                    color = {item.color}
                    iconBg = {item.iconBg}
                    backround = {item.backround}
                    title = {item.title}/>
          })
        }
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