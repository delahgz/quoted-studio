import Link from 'next/link'
import {
  ArrowRight, Search, PenTool, Award, Shield, Zap,
  TrendingUp, CheckCircle2, Check, X,
} from 'lucide-react'
import Reveal from '@/components/Reveal'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-brand-gold/[0.03] blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-gold/[0.02] blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-36 pb-20 lg:pb-32">
        <div className="max-w-[820px]">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-brand-border/50 bg-brand-card/40 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-light">Earned Authority Acquisition</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.02em] mb-7">
              Your expertise<br className="hidden sm:block" />
              belongs in the press<span className="text-brand-gold">.</span><br className="hidden sm:block" />
              <em className="text-brand-gold">We put it there.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-brand-light leading-relaxed max-w-[600px] mb-10">
              Every day, journalists are looking for experts to quote. We match your
              knowledge to their requests, write sharp commentary on your behalf, and
              get you published in real media. Earned backlinks. Brand authority.
              Trust that compounds.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-all group">
                Book a Strategy Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2.5 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 border border-brand-border text-brand-white hover:border-brand-light/60 transition-colors">
                See How It Works
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function LogoBar() {
  return (
    <section className="border-y border-brand-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-10">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-muted text-center mb-6">
            Clients quoted in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {['Forbes', 'Business Insider', 'TechCrunch', 'The Australian', 'SmartCompany'].map((name, i) => (
              <span key={i} className="font-display text-[17px] text-brand-border/50 hover:text-brand-muted transition-colors select-none">{name}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-tight mb-6">
              Your competitors are getting quoted<span className="text-brand-gold">.</span> You are not.
            </h2>
            <p className="text-brand-light leading-relaxed text-[15px]">
              They are building authority that shows up in Google, in investor decks,
              and in sales conversations. Your expertise is invisible. Not because it
              is not valuable, but because nobody is putting it in front of the right
              journalists at the right time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 gap-3">
              {[
                { t: true,  text: 'Their founder quoted in Business Insider' },
                { t: false, text: 'Your founder nowhere to be found' },
                { t: true,  text: 'Their backlink profile growing monthly' },
                { t: false, text: 'Your domain authority stagnant' },
                { t: true,  text: 'Their brand trusted by default' },
                { t: false, text: 'Your brand still explaining itself' },
              ].map((r, i) => (
                <div key={i} className={`flex items-center gap-3.5 px-5 py-3.5 border ${r.t ? 'border-brand-gold/15 bg-brand-gold/[0.03]' : 'border-red-500/15 bg-red-500/[0.03]'}`}>
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${r.t ? 'bg-brand-gold' : 'bg-red-400'}`} />
                  <span className={`text-[13px] ${r.t ? 'text-brand-gold-light' : 'text-red-300/80'}`}>{r.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function WhatWeDo() {
  const cards = [
    { icon: Search, title: 'Monitor', body: 'We track journalist requests across major media platforms every day, filtering for opportunities that match your expertise and are worth pursuing.' },
    { icon: PenTool, title: 'Draft', body: 'We write expert commentary in your voice, designed to answer exactly what the journalist needs, with the specificity and opinion that gets responses published.' },
    { icon: Award, title: 'Earn', body: 'Published placements become media mentions, brand authority, and high-trust backlinks that no amount of money can buy directly.' },
  ]
  return (
    <section>
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-3">What We Do</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-tight">Three steps to published authority</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative p-8 lg:p-10 border border-brand-border/40 bg-brand-card/20 hover:border-brand-gold/25 transition-all duration-300 h-full">
                <span className="absolute top-7 right-8 font-display text-[56px] text-brand-border/20 leading-none select-none">{String(i + 1).padStart(2, '0')}</span>
                <c.icon size={22} className="text-brand-gold mb-6" strokeWidth={1.5} />
                <h3 className="font-display text-[22px] tracking-tight mb-3">{c.title}</h3>
                <p className="text-[13px] text-brand-light leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksPreview() {
  const steps = [
    { tag: 'Week 1', title: 'We build your expert profile', body: 'We interview you, map your expertise to media angles, and build a quote bank of ready-to-deploy commentary.' },
    { tag: 'Ongoing', title: 'We match and submit daily', body: 'We monitor live journalist requests, identify the best matches, draft expert responses, and submit on your behalf.' },
    { tag: 'Monthly', title: 'You get published', body: 'When a journalist uses your quote, you earn a real media mention and often a backlink. We track everything and report monthly.' },
  ]
  return (
    <section className="bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal><div className="text-center mb-14">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-3">How It Works</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-tight">From invisible expert to published authority</h2>
        </div></Reveal>
        <div className="max-w-2xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="flex gap-5 lg:gap-7">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-brand-gold flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-brand-gold text-lg">{i + 1}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-brand-border/30 my-2" />}
                </div>
                <div className="pb-12">
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold">{s.tag}</span>
                  <h3 className="font-display text-xl sm:text-2xl tracking-tight mt-1 mb-2">{s.title}</h3>
                  <p className="text-[13.5px] text-brand-light leading-relaxed">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><div className="text-center mt-4">
          <Link href="/how-it-works" className="inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[0.08em] uppercase text-brand-gold hover:text-brand-gold-light transition-colors group">
            See the full process <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div></Reveal>
      </div>
    </section>
  )
}

function Comparison() {
  const rows = [
    { label: 'Backlinks are editorially earned',        qs: true,  pr: false, bl: false, diy: false },
    { label: 'Daily journalist request monitoring',      qs: true,  pr: false, bl: false, diy: 'maybe' as const },
    { label: 'Expert commentary drafted for you',        qs: true,  pr: false, bl: false, diy: false },
    { label: 'Zero penalty risk',                        qs: true,  pr: true,  bl: false, diy: true },
    { label: 'Measurable SEO value per placement',       qs: true,  pr: false, bl: 'maybe' as const, diy: true },
    { label: 'Published in real media with attribution',  qs: true,  pr: true,  bl: false, diy: 'maybe' as const },
    { label: 'Monthly reporting with backlink tracking', qs: true,  pr: 'maybe' as const, bl: 'maybe' as const, diy: false },
    { label: 'Under AUD 5,000/month',                    qs: true,  pr: false, bl: true,  diy: true },
    { label: 'No time investment from your team',        qs: true,  pr: false, bl: true,  diy: false },
  ]
  const renderCell = (val: boolean | 'maybe') => {
    if (val === true) return <Check size={15} className="text-brand-gold mx-auto" />
    if (val === false) return <X size={15} className="text-red-400/50 mx-auto" />
    return <span className="text-[10px] text-brand-muted block text-center">varies</span>
  }
  return (
    <section>
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal><div className="text-center mb-14">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-3">Why Us</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-tight">Not PR. Not link building. Something sharper.</h2>
        </div></Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[640px]">
              <thead><tr className="border-b border-brand-border/30">
                <th className="text-left py-4 pr-4 w-[40%]" />
                <th className="py-4 px-3"><span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-brand-gold">Quoted Studio</span></th>
                <th className="py-4 px-3"><span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-brand-muted">PR Agency</span></th>
                <th className="py-4 px-3"><span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-brand-muted">Link Building</span></th>
                <th className="py-4 px-3"><span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-brand-muted">DIY</span></th>
              </tr></thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-brand-border/15">
                    <td className="py-3.5 pr-4 text-[13px] text-brand-light">{row.label}</td>
                    <td className="py-3.5 px-3 text-center">{renderCell(row.qs)}</td>
                    <td className="py-3.5 px-3 text-center">{renderCell(row.pr)}</td>
                    <td className="py-3.5 px-3 text-center">{renderCell(row.bl)}</td>
                    <td className="py-3.5 px-3 text-center">{renderCell(row.diy)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function WhoFor() {
  const items = [
    { title: 'B2B SaaS Founders', desc: 'Build authority for sales enablement, investor signaling, and competitive positioning.' },
    { title: 'Professional Services', desc: 'Position your partners as the recognised experts clients want to hire.' },
    { title: 'Finance and Fintech', desc: 'Build the trust that matters most in financial services through earned media credibility.' },
    { title: 'Growing Companies', desc: 'Build trust signals for investors, partners, and customers with earned editorial coverage.' },
  ]
  return (
    <section className="bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal><div className="text-center mb-14">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-3">Who This Is For</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-tight">Built for brands that deserve to be recognised</h2>
        </div></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((a, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="p-7 lg:p-8 border border-brand-border/40 hover:border-brand-gold/20 transition-all duration-300 h-full">
                <h3 className="font-display text-xl tracking-tight mb-2">{a.title}</h3>
                <p className="text-[13px] text-brand-light leading-relaxed">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueProps() {
  const props = [
    { icon: Shield, title: 'Zero penalty risk', desc: 'Every backlink is editorially earned. No buying. No trading. No risk.' },
    { icon: Zap, title: 'Speed wins placements', desc: 'Most requests close within 24 hours. We respond within hours, not days.' },
    { icon: TrendingUp, title: 'Authority compounds', desc: 'Your backlink profile, brand recognition, and media presence grow every month.' },
    { icon: CheckCircle2, title: 'You do almost nothing', desc: 'After a 45-minute onboarding interview, we handle everything.' },
  ]
  return (
    <section>
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}><div className="p-5 lg:p-6">
              <p.icon size={20} className="text-brand-gold mb-4" strokeWidth={1.5} />
              <h3 className="text-[13.5px] font-semibold mb-1.5">{p.title}</h3>
              <p className="text-[12px] text-brand-muted leading-relaxed">{p.desc}</p>
            </div></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  return (
    <section className="bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal><div className="max-w-2xl mx-auto text-center">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-3">Investment</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] tracking-tight mb-5">Plans from AUD 2,500/month</h2>
          <p className="text-brand-light text-[15px] leading-relaxed mb-10">Every plan includes daily monitoring, expert-matched drafting, quality-controlled submissions, publication tracking, and backlink verification.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">See Plans <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" /></Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 border border-brand-border text-brand-white hover:border-brand-light/60 transition-colors">Book a Call</Link>
          </div>
        </div></Reveal>
      </div>
    </section>
  )
}

function FAQPreview() {
  const faqs = [
    { q: 'How is this different from a PR agency?', a: 'PR agencies pitch story ideas. We respond to active journalist requests with expert commentary. Faster, more measurable, directly tied to earned media outcomes.' },
    { q: 'How is this different from link building?', a: 'Every backlink is from a real journalist publishing your expert quote. We do not buy, build, or trade links. Zero penalty risk.' },
    { q: 'How quickly will I see results?', a: 'Most clients see their first placement within 60 to 90 days. Results accelerate as your quote bank grows.' },
    { q: 'Do I need to do anything?', a: 'After a 45-minute onboarding interview, we handle everything. You only approve new angles occasionally.' },
  ]
  return (
    <section>
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <Reveal><div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-3">FAQ</span>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight tracking-tight">Common questions</h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-brand-border/25 py-5">
              <h3 className="text-[13.5px] font-semibold mb-1.5">{f.q}</h3>
              <p className="text-[13px] text-brand-muted leading-relaxed">{f.a}</p>
            </div>
          ))}
          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[0.08em] uppercase text-brand-gold hover:text-brand-gold-light transition-colors group">
              See all FAQs <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div></Reveal>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.1] tracking-tight mb-5">
            Your expertise is valuable<span className="text-brand-gold">.</span><br />It should be visible.
          </h2>
          <p className="text-brand-light text-[15px] leading-relaxed max-w-lg mx-auto mb-10">Let us put you in front of the journalists already looking for someone like you.</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2.5 text-[13px] font-semibold tracking-[0.06em] uppercase px-8 py-4 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-all group">
            Book a Strategy Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Problem />
      <WhatWeDo />
      <HowItWorksPreview />
      <Comparison />
      <WhoFor />
      <ValueProps />
      <PricingPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  )
}
