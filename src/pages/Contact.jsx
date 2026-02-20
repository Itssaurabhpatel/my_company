import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Users,
  Crown,
  Diamond,
  Rocket,
  Sparkles,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  MessageCircle,
  Building,
  Loader2
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''
  const [statusMessage, setStatusMessage] = useState('');
  
  const formRef = useRef();

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus('');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setStatusMessage('');

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'service_42b62s7', 
        'template_762o83r', 
        formRef.current,
        '65BWssmlZF8aVbztT'
      );

      console.log('Email sent successfully:', result.text);
      
      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 2 business hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        timeline: '',
        message: ''
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-black" />,
      title: 'Email Us',
      details: 'hello@goldenstandard.com',
      description: 'Send us an email and we\'ll respond within 2 business hours',
      action: 'mailto:hello@goldenstandard.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-black" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm EST',
      action: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6 text-black" />,
      title: 'Visit Us',
      details: '123 Innovation Drive, San Francisco, CA 94103',
      description: 'Schedule a meeting at our headquarters',
      action: '#location'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Golden Consultation',
      description: 'We discuss your vision and requirements in-depth',
      icon: <MessageCircle className="w-5 h-5" />
    },
    {
      step: '02',
      title: 'Strategic Proposal',
      description: 'Crafting a detailed roadmap with timeline and investment',
      icon: <Target className="w-5 h-5" />
    },
    {
      step: '03',
      title: 'Project Launch',
      description: 'Assembling our elite team to begin your masterpiece',
      icon: <Rocket className="w-5 h-5" />
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Dedicated elite project team'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: 'Agile development process'
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: 'Transparent communication'
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: 'Golden standard quality'
    }
  ];

  return (
    <div className="pt-20 font-poppins">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Golden Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#FFB400] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFB400] rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(#FFB400_1px,transparent_1px),linear-gradient(90deg,#FFB400_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-2xl px-6 py-4 mb-8 border border-[#FFB400]/20">
              <Crown className="w-5 h-5 text-[#FFB400]" />
              <span className="text-white/90 text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Start Your Masterpiece
              </span>
            </div>
          </div>

           <div className="animate-on-scroll opacity-0 translate-y-8">
            <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                Let's Build
              </span>
              <span className="block text-white">Your Solution</span>
            </h1>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Ready to transform your business with custom software solutions? We're here to understand 
              your needs and deliver innovative technology that drives growth and efficiency.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 hover:scale-105 border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Golden Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-900 mb-4">
                    {method.title}
                  </h3>
                  
                  <p className="text-lg text-slate-700 font-bold mb-2">
                    {method.details}
                  </p>
                  
                  <p className="text-slate-600 font-light">
                    {method.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Full Width Form Section */}
          <div className="mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <div className="group relative">
                {/* Golden Border Effect */}
                <div className="absolute -inset-4  blur-sm"></div>
                <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                
                {/* Main Form Container */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-14 border-2 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:border-[#FFB400]">
                  
                  {/* Project Enquiry */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#FFB400]/10 to-[#FFD700]/10 rounded-2xl px-6 py-3 mb-6 border border-[#FFB400]/20">
                      <Sparkles className="w-5 h-5 text-[#FFB400]" />
                      <span className="text-slate-700 font-bold tracking-wider uppercase text-sm">
                        Project Inquiry
                      </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                      <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                        Start Your
                      </span>
                      <span className="block">Masterpiece</span>
                    </h2>
                    
                    <p className="text-slate-600 font-light text-lg max-w-md mx-auto">
                      Tell us about your project and let's discuss how we can help you succeed
                    </p>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium text-center">
                      {statusMessage}
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium text-center">
                      {statusMessage}
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group/field relative">
                        <div className="absolute -inset-1 rounded-xl opacity-0 group-hover/field:opacity-10 transition-opacity duration-300"></div>
                        <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide relative z-10">
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white/80 backdrop-blur-sm placeholder-slate-400 font-medium"
                            placeholder="Enter your full name"
                          />
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300">
                            <Sparkles className="w-4 h-4 text-[#FFB400]" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="group/field relative">
                        <div className="absolute -inset-1 rounded-xl opacity-0 group-hover/field:opacity-10 transition-opacity duration-300"></div>
                        <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide relative z-10">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white/80 backdrop-blur-sm placeholder-slate-400 font-medium"
                            placeholder="your.email@company.com"
                          />
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300">
                            <Mail className="w-4 h-4 text-[#FFB400]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Company Field */}
                    <div className="group/field relative">
                      <div className="absolute -inset-1 rounded-xl opacity-0 group-hover/field:opacity-10 transition-opacity duration-300"></div>
                      <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide relative z-10">
                        Company
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white/80 backdrop-blur-sm placeholder-slate-400 font-medium"
                          placeholder="Your company name (optional)"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300">
                          <Building className="w-4 h-4 text-[#FFB400]" />
                        </div>
                      </div>
                    </div>

                    {/* Budget & Timeline Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group/field relative">
                        <div className="absolute -inset-1 rounded-xl opacity-0 group-hover/field:opacity-10 transition-opacity duration-300"></div>
                        <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide relative z-10">
                          Project Budget
                        </label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white/80 backdrop-blur-sm appearance-none cursor-pointer font-medium"
                          >
                            <option value="" className="text-slate-400">Select budget range</option>
                            <option value="10-25k" className="text-slate-700">$10,000 - $25,000</option>
                            <option value="25-50k" className="text-slate-700">$25,000 - $50,000</option>
                            <option value="50-100k" className="text-slate-700">$50,000 - $100,000</option>
                            <option value="100k+" className="text-slate-700">$100,000+</option>
                          </select>
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <div className="w-2 h-2 border-r-2 border-b-2 border-slate-400 transform rotate-45"></div>
                          </div>
                          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300">
                            <Diamond className="w-4 h-4 text-[#FFB400]" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="group/field relative">
                        <div className="absolute -inset-1 rounded-xl opacity-0 group-hover/field:opacity-10 transition-opacity duration-300"></div>
                        <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide relative z-10">
                          Timeline
                        </label>
                        <div className="relative">
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white/80 backdrop-blur-sm appearance-none cursor-pointer font-medium"
                          >
                            <option value="" className="text-slate-400">Select timeline</option>
                            <option value="1-3months" className="text-slate-700">1-3 months</option>
                            <option value="3-6months" className="text-slate-700">3-6 months</option>
                            <option value="6-12months" className="text-slate-700">6-12 months</option>
                            <option value="12+months" className="text-slate-700">12+ months</option>
                          </select>
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <div className="w-2 h-2 border-r-2 border-b-2 border-slate-400 transform rotate-45"></div>
                          </div>
                          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300">
                            <Clock className="w-4 h-4 text-[#FFB400]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Vision Textarea */}
                    <div className="group/field relative">
                      <div className="absolute -inset-1 rounded-xl opacity-0 group-hover/field:opacity-10 transition-opacity duration-300"></div>
                      <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide relative z-10">
                        Project Vision *
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none placeholder-slate-400 font-medium leading-relaxed"
                          placeholder="Describe your vision, goals, challenges, and what success looks like for your project..."
                        ></textarea>
                        <div className="absolute right-4 top-4 opacity-0 group-hover/field:opacity-100 transition-opacity duration-300">
                          <MessageCircle className="w-4 h-4 text-[#FFB400]" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-8 py-5 rounded-xl font-black text-lg transition-all duration-500 hover:shadow-2xl shadow-lg overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        
                        {/* Golden Sparkle Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
                        
                        {/* Button Content */}
                        <span className="relative z-10 tracking-wide flex items-center justify-center space-x-3">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 text-slate-900 animate-spin" />
                              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Sending...
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Launch Your Vision
                              </span>
                              <Send className="w-5 h-5 text-slate-900 group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </span>
                      </button>
                      
                      {/* Form Footer */}
                      <div className="text-center mt-6">
                        <p className="text-slate-500 text-sm font-light">
                          We'll get back to you within 2 business hours
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Combined Process & Benefits Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Golden Process Section */}
            <div className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 hover:scale-105 border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden">
              {/* Golden Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-900 mb-8">
                  Golden Process
                </h3>
                
                <div className="space-y-6">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 group/step">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl flex items-center justify-center text-slate-900 font-black text-sm group-hover/step:scale-110 transition-transform duration-300">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="text-[#FFB400]">
                            {step.icon}
                          </div>
                          <h4 className="font-black text-slate-900 text-lg">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-slate-600 font-light">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Excellence Section */}
            <div className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white overflow-hidden">
              {/* Golden Accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFB400]/10 rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FFD700]/10 rounded-full translate-x-24 translate-y-24"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-8">
                  Why Choose Excellence
                </h3>
                
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4 group/benefit">
                      <div className="w-8 h-8 bg-[#FFB400] rounded-lg flex items-center justify-center text-slate-900 group-hover/benefit:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <span className="font-medium group-hover/benefit:text-[#FFB400] transition-colors duration-300">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Schedule Discovery Call */}
                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-300 font-light text-sm mb-4">
                    Prefer a quicker start? Schedule a discovery call with our experts.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-3 text-[#FFB400] hover:text-[#FFD700] font-bold transition-colors duration-300 group/link"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule a Discovery Call</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
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

export default Contact;