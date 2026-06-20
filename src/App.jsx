import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main content container */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}