"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer } from "./Motion";
import { skills } from "./data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools behind the work"
          subtitle="A practical toolkit for building thoughtful interfaces and dependable web applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {skills.map(({ name, icon: Icon, color }, index) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-5"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                style={{ background: color }}
              />
              <div className="mb-5 flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110"
                  style={{ color }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs text-foreground/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground sm:text-base">
                {name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}