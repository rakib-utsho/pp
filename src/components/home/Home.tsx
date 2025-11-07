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
import { useGetPortfolioQuery } from "@/redux/api/service/serviceApi";
import { PortfolioData } from "@/type/types";
import Loading from "../Others/Loader/Loading";

// Default data structure
const defaultPortfolioData: PortfolioData = {
  profile: {
    name: "Md. Rakibul Islam",
    title: "Full Stack Developer",
    bio: "Building modern full stack web applications with React and Node.js",
    location: "Dhaka, Bangladesh",
    profileImage: "",
    cv: "",
  },
  education: [],
  skills: {
    frontend: [],
    backend: [],
    language: [],
    tools: [],
  },
  experience: [],
  projects: [],
  extraActivities: [],
  socialLinks: {
    facebookUrl: "",
    githubUrl: "",
    linkedInUrl: "",
    mediumUrl: "",
  },
};

function Home() {
  const { data: portfolioData, isLoading } = useGetPortfolioQuery("");

  const portfolio: PortfolioData = portfolioData?.data || defaultPortfolioData;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen mx-auto">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] transition-colors duration-300">
      <HeroSection profileData={portfolio.profile} />
      <About educationData={portfolio.education} />
      <Skills skillsData={portfolio.skills} />
      <Experience experienceData={portfolio.experience} />
      <Services />
      <Projects projectsData={portfolio.projects} />
      <Activities activitiesData={portfolio.extraActivities} />
      <Contact socialLinks={portfolio.socialLinks} />
    </div>
  );
}

export default Home;
