import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", revenue: 4200, expenses: 2100 },
  { name: "Tue", revenue: 3800, expenses: 1900 },
  { name: "Wed", revenue: 5100, expenses: 2400 },
  { name: "Thu", revenue: 4700, expenses: 2200 },
  { name: "Fri", revenue: 6200, expenses: 2800 },
  { name: "Sat", revenue: 7500, expenses: 3200 },
  { name: "Sun", revenue: 5800, expenses: 2600 },
];

export function RevenueChart() {
  return (
    <div className="h-85 border border-slate-400 dark:border-slate-800 p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className=" text-lg font-semibold text-slate-600 dark:text-slate-300">
            Weekly Overview
          </h3>
          <p className="text-sm  dark:text-slate-400">
            Revenue vs Expenses
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="text-sm dark:text-slate-400">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-chart-expenses" />
            <span className="text-sm dark:text-slate-400">Expenses</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(0, 72%, 60%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(0, 72%, 60%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 20%, 88%)" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "hsl(30, 10%, 45%)" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "hsl(30, 10%, 45%)" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          `<Tooltip
            contentStyle={{
              backgroundColor: "hsl(0, 0%, 100%)",
              border: "1px solid hsl(30, 20%, 88%)",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 20px -4px hsl(30 20% 20% / 0.08)",
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, ""]}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="hsl(38, 92%, 50%)"
            strokeWidth={2}
            fill="url(#revenueGradient)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="hsl(0, 72%, 60%)"
            strokeWidth={2}
            fill="url(#expensesGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}