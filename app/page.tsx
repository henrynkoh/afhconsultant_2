"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  BookOpen, Shield, Pill, UtensilsCrossed, AlertTriangle, FileText, 
  ChevronRight, CheckCircle2, BarChart3, Users, Target, Zap,
  Menu, X, ArrowRight, Star, Award, TrendingUp
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const modules = [
    {
      id: "setting-up-home",
      title: "Setting Up Your Home",
      description: "Physical plant requirements, safety systems, and administrative records",
      icon: Shield,
      wac: "WAC 388-76-10525, 10585, 10584, 10885, 10890, 10320, 10325, 10355",
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
      stats: { questions: 50, phases: 5, topics: 15 },
    },
    {
      id: "emergency-planning",
      title: "Emergency Planning",
      description: "Disaster preparedness, evacuation procedures, and 72-hour survival logistics",
      icon: AlertTriangle,
      wac: "WAC 388-76-10830 through 10855",
      color: "bg-red-500",
      gradient: "from-red-500 to-red-600",
      stats: { questions: 50, phases: 4, topics: 12 },
    },
    {
      id: "medication-systems",
      title: "Medication Systems & Documentation",
      description: "Medication management, storage, administration, and disposal protocols",
      icon: Pill,
      wac: "WAC 388-76-10430 through 10490",
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600",
      stats: { questions: 50, phases: 4, topics: 14 },
    },
    {
      id: "mar-documentation",
      title: "MAR Documentation",
      description: "How to read and fill out Medication Administration Records",
      icon: FileText,
      wac: "WAC 388-76-10430 through 10490",
      color: "bg-indigo-500",
      gradient: "from-indigo-500 to-indigo-600",
      stats: { questions: 50, phases: 4, topics: 13 },
    },
    {
      id: "nutrition-activities",
      title: "Nutrition & Activities",
      description: "Food services, meal planning, and recreational activity requirements",
      icon: UtensilsCrossed,
      wac: "WAC 388-112A, WAC 388-76-10415",
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600",
      stats: { questions: 50, phases: 3, topics: 10 },
    },
  ];

  const features = [
    { icon: BookOpen, title: "5 Comprehensive Modules", description: "Complete curriculum covering all AFH compliance areas" },
    { icon: BarChart3, title: "250+ Practice Questions", description: "Logic-based questions with detailed explanations" },
    { icon: Target, title: "WAC Citations", description: "Every answer includes Washington Administrative Code references" },
    { icon: Zap, title: "Interactive Learning", description: "Expandable sections, category filters, answer reveals" },
    { icon: Users, title: "Expert Guidance", description: "Learn from industry experts and certified consultants" },
    { icon: Award, title: "Certification Ready", description: "Prepare for AFH consultant certification exams" },
  ];

  const stats = [
    { number: "5", label: "Complete Modules", icon: BookOpen, color: "text-blue-600" },
    { number: "250+", label: "Practice Questions", icon: BarChart3, color: "text-purple-600" },
    { number: "50+", label: "WAC Citations", icon: Target, color: "text-green-600" },
    { number: "100%", label: "Deficiency-Free Goal", icon: CheckCircle2, color: "text-red-600" },
  ];

  const sections = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "modules", label: "Curriculum Modules", icon: Shield },
    { id: "features", label: "Key Features", icon: Zap },
    { id: "stats", label: "Statistics", icon: BarChart3 },
    { id: "method", label: "R.A.R. Method", icon: Target },
    { id: "audience", label: "Target Audience", icon: Users },
    { id: "quickstart", label: "Quick Start", icon: TrendingUp },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        const id = element.getAttribute("data-section");

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(id || "overview");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`[data-section="${id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className="flex">
        {/* Sticky Sidebar Navigation */}
        <aside
          className={`fixed left-0 top-0 h-screen w-64 bg-white/95 backdrop-blur-lg border-r border-gray-200 shadow-xl z-40 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 overflow-y-auto`}
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-6 h-6 text-primary-600" />
              <h2 className="text-lg font-bold text-gray-900">Navigation</h2>
            </div>
            <p className="text-xs text-gray-500">Scroll to explore</p>
          </div>
          <nav className="p-4 space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{section.label}</span>
                  {activeSection === section.id && (
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  )}
                </button>
              );
            })}
          </nav>
          <div className="p-4 border-t border-gray-200 mt-auto">
            <Link
              href="/modules/setting-up-home"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              Start Learning
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          {/* Hero Section */}
          <section data-section="overview" className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4" />
                <span>Transform Your Career</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                AFH Compliance Architect
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Master Adult Family Home compliance in Washington State. Transform from a house to a licensed home with our comprehensive training platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">5 Modules</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">250+ Questions</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">WAC Citations</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/modules/setting-up-home"
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  Start Learning
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#quickstart"
                  className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all border-2 border-primary-200"
                >
                  Quick Start
                </Link>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section data-section="stats" className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
                  >
                    <Icon className={`w-8 h-8 ${stat.color} mb-4`} />
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Modules Section */}
          <section data-section="modules" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Curriculum Modules
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive training covering all aspects of AFH compliance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Link
                    key={module.id}
                    href={`/modules/${module.id}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-primary-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
                    <div className={`${module.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        Module {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{module.description}</p>
                    <p className="text-xs text-gray-500 font-mono mb-4">{module.wac}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <BarChart3 className="w-4 h-4" />
                        {module.stats.questions} Questions
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {module.stats.phases} Phases
                      </span>
                    </div>
                    <div className="mt-4 flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      Explore Module
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Features Section */}
          <section data-section="features" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to master AFH compliance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* R.A.R. Method Section */}
          <section data-section="method" className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-br from-primary-500 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="text-center mb-8">
                <Target className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-4xl md:text-5xl font-bold mb-4">The R.A.R. Method</h2>
                <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                  Every effective consultant uses this framework to provide logical, well-reasoned guidance
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">R</div>
                  <h3 className="text-xl font-bold mb-2">Regulation (WAC)</h3>
                  <p className="text-primary-100">What does the code literally say?</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">A</div>
                  <h3 className="text-xl font-bold mb-2">Assessment (Risk)</h3>
                  <p className="text-primary-100">What is the danger to a vulnerable adult?</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">R</div>
                  <h3 className="text-xl font-bold mb-2">Remedy (Physical)</h3>
                  <p className="text-primary-100">What exact tool or measurement fixes it?</p>
                </div>
              </div>
            </div>
          </section>

          {/* Target Audience Section */}
          <section data-section="audience" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Who Should Use This Platform?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Prospective Consultants", desc: "Seeking AFH consultant certification", icon: Users },
                { title: "Current Consultants", desc: "Expanding knowledge and expertise", icon: Award },
                { title: "Training Organizations", desc: "Comprehensive curriculum for students", icon: BookOpen },
                { title: "AFH Administrators", desc: "Preparing for DSHS inspections", icon: Shield },
                { title: "Healthcare Professionals", desc: "Transitioning to consulting career", icon: TrendingUp },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                  >
                    <Icon className="w-10 h-10 text-primary-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Quick Start Section */}
          <section data-section="quickstart" className="container mx-auto px-4 py-16">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <TrendingUp className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Begin your journey to becoming a certified AFH consultant today
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { step: "1", title: "Install", desc: "npm install" },
                  { step: "2", title: "Run", desc: "npm run dev" },
                  { step: "3", title: "Learn", desc: "Start with Module 1" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 font-mono">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link
                  href="/modules/setting-up-home"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Start Learning Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
