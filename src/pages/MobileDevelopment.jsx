import React, { useEffect } from 'react';
import { 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  Target,
  Crown,
  Diamond,
  Rocket,
  Sparkles,
  Shield,
  Zap,
  ArrowUpRight,
  Download,
  Battery,
  Wifi,
  Cloud,
  Layers,
  Cpu,
  Database
} from 'lucide-react';

const MobileDevelopment = () => {
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

  const features = [
    {
      icon: <Download className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'App Store Compliance',
      description: 'Fully compliant with Apple App Store and Google Play Store guidelines'
    },
    {
      icon: <Battery className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Performance Optimized',
      description: 'Optimized for smooth performance and minimal battery consumption'
    },
    {
      icon: <Wifi className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Offline Functionality',
      description: 'Robust offline capabilities and seamless data synchronization'
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and data protection standards'
    }
  ];

  const technologies = {
    'Native iOS Development': ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'ARKit'],
    'Native Android Development': ['Kotlin', 'Jetpack Compose', 'Java', 'Room', 'Android SDK'],
    'Cross-Platform Solutions': ['React Native', 'Flutter', 'Ionic', 'Xamarin', 'Expo'],
    'Backend & APIs': ['Node.js', 'Firebase', 'GraphQL', 'REST APIs', 'WebSocket']
  };

  const services = [
    {
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Native App Development',
      description: 'High-performance native applications for iOS and Android platforms'
    },
    {
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Cross-Platform Solutions',
      description: 'Cost-effective solutions that work across multiple platforms'
    },
    {
      icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services and backend systems'
    },
    {
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'App Maintenance',
      description: 'Ongoing support, updates, and performance optimization'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Platform analysis, feature planning, and technical architecture',
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Mobile-first design, prototyping, and user experience optimization',
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development, quality assurance, and performance testing',
      icon: <Download className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'App store submission, launch, and ongoing maintenance',
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  return (
<div className="pt-20 font-poppins bg-white">      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Golden Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 h-48 md:top-20 md:left-20 md:w-72 md:h-72 bg-[#FFB400] rounded-full blur-2xl md:blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 md:bottom-20 md:right-20 md:w-96 md:h-96 bg-[#FFB400] rounded-full blur-2xl md:blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 mb-6 md:mb-8 border border-[#FFB400]/20">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
                <span className="text-white/90 text-sm sm:text-base font-semibold tracking-wider sm:tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  Enterprise Mobile Solutions
                </span>
              </div>
              
              {/* Icon and Title - Stack on mobile, inline on larger screens */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 md:mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl text-slate-900 flex-shrink-0">
                  <Smartphone className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
                </div>
              
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                    Mobile App
                  </span>
                  <span className="block text-white">Development</span>
                </h1>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 md:mb-8 leading-relaxed font-light tracking-wide">
                Enterprise-grade mobile applications that deliver exceptional user experiences, 
                drive engagement, and provide measurable business value across all platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {[
                  { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />, label: '8-20 Week Delivery' },
                  { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'Mobile Specialists' },
                  { icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'Agile Methodology' },
                  { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'App Store Compliant' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center text-slate-300 group">
                    <div className="text-[#FFB400] mr-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <span className="font-medium text-sm sm:text-base">{stat.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center sm:justify-start bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-black text-base sm:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </a>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 relative mt-8 lg:mt-0">
              <div className="group relative bg-white/10 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-slate-900 rounded-2xl md:rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-6 md:mb-8">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFB400]" />
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Core Capabilities
                    </h3>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start text-slate-300 group/feature">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-lg flex items-center justify-center text-slate-900 mr-3 sm:mr-4 mt-0.5 group-hover/feature:scale-110 transition-transform duration-300 flex-shrink-0">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm sm:text-base">{feature.title}</h4>
                          <p className="text-slate-400 text-xs sm:text-sm mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Mobile Development
                </span>
                <span className="block">Services</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Comprehensive mobile app development solutions tailored to meet your 
                specific business requirements and user experience goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group text-center p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 md:hover:-translate-y-2 border border-slate-200"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-flex">
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl md:rounded-2xl text-white group-hover:scale-110 transition-transform duration-500 z-10">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-4 md:mt-6 mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Technology
                </span>
                <span className="block">Stack</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light px-4">
                We leverage the latest mobile technologies and frameworks to build 
                high-performance applications that deliver exceptional user experiences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <div
                key={category}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:scale-105 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl md:rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 md:mb-6">
                    {category}
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    {techs.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center text-slate-600 group/tech"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFB400] rounded-full mr-2 sm:mr-3 group-hover/tech:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                        <span className="font-medium text-sm sm:text-base group-hover/tech:text-slate-900 transition-colors duration-300 break-words">
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
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Development
                </span>
                <span className="block">Process</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                A structured mobile development methodology that ensures quality, 
                performance, and successful app store deployment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group text-center"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl md:rounded-2xl flex items-center justify-center text-slate-900 font-black text-base sm:text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center text-[#FFB400] shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 md:mb-4">
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
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#FFB400]/10 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#FFD700]/10 rounded-full blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 mb-8 md:mb-12 border border-[#FFB400]/20">
              <Diamond className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base md:text-lg font-bold tracking-wider md:tracking-widest">
                READY FOR MOBILE?
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
              Let's Build Your
              <span className="block bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Mobile Solution
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Transform your vision into a high-performance mobile application that 
              drives user engagement and delivers measurable business results.
            </p>
            
            <a
              href="/contact"
              className="group inline-flex items-center justify-center space-x-2 sm:space-x-4 bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-xl md:rounded-2xl font-black text-lg sm:text-xl md:text-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg w-full sm:w-auto"
            >
              <span>START YOUR PROJECT</span>
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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

export default MobileDevelopment;