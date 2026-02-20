import React from 'react';
import { Star } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company, 
  rating = 5,
  image,
  className = '' 
}) => {
  return (
    <AnimatedCard className={`p-8 ${className}`}>
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-600 leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full mr-4"
          />
        )}
        <div>
          <div className="font-semibold text-slate-900">{author}</div>
          <div className="text-sm text-slate-600">{position}</div>
          <div className="text-sm text-slate-500">{company}</div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default TestimonialCard;