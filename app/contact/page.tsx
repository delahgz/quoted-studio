'use client'

import { useState } from 'react'
import { ArrowRight, Mail, Calendar } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [d, setD] = useState({ name: '', email: '', company: '', website: '', message: '' })

  const submit = () => {
    const subj = encodeURIComponent(`Quoted Studio enquiry from ${d.name}`)
    const body = encodeURIComponent(`Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company}\nWebsite: ${d.website}\n\n${d.message}`)
    window.open(`mailto:hello@quotedstudio.com.au?subject=${subj}&body=${body}`)
    setSent(true)
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 sm:pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-gold block mb-4">Contact</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-6">
            Let us talk about<br />your authority<span className="text-brand-gold">.</span>
          </h1>
          <p className="text-[15px] text-brand-light leading-relaxed max-w-xl">
            Book a 30-minute strategy call or send us a message. We will assess your fit,
            recommend a plan, and show you how we would position your expertise.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl tracking-tight mb-7">Send a message</h2>

            {sent ? (
              <div className="p-8 border border-brand-gold/25 bg-brand-gold/[0.02]">
                <h3 className="font-display text-xl mb-2">Thanks for reaching out.</h3>
                <p className="text-[13.5px] text-brand-light">We will review your details and respond within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { k: 'name' as const, l: 'Your name', p: 'Jane Smith' },
                    { k: 'email' as const, l: 'Email', p: 'jane@company.com' },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-brand-light mb-2">{f.l}</label>
                      <input
                        type={f.k === 'email' ? 'email' : 'text'}
                        value={d[f.k]}
                        onChange={(e) => setD({ ...d, [f.k]: e.target.value })}
                        placeholder={f.p}
                        className="w-full px-4 py-3 bg-brand-card border border-brand-border/40 text-[13.5px] text-brand-white placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-gold/40 transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { k: 'company' as const, l: 'Company', p: 'Company name' },
                    { k: 'website' as const, l: 'Website', p: 'https://yoursite.com' },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-brand-light mb-2">{f.l}</label>
                      <input
                        type="text"
                        value={d[f.k]}
                        onChange={(e) => setD({ ...d, [f.k]: e.target.value })}
                        placeholder={f.p}
                        className="w-full px-4 py-3 bg-brand-card border border-brand-border/40 text-[13.5px] text-brand-white placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-gold/40 transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-brand-light mb-2">Tell us about your goals</label>
                  <textarea
                    rows={5}
                    value={d.message}
                    onChange={(e) => setD({ ...d, message: e.target.value })}
                    placeholder="What expertise does your team have? What would earned media do for your business?"
                    className="w-full px-4 py-3 bg-brand-card border border-brand-border/40 text-[13.5px] text-brand-white placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-gold/40 transition-colors resize-none"
                  />
                </div>
                <button
                  onClick={submit}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors group"
                >
                  Send Message <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            <div className="p-7 border border-brand-gold/20 bg-brand-gold/[0.015]">
              <Calendar size={20} className="text-brand-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-xl mb-2.5">Book a strategy call</h3>
              <p className="text-[13px] text-brand-light leading-relaxed mb-5">
                30 minutes. We will assess fit, recommend a plan, and show you how we would position your expertise.
              </p>
              {/* REPLACE with your Calendly link */}
              <a
                href="https://calendly.com/YOUR-LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[0.06em] uppercase px-5 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors group"
              >
                Book a Call <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="p-7 border border-brand-border/40">
              <Mail size={20} className="text-brand-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-xl mb-2.5">Email us directly</h3>
              {/* REPLACE with your email */}
              <a href="mailto:hello@quotedstudio.com.au" className="text-[13.5px] text-brand-gold hover:text-brand-gold-light transition-colors">
                hello@quotedstudio.com.au
              </a>
            </div>

            <div className="p-7 border border-brand-border/40">
              <h3 className="font-display text-xl mb-3">What to expect</h3>
              <div className="space-y-2.5">
                {[
                  'We respond within 24 hours.',
                  'A 30-minute strategy call to assess fit.',
                  'A custom proposal within 4 hours of the call.',
                  'Onboarding can start the same week.',
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-[7px] flex-shrink-0" />
                    <p className="text-[13px] text-brand-light">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
