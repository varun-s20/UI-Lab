"use client";
import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UILabHeader } from "@/components/UILabHeader";
import { FadeIn } from "@/components/FadeIn";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsPanel } from "@/components/PropsPanel";
import { componentData } from "@/data/componentData";

interface ComponentPageProps {
  params: Promise<{
    componentName: string;
  }>;
}

const ComponentPage = ({ params }: ComponentPageProps) => {
  const { componentName } = use(params);
  const component = componentData[componentName];

  if (!component) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <UILabHeader />
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
        <ComponentSidebar
          activeComponent={componentName}
          onComponentSelect={() => {}}
        />
        <div className="md:ml-84 flex-1 flex flex-col lg:flex-row">
          <ComponentPreview componentName={componentName} />
          {/* <PropsPanel /> */}
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
