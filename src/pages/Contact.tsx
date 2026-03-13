import { useState, FormEvent } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `*New Enquiry from Website*`,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.phone ? `*Phone:* ${form.phone}` : '',
      form.company ? `*Company:* ${form.company}` : '',
      form.service ? `*Service Interested In:* ${form.service}` : '',
      `*Message:* ${form.message}`,
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/919965512142?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  return (
    <>
      <section className="relative gradient-hero py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-cyan-400/10 blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 sm:px-8 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cyan-300">Contact Us</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Let's Build Something Great Together</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Ready to start your project? Have a question? We'd love to hear from you. Our team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 reveal">
              <h2 className="text-2xl font-extrabold text-gray-900">Get in Touch</h2>
              <p className="mt-3 text-muted leading-relaxed">Fill out the form or reach us directly through the channels below.</p>

              <div className="mt-8 space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'support@velmaas.com', href: 'mailto:support@velmaas.com' },
                  { icon: Phone, label: 'Phone', value: '+91 9965512142', href: 'tel:+919965512142' },
                  { icon: MapPin, label: 'Office', value: '4/162, Gandhipuram, Udumalpet, Tamil Nadu, India 642154', href: '#map' },
                  { icon: Clock, label: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM', href: undefined },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-sm text-muted hover:text-accent transition-colors">{c.value}</a>
                      ) : (
                        <span className="text-sm text-muted">{c.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-10">
                <h4 className="font-bold text-gray-900">Follow Us</h4>
                <div className="mt-3 flex gap-3">
                  {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((s) => (
                    <a key={s} href="#" aria-label={s} className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-muted transition-all hover:border-accent hover:text-accent hover:shadow-sm">
                      <span className="text-xs font-bold">{s[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 reveal">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg shadow-gray-100/50 lg:p-10">
                <h3 className="text-xl font-extrabold text-gray-900">Request a Free Consultation</h3>
                <p className="mt-2 text-sm text-muted">Fill in the details below and we'll reach out within 24 hours.</p>

                {submitted && (
                  <div className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-700">
                    ✓ Thank you! Your message has been sent. We'll get back to you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Company</label>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Service Interested In</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent">
                      <option value="">Select a service</option>
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Business Automation</option>
                      <option>UI/UX Design</option>
                      <option>Cloud Solutions</option>
                      <option>AI & Digital Transformation</option>
                      <option>IT Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message *</label>
                    <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl gradient-accent px-8 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-105">
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="h-96 bg-gray-200">
        <iframe
          title="Velmaas Digitech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d77.2480!3d10.5830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUdumalpet%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1679012345678!5m2!1sen!2sin"
          className="h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

