"use client";
import { ComponentProps, PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}> &
  ComponentProps<typeof motion.div>;

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 12,
  duration = 0.5,
  once = true,
  ...rest
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <motion.div className={className} {...rest}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
