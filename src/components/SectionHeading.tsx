import { motion } from "framer-motion";
import { fadeUp } from "./Motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-14 flex max-w-2xl flex-col items-center text-center"
    >
      <span className="mb-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium tracking-wide text-violet-500">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-foreground/60 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}