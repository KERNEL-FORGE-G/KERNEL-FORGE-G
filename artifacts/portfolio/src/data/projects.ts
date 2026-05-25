export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  teamMemberIds: string[];
  githubUrl?: string;
  demoUrl?: string;
}

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

export const projects: Project[] = [
  {
    id: "edusmart",
    title: "EduSmart Cameroun",
    shortDescription: "A comprehensive school management system tailored for the local education system.",
    fullDescription: "EduSmart transforms how schools in Cameroon operate. From student registrations to grading and parent communication, it digitizes every aspect of school administration, reducing paperwork and improving transparency.",
    image: project1,
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Docker"],
    features: [
      "Automated student enrollment and tracking",
      "Digital gradebook and transcript generation",
      "Real-time SMS notifications for parents",
      "Financial module for tuition fee management"
    ],
    teamMemberIds: ["1", "2", "4"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com"
  },
  {
    id: "paymobi",
    title: "PayMobi App",
    shortDescription: "Seamless mobile payment aggregator integrating MTN Mobile Money and Orange Money.",
    fullDescription: "A unified payment gateway allowing local merchants to accept both MTN and Orange money seamlessly in a single app. Focuses on security, fast settlement, and simple APIs for developers.",
    image: project2,
    technologies: ["React Native", "TypeScript", "NestJS", "MongoDB"],
    features: [
      "Multi-provider payment aggregation",
      "QR code instant payments",
      "Merchant dashboard and analytics",
      "USSD fallback integration"
    ],
    teamMemberIds: ["1", "3", "4"],
    githubUrl: "https://github.com",
  },
  {
    id: "medicare",
    title: "CareConnect System",
    shortDescription: "Hospital management system for regional clinics and healthcare centers.",
    fullDescription: "CareConnect digitizes patient records, appointment scheduling, and pharmacy inventory for local clinics, addressing the critical need for reliable health data management.",
    image: project3,
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
    features: [
      "Electronic Health Records (EHR)",
      "Prescription and pharmacy tracking",
      "Doctor appointment scheduling",
      "Billing and insurance claim generation"
    ],
    teamMemberIds: ["1", "2"],
    demoUrl: "https://demo.com"
  },
  {
    id: "agileflow",
    title: "AgileFlow",
    shortDescription: "Project management tool built specifically for remote African tech teams.",
    fullDescription: "A Kanban-style project management tool with built-in time tracking, asynchronous communication features, and low-bandwidth mode optimized for African internet conditions.",
    image: project4,
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    features: [
      "Offline-first architecture",
      "Real-time Kanban boards",
      "Integrated audio messaging",
      "Bandwidth-saving data sync"
    ],
    teamMemberIds: ["1", "2", "3", "4"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com"
  }
];
