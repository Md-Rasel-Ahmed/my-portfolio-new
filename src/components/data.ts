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
  level: number;
  color: string;
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: Atom,
    level: 92,
    color: "#22d3ee",
  },
  {
    name: "Node.js",
    icon: Server,
    level: 88,
    color: "#4ade80",
  },
  {
    name: "Express",
    icon: Braces,
    level: 85,
    color: "#a3a3a3",
  },
  {
    name: "MongoDB",
    icon: Database,
    level: 84,
    color: "#4ade80",
  },
  {
    name: "TypeScript",
    icon: Type,
    level: 82,
    color: "#60a5fa",
  },
  {
    name: "Next.js",
    icon: Boxes,
    level: 86,
    color: "#e5e5e5",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    level: 93,
    color: "#22d3ee",
  },
  {
    name: "Prisma",
    icon: Layers,
    level: 80,
    color: "#a78bfa",
  },
  {
    name: "Git",
    icon: GitBranch,
    level: 90,
    color: "#fb7185",
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Blood Donation & Emergency Platform",
    description:
      "A platform connecting blood donors with recipients, featuring emergency request creation, donor availability filtering, location-based searching, and donor management.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tanstack Query", "Zod", "Shadcn", "Cloudinary", "Nodemailer"],
    liveUrl: "https://donation-healthcare-frontend.vercel.app/",
    repoUrl: "https://github.com/Md-Rasel-Ahmed/blood-donation-frontend",
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
  },
  {
    title: "RentNest",
    description:
      "A house rental platform allowing users to browse property listings, filter by location/budget, manage booking requests, and list rental properties.",
    tags: ["Next.js", "TypeScript", "Prisma", "Shadcn", "Cloudinary", "Nodemailer"],
    liveUrl: "https://assingment5frontend.vercel.app",
    repoUrl: "https://github.com/Md-Rasel-Ahmed/Rent_nest_fronend_with_nextJS",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "Cafe-De Male",
    description:
      "A restaurant and cafe management website for browsing food items, placing online food orders, viewing menus, and managing reservation details.",
    tags: ["MERN", "TypeScript", "React", "JWT", "Mongodb", "Express js"],
    liveUrl: "https://cafe-de-male.web.app/",
    repoUrl: "https://github.com/Md-Rasel-Ahmed/cafe-de-male",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
  }
]

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