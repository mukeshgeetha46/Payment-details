import { useState } from "react";
import {
    Moon,
    Mail,
    Languages,
    Save,
    Clock,
    ShieldAlert,
    Boxes,
    Copy,
    RefreshCw,
    Webhook,
    AlertTriangle,
    KeyRound,
    Check,
} from "lucide-react";

export default function Setting() {
    const [darkMode, setDarkMode] = useState(false);
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [copiedKey, setCopiedKey] = useState(null);

    const handleCopy = (key, value) => {
        navigator.clipboard?.writeText(value);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
                <p className="mt-1 text-gray-500">
                    Manage your business profile, security preferences, and API
                    integration settings.
                </p>
            </div>

            {/* Profile + Preferences */}
            <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Profile Information */}
                <div className="rounded-xl border border-gray-200 border-l-4 border-l-blue-600 bg-white p-6 lg:col-span-2">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">
                                Profile Information
                            </h2>
                            <p className="text-sm text-gray-500">
                                Update your personal and business contact details.
                            </p>
                        </div>
                        <button className="text-sm font-semibold text-blue-600 hover:underline">
                            Edit Profile
                        </button>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Field label="Full Name" value="Aditya Vardhan" />
                        <Field label="Email Address" value="aditya.v@acmecorp.com" />
                        <Field label="Contact Number" value="+91 98765 43210" accent />
                        <Field
                            label="Merchant ID"
                            value="MID_8273645192"
                            valueClass="font-mono text-blue-600"
                        />
                    </div>
                </div>

                {/* Preferences */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <h2 className="mb-5 text-lg font-bold text-gray-900">
                        Preferences
                    </h2>

                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                                <Moon size={16} className="text-blue-600" />
                                Dark Mode
                            </span>
                            <Toggle checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                                <Mail size={16} className="text-blue-600" />
                                Email Alerts
                            </span>
                            <Toggle
                                checked={emailAlerts}
                                onChange={() => setEmailAlerts(!emailAlerts)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                                <Languages size={16} className="text-blue-600" />
                                Language
                            </span>
                            <span className="text-sm text-gray-600">English (US)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Business Settings */}
            <div className="mb-6 rounded-xl border border-gray-200 bg-gray-100/60">
                <div className="flex items-center justify-between p-6 pb-5">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            Business Settings
                        </h2>
                        <p className="text-sm text-gray-500">
                            Configure how your business appears to customers and handles
                            payouts.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
                        <Save size={16} />
                        Save Changes
                    </button>
                </div>

                <div className="border-t border-gray-200 bg-white p-6 rounded-b-xl">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[200px_1fr_1fr]">
                        {/* Logo */}
                        <div>
                            <div className="flex h-40 w-full items-end justify-start overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 to-blue-500 p-3">
                                <button className="rounded-md bg-gray-200/90 px-3 py-1.5 text-xs font-semibold text-gray-800">
                                    Update Logo
                                </button>
                            </div>
                            <p className="mt-2 text-xs italic text-gray-500">
                                Recommended size: 512x512px
                            </p>
                        </div>

                        {/* Display name + Category */}
                        <div className="space-y-5">
                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                                    Business Display Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Acme Corp Solutions"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                                    Category
                                </label>
                                <select className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                                    <option>Software & SaaS</option>
                                    <option>E-commerce</option>
                                    <option>Education</option>
                                    <option>Healthcare</option>
                                </select>
                            </div>
                        </div>

                        {/* Website + Settlement */}
                        <div className="space-y-5">
                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                                    Website URL
                                </label>
                                <input
                                    type="text"
                                    defaultValue="https://acmecorp.com"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="mb-1.5 block text-sm font-semibold text-gray-800">
                                    Settlement Cycle
                                </label>
                                <div className="flex items-center gap-2 rounded-lg bg-green-100 px-3 py-2.5 text-sm font-semibold text-green-700">
                                    <Clock size={16} />
                                    T+2 Days (Standard)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security & Access + API Keys */}
            <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Security & Access */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-gray-900">
                        <ShieldAlert size={20} className="text-red-500" />
                        Security & Access
                    </h2>

                    <div className="rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-gray-900">
                                Two-Factor Authentication (2FA)
                            </p>
                            <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">
                                Enabled
                            </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            Add an extra layer of security to your account using TOTP apps.
                        </p>
                    </div>

                    <div className="my-2 border-t border-gray-100" />

                    <div className="rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-gray-900">
                                Last Login
                            </p>
                            <button className="text-sm font-semibold text-blue-600 hover:underline">
                                View Logs
                            </button>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            Yesterday at 4:20 PM from Bangalore, India (Chrome/macOS)
                        </p>
                    </div>

                    <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-blue-700 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                        <KeyRound size={16} />
                        Change Password
                    </button>
                </div>

                {/* API Keys */}
                <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-gray-900">
                        <Boxes size={20} className="text-indigo-500" />
                        API Keys
                    </h2>

                    <ApiKeyRow
                        label="LIVE SECRET KEY"
                        value="rzp_live_k1j2h3g4f5e6d7c8b9a0"
                        tag="CONFIDENTIAL"
                        tagColor="bg-red-700 text-white"
                        copied={copiedKey === "live"}
                        onCopy={() => handleCopy("live", "rzp_live_k1j2h3g4f5e6d7c8b9a0")}
                    />

                    <div className="h-3" />

                    <ApiKeyRow
                        label="TEST KEY ID"
                        value="rzp_test_9z8y7x6w5v4u3t2s1"
                        tag="SANDBOX"
                        tagColor="bg-green-700 text-white"
                        copied={copiedKey === "test"}
                        onCopy={() => handleCopy("test", "rzp_test_9z8y7x6w5v4u3t2s1")}
                    />

                    <div className="mt-4 flex gap-3">
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-200 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-300">
                            <RefreshCw size={16} />
                            Regenerate Test
                        </button>
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-orange-500 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">
                            <Webhook size={16} />
                            Configure Webhooks
                        </button>
                    </div>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="flex items-center gap-2 text-lg font-bold text-red-700">
                            <AlertTriangle size={20} />
                            Danger Zone
                        </h2>
                        <p className="mt-1 text-sm text-red-600">
                            Actions here are irreversible. Please proceed with caution.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50">
                            Deactivate Account
                        </button>
                        <button className="rounded-lg bg-red-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-800">
                            Delete Business Instance
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Field({ label, value, valueClass = "", accent = false }) {
    return (
        <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                {label}
            </label>
            <div
                className={`rounded-lg bg-gray-100 px-3 py-2.5 text-sm font-semibold text-gray-900 ${accent ? "border-l-4 border-blue-600" : ""
                    } ${valueClass}`}
            >
                {value}
            </div>
        </div>
    );
}

function Toggle({ checked, onChange }) {
    return (
        <button
            onClick={onChange}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${checked ? "bg-green-600" : "bg-gray-200"
                }`}
        >
            <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? "translate-x-5" : "translate-x-0"
                    }`}
            />
        </button>
    );
}

function ApiKeyRow({ label, value, tag, tagColor, copied, onCopy }) {
    return (
        <div className="rounded-lg bg-gray-100 p-4">
            <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-wide text-gray-500">
                    {label}
                </p>
                <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide ${tagColor}`}
                >
                    {tag}
                </span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2">
                <span className="truncate font-mono text-sm text-gray-700">
                    {value}
                </span>
                <button
                    onClick={onCopy}
                    className="shrink-0 text-gray-400 hover:text-gray-700"
                >
                    {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                </button>
            </div>
        </div>
    );
}