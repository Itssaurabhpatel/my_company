import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Filter,
  Crown,
  Diamond,
  Rocket,
  ArrowUpRight,
  Sparkles,
  Award,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  X,
  Calendar,
  Building,
  Code,
  BarChart,
  Zap,
  Target,
} from "lucide-react";
import { projects } from "../data/projects";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);
  const observerRef = useRef(null);
  const hasSetupObserverRef = useRef(false);

  // Simple scroll management
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // FIXED: Improved Intersection Observer with re-trigger capability
  useEffect(() => {
    const setupObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in-up");
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      // Observe all animate-on-scroll elements
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        observerRef.current.observe(el);
      });
    };

    // Initial setup
    if (!hasSetupObserverRef.current) {
      hasSetupObserverRef.current = true;
      setTimeout(setupObserver, 100);
    } else {
      // Re-setup when forceUpdate changes
      setTimeout(setupObserver, 300);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [forceUpdate]);

  // FIXED: Force re-animation when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      // Trigger re-animation of all visible elements
      setTimeout(() => {
        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const isVisible = (
            rect.top < window.innerHeight && 
            rect.bottom > 0 &&
            rect.width > 0 &&
            rect.height > 0
          );
          
          if (isVisible) {
            // Remove and re-add animation class to trigger re-animation
            el.classList.remove("animate-fade-in-up");
            // Force reflow
            void el.offsetWidth;
            el.classList.add("animate-fade-in-up");
          }
        });
        
        // Force observer to re-check all elements
        setForceUpdate(prev => prev + 1);
      }, 400);
    }
  }, [isModalOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeProjectDetail();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  const stats = [
    { icon: <Award className="w-6 h-6" />, number: "50+", label: "Projects Delivered" },
    { icon: <Users className="w-6 h-6" />, number: "98%", label: "Client Satisfaction" },
    { icon: <Clock className="w-6 h-6" />, number: "5+", label: "Years Experience" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "15M+", label: "Users Impacted" },
  ];

  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);
  const otherProjects = projects.filter((project) => !project.featured);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetail = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Project Card Component - FIXED: Added data-section attribute
  const ProjectCard = ({ project, isFeatured = false, section = "featured" }) => (
    <div 
      key={project.id}
      data-section={section}
      className="animate-on-scroll opacity-0 translate-y-8 group relative bg-white rounded-3xl overflow-hidden hover:scale-105 border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:border-yellow-400"
    >
      {isFeatured && (
        <div className="absolute top-6 left-6 z-20">
          <div className="bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>Featured</span>
          </div>
        </div>
      )}

      <div className={`${isFeatured ? "h-80" : "h-64"} bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden relative`}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => openProjectDetail(project)}
            className="bg-white/80 hover:bg-white text-slate-900 p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100"
          >
            <ExternalLink className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className={isFeatured ? "p-8" : "p-6"}>
        <div className={`flex items-center justify-between ${isFeatured ? "mb-4" : "mb-3"}`}>
          <span className={`${isFeatured ? "text-sm" : "text-xs"} font-bold text-[#FFB400] bg-[#FFB400]/10 px-3 py-1 rounded-full`}>
            {project.category}
          </span>
          <span className={`${isFeatured ? "text-sm" : "text-xs"} text-slate-500 font-medium`}>
            {project.duration}
          </span>
        </div>

        <h3 className={`${isFeatured ? "text-3xl" : "text-xl"} font-black text-slate-900 ${isFeatured ? "mb-4" : "mb-3"}`}>
          {project.title}
        </h3>

        <p className={`text-slate-600 leading-relaxed font-light ${isFeatured ? "text-lg mb-6" : "text-sm mb-4"}`}>
          {project.description}
        </p>

        {isFeatured && (
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {isFeatured && (
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">
              Business Results
            </h4>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-center text-slate-700 group/result">
                  <CheckCircle className="w-5 h-5 text-[#FFB400] mr-3 group-hover/result:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={isFeatured ? "mb-6" : "mb-4"}>
          <p className={`text-slate-700 font-bold ${isFeatured ? "text-base" : "text-sm"}`}>
            {project.client}
          </p>
        </div>

        <div className={`${isFeatured ? "mt-8 pt-6" : "mt-4 pt-4"} border-t border-slate-100`}>
          <button
            onClick={() => openProjectDetail(project)}
            className={`inline-flex items-center text-[#FFB400] hover:text-[#FF8C00] font-bold transition-colors duration-300 group/link ${isFeatured ? "text-lg" : "text-sm"}`}
          >
            {isFeatured ? "View Case Study" : "View Details"}
            <ArrowUpRight className={`${isFeatured ? "w-5 h-5" : "w-4 h-4"} ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300`} />
          </button>
        </div>
      </div>
    </div>
  );

  // Small Project Card Component - FIXED: Added data-section attribute
  const SmallProjectCard = ({ project }) => (
    <div 
      key={project.id}
      data-section="other"
      className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden hover:scale-105 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:border-yellow-400"
      onClick={() => openProjectDetail(project)}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-[#FFB400] bg-[#FFB400]/10 px-2 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {project.duration}
          </span>
        </div>

        <h3 className="text-lg font-black text-slate-900 mb-2 line-clamp-1">
          {project.title}
        </h3>

        <p className="text-slate-600 leading-relaxed font-light text-xs mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="mb-3">
          <p className="text-slate-700 font-bold text-xs">{project.client}</p>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <span className="inline-flex items-center text-[#FFB400] font-bold text-xs">
            View Details
            <ArrowUpRight className="w-3 h-3 ml-1" />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 font-poppins min-h-screen bg-white">
      <style>
        {`
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#FFB400] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFB400] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-2xl px-6 py-4 mb-8 border border-[#FFB400]/20">
              <Crown className="w-5 h-5 text-[#FFB400]" />
              <span className="text-white/90 text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Enterprise Software Portfolio
              </span>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                Our
              </span>
              <span className="block text-white">Work</span>
            </h1>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              A showcase of enterprise-grade software solutions that demonstrate
              our technical expertise and commitment to delivering measurable
              business results.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 text-center group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="text-yellow-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-white mb-2 bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Featured
                </span>
                <span className="block">Projects</span>
              </h2>
              <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Our flagship projects that showcase innovation and technical excellence
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured={true}
                section="featured"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  More
                </span>
                <span className="block">Projects</span>
              </h2>
              <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Explore our diverse portfolio of software solutions across various industries
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherProjects.map((project) => (
              <SmallProjectCard key={project.id} project={project} />
            ))}
          </div>

          {otherProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-slate-400 mb-6">
                <Filter size={64} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                No Projects Found
              </h3>
              <p className="text-slate-600 max-w-md mx-auto font-light">
                We're continuously developing new enterprise solutions. Please check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFB400]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-2xl px-8 py-4 mb-12 border border-[#FFB400]/20">
              <Diamond className="w-6 h-6 text-[#FFB400]" />
              <span className="text-white/90 text-lg font-bold tracking-widest">
                READY TO START YOUR PROJECT?
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Let's Build Your
              <span className="block bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Software Solution
              </span>
            </h2>

            <p className="text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Transform your business with custom software solutions that drive efficiency, innovation, and measurable growth.
            </p>

            <a
              href="/contact"
              className="group inline-flex items-center space-x-4 bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-16 py-6 rounded-2xl font-black text-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span>START YOUR PROJECT</span>
              <Rocket className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeProjectDetail}
                className="absolute top-6 right-6 z-10 bg-slate-900 text-white p-3 rounded-full hover:bg-slate-700 transition-colors duration-300 shadow-xl"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Project Header */}
              <div className="h-96 bg-slate-900 rounded-t-3xl overflow-hidden relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-12">
                  <span className="text-sm font-bold text-[#FFB400] bg-[#FFB400]/20 px-4 py-1 rounded-full w-fit mb-4 uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-5xl font-black text-white mb-4 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xl text-slate-300 font-light">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-12 space-y-12">
                {/* Key Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b pb-8 border-slate-100">
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-[#FFB400]" />
                    <div>
                      <p className="text-sm text-slate-500 uppercase font-medium">Client</p>
                      <p className="text-base font-bold text-slate-900">{selectedProject.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-[#FFB400]" />
                    <div>
                      <p className="text-sm text-slate-500 uppercase font-medium">Duration</p>
                      <p className="text-base font-bold text-slate-900">{selectedProject.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-[#FFB400]" />
                    <div>
                      <p className="text-sm text-slate-500 uppercase font-medium">Team Size</p>
                      <p className="text-base font-bold text-slate-900">{selectedProject.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-[#FFB400]" />
                    <div>
                      <p className="text-sm text-slate-500 uppercase font-medium">Type</p>
                      <p className="text-base font-bold text-slate-900">{selectedProject.category}</p>
                    </div>
                  </div>
                </div>

                {/* Challenge, Solution, Impact */}
                {selectedProject.challenge && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center text-3xl font-black text-slate-900">
                        <Zap className="w-8 h-8 text-[#FFB400] mr-3" />
                        Challenge
                      </div>
                      <p className="text-slate-700 font-light">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center text-3xl font-black text-slate-900">
                        <Code className="w-8 h-8 text-[#FFB400] mr-3" />
                        Solution
                      </div>
                      <p className="text-slate-700 font-light">
                        {selectedProject.solution}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center text-3xl font-black text-slate-900">
                        <TrendingUp className="w-8 h-8 text-[#FFB400] mr-3" />
                        Impact
                      </div>
                      <p className="text-slate-700 font-light">
                        {selectedProject.impact}
                      </p>
                    </div>
                  </div>
                )}

                {/* Technologies and Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-slate-100">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center">
                      <Code className="w-6 h-6 mr-3 text-[#FFB400]" />
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="text-sm bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center">
                      <BarChart className="w-6 h-6 mr-3 text-[#FFB400]" />
                      Business Results
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result, index) => (
                        <li key={index} className="flex items-start text-slate-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="font-light">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Links */}
                <div className="pt-8 border-t border-slate-100 flex justify-end space-x-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-700 font-medium hover:text-slate-900 transition-colors duration-300 px-6 py-3 border border-slate-200 rounded-lg hover:bg-slate-50"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View GitHub
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-[1.02]"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;