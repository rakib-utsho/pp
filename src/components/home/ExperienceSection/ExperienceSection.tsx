"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ExperienceProps } from "@/type/types";

export default function Experience({ experienceData }: ExperienceProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
    hover: { y: -6, scale: 1.02, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
  };

  if (!experienceData || experienceData.length === 0) {
    return (
      <section id="experience" className="py-24 text-center">
        <p className="text-gray-500 dark:text-gray-400 font-serif">No experience data available.</p>
      </section>
    );
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 px-6 sm:px-8 bg-linear-to-br from-white via-blue-50/50 to-white dark:from-purple-950/20 dark:via-slate-950 dark:to-purple-950/20 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center relative z-10 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-lobster">My Experience</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-serif">
          A journey through innovation, growth, and building impactful digital experiences.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-linear-to-b from-purple-500/30 via-blue-500/20 to-transparent rounded-full -translate-x-1/2" />

        <div className="space-y-20 font-serif">
          {experienceData.map((exp, i) => (
            <motion.div
              key={exp._id}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className={`relative flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-linear-to-r from-purple-500 to-blue-500 transform -translate-x-1/2 shadow-lg ring-4 ring-white/70 dark:ring-slate-900/70" />

              {/* Experience Card */}
              <div
                className={`w-full md:w-5/12 p-8 rounded-3xl relative border border-white/20 dark:border-slate-700/40 backdrop-blur-xl bg-linear-to-br from-white/60 via-white/30 to-transparent dark:from-slate-800/70 dark:via-slate-800/40 hover:bg-white/70 dark:hover:bg-slate-800/80 transition-all duration-500`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-linear-to-r from-purple-500 to-blue-500 shadow-md">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-lobster">
                      {exp.position}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium font-serif">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Location & Date */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2 font-antic">
                    <MapPin className="w-4 h-4" />
                    {exp.location || "Dhaka, Bangladesh"}
                  </div>
                  <div className="flex items-center gap-2 font-antic">
                    <Calendar className="w-4 h-4" />
                    {exp.duration || "N/A"}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6">{exp.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap justify-start gap-2">
                  {exp.skills?.map((skill, k) => (
                    <span
                      key={k}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
