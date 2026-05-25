export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  github?: string;
  linkedin?: string;
}

import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Arthur Njikam",
    role: "Lead Developer / Architect",
    bio: "Passionate about scalable architectures and building solutions that impact everyday life in Africa.",
    avatar: team1,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "2",
    name: "Chloe Etoa",
    role: "UI/UX Designer",
    bio: "Crafting beautiful, intuitive interfaces. I believe design is the bridge between human needs and technology.",
    avatar: team2,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "3",
    name: "Samuel Biloa",
    role: "Data Scientist",
    bio: "Turning raw data into actionable insights to power the next generation of Cameroonian startups.",
    avatar: team3,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: "4",
    name: "Marie Mboua",
    role: "Product Manager",
    bio: "Ensuring we build the right products for our users. Obsessed with execution and continuous learning.",
    avatar: team4,
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];
