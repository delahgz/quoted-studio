import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'From expert to published source in three phases. See exactly how our earned authority process works.',
}

const phases = [
  {
    tag: 'Phase 1', time: 'Week 1 to 2', title: 'Onboarding and profile build',
    details: [
      'We conduct a 45-minute expert extraction interview with each spokesperson.',
      'We map your expertise to 10 to 20 media-ready angles journalists actually request.',
      'We build a journalist-friendly bio that leads with your strongest credentials.',
      'We create a quote bank of 10 to 20 pre-approved commentary pieces ready to deploy.',
      'We define your approval process and communication preferences.',
    ],
  },
  {
    tag: 'Phase 2', time: 'Ongoing, daily', title: 'Monitoring, matching, and submission',
    details: [
      'We review journalist requests across major media platforms twice daily.',
      'We score every opportunity on publication quality, topic match, deadline, and backlink likelihood.',
      'We draft tailored expert commentary for every high-scoring opportunity.',
      'Every response passes through our QA checklist before submission.',
      'We submit within hours of identifying an opportunity.',
    ],
  },
  {
    tag: 'Phase 3', time: 'Monthly', title: 'Tracking, reporting, and compounding',
    details: [
      'We monitor for published placements and verify backlink status.',
      'We log every win with full attribution: publication, DA, link type, article context.',
      'We deliver a monthly performance report covering submissions, placements, and backlinks.',
      'We provide strategic recommendations for angle adjustments and new topic areas.',
      'Your authority compounds month after month.',
    ],
  },
]

const strengths = [
  { t: 'Speed', d: 'Most journalist requests close within 24 hours. We respond within hours, not days.' },
  { t: 'Judgment', d: 'We score every opportunity and only pursue the ones worth your brand.' },
  { t: 'Craft', d: 'We write quotes that sound like a real expert, not a press release or a chatbot.' },
  { t: 'System', d: 'SOPs, QA checklists, scoring rubrics, and tracking at every step.' },
  { t: 'Consistency', d: 'Monthly submissions build a media footprint that compounds over time.' },
  { t: 'Proof', d: 'Every placement is tracked, verified, and reported. No guesswork.' },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-4">How It Works</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-6">
            From expert to<br />published source<span className="text-brand-gold">.</span>
          </h1>
          <p className="text-[15px] text-brand-light leading-relaxed max-w-xl">
            Our process is designed for speed, precision, and consistency. Here is exactly what happens from the day you sign up.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto">
          {phases.map((p, i) => (
            <div key={i} className="flex gap-5 lg:gap-7">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-11 h-11 rounded-full border-2 border-brand-gold flex items-center justify-center">
                  <span className="font-display text-brand-gold text-lg">{i + 1}</span>
                </div>
                {i < phases.length - 1 && <div className="w-px flex-1 bg-brand-border/30 my-2" />}
              </div>
              <div className="pb-14">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold">{p.tag}</span>
                  <span className="text-[11px] text-brand-muted">{p.time}</span>
                </div>
                <h2 className="font-display text-2xl tracking-tight mb-4">{p.title}</h2>
                <div className="space-y-2.5">
                  {p.details.map((d, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50 mt-[7px] flex-shrink-0" />
                      <p className="text-[13.5px] text-brand-light leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight mb-12 text-center">Why this works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {strengths.map((s, i) => (
              <div key={i} className="p-6 border border-brand-border/25">
                <h3 className="font-display text-lg mb-1.5">{s.t}</h3>
                <p className="text-[12.5px] text-brand-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight mb-5">Ready to start<span className="text-brand-gold">?</span></h2>
        <p className="text-brand-light text-[15px] mb-8 max-w-md mx-auto">
          Book a 30-minute strategy call and we will assess your fit, recommend a plan, and show you how we would position your expertise.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">
          Book a Strategy Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </section>
    </>
  )
}
