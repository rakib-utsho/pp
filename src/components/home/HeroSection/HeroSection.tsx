/* eslint-disable react-hooks/purity */

"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Code,
  Terminal,
  Cpu,
  Cloud,
  BrainCircuit,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import profileImg from "@/asset/profile.jpg";
import { HeroProps } from "@/type/types";

export default function Hero({ profileData }: HeroProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const fullText = profileData?.title || "Full Stack Developer";

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Handle CV download
  const handleDownloadCV = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!profileData?.cv) {
      console.error("CV URL not available");
      return;
    }

    try {
      // Convert Cloudinary preview URL → forced download URL
      const downloadUrl = profileData.cv.replace(
        "/upload/",
        "/upload/fl_attachment/"
      );

      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Md_Rakibul_Islam-Resume.pdf"; // rename here
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Reset animation when profileData changes
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setImageError(false);
  }, [profileData]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-blue-50/50 to-white dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 20 }}
            animate={{ y: "100vh", opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute text-lg text-blue-800/30 dark:text-purple-400/30 font-mono"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Code className="w-5 h-5" />
                <h2 className="text-lg md:text-xl font-medium font-lobster">
                  Hello, I&rsquo;m
                </h2>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-rowdies text-gray-900 dark:text-white">
                {profileData?.name || "Md. Rakibul Islam"}
              </h1>
              <div className="flex items-center gap-2 text-2xl md:text-3xl bg-linear-to-r from-blue-800 to-purple-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent font-semibold min-h-10 font-lobster">
                <Terminal className="w-6 h-6 text-black dark:text-white font-antic" />
                <span>{displayedText}</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1 text-black dark:text-white"
                >
                  |
                </motion.span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span className="font-serif">
                  {profileData?.location || "Dhaka, Bangladesh"}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-serif">
                {profileData?.bio ||
                  "Building modern full stack web applications with React and Node.js"}
              </p>

              {/* Tech Stack */}
              <div className="flex gap-3 flex-wrap">
                {["React", "Node.js", "MongoDB", "TypeScript", "Go"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-purple-900/30 text-blue-700 dark:text-purple-300 rounded-full text-sm font-medium border border-blue-200 dark:border-purple-700/50 font-rowdies"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={scrollToContact}
                className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center font-serif cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 inline-block mr-2" />
                Hire Me
              </motion.button>

              {/* Try both approaches - you can choose one */}
              <motion.button
                onClick={handleDownloadCV}
                className="px-8 py-3 border-2 border-blue-600 dark:border-purple-400 text-blue-600 dark:text-purple-400 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center font-serif cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 inline-block mr-2" />
                Download CV
              </motion.button>

              {/* Alternative: Open in new tab */}
              {/* <motion.a
                href={profileData?.cv || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-600 dark:border-purple-400 text-blue-600 dark:text-purple-400 rounded-full font-semibold hover:bg-blue-600 dark:hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center font-serif"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 inline-block mr-2" />
                View CV
              </motion.a> */}
            </div>
          </motion.div>

          {/* Right Image + Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative py-10"
          >
            <div className="relative w-60 h-60 md:w-96 md:h-96">
              {/* Profile Image */}
              <div className="w-full h-full rounded-full border-4 border-blue-500/40 dark:border-purple-500/40 flex items-center justify-center overflow-hidden shadow-xl bg-white dark:bg-gray-900">
                <Image
                  src={
                    imageError || !profileData?.profileImage
                      ? profileImg
                      : profileData.profileImage
                  }
                  alt={profileData?.name || "Profile"}
                  width={600}
                  height={600}
                  className="rounded-full object-cover"
                  onError={handleImageError}
                  priority
                />
              </div>

              {/* Surrounding Icons */}
              <motion.div
                className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Cpu className="w-8 h-8 text-blue-600 dark:text-purple-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-serif">
                  Backend
                </span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-12 -translate-y-1/2 flex flex-col items-center"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Terminal className="w-8 h-8 text-blue-600 dark:text-purple-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-serif">
                  Frontend
                </span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 -translate-y-1/2 flex flex-col items-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Cloud className="w-8 h-8 text-blue-600 dark:text-purple-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-serif">
                  Deployment
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <BrainCircuit className="w-8 h-8 text-blue-600 dark:text-purple-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300 font-serif">
                  Projects
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
