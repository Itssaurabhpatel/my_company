import React, { useEffect } from "react";
import {
  Users,
  Target,
  Award,
  Heart,
  Clock,
  Crown,
  Rocket,
  Sparkles,
  Zap,
  Brain,
  Shield,
  Infinity,
  GraduationCap,
  Briefcase,
  Star,
  Code2,
  Globe,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const About = () => {
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

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "/api/placeholder/400/400",
      bio: "Technology leader with 15+ years experience in software architecture and digital transformation. Former tech lead at Fortune 500 companies.",
      expertise: [
        "Software Architecture",
        "Business Strategy",
        "Digital Transformation",
      ],
      education: "MSc Computer Science, Stanford University",
      achievements: [
        "50+ Enterprise Projects",
        "Industry Thought Leader",
        "Digital Innovation Awards",
      ],
    },
    {
      name: "Marcus Johnson",
      role: "Chief Technology Officer",
      image: "/api/placeholder/400/400",
      bio: "Cloud infrastructure expert with extensive experience in building scalable enterprise systems and DevOps practices.",
      expertise: ["Cloud Architecture", "DevOps", "System Design", "Security"],
      education: "MSc Computer Engineering, MIT",
      achievements: [
        "AWS Solutions Architect",
        "10+ Years Enterprise Experience",
        "Open Source Contributor",
      ],
    },
    {
      name: "Elena Rodriguez",
      role: "Creative Director",
      image: "/api/placeholder/400/400",
      bio: "Award-winning designer with expertise in creating intuitive user experiences and scalable design systems.",
      expertise: [
        "UI/UX Design",
        "Design Systems",
        "User Research",
        "Product Strategy",
      ],
      education: "BFA Design, Rhode Island School of Design",
      achievements: [
        "15+ Design Awards",
        "Industry Speaker",
        "Design System Expert",
      ],
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/api/placeholder/400/400",
      bio: "Full-stack developer specializing in modern web technologies, mobile applications, and scalable architecture.",
      expertise: [
        "React/React Native",
        "Node.js",
        "TypeScript",
        "Cloud Native",
      ],
      education: "BSc Software Engineering, UC Berkeley",
      achievements: [
        "Open Source Maintainer",
        "Tech Community Leader",
        "Mentor",
      ],
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Client Success",
      description:
        "We measure our success by our clients' achievements, delivering solutions that drive real business value and competitive advantage.",
      color: "gold",
    },
    {
      icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Technical Excellence",
      description:
        "Commitment to building robust, scalable, and maintainable software solutions using industry best practices and cutting-edge technologies.",
      color: "gold",
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Innovation Driven",
      description:
        "Continuous exploration of emerging technologies and methodologies to solve complex business challenges with elegant solutions.",
      color: "gold",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Quality & Reliability",
      description:
        "Enterprise-grade security, performance, and reliability standards in every solution we design and develop.",
      color: "gold",
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Company Foundation",
      description:
        "Established with a vision to deliver enterprise-grade software solutions and digital transformation services",
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      year: "2020",
      title: "First Enterprise Project",
      description:
        "Successfully delivered a comprehensive CRM solution for Fortune 500 client, establishing our enterprise capabilities",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      year: "2021",
      title: "Team Expansion",
      description:
        "Grew to 15+ expert team members and expanded our service offerings to include AI and cloud solutions",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description:
        "Received industry awards for excellence in software development and expanded our global client base",
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      year: "2023",
      title: "AI & ML Integration",
      description:
        "Integrated advanced AI and machine learning capabilities into our service offerings and client solutions",
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      year: "2024",
      title: "Growth & Innovation",
      description:
        "50+ successful enterprise projects delivered with 98% client satisfaction and continued innovation in technology solutions",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "15+",
      label: "Expert Team",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <div className="pt-20 font-poppins">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Golden Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#FFB400] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#FFB400] rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(#FFB400_1px,transparent_1px),linear-gradient(90deg,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              {/* Tagline */}
              <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-8 border border-[#FFB400]/20 mx-auto">
                <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
                <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  Enterprise Software Excellence
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                  Building
                </span>
                <span className="block text-white">Digital Future</span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
                We are a team of passionate technologists and innovators
                dedicated to transforming businesses through cutting-edge
                software solutions and strategic digital transformation.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 text-slate-300 mt-6 sm:mt-8 justify-items-center max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-2 group"
                  >
                    <div className="text-[#FFB400] group-hover:scale-110 transition-transform duration-300 text-2xl sm:text-3xl">
                      {stat.icon}
                    </div>
                    <div className="font-bold text-white text-lg sm:text-xl md:text-2xl">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Mission & Vision */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Our
                </span>
                <span className="block">Story</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-slate-600 leading-relaxed font-light text-base sm:text-lg">
                <p>
                  Founded in 2019 by technology industry veterans, we emerged
                  from a powerful vision: to bridge the gap between innovative
                  technology and real business value. What began as a small team
                  of passionate engineers has evolved into a trusted technology
                  partner for businesses seeking digital transformation.
                </p>
                <p>
                  Our journey has been marked by continuous innovation,
                  strategic partnerships, and a relentless pursuit of technical
                  excellence. We've had the privilege of working with
                  forward-thinking organizations, helping them transform their
                  operations and customer experiences through sophisticated
                  digital solutions.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible,
                  embracing emerging technologies while maintaining our
                  commitment to delivering measurable business results and
                  long-term partnerships with our clients.
                </p>
              </div>
            </div>

            {/* Mission & Vision Box */}
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
                <div className="space-y-6 sm:space-y-8">
                  {/* Mission */}
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl flex items-center justify-center text-black flex-shrink-0">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                        Our Mission
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-light text-base sm:text-lg">
                        To empower businesses with innovative software solutions
                        that drive growth, enhance efficiency, and create
                        sustainable competitive advantages through digital
                        transformation.
                      </p>
                    </div>
                  </div>

                  {/* Vision */}
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-xl flex items-center justify-center text-black flex-shrink-0">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">
                        Our Vision
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-light text-base sm:text-lg">
                        To be the most trusted technology partner for businesses
                        worldwide, recognized for our technical excellence,
                        innovative solutions, and unwavering commitment to
                        client success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Our
                </span>
                <span className="block">Values</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                The core principles that guide our work, shape our culture, and
                define our commitment to delivering exceptional value to our
                clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group text-center bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-flex">
                  <div className="absolute inset-0 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl text-white group-hover:scale-110 transition-transform duration-500 z-10">
                    {value.icon}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-4 sm:mt-6 mb-3 sm:mb-4">
                  {value.title}
                </h3>

                <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFB400_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FF8C00] bg-clip-text text-transparent">
                  Leadership
                </span>
                <span className="block">Team</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Meet the experienced professionals driving our vision forward
                and delivering exceptional results for our clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Golden Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] to-[#FFD700] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl sm:rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-[#FFB400] to-[#FFD700] p-1">
                    <div className="w-full h-full bg-slate-300 rounded-2xl flex items-center justify-center text-slate-600">
                      <div className="text-center">
                        <div className="font-bold text-xs sm:text-sm">
                          {member.name.split(" ")[0]}
                        </div>
                        <div className="text-xs">
                          {member.role.split(" ")[0]}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 text-center mb-2">
                    {member.name}
                  </h3>

                  <p className="text-[#FFB400] font-bold text-center mb-3 sm:mb-4 text-sm sm:text-base">
                    {member.role}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-light text-center">
                    {member.bio}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400]" />
                      <span className="text-xs sm:text-sm text-slate-600 font-medium">
                        {member.education}
                      </span>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                        Expertise
                      </p>
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-[#FFB400]" />
                          <span className="text-xs text-slate-600">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Golden Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFB400]/5 via-slate-950 to-[#FFB400]/5"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                  Our
                </span>
                <span className="block text-white">Journey</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Key milestones that mark our growth, innovation, and commitment
                to delivering exceptional software solutions.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Golden Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FFB400] to-[#FFD700] rounded-full hidden sm:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } animate-on-scroll opacity-0 translate-y-8`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Content */}
                  <div
                    className={`w-full sm:w-1/2 ${
                      index % 2 === 0 ? "sm:pr-6 lg:pr-12" : "sm:pl-6 lg:pl-12"
                    } mb-4 sm:mb-0`}
                  >
                    <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 border border-slate-700/50 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-2xl flex items-center justify-center text-slate-900">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-black text-white mb-1">
                            {item.year}
                          </div>
                          <h3 className="text-lg sm:text-xl font-black text-[#FFB400]">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed font-light text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Golden Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-full border-4 border-slate-900 z-10 group-hover:scale-150 transition-transform duration-300 hidden sm:block"></div>

                  {/* Mobile Dot */}
                  <div className="w-4 h-4 bg-gradient-to-br from-[#FFB400] to-[#FFD700] rounded-full border-4 border-slate-900 z-10 my-4 sm:hidden"></div>

                  {/* Spacer */}
                  <div className="w-full sm:w-1/2"></div>
                </div>
              ))}
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

export default About;