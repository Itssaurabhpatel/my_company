import React from 'react';
import { ArrowRight } from 'lucide-react';

const ElegantButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon, 
  iconPosition = 'right',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 hover-lift focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-slate-900 hover:bg-slate-800 text-white focus:ring-slate-900 shadow-lg',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:ring-slate-900 shadow-sm',
    outline: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white focus:ring-slate-900',
    ghost: 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-900'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 mr-2" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 ml-2" />
      )}
      {!Icon && variant === 'primary' && (
        <ArrowRight className="w-4 h-4 ml-2" />
      )}
    </button>
  );
};

export default ElegantButton;