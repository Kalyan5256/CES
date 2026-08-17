import React from 'react';
import { Users, GraduationCap, Compass, ShieldCheck, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function TrainerSpotlight() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="inst-card p-6 sm:p-12 relative overflow-hidden border-sky-500/20">
        
        {/* Ambient subtle lighting */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Institutional Feature Card */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full badge-institutional text-xs font-semibold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Motivational Speaker Network</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 mb-4 leading-tight">
              The People Behind the Mission
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              More than 50 motivational speakers contribute to CES awareness, life skills, and youth empowerment initiatives across India.
            </p>

            {/* High Impact Typographic Display Box */}
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-xl flex flex-col gap-3">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-6xl font-black tracking-tight title-gradient">
                  50+
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-100">
                  Motivational Speakers
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                Facilitating interactive motivational and awareness sessions in institutions across India during annual campaign operations.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-1">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Verified Operational Scale</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-2">
                  Institutional Delivery
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Speakers conduct interactive sessions tailored specifically for young people across high schools, intermediate colleges, and institutions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>2 Sessions a Day</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-2">
                  Life Skills & Guidance
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Focusing on motivation, life skills, decision-making, leadership, personality development, and substance abuse awareness.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>60 Students per Session</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors sm:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-100 mb-1">
                    Service Beyond Commercialisation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                    CES has always focused on creating meaningful social impact, without commercially benefiting from its awareness and life-skills initiatives.
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 self-start sm:self-center flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  Social Mission
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
