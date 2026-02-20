import React, { useEffect } from "react";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
  Search,
  BookOpen,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  Bookmark,
  ExternalLink,
  Building,
  GraduationCap,
  Globe,
  Cloud,
  Code2,
  Cpu,
  Database,
  Shield,
  Server,
  Layout,
  Workflow,
  Sparkles
} from "lucide-react";

const Blog = () => {
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

  const featuredPost = {
    title: "The Architecture of TensorFlow: Designing Large-Scale Machine Learning Systems",
    excerpt: "An in-depth look at how Google designed TensorFlow for scalability, flexibility, and production-ready machine learning applications.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Google AI Research Team",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Machine Learning",
    views: "15.2K",
    likes: "892",
    source: "Google AI Blog",
    sourceUrl: "https://ai.googleblog.com",
    sourceIcon: <Building className="w-4 h-4" />
  };

  const posts = [
    {
      title: "React 18: Concurrent Features and Performance Improvements",
      excerpt: "Deep dive into React 18's concurrent rendering, automatic batching, and new APIs that enable better user experiences.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "Meta Open Source Team",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Web Development",
      views: "23.4K",
      likes: "1.2K",
      source: "React Blog",
      sourceUrl: "https://react.dev/blog",
      sourceIcon: <Globe className="w-4 h-4" />
    },
    {
      title: "AWS Serverless Architecture Patterns for Enterprise",
      excerpt: "Best practices and reference architectures for building scalable serverless applications on AWS.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "Amazon Web Services",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Cloud Computing",
      views: "18.7K",
      likes: "945",
      source: "AWS Architecture Blog",
      sourceUrl: "https://aws.amazon.com/blogs/architecture",
      sourceIcon: <Cloud className="w-4 h-4" />
    },
    {
      title: "Zero Trust Security: Microsoft's Implementation Guide",
      excerpt: "How Microsoft implemented Zero Trust security across its enterprise environment and lessons learned.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "Microsoft Security Team",
      date: "March 8, 2024",
      readTime: "11 min read",
      category: "Cybersecurity",
      views: "12.3K",
      likes: "678",
      source: "Microsoft Security Blog",
      sourceUrl: "https://www.microsoft.com/security/blog",
      sourceIcon: <Shield className="w-4 h-4" />
    },
    {
      title: "Kubernetes at Scale: Netflix's Production Practices",
      excerpt: "How Netflix manages thousands of Kubernetes clusters and millions of containers in production.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "Netflix Technology Blog",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "DevOps",
      views: "21.8K",
      likes: "1.1K",
      source: "Netflix Tech Blog",
      sourceUrl: "https://netflixtechblog.com",
      sourceIcon: <Server className="w-4 h-4" />
    },
    {
      title: "Stanford CS229: Machine Learning Course Notes 2024",
      excerpt: "Comprehensive notes from Stanford's famous Machine Learning course, updated for modern applications.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "Stanford University",
      date: "March 3, 2024",
      readTime: "15 min read",
      category: "Education",
      views: "34.5K",
      likes: "2.3K",
      source: "Stanford CS Department",
      sourceUrl: "https://cs229.stanford.edu",
      sourceIcon: <GraduationCap className="w-4 h-4" />
    },
    {
      title: "MIT Distributed Systems Course: Design Patterns",
      excerpt: "Essential distributed systems patterns from MIT's 6.824 course, with real-world implementation examples.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "MIT Computer Science",
      date: "March 1, 2024",
      readTime: "14 min read",
      category: "Distributed Systems",
      views: "19.6K",
      likes: "1.4K",
      source: "MIT OpenCourseWare",
      sourceUrl: "https://ocw.mit.edu",
      sourceIcon: <BookOpen className="w-4 h-4" />
    },
    {
      title: "Google's Site Reliability Engineering Handbook",
      excerpt: "Key insights from Google's SRE team on building reliable, scalable, and efficient systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "Google SRE Team",
      date: "February 28, 2024",
      readTime: "13 min read",
      category: "SRE",
      views: "27.3K",
      likes: "1.8K",
      source: "Google Cloud Blog",
      sourceUrl: "https://cloud.google.com/blog/products/devops-sre",
      sourceIcon: <Workflow className="w-4 h-4" />
    },
    {
      title: "Airbnb's Microservices Architecture Evolution",
      excerpt: "How Airbnb evolved from monolith to microservices and the lessons learned along the way.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      author: "Airbnb Engineering",
      date: "February 25, 2024",
      readTime: "11 min read",
      category: "Software Architecture",
      views: "16.9K",
      likes: "987",
      source: "Airbnb Tech Blog",
      sourceUrl: "https://airbnb.io",
      sourceIcon: <Layout className="w-4 h-4" />
    }
  ];

  const categories = [
    { name: "Machine Learning", count: 28, icon: <Cpu className="w-4 h-4" /> },
    { name: "Web Development", count: 32, icon: <Code2 className="w-4 h-4" /> },
    { name: "Cloud Computing", count: 24, icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity", count: 18, icon: <Shield className="w-4 h-4" /> },
    { name: "DevOps", count: 21, icon: <Workflow className="w-4 h-4" /> },
    { name: "Distributed Systems", count: 15, icon: <Server className="w-4 h-4" /> },
    { name: "Software Architecture", count: 26, icon: <Layout className="w-4 h-4" /> },
    { name: "SRE", count: 12, icon: <Database className="w-4 h-4" /> },
    { name: "Education", count: 35, icon: <GraduationCap className="w-4 h-4" /> }
  ];

  const popularPosts = [
    {
      title: "System Design Interview: Complete Preparation Guide",
      category: "Software Architecture",
      views: "45.2K",
      source: "Google",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      title: "Deep Learning Specialization Notes",
      category: "Machine Learning",
      views: "38.7K",
      source: "Stanford",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      title: "Kubernetes Best Practices 2024",
      category: "DevOps",
      views: "32.1K",
      source: "Google Cloud",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const sources = [
    {
      name: "Google Research",
      articles: 45,
      icon: <Search className="w-4 h-4" />,
      url: "https://research.google"
    },
    {
      name: "Meta Engineering",
      articles: 38,
      icon: <Globe className="w-4 h-4" />,
      url: "https://engineering.fb.com"
    },
    {
      name: "AWS Architecture",
      articles: 52,
      icon: <Cloud className="w-4 h-4" />,
      url: "https://aws.amazon.com/architecture"
    },
    {
      name: "Microsoft Dev",
      articles: 41,
      icon: <Code2 className="w-4 h-4" />,
      url: "https://devblogs.microsoft.com"
    },
    {
      name: "Stanford CS",
      articles: 67,
      icon: <GraduationCap className="w-4 h-4" />,
      url: "https://cs.stanford.edu"
    },
    {
      name: "MIT OpenCourseWare",
      articles: 58,
      icon: <BookOpen className="w-4 h-4" />,
      url: "https://ocw.mit.edu"
    }
  ];

  return (
    <div className="pt-20 font-poppins bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#FFB400] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#FFB400] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-6 sm:mb-8 border border-[#FFB400]/20">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Industry Insights & Research
              </span>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#FFB400] via-[#FFD700] to-[#FFB400] bg-clip-text text-transparent">
                Technology
              </span>
              <span className="block text-white">Research Hub</span>
            </h1>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Curated insights from leading tech companies, research institutions, and industry experts. 
              Stay updated with the latest in software engineering, architecture, and computer science.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-[1.02] border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700">
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-[#FFB400] via-[#f2b62a] to-[#FFD700] text-slate-900 px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Featured Research</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
              <div className="p-6 sm:p-8 md:p-10 lg:p-14 relative z-10 flex flex-col justify-center">
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center space-x-1 bg-[#FFB400]/10 text-[#FFB400] px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                    {featuredPost.sourceIcon}
                    <span>{featuredPost.source}</span>
                  </span>
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 sm:mb-6 leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  <div className="flex items-center gap-2 group/author">
                    <Building className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400] group-hover/author:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-slate-500 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium">{featuredPost.views}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium">{featuredPost.likes}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={featuredPost.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Read Original Research
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden order-first lg:order-last">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/10 lg:via-transparent lg:to-black/5"></div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB400] via-[#f2b62a] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl sm:rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Search */}
              <div className="animate-on-scroll opacity-0 translate-y-8 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl sm:shadow-2xl border border-slate-200">
                <h3 className="font-black text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg flex items-center space-x-2">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
                  <span>Search Research</span>
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 pl-10 sm:pl-12 border border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#FFB400] focus:border-transparent transition-all duration-300 bg-white text-sm sm:text-base"
                  />
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400] absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Categories */}
              <div className="animate-on-scroll opacity-0 translate-y-8 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl sm:shadow-2xl border border-slate-200">
                <h3 className="font-black text-slate-900 mb-4 sm:mb-6 text-base sm:text-lg">Research Categories</h3>
                <div className="space-y-2 sm:space-y-3">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center justify-between text-slate-600 hover:text-slate-900 py-2 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl hover:bg-[#FFB400]/5 transition-all duration-300 group text-sm sm:text-base"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="text-[#FFB400] group-hover:scale-110 transition-transform duration-300">
                          {category.icon}
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold group-hover:bg-[#FFB400]/10 group-hover:text-[#FFB400] transition-all duration-300">
                        {category.count}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Sources */}
              <div className="animate-on-scroll opacity-0 translate-y-8 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl sm:shadow-2xl border border-slate-200">
                <h3 className="font-black text-slate-900 mb-4 sm:mb-6 text-base sm:text-lg">Research Sources</h3>
                <div className="space-y-2 sm:space-y-3">
                  {sources.map((source, index) => (
                    <a
                      key={index}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-slate-600 hover:text-slate-900 py-2 sm:py-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl hover:bg-[#FFB400]/5 transition-all duration-300 group text-sm sm:text-base"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="text-[#FFB400] group-hover:scale-110 transition-transform duration-300">
                          {source.icon}
                        </div>
                        <span className="font-medium">{source.name}</span>
                      </div>
                      <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold group-hover:bg-[#FFB400]/10 group-hover:text-[#FFB400] transition-all duration-300">
                        {source.articles}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="animate-on-scroll opacity-0 translate-y-8 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl sm:shadow-2xl border border-slate-200">
                <h3 className="font-black text-slate-900 mb-4 sm:mb-6 text-base sm:text-lg flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB400]" />
                  <span>Popular Research</span>
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {popularPosts.map((post, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center space-x-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl hover:bg-[#FFB400]/5 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-[#FFB400] bg-[#FFB400]/10 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight group-hover:text-[#FFB400] transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">{post.source}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {posts.map((post, index) => (
                  <article
                    key={index}
                    className="animate-on-scroll opacity-0 translate-y-8 group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-105 border border-slate-200 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-700"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="h-40 sm:h-48 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-1 sm:gap-2">
                        <span className="inline-flex items-center space-x-1 bg-white/90 text-slate-700 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
                          {post.sourceIcon}
                          <span className="text-xs">{post.source}</span>
                        </span>
                        <span className="inline-block bg-[#FFB400]/90 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 sm:mb-4 leading-tight group-hover:text-slate-800 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed font-light text-xs sm:text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1 sm:space-x-2 group/author">
                            <Building className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400] group-hover/author:scale-110 transition-transform duration-300" />
                            <span className="font-medium">{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400]" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB400]" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="flex items-center space-x-3 sm:space-x-4 text-slate-500 text-xs sm:text-sm">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <button className="text-slate-400 hover:text-[#FFB400] transition-colors duration-300">
                            <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button className="text-slate-400 hover:text-[#FFB400] transition-colors duration-300">
                            <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href={post.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#FFB400] hover:text-[#FF8C00] font-bold transition-colors duration-300 group/link text-xs sm:text-sm"
                        >
                          Read Original
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#FFB400]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#FFB400]/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 mb-8 sm:mb-12 border border-[#FFB400]/20">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#FFB400]" />
              <span className="text-white/90 text-sm sm:text-base md:text-lg font-bold tracking-widest">
                STAY INFORMED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8">
              Weekly Research
              <span className="block bg-gradient-to-r from-[#FFB400] to-[#FFD700] bg-clip-text text-transparent">
                Digest
              </span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4">
              Get curated technology research from top companies and institutions 
              delivered to your inbox every week. Join 25,000+ engineers and researchers.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-2xl sm:rounded-l-2xl sm:rounded-r-none focus:ring-2 focus:ring-[#FFB400] focus:border-transparent transition-all duration-300 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 border border-slate-600 text-sm sm:text-base"
                />
                <button className="bg-gradient-to-r from-[#FFB400] to-[#FFD700] text-slate-900 hover:from-[#FFD700] hover:to-[#FFB400] px-6 py-3 sm:px-8 sm:py-4 rounded-2xl sm:rounded-r-2xl sm:rounded-l-none font-bold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4 font-light">
                Professional research content. Unsubscribe anytime.
              </p>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blog;