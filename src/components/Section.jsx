import Reveal from './Reveal'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400" />
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
