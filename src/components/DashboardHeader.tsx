import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  Menu,
  Moon,
  Sun,
  User,
  LogOut,
  LogIn,
  UserPlus,
  Github,
} from "lucide-react";

interface NavbarProps {
  onToggleSidebar?: () => void;
  onPageChange?: (page: string) => void;
}

const mockNotifications = [
  { id: 1, title: "New User Registered", time: "2 min ago", unread: true },
  { id: 2, title: "Payment Received", time: "10 min ago", unread: true },
  { id: 3, title: "Server Maintenance Scheduled", time: "1 hour ago", unread: false },
];

const DashboardHeader = ({ onToggleSidebar, onPageChange }: NavbarProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-background border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <Button variant="ghost" size="icon" className="md:hidden" onClick={onToggleSidebar}>
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <div className="font-bold text-lg">Nova</div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            {/* <Button variant="ghost" size="icon" className="relative">
              <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 bg-red-400 text-white flex items-center justify-center">
                3
              </Badge>
            </Button> */}
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0">
            <div className="p-4 border-b font-semibold">Notifications</div>
            <div className="max-h-64 overflow-y-auto">
              {mockNotifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-3 border-b hover:bg-muted/50 cursor-pointer flex gap-3`}
                  onClick={() => onPageChange?.("notifications")}
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      n.unread ? "bg-green-500" : "bg-slate-300"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium">{n.title}</p>
                    <p className="text-xs text-muted-foreground">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t">
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={() => onPageChange?.("notifications")}
              >
                View All Notifications
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/zarnika/avatar/image6.webp" alt="profile" />
                <AvatarFallback>ZN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="h-4 w-4 mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-4 w-4 mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="/register">
                <UserPlus className="h-4 w-4 mr-2" /> Register
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/login">
                <LogIn className="h-4 w-4 mr-2" /> Login
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="https://github.com/zibanouri" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> Repository
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
