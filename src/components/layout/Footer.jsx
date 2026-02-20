import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Code2,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(#FFB400_1px,transparent_1px),linear-gradient(90deg,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-lg flex items-center justify-center shadow-lg">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-white">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  Software
                </span>
                <span className="text-white">Solutions</span>
              </span>
            </div>
            <p className="text-slate-300 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base lg:text-lg">
              Enterprise software development company specializing in custom solutions, 
              digital transformation, and innovative technology services for businesses worldwide.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {[
                { icon: <Linkedin size={18} className="sm:w-5 sm:h-5" />, href: "#", label: "LinkedIn" },
                { icon: <Twitter size={18} className="sm:w-5 sm:h-5" />, href: "#", label: "Twitter" },
                { icon: <Github size={18} className="sm:w-5 sm:h-5" />, href: "#", label: "GitHub" },
                { icon: <Facebook size={18} className="sm:w-5 sm:h-5" />, href: "#", label: "Facebook" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-400 hover:text-[#FFB400] transition-all duration-300 p-2 sm:p-3 hover:bg-[#FFB400]/10 rounded-lg sm:rounded-xl hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Custom Software Development", href: "/services/custom-software" },
                { name: "Web Application Development", href: "/services/web-development" },
                { name: "Mobile App Development", href: "/services/mobile-development" },
                { name: "UI/UX Design", href: "/services/ui-ux-design" },
                { name: "Digital Marketing", href: "/services/digital-marketing" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[#FFB400] transition-all duration-300 flex items-center space-x-2 group text-sm sm:text-base"
                  >
                    <ArrowRight className="w-3 h-3 text-[#FFB400] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3 group">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mt-0.5 flex-shrink-0 group-hover:text-[#FFB400] transition-colors duration-300" />
                <a 
                  href="mailto:contact@softwaresolutions.com" 
                  className="text-slate-300 group-hover:text-[#FFB400] transition-colors duration-300 text-xs sm:text-sm break-all"
                >
                  contact@softwaresolutions.com
                </a>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3 group">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mt-0.5 flex-shrink-0 group-hover:text-[#FFB400] transition-colors duration-300" />
                <a 
                  href="tel:+15551234567" 
                  className="text-slate-300 group-hover:text-[#FFB400] transition-colors duration-300 text-xs sm:text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3 group">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mt-0.5 flex-shrink-0 group-hover:text-[#FFB400] transition-colors duration-300" />
                <span className="text-slate-300 group-hover:text-[#FFB400] transition-colors duration-300 text-xs sm:text-sm">
                  123 Technology Drive
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-6 sm:mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-center sm:text-left">
            <p className="text-slate-400 text-xs sm:text-sm">
              © {currentYear}{" "}
              <span className="bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent font-bold">
                Software Solutions Inc.
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-slate-500 text-xs sm:text-sm">
              <span>Built with</span>
              <div className="text-[#FFB400]">❤️</div>
              <span>for innovation</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            <a
              href="/privacy-policy"
              className="text-slate-400 hover:text-[#FFB400] text-xs sm:text-sm transition-all duration-300 hover:scale-105"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-slate-400 hover:text-[#FFB400] text-xs sm:text-sm transition-all duration-300 hover:scale-105"
            >
              Terms of Service
            </a>
            <a
              href="/security"
              className="text-slate-400 hover:text-[#FFB400] text-xs sm:text-sm transition-all duration-300 hover:scale-105"
            >
              Security
            </a>
            <a
              href="/careers"
              className="text-slate-400 hover:text-[#FFB400] text-xs sm:text-sm transition-all duration-300 hover:scale-105"
            >
              Careers
            </a>
            <a
              href="/sitemap"
              className="text-slate-400 hover:text-[#FFB400] text-xs sm:text-sm transition-all duration-300 hover:scale-105"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;