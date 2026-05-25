export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  logo?: string;
  technologies: string[];
  features: string[];
  teamMemberIds: string[];
  githubUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  status: "production" | "beta" | "in-progress";
}

import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

export const projects: Project[] = [
  {
    id: "afrosound",
    title: "AfroSound",
    shortDescription: "Plateforme de streaming musical africaine — écoute tes racines.",
    fullDescription: "AfroSound est une plateforme de streaming dédiée aux artistes africains. Elle permet aux mélomanes de découvrir, écouter et partager de la musique authentiquement africaine — du coupé-décalé au bikutsi, du makossa à l'afrobeat. Notre mission : valoriser le patrimoine musical du continent.",
    image: "/afrosound-logo.png",
    logo: "/afrosound-logo.png",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    features: [
      "Streaming audio haute qualité",
      "Bibliothèque de genres musicaux africains",
      "Profils artistes et albums",
      "Mode hors-ligne pour les zones à faible connectivité",
      "Intégration paiement Mobile Money"
    ],
    teamMemberIds: ["1", "2", "3"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    downloadUrl: "https://github.com",
    status: "production"
  },
  {
    id: "afrovibe",
    title: "AfroVibe",
    shortDescription: "Réseau social afro-centré — danse ta culture.",
    fullDescription: "AfroVibe est un réseau social centré sur la culture africaine, les danses traditionnelles et contemporaines, et la création de contenu viral. Pensé comme un TikTok africain, il permet aux créateurs de partager leurs performances, tutoriels de danse et moments culturels avec toute la diaspora.",
    image: "/afrovibe-logo.png",
    logo: "/afrovibe-logo.png",
    technologies: ["React Native", "TypeScript", "Firebase", "FFmpeg", "TikTok API"],
    features: [
      "Création et partage de vidéos courtes",
      "Challenges de danse en temps réel",
      "Catalogue de danses traditionnelles africaines",
      "Système de duos et collaborations",
      "Monétisation pour les créateurs"
    ],
    teamMemberIds: ["1", "2", "4"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    downloadUrl: "https://github.com",
    status: "production"
  },
  {
    id: "afrisocial",
    title: "Réseau Social Africain",
    shortDescription: "Un réseau social pour la diaspora africaine — offline et online.",
    fullDescription: "Un réseau social conçu pour les communautés africaines avec un mode offline-first, permettant la connexion même sans accès internet. Partage de nouvelles locales, événements culturels et opportunités professionnelles au sein de la diaspora.",
    image: project3,
    technologies: ["React", "GraphQL", "MongoDB", "PWA", "Service Workers"],
    features: [
      "Mode offline-first avec synchronisation différée",
      "Groupes communautaires par pays et région",
      "Fil d'actualités locales et diaspora",
      "Événements culturels géolocalisés",
      "Messagerie chiffrée de bout en bout"
    ],
    teamMemberIds: ["1", "3", "4"],
    githubUrl: "https://github.com",
    status: "in-progress"
  },
  {
    id: "kernelos",
    title: "KernelOS Dashboard",
    shortDescription: "Tableau de bord de gestion interne pour les PME camerounaises.",
    fullDescription: "KernelOS est une suite de gestion tout-en-un pensée pour les petites et moyennes entreprises au Cameroun. Elle centralise la facturation, la gestion des employés, le suivi de stocks et les rapports financiers dans une interface simple et mobile-friendly.",
    image: project4,
    technologies: ["React", "Express", "PostgreSQL", "Docker", "Tailwind CSS"],
    features: [
      "Facturation et devis automatisés",
      "Gestion des ressources humaines",
      "Suivi des stocks en temps réel",
      "Rapports financiers et analytics",
      "API d'intégration Mobile Money"
    ],
    teamMemberIds: ["1", "2", "3", "4"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    status: "beta"
  }
];
