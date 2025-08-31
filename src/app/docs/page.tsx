"use client";
import { useState } from "react";
import { UILabHeader } from "@/components/UILabHeader";
import { FadeIn } from "@/components/FadeIn";
import { ComponentSidebar } from "@/components/ComponentSidebar";
import Link from "next/link";
import {
  ChevronRight,
  Download,
  Palette,
  Wrench,
  BookOpen,
  Play,
  Code,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react";

const DocsPage = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const learningPaths = [
    {
      id: "installation",
      title: "Get Started",
      description:
        "Learn how to set up UI Lab in your project and get up and running quickly.",
      icon: Rocket,
      gradient: "from-primary via-primary/90 to-primary/70",
      buttonGradient: "from-primary/90 to-primary",
      buttonText: "Start Learning",
      href: "/docs/install-nextjs",
      features: ["Install Next.js", "Setup Tailwind CSS", "Add Utilities"],
    },
    {
      id: "components",
      title: "Explore Components",
      description:
        "Browse our collection of beautiful, reusable UI components with live examples.",
      icon: Palette,
      gradient: "from-chart-4 via-chart-4/90 to-chart-4/70",
      buttonGradient: "from-chart-4/90 to-chart-4",
      buttonText: "Browse Components",
      href: "/components",
      features: [
        "Interactive Previews",
        "Copy & Paste Code",
        "Customizable Props",
      ],
    },
    {
      id: "cli",
      title: "CLI Tools",
      description:
        "Use our command-line tools to quickly add components and utilities to your project.",
      icon: Zap,
      gradient: "from-chart-3 via-chart-3/90 to-chart-3/70",
      buttonGradient: "from-chart-3/90 to-chart-3",
      buttonText: "Start Building",
      href: "/docs/cli-init",
      features: [
        "Project Initialization",
        "Component Addition",
        "Utility Management",
      ],
    },
  ];

  const quickLinks = [
    {
      title: "Installation Guide",
      description: "Step-by-step setup instructions",
      href: "/docs/install-nextjs",
      icon: Download,
      color: "text-primary",
    },
    {
      title: "Tailwind Setup",
      description: "Configure Tailwind CSS with UI Lab",
      href: "/docs/install-tailwind",
      icon: Palette,
      color: "text-chart-4",
    },
    {
      title: "Add Utilities",
      description: "Common utilities and helpers",
      href: "/docs/add-utilities",
      icon: Sparkles,
      color: "text-chart-3",
    },
    // {
    //   title: "CLI Commands",
    //   description: "Command-line interface reference",
    //   href: "/docs/cli-init",
    //   icon: Code,
    //   color: "text-chart-2",
    // },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <UILabHeader />
      <ComponentSidebar
        isMobileOpen={isMobileOpen}
        onMobileToggle={() => setIsMobileOpen(!isMobileOpen)}
      />
      <main className="px-4 sm:px-6 md:px-10 pt-16 lg:ml-84">
        <FadeIn className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Welcome to UI Lab
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Getting Started with UI Lab
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn UI Lab the way that best matches your learning style. Choose
              your path and start building beautiful interfaces.
            </p>
          </div>

          {/* Main Learning Paths */}
          <div className="grid gap-8 md:grid-cols-3 mb-20">
            {learningPaths.map((path, index) => (
              <FadeIn key={path.id} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br ${path.gradient} p-8 text-white shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <path.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold">{path.title}</h3>
                    </div>

                    <p className="text-white/90 mb-6 leading-relaxed">
                      {path.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-8">
                      {path.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-white/80"
                        >
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={path.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${path.buttonGradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                    >
                      {path.buttonText}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Quick Links Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Quick Navigation
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((link, index) => (
                <FadeIn key={link.title} delay={index * 0.1}>
                  <Link
                    href={link.href}
                    className="group block p-6 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-muted ${link.color}`}>
                        <link.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="text-center pb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full text-muted-foreground">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">More resources coming soon...</span>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
};

export default DocsPage;
