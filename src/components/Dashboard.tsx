import { Moon, Sun } from 'lucide-react';

const DashboardNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-border h-16 px-6 flex items-center justify-between">
      {/* Logo / Title */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">N</span>
        </div>
        <h1 className="text-lg font-semibold text-foreground">nova</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Toggle theme"
          className="p-2 rounded-md hover:bg-muted transition-colors"
        >
          <Sun className="h-5 w-5 text-foreground hidden dark:block" />
          <Moon className="h-5 w-5 text-foreground block dark:hidden" />
        </button>

        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground text-sm font-medium">
          Z
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
