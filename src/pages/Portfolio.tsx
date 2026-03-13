import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Web Development', 'Mobile Apps', 'Business Automation', 'UI/UX Design', 'Cloud', 'AI'];

const projects = [
  { title: 'ShopVista E-Commerce', category: 'Web Development', desc: 'A full-featured e-commerce platform with real-time inventory management, payment gateway integration, and analytics dashboard.', tech: ['React', 'Node.js', 'MongoDB'], color: 'from-blue-500 to-cyan-500' },
  { title: 'HealthTrack Pro', category: 'Mobile Apps', desc: 'Cross-platform health monitoring app with wearable integration, appointment scheduling, and telemedicine features.', tech: ['React Native', 'Firebase', 'HealthKit'], color: 'from-purple-500 to-pink-500' },
  { title: 'SmartOps Suite', category: 'Business Automation', desc: 'Enterprise workflow automation platform that reduced manual processing by 75% and improved operational efficiency.', tech: ['Python', 'RPA', 'PostgreSQL'], color: 'from-amber-500 to-orange-500' },
  { title: 'FinanceHub Dashboard', category: 'UI/UX Design', desc: 'Intuitive financial analytics dashboard with real-time data visualization, custom reports, and role-based access.', tech: ['Figma', 'React', 'D3.js'], color: 'from-green-500 to-teal-500' },
  { title: 'CloudFirst Migration', category: 'Cloud', desc: 'Complete cloud migration for a mid-size enterprise, moving 50+ services to AWS with zero downtime.', tech: ['AWS', 'Terraform', 'Docker'], color: 'from-indigo-500 to-blue-500' },
  { title: 'InsightAI Analytics', category: 'AI', desc: 'AI-powered business intelligence platform with predictive analytics, NLP-based search, and automated reporting.', tech: ['Python', 'TensorFlow', 'React'], color: 'from-rose-500 to-red-500' },
  { title: 'EduLearn Platform', category: 'Web Development', desc: 'Online learning management system with video streaming, interactive quizzes, and progress tracking.', tech: ['Next.js', 'Prisma', 'Stripe'], color: 'from-cyan-500 to-blue-600' },
  { title: 'BuildTracker App', category: 'Mobile Apps', desc: 'Construction project management app with real-time tracking, document sharing, and team collaboration.', tech: ['Flutter', 'Firebase', 'Maps API'], color: 'from-yellow-500 to-amber-500' },
];

export default function Portfolio() {
  useScrollReveal();
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);
  const gridRef = useRef<HTMLDivElement>(null);

  // Re-observe new cards whenever the filter changes
  useEffect(() => {
    if (!gridRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    gridRef.current.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

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
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cyan-300">Portfolio</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Our Work Speaks for Itself</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Explore our portfolio of successful projects across web, mobile, cloud, and AI — each crafted to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === c ? 'gradient-accent text-white shadow-lg shadow-accent/25' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <div key={p.title} className="reveal card-hover group overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} relative flex items-center justify-center overflow-hidden`}>
                  <div className="text-center text-white p-6">
                    <div className="text-6xl font-extrabold opacity-15">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      View Details <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{p.category}</span>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Have a Project in Mind?</h2>
          <p className="mt-4 text-lg text-slate-300">Let's discuss how we can bring your vision to life with our expertise.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-primary transition-all duration-300 hover:scale-105">
            Start Your Project <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

