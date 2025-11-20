import { Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

const DashboardNavbar = () => {
    const [isDark, setIsDark] = useState(false);

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
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-14 border-b bg-background/80  backdrop-blur-sm px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="size-10 rounded-md flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">N</span>
                </div>
                <span className="text-lg font-semibold">nova</span>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="default"
                    onClick={toggleTheme}
                  aria-label={`Toggle ${isDark ? "light" : "dark"} mode`}
                >
                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost"
                            className="relative h-8 w-8 rounded-full">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                                <AvatarFallback>
                                    <User className="h-4 w-4" />
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>

            </div>

        </nav>
    );
};
    export default DashboardNavbar;