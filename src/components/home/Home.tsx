"use client";
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import About from "./AboutSection/AboutSection";
import Skills from "./SkillSection/SkillSection";
import Experience from "./ExperienceSection/ExperienceSection";
import Services from "./ServiceSection/ServiceSection";
import Projects from "./Projects/ProjectsSection";
import Activities from "./Activites/ActivitiesSection";
import Contact from "./ContactSection/ContactSection";

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] transition-colors duration-300">
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Activities />
      <Contact />
    </div>
  );
}

export default Home;
