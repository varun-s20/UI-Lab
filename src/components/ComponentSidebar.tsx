import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MailOpen,
  FileUser,
  Image,
  Download,
  Wrench,
  Palette,
  ChevronRight,
  ChevronDown,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

const docsSections = [
  {
    id: "installation",
    name: "Installation",
    items: [
      {
        id: "install-nextjs",
        name: "Install Next.js",
        href: "/docs/install-nextjs",
      },
      {
        id: "install-tailwind",
        name: "Install Tailwind CSS",
        href: "/docs/install-tailwind",
      },
      {
        id: "add-utilities",
        name: "Add Utilities",
        href: "/docs/add-utilities",
      },
      // { id: "cli-init", name: "init", href: "/docs/cli-init" },
      // { id: "cli-add", name: "add", href: "/docs/cli-add" },
    ],
  },
];

const componentsSection = {
  id: "components",
  name: "Components",
  items: [
    {
      id: "carousel",
      name: "Carousel",
      // icon: Image,
      href: "/components/carousel",
      new: true,
    },
    {
      id: "newsletter",
      name: "Newsletter",
      // icon: MailOpen,
      href: "/components/newsletter",
      new: false,
    },
    {
      id: "forms",
      name: "Signup Form",
      // icon: FileUser,
      href: "/components/forms",
      new: true,
    },
    // Add more components here
  ],
};

interface ComponentSidebarProps {
  activeComponent?: string;
  onComponentSelect?: (componentId: string) => void;
  className?: string;
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}

export function ComponentSidebar({
  activeComponent,
  // onComponentSelect,
  className,
  isMobileOpen,
  onMobileToggle,
}: ComponentSidebarProps) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "installation",
    "components",
  ]);

  // Prevent scroll events from propagating to main page when hovering over sidebar
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const preventScroll = (e: WheelEvent) => {
      if (isHovered) {
        e.preventDefault();
        e.stopPropagation();

        const scrollContainer = sidebar.querySelector(
          ".scrollable-menu"
        ) as HTMLElement;
        if (scrollContainer) {
          const scrollAmount = e.deltaY;
          scrollContainer.scrollTop += scrollAmount;
        }
      }
    };

    // Add passive: false to allow preventDefault
    sidebar.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      sidebar.removeEventListener("wheel", preventScroll);
    };
  }, [isHovered]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchQuery("");
      e.currentTarget.blur();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        const target = e.target as HTMLElement;
        if (
          target.tagName !== "INPUT" &&
          target.tagName !== "TEXTAREA" &&
          target.tagName !== "SELECT"
        ) {
          e.preventDefault();
          searchInputRef.current?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isActive = (href: string) => pathname === href;

  const sidebarContent = (
    <>
      <div className="p-6 px-8 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span className="font-medium">Explorer</span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search components..."
            ref={searchInputRef}
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 text-sm bg-card/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-8 top-3 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              ✕
            </button>
          )}
          <span className="absolute right-3 top-3 text-xs text-muted-foreground">
            /
          </span>
        </div>
      </div>

      <div className="scrollable-menu flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 transition-all duration-300 scroll-smooth py-4 px-6">
        <div className="p-4 space-y-6">
          {/* Docs Sections */}
          {docsSections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className={cn(
                  "flex items-center justify-between w-full text-left font-semibold text-foreground hover:text-primary transition-colors mb-2",
                  expandedSections.includes(section.id) && "text-gray-500"
                )}
              >
                <div className="flex items-center gap-2 text-white/80">
                  {section.name}
                </div>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {expandedSections.includes(section.id) && (
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "block text-sm text-muted-foreground hover:text-foreground transition-colors p-1 rounded",
                        isActive(item.href) &&
                          "border-l-3 border-primary text-sidebar-foreground font-medium shadow-md scale-[1.02] rounded-none"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Components Section */}
          <div>
            <button
              onClick={() => toggleSection("components")}
              className={cn(
                "flex items-center justify-between w-full text-left font-semibold text-foreground hover:text-primary transition-colors mb-2",
                expandedSections.includes("components") && "text-white/80"
              )}
            >
              <div className="flex items-center gap-2">
                Components
              </div>
              {expandedSections.includes("components") ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {expandedSections.includes("components") && (
              <div className="space-y-1">
                {componentsSection.items
                  .filter((component) =>
                    component.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((component) => {
                    const isActive = activeComponent === component.id;
                    return (
                      <Link
                        key={component.id}
                        href={component.href}
                        className={cn(
                          "w-full flex items-center gap-3 px-1 py-1 text-sm rounded transition-all duration-200 group",
                          isActive
                            ? "border-l-3 border-primary text-sidebar-foreground font-medium shadow-md scale-[1.02] rounded-none"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:shadow-sm hover:scale-[1.01]"
                        )}
                      >
                        <span className="flex-1 text-left">
                          {component.name}
                        </span>
                        {component.new && (
                          <span
                            className={cn(
                              "text-[11px] p-1 py-0 rounded-full font-medium border border-primary text-primary/70",
                              isActive
                                ? "bg-primary-foreground/20"
                                : ""
                            )}
                          >
                            New
                          </span>
                        )}
                      </Link>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onMobileToggle}
        className="fixed top-20 left-4 z-50 lg:hidden p-2 bg-background border border-border rounded-md hover:bg-accent transition-colors"
      >
        {isMobileOpen ? (
          <span className="text-lg">✕</span>
        ) : (
          <span className="text-lg">☰</span>
        )}
      </button>

      {/* Desktop Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          "w-84 h-screen fixed left-0 top-12 border-r border-border bg-background/95 backdrop-blur-sm flex flex-col shadow-lg z-40 lg:flex",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-background z-40 lg:hidden transition-transform duration-300",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto">{sidebarContent}</div>
      </div>
    </>
  );
}
