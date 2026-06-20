import { Bell, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Topbar({ onMenuClick }) {
  const navigate = useNavigate();
  return (
    <header className="flex h-16 w-full items-center justify-between gap-5 border-b border-gray-200 bg-white px-6">
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="text-gray-700 hover:text-gray-900 lg:hidden"
      >
        <Menu size={24} strokeWidth={2} />
      </button>

      <div className="flex flex-1 items-center justify-end gap-5">
        {/* Links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-gray-900">
            Docs
          </a>
          <a href="#" className="hover:text-gray-900">
            Help
          </a>
          <a href="#" className="hover:text-gray-900">
            Support
          </a>
        </nav>

        {/* Divider */}
        <div className="hidden md:block h-6 w-px bg-gray-200" />

        {/* Live mode badge */}
        <span className="hidden sm:inline-block rounded-full bg-green-200 px-3 py-1 text-xs font-bold tracking-wide text-green-900">
          LIVE MODE
        </span>

        {/* Notification bell */}
        <button onClick={() => navigate('/notification')} className="text-gray-700 hover:text-gray-900">
          <Bell size={20} strokeWidth={2} />
        </button>

        {/* Avatar */}
        <button
          onClick={() => navigate('/profile')}
          className="h-8 w-8 rounded-full object-cover"
        >
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User avatar"
            className="h-8 w-8 rounded-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}