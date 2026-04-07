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
  ChevronLeft,
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

const DOCUMENTS = [
  {
    title: 'Curriculum Vitae',
    description:
      'A concise overview of background, experience, and core areas of work.',
    fileUrl: '/docs/CV_Elina_Lapsina_01_04_2026.pdf',
  },
  {
    title: 'Motivation Letter — StudySmarter',
    description:
      'A tailored supporting document outlining fit, interest, and direction.',
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
  'Information architecture',
  'Website structure',
  'Workflow systems',
  'Internal tools',
  'Operational clarity',
  'Visual communication',
  'AI-supported workflows',
];

const HERO_PROOF = [
  'Education & EdTech',
  'Internal systems',
  'Workflow design',
  'Web structure',
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
    visuals: [
      {
        src: '/images/AI_student_searching_EXAMPLES_06_09_2025-01.jpg',
        alt: 'TL4 Student & University Search Prototype',
      },
    ],
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
    visuals: [
      {
        src: '/images/Labojumi_patreizejajai_www_03_02_2016.jpg',
        alt: 'Existing RSU website before redesign',
      },
      {
        src: '/images/Labojumi_JAUNAJAI_www_27_12_2016.jpg',
        alt: 'RSU redesigned homepage overview',
      },
      {
        src: '/images/Labojumi_JAUNAJAI_www_17_01_2017.jpg',
        alt: 'RSU redesign improvement view 1',
      },
      {
        src: '/images/Labojumi_JAUNAJAI_www_17_01_2017_2.jpg',
        alt: 'RSU redesign improvement view 2',
      },
      {
        src: '/images/Labojumi_JAUNAJAI_www_17_01_2017_4.jpg',
        alt: 'RSU redesign improvement view 3',
      },
      {
        src: '/images/Labojumi_JAUNAJAI_www_17_01_2017_5.jpg',
        alt: 'RSU redesign improvement view 4',
      },
    ],
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
    visuals: [],
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
    sensitive: false,
    visuals: [
      {
        src: '/images/IMG-20260331-WA0028.jpg',
        alt: 'ASAS Employee Workflow Management System mobile dashboard example',
      },
    ],
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
    visuals: [],
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
    visuals: [],
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
    <span className="inline-flex rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs text-neutral-700">
      {children}
    </span>
  );
}

function InfoCard({ children, className = '' }) {
  return (
    <div
      className={cn(
        'rounded-[24px] border border-neutral-200 bg-neutral-50 p-5 text-sm leading-7 text-neutral-600',
        className
      )}
    >
      {children}
    </div>
  );
}

function NavLink({ item, activeSection, onClick, mobile = false }) {
  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      aria-current={activeSection === item.id ? 'page' : undefined}
      className={cn(
        mobile
          ? 'rounded-2xl px-4 py-3 text-left text-sm transition'
          : 'rounded-full px-4 py-2 text-sm transition',
        activeSection === item.id
          ? 'bg-black text-white'
          : mobile
            ? 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
            : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950'
      )}
    >
      {item.label}
    </a>
  );
}

function CasePreview({ item, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'w-full rounded-[24px] border p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
        active
          ? 'border-black bg-black text-white'
          : 'border-neutral-200 bg-white hover:bg-neutral-50'
      )}
    >
      <h3 className="text-base font-medium">{item.title}</h3>
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

function DocumentCard({ title, description, fileUrl }) {
  return (
    <div className="rounded-[28px] border border-neutral-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
          <FileText className="h-5 w-5 text-neutral-600" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium text-neutral-950">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>

          <div className="mt-4">
            <a
              href={fileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Open document <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SampleLibraryCard() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
              <FolderOpen className="h-5 w-5 text-neutral-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900">
                Work Samples Library
              </p>
              <p className="text-sm text-neutral-500">Public supporting materials</p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-600">
            This folder contains additional public samples that support the portfolio,
            including website references, interface screenshots, and communication or
            presentation materials.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Pill>Website examples</Pill>
            <Pill>System screenshots</Pill>
            <Pill>Visual communication</Pill>
            <Pill>Supporting references</Pill>
          </div>

          <div className="mt-8">
            <a
              href={GOOGLE_DRIVE.folderUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              Open public folder <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-200 bg-neutral-50 p-6 md:p-8 lg:border-l lg:border-t-0">
          <div className="rounded-[24px] border border-neutral-200 bg-white p-5">
            <p className="text-sm font-medium text-neutral-900">Why this section exists</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
              <li>• Adds extra context without overloading the main case studies</li>
              <li>• Keeps confidential work separated from public-facing examples</li>
              <li>• Gives recruiters a fast route to more supporting material</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseVisual({ selectedCase, onOpenLightbox }) {
  const visuals = selectedCase.visuals || [];

  if (visuals.length > 0) {
    return (
      <div className="space-y-4">
        <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white">
          <button
            type="button"
            onClick={(e) => onOpenLightbox(0, e.currentTarget)}
            className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
            aria-label={`Open gallery for ${selectedCase.title}`}
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-neutral-50 p-3">
              <img
                src={visuals[0].src}
                alt={visuals[0].alt || selectedCase.title}
                loading="eager"
                decoding="async"
                className="max-h-full max-w-full object-contain transition duration-300 motion-reduce:transition-none"
              />
            </div>
          </button>
        </div>

        {visuals.length > 1 ? (
          <div className="grid grid-cols-2 gap-4">
            {visuals.slice(1).map((visual, index) => (
              <button
                key={`${visual.src}-${index}`}
                type="button"
                onClick={(e) => onOpenLightbox(index + 1, e.currentTarget)}
                className="overflow-hidden rounded-[20px] border border-neutral-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label={`Open image ${index + 2} for ${selectedCase.title}`}
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-neutral-50 p-3">
                  <img
                    src={visual.src}
                    alt={visual.alt || selectedCase.title}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain transition duration-300 motion-reduce:transition-none"
                  />
                </div>
              </button>
            ))}
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            {visuals.length} visual{visuals.length > 1 ? 's' : ''}
          </p>
          <button
            type="button"
            onClick={(e) => onOpenLightbox(0, e.currentTarget)}
            className="inline-flex min-h-[44px] items-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
          >
            Open gallery
          </button>
        </div>
      </div>
    );
  }

  if (selectedCase.sensitive) {
    return (
      <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-6">
        <div className="flex h-[280px] items-center justify-center text-center">
          <div className="max-w-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white">
              <Lock className="h-6 w-6 text-neutral-500" />
            </div>
            <p className="text-base font-medium text-neutral-900">
              Sensitive visual material is not shown in the public version.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-6">
      <div className="flex h-[280px] items-center justify-center text-center">
        <div className="max-w-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white">
            <FolderOpen className="h-6 w-6 text-neutral-500" />
          </div>
          <p className="text-base font-medium text-neutral-900">
            Public visuals are not shown for this case.
          </p>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ visuals, initialIndex, onClose, triggerRef, title }) {
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useRef(null);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousActive = document.activeElement;

    const getFocusable = () => {
      if (!dialog) return [];
      return Array.from(
        dialog.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled'));
    };

    const focusables = getFocusable();
    if (focusables[0]) {
      focusables[0].focus();
    } else if (dialog) {
      dialog.focus();
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }

      if (e.key === 'ArrowRight' && visuals.length > 1) {
        e.preventDefault();
        setIndex((prev) => (prev + 1) % visuals.length);
      }

      if (e.key === 'ArrowLeft' && visuals.length > 1) {
        e.preventDefault();
        setIndex((prev) => (prev - 1 + visuals.length) % visuals.length);
      }

      if (e.key === 'Tab') {
        const items = getFocusable();
        if (!items.length) return;

        const first = items[0];
        const last = items[items.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';

      if (triggerRef?.current) {
        triggerRef.current.focus();
      } else if (previousActive instanceof HTMLElement) {
        previousActive.focus();
      }
    };
  }, [onClose, triggerRef, visuals.length]);

  if (!visuals.length) return null;

  const current = visuals[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 px-4 py-6 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        tabIndex={-1}
        className="relative flex h-full w-full items-center justify-center"
      >
        <h2 id="lightbox-title" className="sr-only">
          {title} image gallery
        </h2>

        <div className="absolute right-0 top-0 flex items-center gap-3">
          <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
            {index + 1} / {visuals.length}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <X size={18} />
          </button>
        </div>

        {visuals.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() =>
                setIndex((prev) => (prev - 1 + visuals.length) % visuals.length)
              }
              aria-label="Previous image"
              className="absolute left-0 top-1/2 z-[101] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => setIndex((prev) => (prev + 1) % visuals.length)}
              aria-label="Next image"
              className="absolute right-0 top-1/2 z-[101] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <ChevronRight size={20} />
            </button>
          </>
        ) : null}

        <div className="flex h-full w-full items-center justify-center px-12 py-16 md:px-20">
          <img
            src={current.src}
            alt={current.alt || 'Project visual'}
            className="max-h-full max-w-full rounded-[20px] bg-white object-contain shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

function GlobalStyles() {
  return (
    <style>{`
      html {
        scroll-behavior: smooth;
      }

      body {
        color: #171717;
        background: #ffffff;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      a, button, input, textarea, select, iframe {
        -webkit-tap-highlight-color: transparent;
      }

      :focus-visible {
        outline: 2px solid #111111;
        outline-offset: 3px;
      }

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `}</style>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState(FEATURED_CASES[0].id);
  const [lightboxState, setLightboxState] = useState({
    open: false,
    caseId: null,
    index: 0,
  });
  const lightboxTriggerRef = useRef(null);

  const selectedCase = useMemo(() => {
    return FEATURED_CASES.find((item) => item.id === selectedCaseId) || FEATURED_CASES[0];
  }, [selectedCaseId]);

  const lightboxCase = useMemo(() => {
    return FEATURED_CASES.find((item) => item.id === lightboxState.caseId);
  }, [lightboxState.caseId]);

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

  const openLightbox = (index, triggerEl) => {
    lightboxTriggerRef.current = triggerEl;
    setLightboxState({
      open: true,
      caseId: selectedCase.id,
      index,
    });
  };

  const closeLightbox = () => {
    setLightboxState({
      open: false,
      caseId: null,
      index: 0,
    });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white">
      <GlobalStyles />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-left">
            <div className="text-[11px] uppercase tracking-[0.32em] text-neutral-400">
              Elīna Lapsiņa
            </div>
            <div className="mt-1 text-sm font-medium text-neutral-950">
              Digital Experience & Systems Design
            </div>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                activeSection={activeSection}
              />
            ))}
          </div>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-neutral-200 px-3 py-2 text-sm text-neutral-700 lg:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div id="mobile-menu" className="border-t border-neutral-200 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  activeSection={activeSection}
                  mobile
                  onClick={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <main id="main-content" className="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        <section id="home" className="scroll-mt-24 pb-20 pt-10 md:pb-28 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-400">
                Digital Experience & Systems Design
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl">
                I design clearer websites, internal tools, and workflow systems for
                complex organizations.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700 md:text-xl">
                Structured digital experiences for education, operations, and
                cross-functional work.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-500">
                My work focuses on information clarity, better navigation, cleaner
                system logic, and more usable environments for real people doing real
                work.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#case-studies"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  View Case Studies <ArrowRight size={16} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <p className="text-sm font-medium text-neutral-900">Focus areas</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {HERO_PROOF.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-neutral-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                    Core value
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    Turning complexity into clearer structure, hierarchy, and use.
                  </p>
                </div>

                <div className="rounded-[22px] border border-neutral-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                    Typical work
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    Website redesign, workflow systems, service flows, and internal
                    tooling support.
                  </p>
                </div>
              </div>
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
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
                      {selectedCase.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Pill>{selectedCase.tag}</Pill>
                      <Pill>{selectedCase.type}</Pill>
                      <Pill>
                        {selectedCase.visuals.length > 0
                          ? `${selectedCase.visuals.length} public visual${
                              selectedCase.visuals.length > 1 ? 's' : ''
                            }`
                          : selectedCase.sensitive
                            ? 'Redacted visuals'
                            : 'No public visuals'}
                      </Pill>
                    </div>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
                      {selectedCase.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <InfoCard>
                    <strong className="font-medium text-neutral-900">Context:</strong>{' '}
                    {selectedCase.context}
                  </InfoCard>
                  <InfoCard>
                    <strong className="font-medium text-neutral-900">Problem:</strong>{' '}
                    {selectedCase.problem}
                  </InfoCard>
                  <div className="md:col-span-2">
                    <InfoCard>
                      <strong className="font-medium text-neutral-900">Objective:</strong>{' '}
                      {selectedCase.objective}
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
                      <strong className="font-medium text-neutral-900">
                        Users / audience:
                      </strong>{' '}
                      {selectedCase.users}
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
                    <CaseVisual
                      selectedCase={selectedCase}
                      onOpenLightbox={openLightbox}
                    />

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
                    <strong className="font-medium text-neutral-900">Outcome:</strong>{' '}
                    {selectedCase.outcome}
                  </InfoCard>
                  <InfoCard>
                    <strong className="font-medium text-neutral-900">Relevance:</strong>{' '}
                    {selectedCase.relevance}
                  </InfoCard>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="sample-library" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading title="Work sample folder" />

          <div className="mt-10">
            <SampleLibraryCard />
          </div>
        </section>

        <section id="additional-projects" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="Additional projects"
            text="A broader view of related digital and operational work."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ADDITIONAL_PROJECTS.map((project) => (
              <div
                key={project}
                className="rounded-[24px] border border-neutral-200 bg-white p-5"
              >
                <p className="text-sm font-medium text-neutral-950">{project}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="visual-design" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="Visual work"
            text="Supporting work across communication, presentation, and graphic output."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {VISUAL_CATEGORIES.map((category) => (
              <div
                key={category}
                className="rounded-[24px] border border-neutral-200 bg-white p-5"
              >
                <p className="text-sm font-medium text-neutral-950">{category}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="documents" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="Documents"
            text="Supporting documents available directly through the portfolio."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {DOCUMENTS.map((document) => (
              <DocumentCard
                key={document.title}
                title={document.title}
                description={document.description}
                fileUrl={document.fileUrl}
              />
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 pb-20 md:pb-28">
          <SectionHeading
            title="About"
            text="Digital experience, systems design, workflow structure, communication, and operational clarity."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-6 md:p-8">
              <p className="text-base leading-8 text-neutral-600">
                I am a multidisciplinary professional working across digital
                experience, systems design, workflow structuring, website
                development, operational logic, and visual communication. My
                background combines computer design, digital communication, project
                leadership, and international high-performance operations. I focus
                on creating structured and useful solutions that improve clarity,
                coordination, and performance.
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
                  I’m open to relevant opportunities, collaborations, and
                  professional conversations.
                </h2>
              </div>

              <div className="grid gap-4">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="rounded-[22px] border border-neutral-200 bg-white px-5 py-4 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                    <Mail size={14} /> Email
                  </div>
                  <div className="mt-2 text-sm text-neutral-950">{CONTACT.email}</div>
                </a>

                <a
                  href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                  className="rounded-[22px] border border-neutral-200 bg-white px-5 py-4 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
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
            <p>© 2026 Elīna Lapsiņa</p>
            <div className="flex items-center gap-5">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-neutral-950">
                Email
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                className="hover:text-neutral-950"
              >
                Phone
              </a>
            </div>
          </div>
        </footer>
      </main>

      {lightboxState.open && lightboxCase ? (
        <Lightbox
          visuals={lightboxCase.visuals || []}
          initialIndex={lightboxState.index}
          onClose={closeLightbox}
          triggerRef={lightboxTriggerRef}
          title={lightboxCase.title}
        />
      ) : null}
    </div>
  );
}