"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UILabHeader } from "@/components/UILabHeader";
import { FadeIn } from "@/components/FadeIn";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <UILabHeader />
      <main className="px-4 sm:px-6 md:px-10">
        {/* Hero */}
        <FadeIn className="mx-auto max-w-4xl text-center pt-16 md:pt-24">
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
            <span>Open‑source</span>
            <span>•</span>
            <span>Accessible</span>
            <span>•</span>
            <span>TypeScript</span>
          </div>
          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-extrabold tracking-tight">
              Beautifully crafted components, built for modern web apps
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Fully accessible, customizable, and production‑ready. Ship faster
              with a developer‑first component library inspired by an IDE.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/components">
                <Button size="lg" className="px-5 w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="#components">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Browse Components
                </Button>
              </Link>
            </div>
          </FadeIn>
        </FadeIn>

        {/* Showcase card */}
        <FadeIn className="mx-auto max-w-6xl mt-14 md:mt-20 border border-border rounded-xl bg-card/40">
          <div className="aspect-[16/8] w-full rounded-xl overflow-hidden bg-[radial-gradient(1000px_400px_at_50%_-50%,_color-mix(in_oklab,_var(--color-primary)_30%,_transparent),_transparent)]">
            <div className="h-full w-full grid lg:grid-cols-2">
              <div className="hidden lg:block border-r border-border p-6 md:p-8">
                <FadeIn className="h-full w-full rounded-lg bg-background/60" />
              </div>
              <div className="p-6 md:p-8">
                <div className="text-left text-sm text-muted-foreground mb-2 flex items-center justify-between">
                  <span>Component Preview</span>
                  <span className="text-xs">Live</span>
                </div>
                <FadeIn delay={0.05} className="flex items-center gap-2">
                  <Button size="sm">Primary</Button>
                  <Button size="sm" variant="secondary">
                    Ghost
                  </Button>
                </FadeIn>
                <FadeIn
                  delay={0.1}
                  className="mt-4 h-44 rounded-lg border border-border bg-background/60"
                />
                <div className="mt-5 space-y-3">
                  <FadeIn
                    delay={0.15}
                    className="h-10 rounded-md border border-border bg-background/60"
                  />
                  <FadeIn
                    delay={0.2}
                    className="h-10 rounded-md border border-border bg-background/60"
                  />
                  <FadeIn
                    delay={0.25}
                    className="h-10 rounded-md border border-border bg-background/60"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Components overview */}
        <FadeIn id="components" className="mx-auto max-w-6xl mt-16 md:mt-24">
          <h2 className="text-xl md:text-2xl font-semibold">
            Explore our components
          </h2>
          <p className="text-sm text-muted-foreground">
            Everything you need to build: buttons, forms, modals, and more.
          </p>
          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <FadeIn className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="font-medium">Buttons</span>
                <Link href="/components">
                  <span className="text-muted-foreground">Docs</span>
                </Link>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="secondary">
                  Secondary
                </Button>
              </div>
            </FadeIn>
            <FadeIn
              delay={0.05}
              className="border border-border rounded-lg p-4"
            >
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="font-medium">Cards</span>
                <Link href="/components">
                  <span className="text-muted-foreground">Docs</span>
                </Link>
              </div>
              <div className="h-20 rounded-md border border-border bg-background/60" />
            </FadeIn>
            <FadeIn delay={0.1} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="font-medium">Modals</span>
                <Link href="/components">
                  <span className="text-muted-foreground">Docs</span>
                </Link>
              </div>
              <div className="h-20 rounded-md border border-border bg-background/60" />
            </FadeIn>
            <FadeIn
              delay={0.15}
              className="border border-border rounded-lg p-4"
            >
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="font-medium">Forms</span>
                <Link href="/components">
                  <span className="text-muted-foreground">Docs</span>
                </Link>
              </div>
              <div className="space-y-2">
                <div className="h-8 rounded-md border border-border bg-background/60" />
                <div className="h-8 rounded-md border border-border bg-background/60" />
                <div className="h-8 rounded-md border border-border bg-background/60" />
              </div>
            </FadeIn>
          </div>
        </FadeIn>

        {/* Developer features */}
        <FadeIn className="mx-auto max-w-6xl mt-16 md:mt-24">
          <h2 className="text-xl md:text-2xl font-semibold">
            Built for developers
          </h2>
          <p className="text-sm text-muted-foreground">
            A lean toolkit that prioritizes speed, accessibility, and control.
          </p>
          <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Highly Customizable",
                desc: "Design tokens for color, radius, and typography. Theme your app in minutes.",
              },
              {
                title: "Accessibility First",
                desc: "WAI‑ARIA patterns baked in. Keyboard navigable by default.",
              },
              {
                title: "Developer Experience",
                desc: "TypeScript support, clear docs, and copy‑paste examples.",
              },
              {
                title: "Feather‑light Performance",
                desc: "Tiny bundle footprint with tree‑shakable exports.",
              },
            ].map((f, i) => (
              <FadeIn
                key={f.title}
                className="border border-border rounded-lg p-4 bg-card/40"
                delay={i * 0.05}
              >
                <div className="text-sm font-medium">{f.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="mx-auto max-w-6xl mt-16 md:mt-24 mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-xs border border-border rounded-md px-3 py-1 mb-4">
            CLI
          </div>
          <FadeIn
            delay={0.05}
            className="mx-auto max-w-lg border border-border rounded-lg text-left p-4 bg-card/40"
          >
            <code className="block text-xs md:text-sm overflow-x-auto">
              npm install @uilab/core npx ui-lab init
            </code>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/components">
              <Button className="w-full sm:w-auto">Get Started</Button>
            </Link>
            <Link href="/components">
              <Button variant="secondary" className="w-full sm:w-auto">
                Read the Docs
              </Button>
            </Link>
          </FadeIn>
        </FadeIn>
      </main>
    </div>
  );
}
