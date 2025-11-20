// src/components/DashboardNavbar.tsx
import { Moon, Sun, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardNavbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    setIsDark(theme === "dark");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  const handleLogin = () => {
    console.log("Login clicked");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    setIsLoggedIn(false);
  };

  const handleProfile = () => console.log("Profile clicked");
  const handleSettings = () => console.log("Settings clicked");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 border-b bg-background/80 backdrop-blur-sm px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-md bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">N</span>
        </div>
        <span className="text-lg font-semibold">nova</span>
      </div>

      <div className="flex items-center gap-1.5">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {isLoggedIn ? (
              <>
                <DropdownMenuItem onClick={handleProfile}>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={handleSettings}>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  Log out
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem onClick={handleLogin}>Log in</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default DashboardNavbar;