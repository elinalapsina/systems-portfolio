import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  FileText,
  ExternalLink,
  FolderOpen,
  Lock,
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

const DOCUMENTS = [
  {
    title: 'Curriculum Vitae',
    fileUrl: '/docs/CV_Elina_Lapsina_01_04_2026.pdf',
  },
  {
    title: 'Motivation Letter — StudySmarter',
    fileUrl: '/docs/Motivation_letter_Elina_Lapsina_01_04_2026.pdf',
  },
];

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'sample-library', label: 'Sample Library' },
  { id: 'additional-projects', label: 'Projects' },
  { id: 'visual-design', label: 'Visual Work' },
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
      'Digital product thinking, information structure, and search-focused UX.',
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
      'Website structure, institutional clarity, and digital experience improvement.',
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
      'Service-flow thinking, user clarity, and structural UX logic.',
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
      'Systems thinking, internal process design, and operational clarity.',
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
      'System adjustment and operational adaptation in a real context.',
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
      'Inventory logic, internal tools, and structured operational support.',
    sensitive: true,
  },
];

const ADDITIONAL_PROJECTS = [
  'Cars Showroom Operations Management System',
  'ASAS Corporate Website',
  'ASAS Excellence Consultancy Website',
  'Document Template System for Operational Use',
  'Sharjah Women’s Sports Club / Olympic Center',
  'WHOOP Performance Monitoring Pilot',
  'Mental Health & Sport Psychology Support System',
  'Virtual 3D College Visit',
  'Digital Learning Video Series',
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
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function driveFolderEmbedUrl(folderId, mode = 'grid') {
  return `https://drive.google.com/embeddedfolderview?id=${folderId}#${mode}`;
}

function SectionHeading({ title, text }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-7 text-neutral-600 md:text-lg">
          {text}
        </p>
      ) : null}
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

function InfoCard({ children }) {
  return (
    <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-5 text-sm leading-7 text-neutral-600">
      {children}
    </div>
  );
}

function CasePreview({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      data-cursor="interactive"
      className={cn(
        'w-full rounded-[24px] border p-4 text-left transition',
        active
          ? 'border-black bg-black text-white'
          : 'border-neutral-200 bg-white hover:bg-neutral-50'
      )}
    >
      <p
        className={cn(
          'text-[11px] uppercase tracking-[0.24em]',
          active ? 'text-white/60' : 'text-neutral-400'
        )}
      >
        {item.tag}
      </p>
      <h3 className="mt-2 text-base font-medium">{item.title}</h3>
      <p
        className={cn(
          'mt-2 text-sm leading-6',
          active ? 'text-white/75' : 'text-neutral-500'
        )}
      >
        {item.relevance}
      </p>
    </button>
  );
}

function DocumentCard({ title, fileUrl }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white">
      <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-neutral-500" />
          <p className="text-sm font-medium text-neutral-900">{title}</p>
        </div>

        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor="interactive"
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

function SampleLibraryCard() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white">
      <div className="flex flex-col gap-4 border-b border-neutral-200 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <FolderOpen className="h-5 w-5 text-neutral-500" />
          <p className="text-sm font-medium text-neutral-900">Work Samples Library</p>
        </div>

        <a
          href={GOOGLE_DRIVE.folderUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor="interactive"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-800 transition hover:bg-neutral-50"
        >
          Open <ExternalLink size={14} />
        </a>
      </div>

      <div className="h-[620px] bg-neutral-50">
        <iframe
          src={driveFolderEmbedUrl(GOOGLE_DRIVE.folderId, 'grid')}
          title="Work Samples Library"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(media.matches);
    update();

    if (media.addEventListener) {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      setVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        'a, button, iframe, [data-cursor="interactive"]'
      );
      setInteractive(Boolean(target));
    };

    const handleLeave = () => {
      setVisible(false);
      setInteractive(false);
    };

    const handleEnter = () => {
      setVisible(true);
    };

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%) scale(${interactive ? 2.2 : 1})`;
      }

      rafRef.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, interactive]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          html, body, a, button, iframe, [data-cursor="interactive"] {
            cursor: none !important;
          }
        }

        .custom-cursor-dot,
        .custom-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          will-change: transform, opacity;
        }

        .custom-cursor-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #111111;
          z-index: 9999;
          transition: opacity 0.25s ease, transform 0.08s ease;
        }

        .custom-cursor-ring {
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          border: 1px solid rgba(17, 17, 17, 0.28);
          background: rgba(17, 17, 17, 0);
          z-index: 9998;
          transition:
            opacity 0.25s ease,
            background 0.28s ease,
            border-color 0.28s ease;
        }

        .custom-cursor-ring-active {
          background: rgba(17, 17, 17, 0.04);
          border-color: rgba(17, 17, 17, 0.55);
        }

        .custom-cursor-visible {
          opacity: 1;
        }

        .custom-cursor-hidden {
          opacity: 0;
        }
      `}</style>

      <div
        ref={dotRef}
        className={cn(
          'custom-cursor-dot',
          visible ? 'custom-cursor-visible' : 'custom-cursor-hidden'
        )}
      />
      <div
        ref={ringRef}
        className={cn(
          'custom-cursor-ring',
          interactive ? 'custom-cursor-ring-active' : '',
          visible ? 'custom-cursor-visible' : 'custom-cursor-hidden'
        )}
      />
    </>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState(FEATURED_CASES[0].id);

  const selectedCase = useMemo(() => {
    return FEATURED_CASES.find((item) => item.id === selectedCaseId) || FEATURED_CASES[0];
  }, [selectedCaseId]);

  useEffect(() => {
    document.title = 'Elīna Lapsiņa | Digital Experience & Systems Design';
  }, []);

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

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white">
      <CustomCursor />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollToId('home')}
            data-cursor="interactive"
            className="text-left"
          >
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
                data-cursor="interactive"
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
            data-cursor="interactive"
            className="inline-flex rounded-full border border-neutral-200 px-3 py-2 text-sm text-neutral-700 lg:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-neutral-200 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToId(item.id);
                  }}
                  data-cursor="interactive"
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
          </div>
        ) : null}
      </nav>

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <section id="home" className="scroll-mt-24 pb-20 pt-10 md:pb-28 md:pt-20">
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl">
                Digital Experience <span className="text-neutral-400">&</span> Systems Design
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
                Structured digital experiences, workflows, and systems for education, sport, and international operations.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-500">
                I create digital experiences, internal tools, workflow systems, and structured support environments that help organizations work more clearly, consistently, and effectively.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToId('case-studies')}
                  data-cursor="interactive"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
                >
                  View Case Studies <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => scrollToId('documents')}
                  data-cursor="interactive"
                  className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
                >
                  View Documents
                </button>
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8">
              <p className="text-lg leading-8 text-neutral-600">
                Designing digital products, structured workflows, and operational systems with clarity, usability, and strong visual communication.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <SectionHeading
            title="A multidisciplinary profile built around clarity, systems, and practical value"
            text="The work brings together digital experience, structure, communication, and operational thinking."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            {EXPERTISE.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </section>

        <section id="case-studies" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="Selected projects"
            text="A focused view of digital, workflow, and systems-oriented work."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="space-y-3">
              {FEATURED_CASES.map((item) => (
                <CasePreview
                  key={item.id}
                  item={item}
                  active={selectedCaseId === item.id}
                  onClick={() => setSelectedCaseId(item.id)}
                />
              ))}
            </aside>

            <article className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white">
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
                    {selectedCase.sensitive ? <Pill>Redacted visuals</Pill> : null}
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <InfoCard>
                    <strong className="font-medium text-neutral-900">Context:</strong> {selectedCase.context}
                  </InfoCard>
                  <InfoCard>
                    <strong className="font-medium text-neutral-900">Problem:</strong> {selectedCase.problem}
                  </InfoCard>
                  <div className="md:col-span-2">
                    <InfoCard>
                      <strong className="font-medium text-neutral-900">Objective:</strong> {selectedCase.objective}
                    </InfoCard>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-6">
                    <InfoCard>
                      <strong className="font-medium text-neutral-900">My role</strong>
                      <ul className="mt-3 space-y-2">
                        {selectedCase.role.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </InfoCard>

                    <InfoCard>
                      <strong className="font-medium text-neutral-900">Users / audience:</strong> {selectedCase.users}
                    </InfoCard>

                    <InfoCard>
                      <strong className="font-medium text-neutral-900">
                        What was designed, improved, structured, or adapted
                      </strong>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {selectedCase.designed.map((item) => (
                          <li
                            key={item}
                            className="rounded-2xl border border-neutral-200 bg-white px-4 py-3"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </InfoCard>
                  </div>

                  <div className="space-y-6">
                    <div
                      className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-6"
                      data-cursor="interactive"
                    >
                      <div className="flex h-[280px] items-center justify-center text-center">
                        <div className="max-w-sm">
                          {selectedCase.sensitive ? (
                            <>
                              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white">
                                <Lock className="h-6 w-6 text-neutral-500" />
                              </div>
                              <p className="text-base font-medium text-neutral-900">
                                Sensitive visual material is not shown in the public version.
                              </p>
                            </>
                          ) : (
                            <>
                              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white">
                                <FolderOpen className="h-6 w-6 text-neutral-500" />
                              </div>
                              <p className="text-base font-medium text-neutral-900">
                                Final visuals can be selected from the sample library.
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <InfoCard>
                      <strong className="font-medium text-neutral-900">Process</strong>
                      <div className="mt-4 space-y-3">
                        {selectedCase.process.map((item, index) => (
                          <div
                            key={item}
                            className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-4"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                              0{index + 1}
                            </div>
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </InfoCard>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <InfoCard>
                    <strong className="font-medium text-neutral-900">Outcome:</strong> {selectedCase.outcome}
                  </InfoCard>
                  <InfoCard>
                    <strong className="font-medium text-neutral-900">Relevance:</strong> {selectedCase.relevance}
                  </InfoCard>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="sample-library" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="Work sample folder"
            text="Public source materials used to support the portfolio."
          />

          <div className="mt-10">
            <SampleLibraryCard />
          </div>
        </section>

        <section id="additional-projects" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="Additional project range"
            text="A broader view of related digital and operational work."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ADDITIONAL_PROJECTS.map((project) => (
              <div
                key={project}
                data-cursor="interactive"
                className="rounded-[24px] border border-neutral-200 bg-white p-5"
              >
                <p className="text-sm font-medium text-neutral-950">{project}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="visual-design" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="Visual communication"
            text="Supporting work across communication, presentation, and graphic output."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {VISUAL_CATEGORIES.map((category) => (
              <div
                key={category}
                data-cursor="interactive"
                className="rounded-[24px] border border-neutral-200 bg-white p-5"
              >
                <p className="text-sm font-medium text-neutral-950">{category}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="documents" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="CV and motivation letter"
            text="Supporting documents available directly inside the portfolio."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {DOCUMENTS.map((document) => (
              <DocumentCard
                key={document.title}
                title={document.title}
                fileUrl={document.fileUrl}
              />
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="A multidisciplinary profile"
            text="Digital experience, systems design, workflow structure, communication, and operational clarity."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <p className="text-base leading-8 text-neutral-600">
                I am a multidisciplinary professional working across digital experience, systems design, workflow structuring, website development, operational logic, and visual communication. My background combines computer design, digital communication, project leadership, and international high-performance operations. I focus on creating structured and useful solutions that improve clarity, coordination, and performance.
              </p>
            </div>

            <div className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <div className="flex flex-wrap gap-3">
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
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
                  I’m open to relevant opportunities, collaborations, and professional conversations.
                </h2>
              </div>

              <div className="grid gap-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  data-cursor="interactive"
                  className="rounded-[22px] border border-neutral-200 bg-white px-5 py-4 transition hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                    <Mail size={14} /> Email
                  </div>
                  <div className="mt-2 text-sm text-neutral-950">{CONTACT.email}</div>
                </a>

                <a
                  href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                  data-cursor="interactive"
                  className="rounded-[22px] border border-neutral-200 bg-white px-5 py-4 transition hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                    <Phone size={14} /> Phone
                  </div>
                  <div className="mt-2 text-sm text-neutral-950">{CONTACT.phone}</div>
                </a>

                <div
                  className="rounded-[22px] border border-neutral-200 bg-white px-5 py-4"
                  data-cursor="interactive"
                >
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
            <p>© 2026 Elīna Lapsiņa</p>
            <div className="flex items-center gap-5">
              <a
                href={`mailto:${CONTACT.email}`}
                data-cursor="interactive"
                className="hover:text-neutral-950"
              >
                Email
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                data-cursor="interactive"
                className="hover:text-neutral-950"
              >
                Phone
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}