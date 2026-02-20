import React, { useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Mail, 
  Crown,
  Diamond,
  Sparkles,
  CheckCircle,
  FileText,
  User,
  Server,
  Globe,
  ArrowRight,
  Building,
  Database,
  Key
} from 'lucide-react';

const Privacy = () => {
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
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-8 border border-[#FFB400]/20">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Enterprise Data Protection
              </span>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl flex items-center justify-center text-slate-900 mx-auto mb-6 sm:mb-8">
              <Lock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                Privacy
              </span>
              <span className="block text-white">Policy</span>
            </h1>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed font-light tracking-wide px-4">
              Our commitment to protecting your data with enterprise-grade security 
              and transparent data practices.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm sm:prose-lg prose-slate max-w-none">
            {/* Last Updated */}
            <div className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 flex-shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-slate-600 font-light text-sm sm:text-base">
                    <strong className="font-black text-slate-900">Last Updated:</strong> March 1, 2024
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm font-light">
                    Regularly reviewed to ensure compliance with data protection regulations
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="animate-on-scroll opacity-0 translate-y-8 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Our
                </span>
                <span className="block">Commitment</span>
              </h2>
              
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg sm:shadow-xl">
                <p className="text-slate-600 leading-relaxed font-light text-base sm:text-lg mb-4 sm:mb-6">
                  At our software company, we are committed to protecting your privacy and 
                  safeguarding your personal information. This Privacy Policy explains how 
                  we collect, use, disclose, and protect your information in compliance with 
                  global data protection standards.
                </p>
                <p className="text-slate-600 leading-relaxed font-light text-base sm:text-lg">
                  We implement robust security measures and follow industry best practices 
                  to ensure your data remains secure and confidential.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="animate-on-scroll opacity-0 translate-y-8 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Information
                </span>
                <span className="block">We Collect</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg sm:shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <div className="relative inline-flex mb-4 sm:mb-6">
                    <div className="absolute inset-0 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl text-white z-10">
                      <Building className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6">
                    Business Information
                  </h3>
                  <ul className="text-slate-600 space-y-2 sm:space-y-3 font-light text-sm sm:text-base">
                    {[
                      'Company name and contact details',
                      'Business requirements and objectives',
                      'Project specifications and scope',
                      'Technical environment details',
                      'Communication and meeting records'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 sm:space-x-3 group/item">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400] flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg sm:shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <div className="relative inline-flex mb-4 sm:mb-6">
                    <div className="absolute inset-0 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl text-white z-10">
                      <Database className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6">
                    Technical Data
                  </h3>
                  <ul className="text-slate-600 space-y-2 sm:space-y-3 font-light text-sm sm:text-base">
                    {[
                      'Website analytics and performance metrics',
                      'IP addresses and browser information',
                      'Service usage patterns and engagement',
                      'System performance and error logs',
                      'Security and access logs'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2 sm:space-x-3 group/item">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400] flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="animate-on-scroll opacity-0 translate-y-8 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  How We Use
                </span>
                <span className="block">Your Information</span>
              </h2>
              
              <div className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg sm:shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    'Deliver and improve our software services',
                    'Provide technical support and maintenance',
                    'Communicate service updates and enhancements',
                    'Ensure system security and performance',
                    'Comply with legal and regulatory requirements',
                    'Develop new features and capabilities'
                  ].map((use, index) => (
                    <div key={index} className="flex items-center space-x-3 sm:space-x-4 group/item">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-lg sm:rounded-xl flex items-center justify-center text-slate-900 font-black text-xs sm:text-sm group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-slate-600 font-light text-sm sm:text-base">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="animate-on-scroll opacity-0 translate-y-8 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Data
                </span>
                <span className="block">Protection</span>
              </h2>
              
              <div className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white overflow-hidden">
                {/* Golden Accents */}
                <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#FFB400]/10 rounded-full -translate-x-8 sm:-translate-x-16 -translate-y-8 sm:-translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#FFD700]/10 rounded-full translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 flex-shrink-0">
                      <Key className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        Enterprise Security Standards
                      </h3>
                      <p className="text-slate-300 font-light text-sm sm:text-base">
                        Implementing comprehensive data protection measures
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed font-light text-base sm:text-lg mb-4 sm:mb-6">
                    We employ enterprise-grade security measures including encryption, access controls, 
                    and regular security audits to protect your information. Our security protocols 
                    are designed to meet industry standards and regulatory requirements.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {[
                      { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, text: 'Data Encryption' },
                      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, text: 'Secure Infrastructure' },
                      { icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />, text: 'Continuous Monitoring' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                        <div className="text-[#FFB400]">
                          {item.icon}
                        </div>
                        <span className="text-slate-300 font-light text-sm sm:text-base">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="animate-on-scroll opacity-0 translate-y-8 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Your Data
                </span>
                <span className="block">Rights</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { right: 'Access', description: 'Right to access your personal data' },
                  { right: 'Correction', description: 'Right to correct inaccurate information' },
                  { right: 'Deletion', description: 'Right to request data deletion' },
                  { right: 'Processing', description: 'Right to restrict data processing' },
                  { right: 'Portability', description: 'Right to data portability' },
                  { right: 'Objection', description: 'Right to object to data processing' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-slate-900 font-black text-sm sm:text-base md:text-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <h3 className="font-black text-slate-900 mb-2 sm:mb-3 text-base sm:text-lg">
                      {item.right}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <div className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="relative inline-flex mb-4 sm:mb-6">
                  <div className="absolute inset-0 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl text-white z-10">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                  Data Protection Questions?
                </h3>
                <p className="text-slate-600 mb-6 sm:mb-8 font-light text-base sm:text-lg max-w-md mx-auto">
                  Our team is available to address any questions about our data protection 
                  practices and your privacy rights.
                </p>
                
                <a
                  href="/contact"
                  className="group/btn inline-flex items-center bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-black text-base sm:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
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

export default Privacy;