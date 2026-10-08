"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Terminal,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { fadeUp, staggerContainer } from "./Motion";

const floatingIcons = [
  { Icon: Terminal, className: "left-[12%] top-[22%] text-cyan-400", delay: 0 },
  { Icon: Sparkles, className: "right-[14%] top-[26%] text-violet-400", delay: 1 },
  { Icon: GithubIcon, className: "left-[20%] bottom-[28%] text-violet-400", delay: 2 },
  { Icon: Mail, className: "right-[20%] bottom-[22%] text-pink-400", delay: 1.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-pink-500/15 blur-[120px]" />
      </div>

      {floatingIcons.map(({ Icon, className, delay }) => (
        <motion.div
          key={className}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + delay * 0.2, duration: 0.6 }}
          className={`absolute hidden lg:block ${className} animate-float`}
          style={{ animationDelay: `${delay * 0.8}s` }}
        >
          <Icon className="h-8 w-8 text-foreground/30" />
        </motion.div>
      ))}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-foreground/80 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for freelance work
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-base"
        >
          Hi, I&apos;m Rasel
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-foreground">Full-Stack</span>
          <br />
          <span className="text-gradient">MERN Developer</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg"
        >
          I craft scalable web applications with smooth, delightful user
          experiences — from pixel-perfect UIs in React to robust APIs with
          Node.js, Express &amp; MongoDB.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:shadow-xl hover:shadow-violet-600/40"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-foreground/80 backdrop-blur transition-all hover:border-violet-500/50 hover:text-foreground"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex items-center gap-5"
        >
          {[
            { icon: GithubIcon, href: "#", label: "GitHub" },
            { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/60 transition-all hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-400"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-14 flex items-center gap-3"
        >
          <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-violet-500 sm:block" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/40">
            Scroll to explore
          </p>
          <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-violet-500 sm:block" />
        </motion.div>
      </motion.div>
    </section>
  );
}