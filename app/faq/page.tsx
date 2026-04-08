'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Reveal from '@/components/Reveal'
import Script from 'next/script'

const faqs = [
  { q: 'How is this different from a PR agency?', a: 'PR agencies pitch story ideas to journalists, manage media relationships, and handle crisis communications. We respond to active journalist requests with expert commentary designed to get your spokesperson quoted. Our model is faster, more measurable, and directly tied to earned media outcomes.' },
  { q: 'How is this different from link building?', a: 'Every backlink we earn comes from a real journalist publishing your expert quote in a real article. We do not buy, build, trade, or manufacture links. Every link carries maximum SEO value and zero penalty risk.' },
  { q: 'How quickly will I see results?', a: 'Most clients see their first published placement within 60 to 90 days. Authority building is cumulative, so results accelerate over time as your quote bank grows and your profile strengthens.' },
  { q: 'Can you guarantee placements?', a: 'We cannot guarantee a specific journalist will use a specific quote. What we guarantee is a consistent, high-quality submission process. If we do not secure at least one placement in 90 days, we extend the engagement by one month at no cost.' },
  { q: 'Why is there a setup fee?', a: 'The setup fee covers spokesperson profiling, expert extraction interviews, angle mapping, quote bank creation, and journalist-ready bio development. This foundation makes every submission stronger and increases your placement rate from day one.' },
  { q: 'Do I need to do anything ongoing?', a: 'Very little. After a 45-minute onboarding interview, we handle everything: monitoring, drafting, QA, submission, follow-up, and reporting. You only approve new angles or respond to occasional requests for a fresh perspective.' },
  { q: 'What kind of publications can I expect?', a: 'This depends on your expertise and industry. Placements range from industry trades to national business media. We score every opportunity and only pursue publications with meaningful domain authority and editorial standards.' },
  { q: 'Can I cancel anytime?', a: 'We have minimum commitments of 3 to 6 months depending on the plan. This exists because authority building is cumulative. Clients who stay beyond the minimum see the best results as compounding kicks in.' },
  { q: 'What if I already have a PR agency?', a: 'We complement PR agencies, not compete with them. PR agencies pitch stories and manage media relationships. We respond to live journalist requests with expert commentary. Most clients with PR agencies use us for the volume of earned placements their PR team cannot pursue.' },
  { q: 'Is this just Qwoted?', a: 'Qwoted is one of several journalist request platforms we monitor. Having a Qwoted account is like having a fishing rod. We sell the skill, judgment, speed, and system to consistently catch fish. We handle scoring, matching, drafting, QA, submission, follow-up, and reporting.' },
  { q: 'Why not pay per link?', a: 'Pay-per-link pricing incentivises volume over quality. Under that model, we would chase every low-value request instead of focusing on placements that build real authority. The retainer ensures we prioritise quality and strategic authority.' },
  { q: 'What SEO value does this provide?', a: 'Earned editorial backlinks are the highest-value links for SEO. A single backlink from a DA 60+ publication carries more ranking weight than dozens of directory listings or guest posts. Brand mentions also send trust signals even without a link.' },
]

// FAQ Schema structured data
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-brand-border/25">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <h3 className="text-[13.5px] font-semibold pr-8 group-hover:text-brand-gold transition-colors">{q}</h3>
        <ChevronDown size={16} className={`text-brand-muted flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <p className="text-[13px] text-brand-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-4">FAQ</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-6">
            Questions we<br />get asked<span className="text-brand-gold">.</span>
          </h1>
          <p className="text-[15px] text-brand-light leading-relaxed">
            If yours is not here, book a call and we will answer it directly.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            {faqs.map((f, i) => <Item key={i} q={f.q} a={f.a} />)}
          </div>
        </Reveal>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">
          <h2 className="font-display text-2xl tracking-tight mb-6">Still have questions<span className="text-brand-gold">?</span></h2>
          <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">
            Book a Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
