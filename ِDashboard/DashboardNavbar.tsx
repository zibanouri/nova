import { Moon, Sun, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const DashboardNavbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-14 border-b bg-background px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded bg-primary flex items-center justify-center">
        </div>
        <span className="text-sm font-medium text-foreground">nova</span>
      </div>

      <div className="flex items-center gap-1.5">
        <Button
          variant="ghost" 
          size="icon"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </Button>
        <Button variant="ghost"
         size="icon" 
         aria-label="User">
          <User className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
