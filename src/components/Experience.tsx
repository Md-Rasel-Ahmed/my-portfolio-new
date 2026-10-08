"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer } from "./Motion";
import { timeline } from "./data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Journey"
          title="My learning milestones"
          subtitle="A timeline of my growth — from first concepts to production-grade web apps."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-500/60 via-violet-500/60 to-transparent sm:left-1/2 sm:-translate-x-px" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`relative mb-10 pl-16 sm:mb-12 sm:w-1/2 sm:pl-0 ${
                  isLeft ? "sm:pr-14 sm:text-right" : "sm:ml-auto sm:pl-14"
                }`}
              >
                <div
                  className={`absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-violet-500/40 bg-background shadow-lg shadow-violet-600/20 sm:top-0 ${
                    isLeft
                      ? "sm:left-full sm:translate-x-[-200%]"
                      : "sm:left-0 sm:-translate-x-1/2"
                  }`}
                >
                  <GraduationCap className="h-5 w-5 text-violet-400" />
                </div>

                <div className="group rounded-2xl border mr-8 border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-600/10">
                  <span className="mb-3 inline-block rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-violet-400">
                    {item.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${
                      isLeft ? "sm:justify-end" : ""
                    }`}
                  >
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
