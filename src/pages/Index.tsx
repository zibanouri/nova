// Index.tsx — اصلاح‌شده
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const token = localStorage.getItem('auth_token');
  if (!token) return null;

  return (
    <Dashboard>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-foreground"> Nova</h1>
        <p className="mt-2 text-muted-foreground">hallo
        </p>
      </div>
    </Dashboard>
  );
};

export default Index;