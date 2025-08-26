import { useState } from "react";
import { 
  Square, 
  Type, 
  CheckSquare, 
  List, 
  CreditCard, 
  Layout, 
  Table2, 
  Navigation, 
  AlertTriangle,
  Award,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

const components = [
  { id: "buttons", name: "Buttons", icon: Square, count: 4 },
  { id: "forms", name: "Forms", icon: Type },
  { id: "input", name: "Input", icon: Type },
  { id: "checkbox", name: "Checkbox", icon: CheckSquare },
  { id: "select", name: "Select", icon: List },
  { id: "cards", name: "Cards", icon: CreditCard },
  { id: "modals", name: "Modals", icon: Layout },
  { id: "tables", name: "Tables", icon: Table2 },
  { id: "navigation", name: "Navigation", icon: Navigation },
  { id: "alerts", name: "Alerts", icon: AlertTriangle },
  { id: "badges", name: "Badges", icon: Award },
  { id: "toast", name: "Toast", icon: MessageSquare },
];

interface ComponentSidebarProps {
  activeComponent: string;
  onComponentSelect: (componentId: string) => void;
}

export function ComponentSidebar({ activeComponent, onComponentSelect }: ComponentSidebarProps) {
  return (
    <aside className="w-64 border-r border-border bg-background">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span>Explorer</span>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search components..."
            className="w-full px-3 py-2 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
          <span className="absolute right-3 top-2 text-xs text-muted-foreground">/</span>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-1">
          <div className="text-xs font-medium text-muted-foreground mb-2 px-2">Core</div>
          {components.map((component) => {
            const Icon = component.icon;
            const isActive = activeComponent === component.id;
            
            return (
              <button
                key={component.id}
                onClick={() => onComponentSelect(component.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-2 py-2 text-sm rounded-md transition-colors",
                  isActive 
                    ? "bg-sidebar-primary text-sidebar-foreground font-medium" 
                    : "text-sidebar-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="flex-1 text-left">{component.name}</span>
                {component.count && (
                  <span className={cn(
                    "text-xs px-1.5 py-0.5 rounded",
                    isActive ? "bg-primary-foreground/20" : "bg-muted"
                  )}>
                    {component.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}