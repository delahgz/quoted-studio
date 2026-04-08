import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Results',
  description: 'Real placements earned for real clients. See what earned authority looks like.',
}

export default function ResultsPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-4">Results</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-6">
            Authority earned<span className="text-brand-gold">.</span><br />Not claimed.
          </h1>
          <p className="text-[15px] text-brand-light leading-relaxed max-w-xl">
            Every placement below is a real media mention earned through expert commentary.
            Not paid. Not traded. Not manufactured. Editorially earned.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Metrics */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { n: '---', l: 'Placements earned', s: 'and counting' },
            { n: '---', l: 'Unique publications', s: 'across industries' },
            { n: '---', l: 'Backlinks earned', s: 'editorially' },
            { n: '---', l: 'Avg. publication DA', s: 'quality first' },
          ].map((m, i) => (
            <div key={i} className="text-center p-6 border border-brand-border/30">
              <div className="font-display text-3xl text-brand-gold mb-1">{m.n}</div>
              <div className="text-[13px] font-medium mb-0.5">{m.l}</div>
              <div className="text-[11px] text-brand-muted">{m.s}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Placeholder */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-12 border border-dashed border-brand-border/40">
            <h2 className="font-display text-2xl mb-4">Case studies coming soon</h2>
            <p className="text-[13.5px] text-brand-muted leading-relaxed mb-5">
              We are currently onboarding our first clients. As placements are earned
              and published, case studies will appear here with full attribution,
              publication details, and measurable outcomes.
            </p>
            <p className="text-[12px] text-brand-muted italic">Want to be one of our first case studies?</p>
          </div>
        </div>
      </section>

      {/* How we measure */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <h2 className="font-display text-2xl tracking-tight mb-12 text-center">How we measure success</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { t: 'Placements earned', d: 'Published media mentions where your spokesperson is quoted by name.' },
              { t: 'Backlinks verified', d: 'Editorial links back to your website, verified for dofollow status.' },
              { t: 'Publication DA', d: 'Domain Authority of each publication, measuring the SEO weight of every placement.' },
              { t: 'Placement rate', d: 'Submissions that result in published placements. A measure of quality and targeting.' },
              { t: 'Referring domains', d: 'Unique publications linking to your site. More domains signals broader authority.' },
              { t: 'Authority trajectory', d: 'Cumulative growth of placements and backlinks over time.' },
            ].map((s, i) => (
              <div key={i} className="p-6 border border-brand-border/25">
                <h3 className="text-[13.5px] font-semibold mb-1.5">{s.t}</h3>
                <p className="text-[12px] text-brand-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight mb-6">
          Be our next success story<span className="text-brand-gold">.</span>
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">
          Book a Strategy Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </section>
    </>
  )
}
