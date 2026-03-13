import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];
const services = [
  { label: 'Web Development', id: 'web' },
  { label: 'Mobile App Development', id: 'mobile' },
  { label: 'Business Automation', id: 'automation' },
  { label: 'UI/UX Design', id: 'design' },
  { label: 'Cloud Solutions', id: 'cloud' },
  { label: 'AI Solutions', id: 'ai' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#060E1A] text-gray-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      {/* Newsletter */}
      <div className="relative border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h3 className="text-xl font-extrabold text-white">Subscribe to Our Newsletter</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">Get the latest insights on digital transformation and technology trends.</p>
            </div>
            <form className="flex w-full max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white placeholder-gray-500 backdrop-blur-sm focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all"
              />
              <button type="submit" className="rounded-xl gradient-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="lg:pr-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Velmaas Digitech" className="h-11 w-11 object-contain" />
              <div>
                <span className="text-lg font-bold text-white">Velmaas</span>
                <span className="text-lg font-light text-cyan-400"> Digitech</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Transforming businesses through innovative digital solutions. Your trusted partner for web, mobile, cloud, and AI-powered services.
            </p>
            <div className="mt-6 flex gap-3">
              {['linkedin', 'twitter', 'facebook', 'instagram'].map((s) => (
                <a key={s} href="#" aria-label={s} className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-gray-400 transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5">
                  <span className="text-xs font-bold uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-gray-400 transition-all duration-200 hover:text-cyan-400 hover:pl-1">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="text-sm text-gray-400 transition-all duration-200 hover:text-cyan-400 hover:pl-1">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-400 leading-relaxed">4/162, Gandhipuram, Udumalpet, Tamil Nadu, India 642154</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-4 w-4 text-cyan-400" />
                </div>
                <a href="tel:+919965512142" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">+91 9965512142</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-4 w-4 text-cyan-400" />
                </div>
                <a href="mailto:support@velmaas.com" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">support@velmaas.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Velmaas Digitech. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-gray-300">Terms of Service</a>
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-gray-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

