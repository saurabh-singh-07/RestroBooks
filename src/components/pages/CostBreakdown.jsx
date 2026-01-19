import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Food Cost", value: 32, color: "hsl(38, 92%, 50%)" },
  { name: "Labor", value: 28, color: "hsl(220, 70%, 55%)" },
  { name: "Rent", value: 15, color: "hsl(280, 60%, 55%)" },
  { name: "Utilities", value: 8, color: "hsl(142, 70%, 45%)" },
  { name: "Other", value: 17, color: "hsl(30, 15%, 60%)" },
];

export function CostBreakdown() {
  return (
    <div className="stat-card h-85 border bg-card">
      <div className="mb-4">
        <h3 className="font-display text-lg font-semibold text-foreground">
          Cost Breakdown
        </h3>
        <p className="text-sm text-muted-foreground">
          Monthly expense distribution
        </p>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            innerRadius={60}
            outerRadius={85}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={8}
            formatter={(value) => (
              <span className="text-xs text-muted-foreground">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}