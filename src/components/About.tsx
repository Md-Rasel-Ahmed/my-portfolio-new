"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { User, Lightbulb, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./Motion";

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = `${Math.round(value)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

const stats = [
  { value: 12, label: "Projects Completed", icon: Code2 },
  { value: 1, label: "Years of Experience", icon: User },
  { value: 9, label: "Technologies Mastered", icon: Lightbulb },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Passionate about building the modern web"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-violet-600/10 p-8 backdrop-blur">
                <p className="text-lg leading-relaxed text-foreground/80">
                  I&apos;m{" "}
                  <span className="font-semibold text-foreground">Rasel</span>,
                  a full-stack developer who loves turning ideas into fast,
                  elegant, and accessible web applications. My passion lives in
                  the details — smooth animations, clean architecture, and
                  experiences that just{" "}
                  <span className="text-gradient font-semibold">
                    feel right
                  </span>
                  .
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/60">
                  From designing intuitive frontends with React to engineering
                  resilient backends with Node.js, I care about every layer of
                  the stack. I&apos;m constantly learning, shipping, and
                  leveling up.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Problem Solver", "Clean Coder", "Lifelong Learner"].map(
                    (trait) => (
                      <span
                        key={trait}
                        className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400"
                      >
                        {trait}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-600/10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 text-violet-300">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient">
                        <Counter to={stat.value} />
                      </div>
                      <p className="text-sm text-foreground/50">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
