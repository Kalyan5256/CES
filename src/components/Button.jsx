import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  type = 'button'
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none touch-target select-none';

  const variants = {
    primary: 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/20 hover:shadow-sky-400/30 font-bold',
    gold: 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 font-bold',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-600',
    outline: 'bg-transparent hover:bg-slate-900 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500',
    ghost: 'bg-transparent hover:bg-slate-900/60 text-slate-300 hover:text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5 min-h-[40px]',
    md: 'px-5 py-2.5 text-sm gap-2 min-h-[44px]',
    lg: 'px-7 py-3.5 text-base gap-2.5 min-h-[50px]'
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
        {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </button>
  );
}
