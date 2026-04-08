'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/industries', label: 'Industries' },
  { href: '/results', label: 'Results' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/90 backdrop-blur-xl border-b border-brand-border/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded bg-brand-gold flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="font-display text-brand-black text-base font-bold leading-none">Q</span>
          </div>
          <span className="font-display text-[22px] tracking-tight text-brand-white">
            Quoted<span className="text-brand-gold">.</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[12px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${
                pathname === l.href ? 'text-brand-gold' : 'text-brand-light hover:text-brand-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden xl:inline-flex text-[12px] font-semibold tracking-[0.08em] uppercase px-5 py-2.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors duration-200"
        >
          Book a Call
        </Link>

        <button onClick={() => setOpen(!open)} className="xl:hidden text-brand-white p-1" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-brand-black/95 backdrop-blur-xl border-t border-brand-border/30 animate-fade-in">
          <nav className="px-6 py-8 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium tracking-[0.08em] uppercase ${
                  pathname === l.href ? 'text-brand-gold' : 'text-brand-light'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-brand-border/30">
              <Link
                href="/contact"
                className="inline-block text-[13px] font-semibold tracking-[0.08em] uppercase px-5 py-2.5 bg-brand-gold text-brand-black"
              >
                Book a Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
