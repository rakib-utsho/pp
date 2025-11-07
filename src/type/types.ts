/* eslint-disable @typescript-eslint/no-explicit-any */
// types.ts

export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  profileImage: string;
  cv: string;
}

export interface Education {
  _id: string;
  degree: string;
  institution: string;
  duration: string;
}

export interface Skill {
  _id: string;
  name: string;
  icon: string;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  language: Skill[];
  tools: Skill[];
}

export interface Experience {
  location: string;
  _id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  skills: string[];
}

export interface Project {
  tech: any;
  _id: string;
  title: string;
  techStack: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
}

export interface Activity {
  _id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface SocialLinks {
  facebookUrl: string;
  githubUrl: string;
  linkedInUrl: string;
  mediumUrl: string;
}

export interface PortfolioData {
  profile: Profile;
  education: Education[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  extraActivities: Activity[];
  socialLinks: SocialLinks;
}

// Props for components
export interface HeroProps {
  profileData: Profile;
}

export interface AboutProps {
  educationData: Education[];
}

export interface SkillsProps {
  skillsData: Skills;
}

export interface ExperienceProps {
  experienceData: Experience[];
}

export interface ServicesProps {
  servicesData: any[];
}

export interface ProjectsProps {
  projectsData: Project[];
}

export interface ActivitiesProps {
  activitiesData: Activity[];
}

export interface SocialLinksProps {
  socialLinks: SocialLinks;
}
