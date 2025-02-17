"use client";
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
      href: "/admin-dash",
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
    <div className="flex h-screen  text-gray-800">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 bg-gray-50 border-r shadow-sm h-screen overflow-hidden`}
      >
        <div className="h-full flex flex-col shadow-sm">
          <div className="p-4">
            <h1 className="text-xl font-semibold text-gray-800">
              Admin Dashboard
            </h1>
          </div>
          <nav className="p-4 space-y-2 flex-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActiveLink(item.href)
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t">
            <button className="flex items-center gap-3 p-3 rounded-lg w-full hover:bg-gray-100 text-red-600">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Admin Header */}

        <header className="bg-gray-50 shadow-sm sticky top-0 z-50">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
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
        {/* Main Content */}
        <main
          className={`flex-1 p-6 bg-white transition-all duration-300 ${
            sidebarOpen ? "ml-0" : "ml-0"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}