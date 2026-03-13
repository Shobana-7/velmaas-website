import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Globe, Smartphone, Cog, Palette, Cloud, Brain,
  ArrowRight, CheckCircle, Users, Award, Zap,
  ChevronRight
} from 'lucide-react';

const services = [
  { icon: Globe, title: 'Web Development', desc: 'Custom websites, web apps & SaaS platforms built with modern frameworks for performance and scalability.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native & cross-platform mobile applications for Android and iOS that deliver seamless user experiences.' },
  { icon: Cog, title: 'Business Automation', desc: 'Streamline operations with intelligent automation solutions that reduce costs and boost efficiency.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Human-centered design that converts visitors into customers through intuitive, beautiful interfaces.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Cloud migration, infrastructure, and digital transformation services for enterprise scalability.' },
  { icon: Brain, title: 'AI Solutions', desc: 'AI-enabled business tools, machine learning models, and intelligent analytics for smarter decisions.' },
];

const stats = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '10+', label: 'Happy Clients' },
  { value: '15+', label: 'Team Experts' },
  { value: '99%', label: 'Client Satisfaction' },
];

const projects = [
  { title: 'E-Commerce Platform', category: 'Web Development', color: 'from-blue-500 to-cyan-500' },
  { title: 'HealthTrack Mobile App', category: 'Mobile Development', color: 'from-purple-500 to-pink-500' },
  { title: 'SmartOps Automation', category: 'Business Automation', color: 'from-amber-500 to-orange-500' },
];

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* Hero — centered layout */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:px-8 sm:py-32 lg:py-40">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-white/5 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              Innovating Digital Futures
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build. Transform.{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
                Grow Digital.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              We craft cutting-edge digital solutions that empower businesses to thrive. From web &amp; mobile to AI &amp; cloud — technology that drives real results.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl gradient-accent px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:scale-105">
                Get Free Consultation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                View Our Work
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {['20+ Projects Delivered', '99% Client Satisfaction', '24/7 Dedicated Support'].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" /> {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold gradient-text sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm font-medium text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center reveal">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">What We Do</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Core Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted leading-relaxed">End-to-end digital solutions that drive growth, efficiency, and competitive advantage.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className="reveal card-hover group rounded-2xl border border-gray-200 bg-white p-7" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-accent text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">
                  Learn More <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center reveal mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Why Velmaas Digitech</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Your Trusted Technology Partner</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted leading-relaxed">We combine deep technical expertise with a client-first approach to deliver solutions that make a real impact.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: Award, title: 'Proven Track Record', desc: '20+ successful projects delivered across industries worldwide.' },
              { icon: Users, title: 'Dedicated Expert Teams', desc: 'Skilled developers, designers, and strategists committed to your success.' },
              { icon: Zap, title: 'Agile & Transparent', desc: 'Iterative development with clear communication at every milestone.' },
              { icon: CheckCircle, title: 'End-to-End Solutions', desc: 'From strategy and design to development, deployment, and support.' },
            ].map((item) => (
              <div key={item.title} className="reveal card-hover flex gap-4 rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Portfolio Preview */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center reveal">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Our Work</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Projects</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Link to="/portfolio" key={i} className="reveal card-hover group block overflow-hidden rounded-2xl border border-gray-200" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15" />
                  <div className="relative text-center text-white">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">{p.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-xl gradient-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105">
              View All Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to Start Your Digital Journey?</h2>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">Partner with Velmaas Digitech and turn your vision into reality.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-primary transition-all duration-300 hover:scale-105">
              Get Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 font-bold text-white transition-all duration-300 hover:bg-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
