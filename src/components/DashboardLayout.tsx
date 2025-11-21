import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <DashboardSidebar />
      
      <div className="flex flex-1 flex-col">
        <DashboardNavbar />
        <main className="flex flex-1 flex-col gap-4 p-4 pt-16">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;