import { useState } from 'react'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'

function ProfilePhoto() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="group relative w-fit">
      <div className="absolute -inset-6 rounded-full bg-linear-to-tr from-indigo-600/30 to-cyan-400/30 opacity-80 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative rounded-full bg-linear-to-tr from-indigo-500 via-sky-500 to-cyan-400 p-1.5 shadow-2xl shadow-indigo-500/20">
        {failed ? (
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-slate-900 font-display text-7xl font-bold text-gradient select-none sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            R
          </div>
        ) : (
          <img
            src="/profile.png"
            alt={`${profile.name} portrait`}
            onError={() => setFailed(true)}
            className="block h-64 w-64 rounded-full bg-slate-900 object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          />
        )}
      </div>
      <span className="absolute bottom-6 right-6 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-950 bg-emerald-400">
        <span className="sr-only">Available for work</span>
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-indigo-600/25 blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[128px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 py-32 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to internships & opportunities
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h4 className="mt-6 font-display text-3xl font-bold leading-tight text-white sm:text-6xl lg:text-4xl">
              Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            </h4>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 font-display text-xl font-semibold text-slate-200 sm:text-2xl">
              {profile.role} <span className="text-slate-500">·</span>{' '}
              <span className="text-slate-400">Machine Learning Enthusiast</span>
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
              >
                View My Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" /> {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={16} className="text-cyan-400" /> {profile.email}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="rounded-full border border-white/10 p-2.5 text-slate-400 transition-colors hover:border-indigo-400/50 hover:text-white"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-full border border-white/10 p-2.5 text-slate-400 transition-colors hover:border-indigo-400/50 hover:text-white"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center lg:col-span-2 lg:justify-end">
          <Reveal delay={250}>
            <ProfilePhoto />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
