import React, { useEffect } from 'react';
import { 
  FileText, 
  Shield, 
  Lock, 
  UserCheck, 
  AlertCircle,
  Crown,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Scale,
  BookOpen,
  Mail,
  Calendar,
  Globe,
  CreditCard,
  Server,
  Eye,
  Download,
  Users,
  Building,
  Code2,
  Cloud,
  Smartphone
} from 'lucide-react';

const TermsOfService = () => {
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

  const tableOfContents = [
    { title: 'Acceptance of Terms', id: 'acceptance' },
    { title: 'Services Description', id: 'description' },
    { title: 'Account Registration', id: 'registration' },
    { title: 'Service Usage', id: 'use-of-services' },
    { title: 'Fees & Payments', id: 'fees' },
    { title: 'Intellectual Property', id: 'ip' },
    { title: 'Data Protection', id: 'privacy' },
    { title: 'Term & Termination', id: 'termination' },
    { title: 'Liability & Disclaimer', id: 'disclaimer' },
    { title: 'Governing Law', id: 'governing-law' },
    { title: 'Contact Information', id: 'contact' }
  ];

  return (
    <div className="pt-20 font-poppins">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-8 sm:top-20 sm:left-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#FFB400] rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#FFB400] rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(#FFB400_1px,transparent_1px),linear-gradient(90deg,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8 text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-8 border border-[#FFB400]/20">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Terms & Conditions
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Last updated: March 1, 2024. Please review these terms carefully before engaging our services.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />, title: 'Global Operations', desc: 'Services available worldwide' },
              { icon: <Building className="w-5 h-5 sm:w-6 sm:h-6" />, title: 'Enterprise Focus', desc: 'Business and enterprise clients' },
              { icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />, title: 'Regular Updates', desc: 'Terms reviewed periodically' }
            ].map((item, index) => (
              <div key={index} className="animate-on-scroll opacity-0 translate-y-8 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 mx-auto mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Table of Contents - Sticky */}
            <div className="lg:w-1/4 order-2 lg:order-1">
              <div className="sticky top-32 animate-on-scroll opacity-0 translate-y-8">
                <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-lg">
                  <h3 className="font-black text-slate-900 mb-3 sm:mb-4 flex items-center space-x-2 text-sm sm:text-base">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
                    <span>Table of Contents</span>
                  </h3>
                  <nav className="space-y-1 sm:space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-slate-600 hover:text-[#FFB400] text-xs sm:text-sm font-medium py-1 sm:py-2 border-b border-slate-200 last:border-b-0 transition-colors duration-300"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Download Section */}
                <div className="mt-4 sm:mt-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                  <Download className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFB400] mb-2 sm:mb-4" />
                  <h4 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Documentation</h4>
                  <p className="text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4">Download for your records</p>
                  <button className="w-full bg-[#FFB400] hover:bg-[#FFD700] text-slate-900 py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Terms Content */}
            <div className="lg:w-3/4 order-1 lg:order-2">
              {/* Introduction */}
              <div className="animate-on-scroll opacity-0 translate-y-8 mb-8 sm:mb-12">
                <div className="bg-orange-50 border border-orange-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <div>
                      <h3 className="font-semibold text-orange-900 text-sm sm:text-base mb-1 sm:mb-2">Important Notice</h3>
                      <p className="text-orange-800 text-xs sm:text-sm leading-relaxed">
                        These Terms of Service govern your engagement with our software development services. 
                        By accessing or using our services, you agree to be bound by these terms. If you disagree 
                        with any part, you may not access our services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms Sections */}
              <div className="space-y-8 sm:space-y-12">
                {/* Acceptance of Terms */}
                <section id="acceptance" className="animate-on-scroll opacity-0 translate-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 font-black text-base sm:text-lg flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">Acceptance of Terms</h2>
                      <div className="prose prose-sm sm:prose-slate max-w-none">
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                          By engaging our software development services, accessing our platforms, or using our applications 
                          (collectively, the "Services"), you acknowledge that you have read, understood, and agree to be 
                          bound by these Terms of Service.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                          These terms apply to all clients, visitors, users, and others who access or use our Services. 
                          If you are entering into these terms on behalf of a company or organization, you represent that 
                          you have the authority to bind such entity to these terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Services Description */}
                <section id="description" className="animate-on-scroll opacity-0 translate-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 font-black text-base sm:text-lg flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">Services Description</h2>
                      <div className="prose prose-sm sm:prose-slate max-w-none">
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                          We provide comprehensive software development and technology services including:
                        </p>
                        <ul className="text-slate-600 space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
                          <li className="flex items-center space-x-2 sm:space-x-3">
                            <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400] flex-shrink-0" />
                            <span>Custom software development and architecture consulting</span>
                          </li>
                          <li className="flex items-center space-x-2 sm:space-x-3">
                            <Cloud className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400] flex-shrink-0" />
                            <span>Cloud-native application development and deployment</span>
                          </li>
                          <li className="flex items-center space-x-2 sm:space-x-3">
                            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400] flex-shrink-0" />
                            <span>Web and mobile application development</span>
                          </li>
                          <li className="flex items-center space-x-2 sm:space-x-3">
                            <Server className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400] flex-shrink-0" />
                            <span>Technical support, maintenance, and DevOps services</span>
                          </li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed text-xs sm:text-sm bg-slate-50 p-3 sm:p-4 rounded-lg border border-slate-200">
                          <strong>Service Modifications:</strong> We reserve the right to modify, enhance, or discontinue 
                          any aspect of our Services with reasonable notice to clients. Service-level agreements and 
                          project-specific terms will be detailed in individual service contracts.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Account Registration */}
                <section id="registration" className="animate-on-scroll opacity-0 translate-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 font-black text-base sm:text-lg flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">Account Registration</h2>
                      <div className="prose prose-sm sm:prose-slate max-w-none">
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Client Account Setup</h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                          To access project management tools and service portals, clients must complete the registration process. 
                          You agree to provide accurate, current, and complete business information during setup.
                        </p>
                        
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Security Responsibilities</h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                          You are responsible for maintaining the confidentiality of your account credentials and for all 
                          activities that occur under your account. Promptly notify us of any unauthorized access or security breaches.
                        </p>

                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Client Obligations</h4>
                        <ul className="text-slate-600 space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
                          <li className="flex items-center space-x-2 sm:space-x-3">
                            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400] flex-shrink-0" />
                            <span>Maintain security of all access credentials</span>
                          </li>
                          <li className="flex items-center space-x-2 sm:space-x-3">
                            <UserCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400] flex-shrink-0" />
                            <span>Provide accurate business and contact information</span>
                          </li>
                          <li className="flex items-center space-x-2 sm:space-x-3">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400] flex-shrink-0" />
                            <span>Monitor account activity and report suspicious behavior</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Fees & Payments */}
                <section id="fees" className="animate-on-scroll opacity-0 translate-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 font-black text-base sm:text-lg flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">Fees & Payments</h2>
                      <div className="prose prose-sm sm:prose-slate max-w-none">
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Service Fees</h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                          Service fees are detailed in individual project proposals and service agreements. All fees are 
                          quoted exclusive of applicable taxes and expenses unless otherwise specified.
                        </p>
                        
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Payment Terms</h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                          Payments are due according to the schedule outlined in your service agreement. Late payments 
                          may incur interest charges at 1.5% per month or the maximum rate permitted by applicable law.
                        </p>

                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Tax Responsibility</h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                          You are responsible for all applicable taxes, duties, and governmental assessments related to 
                          your use of our Services, which will be added to invoices as required by law.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section id="ip" className="animate-on-scroll opacity-0 translate-y-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-slate-900 font-black text-base sm:text-lg flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">Intellectual Property</h2>
                      <div className="prose prose-sm sm:prose-slate max-w-none">
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Company Intellectual Property</h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                          Our technology platforms, proprietary frameworks, development tools, and service methodologies 
                          are protected by intellectual property laws and remain our exclusive property.
                        </p>
                        
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Client Intellectual Property</h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                          You retain ownership of your business data, proprietary information, and custom-developed 
                          solutions as specified in individual service agreements. We respect and protect your 
                          intellectual property rights throughout our engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Information */}
                <section id="contact" className="animate-on-scroll opacity-0 translate-y-8">
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFB400]" />
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900">Contact Information</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Legal & Business Inquiries</h4>
                        <p className="text-slate-600 text-xs sm:text-sm mb-1 sm:mb-2">Email: legal@yourcompany.com</p>
                        <p className="text-slate-600 text-xs sm:text-sm mb-1 sm:mb-2">Phone: +1 (555) 123-4567</p>
                        <p className="text-slate-600 text-xs sm:text-sm">Address: 123 Technology Drive, San Francisco, CA 94103</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3">Formal Communications</h4>
                        <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4">
                          For legal notices or formal communications, please use the provided contact information 
                          and include "Legal Notice" in the subject line for prompt attention.
                        </p>
                        <a
                          href="/contact"
                          className="inline-flex items-center bg-[#FFB400] hover:bg-[#FFD700] text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300"
                        >
                          Contact Legal Team
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
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

export default TermsOfService;