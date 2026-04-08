import Link from 'next/link'
import { ArrowRight, Search, PenTool, Award, BarChart3, Users, FileCheck } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Earned authority acquisition through expert commentary placement. Daily monitoring, expert drafting, QA submissions, and monthly reporting.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-4">Services</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-6">
            Earned authority<span className="text-brand-gold">.</span><br />Delivered monthly.
          </h1>
          <p className="text-[15px] text-brand-light leading-relaxed max-w-xl">
            We do one thing and we do it exceptionally well: we get you quoted in real
            media through expert commentary placement. Every placement is editorially
            earned, not paid, not traded, not manufactured.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Deliverables */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight mb-12">What you get</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Users,     title: 'Spokesperson profile built for journalists',  desc: 'Credential-first bio, angle map, and quote bank that positions your experts for maximum media appeal.' },
            { icon: Search,    title: 'Daily opportunity monitoring',                desc: 'Journalist requests reviewed across major media platforms twice daily, scored and filtered for your best-fit opportunities.' },
            { icon: PenTool,   title: 'Expert commentary drafting',                  desc: 'Publication-ready quotes in your voice with the specificity, opinion, and structure journalists actually use.' },
            { icon: FileCheck, title: 'Quality-controlled submissions',              desc: 'Every response passes a rigorous QA process. No generic quotes. No AI slop. No wasted opportunities.' },
            { icon: Award,     title: 'Publication tracking and verification',        desc: 'Published placements monitored, backlinks verified, every win logged with full attribution and DA analysis.' },
            { icon: BarChart3, title: 'Monthly performance reporting',               desc: 'Clear monthly reports: submissions, placements, backlinks, authority trajectory, and strategic recommendations.' },
          ].map((c, i) => (
            <div key={i} className="p-7 lg:p-8 border border-brand-border/40 hover:border-brand-gold/20 transition-all duration-300">
              <c.icon size={20} className="text-brand-gold mb-5" strokeWidth={1.5} />
              <h3 className="text-[13.5px] font-semibold mb-2">{c.title}</h3>
              <p className="text-[12.5px] text-brand-muted leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Not this */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight mb-5">What this is not</h2>
            <p className="text-[15px] text-brand-light leading-relaxed">
              We are not a PR agency. We are not a link building service. We are not a press
              release distributor. We focus exclusively on one thing: getting your expertise
              published through earned expert commentary.
            </p>
          </div>
          <div className="space-y-2.5">
            {[
              'Press release distribution',
              'Social media management',
              'Generic PR retainers',
              'Paid or manufactured backlinks',
              'Story pitching to journalists',
              'Event or launch PR',
              'Crisis communications',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 border border-red-500/12 bg-red-500/[0.02]">
                <span className="text-red-400/80 text-xs">&#10005;</span>
                <span className="text-[13px] text-red-300/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight mb-6">
            Ready to earn authority<span className="text-brand-gold">?</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">
            Book a Strategy Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
