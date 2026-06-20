import { useState } from "react";
import {
    CheckCheck,
    SlidersHorizontal,
    CheckCircle2,
    AlertTriangle,
    Landmark,
    Undo2,
    Lock,
    MoreVertical,
    Settings,
    Mail,
    Smartphone,
    MessageSquare,
    Zap,
} from "lucide-react";

const todayActivity = [
    {
        id: 1,
        type: "success",
        title: "Successful Payment Received",
        titleColor: "text-gray-900",
        description: (
            <>
                Payment of ₹4,500.00 from <span className="font-semibold">Rajesh Kumar</span> (pay_OT8923) has been credited to your balance.
            </>
        ),
        time: "2 mins ago",
        icon: CheckCircle2,
        iconBg: "bg-green-500",
        iconText: "text-white",
        border: "border-gray-200",
        actions: ["View Details", "Refund"],
    },
    {
        id: 2,
        type: "dispute",
        title: "New Dispute Raised",
        titleColor: "text-red-600",
        description:
            "A customer has raised a dispute for transaction pay_XN2281 (₹1,200.00). Immediate action required.",
        time: "1 hour ago",
        icon: AlertTriangle,
        iconBg: "bg-red-100",
        iconText: "text-red-600",
        border: "border-l-4 border-red-500 border-y border-r border-gray-200",
        buttons: [
            { label: "Resolve Now", primary: true },
            { label: "View Dispute History", primary: false },
        ],
        hasMenu: true,
    },
    {
        id: 3,
        type: "settlement",
        title: "Settlement Initiated",
        titleColor: "text-gray-900",
        description:
            "A settlement of ₹1,24,500.00 has been initiated to your HDFC bank account ending in **8892.",
        time: "4 hours ago",
        icon: Landmark,
        iconBg: "bg-blue-100",
        iconText: "text-blue-600",
        border: "border-l-4 border-blue-400 border-y border-r border-gray-200",
        tag: "SETL_ID: 990122341",
        hasMenu: true,
    },
];

const yesterdayActivity = [
    {
        id: 4,
        title: "Refund Processed",
        description: "A refund of ₹999.00 for pay_LM7761 has been successfully processed.",
        time: "Aug 23, 10:30 AM",
        icon: Undo2,
        iconBg: "bg-orange-100",
        iconText: "text-orange-600",
        unread: true,
    },
    {
        id: 5,
        title: "Login Detected",
        description: "A new login was detected from a Chrome browser on Windows (IP: 103.12.44.11).",
        time: "Aug 23, 08:15 AM",
        icon: Lock,
        iconBg: "bg-gray-100",
        iconText: "text-gray-600",
        unread: true,
    },
];

export default function Notification() {
    const [channels, setChannels] = useState({
        email: true,
        push: true,
        sms: false,
    });
    const [alerts, setAlerts] = useState({
        paymentSuccess: true,
        paymentFailures: true,
        disputesRefunds: true,
        dailyReports: true,
    });

    const toggleChannel = (key) =>
        setChannels((prev) => ({ ...prev, [key]: !prev[key] }));
    const toggleAlert = (key) =>
        setAlerts((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Left: Activity feed */}
                <div className="lg:col-span-2">
                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Activity Stream
                            </h1>
                            <p className="mt-1 text-gray-500">
                                Stay updated with your business transactions and account
                                security.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-gray-50">
                                <CheckCheck size={16} />
                                Mark all as read
                            </button>
                            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                <SlidersHorizontal size={16} />
                                Preferences
                            </button>
                        </div>
                    </div>

                    {/* Today */}
                    <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-wide text-gray-500">
                            TODAY
                        </span>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div className="mb-6 space-y-3">
                        {todayActivity.map((item) => (
                            <div
                                key={item.id}
                                className={`relative rounded-xl bg-white p-4 ${item.border}`}
                            >
                                <div className="flex items-start gap-3">
                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.iconBg} ${item.iconText}`}
                                    >
                                        <item.icon size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-3">
                                            <p className={`text-sm font-semibold ${item.titleColor}`}>
                                                {item.title}
                                            </p>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <span className="text-xs text-gray-400">
                                                    {item.time}
                                                </span>
                                                {item.hasMenu && (
                                                    <button className="text-gray-400 hover:text-gray-600">
                                                        <MoreVertical size={16} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {item.description}
                                        </p>

                                        {item.tag && (
                                            <span className="mt-2 inline-block rounded-md bg-blue-50 px-2 py-1 font-mono text-xs text-blue-700">
                                                {item.tag}
                                            </span>
                                        )}

                                        {item.actions && (
                                            <div className="mt-2 flex gap-4">
                                                {item.actions.map((a) => (
                                                    <button
                                                        key={a}
                                                        className="text-sm font-semibold text-blue-700 hover:underline"
                                                    >
                                                        {a}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {item.buttons && (
                                            <div className="mt-3 flex gap-3">
                                                {item.buttons.map((b) => (
                                                    <button
                                                        key={b.label}
                                                        className={
                                                            b.primary
                                                                ? "rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
                                                                : "rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                                        }
                                                    >
                                                        {b.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Yesterday */}
                    <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-wide text-gray-500">
                            YESTERDAY
                        </span>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div className="space-y-3">
                        {yesterdayActivity.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-xl border border-gray-200 bg-white p-4"
                            >
                                <div className="flex items-start gap-3">
                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.iconBg} ${item.iconText}`}
                                    >
                                        <item.icon size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-3">
                                            <p className="text-sm font-semibold text-gray-900">
                                                {item.title}
                                            </p>
                                            <span className="flex items-center gap-1.5 text-xs text-gray-400">
                                                {item.time}
                                                {item.unread && (
                                                    <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                                                )}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load more */}
                    <button className="mt-4 w-full rounded-xl border border-dashed border-gray-300 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100">
                        Load older notifications
                    </button>
                </div>

                {/* Right: Preferences */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-gray-900">
                            <Settings size={18} className="text-blue-700" />
                            Preferences
                        </h2>

                        <p className="mb-3 text-xs font-semibold tracking-wide text-gray-500">
                            CHANNEL SETTINGS
                        </p>
                        <div className="space-y-4">
                            <ToggleRow
                                icon={Mail}
                                label="Email Notifications"
                                checked={channels.email}
                                onChange={() => toggleChannel("email")}
                            />
                            <ToggleRow
                                icon={Smartphone}
                                label="Push Notifications"
                                checked={channels.push}
                                onChange={() => toggleChannel("push")}
                            />
                            <ToggleRow
                                icon={MessageSquare}
                                label="SMS Alerts"
                                checked={channels.sms}
                                onChange={() => toggleChannel("sms")}
                            />
                        </div>

                        <div className="my-5 border-t border-gray-100" />

                        <p className="mb-3 text-xs font-semibold tracking-wide text-gray-500">
                            ALERT TYPES
                        </p>
                        <div className="space-y-3">
                            <CheckRow
                                label="Payment Success"
                                checked={alerts.paymentSuccess}
                                onChange={() => toggleAlert("paymentSuccess")}
                            />
                            <CheckRow
                                label="Payment Failures"
                                checked={alerts.paymentFailures}
                                onChange={() => toggleAlert("paymentFailures")}
                            />
                            <CheckRow
                                label="Disputes & Refunds"
                                checked={alerts.disputesRefunds}
                                onChange={() => toggleAlert("disputesRefunds")}
                            />
                            <CheckRow
                                label="Daily Reports"
                                checked={alerts.dailyReports}
                                onChange={() => toggleAlert("dailyReports")}
                            />
                        </div>

                        <button className="mt-6 w-full rounded-lg bg-blue-800 py-3 text-sm font-semibold text-white hover:bg-blue-900">
                            Save Preferences
                        </button>
                    </div>

                    {/* Slack integration */}
                    <div className="rounded-xl bg-blue-700 p-6 text-white">
                        <h3 className="text-lg font-bold">Slack Integration</h3>
                        <p className="mt-1 text-sm text-blue-100">
                            Get real-time transaction updates directly in your team
                            channels.
                        </p>
                        <button className="mt-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                            <Zap size={16} />
                            Connect Slack
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ToggleRow({ icon: Icon, label, checked, onChange }) {
    return (
        <div className="flex items-center justify-between">
            <span className="flex items-center gap-2.5 text-sm text-gray-700">
                <Icon size={16} className="text-gray-400" />
                {label}
            </span>
            <button
                onClick={onChange}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${checked ? "bg-blue-600" : "bg-gray-200"
                    }`}
            >
                <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? "translate-x-5" : "translate-x-0"
                        }`}
                />
            </button>
        </div>
    );
}

function CheckRow({ label, checked, onChange }) {
    return (
        <label className="flex items-center gap-2.5 text-sm text-gray-700">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            {label}
        </label>
    );
}