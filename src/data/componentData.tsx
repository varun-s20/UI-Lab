import React from "react";
import { SignupForm } from "../components/SignupForm";
import { PortfolioCarousel } from "../components/PortfolioCarousel";
import { NewsletterComponent } from "../components/NewsletterComponent";
import Buttons from "@/components/Buttons";
// import AnimatedSubmitButton from "@/components/AnimatedSubmitButton";
// import GooeyHoverButton from "@/components/GooeyHoverButton";

// Types for structured documentation
type InstallStep = {
  title: string;
  description?: string;
  code?: string;
  filePath?: string;
};

type InstallTab = { id: string; label: string; steps: InstallStep[] };
type CodeFile = { path: string; content?: string; collapsed?: boolean };
type PropRow = { prop: string; type: string; description: string };
type PropsTable = { title: string; rows: PropRow[] };

export type ComponentDoc = {
  title: string;
  category: string;
  description: string;
  preview: React.ReactNode;
  installation?: string;
  usage?: string;
  installTabs?: InstallTab[];
  codeFiles?: CodeFile[];
  props?: PropsTable[];
};

export const componentData: Record<string, ComponentDoc> = {
  carousel: {
    title: "Carousel",
    category: "Media",
    description:
      "Interactive portfolio carousel with tilted overlapping images and smooth animations.",
    preview: (
      <div className="p-6">
        <PortfolioCarousel />
      </div>
    ),
    installTabs: [
      {
        id: "dependencies",
        label: "Dependencies",
        steps: [
          {
            title: "Install shadcn/ui components",
            code: "npx shadcn@latest add button",
            description:
              "Install the button component that will be used in this component.",
          },
          {
            title: "Install additional libraries",
            code: "npm install framer-motion lucide-react",
            description:
              "Install framer-motion for animations and lucide-react for icons.",
          },
        ],
      },
      {
        id: "utils",
        label: "Utils Setup",
        steps: [
          {
            title: "Add utils file",
            description:
              "Ensure you have the utils file with the cn function for class merging.",
            filePath: "lib/utils.ts",
          },
        ],
      },
      {
        id: "project",
        label: "Project Setup",
        steps: [
          {
            title: "Configure Tailwind CSS",
            description:
              "Ensure Tailwind CSS is properly configured in your project.",
            filePath: "tailwind.config.ts",
          },
          {
            title: "Set up TypeScript",
            description: "Configure TypeScript for proper type checking.",
            filePath: "tsconfig.json",
          },
        ],
      },
      {
        id: "component",
        label: "Component Code",
        steps: [
          {
            title: "Copy component file",
            description:
              "Copy the PortfolioCarousel component to your components directory.",
            filePath: "components/PortfolioCarousel.tsx",
          },
        ],
      },
    ],
    codeFiles: [
      {
        path: "components/PortfolioCarousel.tsx",
        collapsed: true,
      },
    ],
    props: [
      {
        title: "Component Props",
        rows: [
          {
            prop: "None",
            type: "-",
            description:
              "This component doesn't accept any props. It's self-contained with built-in data and functionality.",
          },
        ],
      },
    ],
  },
  newsletter: {
    title: "Newsletter",
    category: "Marketing",
    description:
      "Professional newsletter layout with business-focused design and smooth animations.",
    preview: (
      <div className="p-6">
        <NewsletterComponent />
      </div>
    ),
    installTabs: [
      {
        id: "dependencies",
        label: "Dependencies",
        steps: [
          {
            title: "Install shadcn/ui components",
            code: "npx shadcn@latest add button",
            description:
              "Install the button component that will be used in this component.",
          },
          {
            title: "Install additional libraries",
            code: "npm install framer-motion lucide-react",
            description:
              "Install framer-motion for animations and lucide-react for icons.",
          },
        ],
      },
      {
        id: "utils",
        label: "Utils Setup",
        steps: [
          {
            title: "Add utils file",
            description:
              "Ensure you have the utils file with the cn function for class merging.",
            filePath: "lib/utils.ts",
          },
        ],
      },
      {
        id: "project",
        label: "Project Setup",
        steps: [
          {
            title: "Configure Tailwind CSS",
            description:
              "Ensure Tailwind CSS is properly configured in your project.",
            filePath: "tailwind.config.ts",
          },
          {
            title: "Set up TypeScript",
            description: "Configure TypeScript for proper type checking.",
            filePath: "tsconfig.json",
          },
        ],
      },
      {
        id: "component",
        label: "Component Code",
        steps: [
          {
            title: "Copy component file",
            description:
              "Copy the NewsletterComponent to your components directory.",
            filePath: "components/NewsletterComponent.tsx",
          },
        ],
      },
    ],
    codeFiles: [
      {
        path: "components/NewsletterComponent.tsx",
        collapsed: true,
      },
    ],
    props: [
      {
        title: "Component Props",
        rows: [
          {
            prop: "None",
            type: "-",
            description:
              "This component doesn't accept any props. It's self-contained with built-in content and styling.",
          },
        ],
      },
    ],
  },
  forms: {
    title: "Signup Form",
    category: "Forms",
    description:
      "Modern signup form with social login options and beautiful gradient design.",
    preview: (
      <div className="p-6">
        <SignupForm />
      </div>
    ),
    installTabs: [
      {
        id: "dependencies",
        label: "Dependencies",
        steps: [
          {
            title: "Install shadcn/ui components",
            code: "npx shadcn@latest add button label",
            description:
              "Install the button and label components that will be used in this component.",
          },
          {
            title: "Install additional libraries",
            code: "npm install framer-motion lucide-react",
            description:
              "Install framer-motion for animations and lucide-react for icons.",
          },
        ],
      },
      {
        id: "utils",
        label: "Utils Setup",
        steps: [
          {
            title: "Add utils file",
            description:
              "Ensure you have the utils file with the cn function for class merging.",
            filePath: "lib/utils.ts",
          },
        ],
      },
      {
        id: "project",
        label: "Project Setup",
        steps: [
          {
            title: "Configure Tailwind CSS",
            description:
              "Ensure Tailwind CSS is properly configured in your project.",
            filePath: "tailwind.config.ts",
          },
          {
            title: "Set up TypeScript",
            description: "Configure TypeScript for proper type checking.",
            filePath: "tsconfig.json",
          },
        ],
      },
      {
        id: "component",
        label: "Component Code",
        steps: [
          {
            title: "Copy component file",
            description:
              "Copy the SignupForm component to your components directory.",
            filePath: "components/SignupForm.tsx",
          },
        ],
      },
    ],
    codeFiles: [
      {
        path: "components/SignupForm.tsx",
        collapsed: true,
      },
    ],
    props: [
      {
        title: "Component Props",
        rows: [
          {
            prop: "None",
            type: "-",
            description:
              "This component doesn't accept any props. It's self-contained with built-in form fields and styling.",
          },
        ],
      },
    ],
  },
  buttons: {
    title: "Buttons (General)",
    category: "Buttons",
    description:
      "Beautiful buttons with smooth animations and customizable styles. Each button has its own container with individual copy functionality.",
    preview: (
      <div className="p-6">
        <Buttons />
      </div>
    ),
    installTabs: [
      {
        id: "dependencies",
        label: "Dependencies",
        steps: [
          {
            title: "Install shadcn/ui button",
            code: "npx shadcn@latest add button",
            description:
              "Installs the Button primitive used by these examples.",
          },
          {
            title: "Install lucide-react for icons",
            code: "npm install lucide-react",
            description: "Installs lucide-react for copy and check icons.",
          },
        ],
      },
      {
        id: "component",
        label: "Component Code",
        steps: [
          {
            title: "Copy component file",
            description: "Copy the Buttons showcase component to your project.",
            filePath: "components/Buttons.tsx",
          },
        ],
      },
    ],
    codeFiles: [
      {
        path: "components/Buttons.tsx",
        collapsed: false,
      },
    ],
    props: [
      {
        title: "ButtonContainer Props",
        rows: [
          {
            prop: "children",
            type: "React.ReactNode",
            description:
              "The button component to be displayed inside the container.",
          },
          {
            prop: "buttonCode",
            type: "string",
            description:
              "The code snippet that will be copied when the copy button is clicked.",
          },
        ],
      },
    ],
  },
  // "buttons-animated-submit": {
  //   title: "Animated Submit Button",
  //   category: "Buttons",
  //   description:
  //     "Interactive submit button with progress and success check animation.",
  //   preview: (
  //     <div className="p-6">
  //       <AnimatedSubmitButton />
  //     </div>
  //   ),
  //   installTabs: [
  //     {
  //       id: "dependencies",
  //       label: "Dependencies",
  //       steps: [
  //         {
  //           title: "Install framer-motion",
  //           code: "npm install framer-motion",
  //           description:
  //             "Used to power the timeline-like animations without jQuery.",
  //         },
  //       ],
  //     },
  //     {
  //       id: "component",
  //       label: "Component Code",
  //       steps: [
  //         {
  //           title: "Copy component file",
  //           description:
  //             "Copy the AnimatedSubmitButton component to your project.",
  //           filePath: "components/AnimatedSubmitButton.tsx",
  //         },
  //       ],
  //     },
  //   ],
  //   codeFiles: [
  //     { path: "components/AnimatedSubmitButton.tsx", collapsed: false },
  //   ],
  // },
  // "buttons-gooey": {
  //   title: "Gooey Hover Button",
  //   category: "Buttons",
  //   description: "Playful gooey hover effect button.",
  //   preview: (
  //     <div className="p-6">
  //       <GooeyHoverButton />
  //     </div>
  //   ),
  //   installTabs: [
  //     {
  //       id: "dependencies",
  //       label: "Dependencies",
  //       steps: [
  //         {
  //           title: "Install framer-motion",
  //           code: "npm install framer-motion",
  //           description: "Used to power the effect animations without jQuery.",
  //         },
  //       ],
  //     },
  //     {
  //       id: "component",
  //       label: "Component Code",
  //       steps: [
  //         {
  //           title: "Copy component file",
  //           description: "Copy the GooeyHoverButton component to your project.",
  //           filePath: "components/GooeyHoverButton.tsx",
  //         },
  //       ],
  //     },
  //   ],
  //   codeFiles: [{ path: "components/GooeyHoverButton.tsx", collapsed: false }],
  // },
};
