import { Moon, Sun, User } from 'lucide-react'; 
import { useState, useEffect } from 'react';

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
          <span className="text-primary-foreground text-xs font-bold">N</span>
        </div>
        <span className="text-sm font-medium text-foreground">nova</span>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="p-1.5 rounded-md text-foreground hover:bg-muted transition-colors"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <div className="p-1.5 rounded-md hover:bg-muted transition-colors">
          <User className="size-5 text-foreground" />
        </div>
      </div>
    </nav>
  );
};


export default DashboardNavbar;