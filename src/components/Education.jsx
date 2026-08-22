import { Award, ExternalLink, GraduationCap } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { certifications, education } from '../data/portfolio'

export default function Education() {
  return (
    <Section id="education" eyebrow="Journey" title="Education & Certifications">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <GraduationCap size={20} className="text-cyan-400" /> Education
          </h3>
          <div className="relative mt-8 space-y-10 border-l border-white/10 pl-8">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 100}>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-950" />
                  <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                    {item.period}
                  </span>
                  <h4 className="mt-3 font-display text-base font-semibold text-white">
                    {item.degree}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-slate-300">{item.institution}</p>
                  <p className="mt-0.5 text-sm text-slate-500">
                    {item.affiliation}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">{item.place}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Award size={20} className="text-cyan-400" /> Training & Certifications
          </h3>
          <div className="mt-8 space-y-4">
            {certifications.map((cert, index) => (
              <Reveal key={cert.title} delay={index * 100}>
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View certificate: ${cert.title}`}
                  className="glass-card group flex items-center justify-between gap-4 p-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="rounded-lg bg-gradient-to-br from-orange-500/25 to-amber-400/15 p-2.5 text-amber-400">
                      <Award size={20} />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {cert.issuer ? `${cert.issuer} · ` : ''}Issued {cert.date}
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="shrink-0 text-slate-600 transition-colors group-hover:text-cyan-400"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
