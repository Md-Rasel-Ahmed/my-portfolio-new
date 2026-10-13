"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  Code2,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { fadeUp, staggerContainer } from "./Motion";

const socialLinks = [
  {
    Icon: GithubIcon,
    href: "https://github.com/Md-Rasel-Ahmed",
    label: "GitHub",
  },
  {
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/md-rasel-ahmed-4254661b3",
    label: "LinkedIn",
  },
  { Icon: Mail, href: "mailto:nhd305812@devmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium text-foreground/75 sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl"
          >
            <span className="text-foreground">Md. Rasel</span>
            <br />
            <span className="text-gradient">Ahmed</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-5 flex items-center justify-center gap-2 text-lg font-semibold text-foreground/80 sm:text-xl lg:justify-start"
          >
            <Code2 className="h-5 w-5 text-violet-400" />
            Full-Stack Web Developer
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg lg:mx-0"
          >
            I build modern, responsive web applications from polished React
            interfaces to reliable Node.js APIs, using Next.js, TypeScript, and
            MongoDB to bring useful ideas to life.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/65 sm:text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/40"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground/80 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-foreground"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="mr-1 text-xs font-medium uppercase tracking-wider text-foreground/40">
              Find me on
            </span>
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/60 transition-all hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
        >
          <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-[90px]" />
          <div className="relative mx-auto aspect-[4/4.2] w-full max-w-[440px]">
            <div className="absolute inset-[7%] rounded-[2.5rem] border border-violet-400/20 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-violet-500/15 shadow-2xl shadow-violet-950/30 backdrop-blur-sm" />
            <div className="absolute inset-[11%] overflow-hidden rounded-[2rem] border border-white/10 bg-[#10111d]">
              <Image
                src="/profile-illustration.svg"
                alt="Illustrated profile placeholder for Rasel"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 440px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-0 top-[24%] flex items-center gap-3 rounded-2xl border border-white/10 bg-background/80 p-3 shadow-xl backdrop-blur-xl sm:-left-5 sm:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Code2 className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  Clean code
                </span>
                <span className="block text-xs text-foreground/50">
                  Thoughtful solutions
                </span>
              </span>
            </div>
            <div className="absolute bottom-[18%] right-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-background/80 p-3 shadow-xl backdrop-blur-xl sm:-right-5 sm:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                <Layers3 className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  Full stack
                </span>
                <span className="block text-xs text-foreground/50">
                  Frontend to backend
                </span>
              </span>
            </div>
            <Sparkles className="absolute right-[14%] top-[10%] h-7 w-7 animate-float text-cyan-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
