"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Server, Palette, Zap } from "lucide-react";
import Image from "next/image";
import { SkillsProps } from "@/type/types";

export default function Skills({ skillsData }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const categoryVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  // Map API skills to categories
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Palette,
      color: "from-blue-500 via-cyan-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-200/50",
      skills: skillsData.frontend,
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "from-purple-500 via-pink-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-200/50",
      skills: skillsData.backend,
    },
    {
      title: "Languages",
      icon: Zap,
      color: "from-orange-500 via-red-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-200/50",
      skills: skillsData.language,
    },
    {
      title: "Tools & Others",
      icon: Database,
      color: "from-green-500 via-emerald-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-200/50",
      skills: skillsData.tools,
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-blue-50/50 to-white dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-lobster">
            Technologies I Work With
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-32 h-1.5 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"
          />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-serif">
            Building exceptional digital experiences with modern technologies
            and frameworks
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            if (!category.skills || category.skills.length === 0) return null; // skip empty categories

            return (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className={`relative group rounded-3xl p-8 backdrop-blur-sm border ${category.borderColor} ${category.bgColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-4 rounded-2xl bg-linear-to-r ${category.color} shadow-lg`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-lobster">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-4 h-0.5 bg-linear-to-r from-transparent via-current to-transparent opacity-60" />
                      <span className="text-sm text-gray-500 font-serif dark:text-gray-400">
                        {category.skills.length} technologies
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
                    >
                      {skill.icon && (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="mb-3 w-10 h-10 object-contain"
                        />
                      )}
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight font-serif">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
