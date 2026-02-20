import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../data/services';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Target,
  Crown,
  Diamond,
  Rocket,
  Sparkles,
  Zap,
  Shield,
  Code2,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Settings,
  ArrowUpRight,
  Star,
  Award
} from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId) || services[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
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

  // Icon mapping for services
  const serviceIcons = {
    'custom-software': <Code2 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />,
    'web-development': <Globe className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />,
    'mobile-development': <Smartphone className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />,
    'ui-ux-design': <Palette className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />,
    'cloud-architecture': <Cloud className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />,
    'maintenance': <Settings className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
  };

  const stats = [
    { icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, label: '4-24 weeks delivery' },
    { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, label: 'Dedicated elite team' },
    { icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, label: 'Agile methodology' },
    { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, label: 'Enterprise security' }
  ];

  return (
    <div className="pt-20 font-poppins">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Golden Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-8 sm:top-20 sm:left-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#FFB400] rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#FFB400] rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(#FFB400_1px,transparent_1px),linear-gradient(90deg,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              {/* Service Badge */}
              <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-8 border border-[#FFB400]/20">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
                <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  Premium Service
                </span>
              </div>

              {/* Service Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl text-slate-900 mb-6 sm:mb-8">
                {serviceIcons[service.id] || <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />}
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                  {service.title}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 leading-relaxed font-light tracking-wide">
                {service.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center text-slate-300 group">
                    <div className="text-[#FFB400] mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <span className="font-medium text-sm sm:text-base">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="/contact"
                className="group relative inline-flex items-center bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-black text-base sm:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden w-full sm:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                  <span>Start Your Masterpiece</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </a>
            </div>

            {/* Features Card */}
            <div className="animate-on-scroll opacity-0 translate-y-8 relative">
              <div className="group relative bg-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 overflow-hidden">
                {/* Golden Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-slate-900 rounded-2xl sm:rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFB400]" />
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Golden Features
                    </h3>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-slate-300 group/feature">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-lg flex items-center justify-center text-slate-900 mr-3 sm:mr-4 group-hover/feature:scale-110 transition-transform duration-300 flex-shrink-0">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <span className="font-medium text-sm sm:text-base group-hover/feature:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Technology
                </span>
                <span className="block">Excellence</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light px-4">
                We leverage cutting-edge technologies to build scalable, maintainable, and high-performance digital masterpieces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {Object.entries(service.technologies).map(([category, techs], index) => (
              <div
                key={category}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Golden Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl sm:rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 sm:mb-6 capitalize">
                    {category}
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {techs.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center text-slate-600 group/tech text-sm sm:text-base"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFB400] rounded-full mr-2 sm:mr-3 group-hover/tech:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <span className="font-medium group-hover/tech:text-slate-900 transition-colors duration-300">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Golden
                </span>
                <span className="block">Process</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'In-depth analysis of your requirements',
                icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              },
              {
                step: '02',
                title: 'Design',
                description: 'Crafting the perfect user experience',
                icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building with precision and excellence',
                icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Launching your digital masterpiece',
                icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group text-center"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 font-black text-base sm:text-lg mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                    {step.step}
                  </div>
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center text-[#FFB400] shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 font-light text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Golden Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#FFB400]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 mb-8 sm:mb-12 border border-[#FFB400]/20">
              <Diamond className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base md:text-lg font-bold tracking-widest">
                READY FOR EXCELLENCE?
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
              Let's Create Your
              <span className="block bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Digital Masterpiece
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Transform your vision into reality with our golden standard of technical excellence and design sophistication.
            </p>
            
            <a
              href="/contact"
              className="group inline-flex items-center space-x-3 sm:space-x-4 bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl md:text-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span>START YOUR JOURNEY</span>
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;