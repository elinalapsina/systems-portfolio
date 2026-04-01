import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Menu, X, Mail, Linkedin, MapPin, 
  ArrowRight, Layout, Settings, Cpu, Target, Lock, 
  Globe, Briefcase, Award
} from 'lucide-react';

// --- STRATEGIC CONTENT DATA ---
const caseStudies = [
  {
    id: 'gcc-export',
    title: 'GCC Market Entry & Export Architecture',
    tag: 'International Operations / Strategy',
    type: 'Operational Framework',
    context: 'Navigating regulatory and cultural landscapes for Baltic-to-GCC export operations.',
    problem: 'Fragmented supply chains and lack of standardized B2B communication for modular technology.',
    objective: 'Standardize operational procedures (SOPs) for high-value exports to the UAE and Saudi Arabia.',
    role: 'Systems Architect & Market Strategist',
    users: 'Institutional partners and export logistics leads.',
    highlights: ['Export Logic Systems', 'Regulatory Alignment', 'B2B Communication Framework'],
    value: 'A scalable operational model for high-value European technology in the Gulf region.',
    isSensitive: true,
    image: 'https://images.unsplash.com/photo-1512453979798-5eaad0ff3b0d?q=80&w=1000' 
  },
  {
    id: 'ai-workflow',
    title: 'AI-First Organizational Optimization',
    tag: 'AI Strategy / Systems Design',
    type: 'Capability Building',
    context: 'Transitioning traditional professional services to AI-supported work methods.',
    problem: 'Operational friction in high-volume executive reporting and data synthesis.',
    objective: 'Implement custom AI workflows to reduce administrative overhead and increase strategic output.',
    role: 'AI Systems Designer',
    users: 'Executive management and professional consultants.',
    highlights: ['Prompt Engineering', 'Workflow Automation', 'Capability-Building Logic'],
    value: '30% reduction in administrative task duration through structured AI integration.',
    isSensitive: false,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000'
  },
  {
    id: 'performance-system',
    title: 'Olympic-Level Performance Analytics',
    tag: 'Sport Operations / Systems Logic',
    type: 'Analytical Toolset',
    context: 'Elite-level archery training requires precision feedback loops.',
    problem: 'Disjointed data points between technical biomechanics and psychological readiness.',
    objective: 'Design a unified performance tracking system for high-performance athlete development.',
    role: 'Performance Lead & System Architect',
    users: 'Elite athletes and coaching staff.',
    highlights: ['Real-time Feedback Loops', 'Data-Driven Technical Analysis', 'Performance KPIs'],
    value: 'A structured logic for technical mastery and competitive peak performance.',
    isSensitive: false,
    image: 'https://images.unsplash.com/photo-1511391941608-8697ef2c6361?q=80&w=1000'
  }
];

// --- SUB-COMPONENTS ---
const RedactedImage = ({ src, alt, isSensitive }) => (
  <div className="relative overflow-hidden rounded-sm group h-full w-full bg-gray-100">
    <img 
      src={src} 
      alt={alt} 
      className={`object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 ${isSensitive ? 'blur-3xl grayscale brightness-50' : 'grayscale hover:grayscale-0 transition-all duration-500'}`} 
    />
    {isSensitive && (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl">
        <Lock className="text-white/40 w-10 h-10 mb-3" strokeWidth={1} />
        <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">Proprietary Framework</span>
        <span className="text-white/40 text-[9px] mt-2">Details Available via Secure Consultation</span>
      </div>
    )}
  </div>
);

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-24">
    <motion.h2 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-5xl font-light tracking-tighter text-gray-900 mb-8"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <p className="text-gray-500 max-w-2xl text-xl leading-relaxed font-light border-l border-gray-200 pl-8">
        {subtitle}
      </p>
    )}
  </div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Systems' },
    { id: 'case-studies', label: 'Architecture' },
    { id: 'about', label: 'Profile' },
    { id: 'contact', label: 'Connect' }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* Dynamic Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => setActiveSection('home')}>
            <span className="font-bold tracking-tighter text-2xl uppercase">Elīna Lapsiņa</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Systems Architect • Riga — UAE</span>
          </div>
          
          <div className="hidden md:flex gap-12">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${activeSection === item.id ? 'text-black border-b-2 border-black pb-2' : 'text-gray-400 hover:text-black'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main className="pt-48 pb-32">
        {activeSection === 'home' && (
          <div className="max-w-7xl mx-auto px-8">
            <section className="mb-48">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl"
              >
                <h1 className="text-7xl md:text-[10rem] font-light tracking-tighter text-gray-900 mb-12 leading-[0.85] uppercase">
                  Logic <br/><span className="italic font-serif normal-case">meets</span> <br/>Results.
                </h1>
                <p className="text-2xl md:text-3xl text-gray-500 font-light leading-relaxed mb-16 max-w-3xl">
                  Strategic systems design for international operations, AI-first business modeling, and high-performance organizational growth.
                </p>
                <div className="flex gap-8">
                  <button onClick={() => setActiveSection('case-studies')} className="px-12 py-6 bg-black text-white text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-gray-800 transition-all flex items-center gap-4">
                    Case Studies <ArrowRight className="w-4 h-4"/>
                  </button>
                </div>
              </motion.div>
            </section>

            {/* Core Capability Matrix */}
            <section className="grid md:grid-cols-3 gap-1px bg-gray-100 border border-gray-100">
              {[
                { icon: <Globe />, title: "GCC Export Bridge", desc: "Building operational pathways for European innovation into the UAE and Saudi markets." },
                { icon: <Cpu />, title: "AI-First Systems", desc: "Custom-engineered prompt architecture and workflow automation for institutional efficiency." },
                { icon: <Award />, title: "Elite Performance", desc: "Leveraging Olympic-level technical analysis and coaching methodology for business systems." }
              ].map((cap, i) => (
                <div key={i} className="bg-white p-16 group hover:bg-gray-50 transition-colors">
                  <div className="mb-10 text-gray-300 group-hover:text-black transition-colors">{cap.icon}</div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4">{cap.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </section>
          </div>
        )}

        {activeSection === 'case-studies' && (
          <div className="max-w-7xl mx-auto px-8">
            <SectionHeading title="System Architecture" subtitle="Applied strategic thinking across international business, AI technology, and high-performance coaching." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
              {caseStudies.map((project) => (
                <motion.div 
                  key={project.id} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/5] mb-12 relative">
                    <RedactedImage src={project.image} alt={project.title} isSensitive={project.isSensitive} />
                  </div>
                  <div className="space-y-6">
                    <span className="text-[10px] font-black tracking-[0.4em] text-gray-300 uppercase">{project.tag}</span>
                    <h3 className="text-3xl font-light tracking-tight group-hover:pl-4 transition-all duration-500">{project.title}</h3>
                    <button className="text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-gray-100 pb-2 flex items-center gap-4 group-hover:border-black transition-all">
                      Analysis View <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* About / Profile Section */}
        {activeSection === 'about' && (
           <div className="max-w-7xl mx-auto px-8">
              <div className="grid md:grid-cols-2 gap-32">
                 <div className="aspect-[3/4] bg-gray-100 grayscale">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000" alt="Elīna Lapsiņa" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex flex-col justify-center">
                    <SectionHeading title="Systems Architect" />
                    <div className="space-y-12 text-xl font-light text-gray-500 leading-relaxed">
                      <p>
                        A multidisciplinary strategist specialized in <span className="text-black font-medium underline underline-offset-4 decoration-gray-200">System Architecture</span> and <span className="text-black font-medium underline underline-offset-4 decoration-gray-200">International Operational Excellence</span>.
                      </p>
                      <p>
                        With a decade of background in elite-level competitive sport and technical systems design, I bridge the gap between high-level ambition and operational reality—specifically within the Baltic and GCC business corridors.
                      </p>
                      <div className="grid grid-cols-2 gap-8 pt-12 border-t border-gray-100">
                         <div>
                            <h4 className="text-[10px] font-black tracking-widest text-black mb-4 uppercase">Directives</h4>
                            <ul className="text-sm space-y-2 uppercase tracking-tighter text-gray-400">
                               <li>AI-First Operations</li>
                               <li>SOP Development</li>
                               <li>GCC Market Entry</li>
                            </ul>
                         </div>
                         <div>
                            <h4 className="text-[10px] font-black tracking-widest text-black mb-4 uppercase">Performance</h4>
                            <ul className="text-sm space-y-2 uppercase tracking-tighter text-gray-400">
                               <li>Archery Coaching (C)</li>
                               <li>Systems Lead</li>
                               <li>LA26 Prospect</li>
                            </ul>
                         </div>
                      </div>
                    </div>
                 </div>
              </div>
           </div>
        )}
      </main>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] bg-white overflow-y-auto">
            <div className="sticky top-0 bg-white/90 backdrop-blur-md p-8 flex justify-between items-center border-b border-gray-100">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-gray-400">Project Blueprint</span>
              <button onClick={() => setSelectedProject(null)} className="px-8 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em]">Close</button>
            </div>
            <div className="max-w-4xl mx-auto px-8 py-32">
              <span className="text-xs font-black tracking-[0.4em] text-gray-400 uppercase mb-8 block">{selectedProject.type}</span>
              <h2 className="text-7xl font-light tracking-tighter mb-24">{selectedProject.title}</h2>
              <div className="grid md:grid-cols-2 gap-24 mb-32">
                <div>
                  <h4 className="text-[10px] font-black uppercase mb-6 tracking-[0.2em]">Context</h4>
                  <p className="text-xl font-light text-gray-500 leading-relaxed">{selectedProject.context}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase mb-6 tracking-[0.2em]">The Objective</h4>
                  <p className="text-xl font-light text-gray-900 leading-relaxed">{selectedProject.objective}</p>
                </div>
              </div>
              <div className="aspect-video mb-32">
                <RedactedImage src={selectedProject.image} alt={selectedProject.title} isSensitive={selectedProject.isSensitive} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-24 border-t border-gray-100 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <span className="text-[10px] font-black tracking-[0.5em] text-gray-300 uppercase">© 2026 Elīna Lapsiņa — All Rights Reserved.</span>
          <div className="flex gap-12">
            <a href="#" className="text-[10px] font-black tracking-[0.3em] uppercase hover:text-gray-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] font-black tracking-[0.3em] uppercase hover:text-gray-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}