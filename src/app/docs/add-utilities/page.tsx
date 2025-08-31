"use client";
import { useState } from "react";
import { UILabHeader } from "@/components/UILabHeader";
import { FadeIn } from "@/components/FadeIn";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { Copy, ChevronLeft } from "lucide-react";
import Link from "next/link";

const AddUtilitiesPage = () => {
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
              Add Utilities
            </h1>
            <p className="text-lg text-muted-foreground">
              Commonly used utilities for using UI Lab
            </p>
          </div>

          {/* Install dependencies */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Install dependencies</h2>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-green-400">npm i</span>{" "}
                    <span className="text-white">
                      motion clsx tailwind-merge
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard("npm i motion clsx tailwind-merge")
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add util file */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Add util file</h2>
            <div className="mb-4">
              <code className="text-white">lib/utils.ts</code>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-orange-400">import</span>{" "}
                    <span className="text-white">{`ClassValue, clsx`}</span>{" "}
                    <span className="text-orange-400">from</span>{" "}
                    <span className="text-red-400">`clsx`</span>;
                  </div>
                  <div>
                    <span className="text-orange-400">import</span>{" "}
                    <span className="text-white">{`twMerge`}</span>{" "}
                    <span className="text-orange-400">from</span>{" "}
                    <span className="text-red-400">`tailwind-merge`</span>;
                  </div>
                  <div></div>
                  <div>
                    <span className="text-orange-400">export function</span>{" "}
                    <span className="text-white">cn</span>(
                    <span className="text-white">...inputs: ClassValue[]</span>){" "}
                  </div>
                  <div className="ml-4">
                    <span className="text-orange-400">return</span>{" "}
                    <span className="text-white">twMerge(clsx(inputs));</span>
                  </div>
                  <div></div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`)
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Next.js 15 and React 19 Framer Motion Fix */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Next.js 15 and React 19 Framer Motion Fix
            </h2>
            <p className="text-muted-foreground mb-4">
              If you&apos;re using Next.js 15 and React 19, you&apos;ll need to
              make the following changes in order to use framer motion (which is
              now motion), since framer motion is not compatible with React 19
              yet.
            </p>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-green-400">`dependencies`</span>:{" "}
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`framer-motion`</span>:{" "}
                    <span className="text-red-400">`^12.0.0-alpha.1`</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`next`</span>:{" "}
                    <span className="text-red-400">`15.0.3`</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`react`</span>:{" "}
                    <span className="text-red-400">
                      `19.0.0-rc-66855b96-20241106`
                    </span>
                    ,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`react-dom`</span>:{" "}
                    <span className="text-red-400">
                      `19.0.0-rc-66855b96-20241106`
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`"dependencies": {
  "framer-motion": "^12.0.0-alpha.1",
  "next": "15.0.3",
  "react": "19.0.0-rc-66855b96-20241106",
  "react-dom": "19.0.0-rc-66855b96-20241106"
}`)
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Package.json with overrides */}
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">
              If you&apos;re using{" "}
              <code className="bg-gray-800 px-1 rounded">motion</code> instead
              of <code className="bg-gray-800 px-1 rounded">framer-motion</code>
              , you can make the following changes:
            </p>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-green-400">`dependencies`</span>:{" "}
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`motion`</span>:{" "}
                    <span className="text-red-400">`^12.0.0-alpha.1`</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`next`</span>:{" "}
                    <span className="text-red-400">`15.0.3`</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`react`</span>:{" "}
                    <span className="text-red-400">
                      `19.0.0-rc-66855b96-20241106`
                    </span>
                    ,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`react-dom`</span>:{" "}
                    <span className="text-red-400">
                      `19.0.0-rc-66855b96-20241106`
                    </span>
                    ,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`tailwind-merge`</span>:{" "}
                    <span className="text-red-400">`^2.5.5`</span>
                  </div>
                  <div>,</div>
                  <div>
                    <span className="text-green-400">`overrides`</span>:{" "}
                  </div>
                  <div className="ml-4">
                    <span className="text-green-400">`motion`</span>:{" "}
                  </div>
                  <div className="ml-8">
                    <span className="text-green-400">`react`</span>:{" "}
                    <span className="text-red-400">
                      `19.0.0-rc-66855b96-20241106`
                    </span>
                    ,
                  </div>
                  <div className="ml-8">
                    <span className="text-green-400">`react-dom`</span>:{" "}
                    <span className="text-red-400">
                      `19.0.0-rc-66855b96-20241106`
                    </span>
                  </div>
                  <div className="ml-4"></div>
                  <div></div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`"dependencies": {
  "motion": "^12.0.0-alpha.1",
  "next": "15.0.3",
  "react": "19.0.0-rc-66855b96-20241106",
  "react-dom": "19.0.0-rc-66855b96-20241106",
  "tailwind-merge": "^2.5.5"
},
"overrides": {
  "motion": {
    "react": "19.0.0-rc-66855b96-20241106",
    "react-dom": "19.0.0-rc-66855b96-20241106"
  }
}`)
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

export default AddUtilitiesPage;
