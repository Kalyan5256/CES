import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import ImpactStat from '../components/ImpactStat';
import { ORGANIZATION_DATA } from '../data/organization';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Calendar,
  BookOpen,
  HeartHandshake,
  GraduationCap,
  Target,
  Compass,
  History,
  Quote,
  Sparkles
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20 overflow-x-hidden">

      {/* ==================================================
          1. PAGE HERO
          ================================================== */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Ambient Subtle Backlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 sm:w-125 h-75 bg-sky-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col items-start max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-institutional text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>About Chundi Educational Society</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15] mb-6">
            Awareness That Shapes <span className="title-gradient">Better Futures</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            Founded by Dr. Surya Chundi in 2009, Chundi Educational Society (CES) is dedicated to youth empowerment and development through education, awareness, motivation, life skills, and leadership guidance across India.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 text-xs sm:text-sm font-medium text-slate-400 w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Established 2009</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>15 Years of Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Pan-India Focus</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. WHO WE ARE (Editorial Intro Section)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 mb-6 leading-tight">
                Non-Governmental Organization Established in 2009
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Founded by Dr. Surya Chundi, Chundi Educational Society (CES) is an NGO established in 2009. Its mission centers on empowering young minds with motivation, critical life skills, leadership abilities, and awareness to make responsible choices.
                </p>
                <p>
                  Over the past 15 years, CES has conducted structured motivational and educational sessions across institutions in India, guided by an unwavering commitment to service beyond commercialisation.
                </p>
              </div>
            </div>

            {/* Visual Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="aspect-square rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-extrabold text-slate-100 block mb-2">
                    Service Beyond Commercialisation
                  </span>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    CES has always focused on creating meaningful social impact, without commercially benefiting from its awareness and life-skills initiatives.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Institutional Social Mission</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. FOUNDER STATEMENT & QUOTE
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 border-sky-500/30">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6">
              <Quote className="w-6 h-6" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">
              Founder's Vision
            </span>

            <blockquote className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-100 leading-snug mb-6 italic">
              "{ORGANIZATION_DATA.founderQuote.quote}"
            </blockquote>

            <div className="flex flex-col items-center">
              <span className="text-base sm:text-lg font-bold text-sky-400">
                — {ORGANIZATION_DATA.founderQuote.author}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {ORGANIZATION_DATA.founderQuote.title}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          4. WHY WE FOCUS ON STUDENTS (Document-Supported Rationale)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Editorial Focus Box */}
          <div className="lg:col-span-8 inst-card p-6 sm:p-10 flex flex-col justify-between border-sky-500/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold uppercase tracking-wider mb-4">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>Crucial Transition Focus</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
                Why CES Focuses on Second-Year Intermediate Students
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                CES focuses specifically on intermediate second-year students, as this stage marks the critical transition from school life to higher education — a period when young people face pivotal decisions regarding lifestyle, academic direction, and peer influence.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                By conducting motivational, life-skills, and awareness sessions during this pivotal period, CES empowers students to build self-confidence, practice responsible decision-making, and navigate their future with clear purpose.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs font-semibold text-sky-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Transition from School Life to Higher Education & Adulthood</span>
            </div>
          </div>

          {/* Side Highlight Panel */}
          <div className="lg:col-span-4 inst-card p-6 flex flex-col justify-center bg-linear-to-b from-slate-900 to-slate-950">
            <h3 className="text-lg font-bold text-slate-100 mb-3">
              Core Strategic Pillars
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>Transition guidance from school to higher education</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>Motivation, life skills, and personality development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>Preventative awareness on substance abuse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>Career readiness and responsible citizenship</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ==================================================
          5. VISION / MILESTONE BANNER
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-14 text-center flex flex-col items-center bg-linear-to-br from-slate-900 via-slate-950 to-slate-900 border-sky-500/20">
          
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
            <Compass className="w-6 h-6" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
            Institutional Milestone
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 max-w-3xl leading-tight mb-4">
            {ORGANIZATION_DATA.visionStatement}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Building youth empowerment, motivation, and responsible citizenship across educational institutions throughout India since 2009.
          </p>
        </div>
      </section>

      {/* ==================================================
          6. SINCE 2009 (Continuous Operations)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10">
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400">
              <History className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 block">
                Continuous Operations
              </span>
              <h2 className="text-2xl font-bold text-slate-100">
                Established in 2009
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold text-amber-400 block mb-1">2009</span>
                <h3 className="text-base font-bold text-slate-100 mb-2">Established</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Established as an NGO focused on youth motivation, awareness, and development.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold title-gradient block mb-1">15 Years</span>
                <h3 className="text-base font-bold text-slate-100 mb-2">Social Impact</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  15 years of conducting structured motivational and educational sessions across India.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold text-sky-400 block mb-1">50+</span>
                <h3 className="text-base font-bold text-slate-100 mb-2">Motivational Speakers</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Active speaker network reaching 6,000+ educational institutions annually.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          7. SOCIAL IMPACT (Documented Figures)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Verified Metrics"
          title="Social Impact"
          description="Documented figures from 15 years of youth empowerment sessions across India."
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImpactStat
            value="5.4M+"
            label="Students Impacted"
            sublabel="Cumulative reach across 15 years"
            icon={BookOpen}
          />
          <ImpactStat
            value="50+"
            label="Motivational Speakers"
            sublabel="Conducting Pan-India sessions"
            icon={Users}
          />
          <ImpactStat
            value="6,000+"
            label="Institutions Annually"
            sublabel="Educational outreach programs"
            icon={Award}
          />
          <ImpactStat
            value="2009"
            label="Established"
            sublabel="Founded by Dr. Surya Chundi"
            icon={Calendar}
          />
        </div>
      </section>

      {/* ==================================================
          8. CLOSING CTA
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 text-center flex flex-col items-center">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Discover Reach & Impact
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-8 leading-relaxed">
            Explore documented figures regarding CES's institutional reach across India or view campaign visual frames.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button to="/impact" variant="primary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
              Reach & Impact
            </Button>
            <Button to="/gallery" variant="secondary" size="lg" className="w-full sm:w-auto">
              Campaign Archive
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
