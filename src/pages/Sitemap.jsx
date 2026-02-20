import React, { useEffect } from 'react';
import { 
  Map, 
  ArrowRight, 
  Home, 
  Users, 
  Briefcase, 
  Mail, 
  FileText,
  Crown,
  Sparkles,
  Globe,
  Layers,
  FolderOpen,
  BookOpen,
  Shield,
  Scale,
  Search,
  Navigation
} from 'lucide-react';

const Sitemap = () => {
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

  const sitemapSections = [
    {
      title: 'Main Navigation',
      icon: <Navigation className="w-5 h-5 sm:w-6 sm:h-6" />,
      pages: [
        { name: 'Home', path: '/', icon: <Home className="w-4 h-4" />, description: 'Welcome to Golden Standard' },
        { name: 'About Us', path: '/about', icon: <Users className="w-4 h-4" />, description: 'Our story and team' },
        { name: 'Services', path: '/services', icon: <Briefcase className="w-4 h-4" />, description: 'What we offer' },
        { name: 'Portfolio', path: '/portfolio', icon: <FolderOpen className="w-4 h-4" />, description: 'Our work' },
        { name: 'Careers', path: '/careers', icon: <Users className="w-4 h-4" />, description: 'Join our team' },
        { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" />, description: 'Get in touch' }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6" />,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', icon: <Shield className="w-4 h-4" />, description: 'Data protection' },
        { name: 'Terms of Service', path: '/terms', icon: <FileText className="w-4 h-4" />, description: 'Usage terms' },
        { name: 'Cookie Policy', path: '/cookie-policy', icon: <Globe className="w-4 h-4" />, description: 'Cookie usage' }
      ]
    },
    {
      title: 'Services Detail',
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
      pages: [
        { name: 'Custom Software', path: '/services/custom-software', icon: <Briefcase className="w-4 h-4" />, description: 'Tailored solutions' },
        { name: 'Web Applications', path: '/services/web-applications', icon: <Globe className="w-4 h-4" />, description: 'Modern web apps' },
        { name: 'Mobile Solutions', path: '/services/mobile-solutions', icon: <Briefcase className="w-4 h-4" />, description: 'Native & cross-platform' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design', icon: <Sparkles className="w-4 h-4" />, description: 'User experience design' },
        { name: 'Cloud Architecture', path: '/services/cloud-architecture', icon: <Layers className="w-4 h-4" />, description: 'Cloud solutions' },
        { name: 'Maintenance', path: '/services/maintenance-optimization', icon: <Briefcase className="w-4 h-4" />, description: 'Ongoing support' }
      ]
    },
    {
      title: 'Portfolio Categories',
      icon: <FolderOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      pages: [
        { name: 'Web Applications', path: '/portfolio/web-applications', icon: <Globe className="w-4 h-4" />, description: 'Web projects' },
        { name: 'Mobile Solutions', path: '/portfolio/mobile-solutions', icon: <Briefcase className="w-4 h-4" />, description: 'Mobile apps' },
        { name: 'SaaS Platforms', path: '/portfolio/saas-platforms', icon: <Layers className="w-4 h-4" />, description: 'Software as a Service' },
        { name: 'Enterprise Systems', path: '/portfolio/enterprise-systems', icon: <Briefcase className="w-4 h-4" />, description: 'Enterprise solutions' }
      ]
    },
    {
      title: 'Career Opportunities',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      pages: [
        { name: 'Senior Full-Stack Developer', path: '/careers/senior-full-stack-developer', icon: <Briefcase className="w-4 h-4" />, description: 'Engineering role' },
        { name: 'UI/UX Designer', path: '/careers/ui-ux-designer', icon: <Sparkles className="w-4 h-4" />, description: 'Design role' },
        { name: 'DevOps Engineer', path: '/careers/devops-engineer', icon: <Layers className="w-4 h-4" />, description: 'Infrastructure role' },
        { name: 'Project Manager', path: '/careers/project-manager', icon: <Briefcase className="w-4 h-4" />, description: 'Management role' }
      ]
    },
    {
      title: 'Resources',
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      pages: [
        { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" />, description: 'Latest insights' },
        { name: 'Case Studies', path: '/case-studies', icon: <FolderOpen className="w-4 h-4" />, description: 'Project deep dives' },
        { name: 'Whitepapers', path: '/whitepapers', icon: <FileText className="w-4 h-4" />, description: 'In-depth research' },
        { name: 'FAQ', path: '/faq', icon: <Search className="w-4 h-4" />, description: 'Common questions' }
      ]
    }
  ];

  return (
    <div className="pt-20 font-poppins">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Golden Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-8 sm:top-20 sm:left-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#FFB400] rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#FFB400] rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(#FFB400_1px,transparent_1px),linear-gradient(90deg,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-8 border border-[#FFB400]/20">
              <Map className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Website Navigation
              </span>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl flex items-center justify-center text-slate-900 mx-auto mb-6 sm:mb-8">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                Complete
              </span>
              <span className="block text-white">Sitemap</span>
            </h1>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light px-4">
              Explore every corner of our website with this comprehensive navigation guide. 
              Find exactly what you're looking for with ease.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="animate-on-scroll opacity-0 translate-y-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mt-8 sm:mt-12">
            {[
              { number: '25+', label: 'Total Pages' },
              { number: '6', label: 'Categories' },
              { number: '100%', label: 'Coverage' },
              { number: 'Easy', label: 'Navigation' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-xl sm:text-2xl font-black text-white mb-1 sm:mb-2 bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Box */}
          <div className="animate-on-scroll opacity-0 translate-y-8 max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              <div className="relative bg-slate-50 rounded-lg sm:rounded-xl p-1 border border-slate-200">
                <div className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-3">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search for a page..."
                    className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder-slate-400 text-sm sm:text-base"
                  />
                  <span className="text-slate-400 text-xs sm:text-sm hidden sm:block">Ctrl+K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sitemap Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500"
                style={{ transitionDelay: `${sectionIndex * 100}ms` }}
              >
                {/* Section Header */}
                <div className="flex items-center space-x-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    {section.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 truncate">
                      {section.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-light">
                      {section.pages.length} pages
                    </p>
                  </div>
                </div>

                {/* Pages List */}
                <div className="space-y-2 sm:space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <a
                      key={pageIndex}
                      href={page.path}
                      className="group/page flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover/page:bg-[#FFB400] group-hover/page:text-slate-900 transition-all duration-300 flex-shrink-0">
                        {page.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-slate-900 text-sm group-hover/page:text-[#FFB400] transition-colors duration-300 truncate">
                          {page.name}
                        </h4>
                        <p className="text-slate-500 text-xs font-light truncate">
                          {page.description}
                        </p>
                      </div>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 group-hover/page:text-[#FFB400] group-hover/page:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="animate-on-scroll opacity-0 translate-y-8 mt-12 sm:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* XML Sitemap */}
              <div className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#FFB400]/10 rounded-full -translate-x-8 sm:-translate-x-16 -translate-y-8 sm:-translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#FFD700]/10 rounded-full translate-x-12 sm:translate-x-24 translate-y-12 sm:translate-y-24"></div>
                
                <div className="relative z-10">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#FFB400] mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-black text-white mb-2 sm:mb-3">
                    XML Sitemap
                  </h3>
                  <p className="text-slate-300 font-light text-sm sm:text-base mb-4 sm:mb-6">
                    For search engines and developers. Contains all URLs for better indexing.
                  </p>
                  <a
                    href="/sitemap.xml"
                    className="inline-flex items-center bg-[#FFB400] hover:bg-[#FFD700] text-slate-900 px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-colors duration-300 text-sm sm:text-base"
                  >
                    View XML Sitemap
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                  </a>
                </div>
              </div>

              {/* SEO Tools */}
              <div className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#FFB400] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3">
                  SEO Resources
                </h3>
                <p className="text-slate-600 font-light text-sm sm:text-base mb-4 sm:mb-6">
                  Tools and resources to help with website navigation and search optimization.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href="/robots.txt"
                    className="inline-flex items-center bg-slate-100 hover:bg-[#FFB400] hover:text-slate-900 text-slate-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm"
                  >
                    Robots.txt
                  </a>
                  <a
                    href="/seo-guide"
                    className="inline-flex items-center bg-slate-100 hover:bg-[#FFB400] hover:text-slate-900 text-slate-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm"
                  >
                    SEO Guide
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

export default Sitemap;