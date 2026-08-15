import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import { ORGANIZATION_DATA } from '../data/organization';
import { FOOTER_SECTIONS } from '../data/navigation';
import cesLogo from '../assets/logo/ces-logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Accent Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-slate-800/60">
          
          {/* Main Organization Info Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700/80 p-2 flex items-center justify-center">
                <img src={cesLogo} alt="CES Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-100 tracking-tight">
                  Chundi Educational Society
                </span>
                <span className="text-xs text-sky-400 font-medium">
                  Non-Governmental Organization (Est. 2009)
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Creating high-impact youth empowerment and development programs across educational institutions in India.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>17+ Years of Dedicated Service</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>Free of charge</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-slate-200">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Metadata & Verified Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {ORGANIZATION_DATA.establishedYear}–{new Date().getFullYear()} Chundi Educational Society (CES). All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <span>Pan-India Operations</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <Link to="/contact" className="hover:text-sky-400 transition-colors">Contact Organization</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
