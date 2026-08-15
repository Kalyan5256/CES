import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import ImpactStat from '../components/ImpactStat';
import StaticReachMap from '../components/StaticReachMap';
import { ORGANIZATION_DATA } from '../data/organization';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Calendar,
  BookOpen,
  MapPin,
  HeartHandshake,
  Clock,
  School,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';

export default function ImpactPage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20 overflow-x-hidden">

      {/* ==================================================
          1. PAGE HERO
          ================================================== */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Ambient Subtle Backlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-sky-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-institutional text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Reach & Impact</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15] mb-6">
            17+ Years of <span className="title-gradient">Empowering Youth</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            Documenting Chundi Educational Society's sustained nationwide initiative across educational institutions and communities throughout India, reaching students with awareness, life skills, and development programs since 2009.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 text-xs sm:text-sm font-medium text-slate-400 w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>6.12M+ Students Trained</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Free of charge</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Pan-India Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. IMPACT AT A GLANCE (Dominant Primary Figures)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10 border-slate-800">
          
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-1">
              Verified Cumulative Scale
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Impact at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImpactStat
              value="6.12M+"
              label="Students Trained"
              sublabel="Cumulative trained total"
              icon={BookOpen}
            />
            <ImpactStat
              value="50+"
              label="Training Teams"
              sublabel="Number of active teams"
              icon={Users}
            />
            <ImpactStat
              value="6,000+"
              label="Institutions Annually"
              sublabel="Educational outreach"
              icon={School}
            />
            <ImpactStat
              value="17+"
              label="Years of Service"
              sublabel="Years of operation"
              icon={Award}
            />
          </div>

        </div>
      </section>

      {/* ==================================================
          3. THE SCALE OF THE WORK (Documented Operational Metrics)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-12 relative overflow-hidden">
          
          <div className="flex flex-col items-start max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Project Documentation Metrics</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 leading-tight mb-4">
              The Scale of the Work
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Operational parameters as explicitly stated in the CES project documentation.
            </p>
          </div>

          {/* Operational Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-100 block mb-1">50+</span>
                <div className="text-sm font-bold text-sky-400 mb-2">Training Teams</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dedicated teams conducting sessions across institutions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
                Active Training Teams
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-100 block mb-1">2</span>
                <div className="text-sm font-bold text-sky-400 mb-2">Average Sessions per Team per Day</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Average sessions per team per day.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
                Average Daily Sessions
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-100 block mb-1">60+</span>
                <div className="text-sm font-bold text-sky-400 mb-2">Average Students per Session</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Average students per session.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
                Average Session Attendance
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 block mb-1">2 Months</span>
                <div className="text-sm font-bold text-sky-400 mb-2">Annual Campaign Duration</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Annual awareness campaign duration.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
                Annual Campaign Window
              </div>
            </div>

          </div>

          {/* Source Attribution Note */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Operational figures sourced directly from CES Project Documentation Section 1.2.</span>
          </div>

        </div>
      </section>

      {/* ==================================================
          4. REACH ACROSS INDIA (Static Decorative Pan-India Vector Map)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <StaticReachMap />
      </section>

      {/* ==================================================
          5. HOW THE AWARENESS SESSIONS WORK (Simple 4-Step Process)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Awareness Delivery Process"
          title="How the Awareness Sessions Work"
          description="Sessions conducted across educational institutions for intermediate second-year students."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">
                01
              </span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Educational Institutions
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Conducting sessions across educational institutions and communities across India.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              Institutional Sessions
            </div>
          </div>

          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">
                02
              </span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Awareness Sessions
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                50+ trainers conducting motivational and awareness sessions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              50+ Trainers
            </div>
          </div>

          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">
                03
              </span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Student Engagement
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Creating awareness among intermediate second-year students during transition to higher education.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              Second-Year Students
            </div>
          </div>

          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">
                04
              </span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Harmful Habit Awareness
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Awareness about the dangers of drugs, smoking, alcohol, and other harmful habits.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              Dangers of Harmful Habits
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          6. FREE ACCESS (Free of charge Notice)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-emerald-500/20">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Activities Conducted Free of Charge</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 mb-4 leading-tight">
                Free of Charge Initiative
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                All activities are conducted free of charge. No fees are collected from:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Students</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Parents</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Educational Institutions</span>
                </div>
              </div>
            </div>

            <div className="lg:w-72 shrink-0 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center flex flex-col items-center justify-center">
              <GraduationCap className="w-10 h-10 text-emerald-400 mb-3" />
              <span className="text-2xl font-extrabold text-slate-100 mb-1">Free of charge</span>
              <span className="text-xs text-slate-400">No Fees Collected</span>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          7. IMPACT STATEMENT
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 text-center flex flex-col items-center">
          
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
            Impact Statement
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 max-w-3xl leading-tight mb-4">
            Awareness is most powerful when it reaches students before harmful habits become part of their lives.
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Creating awareness among intermediate second-year students as they transition from school life to higher education.
          </p>

        </div>
      </section>

      {/* ==================================================
          8. CLOSING CTA
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 text-center flex flex-col items-center border-sky-500/20">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Explore Campaign Archive & Organization Details
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-8 leading-relaxed">
            View campaign visual frames or learn more about Chundi Educational Society.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button to="/gallery" variant="primary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
              Campaign Archive
            </Button>
            <Button to="/about" variant="secondary" size="lg" className="w-full sm:w-auto">
              About CES
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
