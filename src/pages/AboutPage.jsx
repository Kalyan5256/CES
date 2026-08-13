import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import ImpactStat from '../components/ImpactStat';
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
  History
} from 'lucide-react';

export default function AboutPage() {
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
            <span>About Chundi Educational Society</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15] mb-6">
            Awareness That Shapes <span className="title-gradient">Better Futures</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            Chundi Educational Society (CES) is an NGO established in 2009 focused on creating awareness among intermediate second-year students about the dangers of drugs, smoking, alcohol, and other harmful habits.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 text-xs sm:text-sm font-medium text-slate-400 w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Established 2009</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>17+ Years of Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>South India Geographic Focus</span>
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
                  Chundi Educational Society (CES) is an NGO established in 2009. Its mission is to create awareness among intermediate second-year students about the dangers of drugs, smoking, alcohol, and other harmful habits.
                </p>
                <p>
                  For the past 17 years, CES has conducted motivational and awareness sessions across educational institutions in South India. All activities are conducted free of charge — no fees are collected from students, parents, or educational institutions.
                </p>
              </div>
            </div>

            {/* Visual Frame */}
            <div className="lg:col-span-5 w-full">
              <div className="aspect-square rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold title-gradient block mb-1">
                    Free of charge
                  </span>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    No fees are collected from students, parents, or educational institutions for any CES awareness activity.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                  <span>Documented NGO Policy</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. WHY WE FOCUS ON STUDENTS (Document-Supported Rationale)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Editorial Focus Box */}
          <div className="lg:col-span-8 inst-card p-6 sm:p-10 flex flex-col justify-between border-sky-500/20">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold uppercase tracking-wider mb-4">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>Transition Stage Focus</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
                Why CES Focuses on Second-Year Intermediate Students
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                CES focuses on intermediate second-year students specifically, as this stage marks the transition from school life to higher education — a period when students commonly begin experimenting with unhealthy habits.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                By conducting motivational and awareness sessions during this period, CES aims to empower students to choose healthier futures.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs font-semibold text-sky-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Transition from School Life to Higher Education</span>
            </div>
          </div>

          {/* Side Highlight Panel */}
          <div className="lg:col-span-4 inst-card p-6 flex flex-col justify-center bg-gradient-to-b from-slate-900 to-slate-950">
            <h3 className="text-lg font-bold text-slate-100 mb-3">
              Focus Parameters
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>Transition from school life to higher education</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>Focus on drug, smoking & alcohol awareness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                <span>Educational institution sessions in South India</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ==================================================
          4. MISSION & PURPOSE (Documented Direction)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-12 relative">
          <SectionHeader
            badge="Organizational Mission"
            title="Our Mission & Purpose"
            description="Create awareness among intermediate second-year students about the dangers of drugs, smoking, alcohol, and other harmful habits."
            align="left"
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Student Awareness
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Conducting motivational sessions to educate intermediate second-year students on the dangers of drug use, smoking, alcohol, and harmful habits.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Free Educational Initiative
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Activities are conducted free of charge. No fees are collected from students, parents, or educational institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. VISION / DIRECTION
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 text-center flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-sky-500/20">
          
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
            <Compass className="w-6 h-6" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
            Organizational Theme
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 max-w-2xl leading-tight mb-4">
            "Empowering Students for a Drug-Free Future"
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Building awareness and supporting students during their transition from school life to higher education.
          </p>
        </div>
      </section>

      {/* ==================================================
          6. SINCE 2009 (Verified Timeline / History)
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
                  Established as an NGO focused on intermediate second-year student awareness.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold title-gradient block mb-1">17+</span>
                <h3 className="text-base font-bold text-slate-100 mb-2">Years of Service</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  17 years of conducting motivational and awareness sessions in South India.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold text-sky-400 block mb-1">50+</span>
                <h3 className="text-base font-bold text-slate-100 mb-2">Trainers</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Number of trainers conducting sessions across educational institutions.
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
          description="Documented figures from 17+ years of awareness sessions in South India."
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ImpactStat
            value="6.12M+"
            label="Students Trained"
            sublabel="Total cumulative trained"
            icon={BookOpen}
          />
          <ImpactStat
            value="50+"
            label="Trainers"
            sublabel="Conducting awareness sessions"
            icon={Users}
          />
          <ImpactStat
            value="17+"
            label="Years of Service"
            sublabel="Since establishment in 2009"
            icon={Calendar}
          />
          <ImpactStat
            value="Free"
            label="Free of charge"
            sublabel="No fees collected"
            icon={HeartHandshake}
          />
        </div>
      </section>

      {/* ==================================================
          8. CLOSING CTA
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 text-center flex flex-col items-center">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Discover Our Reach & Impact
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-8 leading-relaxed">
            Explore documented figures regarding CES's institutional reach across South India or view campaign visual frames.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button to="/impact" variant="primary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
              Our Reach & Impact
            </Button>
            <Button to="/gallery" variant="secondary" size="lg" className="w-full sm:w-auto">
              Gallery
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
