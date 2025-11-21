import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardNavbar />
        <main className="flex-1 p-4">
          <div></div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
