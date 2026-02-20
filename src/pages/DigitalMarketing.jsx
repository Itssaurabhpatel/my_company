import React, { useEffect } from 'react';
import { 
  TrendingUp, 
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
  BarChart,
  Search,
  Mail,
  Smartphone,
  Globe,
  MessageCircle,
  Video,
  PieChart,
  Star
} from 'lucide-react';

const DigitalMarketing = () => {
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
      icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to improve search rankings and organic traffic'
    },
    {
      icon: <BarChart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and ROI tracking for all marketing campaigns'
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that drive engagement and conversions'
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Growth Strategy',
      description: 'Scalable marketing strategies designed for sustainable business growth'
    }
  ];

  const services = [
    {
      icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Search Engine Optimization',
      description: 'Comprehensive SEO strategies to improve visibility and drive qualified traffic',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Local SEO']
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that build brand awareness and engagement',
      features: ['Content Strategy', 'Community Management', 'Paid Social', 'Analytics']
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email Marketing',
      description: 'Personalized email campaigns that nurture leads and drive conversions',
      features: ['Automation', 'Segmentation', 'A/B Testing', 'Performance Tracking']
    },
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'PPC Advertising',
      description: 'Data-driven paid advertising campaigns with maximum ROI',
      features: ['Google Ads', 'Social Ads', 'Retargeting', 'Conversion Tracking']
    },
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Content Marketing',
      description: 'Strategic content creation that establishes authority and drives traffic',
      features: ['Blog Content', 'Video Marketing', 'Infographics', 'Content Strategy']
    },
    {
      icon: <PieChart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive performance tracking and data-driven insights',
      features: ['KPI Tracking', 'ROI Analysis', 'Custom Dashboards', 'Monthly Reports']
    }
  ];

  const technologies = {
    'Analytics & Tracking': ['Google Analytics', 'Google Tag Manager', 'Hotjar', 'SEMrush'],
    'Advertising Platforms': ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Twitter Ads'],
    'SEO Tools': ['Ahrefs', 'Moz', 'Screaming Frog', 'Google Search Console'],
    'Marketing Automation': ['HubSpot', 'Mailchimp', 'ActiveCampaign', 'Marketo']
  };

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Comprehensive market research and competitive analysis',
      icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Data-driven marketing strategy and campaign planning',
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Campaign execution across selected marketing channels',
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous performance monitoring and strategy refinement',
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  // Pricing Plans Data
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses starting their digital journey',
      price: '$1,199',
      duration: '/month',
      popular: false,
      features: [
        'Comprehensive SEO Audit',
        'Keyword Research (30 Keywords)',
        'Basic On-Page SEO',
        'Google My Business Optimization',
        'Monthly Performance Report',
        'Email Support',
        'Social Media Setup'
      ],
      cta: 'Get Started',
      icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses looking to scale',
      price: '$2,999',
      duration: '/month',
      popular: true,
      features: [
        'Everything in Starter +',
        'Advanced SEO Strategy',
        'Keyword Research (150 Keywords)',
        'Content Marketing (4 Articles/Month)',
        'Social Media Management',
        'Email Marketing Campaigns',
        'Google Ads Management ($500 Ad Spend)',
        'Weekly Performance Reports',
        'Priority Support',
        'Monthly Strategy Calls'
      ],
      cta: 'Start Growing',
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    },
    {
      name: 'Enterprise',
      description: 'Complete marketing solution for established businesses',
      price: '$4,999',
      duration: '/month',
      popular: false,
      features: [
        'Everything in Professional +',
        'Dedicated Account Manager',
        'Custom Marketing Strategy',
        'Keyword Research (300+ Keywords)',
        'Advanced Content Marketing (8 Articles/Month)',
        'Multi-Channel Advertising',
        'Marketing Automation Setup',
        'Competitor Analysis',
        'Custom Analytics Dashboard',
        '24/7 Priority Support',
        'Weekly Strategy Calls',
        'Conversion Rate Optimization'
      ],
      cta: 'Scale Business',
      icon: <Crown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
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
                  Data-Driven Marketing
                </span>
              </div>

              {/* Icon and Title - Stack on mobile, inline on larger screens */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 md:mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl text-slate-900 flex-shrink-0">
                  <TrendingUp className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                    <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                      Digital
                    </span>
                    <span className="block text-white">Marketing</span>
                  </h1>
                </div>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 md:mb-8 leading-relaxed font-light tracking-wide">
                Data-driven digital marketing strategies that drive qualified traffic, 
                generate quality leads, and deliver measurable ROI for your business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                {[
                  { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />, label: '3-6 Month Campaigns' },
                  { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'Marketing Experts' },
                  { icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'ROI-Focused' },
                  { icon: <BarChart className="w-5 h-5 sm:w-6 sm:h-6" />, label: 'Performance Tracking' }
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
                  <span>Start Your Campaign</span>
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
                  Marketing
                </span>
                <span className="block">Services</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Comprehensive digital marketing solutions designed to increase visibility, 
                drive qualified traffic, and generate measurable business results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:scale-105 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Golden Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl md:rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl md:rounded-2xl text-slate-900 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 md:mb-6 leading-relaxed font-light text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-700 group/feature">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400] mr-2 sm:mr-3 group-hover/feature:scale-110 transition-transform duration-300" />
                        <span className="font-medium text-sm sm:text-base group-hover/feature:text-slate-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center text-[#FFB400] hover:text-[#FF8C00] font-bold transition-colors duration-300 group/link text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
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
                  Marketing
                </span>
                <span className="block">Technology</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light px-4">
                We leverage industry-leading marketing technologies and analytics platforms 
                to drive data-driven decisions and maximize campaign performance.
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
                  Marketing
                </span>
                <span className="block">Process</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                A proven methodology that ensures strategic alignment, data-driven execution, 
                and continuous optimization for maximum marketing ROI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group text-center"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  {/* Connection Line - Hidden on mobile, shown on larger screens */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 sm:top-10 left-1/2 w-full h-0.5 bg-[#FFB400]/20 transform translate-x-8 group-hover:bg-[#FFB400]/40 transition-colors duration-300"></div>
                  )}
                  
                  {/* Step Circle */}
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 z-10">
                    <div className="absolute inset-1 bg-slate-900 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#FFB400] rounded-full flex items-center justify-center text-xs font-black text-slate-900">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 md:mb-4 group-hover:text-[#FFB400] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Pricing
                </span>
                <span className="block">Plans</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Transparent, results-driven pricing designed to scale with your business growth. 
                All plans include comprehensive analytics and dedicated support.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`animate-on-scroll opacity-0 translate-y-8 group relative rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-700 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-[#FFB400] to-[#FFD700] shadow-2xl' 
                    : 'bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-xl hover:shadow-2xl'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-slate-900 text-white px-4 py-1 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm flex items-center space-x-1 md:space-x-2">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                      <span>MOST POPULAR</span>
                    </div>
                  </div>
                )}

                <div className={`relative z-10 ${plan.popular ? 'text-slate-900' : 'text-slate-900'}`}>
                  {/* Plan Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl mb-4 md:mb-6 ${
                    plan.popular 
                      ? 'bg-slate-900 text-[#FFB400]' 
                      : 'bg-gradient-to-br from-[#FFB400] to-[#FFD700] text-slate-900'
                  }`}>
                    {plan.icon}
                  </div>
                  
                  {/* Plan Name */}
                  <h3 className="text-xl sm:text-2xl font-black mb-2">{plan.name}</h3>
                  <p className={`mb-4 md:mb-6 font-light text-sm sm:text-base ${
                    plan.popular ? 'text-slate-800' : 'text-slate-600'
                  }`}>
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex items-baseline justify-center space-x-1 md:space-x-2">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-black">{plan.price}</span>
                      <span className={`text-base md:text-lg font-medium ${
                        plan.popular ? 'text-slate-700' : 'text-slate-500'
                      }`}>
                        {plan.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/feature">
                        <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-slate-900' : 'text-[#FFB400]'
                        } group-hover/feature:scale-110 transition-transform duration-300`} />
                        <span className={`font-medium text-sm sm:text-base ${
                          plan.popular ? 'text-slate-900' : 'text-slate-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className={`block text-center py-3 px-4 sm:py-4 sm:px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-105'
                        : 'bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] hover:scale-105'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Pricing Info */}
          <div className="text-center mt-12 md:mt-16">
            <div className="animate-on-scroll opacity-0 translate-y-8 inline-flex items-center space-x-3 bg-slate-50 rounded-xl md:rounded-2xl px-4 py-4 md:px-8 md:py-6 border border-slate-200 max-w-2xl mx-auto">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFB400] flex-shrink-0" />
              <p className="text-slate-700 font-medium text-sm sm:text-base">
                All plans include a <span className="font-bold text-[#FFB400]">30-day money-back guarantee</span> and can be customized to your specific needs.
              </p>
            </div>
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
                READY TO GROW?
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8">
              Let's Drive Your
              <span className="block bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Business Growth
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Partner with us to implement data-driven marketing strategies that 
              increase visibility, generate qualified leads, and deliver measurable ROI.
            </p>
            
            <a
              href="/contact"
              className="group inline-flex items-center justify-center space-x-2 sm:space-x-4 bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-xl md:rounded-2xl font-black text-lg sm:text-xl md:text-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg w-full sm:w-auto"
            >
              <span>START YOUR CAMPAIGN</span>
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

export default DigitalMarketing;