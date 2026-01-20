import { cn } from "@/lib/utils";
import {
  Package,
  Users,
  Zap,
  Truck,
  Wrench,
  Sparkles,
} from "lucide-react";

const transactions = [
  {
    id: "1",
    vendor: "Sysco Foods",
    category: "Food & Beverage",
    amount: -2450.0,
    date: "Today, 10:30 AM",
    aiCategory: "Food Cost",
    icon: Package,
  },
  {
    id: "2",
    vendor: "Staff Payroll",
    category: "Labor",
    amount: -8500.0,
    date: "Today, 9:00 AM",
    icon: Users,
  },
  {
    id: "3",
    vendor: "City Power Co.",
    category: "Utilities",
    amount: -485.0,
    date: "Yesterday",
    aiCategory: "Utilities",
    icon: Zap,
  },
  {
    id: "4",
    vendor: "Fresh Farms Delivery",
    category: "Food & Beverage",
    amount: -890.0,
    date: "Yesterday",
    aiCategory: "Food Cost",
    icon: Truck,
  },
  {
    id: "5",
    vendor: "Kitchen Equipment Repair",
    category: "Maintenance",
    amount: -320.0,
    date: "2 days ago",
    icon: Wrench,
  },
];

export function RecentTransactions() {
  return (
    <div className="border border-slate-700 bg-gray-200  dark:bg-slate-900/80 p-4 rounded-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className=" text-lg font-semibold dark:text-slate-300 text-slate-700">
            Recent Transactions
          </h3>
          <p className="text-sm dark:text-slate-400">
            Auto-categorized by AI
          </p>
        </div>
        <button className="text-sm font-medium text-blue-500 hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex dark:text-gray-400 items-center justify-between rounded-lg p-3 transition-colors dark:hover:bg-slate-800 hover:bg-[#958f60a1]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8e8a706e]">
                <transaction.icon className="h-5 w-5 text-[#2019076e] dark:text-[#eeeee86e]" />
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-300">{transaction.vendor}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm ">
                    {transaction.category}
                  </span>
                  {transaction.aiCategory && (
                    <span className="flex items-center gap-1 rounded-full dark:bg-[#eeeee86e] bg-[#95957c6e] px-2 py-0.5 text-xs font-medium text-[#22220a6e] dark:text-[#3d3102c6]">
                      <Sparkles className="h-3 w-3" />
                      AI
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p
                className={cn(
                  "font-semibold",
                  transaction.amount < 0 ? "text-red-500" : "text-green-500"
                )}
              >
                {transaction.amount < 0 ? "-" : "+"}$
                {Math.abs(transaction.amount).toLocaleString()}
              </p>
              <p className="text-xs dark:text-slate-400">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}