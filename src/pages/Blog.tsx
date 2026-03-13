import { useScrollReveal } from '../hooks/useScrollReveal';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of AI in Business: Trends to Watch in 2026',
    excerpt: 'Artificial intelligence is reshaping industries at an unprecedented pace. Discover the key AI trends that will define business strategy this year.',
    category: 'AI & Technology',
    date: 'Mar 10, 2026',
    readTime: '6 min read',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Why Every Business Needs a Digital Transformation Strategy',
    excerpt: 'Digital transformation is no longer optional — it\'s a survival imperative. Learn how to build a comprehensive digital strategy for your organization.',
    category: 'Digital Transformation',
    date: 'Mar 5, 2026',
    readTime: '5 min read',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'React vs Next.js: Choosing the Right Framework in 2026',
    excerpt: 'Both React and Next.js have evolved significantly. Here\'s our expert analysis on which framework fits your project requirements best.',
    category: 'Web Development',
    date: 'Feb 28, 2026',
    readTime: '7 min read',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Cloud Migration: A Step-by-Step Guide for Enterprises',
    excerpt: 'Moving to the cloud doesn\'t have to be overwhelming. Follow our proven methodology for a smooth, zero-downtime migration.',
    category: 'Cloud Solutions',
    date: 'Feb 20, 2026',
    readTime: '8 min read',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Mobile App Development: Native vs Cross-Platform in 2026',
    excerpt: 'The native vs cross-platform debate continues. We break down performance, cost, and user experience considerations for each approach.',
    category: 'Mobile Development',
    date: 'Feb 15, 2026',
    readTime: '6 min read',
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'UX Design Principles That Drive Conversion',
    excerpt: 'Great UX is great business. Learn the design principles that turn casual visitors into loyal customers and brand advocates.',
    category: 'UI/UX Design',
    date: 'Feb 10, 2026',
    readTime: '5 min read',
    color: 'from-rose-500 to-red-500',
  },
];

export default function Blog() {
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
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cyan-300">Blog & Insights</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Insights & Industry Knowledge</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Stay ahead with expert insights on technology trends, digital transformation, and development best practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <article key={i} className="reveal card-hover group overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className={`aspect-[16/9] bg-gradient-to-br ${p.color} relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                  <span className="relative rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">{p.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-accent transition-colors leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-accent text-xs font-bold text-white">V</div>
                      <span className="text-xs font-medium text-muted">Velmaas Team</span>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

