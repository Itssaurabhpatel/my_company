import React, { useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Server, 
  Eye, 
  Key, 
  Users,
  FileCheck,
  AlertTriangle,
  Clock,
  Cloud,
  Database,
  Network,
  CheckCircle,
  Award,
  ArrowRight,
  FileText
} from 'lucide-react';

const Security = () => {
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

  const securityFeatures = [
    {
      icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data in transit and at rest'
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Access Controls',
      description: 'Role-based access control and multi-factor authentication'
    },
    {
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade cloud infrastructure with regular audits'
    },
    {
      icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring and threat detection'
    }
  ];

  const complianceStandards = [
    {
      standard: 'SOC 2 Type II',
      status: 'Compliant',
      description: 'Security, availability, and confidentiality controls',
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      standard: 'GDPR',
      status: 'Compliant',
      description: 'General Data Protection Regulation compliance',
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      standard: 'ISO 27001',
      status: 'In Progress',
      description: 'Information security management system',
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />
    }
  ];

  const securityPractices = [
    {
      category: 'Infrastructure Security',
      practices: [
        'Secure cloud infrastructure (AWS/Azure/GCP)',
        'Network segmentation and firewalls',
        'Regular vulnerability scanning',
        'DDoS protection and mitigation'
      ]
    },
    {
      category: 'Data Protection',
      practices: [
        'AES-256 encryption at rest and in transit',
        'Regular automated backups',
        'Data loss prevention measures',
        'Secure data disposal procedures'
      ]
    },
    {
      category: 'Access Management',
      practices: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Principle of least privilege',
        'Regular access reviews and audits'
      ]
    },
    {
      category: 'Development Security',
      practices: [
        'Secure SDLC implementation',
        'Code review and static analysis',
        'Dependency vulnerability scanning',
        'Penetration testing and security assessments'
      ]
    }
  ];

  return (
    <div className="pt-20 font-poppins">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-8 sm:top-20 sm:left-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#FFB400] rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#FFB400] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-8 border border-[#FFB400]/20">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Enterprise Security
              </span>
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl flex items-center justify-center text-slate-900 mx-auto mb-6 sm:mb-8">
              <Lock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                Security
              </span>
              <span className="block text-white">First</span>
            </h1>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed font-light tracking-wide px-4">
              Enterprise-grade security measures protecting your data and applications 
              with industry-leading practices and continuous monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Security
                </span>
                <span className="block">Features</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Comprehensive security measures designed to protect your applications 
                and data throughout the entire development lifecycle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 border border-slate-200"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-flex">
                  <div className="absolute inset-0 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl text-white group-hover:scale-110 transition-transform duration-500 z-10">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-4 sm:mt-6 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Security
                </span>
                <span className="block">Practices</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {securityPractices.map((practice, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl sm:rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6">
                    {practice.category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {practice.practices.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-slate-600 group/item text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400] mr-2 sm:mr-3 group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0" />
                        <span className="font-medium group-hover/item:text-slate-900 transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Compliance
                </span>
                <span className="block">Standards</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Adherence to industry security standards and regulatory requirements 
                to ensure the highest level of data protection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 flex-shrink-0">
                    {standard.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">{standard.standard}</h3>
                    <span className={`inline-block px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${
                      standard.status === 'Compliant' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {standard.status}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#FFB400]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 mb-8 sm:mb-12 border border-[#FFB400]/20">
              <FileCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base md:text-lg font-bold tracking-widest">
                SECURITY REVIEW AVAILABLE
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
              Need Detailed Security
              <span className="block bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Documentation?
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Request our comprehensive security package including policies, 
              compliance documentation, and architecture reviews for your enterprise requirements.
            </p>
            
            <a
              href="/contact"
              className="group inline-flex items-center space-x-3 sm:space-x-4 bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl md:text-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span>REQUEST SECURITY PACKAGE</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      <style>{`
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

export default Security;