"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer } from "./Motion";
import { projects } from "./data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects I'm proud of"
          subtitle="A selection of real-world apps I've designed, built, and shipped."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-colors duration-300 hover:border-white/20"
            >
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-background/50 backdrop-blur text-violet-300">
                  <Folder className="h-6 w-6" />
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-background/70 text-foreground/70 backdrop-blur transition-colors hover:text-violet-400"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-background/70 text-foreground/70 backdrop-blur transition-colors hover:text-cyan-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-gradient">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 p-4 text-sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-violet-400 transition-colors hover:text-violet-300"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  Source Code
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}