import { useState } from "react";
import {
    ChevronRight,
    Download,
    Undo2,
    Copy,
    Mail,
    Phone,
    MapPin,
    Pencil,
    Wifi,
    CheckCircle2,
    ShieldCheck,
    ShoppingCart,
} from "lucide-react";

const tabs = ["Payment Details", "Refunds (0)", "Settlements", "Risk & Fraud"];

const timeline = [
    {
        title: "Payment Captured",
        time: "Oct 24, 2:16 PM",
        tag: "Auto-captured",
        icon: CheckCircle2,
        iconBg: "bg-green-600",
        active: true,
    },
    {
        title: "Payment Authorized",
        time: "Oct 24, 2:15 PM",
        icon: ShieldCheck,
        iconBg: "bg-blue-600",
        active: true,
    },
    {
        title: "Order Created",
        time: "Oct 24, 2:14 PM",
        icon: ShoppingCart,
        iconBg: "bg-gray-300",
        active: false,
    },
];

export default function ViewTransaction() {
    const [activeTab, setActiveTab] = useState("Payment Details");

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <span>Transactions</span>
                        <ChevronRight size={14} />
                        <span className="font-semibold text-gray-900">
                            pay_K7jH90sL2m
                        </span>
                    </div>
                    <h1 className="mt-1 text-3xl font-bold text-gray-900">
                        Transaction Details
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        <Download size={16} />
                        Download Receipt
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800">
                        <Undo2 size={16} />
                        Issue Refund
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Left column */}
                <div className="lg:col-span-2">
                    {/* Summary card */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 font-mono text-xs text-gray-600">
                                        pay_K7jH90sL2m
                                    </span>
                                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                                        Captured
                                    </span>
                                </div>
                                <div className="mt-3 flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-blue-700">
                                        ₹12,450.00
                                    </span>
                                    <span className="text-sm font-medium text-gray-400">
                                        INR
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                    Created At
                                </p>
                                <p className="mt-1 text-sm font-medium text-gray-700">
                                    Oct 24, 2023, 02:15 PM
                                </p>
                            </div>
                        </div>

                        <div className="my-5 border-t border-gray-100" />

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                    Payment Method
                                </p>
                                <div className="mt-2 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                                        <Wifi size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            HDFC Bank Visa Card
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Visa •••• 4242 (Domestic)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                    Order ID
                                </p>
                                <div className="mt-2 flex items-center gap-1.5">
                                    <a href="#" className="text-sm font-medium text-blue-600">
                                        order_M9qW11pX4t
                                    </a>
                                    <Copy size={14} className="cursor-pointer text-gray-400" />
                                </div>
                                <p className="mt-2 text-sm text-gray-600">
                                    Merchant Reference: #INV-2023-0012
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tabs card */}
                    <div className="mt-6 rounded-xl border border-gray-200 bg-white">
                        <div className="flex gap-6 border-b border-gray-200 px-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`-mb-px border-b-2 py-4 text-sm font-semibold ${activeTab === tab
                                        ? "border-blue-700 text-blue-700"
                                        : "border-transparent text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="p-6">
                            {activeTab === "Payment Details" && (
                                <>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-3">
                                            <span className="text-sm text-gray-500">MDR/Fee</span>
                                            <span className="text-sm font-semibold text-gray-900">
                                                ₹249.00
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-3">
                                            <span className="text-sm text-gray-500">
                                                Tax (GST 18%)
                                            </span>
                                            <span className="text-sm font-semibold text-gray-900">
                                                ₹44.82
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-3">
                                            <span className="text-sm text-gray-500">
                                                Bank Transaction ID
                                            </span>
                                            <span className="text-sm font-semibold text-gray-900">
                                                83249012354890
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-3">
                                            <span className="text-sm text-gray-500">
                                                Merchant Payout
                                            </span>
                                            <span className="text-sm font-semibold text-green-700">
                                                ₹12,156.18
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-5 rounded-lg bg-gray-50 p-4">
                                        <p className="mb-1 text-sm font-semibold text-gray-700">
                                            Merchant Notes
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Standard shipping for electronics. Customer requested
                                            gift wrapping. Package weight estimated 1.2kg.
                                        </p>
                                    </div>
                                </>
                            )}

                            {activeTab === "Refunds (0)" && (
                                <p className="py-6 text-center text-sm text-gray-500">
                                    No refunds have been issued for this transaction.
                                </p>
                            )}

                            {activeTab === "Settlements" && (
                                <p className="py-6 text-center text-sm text-gray-500">
                                    Settlement information will appear here once processed.
                                </p>
                            )}

                            {activeTab === "Risk & Fraud" && (
                                <p className="py-6 text-center text-sm text-gray-500">
                                    No risk or fraud signals detected for this transaction.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                    {/* Customer info */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-bold text-gray-900">
                                Customer Info
                            </h2>
                            <button className="text-gray-400 hover:text-blue-600">
                                <Pencil size={16} />
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    Johnathan Doe
                                </p>
                                <p className="text-xs text-gray-500">Premium Tier Customer</p>
                            </div>
                        </div>

                        <div className="mt-5 space-y-3 text-sm text-gray-700">
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-gray-400" />
                                <span>john.doe@enterprise.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-gray-400" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5 text-gray-400" />
                                <span>42nd Street, Tech Park Phase II, Bengaluru, KA 560103</span>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="mb-5 text-lg font-bold text-gray-900">Timeline</h2>

                        <div className="relative">
                            {timeline.map(({ title, time, tag, icon: Icon, iconBg, active }, i) => (
                                <div key={title} className="relative flex gap-3 pb-6 last:pb-0">
                                    {i !== timeline.length - 1 && (
                                        <span className="absolute left-[15px] top-8 h-full w-px bg-gray-200" />
                                    )}
                                    <div
                                        className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${iconBg} ${active ? "text-white" : "text-gray-500"
                                            }`}
                                    >
                                        <Icon size={15} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {title}
                                        </p>
                                        <p className="text-xs text-gray-500">{time}</p>
                                        {tag && (
                                            <span className="mt-1.5 inline-block rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                                                {tag}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-2 text-sm font-medium text-blue-700 hover:underline">
                            View Full Logs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}