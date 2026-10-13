"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Motion";

const highlights = [
  { value: "03", label: "Featured projects" },
  { value: "09", label: "Core technologies" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Thoughtful engineering, useful experiences."
          subtitle="A full-stack developer focused on building clear, reliable products for the web."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-md lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-violet-600/20 blur-2xl" />
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                <Image
                  src="/about-illustration.svg"
                  alt="Illustration of a developer working at a laptop"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -bottom-5 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-background/85 p-4 shadow-xl backdrop-blur-xl sm:left-7 sm:right-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      Full-stack developer
                    </span>
                    <span className="block text-xs text-foreground/50">
                      Based in Bangladesh
                    </span>
                  </span>
                </div>
                <MapPin className="h-4 w-4 shrink-0 text-cyan-300" />
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="pt-6 lg:pt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                How I got here
              </p>
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                I&apos;m Rasel. I turn ideas into dependable web products.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-foreground/65">
                I began by learning the fundamentals of the web and grew into
                full-stack development by building projects, solving practical
                problems, and expanding my toolkit along the way. Today I work
                with React, Next.js, TypeScript, Node.js, and MongoDB to create
                applications from interface through to data.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/65">
                I enjoy work that brings the whole experience together:
                understanding a user need, shaping a thoughtful interface, and
                connecting it to reliable application logic. I value clean,
                maintainable code, deliberate decisions, and steady
                collaboration. Away from the keyboard, I enjoy cooking and
                experimenting with new recipes—a hands-on way to recharge and
                stay curious.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Product-minded",
                  "Detail-oriented",
                  "Always learning",
                  "Cooking enthusiast",
                ].map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-violet-500/25 bg-violet-500/[0.08] px-3 py-1.5 text-xs font-medium text-violet-200/80"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {highlights.map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                  >
                    <p className="text-2xl font-bold text-gradient">{value}</p>
                    <p className="mt-1 text-xs text-foreground/50 sm:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-cyan-300"
              >
                Let&apos;s make something useful
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
