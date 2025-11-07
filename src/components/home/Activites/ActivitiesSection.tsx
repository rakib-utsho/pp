"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ActivitiesProps } from "@/type/types";

export default function Activities({ activitiesData }: ActivitiesProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  if (!activitiesData || activitiesData.length === 0) {
    return (
      <section
        id="activities"
        className="py-20 px-4 text-center font-serif"
      >
        <p className="text-gray-500 dark:text-gray-400">
          No activities available.
        </p>
      </section>
    );
  }

  return (
    <section
      id="activities"
      ref={ref}
      className="py-20 px-4 relative sm:px-6 lg:px-8 bg-linear-to-br from-white via-blue-50/50 to-white dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950 overflow-hidden h-[65vh]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-lobster">
            Extra Curricular Activities
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 font-serif">
            Sharing my experiences and community contributions
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {activitiesData.map((activity, index) => (
            <motion.div
              key={activity._id || index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative rounded-3xl p-6 bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Activity Image */}
                {activity.image && (
                  <div className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  {/* <div className="text-sm font-semibold text-purple-500 mb-2 font-antic">
                    {activity.year}
                  </div> */}
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-serif">
                    {activity.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-antic">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
