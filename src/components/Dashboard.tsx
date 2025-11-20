import DashboardNavbar from './DashboardNavbar';
import Login from '@/pages/Login';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <DashboardNavbar />
      <Login />
      <main className="pt-16 p-4"></main>
    </div>
  );
};
export default Dashboard;
