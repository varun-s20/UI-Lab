"use client";
import { useState } from "react";
import { UILabHeader } from "@/components/UILabHeader";
import { FadeIn } from "@/components/FadeIn";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { Copy, ChevronLeft } from "lucide-react";
import Link from "next/link";

const InstallNextJSPage = () => {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Install Next.js
            </h1>
            <p className="text-lg text-muted-foreground">
              Install Next.js with Create Next App
            </p>
          </div>

          {/* Create a new project */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Create a new project</h2>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <code className="text-green-400">
                  npx create-next-app@latest
                </code>
              </div>
              <button
                onClick={() => copyToClipboard("npx create-next-app@latest")}
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Installation prompts */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              On installation, you&apos;ll see the following prompts:
            </h2>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    What is your project named?{" "}
                    <span className="text-green-400">my-app</span>
                  </div>
                  <div>
                    Would you like to use TypeScript?{" "}
                    <span className="text-green-400">No / Yes</span>
                  </div>
                  <div>
                    Would you like to use ESLint?{" "}
                    <span className="text-green-400">No / Yes</span>
                  </div>
                  <div>
                    Would you like to use Tailwind CSS?{" "}
                    <span className="text-green-400">No / Yes</span>
                  </div>
                  <div>
                    Would you like to use `src/` directory?{" "}
                    <span className="text-green-400">No / Yes</span>
                  </div>
                  <div>
                    Would you like to use App Router? (recommended){" "}
                    <span className="text-green-400">No / Yes</span>
                  </div>
                  <div>
                    Would you like to customize the default import alias (@/*)?{" "}
                    <span className="text-green-400">No / Yes</span>
                  </div>
                  <div>
                    What import alias would you like configured?{" "}
                    <span className="text-green-400">@/*</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use \`src/\` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*`)
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Start the app */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Start the app</h2>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-green-400">cd</span>{" "}
                    <span className="text-white">my-app</span>
                  </div>
                  <div>
                    <span className="text-green-400">npm run dev</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`cd my-app
npm run dev`)
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

export default InstallNextJSPage;
