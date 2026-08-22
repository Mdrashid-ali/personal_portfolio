import { Code, Cloud, Cpu, Database, Layers, Wrench } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { operatingSystems, skillGroups, softSkills } from '../data/portfolio'

const groupIcons = [Code, Layers, Database, Cloud, Wrench, Cpu]

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My technical toolkit">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[index % groupIcons.length]
          return (
            <Reveal key={group.title} delay={(index % 3) * 100}>
              <div className="glass-card h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-linear-to-br from-indigo-500/20 to-cyan-500/20 p-2.5 text-cyan-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-white"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={150}>
        <div className="glass-card mt-6 p-6">
          <h3 className="font-display text-lg font-semibold text-white">
            Operating Systems & Soft Skills
          </h3>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {[...operatingSystems, ...softSkills].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
