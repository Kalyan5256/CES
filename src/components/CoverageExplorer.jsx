import React, { useState } from 'react';
import { MapPin, Layers, ChevronRight, Info, Sparkles, Building2, Calendar, Image, Award, CheckCircle2 } from 'lucide-react';
import { COVERAGE_STATES, FUTURE_ARCHIVE_STEPS } from '../data/coverageData';

export default function CoverageExplorer() {
  const [selectedStateId, setSelectedStateId] = useState('ap');

  const selectedState = COVERAGE_STATES.find((s) => s.id === selectedStateId) || COVERAGE_STATES[0];

  return (
    <div id="reach" className="inst-card p-6 sm:p-10 lg:p-12 relative overflow-hidden border-sky-500/30">
      {/* Ambient background light */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-start max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full badge-institutional text-xs font-semibold uppercase tracking-wider mb-4">
          <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span>Regional Presence & Future Platform Preview</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight mb-4">
          Explore Our Reach
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          CES conducts awareness initiatives across intermediate educational institutions in South India. Select a state to view regional coverage details and preview the future platform archive structure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Geographic Vector Map & State Selector */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* SVG Map Container */}
          <div className="relative p-4 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-inner flex flex-col items-center">
            
            {/* Map Header / Legend */}
            <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-glow-sm" />
                <span className="text-slate-200">5 Highlighted CES States</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span>Other Indian States (Muted)</span>
              </div>
            </div>

            {/* India & South India Vector Map SVG */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] my-2">
              <svg
                viewBox="0 0 400 480"
                className="w-full h-full drop-shadow-2xl"
                aria-label="Map of India highlighting CES South Indian coverage states"
                role="img"
              >
                <defs>
                  <linearGradient id="selectedStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Muted Outline of Northern/Central/Eastern/Western India (Recognizable Geographic Contour) */}
                <g className="fill-slate-900/70 stroke-slate-800 stroke-[1.5] pointer-events-none">
                  {/* Northern Crown & Himalayas (J&K, Ladakh, HP, Punjab, Uttarakhand) */}
                  <path d="M 180 25 Q 195 10 210 25 L 225 45 L 215 70 L 245 85 L 235 125 L 210 135 L 180 120 L 155 135 L 135 105 L 150 75 Z" />
                  {/* Western India (Rajasthan, Gujarat, Maharashtra Coast) */}
                  <path d="M 135 105 L 155 135 L 135 175 Q 110 185 85 175 L 80 155 L 100 130 L 125 120 Z" />
                  {/* Central & Eastern India (MP, UP, Bihar, WB, Odisha, Chhattisgarh) */}
                  <path d="M 155 135 L 210 135 Q 260 130 295 125 L 320 160 L 285 200 L 250 220 L 210 195 L 170 205 L 135 175 Z" />
                  {/* Odisha Coastal Curve */}
                  <path d="M 250 220 L 285 200 Q 295 240 260 260 L 225 240 Z" />
                </g>

                {/* CES COVERED 5 SOUTH INDIAN STATES (Geographically Accurate & Intersecting Contours) */}
                <g>
                  {/* Telangana (TG) - Inland North South-India */}
                  <path
                    d="M 175 235 C 190 230, 215 230, 225 240 C 235 255, 235 270, 220 285 C 200 282, 185 280, 175 275 C 168 260, 168 245, 175 235 Z"
                    tabIndex={0}
                    role="button"
                    aria-label="Select Telangana"
                    aria-pressed={selectedStateId === 'tg'}
                    onClick={() => setSelectedStateId('tg')}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedStateId('tg')}
                    className={`transition-all duration-300 cursor-pointer outline-none ${
                      selectedStateId === 'tg'
                        ? 'fill-sky-500 stroke-sky-200 stroke-[2.5] filter drop-shadow-[0_0_14px_rgba(56,189,248,0.6)]'
                        : 'fill-sky-950/85 stroke-sky-500/60 stroke-[1.5] hover:fill-sky-900 hover:stroke-sky-400 hover:scale-[1.01]'
                    }`}
                  />
                  {/* Telangana Text Label */}
                  <text
                    x="200"
                    y="262"
                    className={`text-[11px] font-extrabold pointer-events-none tracking-wider ${selectedStateId === 'tg' ? 'fill-slate-950' : 'fill-sky-200'}`}
                    textAnchor="middle"
                  >
                    TG
                  </text>

                  {/* Andhra Pradesh (AP) - Coastal East wrapping around TG */}
                  <path
                    d="M 225 240 C 245 250, 260 255, 260 260 C 255 295, 240 330, 215 355 C 195 348, 180 342, 175 335 C 180 315, 178 290, 175 275 C 185 280, 200 282, 220 285 C 235 270, 235 255, 225 240 Z"
                    tabIndex={0}
                    role="button"
                    aria-label="Select Andhra Pradesh"
                    aria-pressed={selectedStateId === 'ap'}
                    onClick={() => setSelectedStateId('ap')}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedStateId('ap')}
                    className={`transition-all duration-300 cursor-pointer outline-none ${
                      selectedStateId === 'ap'
                        ? 'fill-sky-500 stroke-sky-200 stroke-[2.5] filter drop-shadow-[0_0_14px_rgba(56,189,248,0.6)]'
                        : 'fill-sky-950/85 stroke-sky-500/60 stroke-[1.5] hover:fill-sky-900 hover:stroke-sky-400 hover:scale-[1.01]'
                    }`}
                  />
                  {/* Andhra Pradesh Text Label */}
                  <text
                    x="215"
                    y="312"
                    className={`text-[11px] font-extrabold pointer-events-none tracking-wider ${selectedStateId === 'ap' ? 'fill-slate-950' : 'fill-sky-200'}`}
                    textAnchor="middle"
                  >
                    AP
                  </text>

                  {/* Karnataka (KA) - Western Peninsular State */}
                  <path
                    d="M 125 235 C 150 230, 165 235, 175 235 C 168 245, 168 260, 175 275 C 178 290, 180 315, 175 335 C 165 350, 155 365, 150 370 C 140 345, 130 320, 120 290 C 118 265, 120 250, 125 235 Z"
                    tabIndex={0}
                    role="button"
                    aria-label="Select Karnataka"
                    aria-pressed={selectedStateId === 'ka'}
                    onClick={() => setSelectedStateId('ka')}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedStateId('ka')}
                    className={`transition-all duration-300 cursor-pointer outline-none ${
                      selectedStateId === 'ka'
                        ? 'fill-sky-500 stroke-sky-200 stroke-[2.5] filter drop-shadow-[0_0_14px_rgba(56,189,248,0.6)]'
                        : 'fill-sky-950/85 stroke-sky-500/60 stroke-[1.5] hover:fill-sky-900 hover:stroke-sky-400 hover:scale-[1.01]'
                    }`}
                  />
                  {/* Karnataka Text Label */}
                  <text
                    x="148"
                    y="298"
                    className={`text-[11px] font-extrabold pointer-events-none tracking-wider ${selectedStateId === 'ka' ? 'fill-slate-950' : 'fill-sky-200'}`}
                    textAnchor="middle"
                  >
                    KA
                  </text>

                  {/* Tamil Nadu (TN) - Southeastern Southern Tip */}
                  <path
                    d="M 175 335 C 180 342, 195 348, 215 355 C 205 385, 190 415, 170 435 C 160 420, 152 390, 150 370 C 155 365, 165 350, 175 335 Z"
                    tabIndex={0}
                    role="button"
                    aria-label="Select Tamil Nadu"
                    aria-pressed={selectedStateId === 'tn'}
                    onClick={() => setSelectedStateId('tn')}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedStateId('tn')}
                    className={`transition-all duration-300 cursor-pointer outline-none ${
                      selectedStateId === 'tn'
                        ? 'fill-sky-500 stroke-sky-200 stroke-[2.5] filter drop-shadow-[0_0_14px_rgba(56,189,248,0.6)]'
                        : 'fill-sky-950/85 stroke-sky-500/60 stroke-[1.5] hover:fill-sky-900 hover:stroke-sky-400 hover:scale-[1.01]'
                    }`}
                  />
                  {/* Tamil Nadu Text Label */}
                  <text
                    x="180"
                    y="382"
                    className={`text-[11px] font-extrabold pointer-events-none tracking-wider ${selectedStateId === 'tn' ? 'fill-slate-950' : 'fill-sky-200'}`}
                    textAnchor="middle"
                  >
                    TN
                  </text>

                  {/* Kerala (KL) - Southwestern Slender Coastal Strip */}
                  <path
                    d="M 150 370 C 152 390, 160 420, 170 435 C 165 435, 150 425, 142 410 C 132 385, 138 375, 150 370 Z"
                    tabIndex={0}
                    role="button"
                    aria-label="Select Kerala"
                    aria-pressed={selectedStateId === 'kl'}
                    onClick={() => setSelectedStateId('kl')}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedStateId('kl')}
                    className={`transition-all duration-300 cursor-pointer outline-none ${
                      selectedStateId === 'kl'
                        ? 'fill-sky-500 stroke-sky-200 stroke-[2.5] filter drop-shadow-[0_0_14px_rgba(56,189,248,0.6)]'
                        : 'fill-sky-950/85 stroke-sky-500/60 stroke-[1.5] hover:fill-sky-900 hover:stroke-sky-400 hover:scale-[1.01]'
                    }`}
                  />
                  {/* Kerala Text Label */}
                  <text
                    x="146"
                    y="400"
                    className={`text-[10px] font-extrabold pointer-events-none tracking-wider ${selectedStateId === 'kl' ? 'fill-slate-950' : 'fill-sky-200'}`}
                    textAnchor="middle"
                  >
                    KL
                  </text>
                </g>

                {/* Ocean / Regional Water Label */}
                <text x="50" y="420" className="text-[10px] fill-slate-600 font-medium tracking-widest uppercase">Arabian Sea</text>
                <text x="260" y="420" className="text-[10px] fill-slate-600 font-medium tracking-widest uppercase">Bay of Bengal</text>
                <text x="140" y="465" className="text-[10px] fill-slate-600 font-medium tracking-widest uppercase">Indian Ocean</text>
              </svg>
            </div>

            {/* Instruction Footer Note */}
            <p className="text-[11px] text-slate-400 text-center font-medium mt-1">
              Click state on map or select pill below to inspect regional details
            </p>
          </div>

          {/* Interactive Touch-Friendly State Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {COVERAGE_STATES.map((state) => {
              const isSelected = state.id === selectedStateId;
              return (
                <button
                  key={state.id}
                  type="button"
                  onClick={() => setSelectedStateId(state.id)}
                  aria-pressed={isSelected}
                  className={`p-3 rounded-xl border text-left transition-all min-h-[48px] flex items-center justify-between ${
                    isSelected
                      ? 'bg-sky-500/15 border-sky-400 text-sky-300 shadow-md shadow-sky-500/10 font-bold'
                      : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-extrabold px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-sky-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {state.code}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold truncate max-w-[90px] sm:max-w-[110px]">
                      {state.name}
                    </span>
                  </div>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0" />}
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Column: Selected State Panel & Future Archive Flow Preview */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Selected State Details Panel */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col gap-4">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 block mb-1">
                  Selected State Coverage
                </span>
                <h3 className="text-2xl font-bold text-slate-100 uppercase tracking-wide flex items-center gap-2">
                  <span>{selectedState.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-extrabold border border-sky-500/30">
                    {selectedState.code}
                  </span>
                </h3>
              </div>

              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
            </div>

            {/* Verified Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedState.description}
            </p>

            {/* Verified Geographic Status Badge */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-slate-200">Documented Coverage Area: </span>
                <span>Part of CES's 5-state South India awareness network since 2009.</span>
              </div>
            </div>

            {/* Future Expansion Notice */}
            <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-500/20 flex items-start gap-3 mt-1">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <p className="text-xs text-sky-200 leading-relaxed">
                Detailed campaign coverage will be available as the CES digital archive expands in future platform releases.
              </p>
            </div>

          </div>

          {/* FUTURE ARCHIVE FLOW VISUAL CONCEPT */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col gap-4 relative">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  Future Campaign Archive Flow
                </h4>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Architecture Preview
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Preview of how state awareness activities will be organized in the future platform's archive hierarchy:
            </p>

            {/* Visual Flowchart Sequence */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                
                {/* 1. STATE (Active Selection) */}
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-sky-500/20 border border-sky-400 text-sky-300 font-semibold text-xs shadow-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedState.name}</span>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />

                {/* 2. COLLEGE (Preview) */}
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 font-medium text-xs opacity-75">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>College</span>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />

                {/* 3. YEAR (Preview) */}
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 font-medium text-xs opacity-75">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Year</span>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />

                {/* 4. CAMPAIGN (Preview) */}
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 font-medium text-xs opacity-75">
                  <Award className="w-3.5 h-3.5 text-slate-500" />
                  <span>Campaign</span>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />

                {/* 5. PHOTOS (Preview) */}
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 font-medium text-xs opacity-75">
                  <Image className="w-3.5 h-3.5 text-slate-500" />
                  <span>Photos</span>
                </div>

              </div>
            </div>

            {/* Clear Disclaimer Note */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>Detailed campaign archive will be available in the future platform.</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
