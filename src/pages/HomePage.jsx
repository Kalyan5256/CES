import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import ImpactStat from '../components/ImpactStat';
import TrainerSpotlight from '../components/TrainerSpotlight';
import { ORGANIZATION_DATA } from '../data/organization';
import { GALLERY_ITEMS } from '../data/galleryData';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Calendar,
  BookOpen,
  MapPin,
  CheckCircle2,
  HeartHandshake,
  CigaretteOff,
  WineOff,
  Activity,
  ShieldAlert,
  GraduationCap,
  Image as ImageIcon
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20 overflow-x-hidden">

      {/* ==================================================
          1. HERO SECTION
          ================================================== */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] bg-sky-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Hero Main Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-institutional text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Activities Conducted Free of Charge</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15] mb-6">
              Empowering Students for a <span className="title-gradient">Drug-Free Future</span> Since 2009
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
              Chundi Educational Society (CES) is an NGO established in 2009 focused on creating awareness among intermediate second-year students about the dangers of drugs, smoking, alcohol, and other harmful habits across South India.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <Button to="/impact" variant="primary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                Our Reach & Impact
              </Button>
              <Button to="/about" variant="secondary" size="lg" className="w-full sm:w-auto">
                About CES
              </Button>
            </div>

            {/* Key Verified Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full text-slate-300 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Est. 2009 (17+ Years)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>50+ Dedicated Trainers</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free of Charge</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Frame (Featuring Real CES Campaign Photography) */}
          <div className="lg:col-span-5 w-full">
            <div className="inst-card p-4 sm:p-5 relative overflow-hidden group">
              <div className="relative aspect-[4/3] rounded-xl bg-slate-900 border border-slate-800/80 flex flex-col items-center justify-center text-center overflow-hidden">
                <img
                  src="/images/speaking-podium.jpg"
                  alt="Dr. Kalyan Chundi addressing students during a CES awareness session"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-left">
                  <div className="text-xs text-slate-200">
                    <span className="font-bold block text-sky-400">Campaign Outreach</span>
                    Interactive awareness session in progress.
                  </div>
                </div>
              </div>

              {/* Verified Institutional Ribbon */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  Campaign Session, South India
                </span>
                <span className="font-semibold text-amber-400">6.12M+ Students</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          2. IMPACT STATISTICS
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10 border-slate-800/90 relative">
          
          <div className="mb-8 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              Verified Operational Metrics
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">
              17+ Years of Social Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImpactStat
              value="2009"
              label="Established"
              sublabel="Founded as a student awareness NGO"
              icon={Calendar}
            />
            <ImpactStat
              value="17+"
              label="Years of Service"
              sublabel="Continuous educational awareness sessions"
              icon={Award}
            />
            <ImpactStat
              value="50+"
              label="Trainers"
              sublabel="Conducting institutional sessions"
              icon={Users}
            />
            <ImpactStat
              value="6.12M+"
              label="Students Trained"
              sublabel="Cumulative second-year intermediate reach"
              icon={BookOpen}
            />
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Activities are conducted free of charge. No fees are collected from students, parents, or educational institutions.</span>
            </div>
            <Link to="/impact" className="text-sky-400 font-semibold hover:underline flex items-center gap-1">
              <span>View Our Reach & Impact</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==================================================
          3. WHAT WE DO (Documented Focus Pillars)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          badge="Core Focus Areas"
          title="Awareness & Prevention Initiatives"
          description="CES specifically targets intermediate second-year students during their transition from school life to higher education."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          {/* Pillar 1: Drug Awareness */}
          <div className="inst-card p-6 flex flex-col items-start justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 mb-5">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Drug Awareness
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Educating intermediate second-year students on the dangers of drug use and illegal substance abuse.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 w-full text-xs font-semibold text-sky-400">
              Transition Phase Focus
            </div>
          </div>

          {/* Pillar 2: Anti-Smoking Awareness */}
          <div className="inst-card p-6 flex flex-col items-start justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 mb-5">
                <CigaretteOff className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Anti-Smoking Awareness
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Creating awareness about the dangers of smoking, nicotine addiction, and tobacco exposure.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 w-full text-xs font-semibold text-sky-400">
              Motivational Sessions
            </div>
          </div>

          {/* Pillar 3: Alcohol Awareness */}
          <div className="inst-card p-6 flex flex-col items-start justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 mb-5">
                <WineOff className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Alcohol Awareness
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Guiding students away from early alcohol experimentation and peer pressure before entering higher education.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 w-full text-xs font-semibold text-sky-400">
              Peer Pressure Awareness
            </div>
          </div>

          {/* Pillar 4: Harmful Habits */}
          <div className="inst-card p-6 flex flex-col items-start justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-5">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Awareness of Harmful Habits
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Empowering intermediate second-year students to make responsible choices against harmful habits.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 w-full text-xs font-semibold text-sky-400">
              Responsible Choices
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          TRAINER SPOTLIGHT (The People Behind the Mission)
          ================================================== */}
      <TrainerSpotlight />

      {/* ==================================================
          4. OUR REACH (Static South India Visual)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
                Geographic Focus
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 mb-4">
                Conducting Sessions Across South India
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                CES conducts awareness programs in educational institutions across five southern states, having reached 6.12 million+ students.
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 mb-4">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Geographic Focus: South India</span>
              </div>
            </div>

            {/* Static 5 States Grid Representation */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ORGANIZATION_DATA.statesCovered.map((state) => (
                  <div
                    key={state.code}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold text-xs flex items-center justify-center">
                        {state.code}
                      </div>
                      <span className="text-sm font-semibold text-slate-200">
                        {state.name}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Documented Focus State</span>
                  </div>
                ))}

                {/* Regional Summary Badge */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/60 to-slate-900 border border-sky-500/30 flex items-center justify-between sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center">
                      SI
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-100">South India Regional Coverage</div>
                      <div className="text-xs text-slate-400">Sessions across educational institutions</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400">Free of charge</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          5. OUR JOURNEY (Editorial Storytelling Section)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-12 relative overflow-hidden">
          
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 mb-6 leading-tight">
              Creating Awareness Since 2009
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Established in 2009, Chundi Educational Society recognized that the intermediate second-year stage marks the transition from school life to higher education — a period when students commonly begin experimenting with unhealthy habits.
              </p>
              <p>
                For 17 years, CES has conducted motivational and awareness sessions across educational institutions in South India, with all activities conducted free of charge.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-slate-100">2009</div>
                <div className="text-xs text-slate-400">Established</div>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <div className="text-2xl font-bold text-slate-100">50+</div>
                <div className="text-xs text-slate-400">Trainers</div>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <div className="text-2xl font-bold text-slate-100">6.12M+</div>
                <div className="text-xs text-slate-400">Students Trained</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          6. FEATURED GALLERY PREVIEW (Clean Neutral Placeholders)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              Awareness Campaign Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">
              Campaign Photograph Slots
            </h2>
          </div>
          <Button to="/gallery" variant="outline" size="sm" icon={ArrowRight} className="self-start sm:self-auto">
            View Gallery
          </Button>
        </div>

        {/* Clean Static Image Slots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.slice(0, 3).map((item) => (
            <div key={item.id} className="inst-card p-4 flex flex-col gap-3 group">
              <div className="aspect-[16/10] rounded-lg bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mb-2 group-hover:text-sky-400 transition-colors">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-1">
                      Campaign photograph to be added
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span>{item.categoryLabel}</span>
                <span className="text-sky-400 font-medium">South India</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          7. CLOSING CTA
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-14 text-center flex flex-col items-center relative overflow-hidden border-sky-500/20">
          
          <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
            <ShieldCheck className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-100 max-w-2xl leading-tight mb-4">
            Empowering Students for a Drug-Free Future Since 2009
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-8">
            Chundi Educational Society continues to offer awareness programs across educational institutions in South India. Activities are conducted free of charge.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button to="/impact" variant="primary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
              Our Reach & Impact
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
