import React from 'react';
import { Globe, HeartHandshake, School, Users } from 'lucide-react';
import indiaSvg from '../assets/maps/india.svg';

export default function StaticReachMap() {
  return (
    <div className="inst-card p-6 sm:p-10 lg:p-12 relative overflow-hidden border-sky-500/20">
      {/* Subtle Ambient Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col items-start max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-institutional text-xs font-semibold uppercase tracking-wider mb-4">
          <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span>National Outreach</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight mb-4">
          Our Reach Across India
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          CES works with educational institutions and young people across India through awareness, personal development, future readiness and responsible citizenship initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left / Center: Static High-Precision India Vector Map */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/80 shadow-inner relative overflow-hidden">
          
          {/* Decorative Top Badge */}
          <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-2 pb-2 border-b border-slate-800/60">
            <div className="flex items-center gap-2 text-sky-400 font-semibold uppercase tracking-wider text-[11px]">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Pan-India Presence</span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">Since 2009</span>
          </div>

          {/* India SVG Presentation Container */}
          <div className="w-full max-w-[380px] sm:max-w-[460px] aspect-[1/1] my-2 relative flex items-center justify-center">
            <img
              src={indiaSvg}
              alt="Map of India representing the nationwide reach of Chundi Educational Society"
              className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(2,132,199,0.18)] pointer-events-none select-none"
              role="img"
              loading="lazy"
            />
          </div>

          {/* Map Footer Attribution & Context */}
          <div className="mt-2 text-center">
            <span className="text-xs text-slate-400 font-medium">
              Unified National Operational Model • Active Nationwide
            </span>
          </div>
        </div>

        {/* Right Column: Institutional Operational Summary Cards */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <School className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">6,000+ Institutions Reached Annually</h3>
                <span className="text-xs text-sky-400 font-medium">Annual Institutional Outreach</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Conducting awareness and youth development sessions across colleges, junior colleges, and intermediate institutions nationwide.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">50+ Motivational Speakers</h3>
                <span className="text-xs text-emerald-400 font-medium">Active Speaker Network</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Dedicated motivational speakers delivering structured, high-impact sessions directly to students in classroom and seminar environments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100">Service Beyond Commercialisation</h3>
                <span className="text-xs text-amber-400 font-medium">Social Impact Focus</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              CES has always focused on creating meaningful social impact, without commercially benefiting from its awareness and life-skills initiatives.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
