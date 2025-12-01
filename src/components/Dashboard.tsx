import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <DashboardHeader />
    </SidebarProvider>
  );
}
export default Dashboard;