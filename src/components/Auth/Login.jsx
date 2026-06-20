import { useState } from "react";
import {
    CreditCard,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    ShieldCheck,
    ShieldQuestion,
    LockKeyhole,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-50">
            {/* Soft background accent */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50" />

            <div className="relative flex min-h-screen flex-col items-center px-4 pt-16">
                {/* Logo */}
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-700">
                    <CreditCard size={26} className="text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Razorpay</h1>
                <p className="mt-1 text-sm text-gray-500">Business Dashboard Login</p>

                {/* Card */}
                <div className="mt-8 w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                    <form className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                                Email Address
                            </label>
                            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                                <Mail size={18} className="text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-1.5 flex items-center justify-between">
                                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600">
                                    Password
                                </label>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-blue-600 hover:underline"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                                <Lock size={18} className="text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    defaultValue="password"
                                    className="w-full bg-transparent text-sm text-gray-900 outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember device */}
                        <label className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            Remember this device
                        </label>

                        {/* Sign in */}
                        <button
                            onClick={() => navigate('/')}
                            type="submit"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-sm font-semibold text-white hover:bg-blue-800"
                        >
                            Sign In
                            <ArrowRight size={16} />
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-gray-200" />
                            <span className="text-xs font-medium text-gray-400">OR</span>
                            <div className="h-px flex-1 bg-gray-200" />
                        </div>

                        {/* SSO */}
                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            <ShieldQuestion size={18} className="text-gray-400" />
                            Continue with SSO
                        </button>
                    </form>
                </div>

                {/* Footer links */}
                <p className="mt-6 text-sm text-gray-700">
                    Don&apos;t have a merchant account?{" "}
                    <a href="#" className="font-semibold text-blue-600 hover:underline">
                        Sign Up
                    </a>
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-gray-500">
                    <a href="#" className="hover:text-gray-700">
                        Privacy Policy
                    </a>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <a href="#" className="hover:text-gray-700">
                        Terms of Service
                    </a>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <a href="#" className="hover:text-gray-700">
                        Contact Support
                    </a>
                </div>
            </div>

            {/* Enterprise security card */}
            <div className="absolute bottom-8 left-8 max-w-xs rounded-xl bg-gray-100/80 p-5">
                <ShieldCheck size={28} className="mb-3 text-blue-700" />
                <p className="text-base font-bold text-gray-900">
                    Enterprise Security
                </p>
                <p className="mt-1 text-sm text-gray-600">
                    Your data is protected by 256-bit encryption and multi-factor
                    authentication protocols.
                </p>
            </div>

            {/* Compliance badges */}
            <div className="absolute bottom-6 right-8 flex items-center gap-4 text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    PCI-DSS Compliant
                </span>
                <span className="flex items-center gap-1.5">
                    <LockKeyhole size={14} />
                    SSL Secure
                </span>
            </div>
        </div>
    );
}