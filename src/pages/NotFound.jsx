import React, { useEffect } from 'react';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Crown,
  Sparkles,
  Compass,
  Navigation,
  Rocket,
  Star,
  Zap
} from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    // Add floating animation for stars
    const stars = document.querySelectorAll('.floating-star');
    stars.forEach((star, index) => {
      star.style.animationDelay = `${index * 0.5}s`;
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 sm:px-6 relative overflow-hidden py-8">
      {/* Golden Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#FFB400] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#FFB400] rounded-full blur-3xl"></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute top-12 left-8 sm:top-20 sm:left-20 floating-star">
        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400] opacity-60" />
      </div>
      <div className="absolute top-28 right-16 sm:top-40 sm:right-32 floating-star">
        <Star className="w-2 h-2 sm:w-3 sm:h-3 text-[#FFD700] opacity-40" />
      </div>
      <div className="absolute bottom-24 left-16 sm:bottom-32 sm:left-32 floating-star">
        <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-[#FFB400] opacity-50" />
      </div>
      <div className="absolute bottom-28 right-12 sm:bottom-40 sm:right-20 floating-star">
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700] opacity-30" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(#FFB400_1px,transparent_1px),linear-gradient(90deg,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
      </div>

      <div className="text-center text-white relative z-10 w-full max-w-2xl">
        {/* Golden Badge */}
        <div className="animate-on-scroll opacity-0 translate-y-8">
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-8 sm:mb-12 mt-8 sm:mt-24 border border-[#FFB400]/20">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
            <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
              Digital Navigation Required
            </span>
          </div>
        </div>

        {/* Animated 404 */}
        <div className="animate-on-scroll opacity-0 translate-y-8 mb-8 sm:mb-12">
          <div className="relative">
            <div className="text-7xl sm:text-8xl md:text-9xl font-black mb-4">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                404
              </span>
            </div>
            
            {/* Golden Accent Line */}
            <div className="relative">
              <div className="w-24 h-1 sm:w-32 sm:h-1 bg-gradient-to-r from-[#FFB400] to-[#FFD700] mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <div className="absolute inset-0 w-24 h-1 sm:w-32 sm:h-1 bg-[#FFB400] mx-auto mb-6 sm:mb-8 rounded-full blur-sm opacity-50"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 animate-bounce">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFB400]" />
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 animate-bounce delay-1000">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFD700]" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="animate-on-scroll opacity-0 translate-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              Page Not Found
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-md mx-auto leading-relaxed font-light tracking-wide px-4">
            Looks like the link you followed doesn't exist. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="animate-on-scroll opacity-0 translate-y-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
          <a
            href="/"
            className="group relative bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden w-full sm:w-auto"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Back to Homepage</span>
            </span>
          </a>
          
          <a
            href="/portfolio"
            className="group relative border-2 border-[#FFB400] text-[#FFB400] hover:bg-[#FFB400] hover:text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-500 hover:scale-105 overflow-hidden w-full sm:w-auto"
          >
            {/* Golden Background on Hover */}
            <div className="absolute inset-0 bg-[#FFB400] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
            
            <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Explore Solutions</span>
            </span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="animate-on-scroll opacity-0 translate-y-8 border-t border-slate-700 pt-8 sm:pt-12 mb-8 sm:mb-10">
          <p className="text-slate-400 mb-4 sm:mb-6 font-light text-sm sm:text-base">Navigate to our core services:</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4">
            {[
              { name: 'Solutions', href: '/solutions', icon: <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" /> },
              { name: 'Products', href: '/products', icon: <Crown className="w-3 h-3 sm:w-4 sm:h-4" /> },
              { name: 'About Us', href: '/about', icon: <Rocket className="w-3 h-3 sm:w-4 sm:h-4" /> },
              { name: 'Contact', href: '/contact', icon: <Navigation className="w-3 h-3 sm:w-4 sm:h-4" /> }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center space-x-1 sm:space-x-2 text-slate-300 hover:text-[#FFB400] transition-all duration-300 hover:scale-110 text-sm sm:text-base"
              >
                <span className="text-[#FFB400] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {link.icon}
                </span>
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Golden Particles */}
        <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64">
          <div className="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFB400] rounded-full animate-ping"></div>
          <div className="absolute top-6 right-12 sm:top-8 sm:right-16 w-1 h-1 sm:w-1 sm:h-1 bg-[#FFD700] rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-8 left-16 sm:bottom-12 sm:left-20 w-1 h-1 sm:w-1 sm:h-1 bg-[#FFB400] rounded-full animate-ping delay-700"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        .animate-on-scroll {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .floating-star {
          animation: float 6s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .floating-star {
            animation: float 4s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;