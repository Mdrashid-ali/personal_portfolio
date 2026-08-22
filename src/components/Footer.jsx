import { Heart } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
        <a href="#home" className="font-display text-lg font-bold text-white">
          <span className="text-gradient">{profile.firstName}</span>.dev
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-slate-500 transition-colors hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-500 transition-colors hover:text-white"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
        <p className="flex items-center gap-1.5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
          <Heart size={14} className="text-rose-500" fill="currentColor" />
        </p>
      </div>
    </footer>
  )
}
