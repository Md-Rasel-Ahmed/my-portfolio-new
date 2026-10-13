import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Braces,
  Server,
  Database,
  Type,
  Boxes,
  Palette,
  GitBranch,
  Layers,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: Atom,
    color: "#22d3ee",
  },
  {
    name: "Node.js",
    icon: Server,
    color: "#4ade80",
  },
  {
    name: "Express",
    icon: Braces,
    color: "#a3a3a3",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "#4ade80",
  },
  {
    name: "TypeScript",
    icon: Type,
    color: "#60a5fa",
  },
  {
    name: "Next.js",
    icon: Boxes,
    color: "#e5e5e5",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    color: "#22d3ee",
  },
  {
    name: "Prisma",
    icon: Layers,
    color: "#a78bfa",
  },
  {
    name: "Git",
    icon: GitBranch,
    color: "#fb7185",
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  category: string;
  highlights: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  authentication: string[];
  integrations: string[];
  liveUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    title: "BloodLink",
    description:
      "A community-first platform that helps people find available blood donors, create urgent requests, and discover support by location.",
    tags: ["Next.js", "TypeScript", "Prisma", "TanStack Query", "Zod"],
    image: "/projects/bloodlink.svg",
    category: "Healthcare platform",
    highlights: [
      "Find donors by blood group and location",
      "Create urgent blood donation requests",
      "Check donor availability",
    ],
    frontend: ["Next.js", "React", "TypeScript", "Shadcn UI"],
    backend: [],
    database: ["Prisma ORM (database provider not listed)"],
    authentication: [],
    integrations: ["TanStack Query", "Zod", "Cloudinary", "Nodemailer"],
    liveUrl: "https://donation-healthcare-frontend.vercel.app/",
    repoUrl: "https://github.com/Md-Rasel-Ahmed/blood-donation-frontend",
  },
  {
    title: "RentNest",
    description:
      "A home-rental experience for exploring properties, narrowing down places by location and budget, and managing booking requests.",
    tags: ["Next.js", "TypeScript", "Prisma", "Shadcn UI", "Cloudinary"],
    image: "/projects/rentnest.svg",
    category: "Property discovery",
    highlights: [
      "Browse rental property listings",
      "Filter homes by location and budget",
      "Manage property booking requests",
    ],
    frontend: ["Next.js", "React", "TypeScript", "Shadcn UI"],
    backend: [],
    database: ["Prisma ORM (database provider not listed)"],
    authentication: [],
    integrations: ["Cloudinary", "Nodemailer"],
    liveUrl: "https://assingment5frontend.vercel.app",
    repoUrl: "https://github.com/Md-Rasel-Ahmed/Rent_nest_fronend_with_nextJS",
  },
  {
    title: "Cafe-De Male",
    description:
      "A restaurant ordering experience for discovering the menu, placing food orders, and keeping track of reservations.",
    tags: ["React", "TypeScript", "Express", "MongoDB", "JWT"],
    image: "/projects/cafe-de-male.svg",
    category: "Restaurant experience",
    highlights: [
      "Explore the restaurant menu",
      "Place food orders online",
      "View and manage reservation details",
    ],
    frontend: ["React", "TypeScript"],
    backend: ["Node.js", "Express"],
    database: ["MongoDB"],
    authentication: ["JWT"],
    integrations: [],
    liveUrl: "https://cafe-de-male.web.app/",
    repoUrl: "https://github.com/Md-Rasel-Ahmed/cafe-de-male",
  },
];

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
}

export const timeline: TimelineItem[] = [
  {
    title: "Full-Stack Web Development Bootcamp",
    organization: "Self-paced Learning Journey",
    period: "2023 — Present",
    description:
      "Completed an intensive full-stack curriculum covering the MERN stack, TypeScript, Next.js, and advanced database design with Prisma.",
    tags: ["MERN", "TypeScript", "Next.js"],
  },
  {
    title: "Built E-commerce Platform",
    organization: "Personal Project — ShopSphere",
    period: "2024",
    description:
      "Designed and shipped a production-grade e-commerce app with secure payments, auth, and a responsive admin dashboard serving real users.",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Open Source Contributions",
    organization: "GitHub Community",
    period: "2024 — 2025",
    description:
      "Contributed fixes and features to open-source projects, reviewed pull requests, and authored documentation for popular npm libraries.",
    tags: ["Git", "Open Source"],
  },
  {
    title: "Freelance Web Developer",
    organization: "Independent Contracts",
    period: "2025 — Present",
    description:
      "Delivering performant, SEO-friendly web apps and CMS integrations for small businesses — from wireframe to deployment.",
    tags: ["React", "Node.js", "Tailwind CSS"],
  },
];