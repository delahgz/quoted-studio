import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Built by an operator, not an agency guy. The story behind Quoted Studio.',
}

export default function AboutPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-4">About</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-6">
            Built by an operator<span className="text-brand-gold">.</span><br />Not an agency guy.
          </h1>
        </div>
      </section>

      <div className="divider" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-5 text-[15px] text-brand-light leading-relaxed">
            <p>
              Quoted Studio was founded after a simple observation: the gap between
              expertise and published authority is not talent. It is system and execution.
            </p>
            <p>
              After building and scaling multiple businesses, I noticed a pattern. Founders
              and experts with incredible knowledge were invisible in the media, while less
              qualified competitors were getting quoted everywhere.
            </p>
            <p>
              The difference was not expertise. It was the ability to match that expertise
              to journalist needs, write sharp commentary, and respond fast enough to win
              the placement.
            </p>
            <p>
              I started responding to journalist requests as a side project. Then I got
              good at it. Really good. I built systems for scoring opportunities, drafting
              publication-ready quotes, and submitting at speed. The placements started
              compounding.
            </p>
            <p>
              Quoted Studio exists to give other founders and businesses that same advantage.
              Not through PR fluff or manufactured backlinks, but through a precision system
              that turns real expertise into real published authority.
            </p>
          </div>

          <div className="space-y-5">
            <div className="p-7 border border-brand-border/40">
              <h3 className="font-display text-xl mb-4">What we believe</h3>
              <div className="space-y-3">
                {[
                  'Authority should be earned, not bought.',
                  'Speed and judgment win placements. Connections are optional.',
                  'One great editorial backlink is worth more than fifty manufactured ones.',
                  'The best expert commentary sounds like a person, not a press release.',
                  'Consistency beats intensity. Monthly placements compound into category authority.',
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-[7px] flex-shrink-0" />
                    <p className="text-[13.5px] text-brand-light leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 border border-brand-gold/20 bg-brand-gold/[0.015]">
              <h3 className="font-display text-xl mb-3">Based in Sydney</h3>
              <p className="text-[13.5px] text-brand-light leading-relaxed">
                Quoted Studio is based in Sydney, Australia. We work with clients across
                Australia and globally. Journalist requests do not care about time zones,
                and neither do we.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight mb-6">
            Let us earn your authority<span className="text-brand-gold">.</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">
            Book a Strategy Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
