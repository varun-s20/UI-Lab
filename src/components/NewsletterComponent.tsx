"use client";

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
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <div className="w-full lg:w-16 bg-blue-900 text-white flex flex-row lg:flex-col items-center justify-center lg:justify-start py-4 lg:py-8">
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

        {/* Main Header */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 lg:mb-8"
          >
            <div className="text-sm font-medium text-gray-600 mb-2">
              BUSINESS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900">
              NEWSLETTER
            </h1>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-48 sm:h-64 lg:h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden border border-gray-200"
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

      {/* Mid-Page Content Section */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left Column - Inside This Issue */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-blue-900 text-white p-4 sm:p-6 lg:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 lg:mb-8">
            INSIDE THIS ISSUE
          </h2>
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
                Business strategy to compete with competitors for beginners
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Article Previews */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8"
        >
          {/* First Article */}
          <article className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              The best business innovation in the digital era for millennials
            </h3>
            <div className="h-32 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <TrendingUp className="w-12 h-12 mx-auto mb-2 text-green-600" />
                <p className="text-sm">Digital Innovation</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              venenatis, leo quis dictum varius, tellus lectus eleifend mauris,
              at vehicula purus sem sit amet sapi
            </p>
          </article>

          {/* Second Article */}
          <article className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              Business strategy to compete with competitors for beginners
            </h3>
            <div className="h-32 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <BookOpen className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                <p className="text-sm">Strategy Planning</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              venenatis, leo quis dictum varius, tellus lectus eleifend mauris,
              at vehicula purus sem sit amet sapi
            </p>
          </article>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 border-b lg:border-r lg:border-b-0 border-gray-200 flex items-center justify-center"
        >
          <div className="text-center text-gray-600">
            <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
            <p className="text-lg font-medium">Professional Profile</p>
            <p className="text-sm text-gray-500">Confident business leader</p>
          </div>
        </motion.div>

        {/* Right Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-blue-900 text-white p-4 sm:p-6 lg:p-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 lg:mb-6">
            Todays business solutions in the era of globalization
          </h2>
          <p className="text-lg leading-relaxed text-blue-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Mauris
            venenatis, leo quis dictum varius, tellus lectus eleifend mouris, at
            vehicula purus sem sit amet sapien Suspendisse finibus lectus po.
            olt Lorem ipsum dolor sit amet, consectetur adipiscing elit Mauris
            venenatis, leo quis dictum varius, tellus lectus eleifend mauris, at
            vehicula purus sem sit amet sapien. Sus.
          </p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6"
          >
            <Button className="bg-white text-blue-900 hover:bg-gray-100">
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default NewsletterComponent;
