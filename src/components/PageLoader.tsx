"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Braces, Terminal } from "lucide-react";

type LoaderState = "loading" | "leaving" | "done";

export default function PageLoader() {
  const [state, setState] = useState<LoaderState>("loading");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const visibleDuration = reducedMotion ? 350 : 1150;
    const exitDuration = reducedMotion ? 100 : 350;

    const leaveTimer = window.setTimeout(
      () => setState("leaving"),
      visibleDuration,
    );
    const removeTimer = window.setTimeout(
      () => setState("done"),
      visibleDuration + exitDuration,
    );

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {state !== "done" && (
        <motion.div
          key="page-loader"
          aria-hidden={state === "leaving"}
          initial={{ opacity: 1 }}
          animate={{ opacity: state === "leaving" ? 0 : 1 }}
          transition={{ duration: state === "leaving" ? 0.35 : 0 }}
          className="page-loader"
        >
          <motion.div
            role="status"
            aria-live="polite"
            className="loader-terminal"
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="loader-terminal-topbar">
              <div className="loader-window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="loader-window-title">rasel.dev — portfolio</span>
              <Terminal className="h-4 w-4 text-cyan-300/70" />
            </div>

            <div className="loader-terminal-body">
              <div className="loader-brand">
                <span className="loader-icon">
                  <Braces className="h-6 w-6" />
                </span>
                <span className="text-gradient">Rasel</span>
              </div>

              <p className="loader-command">
                <span className="loader-prompt">$</span>
                <span>npm run dev</span>
              </p>

              <div className="loader-log">
                <p>
                  <span>✓</span> Loading interface
                </p>
                <p>
                  <span>✓</span> Warming up components
                </p>
                <p className="loader-current-line">
                  <span className="loader-spinner" aria-hidden="true" />
                  Preparing your experience
                </p>
              </div>

              <div
                className="loader-progress-track"
                role="progressbar"
                aria-label="Loading portfolio"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuetext="Loading portfolio"
              >
                <span className="loader-progress-bar" />
              </div>
              <div className="loader-footer">
                <span>React · Next.js · TypeScript</span>
                <span>LOADING</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
