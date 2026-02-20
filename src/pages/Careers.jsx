import React, { useEffect, useState } from 'react';
import { 
  Users, 
  Heart, 
  Award, 
  Coffee, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Play,
  Crown,
  Diamond,
  Rocket,
  Sparkles,
  Zap,
  Target,
  CheckCircle,
  GraduationCap,
  Briefcase,
  Star,
  ArrowUpRight,
  User,
  Mail,
  Phone,
  FileText,
  Upload,
  MessageCircle,
  Send,
  X
} from 'lucide-react';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

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

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'San Francisco / Remote',
      description: 'We are looking for an experienced Full-Stack Developer to join our elite team and help build scalable web applications.',
      requirements: ['5+ years experience', 'React & Node.js', 'TypeScript', 'AWS/Azure'],
      salary: '$120,000 - $150,000',
      featured: true
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'San Francisco',
      description: 'Create beautiful and intuitive user experiences for our enterprise clients following golden ratio principles.',
      requirements: ['3+ years experience', 'Figma/Sketch', 'User Research', 'Prototyping'],
      salary: '$90,000 - $120,000',
      featured: false
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      description: 'Manage and optimize our cloud infrastructure and CI/CD pipelines for maximum performance.',
      requirements: ['4+ years experience', 'Docker/Kubernetes', 'AWS/GCP', 'Terraform'],
      salary: '$110,000 - $140,000',
      featured: false
    },
    {
      title: 'Project Manager',
      department: 'Delivery',
      type: 'Full-time',
      location: 'San Francisco',
      description: 'Lead software projects from conception to delivery for our enterprise clients.',
      requirements: ['5+ years experience', 'Agile/Scrum', 'Client Management', 'Technical Background'],
      salary: '$100,000 - $130,000',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and performance bonuses'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision insurance'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Flexible Time Off',
      description: 'Unlimited PTO and flexible work arrangements'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Professional Growth',
      description: 'Learning budget and career development programs'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Modern Workspace',
      description: 'Beautiful office with premium amenities and remote options'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Career Acceleration',
      description: 'Fast-track growth opportunities and mentorship'
    }
  ];

  const values = [
    {
      title: 'Golden Excellence',
      description: 'We strive for mathematical perfection in everything we do',
      icon: <Crown className="w-6 h-6" />
    },
    {
      title: 'Elite Collaboration',
      description: 'We believe in the power of teamwork and open communication',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Innovation First',
      description: 'We continuously learn and embrace cutting-edge technologies',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Ownership Mindset',
      description: 'We take responsibility and pride in our masterpieces',
      icon: <Target className="w-6 h-6" />
    }
  ];

  const hiringProcess = [
    {
      step: '01',
      title: 'Application Review',
      description: 'We carefully review your application and portfolio',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Golden Interview',
      description: '30-minute call with our hiring team',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Technical Excellence',
      description: 'Practical skills evaluation and coding challenge',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Team Connection',
      description: 'Meet the team and final discussions',
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setShowApplicationForm(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSelectedPosition(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="pt-20 font-poppins">
      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white rounded-t-3xl p-6 border-b border-slate-200 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Apply for {selectedPosition?.title}
                  </h3>
                  <p className="text-slate-600 mt-1">{selectedPosition?.department} • {selectedPosition?.location}</p>
                </div>
                <button
                  onClick={handleCloseForm}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <form 
                action="https://formsubmit.co/your-itssaurabhpatel@gmail.com" 
                method="POST"
                encType="multipart/form-data"
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_subject" value={`New Job Application: ${selectedPosition?.title}`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
                <input type="hidden" name="position" value={selectedPosition?.title} />

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group/field">
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white placeholder-slate-400 font-medium"
                        placeholder="Enter your full name"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                  
                  <div className="group/field">
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white placeholder-slate-400 font-medium"
                        placeholder="your.email@domain.com"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Phone & LinkedIn */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group/field">
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white placeholder-slate-400 font-medium"
                        placeholder="+1 (555) 000-0000"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                  
                  <div className="group/field">
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                      LinkedIn Profile
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        name="linkedin"
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white placeholder-slate-400 font-medium"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                      <Briefcase className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="group/field">
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Upload Resume *
                  </label>
                  <div className="relative">
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center transition-all duration-300 group-hover/field:border-[#FFB400] group-hover/field:bg-[#FFB400]/5">
                      <FileText className="w-8 h-8 text-slate-400 mx-auto mb-3 group-hover/field:text-[#FFB400] transition-colors duration-300" />
                      <p className="text-slate-600 font-medium mb-1">
                        Drop your resume here or click to browse
                      </p>
                      <p className="text-slate-500 text-sm">
                        Supports PDF, DOC, DOCX • Max 5MB
                      </p>
                      <input
                        type="file"
                        name="attachment"
                        accept=".pdf,.doc,.docx"
                        required
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="group/field">
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Cover Letter / Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white resize-none placeholder-slate-400 font-medium leading-relaxed"
                      placeholder="Tell us about yourself and why you'd be a great fit for this position..."
                    ></textarea>
                    <MessageCircle className="w-4 h-4 text-slate-400 absolute right-4 top-4" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-8 py-4 rounded-xl font-black text-lg transition-all duration-500 hover:shadow-2xl shadow-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="relative z-10 tracking-wide flex items-center justify-center space-x-3">
                      <span>Submit Application</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* ... (keep existing hero section code) ... */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-2xl px-6 py-4 mb-8 border border-[#FFB400]/20">
              <Crown className="w-5 h-5 text-[#FFB400]" />
              <span className="text-white/90 text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Join Our Elite Team
              </span>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                Build Your
              </span>
              <span className="block text-white">Golden Legacy</span>
            </h1>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Join our team of exceptional engineers and designers working on 
              challenging projects that follow the golden ratio of perfection.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16">
            {[
              { number: '15+', label: 'Team Members' },
              { number: '98%', label: 'Retention Rate' },
              { number: '50+', label: 'Projects' },
              { number: '5+', label: 'Years Excellence' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-on-scroll opacity-0 translate-y-8 text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="text-3xl font-black text-white mb-2 bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
                    {stat.label}
                  </div>
                  <div className="absolute -inset-2 bg-[#FFB400]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... (keep existing Culture, Benefits sections) ... */}

      {/* Open Positions Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Open
                </span>
                <span className="block">Positions</span>
              </h2>
              <p className="text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                Explore current opportunities to join our growing elite team.
              </p>
            </div>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 hover:scale-105 border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-slate-900 mb-3">
                        {position.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="inline-flex items-center text-slate-600 font-medium">
                          <MapPin className="w-4 h-4 mr-2 text-[#FFB400]" />
                          {position.location}
                        </span>
                        <span className="bg-[#FFB400]/10 text-[#FFB400] px-3 py-1 rounded-full text-sm font-bold">
                          {position.department}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {position.type}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed font-light">
                        {position.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest">
                          Requirements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, reqIndex) => (
                            <span
                              key={reqIndex}
                              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium group/req"
                            >
                              <CheckCircle className="w-3 h-3 inline mr-1 text-[#FFB400] group-hover/req:scale-110 transition-transform duration-300" />
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-slate-700 font-bold">
                        💰 {position.salary}
                      </p>
                    </div>
                    
                    <div className="lg:text-right">
                      <button
                        onClick={() => handleApplyClick(position)}
                        className="group/btn inline-flex items-center bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-6 py-3 rounded-xl font-bold transition-all duration-500 hover:scale-105 hover:shadow-lg"
                      >
                        Apply Now
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Application Form */}
          <div className="text-center mt-16 animate-on-scroll opacity-0 translate-y-8">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>
              <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/60 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:border-[#FFB400]/30">
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#FFB400]/10 to-[#FFD700]/10 rounded-2xl px-6 py-3 mb-6 border border-[#FFB400]/20">
                    <Sparkles className="w-5 h-5 text-[#FFB400]" />
                    <span className="text-slate-700 font-bold tracking-wider uppercase text-sm">
                      Future Talent
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                    <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                      Don't See a
                    </span>
                    <span className="block">Perfect Match?</span>
                  </h3>
                  
                  <p className="text-slate-600 font-light text-lg max-w-md mx-auto">
                    We're always looking for exceptional talent. Share your details and we'll reach out when the right opportunity arises.
                  </p>
                </div>

                {/* General Application Form */}
                <form 
                  action="https://formsubmit.co/your-email@yourcompany.com" 
                  method="POST"
                  encType="multipart/form-data"
                  className="space-y-6 max-w-2xl mx-auto"
                >
                  <input type="hidden" name="_subject" value="General Job Application" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name & Email fields same as above */}
                    <div className="group/field">
                      <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white/80 backdrop-blur-sm placeholder-slate-400 font-medium"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="group/field">
                      <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white/80 backdrop-blur-sm placeholder-slate-400 font-medium"
                        placeholder="your.email@domain.com"
                      />
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                      Desired Position
                    </label>
                    <input
                      type="text"
                      name="desired_position"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FFB400] focus:border-[#FFB400] transition-all duration-300 bg-white/80 backdrop-blur-sm placeholder-slate-400 font-medium"
                      placeholder="e.g., Frontend Developer"
                    />
                  </div>

                  {/* Resume upload and submit button same as above */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group relative w-full bg-gradient-to-r from-[#FFB400] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFB400] text-slate-900 px-8 py-4 rounded-xl font-black text-lg transition-all duration-500 hover:shadow-2xl shadow-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <span className="relative z-10 tracking-wide flex items-center justify-center space-x-3">
                        <span>Submit General Application</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... (keep existing Interview Process section) ... */}

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

// Add missing Code icon component
const Code = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export default Careers;