import React, { useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Palette,
  Cloud,
  Settings,
  ArrowRight,
  Zap,
  Target,
  Users,
  Shield,
  Infinity,
  Sparkles,
  Crown,
  Diamond,
  Rocket,
  ArrowUpRight,
  CheckCircle,
  Cpu,
  Database,
  Workflow,
  TrendingUp
} from "lucide-react";

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Custom Software Development",
      description:
        "Enterprise-grade software solutions engineered to solve complex business challenges and drive digital transformation.",
      features: [
        "Enterprise Applications",
        "SaaS Platforms",
        "Business Process Automation",
        "Legacy System Modernization",
      ],
      color: "gold",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Web Application Development",
      description:
        "High-performance web applications built with scalable architectures and cutting-edge technology stacks.",
      features: [
        "Full-Stack Development",
        "Progressive Web Apps",
        "Real-time Features",
        "Enterprise Security",
      ],
      color: "gold",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Mobile Application Development",
      description:
        "Native and cross-platform mobile solutions that deliver exceptional user experiences and business value.",
      features: [
        "iOS & Android Native",
        "React Native & Flutter",
        "Enterprise Mobility",
        "App Store Deployment",
      ],
      color: "gold",
    },
    {
      icon: <Cpu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that leverage artificial intelligence to automate processes and generate insights.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "AI Integration",
      ],
      color: "gold",
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Cloud & DevOps",
      description:
        "Cloud-native architectures and DevOps practices to ensure scalability, reliability, and rapid deployment.",
      features: [
        "Microservices Architecture",
        "CI/CD Pipelines",
        "Cloud Migration",
        "Infrastructure as Code",
      ],
      color: "gold",
    },
    {
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Data Engineering",
      description:
        "Robust data infrastructure and analytics platforms to transform data into actionable business intelligence.",
      features: [
        "Data Warehousing",
        "ETL Pipelines",
        "Business Intelligence",
        "Big Data Solutions",
      ],
      color: "gold",
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "UI / UX Design",
      description:
        "User-centered design solutions focused on usability, aesthetics, and seamless digital experiences.",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
      color: "gold",
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Digital Marketing",
      description:
        "Data-driven digital marketing strategies to increase brand visibility, engagement, and conversions.",
      features: [
        "SEO & Performance Marketing",
        "Social Media Campaigns",
        "Content Strategy",
        "Analytics & Conversion Tracking",
      ],
      color: "gold",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Comprehensive analysis of business requirements and creation of detailed project specifications.",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "02",
      title: "Architecture & Design",
      description:
        "Technical architecture planning and user experience design for optimal performance and usability.",
      icon: <Workflow className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with continuous integration, rigorous testing, and quality assurance.",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Seamless deployment followed by ongoing maintenance, optimization, and technical support.",
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-black" />,
      title: "High Performance",
      description:
        "Optimized applications built for speed, scalability, and reliability",
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-black" />,
      title: "Enterprise Security",
      description:
        "Bank-level security protocols and compliance with industry standards",
    },
    {
      icon: <Infinity className="w-5 h-5 sm:w-6 sm:h-6 text-black" />,
      title: "Scalable Solutions",
      description:
        "Future-proof architectures designed to grow with your business",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-black" />,
      title: "Expert Team",
      description:
        "Senior developers and architects with proven enterprise experience",
    },
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-8 border border-[#FFB400]/20">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Enterprise Services
              </span>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                Professional
              </span>
              <span className="block text-white">Services</span>
            </h1>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Comprehensive software development services designed to accelerate
              your digital transformation and deliver measurable business
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
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

      {/* Services Grid */}
      <section
        ref={servicesRef}
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Our
                </span>
                <span className="block">Expertise</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                End-to-end software development services that combine technical
                excellence with strategic business thinking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Golden Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl sm:rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl text-slate-900 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed font-light text-sm sm:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-slate-700 group/feature text-sm sm:text-base"
                      >
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400] mr-2 sm:mr-3 group-hover/feature:scale-110 transition-transform duration-300 flex-shrink-0" />
                        <span className="font-medium group-hover/feature:text-slate-900 transition-colors duration-300">
                          {feature}
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

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Golden Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFB400]/5 via-slate-950 to-[#FFB400]/5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  Development
                </span>
                <span className="block text-white">Process</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
                A structured methodology that ensures quality, transparency, and
                successful delivery at every stage of your project lifecycle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group text-center relative"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6 sm:mb-8">
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 sm:top-10 left-1/2 w-full h-0.5 bg-[#FFB400]/20 transform translate-x-8 group-hover:bg-[#FFB400]/40 transition-colors duration-300"></div>
                  )}

                  {/* Step Circle */}
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-full flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500 z-10">
                    <div className="absolute inset-1 bg-slate-900 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#FFB400] rounded-full flex items-center justify-center text-xs font-black text-slate-900">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-3 sm:mb-4 group-hover:text-[#FFB400] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base">
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
                READY TO TRANSFORM?
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
              Let's Build Your
              <span className="block bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Digital Future
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Partner with us to create software solutions that drive
              innovation, efficiency, and competitive advantage for your
              business.
            </p>

            <a
              href="/contact"
              className="group inline-flex items-center space-x-3 sm:space-x-4 bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl md:text-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span>START YOUR PROJECT</span>
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

export default Services;




