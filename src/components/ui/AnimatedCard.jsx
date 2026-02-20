import React from 'react';

const AnimatedCard = ({ 
  children, 
  className = '',
  hoverEffect = true,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-500';
  const hoverClasses = hoverEffect ? 'hover:shadow-xl hover-lift' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default AnimatedCard;