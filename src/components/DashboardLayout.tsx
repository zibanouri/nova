// src/components/DashboardLayout.tsx
import { useSidebar } from "@/components/ui/sidebar";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar />
      
      <div className="flex flex-1 flex-col">
        <DashboardNavbar />
        <main className="flex flex-1 flex-col gap-4 p-4 pt-16">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Sidebar is now working! ✅</p>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;