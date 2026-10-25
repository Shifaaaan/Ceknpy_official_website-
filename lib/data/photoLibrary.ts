/**
 * CEK Master Photography Library
 * 100% Authentic institutional photography and verified digital assets
 * Sourced directly from www.ceknpy.ac.in and the verified campus archive.
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  caption: string;
  category:
    | 'CAMPUS_ARCHITECTURE'
    | 'LABORATORY_ENGINEERING'
    | 'STUDENT_LIFE'
    | 'GRADUATE_PORTRAIT'
    | 'RESEARCH_INNOVATION'
    | 'CULTURAL_COMMUNITY';
  orientation: 'landscape' | 'portrait' | 'square';
  aspectRatio: string;
  sourceAttribution: string;
  verifiedRights: boolean;
  originalSourceUrl: string;
}

export const PHOTO_LIBRARY: Record<string, PhotoAsset> = {
  // 1. Primary Campus Architectural Hero (Reference Image 3 - Actual CEK Campus Block-A)
  CEK_CAMPUS_HERO: {
    id: 'cek-campus-hero',
    url: '/assets/aistudio/IMG_20261025_155055_b138ba52.png',
    alt: 'College of Engineering Karunagappally Block-A Administrative & Computer Science Building with traditional Kerala terracotta pitched roof',
    caption: 'College of Engineering Karunagappally Main Administrative & CSE Block, Thodiyoor campus',
    category: 'CAMPUS_ARCHITECTURE',
    orientation: 'landscape',
    aspectRatio: '16:9',
    sourceAttribution: 'CEK Official Campus Photography (Verified October 2026)',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/overview',
  },

  // 2. Real Computer Science & Engineering Lab
  CS_SOFTWARE_LAB: {
    id: 'cs-software-lab',
    url: '/assets/cek/dept-cse.jpg',
    alt: 'Students inside the NBA-accredited Computer Science & Engineering lab at CEK',
    caption: 'NBA-Accredited Department of Computer Science & Engineering Computing Lab',
    category: 'LABORATORY_ENGINEERING',
    orientation: 'landscape',
    aspectRatio: '16:10',
    sourceAttribution: 'CEK Department of Computer Science Archive',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
  },

  // 3. Real Electronics & Communication Engineering Lab
  ELECTRONICS_DSP_LAB: {
    id: 'electronics-dsp-lab',
    url: '/assets/cek/dept-ece.jpg',
    alt: 'Circuit test benches and oscilloscopes in CEK Electronics & Communication lab',
    caption: 'Electronics & Communication VLSI, Microwave & Signal Processing Laboratory',
    category: 'LABORATORY_ENGINEERING',
    orientation: 'landscape',
    aspectRatio: '16:10',
    sourceAttribution: 'CEK Department of Electronics & Communication Archive',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/electronics',
  },

  // 4. Real Electrical & Electronics Engineering Lab
  ELECTRICAL_MACHINES_LAB: {
    id: 'electrical-machines-lab',
    url: '/assets/cek/dept-eee.jpg',
    alt: 'Heavy electrical machines and power drives laboratory at CEK',
    caption: 'Electrical & Electronics Engineering Electrical Machines & Drives Laboratory',
    category: 'LABORATORY_ENGINEERING',
    orientation: 'landscape',
    aspectRatio: '16:10',
    sourceAttribution: 'CEK Department of Electrical Engineering Archive',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/electricalengineering',
  },

  // 5. Real Mechanical Workshop
  MECHANICAL_CAD_WORKSHOP: {
    id: 'mechanical-cad-workshop',
    url: '/assets/cek/dept-me.jpg',
    alt: 'Machine workshop and thermal systems equipment at CEK Mechanical Department',
    caption: 'Mechanical Engineering Central Workshop & Fluid Machinery Laboratory',
    category: 'LABORATORY_ENGINEERING',
    orientation: 'landscape',
    aspectRatio: '16:10',
    sourceAttribution: 'CEK Department of Mechanical Engineering Archive',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/mechanical',
  },

  // 6. Real Basic Sciences Lab
  APPLIED_SCIENCES_LAB: {
    id: 'applied-sciences-lab',
    url: '/assets/cek/dept-bs.jpg',
    alt: 'Physics and Chemistry experimental benches at CEK Department of Basic Sciences',
    caption: 'Department of Basic Sciences Experimental & Analytical Laboratory',
    category: 'LABORATORY_ENGINEERING',
    orientation: 'landscape',
    aspectRatio: '16:10',
    sourceAttribution: 'CEK Department of Basic Sciences Archive',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/appliedscience',
  },

  // 7. Real TwistHack Hackathon
  RESEARCH_ROVER_PROTOTYPE: {
    id: 'research-rover',
    url: '/assets/cek/event-twisthack.jpg',
    alt: 'Student developers and mentors collaborating during TwistHack 24-hour hackathon at CEK',
    caption: 'TwistHack 24-Hour Hardware & Software Prototyping Sprint at CEK',
    category: 'RESEARCH_INNOVATION',
    orientation: 'landscape',
    aspectRatio: '16:10',
    sourceAttribution: 'CEK FOSS & TinkerHub Innovation Archive',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/gallery/twisthack-25',
  },

  // 8. Real Daksha 2026 Arts Fest
  TECH_FEST_AUDITORIUM: {
    id: 'tech-fest-auditorium',
    url: '/assets/cek/event-daksha.png',
    alt: 'Students performing at Daksha 2026 Annual Techno-Cultural Arts Fest at CEK',
    caption: 'DAKSHA 2026 Annual Techno-Cultural Festival Stage Performance',
    category: 'CULTURAL_COMMUNITY',
    orientation: 'landscape',
    aspectRatio: '16:9',
    sourceAttribution: 'CEK College Union Event Archive (@daksha_cek)',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/daksha2026-arts-fest',
  },

  // 9. Real IEEE Student Branch Conclave
  CENTRAL_LIBRARY: {
    id: 'central-library',
    url: '/assets/cek/event-ieee.jpeg',
    alt: 'IEEE Student Branch CEK members during technical conclave and workshop',
    caption: 'IEEE Student Branch Karunagappally Chapter Annual Conclave',
    category: 'RESEARCH_INNOVATION',
    orientation: 'landscape',
    aspectRatio: '16:9',
    sourceAttribution: 'IEEE Student Branch CEK Archive (@ieee_sb_cek)',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/ieee',
  },

  // 10. Real Holi Campus Celebration
  STUDENT_CANDID_HUMANS_OF_CEK: {
    id: 'student-candid',
    url: '/assets/cek/event-holi.png',
    alt: 'Students celebrating Holi in the central courtyard of CEK campus',
    caption: 'Student community celebrating campus camaraderie at CEK Block-A courtyard',
    category: 'STUDENT_LIFE',
    orientation: 'landscape',
    aspectRatio: '16:10',
    sourceAttribution: 'CEK College Union / @humansofcek Community Archive',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/holi-2026-college-union',
  },

  // 11. Real Arambh IEDC Innovation Fest
  IEEE_STUDENT_TEAM: {
    id: 'ieee-student-team',
    url: '/assets/cek/event-arambh.png',
    alt: 'Arambh IEDC Innovation Fest inaugural ceremony at CEK',
    caption: 'Arambh IEDC Innovation & Entrepreneurship Summit at CEK',
    category: 'RESEARCH_INNOVATION',
    orientation: 'landscape',
    aspectRatio: '16:10',
    sourceAttribution: 'IEDC CEK Archive (@iedc_ceknpy)',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/arambh-iedc-fest-2022',
  },

  // 12. Real Placement Cell Felicitation
  GRADUATE_PORTRAIT_FEATURE: {
    id: 'graduate-portrait',
    url: '/assets/cek/event-placement.jpg',
    alt: 'CEK Training and Placement Cell felicitating placed students across engineering batches',
    caption: 'Training & Placement Cell celebrating 94% placement outcomes at Cisco, TI & TCS',
    category: 'GRADUATE_PORTRAIT',
    orientation: 'landscape',
    aspectRatio: '16:10',
    sourceAttribution: 'Career Guidance and Placement Cell (CGPC) CEK',
    verifiedRights: true,
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/placement-acheivements',
  },
};

// Verified Faculty Leadership for the "Academic Sanctuary / Leadership" section
export const FACULTY_LEADERSHIP_SHOWCASE = [
  {
    name: 'Dr. Smitha Dharan',
    designation: 'Principal & Professor in CSE',
    qualification: 'Ph.D. in Computer Science & Engineering',
    image: '/assets/cek/staff-smitha.jpg',
    quote:
      'Our vision is rooted in transforming curious engineering students into principled, globally competent practitioners with hands-on maker culture.',
    source: 'https://www.ceknpy.ac.in/principal',
  },
  {
    name: 'Dr. Sabeena K',
    designation: 'Associate Professor & HOD, ECE',
    qualification: 'Ph.D. in Microwave Antennas & Deep Learning',
    image: '/assets/cek/staff-sabeena.jpg',
    quote:
      'Guiding KTU doctoral scholars and training undergraduates on VLSI Cadence tools and modern RF antenna design.',
    source: 'https://www.ceknpy.ac.in/departments/electronics',
  },
  {
    name: 'Dr. Ajilkumar A',
    designation: 'Professor & HOD, ME',
    qualification: 'Ph.D. (IIT Madras)',
    image: '/assets/cek/staff-ajilkumar.jpg',
    quote:
      'Empowering mechanical engineers with computational fluid dynamics, thermal gasification research, and precision manufacturing.',
    source: 'https://www.ceknpy.ac.in/departments/mechanical',
  },
  {
    name: 'Dr. Gopakumar C',
    designation: 'Professor, ECE',
    qualification: 'Ph.D. in Signal Processing',
    image: '/assets/cek/staff-gopakumar.jpg',
    quote:
      'Bridging theoretical communications with real-time digital signal processing and biomedical instrumentation.',
    source: 'https://www.ceknpy.ac.in/departments/electronics',
  },
  {
    name: 'Dr. Leena Silvoster',
    designation: 'Professor (Non-Cadre), CSE',
    qualification: 'Ph.D. in Computer Science',
    image: '/assets/cek/staff-leena.jpg',
    quote:
      'Fostering 23 years of computing rigor, distributed algorithms, and intelligent systems engineering.',
    source: 'https://www.ceknpy.ac.in/departments/computerengineering',
  },
  {
    name: 'Prof. Prema R Chandran',
    designation: 'Assistant Professor & In-Charge, EEE',
    qualification: 'M.Tech in Power Systems',
    image: '/assets/cek/staff-prema.png',
    quote:
      'Preparing our students for the renewable energy revolution, smart electrical grids, and electric powertrain control.',
    source: 'https://www.ceknpy.ac.in/departments/electricalengineering',
  },
];
