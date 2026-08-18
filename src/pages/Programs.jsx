import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { ORGANIZATION_DATA } from '../data/organization';
import {
  ShieldAlert,
  Activity,
  GraduationCap,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowRight,
  BookOpen,
  Users,
  Compass
} from 'lucide-react';

export default function Programs() {
  const icons = {
    'awareness': <ShieldAlert className="w-8 h-8 text-red-400" />,
    'personal-dev': <Activity className="w-8 h-8 text-amber-400" />,
    'future-ready': <GraduationCap className="w-8 h-8 text-sky-400" />,
    'citizenship': <ShieldCheck className="w-8 h-8 text-emerald-400" />
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20 overflow-x-hidden">
      
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center pt-6 sm:pt-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-institutional text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
          <span>Institutional Program Framework</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 mb-6 leading-tight">
          Our <span className="title-gradient">Programs</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Through structured motivational sessions and interactive workshops, Chundi Educational Society equips young minds with critical life skills, leadership abilities, self-confidence, and preventative awareness to make responsible choices.
        </p>
      </section>

      {/* Core Programs Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ORGANIZATION_DATA.corePillars.map((pillar) => (
            <div key={pillar.id} id={pillar.id} className="inst-card p-6 sm:p-8 flex flex-col h-full border-slate-800 hover:border-sky-500/30 group transition-all">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {icons[pillar.id]}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    India Focus
                  </div>
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Verified Institutional Focus Tags */}
              <div className="mt-auto pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <span>Interactive Institutional Delivery</span>
                <span className="text-sky-400 font-semibold">50+ Motivational Speakers</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Reach Highlight Card */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10 relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 border-sky-500/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold uppercase tracking-wider mb-4">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>Extended Institutional Outreach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
                Higher Education Outreach
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                In addition to its foundational intermediate school initiatives, CES conducts targeted motivation and career-readiness workshops reaching students in universities and pre-university colleges across India.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center shrink-0 lg:w-80">
              <span className="text-3xl sm:text-4xl font-extrabold title-gradient block mb-1">
                200,000+
              </span>
              <span className="text-sm font-bold text-slate-100 mb-1">
                Additional Students Reached
              </span>
              <span className="text-xs text-slate-400">
                Through P.U. Colleges & Universities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Methodology Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Educational Delivery"
          title="How Our Programs Create Impact"
          description="A structured, high-engagement delivery model designed to inspire positive change in youth."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">01</span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Direct Engagement</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Interactive classroom sessions directly connecting with students in comfortable, focused learning environments.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              Classroom & Seminar Formats
            </div>
          </div>

          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">02</span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Motivational Delivery</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                50+ dedicated motivational speakers delivering evidence-based guidance and inspiring real-life perspectives.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              50+ Motivational Speakers
            </div>
          </div>

          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">03</span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Life Skills & Resilience</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Empowering students with decision-making frameworks, emotional discipline, communication skills, and leadership tools.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              Practical Skill Building
            </div>
          </div>

          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">04</span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Social Responsibility</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Instilling road safety awareness, legal consciousness, ethics, and a sense of duty toward family and nation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              Responsible Citizenship
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 text-center flex flex-col items-center border-sky-500/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Discover Our Scale & Evidence
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-8 leading-relaxed">
            Explore verified operational metrics documenting CES's reach across 6,000+ institutions annually and 5.4M+ students impacted.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button to="/impact" variant="primary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
              Reach & Impact
            </Button>
            <Button to="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Contact Organization
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
