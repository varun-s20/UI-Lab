"use client";
import { useState } from "react";
import { UILabHeader } from "@/components/UILabHeader";
import { FadeIn } from "@/components/FadeIn";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import { Copy, ChevronLeft } from "lucide-react";
import Link from "next/link";

const InstallTailwindPage = () => {
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
              Tailwind CSS v4 Installation
            </h1>
          </div>

          {/* Create your project */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Create your project</h2>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-green-400">
                      npx create-next-app@latest
                    </span>{" "}
                    <span className="text-white">my-project</span>{" "}
                    <span className="text-orange-400">
                      --typescript --eslint
                    </span>
                  </div>
                  <div>
                    <span className="text-green-400">cd</span>{" "}
                    <span className="text-green-400">my-project</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`npx create-next-app@latest my-project --typescript --eslint
cd my-project`)
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Install Tailwind CSS */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Install Tailwind CSS</h2>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-green-400">npm install</span>{" "}
                    <span className="text-white">
                      tailwindcss @tailwindcss/postcss @tailwindcss/cli
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    "npm install tailwindcss @tailwindcss/postcss @tailwindcss/cli"
                  )
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Create your CSS file */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Create your CSS file</h2>
            <p className="text-muted-foreground mb-4">
              Create a new CSS file (e.g.,{" "}
              <code className="bg-gray-800 px-1 rounded">app/globals.css</code>)
              and add the Tailwind import:
            </p>
            <div className="mb-4">
              <code className="text-white">app/globals.css</code>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-green-400">@import</span>{" "}
                    <span className="text-white">`tailwindcss``;</span>
                  </div>
                  <div>
                    <span className="text-green-400">@theme</span>{" "}
                    <span className="text-white">inline </span>
                  </div>
                  <div className="text-gray-400 ml-4">
                    `/* Configure your theme variables here */`
                  </div>
                  <div className="text-white ml-4">
                    --font-display:{" "}
                    <span className="text-orange-400">`Inter`</span>,{" "}
                    <span className="text-orange-400">`sans-serif`</span>;
                  </div>
                  <div className="text-white ml-4">
                    --color-primary-500:{" "}
                    <span className="text-green-400">oklch</span>(
                    <span className="text-orange-400">0.84 0.18 117.33</span>);
                  </div>
                  <div className="text-white ml-4">
                    --spacing: <span className="text-orange-400">0.25rem</span>;
                  </div>
                  <div></div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`@import "tailwindcss";
@theme inline {
  /* Configure your theme variables here */
  --font-display: "Inter", "sans-serif";
  --color-primary-500: oklch(0.84 0.18 117.33);
  --spacing: 0.25rem;
}`)
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Configure PostCSS */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Configure PostCSS</h2>
            <p className="text-muted-foreground mb-4">
              Update your PostCSS configuration:
            </p>
            <div className="mb-4">
              <code className="text-white">postcss.config.js</code>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-yellow-400">module.exports</span>{" "}
                  </div>
                  <div className="ml-4">
                    <span className="text-yellow-400">plugins</span>:{" "}
                  </div>
                  <div className="ml-8">
                    <span className="text-green-400">
                      `@tailwindcss/postcss`
                    </span>
                    : {},
                  </div>
                  <div className="ml-4">,</div>
                  <div>;</div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};`)
                }
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Start your build process */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              Start your build process
            </h2>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-blue-400">npm run dev</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("npm run dev")}
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Start using Tailwind */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Start using Tailwind</h2>
            <div className="mb-4">
              <code className="text-white">app/page.tsx</code>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-blue-300">
                  <div>
                    <span className="text-yellow-400">
                      export default function
                    </span>{" "}
                    <span className="text-blue-400">Home</span>(){" "}
                  </div>
                  <div className="ml-4">
                    <span className="text-yellow-400">return</span>{" "}
                    <span className="text-blue-400">&lt;h1</span>{" "}
                    <span className="text-yellow-400">className</span>=
                    <span className="text-green-400">
                      `text-3xl font-bold underline`
                    </span>
                    <span className="text-blue-400">&gt;</span>
                    <span className="text-white">Hello world!</span>
                    <span className="text-blue-400">&lt;/h1&gt;</span>;
                  </div>
                  <div></div>
                </div>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(`export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
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

export default InstallTailwindPage;
