import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Earned authority plans from AUD 2,500/month. Three tiers for different stages of growth.',
}

const tiers = [
  {
    name: 'Starter',
    sub: 'Test the waters',
    price: '2,500',
    setup: '1,500',
    term: '3 months',
    feat: true,
    popular: false,
    features: [
      '1 spokesperson',
      'Up to 15 submissions/month',
      'Spokesperson profile and bio',
      'Quote bank (10 angles)',
      'Daily opportunity monitoring',
      'QA-controlled submissions',
      'Monthly PDF report',
      'Backlink tracking',
    ],
    best: 'Solo founders testing earned authority for the first time.',
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    sub: 'Build consistent authority',
    price: '3,500',
    setup: '2,000',
    term: '6 months',
    feat: true,
    popular: true,
    features: [
      'Up to 2 spokespeople',
      'Up to 25 submissions/month',
      'Full spokesperson profiles and bios',
      'Quote banks (15 angles each)',
      'Daily opportunity monitoring',
      'Priority placement pursuit',
      'QA-controlled submissions',
      'Monthly strategy report',
      'Backlink tracking dashboard',
    ],
    best: 'Growing B2B companies wanting systematic, consistent authority.',
    cta: 'Get Started',
  },
  {
    name: 'Authority',
    sub: 'Dominate your niche',
    price: '5,000+',
    setup: '2,500',
    term: '6 months',
    feat: true,
    popular: false,
    features: [
      'Up to 4 spokespeople',
      'Up to 40 submissions/month',
      'Full spokesperson profiles',
      'Expanded quote banks (20+ angles)',
      'Priority same-day monitoring',
      'Premium publication targeting',
      'Dedicated Slack channel',
      'Monthly report + quarterly audit',
      'Competitor benchmarking',
    ],
    best: 'Serious brands wanting to own their category in media.',
    cta: 'Talk to Us',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-4">Pricing</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-5">
            Invest in authority<br />that compounds<span className="text-brand-gold">.</span>
          </h1>
          <p className="text-[15px] text-brand-light leading-relaxed max-w-lg mx-auto">
            Every plan includes daily monitoring, expert-matched drafting, quality-controlled
            submissions, publication tracking, and backlink verification.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Tiers */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 lg:p-9 border transition-all duration-300 ${
                t.popular ? 'border-brand-gold/30 bg-brand-gold/[0.025]' : 'border-brand-border/40 hover:border-brand-border/70'
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-8 px-3 py-1 bg-brand-gold text-brand-black text-[10px] font-bold tracking-[0.15em] uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display text-2xl tracking-tight">{t.name}</h3>
                <p className="text-[12px] text-brand-muted mt-0.5">{t.sub}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-[11px] text-brand-muted">AUD</span>
                  <span className="font-display text-[38px] tracking-tight">{t.price}</span>
                  <span className="text-[13px] text-brand-muted">/month</span>
                </div>
                <p className="text-[11.5px] text-brand-muted mt-1.5">AUD {t.setup} setup &middot; {t.term} minimum</p>
              </div>

              <div className="flex-1 space-y-2.5 mb-7">
                {t.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <Check size={14} className="text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] text-brand-light">{f}</span>
                  </div>
                ))}
              </div>

              <p className="text-[12px] text-brand-muted leading-relaxed italic mb-5">Best for: {t.best}</p>

              <Link
                href="/contact"
                className={`w-full text-center text-[12.5px] font-semibold tracking-[0.06em] uppercase py-3 transition-colors ${
                  t.popular
                    ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-light'
                    : 'border border-brand-border text-brand-white hover:border-brand-light/60'
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Included */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <h2 className="font-display text-2xl tracking-tight mb-8 text-center">Included in every plan</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              'Daily opportunity monitoring',
              'Expert-matched drafting',
              'QA-controlled submissions',
              'Publication tracking',
              'Backlink verification',
              'Monthly reporting',
              'Bio development',
              'Angle mapping',
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check size={13} className="text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-[12.5px] text-brand-light">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup fee */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl tracking-tight mb-5">Why there is a setup fee</h2>
          <p className="text-[14.5px] text-brand-light leading-relaxed mb-3">
            The setup fee covers spokesperson profiling, expert extraction interviews, angle
            mapping, quote bank creation, and journalist-ready bio development.
          </p>
          <p className="text-[14.5px] text-brand-light leading-relaxed">
            Without this upfront work, you are throwing generic quotes at journalists and
            hoping something sticks. Our onboarding is what separates consistent placement
            rates from wasted effort.
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 text-center">
          <div className="max-w-xl mx-auto border border-brand-gold/20 p-8 bg-brand-gold/[0.015]">
            <h3 className="font-display text-xl mb-2.5">Our commitment</h3>
            <p className="text-[13.5px] text-brand-light leading-relaxed">
              If we do not secure at least one published placement in the first 90 days
              despite full cooperation from your team, we extend the engagement by one month at no cost.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] tracking-tight mb-5">Not sure which plan<span className="text-brand-gold">?</span></h2>
        <p className="text-brand-light text-[15px] mb-8 max-w-md mx-auto">
          Book a call and we will recommend the right plan based on your expertise, goals, and team.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">
          Book a Strategy Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </section>
    </>
  )
}
