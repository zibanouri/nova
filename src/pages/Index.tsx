import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '@/components/Dashboard';

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  const token = localStorage.getItem('auth_token');
  if (!token) return null;

  return <Dashboard />;
}
