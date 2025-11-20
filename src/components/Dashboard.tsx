import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <DashboardNavbar />
      <DashboardSidebar />
      <main className="pt-16 p-4">
      {/* <h1 className="text-2xl font-bold">Dashboard</h1> */}
        {/* <p className="mt-2 text-muted-foreground">
          You are logged in 
        </p> */}
      </main>
    </div>
  );
};

export default Dashboard;
