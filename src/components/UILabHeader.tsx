"use client";
import { useState, useEffect } from "react";
import { Moon, Sun, TerminalSquare, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function UILabHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-14 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 sticky top-0 z-50">
      <div className="flex items-center gap-3 sm:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 bg-card border border-border p-1 px-2 rounded-md"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground text-xs sm:text-sm font-bold">
              <TerminalSquare className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </div>
          <span className="font-semibold text-foreground text-sm sm:text-base">
            UI Lab
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/docs">
            <Button
              variant="ghost"
              size="sm"
              className={
                pathname.startsWith("/docs")
                  ? "text-white font-medium bg-sidebar-primary"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              Docs
            </Button>
          </Link>
          <Link href="/components">
            <Button
              variant="ghost"
              size="sm"
              className={
                pathname.startsWith("/components")
                  ? "text-white font-medium bg-sidebar-primary"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              Components
            </Button>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Button>
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Theme Toggle */}
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
        )}

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/docs" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                size="sm"
                className={
                  pathname.startsWith("/docs")
                    ? "w-full justify-start text-white font-medium bg-sidebar-primary"
                    : "w-full justify-start text-muted-foreground hover:text-foreground"
                }
              >
                Docs
              </Button>
            </Link>
            <Link href="/components" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                size="sm"
                className={
                  pathname.startsWith("/components")
                    ? "w-full justify-start text-white font-medium bg-sidebar-primary"
                    : "w-full justify-start text-muted-foreground hover:text-foreground"
                }
              >
                Components
              </Button>
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-muted-foreground hover:text-foreground"
              >
                GitHub
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
