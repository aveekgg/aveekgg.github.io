'use client';

import { useState, useEffect } from 'react';

const projects = [
  {
    title: "Smart Insights Dashboard",
    link: "https://www.loom.com/share/7f5e2040591b48748e82ab8513fdc4fc",
    embedUrl: "https://www.loom.com/embed/7f5e2040591b48748e82ab8513fdc4fc",
    description: "An AI analytics platform that turns plain-English questions into clean tables and charts.",
    tech: ["AI Analytics", "Natural Language Querying", "Data Visualization", "Dashboards"],
    viewType: "video",
    featured: true,
    fullDescription: "Smart Insights Dashboard lets users ask questions about their own data in plain English and get answers back as clean tables and charts — no SQL or BI tooling required.\n\nUsers upload a workbook and apply a saved column mapping, which gets cleaned and stored centrally. From there, they can simply type a question (e.g. \"occupancy over the last 3 quarters of 2024\"), and the platform runs the underlying query and surfaces the answer instantly.\n\nKey capabilities:\n• Ask questions in natural language and get instant answers\n• View results as clean, structured tables\n• Generate charts directly from the answer\n• Add charts to a persistent dashboard for later reference\n• Switch between table and chart views within the dashboard"
  },
  {
    title: "IELTS Prep App",
    link: "https://ieltsprep.vercel.app/",
    description: "A speaking-focused prep app designed for async voice practice.",
    tech: ["React", "Next.js", "Voice API", "AI"],
    viewType: "mobile", // Mobile-first app
    fullDescription: "An innovative IELTS preparation app that focuses on speaking practice through asynchronous voice interactions. Users can practice speaking exercises, get AI-powered feedback, and improve their pronunciation and fluency at their own pace."
  },
  {
    title: "Chat UI for Property Discovery",
    link: "https://v0-chat-ui-with-carousel.vercel.app/",
    description: "Interactive multi-turn assistant with carousel UI for property options.",
    tech: ["React", "AI Chat", "Carousel UI", "Property API"],
    viewType: "mobile", // Mobile-optimized chat interface
    fullDescription: "A conversational property discovery platform featuring an intelligent chat assistant that helps users find properties through natural language. The carousel interface makes it easy to browse through property recommendations on mobile devices."
  },
  {
    title: "Chat-Enabled Property Page",
    link: "https://chatpage-nu.vercel.app/",
    description: "Mimics a real property listing with embedded conversational agent.",
    tech: ["Next.js", "AI Agent", "Real Estate", "Chat Integration"],
    viewType: "mobile", // Property listings work well on mobile too
    fullDescription: "A realistic property listing page enhanced with an embedded AI conversational agent. Users can ask questions about the property, schedule viewings, and get instant responses while browsing the listing details."
  },
  {
    title: "AI Debugger / Simulate Chat Tool",
    link: "https://v0-zendesk-debugger.vercel.app/",
    description: "A playground to test and iterate AI sales/support agents.",
    tech: ["AI Testing", "Zendesk", "Support Tools", "Debugging"],
    viewType: "desktop", // Development tools are desktop-focused
    fullDescription: "A comprehensive debugging and simulation platform for AI-powered sales and support agents. Features include conversation flow testing, response analysis, integration debugging, and performance metrics. Essential for teams building conversational AI systems."
  }
];

const skills = [
  { category: "AI & ML", items: ["LLM Integration", "Agentic Workflows", "Tool-calling Pipelines", "Voice AI"] },
  { category: "Product", items: ["Product Strategy", "User Research", "Analytics", "A/B Testing"] },
  { category: "Engineering", items: ["React/Next.js", "Python", "APIs", "System Design"] },
  { category: "Platforms", items: ["WhatsApp API", "Chatwoot", "Zendesk", "CRM Integration"] }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'resume', 'projects', 'contact'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = () => {
    setCurrentView('projects');
  };

  if (!mounted) return null;

  return (
    <div className="bg-cream-50 text-ink font-sans min-h-screen">
      {/* Updated Navbar - Template Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-cream-50 border-b border-cream-300">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-end items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setCurrentView('home')}
              className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-accent' : 'text-ink-light hover:text-ink'}`}
            >
              ABOUT ME
            </button>
            <button 
              onClick={() => setCurrentView('resume')}
              className={`text-sm font-medium transition-colors ${currentView === 'resume' ? 'text-accent' : 'text-ink-light hover:text-ink'}`}
            >
              RESUME
            </button>
            <button 
              onClick={() => setCurrentView('projects')}
              className={`text-sm font-medium transition-colors ${currentView === 'projects' ? 'text-accent' : 'text-ink-light hover:text-ink'}`}
            >
              PROJECTS
            </button>
            <button 
              onClick={() => setCurrentView('contact')}
              className={`text-sm font-medium transition-colors ${currentView === 'contact' ? 'text-accent' : 'text-ink-light hover:text-ink'}`}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
          >
            <div className="w-6 h-0.5 bg-accent"></div>
            <div className="w-6 h-0.5 bg-accent"></div>
            <div className="w-6 h-0.5 bg-accent"></div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream-50 border-t border-cream-300 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }}
                className={`block text-sm font-medium transition-colors ${currentView === 'home' ? 'text-accent' : 'text-ink-light'}`}
              >
                ABOUT ME
              </button>
              <button 
                onClick={() => { setCurrentView('resume'); setMobileMenuOpen(false); }}
                className={`block text-sm font-medium transition-colors ${currentView === 'resume' ? 'text-accent' : 'text-ink-light'}`}
              >
                RESUME
              </button>
              <button 
                onClick={() => { setCurrentView('projects'); setMobileMenuOpen(false); }}
                className={`block text-sm font-medium transition-colors ${currentView === 'projects' ? 'text-accent' : 'text-ink-light'}`}
              >
                PROJECTS
              </button>
              <button 
                onClick={() => { setCurrentView('contact'); setMobileMenuOpen(false); }}
                className={`block text-sm font-medium transition-colors ${currentView === 'contact' ? 'text-accent' : 'text-ink-light'}`}
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Render different views based on currentView */}
      {currentView === 'home' && <HomeView setCurrentView={setCurrentView} />}
      {currentView === 'resume' && <ResumeView />}
      {currentView === 'projects' && <ProjectsView selectedProject={selectedProject} setSelectedProject={setSelectedProject} />}
      {currentView === 'contact' && <ContactView />}

      {/* Keep existing modal code for projects */}
      {selectedProject && (
        <ProjectModal selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      )}
    </div>
  );
}

// Mobile Preview Component for Mobile Projects
function MobilePreviewLayout({ selectedProject, setSelectedProject }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="bg-cream-50 overflow-hidden shadow-2xl relative animate-fadeIn w-full h-full flex flex-col">
      {/* Header */}
      <div className="bg-cream-100 p-4 border-b border-cream-300 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h4 className="text-lg font-bold text-ink">{selectedProject.title}</h4>
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-cream-200 text-ink-light border border-cream-300">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
            </svg>
            Mobile
          </span>
        </div>
        <button 
          className="text-ink-light/70 hover:text-ink text-xl font-bold transition-colors"
          onClick={() => setSelectedProject(null)}
        >
          ✕
        </button>
      </div>

      {/* Toggle Description Button */}
      <div className="bg-cream-50 border-b border-cream-300 p-3">
        <button 
          onClick={() => setShowDescription(!showDescription)}
          className="flex items-center justify-between w-full text-left text-sm font-medium text-ink-light hover:text-ink transition-colors"
        >
          <span>Project Details</span>
          <svg className={`w-4 h-4 transform transition-transform ${showDescription ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Collapsible Description */}
      {showDescription && (
        <div className="bg-cream-100 border-b border-cream-300 p-4 max-h-48 overflow-y-auto">
          <p className="text-ink-light text-sm leading-relaxed mb-4">
            {selectedProject.fullDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {selectedProject.tech.map((tech, techIdx) => (
              <span key={techIdx} className="bg-cream-200 text-ink-light text-xs px-2 py-1 font-medium border border-cream-300">
                {tech}
              </span>
            ))}
          </div>
          <a 
            href={selectedProject.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-ink hover:text-ink-light text-sm font-medium transition-colors"
          >
            Open in New Tab
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}

      {/* Full Screen Preview */}
      <div className="flex-1 bg-cream-200">
        <iframe
          src={selectedProject.link}
          className="w-full h-full border-0 bg-cream-50"
          title="Project Preview"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
}

// Desktop Project Mobile View Component
function DesktopProjectMobile({ selectedProject, setSelectedProject }) {
  return (
    <div className="bg-cream-50 overflow-hidden shadow-2xl relative animate-fadeIn w-full h-full flex flex-col">
      {/* Header */}
      <div className="bg-cream-100 p-4 border-b border-cream-300 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <h4 className="text-lg font-bold text-ink">{selectedProject.title}</h4>
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-cream-200 text-ink-light border border-cream-300">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Desktop
          </span>
        </div>
        <button 
          className="text-ink-light/70 hover:text-ink text-xl font-bold transition-colors"
          onClick={() => setSelectedProject(null)}
        >
          ✕
        </button>
      </div>

      {/* Desktop Notice */}
      <div className="bg-cream-200 border-b border-cream-300 p-4">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-ink-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-ink-light text-sm font-medium">
            This project is optimized for desktop viewing
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h5 className="font-semibold text-ink mb-4">About This Project</h5>
        <p className="text-ink-light text-sm leading-relaxed mb-6">
          {selectedProject.fullDescription}
        </p>
        
        <h5 className="font-semibold text-ink mb-3">Technologies Used</h5>
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedProject.tech.map((tech, techIdx) => (
            <span key={techIdx} className="bg-cream-200 text-ink-light text-xs px-2 py-1 font-medium border border-cream-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="bg-cream-100 border border-cream-300 p-4 mb-6">
          <h5 className="font-semibold text-ink mb-2">🖥️ Desktop Experience Required</h5>
          <p className="text-ink-light text-sm mb-3">
            This project is designed for desktop browsers and includes advanced features that work best on larger screens with mouse interaction.
          </p>
        </div>

        <div className="space-y-3">
          <a 
            href={selectedProject.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-black hover:bg-ink text-white py-3 px-4 font-medium transition-colors text-center"
          >
            Open on Desktop Browser
          </a>
          
          <button 
            onClick={() => setSelectedProject(null)}
            className="block w-full bg-cream-200 hover:bg-cream-300 text-ink-light py-3 px-4 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// Home View Component
function HomeView({ setCurrentView }) {
  return (
    <div className="pt-20 min-h-screen flex">
      {/* Left Sidebar - Profile Section - Hidden on mobile */}
      <div className="hidden lg:block w-80 lg:w-96 bg-cream-100 fixed left-0 top-20 bottom-0 overflow-y-auto border-r border-cream-300">
        <div className="p-8 flex flex-col items-center text-center h-full">
          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full blur-lg opacity-25 scale-110"></div>
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/image.jpeg"
                alt="Aveek G."
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </div>
          
          {/* Name & Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-semibold text-ink mb-2">
              Aveek G<span className="text-ink-light/50">.</span>
            </h2>
            <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-ink-light font-medium tracking-wide uppercase text-sm">
              Product Manager II
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-3 mb-8 text-sm text-ink-light">
            <div className="flex items-center justify-center gap-2">
              <span className="text-ink-light/50">📍</span>
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-ink-light/50">📫</span>
              <span>aveekg19@gmail.com</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="space-y-3 mb-8">
            <button 
              onClick={() => setCurrentView('resume')}
              className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-3 font-medium transition-colors rounded-full"
            >
              RESUME
            </button>
            <button 
              onClick={() => setCurrentView('projects')}
              className="w-full border border-ink hover:bg-ink hover:text-white text-ink px-8 py-3 font-medium transition-colors rounded-full"
            >
              PROJECTS
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 mt-auto mb-8">
            <a href="https://linkedin.com/in/aveekg" target="_blank" rel="noopener noreferrer" 
               className="text-ink-light hover:text-ink transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Content Area - Full width on mobile */}
      <div className="flex-1 lg:ml-80 lg:ml-96">
        {/* Mobile Profile Header - Shown only on mobile */}
        <div className="lg:hidden bg-cream-100 border-b border-cream-300 px-6 py-8">
          <div className="text-center">
            <div className="relative mb-6 inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full blur-lg opacity-25 scale-110"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/image.jpeg"
                  alt="Aveek G."
                  className="w-full h-full object-cover scale-125"
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-serif font-semibold text-ink mb-2">
              Aveek G<span className="text-ink-light/50">.</span>
            </h2>
            <div className="w-12 h-1 bg-black mx-auto mb-4"></div>
            <p className="text-ink-light font-medium tracking-wide uppercase text-sm mb-6">
              Product Manager II
            </p>

            {/* Mobile CTA Buttons */}
            <div className="flex gap-3 justify-center">
              <button 
                onClick={() => setCurrentView('resume')}
                className="bg-accent hover:bg-accent-dark text-white px-6 py-2 text-sm font-medium transition-colors rounded-full"
              >
                RESUME
              </button>
              <button 
                onClick={() => setCurrentView('projects')}
                className="border border-ink hover:bg-ink hover:text-white text-ink px-6 py-2 text-sm font-medium transition-colors rounded-full"
              >
                PROJECTS
              </button>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <section className="min-h-screen flex items-center px-6 lg:px-16">
          <div className="max-w-4xl">
            {/* Large Greeting */}
            <div className="mb-12">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-ink mb-6">
                Hello
              </h1>
              <p className="text-lg lg:text-xl xl:text-2xl text-ink-light mb-8">
                Here's who I am & what I do
              </p>
            </div>

            {/* About Me */}
            <div className="max-w-3xl">
              {/* Expanded About Section */}
              <div className="space-y-6 text-ink-light leading-relaxed">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-ink flex items-center gap-3">
                      <span className="text-accent font-serif text-sm tracking-widest">01</span> From Ships to Startups
                    </h3>
                    <p>
                      After graduating from IIT Kharagpur in Ocean Engineering & Naval Architecture, I spent four years designing marine propulsion systems. Over time, I realized I wanted to build products that evolved faster and touched more lives. That led me to pursue an MBA from IIM Bangalore in 2019 and make the jump to tech.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-ink flex items-center gap-3">
                      <span className="text-accent font-serif text-sm tracking-widest">02</span> Amazon: Learning the Art of Balance
                    </h3>
                    <p className="mb-3">
                      My first stop in tech was Amazon's Workforce Intelligence team, planning staffing for middle-mile logistics.
                    </p>
                    <p className="mb-3">
                      The role often felt like sitting between operations teams chasing SLAs and finance teams chasing budgets. Forecasts looked great—until a snowstorm somewhere in the U.S. made them useless overnight.
                    </p>
                    <p className="mb-3">
                      I learnt that forecasting is part science, part art, and occasionally, part gut feel. More importantly, I learnt how to build trust, manage stakeholders, and make decisions with imperfect information.
                    </p>
                    <p>
                      Somewhere along the way, I realized I wanted to build products.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-ink flex items-center gap-3">
                      <span className="text-accent font-serif text-sm tracking-widest">03</span> Amber: Learning Product the Startup Way
                    </h3>
                    <p className="mb-3">
                      Amber was my crash course in product management—the startup way.
                    </p>
                    <p className="mb-3">
                      I built internal platforms used by sales, support, reconciliation, and supply teams. In a startup, "that's not my job" isn't really a thing, and I loved that.
                    </p>
                    <p className="mb-3">
                      I spent my days obsessing over backend logic, hanging around engineers far more than PMs probably should, and in the process made some of my closest friends.
                    </p>
                    <p className="mb-3">
                      Over three years, I worked on everything from CRM workflows and lead assignment systems to communication platforms and AI-powered conversational experiences.
                    </p>
                    <p>
                      Most importantly, I got to work with some incredibly smart people and had a lot of fun doing it.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-ink flex items-center gap-3">
                      <span className="text-accent font-serif text-sm tracking-widest">04</span> Nielsen: Operational Excellence at Scale
                    </h3>
                    <p className="mb-3">
                      Today, I'm a Product Manager II at Nielsen, building digital self-install experiences for households participating in audience measurement programs across the U.S.
                    </p>
                    <p>
                      My focus is on making installation effortless for panelists while reducing operational complexity behind the scenes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-ink flex items-center gap-3">
                      <span className="text-accent font-serif text-sm tracking-widest">05</span> How I Think
                    </h3>
                    <div className="text-ink-light space-y-2">
                      <p>• I enjoy getting my hands dirty with SQL and digging through data.</p>
                      <p>• GPT and Claude are usually open in a browser tab somewhere.</p>
                      <p>• I occasionally vibe-code product ideas for fun.</p>
                      <p>• I value people who tell me why something won't work—they sharpen my thinking the most.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Resume View Component
function ResumeView() {
  const experiences = [
    {
      title: "Product Manager II",
      company: "Nielsen",
      period: "10/2025 - Present",
      location: "Bengaluru, India",
      description: "Driving operational efficiency by building end-to-end self-install digital workflows for U.S. households empaneled in audience measurement programs.",
      achievements: [
        "Built self-install digital workflows for U.S. households in audience measurement programs",
        "Reduced installation friction and dependency on field operations"
      ]
    },
    {
      title: "Product Manager, AI & Automation",
      company: "Amber",
      period: "09/2022 - 09/2025",
      location: "Pune, India",
      description: "Led AI-driven automation across sales and support, unifying interactions and improving conversion, transparency, and cost efficiency.",
      achievements: [
        "Automated 30% of support queries via AI-driven workflows for lead qualification, property recommendations, and booking assistance across web and WhatsApp",
        "Devised LLM-as-a-Judge framework for automated quality checks, SOP compliance validation, and iterative workflow fine-tuning, improving accuracy and CSAT",
        "Unified 500K+ monthly interactions across tickets, emails, WhatsApp, and voice into a single CRM view, boosting agent efficiency and manager oversight",
        "Boosted booking conversions by 10% through a branded video co-browsing platform using AWS Chime",
        "Managed $200K+ cashback payouts with an end-to-end tracking system, reducing CB-delay-related negative reviews by 15%",
        "Cut operational costs by 20% by migrating the voice platform from Twilio to Plivo with zero downtime"
      ]
    },
    {
      title: "Program Manager, Capacity Planning",
      company: "Amazon",
      period: "06/2021 - 06/2022",
      location: "Hyderabad, India",
      description: "Developed forecasting solutions for U.S. middle mile logistics and led strategic capacity planning for peak season.",
      achievements: [
        "Developed advanced forecasting solutions predicting headcount needs across 8 support teams in U.S. middle mile logistics",
        "Quantified technology ROI through targeted pilots to determine feasibility of enterprise initiatives",
        "Orchestrated cross-functional resource allocation for peak holiday season (Black Friday/Cyber Monday), ensuring SLA compliance"
      ]
    },
    {
      title: "Assistant Manager, Engineering",
      company: "GRSE",
      period: "11/2016 - 05/2019",
      location: "Kolkata, India",
      description: "Led multidisciplinary engineering teams in naval vessel design and construction.",
      achievements: [
        "Led multidisciplinary engineering teams in naval vessel design and construction"
      ]
    },
    {
      title: "Naval Architect",
      company: "Cybermarine",
      period: "07/2015 - 10/2016",
      location: "Navi Mumbai, India",
      description: "Designed and analyzed naval vessel structures and systems.",
      achievements: [
        "Designed and analyzed naval vessel structures and systems"
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-ink mb-4">Resume</h1>
          <p className="text-lg sm:text-xl text-ink-light mb-6 sm:mb-8">My Professional Journey</p>
          
          {/* Download CV Button */}
          <a 
            href="/aveek_g_resume.pdf" 
            target="_blank" 
            download="Aveek_G_Resume.pdf"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 sm:px-8 py-3 font-medium transition-colors rounded-lg text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-cream-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-cream-300 hover:shadow-xl transition-shadow">
              {/* Header with Period Badge */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-ink">{exp.title}</h3>
                    <div className="inline-block bg-accent-50 text-accent-dark text-xs sm:text-sm px-3 py-1 rounded-full font-medium w-fit">
                      {exp.period}
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-ink-light mb-1">{exp.company}</h4>
                  <p className="text-sm text-ink-light/70 mb-3 sm:mb-4">{exp.location}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-ink-light mb-4 leading-relaxed">{exp.description}</p>
              
              {/* Achievements */}
              <div>
                <h5 className="font-semibold text-ink mb-3 text-sm sm:text-base">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-xs sm:text-sm text-ink-light flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-12 sm:mt-16 bg-cream-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-cream-300">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 sm:mb-6">Education</h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div className="border border-cream-300 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-ink">MBA - Product Management, Analytics</h3>
              <p className="text-sm sm:text-base text-ink-light font-medium">Indian Institute of Management, Bangalore</p>
              <p className="text-xs sm:text-sm text-ink-light/70">2019 - 2021</p>
              <p className="text-xs sm:text-sm text-ink-light mt-2">GPA 3.21 / 4.00</p>
            </div>
            <div className="border border-cream-300 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-ink">Dual Degree (B.Tech + M.Tech)</h3>
              <p className="text-sm sm:text-base text-ink-light font-medium">Indian Institute of Technology, Kharagpur</p>
              <p className="text-xs sm:text-sm text-ink-light/70">2010 - 2015</p>
              <p className="text-xs sm:text-sm text-ink-light mt-2">Ocean Engineering & Naval Architecture · GPA 9.17 / 10.00 · Department Rank 1</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6 sm:mt-8 bg-cream-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-cream-300">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 sm:mb-6">Core Skills</h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-ink mb-3 text-sm sm:text-base">Product Management</h3>
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'User Research', 'Analytics', 'A/B Testing', 'Roadmapping'].map((skill, index) => (
                  <span key={index} className="bg-accent-50 text-accent-dark text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-ink mb-3 text-sm sm:text-base">AI & Technology</h3>
              <div className="flex flex-wrap gap-2">
                {['LLM Integration', 'Agentic Workflows', 'LangGraph', 'SQL', 'APIs'].map((skill, index) => (
                  <span key={index} className="bg-cream-200 text-ink text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="sm:col-span-1 sm:col-start-1 sm:row-start-2 sm:grid sm:col-span-3">
              <h3 className="font-semibold text-ink mb-3 text-sm sm:text-base">Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Zendesk', 'Chatwoot', 'AWS', 'WhatsApp API', 'CRM Systems'].map((skill, index) => (
                  <span key={index} className="bg-cream-300 text-ink text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Projects View Component
function ProjectsView({ selectedProject, setSelectedProject }) {
  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-semibold text-ink mb-4">Projects</h1>
          <p className="text-xl text-ink-light">Projects That Show My Vibe</p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((proj, idx) => (
          <div key={`featured-${idx}`} className="max-w-6xl mx-auto mb-12 bg-cream-50 border border-cream-300 rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 md:items-stretch">
              {/* Video Container */}
              <div className="bg-ink relative h-64 md:h-auto">
                <iframe
                  src={proj.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title={proj.title}
                />
              </div>
              {/* Details */}
              <div className="p-4 sm:p-5 flex flex-col">
                <span className="inline-flex items-center gap-1 self-start mb-2 bg-accent-50 text-accent-dark text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  ★ Featured Project
                </span>
                <h3 className="text-lg font-serif font-semibold text-ink mb-1">{proj.title}</h3>
                <p className="text-ink-light text-sm mb-3 leading-snug">{proj.description}</p>
                <ul className="text-ink-light text-xs mb-3 space-y-1">
                  <li>• Ask questions in plain English, get instant answers</li>
                  <li>• Answers rendered as clean tables and charts</li>
                  <li>• Save charts to a persistent dashboard for later reference</li>
                  <li>• Toggle between table and chart views</li>
                </ul>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {proj.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="bg-cream-200 text-ink-light text-xs px-2 py-0.5 font-medium border border-cream-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white px-4 py-2 text-sm font-medium transition-colors rounded-lg w-fit mt-auto"
                >
                  Watch on Loom
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {projects.filter(p => !p.featured).map((proj, idx) => (
            <div key={idx} className="group bg-cream-50 border border-cream-300 p-6 hover:border-ink transition-all duration-300 cursor-pointer rounded-lg shadow-sm hover:shadow-lg"
                 onClick={() => setSelectedProject(proj)}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-ink group-hover:text-ink-light transition-colors">
                  {proj.title}
                </h3>
                <svg className="w-5 h-5 text-ink-light/50 group-hover:text-ink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-ink-light mb-4 leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="bg-cream-200 text-ink-light text-xs px-2 py-1 font-medium border border-cream-300 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="text-ink hover:text-ink-light font-medium flex items-center transition-colors">
                Preview Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Contact View Component
function ContactView() {
  return (
    <div className="pt-20 min-h-screen bg-cream-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-semibold text-ink mb-4">Contact</h1>
          <p className="text-xl text-ink-light">Let's Build Something Amazing Together</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <div className="bg-cream-50 rounded-2xl p-8 shadow-lg border border-cream-300 text-center">
            <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">Email</h3>
            <p className="text-ink-light mb-4">Drop me a line anytime</p>
            <a href="mailto:aveekg19@gmail.com" 
               className="inline-block bg-accent hover:bg-accent-dark text-white px-6 py-3 font-medium transition-colors rounded-lg">
              aveekg19@gmail.com
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-cream-50 rounded-2xl p-8 shadow-lg border border-cream-300 text-center">
            <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">LinkedIn</h3>
            <p className="text-ink-light mb-4">Let's connect professionally</p>
            <a href="https://linkedin.com/in/aveekg" target="_blank" rel="noopener noreferrer"
               className="inline-block border border-ink hover:bg-ink hover:text-white text-ink px-6 py-3 font-medium transition-colors rounded-lg">
              Connect with me
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="bg-cream-50 rounded-2xl p-8 shadow-lg border border-cream-300 text-center">
          <div className="w-16 h-16 bg-cream-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-ink mb-2">Location</h3>
          <p className="text-ink-light">📍 Bengaluru, India</p>
        </div>
      </div>
    </div>
  );
}

// Project Modal Component
function ProjectModal({ selectedProject, setSelectedProject }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm transition-opacity duration-300 p-4">
      
      {/* Desktop Layout */}
      <div className={`hidden md:flex bg-cream-50 overflow-hidden shadow-2xl relative animate-fadeIn rounded-xl ${
        selectedProject.viewType === 'mobile' 
          ? 'w-full max-w-5xl h-[90vh]' 
          : 'w-full max-w-7xl h-[90vh]'
      }`}>
        
        {/* Left Description Pane - Desktop */}
        <div className={`bg-cream-100 border-r border-cream-300 flex flex-col ${
          selectedProject.viewType === 'mobile' ? 'w-80' : 'w-96'
        }`}>
          <div className="p-6 border-b border-cream-300">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-ink">{selectedProject.title}</h4>
              <button 
                className="text-ink-light/70 hover:text-ink text-xl font-bold transition-colors ml-4"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>
            
            <div className="flex items-center mb-4">
              <span className={`inline-flex items-center px-2 py-1 text-xs font-medium border ${
                selectedProject.viewType === 'mobile' 
                  ? 'bg-cream-200 text-ink-light border-cream-300' 
                  : 'bg-cream-200 text-ink-light border-cream-300'
              }`}>
                {selectedProject.viewType === 'mobile' ? (
                  <>
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                    </svg>
                    Mobile View
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Desktop View
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <h5 className="font-semibold text-ink mb-3">About This Project</h5>
            <p className="text-ink-light text-sm leading-relaxed mb-6">
              {selectedProject.fullDescription}
            </p>
            
            <h5 className="font-semibold text-ink mb-3">Technologies Used</h5>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech, techIdx) => (
                <span key={techIdx} className="bg-cream-200 text-ink-light text-xs px-2 py-1 font-medium border border-cream-300 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-cream-50 border border-cream-300 p-4 rounded-lg">
              <h5 className="font-semibold text-ink mb-2">Live Preview</h5>
              <p className="text-ink-light text-xs mb-3">
                Interact with the live application in the preview pane. The website is fully functional and responsive.
              </p>
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-ink hover:text-ink-light text-sm font-medium transition-colors"
              >
                Open in New Tab
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="p-4 border-t border-cream-300 bg-cream-50">
            <button 
              onClick={() => setSelectedProject(null)}
              className="w-full bg-cream-200 hover:bg-cream-300 text-ink-light py-2 px-4 font-medium transition-colors text-sm rounded-lg"
            >
              Close Preview
            </button>
          </div>
        </div>

        {/* Right Preview Pane - Desktop */}
        <div className="flex-1 flex flex-col bg-cream-200">
          <div className="p-4 bg-cream-50 border-b border-cream-300">
            <div className="flex items-center justify-between">
              <h5 className="font-medium text-ink-light">Live Preview</h5>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-ink-light/40 rounded-full"></div>
                  <div className="w-3 h-3 bg-ink-light/40 rounded-full"></div>
                  <div className="w-3 h-3 bg-ink-light/40 rounded-full"></div>
                </div>
                <button 
                  className="text-ink-light/50 hover:text-ink-light transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center items-start p-4">
            <iframe
              src={selectedProject.link}
              className={`border-0 bg-cream-50 shadow-lg rounded-lg ${
                selectedProject.viewType === 'mobile'
                  ? 'w-full max-w-sm h-full'
                  : 'w-full h-full'
              }`}
              title="Project Preview"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full h-full">
        {selectedProject.viewType === 'mobile' ? (
          <MobilePreviewLayout selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        ) : (
          <DesktopProjectMobile selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        )}
      </div>

    </div>
  );
} 