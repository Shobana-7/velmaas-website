import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Globe, Smartphone, Cog, Palette, Cloud, Brain, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Globe, title: 'Web Development', id: 'web',
    desc: 'We build high-performance websites, web applications, and SaaS platforms using modern frameworks like React, Next.js, and Node.js.',
    features: ['Custom Website Design & Development', 'Progressive Web Applications (PWA)', 'SaaS Platform Development', 'E-commerce Solutions', 'CMS Integration & Development', 'API Development & Integration'],
  },
  {
    icon: Smartphone, title: 'Mobile App Development', id: 'mobile',
    desc: 'Native and cross-platform mobile applications for Android and iOS that deliver exceptional user experiences and business value.',
    features: ['iOS App Development (Swift)', 'Android App Development (Kotlin)', 'Cross-Platform (React Native / Flutter)', 'App Store Optimization', 'Mobile UI/UX Design', 'App Maintenance & Support'],
  },
  {
    icon: Cog, title: 'Business Automation', id: 'automation',
    desc: 'Streamline your business operations with intelligent automation solutions that reduce manual work, minimize errors, and boost productivity.',
    features: ['Workflow Automation', 'CRM & ERP Integration', 'Document Management Systems', 'Automated Reporting & Analytics', 'Process Optimization', 'Custom Business Tools'],
  },
  {
    icon: Palette, title: 'UI/UX Design', id: 'design',
    desc: 'Human-centered design that transforms complex ideas into intuitive, beautiful digital experiences that convert visitors into loyal customers.',
    features: ['User Research & Personas', 'Wireframing & Prototyping', 'Visual Design & Branding', 'Usability Testing', 'Design Systems', 'Responsive Design'],
  },
  {
    icon: Cloud, title: 'Cloud Solutions', id: 'cloud',
    desc: 'Enterprise-grade cloud migration, infrastructure, and managed services that ensure scalability, security, and cost-efficiency.',
    features: ['Cloud Migration Strategy', 'AWS / Azure / GCP Solutions', 'Cloud Architecture Design', 'DevOps & CI/CD Pipelines', 'Cloud Security', 'Managed Cloud Services'],
  },
  {
    icon: Brain, title: 'AI & Digital Transformation', id: 'ai',
    desc: 'Leverage artificial intelligence and data-driven strategies to unlock new business opportunities and gain competitive advantage.',
    features: ['AI Strategy & Consulting', 'Machine Learning Models', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision Solutions', 'Digital Transformation Roadmaps'],
  },
];

export default function Services() {
  useScrollReveal();
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [hash]);
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
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cyan-300">Our Services</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">End-to-End Digital Solutions</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              From concept to deployment and beyond — comprehensive technology services that transform your business and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-20">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className={`reveal grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-accent text-white shadow-lg shadow-accent/20">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{s.title}</h2>
                <p className="mt-4 text-lg text-muted leading-relaxed">{s.desc}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className={`relative rounded-2xl gradient-hero p-16 overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  <s.icon className="relative h-36 w-36 text-white/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Need a Custom Solution?</h2>
          <p className="mt-4 text-lg text-muted">Every business is unique. Let's discuss your specific needs and craft a tailored digital strategy.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-accent px-7 py-3.5 font-bold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105">
            Request a Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

