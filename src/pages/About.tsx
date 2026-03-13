import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Eye, Heart, Lightbulb, Shield, TrendingUp } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of technology trends, delivering forward-thinking solutions.' },
  { icon: Shield, title: 'Integrity', desc: 'Transparent communication and honest partnerships built on trust.' },
  { icon: Heart, title: 'Client Focus', desc: 'Your success is our mission. We listen, understand, and deliver.' },
  { icon: TrendingUp, title: 'Excellence', desc: 'We pursue the highest standards of quality in every project.' },
];

const expertise = [
  { value: '8+', label: 'Years of Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '10+', label: 'Global Clients' },
  { value: '15+', label: 'Expert Team Members' },
];

export default function About() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-cyan-400/10 blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 sm:px-8 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cyan-300">About Us</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Driving Digital Transformation Worldwide</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Velmaas Digitech is a digital solutions and technology services company dedicated to helping businesses harness the power of technology to grow, innovate, and compete in the global marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center reveal mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Our Story</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Built on Passion for Technology</h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted leading-relaxed text-lg">
              Founded with a vision to bridge the gap between business needs and cutting-edge technology, Velmaas Digitech has grown from a small web development studio into a full-service digital solutions company. Today, we serve clients across industries — from startups to enterprises.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {expertise.map((e) => (
              <div key={e.label} className="card-hover rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <div className="text-3xl font-extrabold gradient-text sm:text-4xl">{e.value}</div>
                <div className="mt-1 text-sm font-medium text-muted">{e.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="reveal card-hover rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-accent text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-gray-900">Our Mission</h3>
              <p className="mt-3 text-muted leading-relaxed">
                To empower businesses of all sizes with innovative, scalable, and reliable digital solutions that drive measurable growth and lasting competitive advantage.
              </p>
            </div>
            <div className="reveal card-hover rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-accent text-white">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-gray-900">Our Vision</h3>
              <p className="mt-3 text-muted leading-relaxed">
                To become a globally recognized digital solutions partner, known for delivering transformative technology experiences that redefine how businesses operate and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center reveal">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Leadership</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Team</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Dr. Shobana S', role: 'Founder & CEO', bio: 'Visionary leader with 10+ years in digital technology and business strategy.' },
              { name: 'Mr. Shibi Santhosh V', role: 'CTO', bio: 'Full-stack architect passionate about scalable solutions and emerging technologies.' },
              { name: 'Ms. Subhashini V S', role: 'Head of Design', bio: 'Award-winning designer focused on creating intuitive, human-centered experiences.' },
            ].map((m, i) => (
              <div key={i} className="reveal card-hover rounded-2xl border border-gray-200 bg-white p-7 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-accent text-xl font-bold text-white">{m.name[0]}</div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{m.name}</h3>
                <p className="text-sm font-semibold text-accent">{m.role}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="text-center reveal">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Our Values</span>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">What We Stand For</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={i} className="reveal card-hover group rounded-2xl border border-gray-200 bg-white p-7 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

