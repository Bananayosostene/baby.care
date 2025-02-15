// app/(familyDash)/layout.tsx
"use client";
import { useState } from "react";
import {
  Bell,
  Settings,
  User,
  Volume2,
  Upload,
  Clock,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";

export default function FamilyDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [volume, setVolume] = useState(50);

  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
}
