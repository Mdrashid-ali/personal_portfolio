import { Sparkles } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { aboutParagraphs, profile } from '../data/portfolio'

const highlights = [
  { label: 'Based in', value: 'Bhaktapur, Nepal' },
  { label: 'Focus', value: 'AI & Web Development' },
  { label: 'Degree', value: 'BSc (Hons) Computing with AI' },
  { label: 'Status', value: 'Open to opportunities' },
]

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Turning ideas into intelligent software">
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-5 text-base leading-relaxed text-slate-400">
            {aboutParagraphs.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
            >
              <Sparkles size={16} />
              Let&apos;s work together
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-2">
          <div className="glass-card grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-xl bg-slate-900/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {item.label}
                </p>
                <p className="mt-1 font-medium text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
