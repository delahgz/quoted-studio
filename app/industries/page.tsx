import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Earned authority acquisition across SaaS, professional services, fintech, health, e-commerce, and more.',
}

const industries = [
  {
    title: 'SaaS and Technology',
    body: 'Journalists covering tech, AI, SaaS, and digital transformation constantly need credible founders and operators to quote. We match your expertise to those requests so you become the go-to source in your category.',
    angles: ['AI and automation trends', 'SaaS growth strategy', 'Product-led growth', 'Startup fundraising', 'Remote team building'],
  },
  {
    title: 'Professional Services',
    body: 'Law firms, accounting firms, and consultancies build trust through visibility. Published commentary in business and industry media positions your partners as the experts clients want to hire.',
    angles: ['Regulatory changes', 'Tax strategy', 'Employment law', 'Business advisory', 'Compliance trends'],
  },
  {
    title: 'Finance and Fintech',
    body: 'Trust is everything in finance. Earned media mentions in financial publications build the credibility that paid advertising cannot replicate. Position your founders as trusted voices in the market.',
    angles: ['Market analysis', 'Financial planning', 'Lending trends', 'Digital banking', 'Cryptocurrency regulation'],
  },
  {
    title: 'Health and Wellness',
    body: 'Consumer trust in health brands depends on expert credibility. Published commentary from qualified spokespeople builds the authority that drives conversion and retention.',
    angles: ['Preventive health', 'Mental wellness', 'Digital health', 'Nutrition science', 'Health technology'],
  },
  {
    title: 'E-commerce and DTC',
    body: 'Competitive e-commerce markets reward brands with strong authority signals. Earned media mentions and high-trust backlinks improve both search rankings and brand perception.',
    angles: ['Consumer trends', 'Supply chain', 'Sustainable retail', 'Brand building', 'Customer experience'],
  },
  {
    title: 'Real Estate and PropTech',
    body: 'Property is a trust-driven industry. Published expert commentary on market trends, investment strategy, and industry shifts positions you as the authority buyers and investors listen to.',
    angles: ['Market forecasts', 'Investment strategy', 'PropTech innovation', 'Rental market trends', 'Urban development'],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-4">Industries</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-6">
            Authority matters in<br />every industry<span className="text-brand-gold">.</span>
          </h1>
          <p className="text-[15px] text-brand-light leading-relaxed max-w-xl">
            We work across industries where expertise matters, credibility converts, and earned media creates lasting competitive advantage.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="space-y-6">
          {industries.map((ind, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-7 lg:p-9 border border-brand-border/40 hover:border-brand-gold/15 transition-all duration-300">
                <div className="lg:col-span-2">
                  <h2 className="font-display text-xl lg:text-2xl tracking-tight mb-3">{ind.title}</h2>
                  <p className="text-[13.5px] text-brand-light leading-relaxed">{ind.body}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-brand-muted mb-3">Example angles</p>
                  <div className="space-y-1.5">
                    {ind.angles.map((a, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-brand-gold/50 flex-shrink-0" />
                        <span className="text-[12.5px] text-brand-light">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight mb-3">
              Do not see your industry<span className="text-brand-gold">?</span>
            </h2>
            <p className="text-[14.5px] text-brand-light mb-8 max-w-md mx-auto">
              If your team has genuine expertise and a point of view worth publishing, we can work with you. Book a call and we will assess the fit.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">
              Book a Strategy Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
