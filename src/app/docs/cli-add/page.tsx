"use client";
import { useState } from "react";
import { UILabHeader } from "@/components/UILabHeader";
import { FadeIn } from "@/components/FadeIn";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { Copy, ChevronLeft } from "lucide-react";
import Link from "next/link";

const CLIAddPage = () => {
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

          {/* add Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">add</h2>
            <p className="text-muted-foreground mb-4">
              Use the <code className="bg-gray-800 px-1 rounded">add</code>{" "}
              command to add components and dependencies to your project.
            </p>
            <div className="relative mb-4">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-blue-400">npx</span>{" "}
                    <span className="text-green-400">shadcn@latest</span>{" "}
                    <span className="text-white">add [component]</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("npx shadcn@latest add [component]")
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
                      shadcn add [options] [components...]
                    </span>
                  </div>
                  <div className="text-green-400">
                    add a component to your project
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
                    <span className="text-white">-y, --yes</span>{" "}
                    <span className="text-green-400">
                      skip confirmation prompt. (default:{" "}
                    </span>
                    <span className="text-red-400">false</span>
                    <span className="text-green-400">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-white">-o, --overwrite</span>{" "}
                    <span className="text-green-400">
                      overwrite existing files. (default:{" "}
                    </span>
                    <span className="text-red-400">false</span>
                    <span className="text-green-400">)</span>
                  </div>
                  <div className="ml-4">
                    <span className="text-white">-c, --cwd &lt;cwd&gt;</span>{" "}
                    <span className="text-green-400">
                      the working directory. defaults to the current directory.
                    </span>
                  </div>
                  <div className="ml-4">
                    <span className="text-white">-p, --path &lt;path&gt;</span>{" "}
                    <span className="text-green-400">
                      the path to add the component to.
                    </span>
                  </div>
                  <div className="ml-4">
                    <span className="text-white">-h, --help</span>{" "}
                    <span className="text-green-400">
                      display help for command
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`Usage: shadcn add [options] [components...]
add a component to your project

Arguments:
  components  the components to add or a url to the component.

Options:
  -y, --yes        skip confirmation prompt. (default: false)
  -o, --overwrite  overwrite existing files. (default: false)
  -c, --cwd <cwd>  the working directory. defaults to the current directory.
  -p, --path <path>  the path to add the component to.
  -h, --help       display help for command`)
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Monorepo Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Monorepo</h2>
            <p className="text-muted-foreground mb-4">
              In a monorepo, you can specify the path to your workspace with the{" "}
              <code className="bg-gray-800 px-1 rounded">-c</code> or{" "}
              <code className="bg-gray-800 px-1 rounded">--cwd</code> option.
            </p>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-blue-400">npx</span>{" "}
                    <span className="text-green-400">shadcn@latest</span>{" "}
                    <span className="text-white">init</span>{" "}
                    <span className="text-orange-400">-c ./apps/www</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("npx shadcn@latest init -c ./apps/www")
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

export default CLIAddPage;
