import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features = [],
  color = 'slate',
  className = '' 
}) => {
  const colorClasses = {
    slate: 'bg-slate-100 text-slate-600',
    blue: 'bg-blue-100 text-blue-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600'
  };

  return (
    <AnimatedCard className={`p-8 ${className}`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[color]}`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
        {title}
      </h3>
      
      <p className="text-slate-600 mb-6 leading-relaxed">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-slate-600">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <a
        href="/contact"
        className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300 group/link"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
      </a>
    </AnimatedCard>
  );
};

export default ServiceCard;