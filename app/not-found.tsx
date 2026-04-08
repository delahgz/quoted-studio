import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-48 text-center">
      <span className="font-display text-[120px] lg:text-[160px] text-brand-border/20 leading-none select-none block mb-4">404</span>
      <h1 className="font-display text-3xl lg:text-4xl tracking-tight mb-4">
        Page not found<span className="text-brand-gold">.</span>
      </h1>
      <p className="text-[15px] text-brand-light mb-8 max-w-md mx-auto">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group">
        Back to Home <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </section>
  )
}
