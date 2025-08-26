"use client";
import { useState } from "react";
import { UILabHeader } from "@/components/UILabHeader";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsPanel } from "@/components/PropsPanel";

const Index = () => {
  const [activeComponent, setActiveComponent] = useState("buttons");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <UILabHeader />
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
        <ComponentSidebar 
          activeComponent={activeComponent}
          onComponentSelect={setActiveComponent}
        />
        <ComponentPreview componentName={activeComponent} />
        <PropsPanel />
      </div>
    </div>
  );
};

export default Index;
