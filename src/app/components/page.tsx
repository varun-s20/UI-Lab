"use client";
import Link from "next/link";
import { UILabHeader } from "@/components/UILabHeader";
import { FadeIn } from "@/components/FadeIn";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { componentData } from "@/data/componentData";

const ComponentsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-12">
      <UILabHeader />
      <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
        <ComponentSidebar activeComponent="" onComponentSelect={() => {}} />
        <div className="md:ml-84 flex-1">
          <main className="px-4 sm:px-6 md:px-10 pt-16">
            <FadeIn className="mx-auto max-w-7xl">
              <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                {Object.entries(componentData).map(
                  ([key, component], index) => (
                    <FadeIn key={key} delay={index * 0.1}>
                      <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-border/60 hover:shadow-lg">
                        <Link
                          href={`/components/${key}`}
                          className="absolute inset-0 z-10"
                        >
                          <span className="sr-only">
                            View {component.title} component
                          </span>
                        </Link>

                        {/* Component Preview */}
                        <div className="aspect-[6/4] w-full overflow-hidden bg-background/40 pointer-events-none">
                          <div className="h-full w-full p-2">
                            {component.preview}
                          </div>
                        </div>

                        {/* Component Info */}
                        <div className="p-6 pointer-events-none">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                              {component.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {component.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {component.description}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  )
                )}
              </div>
            </FadeIn>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
