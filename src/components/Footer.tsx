import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-white/5 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="text-gradient">Rasel</span>
            <span className="text-foreground/40">.</span>
          </a>
          <p className="text-sm text-foreground/50">
            Full-Stack MERN Developer
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/50 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {[
            {
              icon: GithubIcon,
              href: "https://github.com/Md-Rasel-Ahmed",
              label: "GitHub",
            },
            {
              icon: LinkedinIcon,
              href: "https://www.linkedin.com/in/md-rasel-ahmed-4254661b3",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:nhd305812@devmail.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/60 transition-all hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-400"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="flex items-center justify-center gap-1.5 text-center text-sm text-foreground/40">
          © {new Date().getFullYear()} Rasel. Crafted with
          <Heart className="h-4 w-4 text-rose-500" fill="currentColor" />
          using Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
