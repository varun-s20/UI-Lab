"use client";
import { useState } from "react";
import { UILabHeader } from "@/components/UILabHeader";
import { FadeIn } from "@/components/FadeIn";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { Copy, ChevronLeft } from "lucide-react";
import Link from "next/link";

const CLIInitPage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <UILabHeader />
      <ComponentSidebar
        isMobileOpen={isMobileOpen}
        onMobileToggle={() => setIsMobileOpen(!isMobileOpen)}
      />
      <main className="px-4 sm:px-6 md:px-10 pt-16 lg:ml-84">
        <FadeIn className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Documentation
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">CLI</h1>
            <p className="text-lg text-muted-foreground">
              Installing UI Lab with the CLI
            </p>
          </div>

          {/* init Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">init</h2>
            <p className="text-muted-foreground mb-4">
              Use the <code className="bg-gray-800 px-1 rounded">init</code>{" "}
              command to initialize configuration and dependencies for a new
              project.
            </p>
            <p className="text-muted-foreground mb-4">
              The <code className="bg-gray-800 px-1 rounded">init</code> command
              installs dependencies, adds the{" "}
              <code className="bg-gray-800 px-1 rounded">cn</code> util,
              configures{" "}
              <code className="bg-gray-800 px-1 rounded">
                tailwind.config.js
              </code>
              , and CSS variables for the project.
            </p>
            <div className="relative mb-4">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-blue-400">npx</span>{" "}
                    <span className="text-green-400">shadcn@latest</span>{" "}
                    <span className="text-white">init</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("npx shadcn@latest init")}
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-muted-foreground mb-4">
              You will be asked a few questions to configure{" "}
              <code className="bg-gray-800 px-1 rounded">components.json</code>
            </p>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    Which style would you like to use? ›{" "}
                    <span className="text-green-400">New York</span>
                  </div>
                  <div>
                    Which color would you like to use as base color? ›{" "}
                    <span className="text-green-400">Zinc</span>
                  </div>
                  <div>
                    Do you want to use CSS variables for colors? ›{" "}
                    <span className="text-green-400">no / yes</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes`)
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Options Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Options</h2>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-blue-400">Usage:</span>{" "}
                    <span className="text-white">
                      shadcn init [options] [components...]
                    </span>
                  </div>
                  <div className="text-green-400">
                    initialize your project and install dependencies
                  </div>
                  <div></div>
                  <div>
                    <span className="text-blue-400">Arguments:</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-white">components</span>{" "}
                    <span className="text-green-400">
                      the components to add or a url to the component.
                    </span>
                  </div>
                  <div></div>
                  <div>
                    <span className="text-blue-400">Options:</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-white">-d, --defaults</span>{" "}
                    <span className="text-green-400">
                      use default values i.e new-york, zinc and css variables.
                      (default:{" "}
                    </span>
                    <span className="text-red-400">false</span>
                    <span className="text-green-400">)</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`Usage: shadcn init [options] [components...]
initialize your project and install dependencies

Arguments:
  components  the components to add or a url to the component.

Options:
  -d, --defaults  use default values i.e new-york, zinc and css variables. (default: false)`)
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
};

export default CLIInitPage;
