"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  X,
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer } from "./Motion";
import { projects, type Project } from "./data";

function updateSpotlight(event: ReactMouseEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--mouse-x",
    `${event.clientX - bounds.left}px`,
  );
  event.currentTarget.style.setProperty(
    "--mouse-y",
    `${event.clientY - bounds.top}px`,
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() =>
      closeButtonRef.current?.focus(),
    );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable.item(0);
      const last = focusable.item(focusable.length - 1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [selectedProject]);

  const openDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-1/4 h-[32rem] w-[32rem] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.07] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Selected work · Case studies"
          title="Built to make a difference."
          subtitle="A closer look at useful ideas I brought to life, from the first screen to the working product."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 lg:grid-cols-2 lg:gap-6"
        >
          {projects.map((project, index) =>
            index === 0 ? (
              <motion.article
                key={project.title}
                variants={fadeUp}
                onMouseMove={updateSpotlight}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-rose-500/[0.04] lg:col-span-2"
              >
                <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-rose-500/[0.08] blur-[90px]" />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(360px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(251, 113, 133, 0.13), transparent 75%)",
                  }}
                />
                <div className="relative z-10 grid items-center gap-7 p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:p-10">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs tracking-[0.2em] text-rose-300">
                        FEATURED / 01
                      </span>
                      <span className="h-px w-10 bg-rose-300/40" />
                      <span className="text-xs text-foreground/45">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/65 sm:text-base">
                      {project.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-sm text-foreground/70"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-foreground/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-5">
                      <button
                        type="button"
                        onClick={() => openDetails(project)}
                        aria-label={`View details for ${project.title}`}
                        className="group/button inline-flex min-h-11 items-center gap-2 rounded-full bg-rose-400 px-5 py-2.5 text-sm font-semibold text-[#241418] transition-all hover:-translate-y-0.5 hover:bg-rose-300"
                      >
                        Project details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
                      >
                        Visit live site
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#261a20] shadow-2xl shadow-black/30 transition-transform duration-500 group-hover:scale-[1.015]">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />
                      <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-medium tracking-wide text-white/80 backdrop-blur">
                        PRODUCT PREVIEW
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between px-1 text-[11px] uppercase tracking-[0.16em] text-foreground/30">
                      <span>Designed for connection</span>
                      <span>01 / 03</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ) : (
              <motion.article
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                onMouseMove={updateSpotlight}
                className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.15), transparent 75%)",
                  }}
                />
                <div className="relative z-10 aspect-[16/9] overflow-hidden border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-[11px] text-white/80 backdrop-blur">
                    0{index + 1} / CASE STUDY
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live site`}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition-all hover:scale-105 hover:bg-black/65"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-foreground/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <button
                      type="button"
                      onClick={() => openDetails(project)}
                      aria-label={`View details for ${project.title}`}
                      className="group/button inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-cyan-300"
                    >
                      Project details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </button>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="inline-flex items-center gap-2 text-xs font-medium text-foreground/45 transition-colors hover:text-violet-300"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ),
          )}
        </motion.div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                key="project-details-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) {
                    setSelectedProject(null);
                  }
                }}
              >
                <motion.div
                  ref={dialogRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="project-dialog-title"
                  tabIndex={-1}
                  onMouseMove={updateSpotlight}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="group/dialog relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-[1.75rem] border border-white/10 bg-[#11111b] shadow-2xl shadow-black/50 sm:rounded-[1.75rem]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover/dialog:opacity-100"
                    style={{
                      background:
                        "radial-gradient(360px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 211, 238, 0.12), transparent 75%)",
                    }}
                  />
                  <div className="relative z-10 aspect-[16/8] overflow-hidden border-b border-white/10">
                    <Image
                      src={selectedProject.image}
                      alt={`${selectedProject.title} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11111b] via-transparent to-black/10" />
                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      aria-label="Close project details"
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/75"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <div className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        {selectedProject.category}
                      </p>
                      <h2
                        id="project-dialog-title"
                        className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                      >
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>

                  <div className="relative z-10 grid gap-8 p-5 sm:p-8 md:grid-cols-[1.2fr_0.8fr]">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/45">
                        The overview
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
                        {selectedProject.description}
                      </p>

                      <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/45">
                        What it does
                      </h3>
                      <ul className="mt-3 space-y-3">
                        {selectedProject.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm leading-relaxed text-foreground/70"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <aside>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/45">
                        Technology breakdown
                      </h3>
                      <div className="mt-4 space-y-4">
                        {[
                          {
                            label: "Frontend",
                            items: selectedProject.frontend,
                          },
                          {
                            label: "Backend",
                            items: selectedProject.backend,
                          },
                          {
                            label: "Database",
                            items: selectedProject.database,
                          },
                          {
                            label: "Authentication",
                            items: selectedProject.authentication,
                          },
                          {
                            label: "Libraries & services",
                            items: selectedProject.integrations,
                          },
                        ].map(({ label, items }) => (
                          <div key={label}>
                            <p className="text-xs font-medium text-foreground/45">
                              {label}
                            </p>
                            {items.length > 0 ? (
                              <div className="mt-2 flex flex-wrap gap-1.5">
                                {items.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-xs font-medium text-foreground/75"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <p className="mt-1 text-xs leading-relaxed text-foreground/35">
                                Not listed in the available project details
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-7 flex flex-col gap-3">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                          View live project
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a
                          href={selectedProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-foreground/75 transition-colors hover:border-white/20 hover:text-foreground"
                        >
                          <GithubIcon className="h-4 w-4" />
                          Explore source code
                        </a>
                      </div>
                    </aside>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
