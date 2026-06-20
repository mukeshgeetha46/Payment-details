import { useState } from "react";
import {
  LayoutGrid,
  Receipt,
  Wallet,
  FileText,
  RefreshCcw,
  Settings,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const navItems = [
  { label: "Dashboard", icon: LayoutGrid, link: "/" },
  { label: "Transactions", icon: Receipt, link: "/transaction" },
  { label: "Settings", icon: Settings },
];

export default function Sidebar({ onClose }) {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();

  const HandleNavigate = (label, link) => {
    setActive(label)
    navigate(link);
    if (onClose) onClose();
  }

  return (
    <aside className="flex h-screen w-64 flex-col justify-between border-r border-gray-200 bg-white px-3 py-5">
      <div>
        {/* Logo */}
        <div className="mb-6 px-3">
          <h1 className="text-xl font-bold text-blue-600">Razorpay</h1>
          <p className="text-xs font-medium text-gray-500">
            Business Dashboard
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map(({ label, icon: Icon, link }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => HandleNavigate(label, link)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Icon size={18} strokeWidth={2} />
                {label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom CTA */}
      <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 text-sm font-semibold text-white hover:bg-blue-800">
        <Plus size={18} strokeWidth={2.5} />
        Create Payment
      </button>
    </aside>
  );
}