"use client";
import { useState, useEffect } from "react";
import { Moon, Sun, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function UILabHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-14 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 bg-card border border-border p-1 px-2 rounded-md">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold"><TerminalSquare /></span>
          </div>
          <span className="font-semibold text-foreground">UI Lab</span>
        </div>
        
        <nav className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Docs
          </Button>
          <Button variant="ghost" size="sm" className="text-white font-medium bg-sidebar-primary">
            Components
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            GitHub
          </Button>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        )}

        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <span className="text-sm">⭐</span>
        </Button>
      </div>
    </header>
  );
}
