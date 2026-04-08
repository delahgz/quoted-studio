import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-brand-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded bg-brand-gold flex items-center justify-center">
                <span className="font-display text-brand-black text-base font-bold leading-none">Q</span>
              </div>
              <span className="font-display text-[22px] tracking-tight text-brand-white">
                Quoted<span className="text-brand-gold">.</span>
              </span>
            </Link>
            <p className="text-[13px] text-brand-muted leading-relaxed max-w-[280px]">
              Earned authority acquisition for founders and businesses who deserve to be quoted in real media.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-light mb-5">Service</h4>
            <nav className="flex flex-col gap-3">
              {[
                ['/services', 'Services'],
                ['/how-it-works', 'How It Works'],
                ['/pricing', 'Pricing'],
                ['/industries', 'Industries'],
                ['/results', 'Results'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-[13px] text-brand-muted hover:text-brand-white transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-light mb-5">Company</h4>
            <nav className="flex flex-col gap-3">
              {[
                ['/about', 'About'],
                ['/faq', 'FAQ'],
                ['/blog', 'Blog'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-[13px] text-brand-muted hover:text-brand-white transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-light mb-5">Get Started</h4>
            <p className="text-[13px] text-brand-muted leading-relaxed mb-5">
              Book a 30-minute strategy call to see if we are the right fit for your brand.
            </p>
            <Link
              href="/contact"
              className="inline-block text-[12.5px] font-semibold tracking-[0.08em] uppercase px-5 py-2.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>

        <div className="divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-brand-muted">
            &copy; {new Date().getFullYear()} Quoted Studio. All rights reserved.
          </p>
          <p className="text-[11px] text-brand-muted">
            Sydney, Australia
          </p>
        </div>
      </div>
    </footer>
  )
}
