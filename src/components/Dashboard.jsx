import {
    Calendar,
    Download,
    TrendingUp,
    TrendingDown,
    CheckCircle2,
    Clock,
    Undo2,
    CreditCard,
    AlertCircle,
    Landmark,
    UserRound,
} from "lucide-react";

const stats = [
    {
        label: "TOTAL REVENUE",
        value: "₹4,28,450",
        change: "+12.5%",
        trend: "up",
        badgeBg: "bg-green-100",
        badgeText: "text-green-700",
        icon: CreditCard,
        iconBg: "bg-blue-100",
        iconText: "text-blue-600",
    },
    {
        label: "SUCCESS RATE",
        value: "98.4%",
        change: "+2.1%",
        trend: "up",
        badgeBg: "bg-green-100",
        badgeText: "text-green-700",
        icon: CheckCircle2,
        iconBg: "bg-green-500",
        iconText: "text-white",
    },
    {
        label: "PENDING PAYMENTS",
        value: "14",
        change: "0%",
        trend: "flat",
        badgeBg: "bg-gray-100",
        badgeText: "text-gray-600",
        icon: Clock,
        iconBg: "bg-orange-100",
        iconText: "text-orange-600",
    },
    {
        label: "REFUNDS",
        value: "₹12,400",
        change: "-4.2%",
        trend: "down",
        badgeBg: "bg-red-100",
        badgeText: "text-red-600",
        icon: Undo2,
        iconBg: "bg-red-100",
        iconText: "text-red-600",
    },
];

const chartData = [
    { date: "1 Jun", success: 35 },
    { date: "2 Jun", success: 60 },
    { date: "3 Jun", success: 42 },
    { date: "4 Jun", success: 75 },
    { date: "5 Jun", success: 88 },
    { date: "6 Jun", success: 55 },
    { date: "7 Jun", success: 38 },
    { date: "8 Jun", success: 72 },
    { date: "9 Jun", success: 65 },
    { date: "10 Jun", success: 58 },
    { date: "11 Jun", success: 50 },
    { date: "12 Jun", success: 40 },
];

const activity = [
    {
        title: "Payment from #7281",
        detail: "₹2,499.00 • Credit Card",
        time: "2m ago",
        icon: CreditCard,
        iconBg: "bg-green-500",
        iconText: "text-white",
    },
    {
        title: "Failed Payment",
        detail: "₹850.00 • UPI • Insufficient Funds",
        time: "15m ago",
        icon: AlertCircle,
        iconBg: "bg-red-100",
        iconText: "text-red-600",
    },
    {
        title: "Settlement Initiated",
        detail: "Batch #ST-402 • ₹1,20,400",
        time: "1h ago",
        icon: Landmark,
        iconBg: "bg-blue-100",
        iconText: "text-blue-600",
    },
    {
        title: "New Subscription",
        detail: "SaaS Pro Plan • john@example.com",
        time: "3h ago",
        icon: UserRound,
        iconBg: "bg-orange-100",
        iconText: "text-orange-600",
    },
];

export default function DashboardOverview() {
    const maxValue = Math.max(...chartData.map((d) => d.success));

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Dashboard Overview
                    </h1>
                    <p className="mt-1 text-gray-500">
                        Track your business performance in real-time
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <Calendar size={16} />
                        Last 30 Days
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>

            {/* Stat cards */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map(
                    ({
                        label,
                        value,
                        change,
                        trend,
                        badgeBg,
                        badgeText,
                        icon: Icon,
                        iconBg,
                        iconText,
                    }) => (
                        <div
                            key={label}
                            className="rounded-xl border border-gray-200 bg-white p-5"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg} ${iconText}`}
                                >
                                    <Icon size={20} strokeWidth={2} />
                                </div>
                                <span
                                    className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${badgeBg} ${badgeText}`}
                                >
                                    {trend === "up" && <TrendingUp size={12} />}
                                    {trend === "down" && <TrendingDown size={12} />}
                                    {trend === "flat" && <span className="-mr-0.5">−</span>}
                                    {change}
                                </span>
                            </div>
                            <p className="text-xs font-semibold tracking-wide text-gray-500">
                                {label}
                            </p>
                            <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
                        </div>
                    )
                )}
            </div>

            {/* Chart + Activity */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Transaction Volume */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">
                                Transaction Volume
                            </h2>
                            <p className="text-sm text-gray-500">
                                Visualizing daily payment activity
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                                Success
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                                Failed
                            </span>
                        </div>
                    </div>

                    <div className="flex h-64 items-end gap-3 border-b border-dashed border-gray-200">
                        {chartData.map((d) => (
                            <div
                                key={d.date}
                                className="flex flex-1 flex-col items-center gap-2"
                            >
                                <div
                                    className="w-full rounded-t-md bg-blue-100 transition-all hover:bg-blue-200"
                                    style={{ height: `${(d.success / maxValue) * 100}%` }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 flex gap-3 text-xs text-gray-500">
                        {chartData.map((d) => (
                            <div key={d.date} className="flex-1 text-center">
                                {d.date}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
                    <p className="mb-4 text-sm text-gray-500">
                        Latest transaction updates
                    </p>

                    <div className="flex flex-col divide-y divide-gray-100">
                        {activity.map(
                            ({ title, detail, time, icon: Icon, iconBg, iconText }) => (
                                <div key={title} className="flex items-start gap-3 py-3">
                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconBg} ${iconText}`}
                                    >
                                        <Icon size={16} strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900">
                                            {title}
                                        </p>
                                        <p className="text-xs text-gray-500">{detail}</p>
                                    </div>
                                    <span className="shrink-0 text-xs text-gray-400">
                                        {time}
                                    </span>
                                </div>
                            )
                        )}
                    </div>

                    <button className="mt-3 w-full pt-3 text-center text-sm font-medium text-blue-700 hover:underline">
                        View All Activity
                    </button>
                </div>
            </div>
        </div>
    );
}