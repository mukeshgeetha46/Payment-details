import {
    Building2,
    MapPin,
    Mail,
    Info,
    UserCircle,
    Landmark,
    ArrowRight,
    Lock,
    KeyRound,
    Smartphone,
} from "lucide-react";

const quickLinks = [
    {
        title: "Account Settings",
        description:
            "Manage your personal profile, email notifications, and communication preferences.",
        icon: UserCircle,
        iconBg: "bg-gray-100",
        iconText: "text-gray-700",
        action: "Configure",
    },
    {
        title: "Business Details",
        description:
            "View your GSTIN, registered address, business category, and website integration links.",
        icon: Building2,
        iconBg: "bg-orange-100",
        iconText: "text-orange-600",
        action: "Update",
    },
    {
        title: "Bank Account",
        description:
            "Manage settlement accounts and view payout history for your merchant transactions.",
        icon: Landmark,
        iconBg: "bg-green-500",
        iconText: "text-white",
        action: "View Accounts",
    },
];

const securityItems = [
    {
        title: "Two-Factor Authentication",
        description: "Secure your account with SMS or Authenticator App.",
        icon: Lock,
        status: "Enabled",
        statusColor: "text-green-600",
        actionLabel: "Manage",
    },
    {
        title: "API Keys",
        description: "Manage keys for development and production environments.",
        icon: KeyRound,
        status: "3 Active Keys",
        statusColor: "text-gray-500",
        actionLabel: "Rotate Keys",
    },
    {
        title: "Session Management",
        description: "View and manage all devices currently logged into your dashboard.",
        icon: Smartphone,
        status: "Revoke All",
        statusColor: "text-red-600",
        statusIsAction: true,
        actionLabel: "View All",
    },
];

export default function Profile() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Top row: profile card + merchant status */}
            <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Profile card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 lg:col-span-2">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-5">
                            <img
                                src="https://i.pravatar.cc/100?img=14"
                                alt="Alex Rivers"
                                className="h-20 w-20 rounded-xl border-2 border-blue-200 object-cover"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Alex Rivers
                                </h1>
                                <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-600">
                                    <Building2 size={14} />
                                    Rivers Digital Solutions LLC
                                    <span className="mx-1 text-gray-300">•</span>
                                    <MapPin size={14} />
                                    San Francisco, CA
                                </div>
                                <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-600">
                                    <Mail size={14} />
                                    alex.rivers@riversdigital.io
                                </div>
                            </div>
                        </div>
                        <button className="shrink-0 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Merchant status */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-500">
                            Merchant Status
                        </p>
                        <Info size={16} className="text-gray-400" />
                    </div>
                    <p className="flex items-center gap-2 text-lg font-bold text-green-600">
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                        Active
                    </p>

                    <div className="my-4 border-t border-gray-100" />

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">KYC Verification</span>
                        <span className="font-semibold text-gray-900">100%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                        <div className="h-1.5 w-full rounded-full bg-green-600" />
                    </div>
                </div>
            </div>

            {/* Quick links */}
            <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {quickLinks.map(
                    ({ title, description, icon: Icon, iconBg, iconText, action }) => (
                        <div
                            key={title}
                            className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white"
                        >
                            <div className="p-6">
                                <div
                                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${iconBg} ${iconText}`}
                                >
                                    <Icon size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                                <p className="mt-1 text-sm text-gray-500">{description}</p>
                            </div>
                            <button className="flex items-center justify-end gap-1.5 border-t border-gray-100 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                {action}
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    )
                )}
            </div>

            {/* Security settings */}
            <div className="rounded-xl border border-gray-200 bg-white">
                <div className="flex items-center justify-between bg-gray-50 px-6 py-4 rounded-t-xl">
                    <h2 className="text-lg font-bold text-gray-900">
                        Security Settings
                    </h2>
                    <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-600">
                        CRITICAL
                    </span>
                </div>

                <div className="divide-y divide-gray-100">
                    {securityItems.map(
                        ({
                            title,
                            description,
                            icon: Icon,
                            status,
                            statusColor,
                            statusIsAction,
                            actionLabel,
                        }) => (
                            <div
                                key={title}
                                className="flex items-center justify-between gap-4 px-6 py-5"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {title}
                                        </p>
                                        <p className="text-sm text-gray-500">{description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    {statusIsAction ? (
                                        <button className={`text-sm font-semibold ${statusColor} hover:underline`}>
                                            {status}
                                        </button>
                                    ) : (
                                        <span className={`text-sm font-semibold ${statusColor}`}>
                                            {status}
                                        </span>
                                    )}
                                    <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                                        {actionLabel}
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}