import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on earned authority, expert commentary, SEO backlinks, and media strategy from Quoted Studio.',
}

export default function BlogPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-4">Blog</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-6">
            Authority insights<span className="text-brand-gold">.</span>
          </h1>
          <p className="text-[15px] text-brand-light leading-relaxed max-w-xl">
            Strategy, process, and lessons from earning media placements for founders and businesses every day.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-12 border border-dashed border-brand-border/40">
            <h2 className="font-display text-2xl mb-4">Coming soon</h2>
            <p className="text-[13.5px] text-brand-muted leading-relaxed mb-5">
              We are currently writing our first articles on earned authority strategy,
              expert commentary best practices, and the ROI of editorial backlinks.
            </p>
            <p className="text-[12px] text-brand-muted italic">
              In the meantime, book a call and we will share our insights directly.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">
              Book a Strategy Call <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
