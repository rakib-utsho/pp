/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Server,
  Palette,
  Users,
  Sparkles,
  Cpu,
  Globe,
  Zap,
} from "lucide-react";
import css from "@/asset/images/CSS3.png";
import express from "@/asset/images/expressjs.png";
import firebase from "@/asset/images/firebase.png";
import golang from "@/asset/images/golang.png";
import html from "@/asset/images/HTML5.png";
import javascript from "@/asset/images/javascript.png";
import mongoDb from "@/asset/images/mongodb.png";
import mysql from "@/asset/images/mysql.png";
import nextjs from "@/asset/images/nextjs.png";
import nodejs from "@/asset/images/nodejs.png";
import postql from "@/asset/images/Postgresql.png";
import react from "@/asset/images/react.png";
import tailwind from "@/asset/images/tailwind.png";
import typescript from "@/asset/images/typescript.png";
import Image from "next/image";

import agile from "@/asset/images/core-competencies/agile.png";
import api from "@/asset/images/core-competencies/api.png";
import system from "@/asset/images/core-competencies/system.png";
import code from "@/asset/images/core-competencies/code.png";
import leader from "@/asset/images/core-competencies/leadership.png";
import performance from "@/asset/images/core-competencies/perform.png";

const techLogos = {
  reactImg: react,
  nextjs: nextjs,
  typescript: typescript,
  tailwind: tailwind,
  javascript: javascript,
  html: html,
  css: css,
  nodejs: nodejs,
  express: express,
  golang: golang,
  mongodb: mongoDb,
  postgresql: postql,
  mysql: mysql,
  firebase: firebase,
};

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Palette,
    color: "from-blue-500 via-cyan-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-200/50",
    skills: [
      { name: "React", logo: techLogos.reactImg },
      { name: "Next.js", logo: techLogos.nextjs },
      { name: "TypeScript", logo: techLogos.typescript },
      { name: "Tailwind CSS", logo: techLogos.tailwind },
      { name: "JavaScript", logo: techLogos.javascript },
      { name: "HTML5", logo: techLogos.html },
      { name: "CSS3", logo: techLogos.css },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "from-purple-500 via-pink-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-200/50",
    skills: [
      { name: "Node.js", logo: techLogos.nodejs },
      { name: "Express.js", logo: techLogos.express },
      { name: "Go", logo: techLogos.golang },
      { name: "REST APIs", logo: api },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "from-green-500 via-emerald-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-200/50",
    skills: [
      { name: "MongoDB", logo: techLogos.mongodb },
      { name: "PostgreSQL", logo: techLogos.postgresql },
      { name: "MySQL", logo: techLogos.mysql },
      { name: "Firebase", logo: techLogos.firebase },
    ],
  },
  {
    title: "Core Competencies",
    icon: Zap,
    color: "from-orange-500 via-red-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-200/50",
    skills: [
      { name: "System Architecture", logo: system },
      { name: "Performance Optimization", logo: performance },
      { name: "Code Quality", logo: code },
      { name: "Team Leadership", logo: leader },
      { name: "Agile Development", logo: agile },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1] as const, // ✅ fixed
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1] as const, // ✅ fixed
      },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-blue-50/50 to-white dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/5 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="p-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-4 py-2 rounded-full font-rowdies">
              Tech Stack
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-lobster">
            Technologies I{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work With
            </span>
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
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative group rounded-3xl p-8 backdrop-blur-sm border ${category.borderColor} ${category.bgColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

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

                {/* Skills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300 group/skill ${
                        skill.logo
                          ? "hover:border-blue-300/50 dark:hover:border-blue-500/30"
                          : "hover:border-purple-300/50 dark:hover:border-purple-500/30"
                      }`}
                    >
                      {skill.logo ? (
                        <>
                          <div className="relative mb-3">
                            <div className="w-14 h-14 flex items-center justify-center bg-linear-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-sm group-hover/skill:shadow-md transition-all duration-300">
                              <Image
                                src={skill.logo}
                                alt={skill.name}
                                width={32}
                                height={32}
                                className="w-8 h-8 object-contain transition-all duration-300 group-hover/skill:scale-110"
                              />

                              <div className="hidden w-8 h-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500 items-center justify-center text-white text-xs font-bold font">
                                {skill.name.charAt(0)}
                              </div>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="absolute -top-1 -right-1 w-4 h-4 bg-linear-to-r from-green-400 to-green-500 rounded-full border-2 border-white dark:border-slate-800 shadow-sm"
                            />
                          </div>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight font-serif">
                            {skill.name}
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="w-14 h-14 mb-3 rounded-2xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-sm group-hover/skill:shadow-md transition-all duration-300">
                            <Sparkles className="w-7 h-7 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
                            {skill.name}
                          </span>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: categoryIndex * 0.5,
                  }}
                  className={`absolute top-4 right-4 w-3 h-3 bg-linear-to-r ${category.color} rounded-full opacity-30`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-serif">
            Continuously learning and adapting to new technologies
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-serif"
          >
            <Zap className="w-5 h-5" />
            <span>Always Exploring New Tech</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
