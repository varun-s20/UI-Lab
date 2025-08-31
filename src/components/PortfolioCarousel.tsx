"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
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
    description: "Comprehensive brand strategy and planning services",
  },
  {
    id: 2,
    title: "Design & Development",
    category: "Digital Design",
    imageUrl: "/api/placeholder/400/300",
    description: "Creative design and development solutions",
  },
  {
    id: 3,
    title: "Launch & Growth",
    category: "Marketing",
    imageUrl: "/api/placeholder/400/300",
    description: "Strategic launch and growth campaigns",
  },
  {
    id: 4,
    title: "Ongoing Support",
    category: "Maintenance",
    imageUrl: "/api/placeholder/400/300",
    description: "Continuous support and optimization",
  },
  {
    id: 5,
    title: "Creative Direction",
    category: "Art Direction",
    imageUrl: "/api/placeholder/400/300",
    description: "Artistic direction and creative consulting",
  },
  {
    id: 6,
    title: "Brand Evolution",
    category: "Rebranding",
    imageUrl: "/api/placeholder/400/300",
    description: "Brand evolution and transformation",
  },
  {
    id: 7,
    title: "Digital Experience",
    category: "UX/UI",
    imageUrl: "/api/placeholder/400/300",
    description: "User experience and interface design",
  },
];

export function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const rotationValues = [0, -2, 1, 4, 0, -1, 3, -5, 2];

  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = 320; // Approximate item width including gap
      const scrollPosition = index * itemWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

  const nextItem = () => {
    const nextIndex = (activeIndex + 1) % (portfolioItems.length - 1);
    scrollToItem(nextIndex);
  };

  const prevItem = () => {
    const prevIndex =
      activeIndex === 0 ? portfolioItems.length - 1 - 1 : activeIndex - 1;
    scrollToItem(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextItem, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 rounded-xl bg-background border border-border">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-sm font-medium text-primary mb-3"
        >
          Behind the Designs
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 leading-tight"
        >
          Curious What Else
          <br />
          Ive Created?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8"
        >
          Explore more brand identities, packaging, and digital design work in
          my extended portfolio.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="group bg-background border-border hover:border-primary hover:bg-muted/50 transition-all duration-300"
          >
            <span className="mr-2">See more Projects</span>
            <motion.div
              className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-3 h-3 text-primary-foreground" />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>

      {/* Carousel Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className="flex justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8"
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={prevItem}
          className="w-10 h-10 p-0 rounded-full hover:bg-muted"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
        </Button>

        <div className="flex gap-2">
          {portfolioItems.slice(0, -1).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToItem(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextItem}
          className="w-10 h-10 p-0 rounded-full hover:bg-muted"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Carousel Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="relative"
      >
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 pb-8 px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: 50,
                rotate: rotationValues[index % rotationValues.length],
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              whileHover={{
                scale: 1.05,
                rotate: isHovered === index ? 0 : -2,
                z: 10,
              }}
              onHoverStart={() => setIsHovered(index)}
              onHoverEnd={() => setIsHovered(null)}
              className="flex-shrink-0 w-64 sm:w-72 lg:w-80 h-80 sm:h-88 lg:h-96 relative group cursor-pointer"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Image Container */}
              <motion.div
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border"
                style={{
                  transform: `rotate(${
                    rotationValues[index % rotationValues.length]
                  }deg)`,
                  transformOrigin: "center center",
                }}
                whileHover={{
                  rotate: 0,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-muted/50 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">
                        #{item.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>

              {/* Item Info */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.2 * index,
                }}
              >
                <div className="bg-background rounded-lg px-4 py-2 shadow-lg border border-border">
                  <div className="text-sm font-bold text-primary mb-1">
                    #{item.id.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {item.title}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default PortfolioCarousel;
