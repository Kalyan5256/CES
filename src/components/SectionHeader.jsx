import React from 'react';

export default function SectionHeader({ badge, title, description, align = 'center', className = '' }) {
  const alignmentClasses = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignmentClasses} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-subtle text-xs font-semibold uppercase tracking-wider mb-4">
          {badge}
        </div>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
