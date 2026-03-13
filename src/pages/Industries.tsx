import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HardHat, Rocket, GraduationCap, ShoppingCart, Building2, ArrowRight, Check } from 'lucide-react';

const industries = [
  {
    icon: HardHat, title: 'Construction', color: 'from-amber-500 to-orange-500',
    desc: 'Digital tools for project management, site monitoring, document tracking, and real-time collaboration across construction teams.',
    solutions: ['Project Management Platforms', 'Site Progress Tracking Apps', 'Resource Planning Tools', 'Safety Compliance Systems'],
  },
  {
    icon: Rocket, title: 'SMEs & Startups', color: 'from-blue-500 to-cyan-500',
    desc: 'Scalable digital solutions designed to help startups launch fast and SMEs optimize operations without breaking the budget.',
    solutions: ['MVP Development', 'Growth-Ready Web Platforms', 'Automated Business Workflows', 'Digital Marketing Integration'],
  },
  {
    icon: GraduationCap, title: 'Education', color: 'from-purple-500 to-pink-500',
    desc: 'E-learning platforms, student management systems, and interactive educational tools that transform the learning experience.',
    solutions: ['Learning Management Systems', 'Virtual Classroom Solutions', 'Student Portal Development', 'Assessment & Analytics Tools'],
  },
  {
    icon: ShoppingCart, title: 'E-Commerce', color: 'from-green-500 to-teal-500',
    desc: 'End-to-end e-commerce solutions with seamless payment processing, inventory management, and customer engagement features.',
    solutions: ['Custom E-Commerce Platforms', 'Payment Gateway Integration', 'Inventory & Order Management', 'Customer Analytics Dashboards'],
  },
  {
    icon: Building2, title: 'Corporate Solutions', color: 'from-indigo-500 to-blue-500',
    desc: 'Enterprise-grade digital solutions for large organizations — from ERP systems to internal portals and data-driven decision tools.',
    solutions: ['Enterprise Resource Planning', 'Intranet & Portal Development', 'Business Intelligence Dashboards', 'Compliance & Reporting Tools'],
  },
];

export default function Industries() {
  useScrollReveal();
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
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cyan-300">Industries</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Solutions Tailored to Your Industry</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Every industry has unique challenges. Our solutions address specific sector needs and deliver maximum business impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-8">
          {industries.map((ind, i) => (
            <div key={i} className="reveal card-hover rounded-2xl border border-gray-200 bg-white overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className={`md:col-span-2 bg-gradient-to-br ${ind.color} relative flex items-center justify-center p-16 overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <ind.icon className="relative h-28 w-28 text-white/30" />
                </div>
                <div className="md:col-span-3 p-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900">{ind.title}</h3>
                  <p className="mt-4 text-muted leading-relaxed">{ind.desc}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {ind.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-sm text-gray-700">{s}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3">
                    Discuss Your Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Don't See Your Industry?</h2>
          <p className="mt-4 text-lg text-muted">We work across diverse sectors. Let's discuss how we can create a tailored solution for your specific industry needs.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-accent px-7 py-3.5 font-bold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105">
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

