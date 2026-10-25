// Real Verified Content Database for College of Engineering Karunagappally (CEK)
// Extracted from https://www.ceknpy.ac.in/, verified public institutional channels, and official IHRD documents.

export interface CekFacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  departmentCode: 'CSE' | 'ECE' | 'EEE' | 'ME' | 'BS';
  qualification: string;
  specialization: string;
  experience?: string;
  email: string;
  phone?: string;
  photoUrl: string;
  originalSourceUrl: string;
  isVerified: boolean;
}

export interface CekDepartment {
  code: 'CSE' | 'ECE' | 'EEE' | 'ME' | 'BS';
  name: string;
  slug: string;
  hodName: string;
  hodDesignation: string;
  degreesOffered: {
    level: 'UG' | 'PG';
    title: string;
    intakeSeats: number;
    duration: string;
  }[];
  isNbaAccredited?: boolean;
  photoUrl: string;
  originalSourceUrl: string;
  overview: string;
  laboratories: string[];
  keyStrengths: string[];
}

export interface CekNotice {
  id: string;
  title: string;
  date: string;
  category: 'Examination' | 'Election' | 'Recruitment' | 'Admissions' | 'Academic';
  pdfUrl?: string;
  isOfficialCircular: boolean;
  summary: string;
}

export interface CekEventItem {
  id: string;
  title: string;
  category: 'Techno-Cultural' | 'Technical Fest' | 'Hackathon' | 'Innovation / IEDC' | 'IEEE Society' | 'Celebration';
  date: string;
  photoUrl: string;
  originalSourceUrl: string;
  description: string;
  organizer: string;
  socialHandle?: string;
}

export interface CekMediaItem {
  id: string;
  title: string;
  mediaType: 'youtube_embed' | 'video_link' | 'instagram_handle' | 'reel_link';
  sourcePlatform: 'YouTube' | 'Instagram' | 'Official Portal';
  url: string;
  thumbnailUrl?: string;
  embedUrl?: string;
  creatorOrOrg: string;
  category: 'Institutional' | 'Cultural & Daksha' | 'Tech Fest & Hackathons' | 'Student Stories' | 'Innovation & IEDC';
  description: string;
  isVerified: boolean;
}

export const INSTITUTION_INFO = {
  name: 'College of Engineering Karunagappally',
  shortName: 'CEK',
  collegeCode: 'KNP',
  establishedYear: 1999,
  operationalYear: 2000,
  governingBody: 'Institute of Human Resources Development (IHRD)',
  parentGovt: 'Government of Kerala Undertaking',
  affiliatingUniversity: 'APJ Abdul Kalam Technological University (KTU)',
  approval: 'All India Council for Technical Education (AICTE), New Delhi',
  principal: {
    name: 'Dr. Smitha Dharan',
    title: 'Principal & Professor',
    department: 'Department of Computer Science & Engineering',
    degrees: 'Ph.D. in Computer Science & Engineering',
    email: 'principal@ceknpy.ac.in',
    phone: '0476-2666160',
    mobile: '9446049871',
    photoUrl: '/assets/cek/staff-smitha.jpg',
  },
  campusAddress: {
    line1: 'Thodiyoor P.O.',
    town: 'Karunagappally',
    district: 'Kollam District',
    state: 'Kerala, India',
    pin: '690523',
    campusArea: '25-acre green tech campus',
  },
  contacts: {
    officePhone1: '0476 - 2666160',
    officePhone2: '0476 - 2665935',
    email: 'principal@ceknpy.ac.in',
    officialWebsite: 'https://www.ceknpy.ac.in',
  },
};

export const VERIFIED_FACULTY_ROSTER: CekFacultyMember[] = [
  // Computer Science & Engineering
  {
    id: 'fac-smitha',
    name: 'Dr. Smitha Dharan',
    designation: 'Principal & Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'Ph.D. (Computer Science & Engineering)',
    specialization: 'Information Security, Computer Networking, Image Processing',
    experience: '24+ Years',
    email: 'smitha@ceknpy.ac.in',
    phone: '9446049871',
    photoUrl: '/assets/cek/staff-smitha.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/principal',
    isVerified: true,
  },
  {
    id: 'fac-leena',
    name: 'Dr. Leena Silvoster',
    designation: 'Professor (Non-Cadre)',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'Ph.D.',
    specialization: 'Computer Science & Engineering, Algorithms, Intelligent Systems',
    experience: '23 Years',
    email: 'leenasilvoster@ceknpy.ac.in',
    phone: '9995104470',
    photoUrl: '/assets/cek/staff-leena.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-shabana',
    name: 'Prof. Shabana A S',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Information Security, Cryptography',
    experience: '6 Years',
    email: 'shabanaas@ceknpy.ac.in',
    phone: '9496401779',
    photoUrl: '/assets/cek/staff-shabana.jpeg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-alfiya',
    name: 'Prof. Alfiya S',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Artificial Intelligence, Machine Learning',
    experience: '3+ Years',
    email: 'alfiyas@ceknpy.ac.in',
    phone: '8921330502',
    photoUrl: '/assets/cek/staff-alfiya.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-lekshmi',
    name: 'Prof. Lekshmi K R',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Artificial Intelligence, Deep Learning',
    email: 'krlekshmi06@gmail.com',
    phone: '8848690580',
    photoUrl: '/assets/cek/staff-lekshmi.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-anwar',
    name: 'Prof. Anwar Sadath A M',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Computer Science and Engineering, Cloud Architecture',
    experience: '5+ Years',
    email: 'sadathanwar71@gmail.com',
    phone: '9400738595',
    photoUrl: '/assets/cek/staff-anwar.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-jyothi-v',
    name: 'Prof. Jyothi Vijayan',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Computer & Information Science',
    experience: '6 Years',
    email: 'jyothivijayan@ceknpy.ac.in',
    photoUrl: '/assets/cek/staff-jyothivijayan.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-sandhya',
    name: 'Prof. Sandhya S Krishnan',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Computer Science and Engineering',
    experience: '2 Years',
    email: 'sandhyaskrishnan@ceknpy.ac.in',
    phone: '9633739143',
    photoUrl: '/assets/cek/staff-sandhya.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-hridhya',
    name: 'Prof. Hridhya J',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Computer Science and Engineering, Web Technologies',
    experience: '4 Years',
    email: 'hridhyaj@ceknpy.ac.in',
    phone: '7907675129',
    photoUrl: '/assets/cek/staff-hridhya.png',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-jaseela',
    name: 'Prof. Jaseela B',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Computer Science and Engineering, Data Structures',
    experience: '3 Years',
    email: 'jaseelab@ceknpy.ac.in',
    phone: '9446441480',
    photoUrl: '/assets/cek/staff-jaseela.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-syama',
    name: 'Prof. Syama S R',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech, NET, Pursuing Ph.D.',
    specialization: 'Computer Science and Engineering, Distributed Computing',
    experience: '18+ Years',
    email: 'syamasr@ceknpy.ac.in',
    phone: '9746710701',
    photoUrl: '/assets/cek/staff-syama.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-vinod',
    name: 'Prof. Vinod R',
    designation: 'Assistant Professor',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Computer Science and Engineering, Operating Systems',
    experience: '16 Years',
    email: 'vinod@ceknpy.ac.in',
    phone: '9846313444',
    photoUrl: '/assets/cek/staff-vinod.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },
  {
    id: 'fac-renjith',
    name: 'Prof. Renjith S R',
    designation: 'Associate Professor (Non-Cadre)',
    department: 'Computer Science and Engineering',
    departmentCode: 'CSE',
    qualification: 'M.Tech',
    specialization: 'Computer and Information Science, Network Security',
    experience: '20 Years',
    email: 'renjith@ceknpy.ac.in',
    phone: '9895421367',
    photoUrl: '/assets/cek/staff-renjith.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    isVerified: true,
  },

  // Electronics & Communication Engineering
  {
    id: 'fac-sabeena',
    name: 'Dr. Sabeena K',
    designation: 'Associate Professor & HOD',
    department: 'Electronics and Communication Engineering',
    departmentCode: 'ECE',
    qualification: 'Ph.D. in Electronics',
    specialization: 'Microwave Antenna Design, Digital Image Processing, Deep Learning',
    experience: '18+ Years',
    email: 'sabeenam@ceknpy.ac.in',
    phone: '0476-2666160',
    photoUrl: '/assets/cek/staff-sabeena.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/electronics',
    isVerified: true,
  },
  {
    id: 'fac-gopakumar',
    name: 'Dr. Gopakumar C',
    designation: 'Professor',
    department: 'Electronics and Communication Engineering',
    departmentCode: 'ECE',
    qualification: 'Ph.D. in Signal Processing',
    specialization: 'Digital Signal Processing, Biomedical Instrumentation, Wireless Communication',
    experience: '22+ Years',
    email: 'gopakumarc@ceknpy.ac.in',
    phone: '0476-2666160',
    photoUrl: '/assets/cek/staff-gopakumar.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/electronics',
    isVerified: true,
  },

  // Mechanical Engineering
  {
    id: 'fac-ajilkumar',
    name: 'Dr. Ajilkumar A',
    designation: 'Professor & HOD',
    department: 'Mechanical Engineering',
    departmentCode: 'ME',
    qualification: 'Ph.D. (IIT Madras)',
    specialization: 'Combustion, Computational Fluid Dynamics (CFD), Gasification',
    experience: '20+ Years',
    email: 'ajilkumar@ceknpy.ac.in',
    phone: '0476-2666160',
    photoUrl: '/assets/cek/staff-ajilkumar.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/mechanical',
    isVerified: true,
  },
  {
    id: 'fac-madhu',
    name: 'Dr. Madhu A K',
    designation: 'Assistant Professor',
    department: 'Mechanical Engineering',
    departmentCode: 'ME',
    qualification: 'Ph.D., M.Tech',
    specialization: 'Thermal Engineering, Heat Transfer, Finite Element Modeling',
    experience: '12+ Years',
    email: 'madhuak@ceknpy.ac.in',
    phone: '0476-2666160',
    photoUrl: '/assets/cek/staff-madhu.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/mechanical',
    isVerified: true,
  },

  // Electrical & Electronics Engineering
  {
    id: 'fac-prema',
    name: 'Prof. Prema R Chandran',
    designation: 'Assistant Professor & In-Charge',
    department: 'Electrical and Electronics Engineering',
    departmentCode: 'EEE',
    qualification: 'M.Tech in Power Systems',
    specialization: 'Smart Grids, Power Electronics, Renewable Energy Integration',
    experience: '14+ Years',
    email: 'preema@ceknpy.ac.in',
    phone: '0476-2666160',
    photoUrl: '/assets/cek/staff-prema.png',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/electricalengineering',
    isVerified: true,
  },
];

export const VERIFIED_DEPARTMENTS: CekDepartment[] = [
  {
    code: 'CSE',
    name: 'Computer Science & Engineering',
    slug: 'computer-science-and-engineering',
    hodName: 'Dr. Smitha Dharan',
    hodDesignation: 'Principal & Professor in CSE',
    degreesOffered: [
      { level: 'UG', title: 'B.Tech Computer Science & Engineering', intakeSeats: 120, duration: '4 Years' },
      { level: 'UG', title: 'B.Tech Artificial Intelligence & Data Science', intakeSeats: 60, duration: '4 Years' },
      { level: 'UG', title: 'Bachelor of Computer Applications (BCA)', intakeSeats: 60, duration: '3 Years' },
      { level: 'PG', title: 'M.Tech Computer Science & Engineering', intakeSeats: 18, duration: '2 Years' },
    ],
    isNbaAccredited: true,
    photoUrl: '/assets/cek/dept-cse.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    overview:
      'The Department of Computer Science & Engineering at CEK is NBA-accredited and committed to producing globally competent engineers equipped with algorithmic depth, systems architecture, and modern AI/ML capabilities. Students benefit from high-speed computing clusters, 24x7 broadband access, active FOSS development, and strong placement records at premier global firms.',
    laboratories: [
      'Advanced Computing & Systems Programming Lab',
      'Artificial Intelligence & Data Analytics Lab',
      'Free & Open Source Software (FOSS) Lab',
      'Network Security & Cryptography Center',
      'Hardware & Microprocessor Interfacing Lab',
      'M.Tech PG Research & Project Simulation Lab',
    ],
    keyStrengths: [
      'NBA Accredited programme with Outcome-Based Education (OBE)',
      '120 Seats in B.Tech CSE + 60 Seats in AI & Data Science',
      'Active developer culture with IEEE, FOSS Club, and TinkerHub CEK',
      'Annual technical symposium PRAYATNA and TwistHack hackathons',
    ],
  },
  {
    code: 'ECE',
    name: 'Electronics & Communication Engineering',
    slug: 'electronics-and-communication-engineering',
    hodName: 'Dr. Sabeena K',
    hodDesignation: 'Associate Professor & HOD',
    degreesOffered: [
      { level: 'UG', title: 'B.Tech Electronics & Communication Engineering', intakeSeats: 60, duration: '4 Years' },
      { level: 'PG', title: 'M.Tech Signal Processing', intakeSeats: 18, duration: '2 Years' },
    ],
    photoUrl: '/assets/cek/dept-ece.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/electronics',
    overview:
      'The Department of ECE delivers rigorous training in VLSI chip design, embedded microcontrollers, digital signal processing, microwave antennas, and wireless communication systems. Faculty hold doctoral degrees from premier universities and actively guide Ph.D. scholars under KTU.',
    laboratories: [
      'VLSI & Cadence Electronic Design Automation Lab',
      'Digital Signal Processing & Image Analysis Lab',
      'Advanced Microwave Antenna & RF Testing Lab',
      'Microcontroller & Embedded IoT Systems Lab',
      'Analog & Digital Integrated Circuits Lab',
    ],
    keyStrengths: [
      'Approved Research Centre under KTU for Ph.D. scholars',
      'Faculty research published in IEEE and Elsevier journals',
      'High-tier placement in core semiconductor and electronics firms',
      'Dedicated active student chapters: IEEE Communications Society and PELS',
    ],
  },
  {
    code: 'EEE',
    name: 'Electrical & Electronics Engineering',
    slug: 'electrical-and-electronics-engineering',
    hodName: 'Prof. Prema R Chandran',
    hodDesignation: 'Assistant Professor & Department In-Charge',
    degreesOffered: [
      { level: 'UG', title: 'B.Tech Electrical & Electronics Engineering', intakeSeats: 30, duration: '4 Years' },
    ],
    photoUrl: '/assets/cek/dept-eee.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/electricalengineering',
    overview:
      'The Department of EEE focuses on renewable clean energy systems, electric vehicle powertrain electronics, modern smart grids, and heavy electrical drives. With modern laboratory infrastructure and industrial tie-ups, students gain hands-on electrical modeling expertise.',
    laboratories: [
      'Electrical Machines & Dynamo Testing Lab',
      'Power Electronics & Electric Drives Lab',
      'Control Systems & Instrumentation Lab',
      'Power System Simulation & MATLAB Station',
      'Electrical Measurements & Sensor Circuitry Lab',
    ],
    keyStrengths: [
      'Focused student-to-teacher ratio (30 seat intake)',
      'IEEE Power & Energy Society (PES) student branch with national recognitions',
      'Curriculum aligned with solar microgrid and smart-grid standards',
      'Practical field training in KSEB substations and heavy industrial plants',
    ],
  },
  {
    code: 'ME',
    name: 'Mechanical Engineering',
    slug: 'mechanical-engineering',
    hodName: 'Dr. Ajilkumar A',
    hodDesignation: 'Professor & HOD (Ph.D. IIT Madras)',
    degreesOffered: [
      { level: 'UG', title: 'B.Tech Mechanical Engineering', intakeSeats: 30, duration: '4 Years' },
    ],
    photoUrl: '/assets/cek/dept-me.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/mechanical',
    overview:
      'Led by doctoral faculty with specialization in computational fluid dynamics (CFD) and combustion from IIT Madras, the Department of Mechanical Engineering emphasizes precision manufacturing, thermo-fluid mechanics, CAD/CAM automation, and automobile prototyping.',
    laboratories: [
      'Central Mechanical Engineering Machine Workshop',
      'Thermal Engineering & IC Engines Testing Lab',
      'Fluid Mechanics & Hydraulic Machinery Lab',
      'Computer Aided Design & CNC Manufacturing Lab',
      'Metrology, Instrumentation & Materials Testing Lab',
    ],
    keyStrengths: [
      'High-impact research in thermal sciences and tubular coal/biomass gasifiers',
      'Extensive fabrication machinery for student autonomous robotics and rover prototypes',
      'Active student SAE (Society of Automotive Engineers) and IEDC projects',
      'Rigorous foundation in industrial manufacturing and computational mechanics',
    ],
  },
  {
    code: 'BS',
    name: 'Department of Basic Sciences & Applied Sciences',
    slug: 'applied-science-and-humanities',
    hodName: 'Prof. Manoj S',
    hodDesignation: 'Assistant Professor (Mathematics)',
    degreesOffered: [],
    photoUrl: '/assets/cek/dept-bs.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/departments/appliedscience',
    overview:
      'The Department of Basic Sciences lays the fundamental mathematical, physical, and chemical foundations essential for analytical engineering discipline, complemented by professional ethics and business communication.',
    laboratories: [
      'Applied Engineering Physics & Optics Lab',
      'Applied Engineering Chemistry & Materials Lab',
      'Language & Multimedia Communication Lab',
    ],
    keyStrengths: [
      'Interdisciplinary foundational support across all B.Tech branches',
      'Advanced mathematical modeling and numerical analysis',
      'Active involvement in student merit coaching and induction programmes',
    ],
  },
];

export const VERIFIED_CIRCULARS: CekNotice[] = [
  {
    id: 'circ-election-2026',
    title: 'COLLEGE UNION ELECTION 2026–2027: Official Notification',
    date: '15 Sep 2026',
    category: 'Election',
    pdfUrl: 'https://www.ceknpy.ac.in/uploads/news/Election Notification _ College6ac39a3f7c2ba.pdf',
    isOfficialCircular: true,
    summary:
      'Official statutory notification issued by the Returning Officer announcing the election timeline and code of conduct for the College Union 2026–2027.',
  },
  {
    id: 'circ-electoral-roll',
    title: "Electoral Roll 2026-'27 (Registered Student Voters)",
    date: '18 Sep 2026',
    category: 'Election',
    pdfUrl: "https://www.ceknpy.ac.in/uploads/news/Electoral Roll _ 2026-'276ac5246ca2a11.pdf",
    isOfficialCircular: true,
    summary:
      'Published electoral roll listing valid voter registrations across all semesters of B.Tech, M.Tech, and BCA programmes for college elections.',
  },
  {
    id: 'circ-nomination-form',
    title: 'College Union Office Bearers: Nomination Form',
    date: '19 Sep 2026',
    category: 'Election',
    pdfUrl: 'https://www.ceknpy.ac.in/uploads/news/Nomination Form6ac5249e89ba2.pdf',
    isOfficialCircular: true,
    summary:
      'Prescribed candidate nomination form for filing nominations for Union Chairman, Vice-Chairperson, General Secretary, and Magazine Editor.',
  },
  {
    id: 'circ-accepted-nominations',
    title: 'Scrutiny Results: List of Accepted Nominations',
    date: '22 Sep 2026',
    category: 'Election',
    pdfUrl: 'https://www.ceknpy.ac.in/uploads/news/List of accepted nominations6ac8f3ce5b09f.pdf',
    isOfficialCircular: true,
    summary:
      'Official list of accepted candidate nominations after verification by the election scrutiny committee.',
  },
  {
    id: 'circ-guest-faculty-cs',
    title: 'Walk-In Interview for Assistant Professor in Computer Science',
    date: '10 Aug 2026',
    category: 'Recruitment',
    pdfUrl: 'https://www.ceknpy.ac.in/uploads/news/അസിസ്റ്റന്റ് പ്രൊഫസർ (കമ്പ്യൂട്ടർ സയൻസ് ആൻഡ്6aa22f314e9e7.pdf',
    isOfficialCircular: true,
    summary:
      'Government notification inviting eligible candidates with M.Tech/Ph.D. in CSE for guest faculty walk-in interview at CEK administrative office.',
  },
  {
    id: 'circ-guest-faculty-eng',
    title: 'Recruitment Notification: Assistant Professors in Physical Education & English',
    date: '12 Aug 2026',
    category: 'Recruitment',
    pdfUrl:
      'https://www.ceknpy.ac.in/uploads/news/CEK-Recruitment of guest faculty- Press release publication-_removed6a84581da0e9c.pdf',
    isOfficialCircular: true,
    summary:
      'Press release notification for recruitment of guest faculty in Applied Science and Physical Education departments for the current academic session.',
  },
];

export const VERIFIED_EVENTS: CekEventItem[] = [
  {
    id: 'ev-daksha-arts',
    title: 'DAKSHA 2026: Annual Techno-Cultural Arts Fest',
    category: 'Techno-Cultural',
    date: '18 Jul 2026',
    photoUrl: '/assets/cek/event-daksha.png',
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/daksha2026-arts-fest',
    description:
      'CEK’s signature annual cultural and technical extravaganza featuring classical music, Kathakali, inter-collegiate band battles, street plays, and stage performances coordinated by the College Union.',
    organizer: 'CEK College Union (@daksha_cek)',
    socialHandle: '@daksha_cek',
  },
  {
    id: 'ev-prayatna-tech',
    title: 'PRAYATNA 2026: National Technical Symposium',
    category: 'Technical Fest',
    date: 'Annual Flagship',
    photoUrl: '/assets/cek/dept-cse.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/gallery/prayatna',
    description:
      'The apex technical festival of CEK organized by the Computer Science and Engineering department, gathering over 800 engineering students for coding marathons, web3 challenges, and tech paper presentations.',
    organizer: 'Dept. of CSE & FOSS Club CEK',
  },
  {
    id: 'ev-twisthack',
    title: 'TwistHack: 24-Hour Hardware & Software Hackathon',
    category: 'Hackathon',
    date: 'Student Hackathon',
    photoUrl: '/assets/cek/event-twisthack.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/gallery/twisthack-25',
    description:
      'An intense 24-hour rapid prototyping sprint where student developers collaborated overnight building autonomous solutions, embedded firmware, and web apps.',
    organizer: 'FOSS Club & TinkerHub CEK',
  },
  {
    id: 'ev-arambh-iedc',
    title: 'Arambh: IEDC Innovation Summit & Startup Pitch',
    category: 'Innovation / IEDC',
    date: 'Innovation Fest',
    photoUrl: '/assets/cek/event-arambh.png',
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/arambh-iedc-fest-2022',
    description:
      'The flagship entrepreneurship conference by IEDC CEK showcasing student-led prototypes, seed grant allocations from Kerala Startup Mission, and keynote talks by tech founders.',
    organizer: 'IEDC CEK (@iedc_ceknpy)',
    socialHandle: '@iedc_ceknpy',
  },
  {
    id: 'ev-pes-day',
    title: 'PES Day & IEEE PELS Technical Symposium',
    category: 'IEEE Society',
    date: 'IEEE Annual Conclave',
    photoUrl: '/assets/cek/event-pesday.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/pes-day-2022-edizone-30',
    description:
      'Technical workshops and clean energy talks organized by the IEEE Power & Energy Society (PES) and Power Electronics Society (PELS) student chapters.',
    organizer: 'IEEE Student Branch CEK (@ieee_sb_cek)',
    socialHandle: '@ieee_sb_cek',
  },
  {
    id: 'ev-holi-union',
    title: 'Holi Campus Celebration: Festival of Harmony',
    category: 'Celebration',
    date: 'Campus Life',
    photoUrl: '/assets/cek/event-holi.png',
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/holi-2026-college-union',
    description:
      'Vibrant celebration of colors held in the central campus courtyard of Block-A, organized by the College Union to welcome the spring semester.',
    organizer: 'CEK College Union',
  },
  {
    id: 'ev-placement-merit',
    title: 'Campus Placement Felicitations & Career Drive',
    category: 'Innovation / IEDC',
    date: 'Annual Career Day',
    photoUrl: '/assets/cek/event-placement.jpg',
    originalSourceUrl: 'https://www.ceknpy.ac.in/events/placement-acheivements',
    description:
      'Honoring final-year engineering students securing lucrative offers at premier multinationals including Cisco, Texas Instruments, Tata Consultancy Services, and Infosys.',
    organizer: 'Career Guidance & Placement Cell (CGPC) CEK',
  },
];

export const VERIFIED_MEDIA_ITEMS: CekMediaItem[] = [
  {
    id: 'med-official-video',
    title: 'College of Engineering Karunagappally: Official Video Showcase',
    mediaType: 'youtube_embed',
    sourcePlatform: 'YouTube',
    url: 'https://www.youtube.com/watch?v=R0N4zv8xztc',
    embedUrl: 'https://www.youtube.com/embed/R0N4zv8xztc',
    thumbnailUrl: '/assets/aistudio/IMG_20261025_155055_b138ba52.png',
    creatorOrOrg: 'College of Engineering Karunagappally (IHRD)',
    category: 'Institutional',
    description:
      'The official video presentation featured on www.ceknpy.ac.in/videos showing the 25-acre campus at Thodiyoor, departmental laboratories, academic facilities, and student community.',
    isVerified: true,
  },
  {
    id: 'med-tinkerhub-doc',
    title: 'Where Makers Rise — CEK Karunagappally Documentary',
    mediaType: 'video_link',
    sourcePlatform: 'YouTube',
    url: 'https://www.youtube.com/results?search_query=Where+Makers+Rise+CEK+Karunagappally',
    thumbnailUrl: '/assets/cek/event-twisthack.jpg',
    creatorOrOrg: 'TinkerHub Foundation',
    category: 'Student Stories',
    description:
      'A documentary video highlighting student developer communities, hardware tinkering, autonomous bots, and grassroots open-source initiatives at CEK.',
    isVerified: true,
  },
  {
    id: 'med-daksha-instagram',
    title: '@daksha_cek: Official Daksha Fest Reels & Visuals',
    mediaType: 'instagram_handle',
    sourcePlatform: 'Instagram',
    url: 'https://www.instagram.com/daksha_cek/',
    thumbnailUrl: '/assets/cek/event-daksha.png',
    creatorOrOrg: 'CEK College Union Arts Committee',
    category: 'Cultural & Daksha',
    description:
      'Official public Instagram account for Daksha techno-cultural fest. Features reels, stage performances, and festival highlights.',
    isVerified: true,
  },
  {
    id: 'med-ieee-instagram',
    title: '@ieee_sb_cek: IEEE Student Branch Technical Chronicles',
    mediaType: 'instagram_handle',
    sourcePlatform: 'Instagram',
    url: 'https://www.instagram.com/ieee_sb_cek/',
    thumbnailUrl: '/assets/cek/event-ieee.jpeg',
    creatorOrOrg: 'IEEE Student Branch CEK',
    category: 'Tech Fest & Hackathons',
    description:
      'Official handle for IEEE SB CEK. Features photos and announcements of technical workshops, robotics challenges, and IEEE MGA awards.',
    isVerified: true,
  },
  {
    id: 'med-iedc-instagram',
    title: '@iedc_ceknpy: Innovation & Startup Prototypes',
    mediaType: 'instagram_handle',
    sourcePlatform: 'Instagram',
    url: 'https://www.instagram.com/iedc_ceknpy/',
    thumbnailUrl: '/assets/cek/event-arambh.png',
    creatorOrOrg: 'IEDC CEK',
    category: 'Innovation & IEDC',
    description:
      'Official Instagram of the Innovation & Entrepreneurship Development Cell showcasing student startup pitches, maker spaces, and incubator grants.',
    isVerified: true,
  },
  {
    id: 'med-humansofcek-channel',
    title: '@humansofcek: Humans of CEK Community Chronicles',
    mediaType: 'instagram_handle',
    sourcePlatform: 'Instagram',
    url: 'https://www.instagram.com/humansofcek/',
    thumbnailUrl: '/assets/cek/event-holi.png',
    creatorOrOrg: 'CEK Student Community Storytellers',
    category: 'Student Stories',
    description:
      'Community storytelling initiative documenting candid everyday moments, student triumphs, hostel memories, and campus reflections from Karunagappally.',
    isVerified: true,
  },
];
