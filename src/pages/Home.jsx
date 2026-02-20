import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Award, 
  Users, 
  Clock, 
  CheckCircle,
  Code2,
  Globe,
  Smartphone,
  Shield,
  Star,
  Rocket,
  Brain,
  Infinity,
  ArrowUpRight,
  Diamond,
  Crown,
  Gem,
  Trophy,
  MessageCircle,
  Quote,
  User,
  Send,
  ThumbsUp
} from 'lucide-react';

const Home = () => {
  const heroRef = useRef(null);
  const [newReview, setNewReview] = useState({
    name: '',
    company: '',
    rating: 5,
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const stats = [
    { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, number: '50+', label: 'Projects Delivered' },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, number: '98%', label: 'Client Satisfaction' },
    { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />, number: '5+', label: 'Years Experience' },
    { icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />, number: '25+', label: 'Expert Team' }
  ];

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Bespoke software solutions engineered to solve complex business challenges and drive digital transformation.',
      icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      features: ['Enterprise Architecture', 'AI & ML Integration', 'Cloud Native Solutions']
    },
    {
      title: 'Web Application Development',
      description: 'High-performance web applications built with scalable architecture and cutting-edge technology stacks.',
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      features: ['Full-Stack Development', 'Real-time Capabilities', 'Enterprise Grade Security']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications designed for exceptional user experience and performance.',
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment']
    },
  ];

  const features = [
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-black" />,
      title: 'AI Powered Solutions',
      description: 'Intelligent systems that automate processes and deliver data-driven insights'
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-black" />,
      title: 'High Performance',
      description: 'Optimized applications built for speed, scalability, and reliability'
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-black" />,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance with industry standards'
    },
    {
      icon: <Infinity className="w-5 h-5 sm:w-6 sm:h-6 text-black" />,
      title: 'Scalable Architecture',
      description: 'Future-proof solutions designed to grow with your business needs'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechInnovate Inc.',
      position: 'CTO',
      rating: 5,
      comment: 'Exceptional work on our enterprise platform. The team delivered beyond expectations with robust architecture and seamless integration.',
      avatar: '/api/placeholder/100/100',
      project: 'Enterprise SaaS Platform',
      date: '2 months ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Global Finance Corp',
      position: 'Product Director',
      rating: 5,
      comment: 'Outstanding mobile app development. The app performance is flawless and user engagement has increased by 45%.',
      avatar: '/api/placeholder/100/100',
      project: 'Mobile Banking App',
      date: '3 months ago'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'HealthTech Solutions',
      position: 'CEO',
      rating: 5,
      comment: 'Transformed our healthcare platform with AI integration. The results have been phenomenal for patient care.',
      avatar: '/api/placeholder/100/100',
      project: 'Healthcare Management System',
      date: '1 month ago'
    },
    {
      id: 4,
      name: 'David Kim',
      company: 'E-Commerce Pro',
      position: 'Operations Manager',
      rating: 5,
      comment: 'Incredible scalability and performance. Our platform handles 10x more traffic without issues.',
      avatar: '/api/placeholder/100/100',
      project: 'E-commerce Platform',
      date: '4 months ago'
    }
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Review submitted:', newReview);
      setNewReview({ name: '', company: '', rating: 5, comment: '' });
      setIsSubmitting(false);
      alert('Thank you for your review! It will be published after verification.');
    }, 1000);
  };

  const handleRatingChange = (rating) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const StarRating = ({ rating, onRatingChange, interactive = false }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && onRatingChange(star)}
            className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'} ${
              star <= rating ? 'text-[#FFB400]' : 'text-gray-300'
            }`}
            disabled={!interactive}
          >
            <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen font-poppins bg-white overflow-hidden">
      {/* Add CSS styles for animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
        `}
      </style>

      {/* Fixed background - moved down to avoid header */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-4 sm:left-10 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#FFB400]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#FFB400]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-[#FFB400]/2 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section - starts after header */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-20">
        {/* Golden Floating Elements */}
        <div className="absolute top-16 left-4 sm:top-20 sm:left-10 w-4 h-4 sm:w-6 sm:h-6 bg-[#FFB400] rounded-full opacity-60 animate-float">
          <div className="absolute inset-0 bg-[#FFB400] rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-32 right-8 sm:top-40 sm:right-20 w-5 h-5 sm:w-8 sm:h-8 bg-[#FFB400] rounded-full opacity-40 animate-float delay-1000"></div>
        <div className="absolute bottom-24 left-8 sm:bottom-32 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-[#FFB400] rounded-full opacity-70 animate-float delay-500"></div>
        <div className="absolute bottom-28 right-12 sm:bottom-40 sm:right-32 w-3 h-3 sm:w-5 sm:h-5 bg-[#FFB400] rounded-full opacity-50 animate-float delay-1500"></div>
        
        {/* Golden Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(#FFB400_1px,transparent_1px),linear-gradient(90deg,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Professional Pre-heading Badge */}
            <div className="animate-on-scroll opacity-0 translate-y-8 mt-8 sm:mt-12 md:mt-20">
              <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-8 sm:mb-12 border border-[#FFB400]/20 shadow-xl sm:shadow-2xl">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400] animate-spin-slow" />
                <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  Enterprise-Grade Excellence
                </span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFB400] rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-tighter">
                <span className="bg-gradient-to-r from-[#FFB400] via-[#e5d264] to-[#FFB400] bg-clip-text text-transparent">
                  Built for 
                </span>
                <span className="block mt-2 sm:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffffff] to-white">
                  TOMORROW
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed font-light tracking-wide bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent px-4">
                We engineer digital solutions that transform businesses and drive innovation.
                From enterprise software to scalable applications — we turn vision into robust, future-ready technology.
              </p>
              <p className="text-white mt-2 text-base sm:text-lg md:text-xl mb-8">Strategic thinking meets technical excellence in every project we deliver.</p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-on-scroll opacity-0 translate-y-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 mb-12 sm:mb-20 px-4">
              <a
                href="/contact"
                className="group relative bg-gradient-to-r from-[#FFB400] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFB400] text-slate-900 px-8 py-4 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl flex items-center space-x-3 sm:space-x-4 shadow-lg overflow-hidden w-full sm:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10 tracking-wider">START YOUR PROJECT</span>
                <Diamond className="text-black w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
              </a>
              
              <a
                href="/portfolio"
                className="group border-2 border-[#FFB400]/50 text-white hover:border-[#FFB400] px-8 py-4 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-500 backdrop-blur-xl flex items-center space-x-3 sm:space-x-4 hover:scale-105 hover:bg-[#FFB400]/5 w-full sm:w-auto justify-center"
              >
                <Gem className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFB400]" />
                <span className="tracking-wider">View Our Work</span>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-[#FFB400]" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll opacity-0 translate-y-8 text-center group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="text-yellow-500 mb-2 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">
                      {stat.icon}
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 sm:mb-2 bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                      {stat.label}
                    </div>
                    <div className="absolute -inset-1 sm:-inset-2 bg-[#FFB400]/10 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-white to-transparent"></div>
        
        {/* Golden Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] via-[#fcd708] to-[#FFB400] bg-clip-text text-transparent">
                  Our
                </span>
                <span className="block">Development Principles</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                We build with technical excellence, strategic thinking, and long-term value at the core of every solution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group text-center p-6 sm:p-8 md:p-10 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 border border-slate-200"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-flex">
                  <div className="absolute inset-0 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#ffaa00] to-[#ffd900] rounded-2xl text-white group-hover:scale-110 transition-transform duration-500 z-10">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-6 sm:mt-8 mb-4 sm:mb-6">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-base sm:text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Client
                </span>
                <span className="block">Success Stories</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-black text-slate-900 text-lg sm:text-xl">{review.name}</h3>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-slate-600 font-medium text-sm sm:text-base">{review.position}, {review.company}</p>
                    <p className="text-[#FFB400] font-bold text-xs sm:text-sm mt-1">{review.project}</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFB400]/20 absolute -top-2 -left-2" />
                  <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base relative z-10 pl-6">
                    {review.comment}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
                  <span className="text-slate-500 text-xs sm:text-sm">{review.date}</span>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">Helpful</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <div className="animate-on-scroll opacity-0 translate-y-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl border border-slate-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-[#FFB400]/10 text-[#FFB400] px-4 py-2 rounded-full mb-4">
                <MessageCircle className="w-4 h-4" />
                <span className="font-bold text-sm">Share Your Experience</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Add Your Review</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">We value your feedback. Share your experience working with us.</p>
            </div>

            <form onSubmit={handleReviewSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <input
                    type="text"
                    value={newReview.company}
                    onChange={(e) => setNewReview(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-transparent transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Rating *</label>
                <div className="flex items-center space-x-4">
                  <StarRating rating={newReview.rating} onRatingChange={handleRatingChange} interactive={true} />
                  <span className="text-slate-600 text-sm">{newReview.rating} out of 5 stars</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Review *</label>
                <textarea
                  required
                  value={newReview.comment}
                  onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                  rows="4"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Share your experience working with us..."
                />
              </div>

              <div className="flex items-center justify-between pt-6">
                <p className="text-slate-500 text-sm">* Required fields</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-8 py-3 rounded-xl font-bold transition-all duration-500 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Review'}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
        {/* Golden Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFB400]/5 via-slate-950 to-[#FFB400]/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  Our
                </span>
                <span className="block text-white">Expertise</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Comprehensive software development services designed to accelerate your digital transformation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:scale-105 border border-slate-700/50 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Golden Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-slate-900 rounded-2xl sm:rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl text-slate-900 mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed font-light text-base sm:text-lg mb-6 sm:mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 sm:space-x-3 text-slate-400 group/feature">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FFB400] rounded-full group-hover/feature:scale-150 transition-transform duration-300"></div>
                        <span className="font-medium text-sm sm:text-base group-hover/feature:text-[#FFB400] transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/services"
                    className="inline-flex items-center text-[#FFB400] hover:text-[#FFD700] font-bold text-base sm:text-lg transition-colors duration-300 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover/link:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12 sm:mt-16 animate-on-scroll opacity-0 translate-y-8">
            <a
              href="/services"
              className="group inline-flex items-center space-x-3 sm:space-x-4 bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-8 py-4 sm:px-10 sm:py-4 md:px-12 md:py-6 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
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
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base md:text-lg font-bold tracking-widest">
                READY TO INNOVATE
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
              Let's Build Your 
              <span className="block bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Digital Future
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Partner with us to create software solutions that drive growth, efficiency, and competitive advantage.
            </p>
            
            <a
              href="/contact"
              className="group inline-flex items-center space-x-3 sm:space-x-4 bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl md:text-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span>START YOUR PROJECT</span>
              <Crown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

