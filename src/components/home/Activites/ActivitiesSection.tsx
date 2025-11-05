'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen } from 'lucide-react';

const activities = [
  {
    title: 'Led University Tech Workshop',
    description:
      'Organized and conducted a workshop on modern web development for 50+ students at BUBT.',
    icon: BookOpen,
    year: '2023',
  },
  {
    title: 'Open Source Contributions',
    description:
      'Active contributor to various open-source projects on GitHub, focusing on React ecosystem.',
    icon: BookOpen,
    year: '2024',
  },
  {
    title: 'Tech Community Volunteer',
    description:
      'Regular participant and volunteer at local tech meetups and developer communities in Dhaka.',
    icon: BookOpen,
    year: 'Ongoing',
  },
];

export default function Activities() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  return (
    <section
      id="activities"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Extra Curricular Activities
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Sharing my experiences and community contributions
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative rounded-3xl p-6 bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500 rounded-xl shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-purple-500 mb-2">
                      {activity.year}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {activity.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-3xl pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
