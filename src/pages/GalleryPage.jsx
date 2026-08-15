import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { GALLERY_ITEMS } from '../data/galleryData';
import {
  ArrowRight,
  ShieldCheck,
  Image as ImageIcon,
  X,
  Maximize2,
  Sparkles,
  School,
  GraduationCap
} from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close Lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
            <span>Campaign</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15] mb-6">
            Campaign <span className="title-gradient">Archive</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
            Explore selected moments from CES awareness, student development and educational initiatives across India.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 text-xs sm:text-sm font-medium text-slate-400 w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Educational Institutions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Nationwide Outreach</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Established 2009</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. GALLERY INTRODUCTION
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-6 sm:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Visual Record Frame</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-slate-100 mb-2">
                Documenting Awareness Activities
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Photographs from CES awareness activities will document its work across educational institutions. Neutral placeholder slots below are structured for future photo integration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shrink-0 text-xs text-slate-400 flex flex-col gap-1 w-full md:w-auto">
              <span className="font-semibold text-slate-200">Asset Integration Status</span>
              <span className="text-sky-400">Campaign photographs to be added</span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          3. FEATURED VISUAL GRID & PLACEHOLDER TREATMENT
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-1">
            Visual Archive Frame
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
            Campaign Photo Slots
          </h2>
        </div>

        {/* Editorial Masonry-Inspired Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`inst-card p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 ${item.colSpan}`}
            >
              {/* Image Frame Container */}
              <div className="relative w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center group-hover:border-sky-500/40 transition-colors">
                
                {item.image ? (
                  /* Real Image Rendering when available */
                  <div className={`relative w-full ${item.aspectRatio} overflow-hidden rounded-lg`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedImage(item)}
                      className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-950/80 border border-slate-700 text-slate-200 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label={`Enlarge ${item.title}`}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Branded Neutral Placeholder Treatment */
                  <div className={`w-full ${item.aspectRatio} flex flex-col items-center justify-center relative p-4`}>
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-400 mb-3 group-hover:scale-110 group-hover:text-sky-400 transition-all shadow-md">
                      <ImageIcon className="w-6 h-6" />
                    </div>

                    <span className="text-xs sm:text-sm font-bold text-slate-200 mb-1">
                      {item.title}
                    </span>

                    <span className="text-[11px] text-slate-500 font-medium">
                      CES field photograph to be added
                    </span>

                    <div className="mt-3 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[10px] uppercase tracking-wider font-semibold text-sky-400">
                      {item.categoryLabel}
                    </div>
                  </div>
                )}

              </div>

              {/* Card Footer Metadata */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
                <span>CES Campaign</span>
                <span className="text-slate-400 font-medium">Field Photograph</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ==================================================
          5. LIGHTBOX MODAL (For Viewing Available Images)
          ================================================== */}
      {selectedImage && selectedImage.image && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Content */}
            <div className="w-full aspect-video rounded-xl bg-slate-950 overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2 text-slate-300">
              <div>
                <h4 className="text-base font-bold text-slate-100">{selectedImage.title}</h4>
                <p className="text-xs text-slate-400">Chundi Educational Society</p>
              </div>
              <span className="text-xs text-sky-400 font-semibold">{selectedImage.categoryLabel}</span>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================
          7. CLOSING CTA
          ================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="inst-card p-8 sm:p-12 text-center flex flex-col items-center border-sky-500/20">
          
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6">
            <GraduationCap className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Learn More About CES Social Impact & Operations
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-8 leading-relaxed">
            Explore documented figures regarding CES's institutional reach across India or read about the organization.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button to="/impact" variant="primary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
              Reach & Impact
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
