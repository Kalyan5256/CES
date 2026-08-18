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
  GraduationCap,
  Sparkles,
  Calculator
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
            <span>Documented Institutional Reach</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15] mb-6">
            15 Years of <span className="title-gradient">Empowering Youth</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            Documenting Chundi Educational Society's sustained nationwide initiative across educational institutions throughout India — impacting students with awareness, motivation, life skills, and future readiness since 2009.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 text-xs sm:text-sm font-medium text-slate-400 w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>5.4M+ Students Impacted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>50+ Motivational Speakers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>6,000+ Institutions Annually</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. IMPACT AT A GLANCE (Primary Operational Figures)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10 border-slate-800">
          
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-1">
                Verified Cumulative Scale
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                Impact at a Glance
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full badge-gold text-xs font-semibold uppercase tracking-wider self-start sm:self-center">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{ORGANIZATION_DATA.visionStatement}</span>
            </div>
          </div>

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
              sublabel="Active nationwide network"
              icon={Users}
            />
            <ImpactStat
              value="6,000+"
              label="Institutions Annually"
              sublabel="Educational outreach programs"
              icon={School}
            />
            <ImpactStat
              value="200,000+"
              label="Additional Students"
              sublabel="Through P.U. Colleges & Universities"
              icon={GraduationCap}
            />
          </div>

        </div>
      </section>

      {/* ==================================================
          3. THE SCALE OF CES (Dedicated Calculation Section)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-12 relative overflow-hidden border-sky-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          
          <div className="flex flex-col items-start max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-institutional text-xs font-semibold uppercase tracking-wider mb-4">
              <Calculator className="w-3.5 h-3.5 text-sky-400" />
              <span>Verified Operational Methodology</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight mb-4">
              The Scale of CES
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              A transparent, structured calculation documenting how Chundi Educational Society achieves its sustained annual reach and 15-year cumulative impact across educational institutions nationwide.
            </p>
          </div>

          {/* Mathematical Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1: Daily Reach */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between relative group hover:border-sky-500/40 transition-all">
              <div>
                <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-2">
                  Step 01 • Daily Delivery
                </span>
                <div className="text-2xl font-black text-slate-100 mb-2">
                  50+ Speakers
                </div>
                <div className="text-xs text-slate-400 mb-4">
                  × 2 Sessions a Day
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xl font-bold title-gradient block">
                  = 100 Institutions
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  Reached Every Day
                </span>
              </div>
            </div>

            {/* Step 2: Annual Reach */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between relative group hover:border-sky-500/40 transition-all">
              <div>
                <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-2">
                  Step 02 • Annual Window
                </span>
                <div className="text-2xl font-black text-slate-100 mb-2">
                  100 Institutions
                </div>
                <div className="text-xs text-slate-400 mb-4">
                  × 60 Working Days
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xl font-bold title-gradient block">
                  = 6,000 Institutions
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  Reached Annually
                </span>
              </div>
            </div>

            {/* Step 3: Students Every Year */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between relative group hover:border-sky-500/40 transition-all">
              <div>
                <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-2">
                  Step 03 • Annual Students
                </span>
                <div className="text-2xl font-black text-slate-100 mb-2">
                  60 Students
                </div>
                <div className="text-xs text-slate-400 mb-4">
                  Per Session Average
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xl font-bold title-gradient block">
                  = 360,000 Students
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  Reached Every Year
                </span>
              </div>
            </div>

            {/* Step 4: 15-Year Cumulative */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-950/60 to-slate-900 border border-sky-500/40 flex flex-col justify-between relative group shadow-lg">
              <div>
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest block mb-2">
                  Step 04 • 15-Year Milestone
                </span>
                <div className="text-2xl font-black text-slate-100 mb-2">
                  15 Years
                </div>
                <div className="text-xs text-slate-400 mb-4">
                  Continuous Operations (Since 2009)
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-2xl font-black text-amber-400 block">
                  = 5.4M+ Students
                </span>
                <span className="text-[11px] text-slate-200 font-semibold">
                  Impacted Across India
                </span>
              </div>
            </div>

          </div>

          {/* Extended Reach Footnote Banner */}
          <div className="mt-8 p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-slate-300">
              <GraduationCap className="w-5 h-5 text-sky-400 shrink-0" />
              <span>
                <strong>Additional Reach:</strong> In addition to the intermediate campaign, CES has reached <strong>200,000+ Additional Students</strong> through P.U. Colleges & Universities.
              </span>
            </div>
            <span className="text-[11px] text-slate-500 shrink-0">Verified Institutional Figure</span>
          </div>

        </div>
      </section>

      {/* ==================================================
          4. REACH ACROSS INDIA (Static Decorative India Vector Map)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <StaticReachMap />
      </section>

      {/* ==================================================
          5. HOW THE AWARENESS SESSIONS WORK (Delivery Framework)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Awareness Delivery Process"
          title="How the Awareness Sessions Work"
          description="A structured delivery model tailored for young people navigating critical transition stages."
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
                Reaching 6,000+ educational institutions and communities across India every year.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              6,000+ Institutions Annually
            </div>
          </div>

          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">
                02
              </span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Motivational Delivery
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                50+ motivational speakers conducting interactive sessions to inspire and guide students.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              50+ Motivational Speakers
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
                Engaging students directly with life skills, motivation, leadership, and positive goal setting.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              Direct Student Engagement
            </div>
          </div>

          <div className="inst-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-sky-400 uppercase tracking-widest block mb-3">
                04
              </span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Preventative & Social Values
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Empowering youth with awareness on substance abuse, road safety, ethics, and responsible citizenship.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-medium">
              Prevention & Citizenship
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          6. SERVICE BEYOND COMMERCIALISATION
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-emerald-500/20">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Institutional Social Mission</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 mb-4 leading-tight">
                Service Beyond Commercialisation
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-medium">
                CES has always focused on creating meaningful social impact, without commercially benefiting from its awareness and life-skills initiatives.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="whitespace-nowrap">Youth Development</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="whitespace-nowrap">Nationwide Outreach</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="whitespace-nowrap">Purpose-Driven Impact</span>
                </div>
              </div>
            </div>

            <div className="lg:w-80 shrink-0 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 text-center flex flex-col items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-emerald-400 mb-3" />
              <span className="text-xl font-extrabold text-slate-100 mb-2">Social Mission</span>
              <span className="text-xs sm:text-sm font-bold text-sky-400 tracking-wider uppercase">
                15 YEARS. MILLIONS OF LIVES. ONE VISION.
              </span>
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
            Awareness and motivation are most powerful when they reach young people before critical life decisions take shape.
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
            Empowering students across India with self-belief, life skills, and positive direction for purposeful futures.
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
