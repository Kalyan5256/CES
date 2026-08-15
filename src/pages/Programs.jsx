import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ORGANIZATION_DATA } from '../data/organization';
import { ShieldAlert, Activity, GraduationCap, ShieldCheck, MapPin } from 'lucide-react';

export default function Programs() {
  const icons = {
    'awareness': <ShieldAlert className="w-8 h-8 text-red-400" />,
    'personal-dev': <Activity className="w-8 h-8 text-amber-400" />,
    'future-ready': <GraduationCap className="w-8 h-8 text-sky-400" />,
    'citizenship': <ShieldCheck className="w-8 h-8 text-emerald-400" />
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-20 pt-24 sm:pt-32 overflow-x-hidden">
      
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 mb-6">
          Our <span className="title-gradient">Programs</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Through specialized sessions, Chundi Educational Society empowers youth with critical life skills, leadership abilities, and awareness to make responsible choices.
        </p>
      </section>

      {/* Core Programs Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ORGANIZATION_DATA.corePillars.map((pillar) => (
            <div key={pillar.id} id={pillar.id} className="inst-card p-6 sm:p-8 flex flex-col h-full border-slate-800 hover:border-sky-500/30 group">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  {icons[pillar.id]}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    Pan-India Focus
                  </div>
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Placeholder for future specific campaign images */}
              <div className="mt-auto w-full aspect-[21/9] rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden relative">
                <div className="text-xs text-slate-500 font-medium">Program specific visuals to be updated</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
