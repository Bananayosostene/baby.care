"use client";

// I need header with -> notification, settings, profile

// I need sidebar with -> dashboard, invitations ,families, logout

// app/(adminDash)/layout.tsx
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Settings,
  User,
  LayoutDashboard,
  Mail,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin-dash/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Invitations",
      href: "/admin-dash/invitations",
      icon: Mail,
    },
    {
      name: "Families",
      href: "/admin-dash/families",
      icon: Users,
    },
  ];

  const isActiveLink = (path: string) => pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-0"
          } transition-all duration-300 bg-white shadow-sm min-h-[calc(100vh-4rem)] overflow-hidden`}
        >
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActiveLink(item.href)
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <button className="flex items-center gap-3 p-3 rounded-lg w-full hover:bg-gray-100 text-red-600">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            sidebarOpen ? "ml-0" : "ml-0"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}