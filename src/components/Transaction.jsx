import { useState, useRef, useEffect } from "react";
import {
    CreditCard,
    CheckCircle2,
    Undo2,
    AlertCircle,
    Calendar,
    ListFilter,
    ChevronDown,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Eye,
    X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const stats = [
    {
        label: "Total Volume",
        value: "₹4,28,490",
        note: "+12.5% vs last month",
        noteColor: "text-green-600",
        icon: CreditCard,
        iconColor: "text-blue-600",
    },
    {
        label: "Success Rate",
        value: "98.2%",
        note: "0.4% improvement",
        noteColor: "text-green-600",
        icon: CheckCircle2,
        iconColor: "text-green-600",
    },
    {
        label: "Refunds",
        value: "₹12,400",
        note: "+2.1% spike",
        noteColor: "text-red-500",
        icon: Undo2,
        iconColor: "text-orange-500",
    },
    {
        label: "Active Disputes",
        value: "03",
        note: "Resolving in 2 days",
        noteColor: "text-gray-500",
        icon: AlertCircle,
        iconColor: "text-red-500",
    },
];

const statusStyles = {
    Success: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
    Failed: "bg-red-100 text-red-600",
};

const transactions = [
    {
        date: "Oct 24, 2023, 11:20 AM",
        id: "pay_N9m2Ksl92jsa",
        name: "Arjun Sharma",
        email: "arjun.s@gmail.com",
        amount: "₹12,499.00",
        status: "Success",
    },
    {
        date: "Oct 24, 2023, 10:45 AM",
        id: "pay_Lx82Plm10kws",
        name: "Priya Malhotra",
        email: "priya.m@outlook.com",
        amount: "₹3,200.00",
        status: "Pending",
    },
    {
        date: "Oct 24, 2023, 09:12 AM",
        id: "pay_Qz01Okl45mnb",
        name: "Karan Singh",
        email: "ksingh@startup.io",
        amount: "₹45,000.00",
        status: "Failed",
    },
    {
        date: "Oct 23, 2023, 11:58 PM",
        id: "pay_Wm83Rtx11pop",
        name: "Sneha Reddy",
        email: "s.reddy@corp.in",
        amount: "₹890.00",
        status: "Success",
    },
    {
        date: "Oct 23, 2023, 10:20 PM",
        id: "pay_Bt55Uop90xyz",
        name: "Rahul Verma",
        email: "rahulv@gmail.com",
        amount: "₹2,150.00",
        status: "Success",
    },
];

export default function Transactions() {
    const [page, setPage] = useState(1);
    const [openMenuId, setOpenMenuId] = useState(null);
    const [selectedTxn, setSelectedTxn] = useState(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenuId(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Stat cards */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map(({ label, value, note, noteColor, icon: Icon, iconColor }) => (
                    <div
                        key={label}
                        className="rounded-xl border border-gray-200 bg-white p-5"
                    >
                        <div className="mb-3 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-600">{label}</p>
                            <Icon size={18} className={iconColor} strokeWidth={2} />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{value}</p>
                        <p className={`mt-1 text-xs font-medium ${noteColor}`}>{note}</p>
                    </div>
                ))}
            </div>

            {/* Table card */}
            <div className="rounded-xl border border-gray-200 bg-white">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4">
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <Calendar size={16} />
                            Past 30 Days
                            <ChevronDown size={14} />
                        </button>
                        <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <ListFilter size={16} />
                            Status: All
                            <ChevronDown size={14} />
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                            Export CSV
                        </button>
                        <button className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
                            Search Records
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-y border-gray-200 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Transaction ID</th>
                                <th className="px-6 py-3">Customer</th>
                                <th className="px-6 py-3 text-right">Amount</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {transactions.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                                        {t.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-mono text-sm text-blue-600">
                                            {t.id}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-semibold text-gray-900">
                                            {t.name}
                                        </p>
                                        <p className="text-xs text-gray-500">{t.email}</p>
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900 whitespace-nowrap">
                                        {t.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[t.status]}`}
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                            {t.status}
                                        </span>
                                    </td>
                                    <td className="relative px-6 py-4 text-right">
                                        <button
                                            onClick={() =>
                                                setOpenMenuId(openMenuId === t.id ? null : t.id)
                                            }
                                            className="text-gray-400 hover:text-gray-600"
                                        >
                                            <MoreVertical size={18} />
                                        </button>
                                        {openMenuId === t.id && (
                                            <div
                                                ref={menuRef}
                                                className="absolute right-6 top-12 z-10 w-40 rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
                                            >
                                                <button
                                                    onClick={() => {
                                                        navigate(`/transaction/${t.id}`);
                                                        setOpenMenuId(null);
                                                    }}
                                                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                                >
                                                    <Eye size={15} />
                                                    View Details
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 p-4">
                    <p className="text-sm text-gray-500">
                        Showing 1 to 5 of 2,451 transactions
                    </p>
                    <div className="flex items-center gap-2">
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                            <ChevronLeft size={16} />
                        </button>
                        {[1, 2, 3].map((n) => (
                            <button
                                key={n}
                                onClick={() => setPage(n)}
                                className={`flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-medium ${page === n
                                    ? "border-blue-700 bg-blue-700 text-white"
                                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                {n}
                            </button>
                        ))}
                        <span className="px-1 text-sm text-gray-400">...</span>
                        <button
                            onClick={() => setPage(490)}
                            className={`flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-medium ${page === 490
                                ? "border-blue-700 bg-blue-700 text-white"
                                : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                }`}
                        >
                            490
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* View Details modal */}
            {selectedTxn && (
                <div
                    className="fixed inset-0 z-20 flex items-center justify-center bg-black/40 p-4"
                    onClick={() => setSelectedTxn(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">
                                Transaction Details
                            </h3>
                            <button
                                onClick={() => setSelectedTxn(null)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Transaction ID</span>
                                <span className="font-mono text-blue-600">
                                    {selectedTxn.id}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Date</span>
                                <span className="font-medium text-gray-900">
                                    {selectedTxn.date}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Customer</span>
                                <span className="font-medium text-gray-900">
                                    {selectedTxn.name}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Email</span>
                                <span className="font-medium text-gray-900">
                                    {selectedTxn.email}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Amount</span>
                                <span className="font-semibold text-gray-900">
                                    {selectedTxn.amount}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Status</span>
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[selectedTxn.status]}`}
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                    {selectedTxn.status}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => setSelectedTxn(null)}
                            className="mt-6 w-full rounded-lg bg-blue-700 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}