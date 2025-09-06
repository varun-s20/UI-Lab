// For Next.js, we'll use a different approach since fs operations don't work in the browser
// We'll create a mapping of component files to their content

const componentFileContents: Record<string, string> = {
  "components/PortfolioCarousel.tsx": `"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Strategy & Planning",
    category: "Brand Identity",
    imageUrl: "/api/placeholder/400/300",
    description: "Comprehensive brand strategy and planning services"
  },
  {
    id: 2,
    title: "Design & Development",
    category: "Digital Design",
    imageUrl: "/api/placeholder/400/300",
    description: "Creative design and development solutions"
  },
  {
    id: 3,
    title: "Launch & Growth",
    category: "Marketing",
    imageUrl: "/api/placeholder/400/300",
    description: "Strategic launch and growth campaigns"
  },
  {
    id: 4,
    title: "Ongoing Support",
    category: "Maintenance",
    imageUrl: "/api/placeholder/400/300",
    description: "Continuous support and optimization"
  },
  {
    id: 5,
    title: "Creative Direction",
    category: "Art Direction",
    imageUrl: "/api/placeholder/400/300",
    description: "Artistic direction and creative consulting"
  },
  {
    id: 6,
    title: "Brand Evolution",
    category: "Rebranding",
    imageUrl: "/api/placeholder/400/300",
    description: "Brand evolution and transformation"
  },
  {
    id: 7,
    title: "Digital Experience",
    category: "UX/UI",
    imageUrl: "/api/placeholder/400/300",
    description: "User experience and interface design"
  }
];

export function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = 320;
      const scrollPosition = index * itemWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
    setActiveIndex(index);
  };

  const nextItem = () => {
    const nextIndex = (activeIndex + 1) % portfolioItems.length;
    scrollToItem(nextIndex);
  };

  const prevItem = () => {
    const prevIndex = activeIndex === 0 ? portfolioItems.length - 1 : activeIndex - 1;
    scrollToItem(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextItem, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our diverse range of creative solutions and successful projects
        </p>
      </div>

      <div className="relative">
        <button
          onClick={prevItem}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>

        <button
          onClick={nextItem}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-blue-600" />
                      </div>
                      <p className="text-lg font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <Button className="w-full group-hover:bg-blue-600 transition-colors duration-200">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>

                <AnimatePresence>
                  {isHovered === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <div className="text-center text-white">
                        <Button variant="secondary" size="lg">
                          Learn More
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToItem(index)}
              className={\`w-3 h-3 rounded-full transition-all duration-200 \${
                index === activeIndex
                  ? 'bg-blue-600 scale-125'
                  : 'bg-blue-300 hover:bg-blue-400'
              }\`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}`,

  "components/NewsletterComponent.tsx": `"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  BookOpen,
  Users,
  TrendingUp,
} from "lucide-react";

export function NewsletterComponent() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white">
      <div className="flex">
        <div className="w-16 bg-blue-900 text-white flex flex-col items-center py-8">
          <div className="writing-mode-vertical text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium mb-4"
            >
              VOLUME 15
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs opacity-80"
            >
              NOVEMBER 2022
            </motion.div>
          </div>
        </div>

        <div className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="text-sm font-medium text-gray-600 mb-2">
              BUSINESS
            </div>
            <h1 className="text-6xl font-bold text-gray-900">NEWSLETTER</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden border border-gray-200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Users className="w-24 h-24 mx-auto mb-4 text-blue-600" />
                <p className="text-lg font-medium">Business Professionals</p>
                <p className="text-sm text-gray-500">
                  Collaborating around technology
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-blue-900 text-white p-8"
        >
          <h2 className="text-3xl font-bold mb-8">INSIDE THIS ISSUE</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                Todays business solutions in the era of globalization
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                The best business innovation in the digital era for millennials
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
              <p className="text-lg leading-relaxed">
                How to build a successful business in the modern world
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 p-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-blue-600">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">FEATURED ARTICLE</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              The Future of Business Technology
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Explore how emerging technologies are reshaping the business landscape
              and what companies need to do to stay competitive in the digital age.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="bg-white p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights, trends, and strategies delivered directly to
            your inbox. Join thousands of business professionals who trust us for
            their industry knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}`,

  "components/SignupForm.tsx": `"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { Label } from "@/components/ui/label";

export function SignupForm() {
  return (
    <div className="w-full max-w-6xl mx-auto border border-border rounded-xl overflow-hidden bg-card/40">
      <div className="grid md:grid-cols-2">
        <div className="hidden md:block p-8 border-r border-border bg-[radial-gradient(900px_380px_at_50%_-40%,_color-mix(in_oklab,_var(--color-primary)_32%,_transparent),_transparent)]">
          <div className="h-full rounded-2xl bg-black/30 p-8 flex flex-col justify-end backdrop-blur-sm">
            <FadeIn y={16} className="space-y-3 text-white/90">
              <div className="text-sm/relaxed text-white/70">OnlyPipe</div>
              <h2 className="text-3xl font-semibold">Get Started with Us</h2>
              <p className="text-white/70 max-w-sm">
                Complete these easy steps to register your account.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 bg-white/10 text-white/90 rounded-md p-3">
                  <span className="size-6 rounded-full bg-white/80 text-black text-xs grid place-items-center">
                    1
                  </span>
                  <span>Sign up your account</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 text-white/70 rounded-md p-3">
                  <span className="size-6 rounded-full bg-white/20 text-white text-xs grid place-items-center">
                    2
                  </span>
                  <span>Set up your workspace</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 text-white/70 rounded-md p-3">
                  <span className="size-6 rounded-full bg-white/20 text-white text-xs grid place-items-center">
                    3
                  </span>
                  <span>Set up your profile</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <FadeIn y={10} className="max-w-md ml-auto space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold">Sign Up Account</h3>
              <p className="text-sm text-muted-foreground">
                Enter your personal data to create your account.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                Google
              </Button>
              <Button variant="outline" className="w-full">
                Github
              </Button>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm">First Name</Label>
                  <input
                    type="text"
                    placeholder="eg. John"
                    className="w-full h-10 px-3 rounded-md bg-input/30 border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Last Name</Label>
                  <input
                    type="text"
                    placeholder="eg. Francisco"
                    className="w-full h-10 px-3 rounded-md bg-input/30 border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Email</Label>
                <input
                  type="email"
                  placeholder="eg. johnfrans@gmail.com"
                  className="w-full h-10 px-3 rounded-md bg-input/30 border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Password</Label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-10 px-3 rounded-md bg-input/30 border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Confirm Password</Label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full h-10 px-3 rounded-md bg-input/30 border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="#" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}`,
  "components/Buttons.tsx": `"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="flex flex-wrap gap-3 p-6">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
};

export default Buttons;`,

//   "components/AnimatedSubmitButton.tsx": `"use client";
// import React, { useState } from "react";
// import { motion, useAnimation } from "framer-motion";

// const AnimatedSubmitButton = () => {
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [showCheck, setShowCheck] = useState(false);

//   const buttonControls = useAnimation();
//   const progressControls = useAnimation();
//   const checkControls = useAnimation();

//   const runSequence = async () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setShowCheck(false);

//     await checkControls.start({
//       opacity: 0,
//       pathLength: 0,
//       transition: { duration: 0 },
//     });

//     await buttonControls.start({
//       height: 10,
//       width: 300,
//       borderRadius: 100,
//       transition: { duration: 1.3 },
//     });

//     await progressControls.start({
//       width: 300,
//       transition: { duration: 2, ease: "linear" },
//     });

//     await buttonControls.start({ width: 0, transition: { duration: 0.001 } });

//     await progressControls.start({
//       width: 80,
//       height: 80,
//       borderRadius: 80,
//       transition: { delay: 0.5, duration: 0.75 },
//     });

//     setShowCheck(true);
//     await checkControls.start({ opacity: 1, transition: { duration: 0.1 } });
//     await checkControls.start({
//       pathLength: 1,
//       transition: { duration: 0.2, ease: "easeInOut" },
//     });

//     await new Promise((r) => setTimeout(r, 800));

//     setShowCheck(false);
//     await progressControls.start({
//       width: 0,
//       height: 10,
//       borderRadius: 200,
//       transition: { duration: 0.2 },
//     });
//     await buttonControls.start({
//       height: 80,
//       width: 200,
//       borderRadius: 8,
//       transition: { duration: 0.2 },
//     });
//     setIsAnimating(false);
//   };

//   return (
//     <div className="relative h-20 w-[200px]">
//       <motion.div
//         className="button absolute inset-0 mx-auto cursor-pointer select-none"
//         style={{ background: "red", borderRadius: 8 }}
//         animate={buttonControls}
//         initial={{ height: 80, width: 200, borderRadius: 8, background: "red" }}
//         onClick={runSequence}
//       >
//         <motion.div
//           className="text absolute inset-0 grid place-items-center"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: isAnimating ? 0 : 1 }}
//           transition={{ duration: 0.1 }}
//         >
//           <span className="font-semibold text-base" style={{ color: "white" }}>
//             Submit
//           </span>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         className="progress-bar absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//         style={{ height: 10, width: 0, borderRadius: 200, background: "white" }}
//         animate={progressControls}
//         initial={{ width: 0, height: 10, borderRadius: 200 }}
//       />

//       {showCheck && (
//         <motion.svg
//           viewBox="0 0 25 30"
//           className="absolute left-1/2 top-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2"
//         >
//           <motion.path
//             d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"
//             fill="none"
//             stroke="yellow"
//             strokeWidth={4}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             initial={{ opacity: 0, pathLength: 0 }}
//             animate={checkControls}
//           />
//         </motion.svg>
//       )}
//     </div>
//   );
// };

// export default AnimatedSubmitButton;`,
//   "components/GooeyHoverButton.tsx": `"use client";
// import React, { useState } from "react";
// import { motion, useAnimationControls } from "framer-motion";

// const GooeyHoverButton = () => {
//   const [hovered, setHovered] = useState(false);
//   const tl1 = useAnimationControls();
//   const tl2 = useAnimationControls();
//   const eff = useAnimationControls();

//   const runBurst = async () => {
//     tl1.start(function(i){ return {
//       x: [0, -25, -25, -30, -40],
//       y: [0, -25, -25, -32, -20],
//       scale: i === 0 ? [1, 1, 0.2, 0.2, 0] : i === 1 ? [1, 1, 0.8, 0.4, 0] : [1, 1, 0.2, 0.2, 0],
//       opacity: [1, 1, 1, 1, 0],
//       transition: { duration: 1.8, times: [0, 0.25, 0.3, 0.8, 1] }
//     }; });

//     tl2.start(function(i){ return {
//       x: [0, 30, 36, 45, 55],
//       y: [0, 30, 36, 24, 15],
//       scale: i === 0 ? [1, 1, 0.2, 0.2, 0] : i === 1 ? [1, 1, 0.8, 0.6, 0] : [1, 1, 0.2, 0.2, 0],
//       opacity: [1, 1, 1, 1, 0],
//       transition: { duration: 1.6, times: [0, 0.25, 0.3, 0.8, 1] }
//     }; });

//     eff.start({ scaleY: [1, 1.1, 1], transition: { duration: 1.2, times: [0, 0.2, 1] } });
//   };

//   const onEnter = () => {
//     setHovered(true);
//     runBurst();
//   };
//   const onLeave = () => {
//     setHovered(false);
//     tl1.start({ x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 0.2 } });
//     tl2.start({ x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 0.2 } });
//     eff.start({ scaleY: 1, transition: { duration: 0.2 } });
//   };

//   const darkBlue = "#222";
//   const action = "#90feb5";

//   return (
//     <div className="relative grid place-items-center py-8">
//       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute w-px h-px opacity-0">
//         <defs>
//           <filter id="goo">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//             <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
//             <feComposite in="SourceGraphic" in2="goo"/>
//           </filter>
//         </defs>
//       </svg>

//       <span className="relative inline-block [filter:url(#goo)]">
//         <motion.button
//           type="button"
//           onHoverStart={onEnter}
//           onHoverEnd={onLeave}
//           animate={{ backgroundColor: hovered ? action : darkBlue, color: "#fff" }}
//           transition={{ duration: 0.1 }}
//           className="relative z-10 px-8 py-4 text-xs tracking-widest uppercase font-medium rounded-md"
//           style={{ backgroundColor: darkBlue, color: "#fff" }}
//         >
//           Hover me
//         </motion.button>

//         <span className="pointer-events-none absolute inset-0 -z-0 block">
//           {[0, 1, 2].map(function(i){ return (
//             <motion.span
//               key={"tl-" + i}
//               custom={i}
//               animate={tl1}
//               className="absolute rounded-full"
//               style={{ width: 25, height: 25, left: "27%", top: i === 0 ? "40%" : i === 1 ? "46%" : "50%", background: darkBlue, borderRadius: 15 }}
//             />
//           ); })}

//           <motion.span
//             className="absolute"
//             animate={eff}
//             style={{ width: "50%", height: "25%", top: "50%", left: "25%", transform: "translateY(-50%)", background: darkBlue, borderRadius: 8 }}
//           />

//           {[0, 1, 2].map(function(i){ return (
//             <motion.span
//               key={"br-" + i}
//               custom={i}
//               animate={tl2}
//               className="absolute rounded-full"
//               style={{ width: 25, height: 25, right: "27%", bottom: i === 0 ? "40%" : i === 1 ? "44%" : "38%", background: darkBlue, borderRadius: 15 }}
//             />
//           ); })}
//         </span>
//       </span>
//     </div>
//   );
// };

// export default GooeyHoverButton;`,
};

export async function loadComponentFile(filePath: string): Promise<string> {
  const content = componentFileContents[filePath];
  if (content) {
    return content;
  }
  return `// File not found: ${filePath}\n// Please check if the file exists and is accessible.`;
}

export async function loadComponentFiles(
  codeFiles: Array<{ path: string; content?: string; collapsed?: boolean }>
) {
  const loadedFiles = await Promise.all(
    codeFiles.map(async (file) => {
      if (!file.content) {
        const content = await loadComponentFile(file.path);
        return { ...file, content };
      }
      return file;
    })
  );

  return loadedFiles;
}
