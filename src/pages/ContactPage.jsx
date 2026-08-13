import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Share2,
  Globe,
  School,
  Info
} from 'lucide-react';

export default function ContactPage() {
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
            <span>Organization Contact Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15] mb-6">
            Let's Start a <span className="title-gradient">Conversation</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            For educational institutions, community partners, or stakeholders interested in learning more about Chundi Educational Society and its student awareness initiatives.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 text-xs sm:text-sm font-medium text-slate-400 w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Free of charge</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>South India Focus</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Established 2009</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. CONTACT INTRODUCTION & OVERVIEW
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold uppercase tracking-wider mb-3">
                <School className="w-3.5 h-3.5 text-amber-400" />
                <span>Institutional Engagement</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-slate-100 mb-2">
                Connecting with Institutions & Stakeholders
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                CES conducts awareness programs for intermediate second-year students across South India. All activities are conducted free of charge — no fees are collected from students, parents, or educational institutions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shrink-0 text-xs text-slate-400 flex flex-col gap-1 w-full md:w-auto">
              <span className="font-semibold text-slate-200">Stakeholder Input Notice</span>
              <span className="text-amber-400">Official contact details to be configured</span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. CONTACT INFORMATION (Stakeholder Placeholders)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-1">
            Organization Channels
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Contact Details
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address Block */}
          <div className="inst-card p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Registered Office Address
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Official physical address to be provided by CES leadership.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                Placeholder Slot
              </span>
              <span className="text-xs font-medium text-slate-300">
                Official address to be provided
              </span>
            </div>
          </div>

          {/* Phone Block */}
          <div className="inst-card p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Phone Contact
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Official contact phone number to be provided by CES leadership.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                Placeholder Slot
              </span>
              <span className="text-xs font-medium text-slate-300">
                Official phone number to be provided
              </span>
            </div>
          </div>

          {/* Email Block */}
          <div className="inst-card p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Email Address
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Official email address to be provided by CES leadership.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                Placeholder Slot
              </span>
              <span className="text-xs font-medium text-slate-300">
                Official email address to be provided
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* ==================================================
          4. LOCATION / MAP PLACEHOLDER
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10 relative overflow-hidden">
          
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-1">
              Geographic Location
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">
              Organization Location Map
            </h2>
          </div>

          {/* Premium Map Placeholder Slot */}
          <div className="aspect-[16/8] min-h-[220px] rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">
            
            <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 mb-3 shadow-md group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-200 mb-1">
              Location Map Frame
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed mb-4">
              Official CES location map will be integrated once verified physical location details are supplied.
            </p>

            <div className="px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-slate-800 text-xs font-semibold text-amber-400">
              Google Maps Frame Slot
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          5. CONNECT WITH CES (Social & Channels Placeholder)
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-institutional text-xs font-semibold uppercase tracking-wider mb-3">
                <Share2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Digital Channels</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">
                Connect With CES Online
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                Official social media handles will be connected here upon receipt of verified organization links.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Official social links to be added</span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          7. CLOSING CTA
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 text-center flex flex-col items-center border-sky-500/20">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Explore CES Social Impact & History
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-8 leading-relaxed">
            Discover documented figures regarding CES's institutional reach across South India or read about Chundi Educational Society.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button to="/impact" variant="primary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
              Our Impact
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
