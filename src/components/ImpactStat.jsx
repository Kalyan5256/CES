import React from 'react';

export default function ImpactStat({ value, label, sublabel, icon: Icon }) {
  return (
    <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl flex flex-col items-start relative overflow-hidden group">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />
      
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5" />
        </div>
      )}

      <div className="text-4xl sm:text-5xl font-extrabold hero-gradient-text tracking-tight mb-2">
        {value}
      </div>

      <div className="text-base sm:text-lg font-semibold text-slate-100 mb-1">
        {label}
      </div>

      {sublabel && (
        <div className="text-xs text-slate-400 font-medium">
          {sublabel}
        </div>
      )}
    </div>
  );
}
