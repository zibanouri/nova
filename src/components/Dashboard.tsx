// src/components/layouts/DashboardLayout.tsx
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-1 flex-col">
        <DashboardNavbar />
        <div className="flex-1 p-4 pt-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}