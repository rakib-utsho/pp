'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Smartphone,
  Zap,
  Palette,
  Database,
  Cloud,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Building scalable, maintainable full-stack web applications using React, Next.js, Node.js, and MongoDB. Designed for performance and reliability.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Frontend Engineering',
    description:
      'Crafting stunning, responsive user interfaces with Next.js and Tailwind CSS. Focused on pixel-perfect detail and high accessibility.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description:
      'Designing efficient APIs and database systems with Node.js, Express, and Go. Delivering fast, secure, and modular backend solutions.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Enhancing site performance, reducing load times, and boosting Lighthouse and Core Web Vitals for a smoother experience.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Creating mobile-first, fluid layouts that adapt perfectly across devices. Seamless user experience from phone to desktop.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & Deployment',
    description:
      'Deploying applications on Vercel, AWS, and DigitalOcean with CI/CD pipelines for seamless scaling and automation.',
    color: 'from-indigo-500 to-blue-500',
  },
];

export default function Services() {
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
      id="services"
      ref={ref}
      className="relative py-24 px-6 sm:px-10 bg-linear-to-b from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-linear-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-linear-to-tl from-blue-500/20 to-cyan-500/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-linear-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20 dark:border-purple-400/10 mb-4">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-purple-600 dark:text-purple-300 font-semibold tracking-wide">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Combining creativity, technology, and precision to deliver
            exceptional digital solutions for modern businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03, rotateX: 2, rotateY: -2 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative overflow-hidden rounded-3xl p-px bg-linear-to-br from-purple-500/30 via-blue-500/30 to-transparent hover:from-purple-500/60 hover:via-blue-500/60 transition-all duration-500"
              >
                <div className="relative h-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 group-hover:shadow-2xl">
                  <div className="flex flex-col">
                    <div
                      className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-linear-to-r ${service.color} mb-6 transform group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="mt-6 flex items-center text-purple-600 dark:text-purple-400 font-semibold text-sm"
                  >
                    <span>Learn More</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl bg-linear-to-br from-purple-500/20 to-blue-500/20" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
