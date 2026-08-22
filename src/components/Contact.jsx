import { Mail, MapPin, Phone, Send } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './icons'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: '',
  },
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="max-w-md text-base leading-relaxed text-slate-400">
            I&apos;m actively looking for internships, freelance work, and collaborative projects
            in AI and web development. Whether you have a question or just want to say hi — my
            inbox is always open.
          </p>
          <div className="mt-8 space-y-4">
            {contactItems.map((item) => (
              <div key={item.label} className="glass-card flex items-center gap-4 p-4">
                <span className="rounded-lg bg-linear-to-br from-indigo-500/20 to-cyan-500/20 p-3 text-cyan-400">
                  <item.icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-white hover:text-cyan-300">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-white/10 p-3 text-slate-400 transition-colors hover:border-indigo-400/50 hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-white/10 p-3 text-slate-400 transition-colors hover:border-indigo-400/50 hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-semibold text-white">Send me a message</h3>
            <form
              action={`mailto:${profile.email}`}
              method="POST"
              encType="text/plain"
              className="mt-6 space-y-5"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-[1.02]"
              >
                Send Message
                <Send size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
