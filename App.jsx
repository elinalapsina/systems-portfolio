import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Lock,
  ExternalLink,
  FileText,
  FolderOpen,
  ChevronRight,
} from 'lucide-react';

const CONTACT = {
  email: 'elina.lapsina@gmail.com',
  phone: '+371 26420023',
  location: 'Latvia',
};

const GOOGLE_DRIVE = {
  folderId: '1RXqF2h_xCMTQ9VZIpFFnPwutKIWnIthq',
  folderUrl:
    'https://drive.google.com/drive/folders/1RXqF2h_xCMTQ9VZIpFFnPwutKIWnIthq?usp=sharing',
};

const DOCUMENTS = {
  cv: {
    title: 'Curriculum Vitae',
    fileUrl: '/docs/CV_Elina_Lapsina_01_04_2026.pdf',
  },
  motivation: {
    title: 'Motivation Letter — StudySmarter',
    fileUrl: '/docs/Motivation_letter_Elina_Lapsina_01_04_2026.pdf',
  },
};

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'sample-library', label: 'Sample Library' },
  { id: 'additional-projects', label: 'Additional Projects' },
  { id: 'visual-design', label: 'Visual Design' },
  { id: 'documents', label: 'Documents' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const EXPERTISE = [
  'Digital Experience Design',
  'Workflow & Systems Design',
  'Website & Information Structure',
  'Internal Tools & Operational Logic',
  'Cross-Functional Project Leadership',
  'Visual Communication',
  'AI-Supported Workflows',
];

const FEATURED_CASES = [
  {
    id: 'tl4',
    title: 'TL4 Student & University Search Prototype',
    tag: 'Product / EdTech / Prototype',
    type: 'Prototype',
    summary:
      'A structured discovery concept focused on search logic, navigation clarity, and a more legible student journey across university options.',
    context:
      'A discovery-oriented education concept needed a clearer way to help users browse, compare, and understand university options without friction or content overload.',
    problem:
      'The main challenge was making a broad set of education options easier to scan, filter, and understand through a cleaner information model and stronger user flow.',
    objective:
      'Create a more structured and intuitive search experience that improves clarity, navigation, and decision support for prospective students.',
    role: [
      'Concept development',
      'Information architecture',
      'Search and filter logic framing',
      'UX structure and visual hierarchy',
    ],
    users: 'Prospective students and users exploring university opportunities.',
    designed: [
      'Information structure',
      'Search logic and filter structure',
      'Navigation pathways and hierarchy',
      'A clearer discovery journey',
    ],
    process: [
      'Reduced complexity into clearer navigation blocks',
      'Prioritized findability and comparison logic',
      'Structured visual hierarchy to support scanning',
      'Focused on a clean, product-style discovery experience',
    ],
    outcome:
      'The prototype was intended to support clearer discovery, more confident exploration, and a more structured path through education options.',
    relevance:
      'Shows digital product thinking, information structure, and search-focused UX.',
    sensitive: false,
  },
  {
    id: 'rsuRedesign',
    title: 'RSU Red Cross Medical College Website Redesign',
    tag: 'Web / Education / Digital Experience',
    type: 'Website redesign',
    summary:
      'An institutional website redesign centered on replacing an older experience with stronger content structure, better usability, and more consistent visual communication.',
    context:
      'The existing institutional website needed a more contemporary, navigable, and coherent digital experience that better supported users seeking information.',
    problem:
      'The previous experience lacked clarity in structure and made it harder to understand content, navigate sections, and maintain visual consistency.',
    objective:
      'Improve digital clarity through a stronger content model, cleaner hierarchy, and a more consistent and trustworthy website experience.',
    role: [
      'Information structure',
      'Design coordination',
      'Content organization',
      'Visual consistency support',
    ],
    users:
      'Prospective students, institutional stakeholders, and general website visitors.',
    designed: [
      'Content hierarchy',
      'Navigation pathways',
      'Institutional usability improvements',
      'A more consistent web presentation',
    ],
    process: [
      'Reviewed the existing experience and likely user needs',
      'Reorganized structure for easier information access',
      'Improved hierarchy, scanning, and section clarity',
      'Aligned the interface with a more credible institutional feel',
    ],
    outcome:
      'The redesign was intended to improve usability, readability, and overall confidence in the institutional web experience.',
    relevance:
      'Demonstrates website structure, institutional clarity, and digital experience improvement.',
    sensitive: false,
  },
  {
    id: 'rsuRegistration',
    title: 'RSU Online Registration',
    tag: 'UX Flow / Education / Service Design',
    type: 'Registration flow',
    summary:
      'A registration flow shaped around clarity, friction reduction, and more practical user guidance through a structured service journey.',
    context:
      'The registration process needed a more understandable and less fragmented flow so users could move through steps with greater confidence.',
    problem:
      'Users faced friction caused by unclear progression, fragmented structure, or insufficient guidance across the registration experience.',
    objective:
      'Design a more legible registration path with stronger step logic, lower friction, and better practical usability.',
    role: [
      'Flow structuring',
      'User journey clarification',
      'Interaction hierarchy',
      'Documentation and communication support',
    ],
    users: 'Applicants or users completing online registration tasks.',
    designed: [
      'Registration flow',
      'Step logic and progression cues',
      'Screen hierarchy',
      'A more usable service experience',
    ],
    process: [
      'Mapped the journey into clearer stages',
      'Reduced ambiguity in navigation and progression',
      'Strengthened hierarchy and action visibility',
      'Focused on practical completion and reduced confusion',
    ],
    outcome:
      'The structured flow was intended to reduce friction and support a more straightforward completion experience.',
    relevance:
      'Shows service-flow thinking, user clarity, and structural UX logic.',
    sensitive: false,
  },
  {
    id: 'asasEmployeeWorkflow',
    title: 'ASAS Employee Workflow Management System',
    tag: 'Internal System / Workflow Design / Operations',
    type: 'Internal system',
    summary:
      'An internal systems-focused project emphasizing workflow visibility, process structure, coordination, and clearer operational logic.',
    context:
      'Internal coordination required better visibility and a more structured way to understand tasks, process movement, and day-to-day workflow logic.',
    problem:
      'Without clearer system structure, operational processes become fragmented, harder to track, and more difficult to coordinate across roles.',
    objective:
      'Create a more understandable internal workflow environment that improves process visibility and supports coordinated execution.',
    role: [
      'Workflow structure and logic',
      'Operational design support',
      'System organization',
      'Communication structure',
    ],
    users:
      'Internal teams, coordinators, and staff working inside operational workflows.',
    designed: [
      'Workflow visibility',
      'Task and process organization',
      'Internal coordination logic',
      'A clearer operating structure',
    ],
    process: [
      'Translated operational needs into system structure',
      'Clarified stages, actions, and visibility rules',
      'Improved how work could be understood and followed',
      'Balanced practical use with clean internal logic',
    ],
    outcome:
      'The system was intended to support clearer internal coordination, stronger process visibility, and more structured operational work.',
    relevance:
      'Strong proof of systems thinking, internal process design, and operational clarity.',
    sensitive: true,
  },
  {
    id: 'sap1',
    title: 'Athlete Management System Adaptation (SAP1)',
    tag: 'System Adaptation / Sports Operations / Workflow',
    type: 'Adaptation',
    summary:
      'A practical system adaptation shaped around user needs, workflow adjustment, and more usable operational organization in a sports context.',
    context:
      'An existing system needed adjustment to better match real user needs, organizational structure, and practical day-to-day usage.',
    problem:
      'The challenge was not to present a full original build, but to adapt and refine an existing system so it became more useful and better aligned with operational reality.',
    objective:
      'Improve fit, usability, and workflow alignment through a careful system adaptation approach.',
    role: [
      'Adaptation to organizational needs',
      'Workflow adjustment',
      'System organization',
      'Implementation support',
    ],
    users:
      'Sports operations stakeholders and system users working in an applied performance environment.',
    designed: [
      'Adjusted workflow logic',
      'Organizational fit improvements',
      'Usability-oriented structural refinements',
      'A more practical operating setup',
    ],
    process: [
      'Observed where the existing structure created friction',
      'Adjusted workflows to reflect real usage needs',
      'Improved clarity in structure and organization',
      'Kept role framing accurate: adaptation, not overclaiming authorship',
    ],
    outcome:
      'The adaptation was intended to improve practical usability and support a system that better matched operational needs.',
    relevance:
      'Shows adaptation thinking, system adjustment, and operational value in a real organizational setting.',
    sensitive: true,
  },
  {
    id: 'equipmentStore',
    title: 'Equipment Store Management System',
    tag: 'Internal Tool / Inventory / Workflow',
    type: 'Internal tool',
    summary:
      'A secondary internal-tool case that demonstrates inventory visibility, process structure, and operational order through a clearer management interface.',
    context:
      'Equipment handling and visibility benefit from clearer structure, especially when operational coordination depends on status, tracking, and availability.',
    problem:
      'A less structured environment makes equipment and inventory processes harder to oversee, coordinate, and use efficiently.',
    objective:
      'Bring more clarity to inventory workflows through a cleaner management structure and a more understandable internal tool experience.',
    role: [
      'Internal tool structuring',
      'Inventory workflow support',
      'Operational logic',
      'UI and information organization',
    ],
    users:
      'Internal users handling inventory, equipment visibility, or operational support tasks.',
    designed: [
      'Inventory structure',
      'Status visibility',
      'Process overview',
      'A more readable management environment',
    ],
    process: [
      'Reduced operational ambiguity into clearer views',
      'Organized information for easier tracking',
      'Focused on practical day-to-day usage',
      'Positioned the project as part of systems-thinking range',
    ],
    outcome:
      'The system was intended to support more visible, understandable, and manageable inventory operations.',
    relevance:
      'Adds proof of inventory logic, internal tools, and structured operational support.',
    sensitive: true,
  },
];

const ADDITIONAL_PROJECTS = [
  { title: 'Cars Showroom Operations Management System', type: 'Operations / Internal System' },
  { title: 'ASAS Corporate Website', type: 'Website / Corporate' },
  { title: 'ASAS Excellence Consultancy Website', type: 'Website / Consulting' },
  { title: 'Document Template System for Operational Use', type: 'Documentation / Templates' },
  { title: 'Sharjah Women’s Sports Club / Olympic Center', type: 'Sports Operations / Digital Support' },
  { title: 'WHOOP Performance Monitoring Pilot', type: 'Performance Support / Pilot' },
  { title: 'Mental Health & Sport Psychology Support System', type: 'Support System / Sports' },
  { title: 'Virtual 3D College Visit', type: 'Digital Experience / Education' },
  { title: 'Digital Learning Video Series', type: 'Learning Resource / Content System' },
];

const VISUAL_CATEGORIES = [
  'Print & Graphic Production',
  'Institutional Communication',
  'Social Media & Campaign Assets',
  'Presentation & Document Design',
  'Templates & Visual Systems',
  'Brand-Aligned Materials',
];

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function driveFolderEmbedUrl(folderId, mode = 'grid') {
  return `https://drive.google.com/embeddedfolderview?id=${folderId}#${mode}`;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-5 text-base leading-7 text-neutral-600 md:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}

function PreviewCard({ title, subtitle, onClick, sensitive }) {
  return (
    <button
      onClick={onClick}
      className="group overflow-hidden rounded-[24px] border border-neutral-200 bg-white text-left transition hover:-translate-y-1 hover:shadow-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_35%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-neutral-500">
            {sensitive ? 'Redacted sample' : 'Work sample'}
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
          {subtitle}
        </p>
        <h3 className="mt-3 text-xl font-medium text-neutral-950">{title}</h3>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-600">
          Open case study <ChevronRight size={16} />
        </div>
      </div>
    </button>
  );
}

function DriveFolderEmbed({ folderId, folderUrl, title, mode = 'grid' }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white">
      <div className="flex flex-col gap-4 border-b border-neutral-200 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <FolderOpen className="h-5 w-5 text-neutral-500" />
          <div>
            <p className="text-sm font-medium text-neutral-900">{title}</p>
            <p className="text-xs text-neutral-500">Embedded Google Drive folder view</p>
          </div>
        </div>
        <a
          href={folderUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-800 transition hover:bg-neutral-50"
        >
          Open in Google Drive <ExternalLink size={14} />
        </a>
      </div>

      <div className="h-[560px] bg-neutral-50">
        <iframe
          src={driveFolderEmbedUrl(folderId, mode)}
          title={title}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}

function DocumentCard({ title, fileUrl }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white">
      <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-neutral-500" />
          <div>
            <p className="text-sm font-medium text-neutral-900">{title}</p>
            <p className="text-xs text-neutral-500">Embedded preview + direct open</p>
          </div>
        </div>

        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-800 transition hover:bg-neutral-50"
        >
          Open <ExternalLink size={14} />
        </a>
      </div>

      <div className="h-[420px] bg-neutral-50">
        <iframe src={fileUrl} title={title} className="h-full w-full" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState(FEATURED_CASES[0].id);

  const selectedCase = useMemo(
    () => FEATURED_CASES.find((item) => item.id === selectedCaseId) || FEATURED_CASES[0],
    [selectedCaseId]
  );

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-15% 0px -30% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const previewCards = FEATURED_CASES.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToId('home')} className="text-left">
            <div className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
              Elīna Lapsiņa
            </div>
            <div className="mt-1 text-sm font-medium text-neutral-950">
              Digital Experience & Systems Design
            </div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm transition',
                  activeSection === item.id
                    ? 'bg-black text-white'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="inline-flex rounded-full border border-neutral-200 px-3 py-2 text-sm text-neutral-700 lg:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t border-neutral-200 px-4 py-4 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollToId(item.id);
                    }}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-left text-sm transition',
                      activeSection === item.id
                        ? 'bg-black text-white'
                        : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <section id="home" className="scroll-mt-24 pb-20 pt-8 md:pb-28 md:pt-14">
          <div className="grid items-end gap-10 lg:grid-cols-[1.12fr_0.88fr]">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <Pill>Premium portfolio structure</Pill>
                <Pill>Case-study-first</Pill>
                <Pill>Light design preserved</Pill>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl"
              >
                Digital Experience <span className="text-neutral-400">&</span> Systems Design
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl"
              >
                Structured digital experiences, workflows, and systems for education, sport, and international operations.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 max-w-2xl text-base leading-7 text-neutral-500"
              >
                I create digital experiences, internal tools, workflow systems, and structured support environments that help organizations work more clearly, consistently, and effectively.
              </motion.p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToId('case-studies')}
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                  View Case Studies <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollToId('documents')}
                  className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                >
                  View Documents
                </button>
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.26em] text-neutral-400">
                    Portfolio direction
                  </div>
                  <div className="mt-2 text-lg font-medium text-neutral-950">
                    Featured proof, not a gallery dump
                  </div>
                </div>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] text-neutral-700">
                  Structured
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="aspect-[4/4.2] overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
                  <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_35%)]">
                    <div className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                      Curated portfolio architecture
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-neutral-200 bg-white p-5">
                    <p className="text-sm font-medium text-neutral-900">Core positioning</p>
                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      A multidisciplinary practice across digital experience, workflow design, system structuring, websites, internal tools, operational logic, and visual communication.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-neutral-200 bg-white p-5">
                    <p className="text-sm font-medium text-neutral-900">Source library</p>
                    <p className="mt-3 text-sm leading-6 text-neutral-500">
                      Work samples are connected through your public Google Drive folder and surfaced below as an embedded sample library.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {previewCards.map((item) => (
              <PreviewCard
                key={item.id}
                title={item.title}
                subtitle={item.tag}
                sensitive={item.sensitive}
                onClick={() => {
                  setSelectedCaseId(item.id);
                  scrollToId('case-studies');
                }}
              />
            ))}
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <SectionHeading
            eyebrow="Expertise"
            title="A multidisciplinary profile built around clarity, systems, and practical value"
            text="The portfolio should communicate not just what was made, but how problems were structured, how decisions were shaped, and how the work improved clarity and coordination."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {EXPERTISE.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>

          <div className="mt-8 rounded-[30px] border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <p className="max-w-4xl text-base leading-8 text-neutral-600">
              I combine a background in computer design, digital communication, systems building, project leadership, and international operational experience. My work focuses on creating clear, structured, and useful digital and organizational solutions.
            </p>
          </div>
        </section>

        <section id="case-studies" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            eyebrow="Case Studies"
            title="The core proof section leads with digital experience, systems thinking, and workflow logic"
            text="This section presents the strongest projects as structured, well-explained case studies rather than a flat image gallery."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="space-y-3">
              {FEATURED_CASES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedCaseId(item.id)}
                  className={cn(
                    'w-full rounded-[24px] border p-4 text-left transition duration-200',
                    selectedCaseId === item.id
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 bg-white hover:bg-neutral-50'
                  )}
                >
                  <p
                    className={cn(
                      'text-[11px] uppercase tracking-[0.24em]',
                      selectedCaseId === item.id ? 'text-white/60' : 'text-neutral-400'
                    )}
                  >
                    {item.tag}
                  </p>
                  <h3 className="mt-2 text-base font-medium">{item.title}</h3>
                  <p
                    className={cn(
                      'mt-2 text-sm leading-6',
                      selectedCaseId === item.id ? 'text-white/75' : 'text-neutral-500'
                    )}
                  >
                    {item.relevance}
                  </p>
                </button>
              ))}
            </aside>

            <motion.article
              key={selectedCase.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white"
            >
              <div className="h-1.5 w-full bg-black" />

              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                      {selectedCase.tag}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
                      {selectedCase.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">
                      {selectedCase.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Pill>{selectedCase.type}</Pill>
                    {selectedCase.sensitive && <Pill>Redacted samples</Pill>}
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">Context</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{selectedCase.context}</p>
                  </div>
                  <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">Problem</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{selectedCase.problem}</p>
                  </div>
                  <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5 md:col-span-2">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">Objective</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{selectedCase.objective}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-6">
                    <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">My Role</p>
                      <ul className="mt-4 space-y-2 text-sm leading-7 text-neutral-600">
                        {selectedCase.role.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                        Users / Audience
                      </p>
                      <p className="mt-3 text-sm leading-7 text-neutral-600">{selectedCase.users}</p>
                    </div>

                    <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                        What Was Designed, Improved, Structured, or Adapted
                      </p>
                      <ul className="mt-4 grid gap-3 text-sm leading-7 text-neutral-600 sm:grid-cols-2">
                        {selectedCase.designed.map((item) => (
                          <li
                            key={item}
                            className="rounded-2xl border border-neutral-200 bg-white px-4 py-3"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-50">
                      <div className="flex h-[300px] items-center justify-center p-6">
                        <div className="max-w-sm text-center">
                          {selectedCase.sensitive ? (
                            <>
                              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white">
                                <Lock className="h-6 w-6 text-neutral-500" />
                              </div>
                              <p className="text-base font-medium text-neutral-900">
                                Redacted visual placeholder
                              </p>
                              <p className="mt-2 text-sm leading-6 text-neutral-500">
                                Sensitive materials for this case study should be anonymized before insertion.
                              </p>
                            </>
                          ) : (
                            <>
                              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white">
                                <FolderOpen className="h-6 w-6 text-neutral-500" />
                              </div>
                              <p className="text-base font-medium text-neutral-900">
                                Attach curated sample here
                              </p>
                              <p className="mt-2 text-sm leading-6 text-neutral-500">
                                Use the Google Drive sample library below to choose and place the best visual proof.
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                        Process / Approach
                      </p>
                      <div className="mt-4 space-y-3">
                        {selectedCase.process.map((item, index) => (
                          <div
                            key={item}
                            className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-4"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                              0{index + 1}
                            </div>
                            <p className="text-sm leading-7 text-neutral-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                      Outcome or Operational Value
                    </p>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{selectedCase.outcome}</p>
                  </div>
                  <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                      Relevance
                    </p>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{selectedCase.relevance}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => scrollToId('sample-library')}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                  >
                    Browse source samples <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section id="sample-library" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            eyebrow="Sample Library"
            title="Your public Google Drive folder is embedded as the live source library"
            text="This keeps the current light design while connecting your real sample source directly into the portfolio."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <DriveFolderEmbed
              folderId={GOOGLE_DRIVE.folderId}
              folderUrl={GOOGLE_DRIVE.folderUrl}
              title="Work Samples — Grid View"
              mode="grid"
            />

            <div className="space-y-6">
              <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                  How to use this section
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-600">
                  <p>Use this embedded folder as the live reference point for portfolio samples.</p>
                  <p>Once you decide which visuals belong to TL4, RSU, ASAS, SAP1, and other projects, they can be inserted as curated case-study images.</p>
                  <p>Sensitive screens should be blurred or masked before being used publicly.</p>
                </div>
              </div>

              <DriveFolderEmbed
                folderId={GOOGLE_DRIVE.folderId}
                folderUrl={GOOGLE_DRIVE.folderUrl}
                title="Work Samples — List View"
                mode="list"
              />
            </div>
          </div>
        </section>

        <section id="additional-projects" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            eyebrow="Additional Digital Projects"
            title="A curated secondary layer shows range without competing with the strongest case studies"
            text="This section remains lighter and supports the main narrative without flattening the portfolio into an archive."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ADDITIONAL_PROJECTS.map((project) => (
              <div
                key={project.title}
                className="rounded-[26px] border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[22px] border border-neutral-200 bg-neutral-50">
                  <div className="flex h-full items-center justify-center">
                    <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                      Curated project sample
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                  {project.type}
                </p>
                <h3 className="mt-3 text-lg font-medium text-neutral-950">{project.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="visual-design" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            eyebrow="Visual Design & Communication"
            title="Visual range is presented clearly, but kept separate from the main systems-led proof"
            text="This section proves breadth in graphic and communication work while protecting the primary positioning of the portfolio."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {VISUAL_CATEGORIES.map((category) => (
              <div
                key={category}
                className="rounded-[28px] border border-neutral-200 bg-white p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-medium text-neutral-950">{category}</h3>
                  <span className="text-xs text-neutral-400">Gallery category</span>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="aspect-square overflow-hidden rounded-[22px] border border-neutral-200 bg-neutral-50"
                    >
                      <div className="flex h-full items-center justify-center">
                        <span className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                          Sample slot
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="documents" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            eyebrow="Documents"
            title="CV and motivation letter are embedded as supporting materials"
            text="Both documents are connected directly in the portfolio and open inside the site."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <DocumentCard title={DOCUMENTS.cv.title} fileUrl={DOCUMENTS.cv.fileUrl} />
            <DocumentCard title={DOCUMENTS.motivation.title} fileUrl={DOCUMENTS.motivation.fileUrl} />
          </div>
        </section>

        <section id="about" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            eyebrow="About"
            title="A multidisciplinary profile with a clear strategic frame"
            text="The goal here is not to sound inflated. It should explain the range clearly, connect the disciplines intelligently, and show why that combination is valuable."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <p className="text-base leading-8 text-neutral-600">
                I am a multidisciplinary professional working across digital experience, systems design, workflow structuring, website development, operational logic, and visual communication. My background combines computer design, digital communication, project leadership, and international high-performance operations. I focus on creating structured and useful solutions that improve clarity, coordination, and performance.
              </p>
            </div>

            <div className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                Supporting strengths
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  'Computer design foundation',
                  'Digital experience thinking',
                  'Systems design',
                  'Workflow structuring',
                  'Project leadership',
                  'International experience',
                  'AI-supported work methods',
                ].map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 pb-8">
          <div className="overflow-hidden rounded-[34px] border border-neutral-200 bg-neutral-50 p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-400">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
                  I’m open to relevant opportunities, collaborations, and professional conversations.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
                  This section is intentionally simple and professional, with your real contact details already included.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="rounded-[22px] border border-neutral-200 bg-white px-5 py-4 transition hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                    <Mail size={14} /> Email
                  </div>
                  <div className="mt-2 text-sm text-neutral-950">{CONTACT.email}</div>
                </a>

                <a
                  href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                  className="rounded-[22px] border border-neutral-200 bg-white px-5 py-4 transition hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                    <Phone size={14} /> Phone
                  </div>
                  <div className="mt-2 text-sm text-neutral-950">{CONTACT.phone}</div>
                </a>

                <div className="rounded-[22px] border border-neutral-200 bg-white px-5 py-4">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                    <MapPin size={14} /> Location
                  </div>
                  <div className="mt-2 text-sm text-neutral-950">{CONTACT.location}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-neutral-200 py-8 text-sm text-neutral-500">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 Elīna Lapsiņa. Portfolio built as a one-file React artifact.</p>
            <div className="flex items-center gap-5">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-neutral-950">
                Email
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="hover:text-neutral-950">
                Phone
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}