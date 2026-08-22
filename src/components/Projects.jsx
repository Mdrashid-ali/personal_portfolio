import { ExternalLink, FolderGit2, Github } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { projects } from '../data/portfolio'
import { GithubIcon } from './icons'

const categoryStyles = {
  Academic: 'border-sky-400/30 bg-sky-500/10 text-sky-300',
  Personal: 'border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-300',
}

function ProjectCard({ project }) {
  return (
    <div className="glass-card group flex h-full flex-col p-6">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            categoryStyles[project.category]
          }`}
        >
          {project.category}
        </span>
        <FolderGit2 size={22} className="text-slate-600 transition-colors group-hover:text-cyan-400" />
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>

      {(project.link || project.repo) && (
        <div className="mt-5 flex items-center gap-4 text-sm font-medium">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Portfolio" title="Projects I've built">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 100} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}

        <Reveal delay={200} className="h-full">
          <a
            href="https://github.com/Mdrashid-ali"
            target="_blank"
            rel="noreferrer"
            className="glass-card flex h-full min-h-64 flex-col items-center justify-center gap-3 p-6 text-center"
          >
            <span className="rounded-full bg-linear-to-br from-indigo-500/20 to-cyan-500/20 p-4 text-cyan-400">
              <Github size={28} />
            </span>
            <p className="font-display font-semibold text-white">More on GitHub</p>
            <p className="text-sm text-slate-400">
              Explore my full collection of experiments and coursework
            </p>
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
