'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'from-blue-500 to-cyan-500',
    live: '#',
    github: '#',
  },
  {
    title: 'Task Management System',
    description:
      'Collaborative task management tool with real-time updates, team workspaces, and project tracking capabilities.',
    tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
    image: 'from-purple-500 to-pink-500',
    live: '#',
    github: '#',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media metrics with data visualization, scheduled posting, and engagement tracking.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Chart.js'],
    image: 'from-green-500 to-emerald-500',
    live: '#',
    github: '#',
  },
  {
    title: 'Real Estate Portal',
    description:
      'Property listing platform with advanced search filters, virtual tours, and appointment scheduling system.',
    tech: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    image: 'from-orange-500 to-red-500',
    live: '#',
    github: '#',
  },
  {
    title: 'Learning Management System',
    description:
      'Online education platform with course management, video streaming, quizzes, and progress tracking.',
    tech: ['Next.js', 'Go', 'PostgreSQL', 'AWS S3'],
    image: 'from-yellow-500 to-orange-500',
    live: '#',
    github: '#',
  },
  {
    title: 'Weather Application',
    description:
      'Real-time weather app with location-based forecasts, weather alerts, and interactive maps.',
    tech: ['React', 'Tailwind', 'OpenWeather API', 'Mapbox'],
    image: 'from-cyan-500 to-blue-500',
    live: '#',
    github: '#',
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-6 sm:px-10 bg-linear-to-b from-slate-50 via-white to-blue-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden"
    >
      {/* Decorative Glow Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-linear-to-r from-purple-500/20 to-blue-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-linear-to-tl from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Some of my recent work combining creativity, technology, and precision.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotateX: 2,
                rotateY: -2,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative overflow-hidden rounded-3xl p-px bg-linear-to-br from-purple-500/20 via-blue-500/20 to-transparent hover:from-purple-500/50 hover:via-blue-500/50 transition-all duration-500"
            >
              <div className="relative h-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 group-hover:shadow-2xl">
                {/* Image Placeholder */}
                <div
                  className={`h-48 w-full rounded-xl bg-linear-to-br ${project.image} relative overflow-hidden mb-6`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Code2 className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-purple-500 hover:text-purple-500 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>

                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
