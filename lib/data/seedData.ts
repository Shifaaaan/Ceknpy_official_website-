import type { Role, UserSession } from '../domain/rbac';
import type { AttendanceSession, AttendanceRecord } from '../domain/attendance';
import type { TimetableEntry } from '../domain/timetable';
import type { EditorialItem } from '../domain/editorial';

export interface DepartmentInfo {
  code: string;
  name: string;
  shortName: string;
  hod: string;
  hodEmail: string;
  intake: number;
  established: number;
  isNbaAccredited?: boolean;
  description: string;
  laboratories: string[];
  keySpecializations: string[];
}

export interface StudentRecord {
  id: string; // KTU Register No. e.g. 'KNP23CS012'
  name: string;
  batchId: string; // e.g. 'CSE-S5'
  department: string;
  semester: number;
  email: string;
  phone: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'LEAVE';
  admissionYear: number;
  admissionCategory: 'KEAM_MERIT' | 'NRI_QUOTA' | 'LATERAL_ENTRY';
  mentorName: string;
}

export interface StaffRecord {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  highestDegree: string;
  specialization: string;
  assignedBatches: string[];
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actorName: string;
  actorRole: Role;
  action: string;
  entityType: string;
  entityId: string;
  details: string;
}

export const INITIAL_DEPARTMENTS: DepartmentInfo[] = [
  {
    code: 'CSE',
    name: 'Department of Computer Science & Engineering',
    shortName: 'Computer Science',
    hod: 'Prof. Deepa V',
    hodEmail: 'hod.cs@ceknpy.ac.in',
    intake: 60,
    established: 2000,
    isNbaAccredited: true,
    description:
      'Accredited by NBA. Offers cutting-edge computational training, software systems engineering, algorithms, and distributed systems with a strong record of product-company placements and active FOSS culture.',
    laboratories: [
      'Advanced Computing & Systems Lab',
      'Hardware & Microprocessors Lab',
      'Open Source & Network Security Lab',
      'Final Year Research & Innovation Center',
    ],
    keySpecializations: [
      'Distributed Systems & Cloud Architecture',
      'Full-Stack Software Engineering',
      'Algorithmic Problem Solving',
      'Data Analytics & Cryptography',
    ],
  },
  {
    code: 'ECE',
    name: 'Department of Electronics & Communication Engineering',
    shortName: 'Electronics & Comm.',
    hod: 'Dr. Ramesh Kumar P',
    hodEmail: 'hod.ec@ceknpy.ac.in',
    intake: 60,
    established: 1999,
    description:
      'Premier department focusing on modern communication architectures, embedded hardware, signal processing, and IoT. Consistently recognized for high student participation in national robotics challenges.',
    laboratories: [
      'Digital Signal Processing Lab',
      'VLSI & Embedded Systems Design Lab',
      'Analog & Digital Communication Lab',
      'Industrial IoT & Robotics Studio',
    ],
    keySpecializations: ['Embedded Systems & IoT', 'VLSI Design', 'Wireless Communication', 'Digital Signal Processing'],
  },
  {
    code: 'AI_DS',
    name: 'Department of Artificial Intelligence & Data Science',
    shortName: 'AI & Data Science',
    hod: 'Dr. Anitha Mohan',
    hodEmail: 'hod.aids@ceknpy.ac.in',
    intake: 60,
    established: 2021,
    description:
      'Interdisciplinary engineering curriculum fusing machine learning, natural language processing, computer vision, and big data engineering, backed by GPU-accelerated computing clusters.',
    laboratories: [
      'Deep Learning & GPU Computing Lab',
      'Big Data Analytics Lab',
      'Cognitive Computing & NLP Studio',
    ],
    keySpecializations: ['Machine Learning', 'Computer Vision', 'Generative AI Applications', 'Predictive Modeling'],
  },
  {
    code: 'ME',
    name: 'Department of Mechanical Engineering',
    shortName: 'Mechanical Engineering',
    hod: 'Prof. Anoop S',
    hodEmail: 'hod.me@ceknpy.ac.in',
    intake: 30,
    established: 2011,
    description:
      'Comprehensive mechanical engineering education integrating thermal sciences, fluid dynamics, design optimization, and modern manufacturing workshops.',
    laboratories: [
      'Thermal Engineering Lab',
      'Fluid Mechanics & Machinery Lab',
      'Computer Aided Design (CAD/CAM) Lab',
      'Machine Tools Workshop',
    ],
    keySpecializations: ['Thermal Engineering', 'CAD/CAM Modeling', 'Renewable Energy Systems', 'Robotic Automation'],
  },
  {
    code: 'EEE',
    name: 'Department of Electrical & Electronics Engineering',
    shortName: 'Electrical & Electronics',
    hod: 'Prof. Lekshmi P',
    hodEmail: 'hod.eee@ceknpy.ac.in',
    intake: 30,
    established: 2004,
    description:
      'Focusing on smart grid systems, power electronics, renewable energy integration, and industrial control architectures.',
    laboratories: [
      'Electrical Machines Lab',
      'Power Electronics & Drives Lab',
      'Control Systems & Measurements Lab',
      'Electrical Workshop',
    ],
    keySpecializations: ['Power Systems', 'Renewable Energy Systems', 'Power Electronics', 'Electric Vehicle Drives'],
  },
  {
    code: 'BSH',
    name: 'Department of Basic Sciences & Humanities',
    shortName: 'Basic Sciences',
    hod: 'Prof. Harikrishnan N',
    hodEmail: 'hod.bsh@ceknpy.ac.in',
    intake: 0,
    established: 1999,
    description:
      'Provides foundational rigor in Engineering Mathematics, Applied Physics, Engineering Chemistry, Environmental Science, and Professional Communication & Ethics.',
    laboratories: ['Applied Physics Lab', 'Engineering Chemistry Lab', 'Language & Professional Communication Lab'],
    keySpecializations: ['Applied Mathematical Modeling', 'Materials Physics', 'Environmental Engineering', 'Technical Communication'],
  },
];

export const INITIAL_STUDENTS: StudentRecord[] = [
  {
    id: 'KNP23CS001',
    name: 'Aadithya S',
    batchId: 'CSE-S5',
    department: 'CSE',
    semester: 5,
    email: 'aadithya.cs23@ceknpy.ac.in',
    phone: '+91 94471 20101',
    status: 'ACTIVE',
    admissionYear: 2023,
    admissionCategory: 'KEAM_MERIT',
    mentorName: 'Prof. Deepa V',
  },
  {
    id: 'KNP23CS014',
    name: 'Anjali Krishnan',
    batchId: 'CSE-S5',
    department: 'CSE',
    semester: 5,
    email: 'anjali.cs23@ceknpy.ac.in',
    phone: '+91 94471 20102',
    status: 'ACTIVE',
    admissionYear: 2023,
    admissionCategory: 'KEAM_MERIT',
    mentorName: 'Prof. Deepa V',
  },
  {
    id: 'KNP23CS028',
    name: 'Muhammed Nihal',
    batchId: 'CSE-S5',
    department: 'CSE',
    semester: 5,
    email: 'nihal.cs23@ceknpy.ac.in',
    phone: '+91 94471 20103',
    status: 'ACTIVE',
    admissionYear: 2023,
    admissionCategory: 'NRI_QUOTA',
    mentorName: 'Prof. Deepa V',
  },
  {
    id: 'KNP23CS042',
    name: 'Sneha Mary Thomas',
    batchId: 'CSE-S5',
    department: 'CSE',
    semester: 5,
    email: 'sneha.cs23@ceknpy.ac.in',
    phone: '+91 94471 20104',
    status: 'ACTIVE',
    admissionYear: 2023,
    admissionCategory: 'LATERAL_ENTRY',
    mentorName: 'Prof. Deepa V',
  },
  {
    id: 'KNP23EC005',
    name: 'Gokul Krishna',
    batchId: 'ECE-S5',
    department: 'ECE',
    semester: 5,
    email: 'gokul.ec23@ceknpy.ac.in',
    phone: '+91 94471 20105',
    status: 'ACTIVE',
    admissionYear: 2023,
    admissionCategory: 'KEAM_MERIT',
    mentorName: 'Dr. Ramesh Kumar P',
  },
  {
    id: 'KNP23ME012',
    name: 'Arjun Das',
    batchId: 'ME-S5',
    department: 'ME',
    semester: 5,
    email: 'arjun.me23@ceknpy.ac.in',
    phone: '+91 94471 20106',
    status: 'ACTIVE',
    admissionYear: 2023,
    admissionCategory: 'KEAM_MERIT',
    mentorName: 'Prof. Anoop S',
  },
];

export const INITIAL_STAFF: StaffRecord[] = [
  {
    id: 'FAC-ADM-01',
    name: 'Dr. Smitha Dharan',
    designation: 'Principal & Professor',
    department: 'CSE',
    email: 'principal@ceknpy.ac.in',
    phone: '+91 476 2580555',
    highestDegree: 'Ph.D. in Computer Science & Engineering',
    specialization: 'Information Security & Wireless Networks',
    assignedBatches: ['CSE-S7'],
  },
  {
    id: 'FAC-CS-01',
    name: 'Prof. Deepa V',
    designation: 'Associate Professor & HOD',
    department: 'CSE',
    email: 'deepa.cs@ceknpy.ac.in',
    phone: '+91 476 2580556',
    highestDegree: 'M.Tech, Ph.D. (Pursuing)',
    specialization: 'Formal Languages & Compiler Design',
    assignedBatches: ['CSE-S5', 'CSE-S7'],
  },
  {
    id: 'FAC-EC-01',
    name: 'Dr. Ramesh Kumar P',
    designation: 'Professor & HOD',
    department: 'ECE',
    email: 'ramesh.ec@ceknpy.ac.in',
    phone: '+91 476 2580557',
    highestDegree: 'Ph.D. in Signal Processing',
    specialization: 'Digital Signal Processing & Machine Learning for Audio',
    assignedBatches: ['ECE-S5'],
  },
  {
    id: 'FAC-ME-01',
    name: 'Prof. Anoop S',
    designation: 'Assistant Professor & HOD',
    department: 'ME',
    email: 'anoop.me@ceknpy.ac.in',
    phone: '+91 476 2580558',
    highestDegree: 'M.Tech in Thermal Engineering',
    specialization: 'Computational Fluid Dynamics & IC Engines',
    assignedBatches: ['ME-S5'],
  },
];

export const INITIAL_USERS: UserSession[] = [
  {
    id: 'usr-admin',
    name: 'Dr. Smitha Dharan',
    email: 'principal@ceknpy.ac.in',
    role: 'ADMIN',
    department: 'Administration',
    associatedId: 'FAC-ADM-01',
  },
  {
    id: 'usr-faculty-cs',
    name: 'Prof. Deepa V',
    email: 'deepa.cs@ceknpy.ac.in',
    role: 'FACULTY',
    department: 'CSE',
    associatedId: 'FAC-CS-01',
    assignedBatchIds: ['CSE-S5', 'CSE-S7'],
  },
  {
    id: 'usr-student-anjali',
    name: 'Anjali Krishnan',
    email: 'anjali.cs23@ceknpy.ac.in',
    role: 'STUDENT',
    department: 'CSE',
    associatedId: 'KNP23CS014',
  },
  {
    id: 'usr-editor',
    name: 'Campus Editorial & PR Desk',
    email: 'media@ceknpy.ac.in',
    role: 'EDITOR',
    department: 'Public Relations',
  },
];

export const INITIAL_TIMETABLE: TimetableEntry[] = [
  {
    id: 'tt-1',
    day: 'MONDAY',
    period: 1,
    courseCode: 'CST301',
    courseName: 'Formal Languages and Automata Theory',
    batchId: 'CSE-S5',
    facultyId: 'FAC-CS-01',
    facultyName: 'Prof. Deepa V',
    roomNumber: 'LH-101',
  },
  {
    id: 'tt-2',
    day: 'MONDAY',
    period: 2,
    courseCode: 'CST303',
    courseName: 'Computer Networks',
    batchId: 'CSE-S5',
    facultyId: 'FAC-CS-02',
    facultyName: 'Prof. Rahul S',
    roomNumber: 'LH-101',
  },
  {
    id: 'tt-3',
    day: 'MONDAY',
    period: 3,
    courseCode: 'CST305',
    courseName: 'System Software',
    batchId: 'CSE-S5',
    facultyId: 'FAC-CS-03',
    facultyName: 'Prof. Nisha M',
    roomNumber: 'LH-101',
  },
  {
    id: 'tt-4',
    day: 'TUESDAY',
    period: 1,
    courseCode: 'CST301',
    courseName: 'Formal Languages and Automata Theory',
    batchId: 'CSE-S5',
    facultyId: 'FAC-CS-01',
    facultyName: 'Prof. Deepa V',
    roomNumber: 'LH-101',
  },
  {
    id: 'tt-5',
    day: 'WEDNESDAY',
    period: 4,
    courseCode: 'ECT301',
    courseName: 'Digital Signal Processing',
    batchId: 'ECE-S5',
    facultyId: 'FAC-EC-01',
    facultyName: 'Dr. Ramesh Kumar P',
    roomNumber: 'LH-201',
  },
];

export const INITIAL_ATTENDANCE_SESSIONS: AttendanceSession[] = [
  {
    id: 'sess-01',
    courseId: 'CST301',
    courseName: 'Formal Languages & Automata',
    batchId: 'CSE-S5',
    facultyId: 'FAC-CS-01',
    date: '2026-10-20',
    period: 1,
    topicCovered: 'Deterministic Finite Automata (DFA) Minimization',
  },
  {
    id: 'sess-02',
    courseId: 'CST301',
    courseName: 'Formal Languages & Automata',
    batchId: 'CSE-S5',
    facultyId: 'FAC-CS-01',
    date: '2026-10-21',
    period: 2,
    topicCovered: 'Non-deterministic Finite Automata (NFA) to DFA conversion',
  },
  {
    id: 'sess-03',
    courseId: 'CST303',
    courseName: 'Computer Networks',
    batchId: 'CSE-S5',
    facultyId: 'FAC-CS-02',
    date: '2026-10-22',
    period: 3,
    topicCovered: 'Data Link Layer: Sliding Window Protocols & HDLC',
  },
];

export const INITIAL_ATTENDANCE_RECORDS: AttendanceRecord[] = [
  { id: 'rec-01', sessionId: 'sess-01', studentId: 'KNP23CS001', status: 'PRESENT' },
  { id: 'rec-02', sessionId: 'sess-01', studentId: 'KNP23CS014', status: 'PRESENT' },
  { id: 'rec-03', sessionId: 'sess-01', studentId: 'KNP23CS028', status: 'PRESENT' },
  { id: 'rec-04', sessionId: 'sess-01', studentId: 'KNP23CS042', status: 'ABSENT', remarks: 'Medical leave submitted' },

  { id: 'rec-05', sessionId: 'sess-02', studentId: 'KNP23CS001', status: 'PRESENT' },
  { id: 'rec-06', sessionId: 'sess-02', studentId: 'KNP23CS014', status: 'PRESENT' },
  { id: 'rec-07', sessionId: 'sess-02', studentId: 'KNP23CS028', status: 'ABSENT' },
  { id: 'rec-08', sessionId: 'sess-02', studentId: 'KNP23CS042', status: 'PRESENT' },

  { id: 'rec-09', sessionId: 'sess-03', studentId: 'KNP23CS001', status: 'PRESENT' },
  { id: 'rec-10', sessionId: 'sess-03', studentId: 'KNP23CS014', status: 'PRESENT' },
  { id: 'rec-11', sessionId: 'sess-03', studentId: 'KNP23CS028', status: 'PRESENT' },
  { id: 'rec-12', sessionId: 'sess-03', studentId: 'KNP23CS042', status: 'PRESENT' },
];

export const INITIAL_EDITORIAL_STORIES: EditorialItem[] = [
  {
    id: 'story-01',
    title: 'From Thodiyoor to Global Open Source: Anjali’s Journey in Distributed Systems',
    category: 'CAMPUS_LIFE_STORY',
    summary:
      'Curated from student interviews by @humansofcek: How third-year CSE student Anjali Krishnan contributed to Linux foundation projects from the CEK hardware lab.',
    body:
      'Starting with her first year in the college FOSS Cell, Anjali discovered a passion for operating system kernels. Working after hours in the Computer Science research center under the mentorship of Prof. Deepa, she successfully pushed upstream commits to open source telemetry infrastructure. "At CEK, you find quiet room to experiment and teachers who encourage you to build outside the textbook," she notes.',
    state: 'PUBLISHED',
    sourceType: 'HUMANS_OF_CEK',
    sourceUrl: 'https://www.instagram.com/humansofcek/',
    sourceAttribution: '@humansofcek Student Story Series (October 2026)',
    mediaRightsVerified: true,
    participantConsentObtained: true,
    authorId: 'usr-editor',
    authorName: 'Content Desk',
    approvedBy: 'Dr. Smitha Dharan (Principal)',
    publishedAt: '2026-10-24T09:00:00Z',
    createdAt: '2026-10-20T11:00:00Z',
    updatedAt: '2026-10-24T09:00:00Z',
    tags: ['Humans of CEK', 'Open Source', 'CSE', 'Student Excellence'],
  },
  {
    id: 'story-02',
    title: 'IEEE Student Branch Karunagappally Wins Regional Exemplary Student Branch Award',
    category: 'IEEE_HIGHLIGHT',
    summary:
      'CEK IEEE Student Branch recognized by IEEE MGA for exceptional technical workshop organization, rural STEM literacy outreach, and student leadership.',
    body:
      'Continuing CEK’s storied tradition in IEEE Kerala Section, the student branch organized over 24 technical events this academic year, including IoT bootcamps, Women in Engineering (WIE) leadership conclaves, and a 36-hour coastal hackathon that drew participants from across South India.',
    state: 'PUBLISHED',
    sourceType: 'IEEE_STUDENT_BRANCH',
    sourceUrl: 'https://www.ceknpy.ac.in/',
    sourceAttribution: 'CEK IEEE Student Branch Report & Section Endorsement',
    mediaRightsVerified: true,
    participantConsentObtained: true,
    authorId: 'usr-editor',
    authorName: 'IEEE Branch Counselor',
    approvedBy: 'Dr. Smitha Dharan (Principal)',
    publishedAt: '2026-10-18T14:30:00Z',
    createdAt: '2026-10-15T08:00:00Z',
    updatedAt: '2026-10-18T14:30:00Z',
    tags: ['IEEE', 'Award', 'Excellence', 'Engineering'],
  },
  {
    id: 'story-03',
    title: 'IEDC Cell Prototype: Autonomous Coconut Tree Health Diagnostic Rover',
    category: 'IEDC_STARTUP',
    summary:
      'Mechanical and AI&DS student coalition builds solar-powered agricultural diagnostic device funded by Kerala Startup Mission grant.',
    body:
      'Developed inside the CEK Innovation and Entrepreneurship Development Centre (IEDC), the multidisciplinary rover integrates multi-spectral imaging to detect early pest infestation in local agricultural groves around Kollam district. The team has filed a provisional utility patent.',
    state: 'PUBLISHED',
    sourceType: 'IEDC_CELL',
    sourceUrl: 'https://www.ceknpy.ac.in/',
    sourceAttribution: 'IEDC Innovation Cell Official Project Disclosure',
    mediaRightsVerified: true,
    participantConsentObtained: true,
    authorId: 'usr-faculty-cs',
    authorName: 'IEDC Nodal Officer',
    approvedBy: 'Content Desk',
    publishedAt: '2026-10-12T10:00:00Z',
    createdAt: '2026-10-10T09:00:00Z',
    updatedAt: '2026-10-12T10:00:00Z',
    tags: ['IEDC', 'Agritech', 'AI', 'Patents'],
  },
  {
    id: 'story-04',
    title: 'NSS Unit 543 Conducts Flood Resilience and Community Health Mapping in Karunagappally',
    category: 'NSS_OUTREACH',
    summary:
      'Over 100 student volunteers mapped waterlogged drainage channels and conducted free medical camps in Thodiyoor panchayat.',
    body:
      'National Service Scheme (NSS) Unit 543 volunteers partnered with local local-self-government bodies to create GIS maps of monsoon run-off zones, demonstrating civic responsibility and practical community engineering.',
    state: 'PUBLISHED',
    sourceType: 'NSS_UNIT_543',
    sourceUrl: 'https://www.ceknpy.ac.in/',
    sourceAttribution: 'NSS Unit 543 Programme Officer Records',
    mediaRightsVerified: true,
    participantConsentObtained: true,
    authorId: 'usr-editor',
    authorName: 'NSS Programme Officer',
    approvedBy: 'Dr. Smitha Dharan (Principal)',
    publishedAt: '2026-10-05T12:00:00Z',
    createdAt: '2026-10-03T10:00:00Z',
    updatedAt: '2026-10-05T12:00:00Z',
    tags: ['NSS', 'Community', 'Social Service'],
  },
  {
    id: 'story-05',
    title: 'Varnam 2026: Campus Arts & Cultural Festival Dates Announced',
    category: 'TECHNICAL_FEST',
    summary:
      'The College Union announces three days of inter-departmental music, classical dance, and theatrical competitions.',
    body:
      'Draft submission currently in editorial verification. Verification includes student council schedule validation and campus security arrangements.',
    state: 'IN_REVIEW',
    sourceType: 'DEPARTMENT_ASSOCIATION',
    sourceAttribution: 'CEK College Union Arts Committee Draft',
    mediaRightsVerified: true,
    participantConsentObtained: true,
    authorId: 'usr-faculty-cs',
    authorName: 'Staff Advisor (Arts)',
    createdAt: '2026-10-24T15:00:00Z',
    updatedAt: '2026-10-24T16:00:00Z',
    tags: ['Varnam', 'Arts Fest', 'Campus Culture'],
  },
];

export const INITIAL_OFFICIAL_CIRCULARS = [
  {
    id: 'CIRC-2026-104',
    refNo: 'CEK/ACAD/KTU/2026-44',
    title: 'APJ Abdul Kalam Technological University B.Tech S5 Regular Exam Registration',
    date: '2026-10-23',
    category: 'Examination',
    isUrgent: true,
    content:
      'Students of B.Tech Semester 5 (2023 Scheme) are directed to complete exam registration through the KTU portal on or before 31st October 2026. A minimum of 75% attendance is strictly mandatory for hall ticket generation.',
  },
  {
    id: 'CIRC-2026-103',
    refNo: 'CEK/ADM/NRI/2026-12',
    title: 'B.Tech Vacant Seats Spot Admission Notice for NRI & Lateral Entry Candidates',
    date: '2026-10-19',
    category: 'Admissions',
    isUrgent: false,
    content:
      'A spot admission session for remaining NRI quota seats in CSE, AI&DS, and ECE will be conducted at the CEK Administrative Block Seminar Hall on 28th October 2026 at 10:00 AM. Candidates must bring original 10+2 mark sheets, KEAM scorecard, and NRI sponsorship affidavit.',
  },
  {
    id: 'CIRC-2026-102',
    refNo: 'CEK/NBA/2026-05',
    title: 'NBA Peer Team Compliance Review & Accreditation Extension for Computer Science Department',
    date: '2026-10-14',
    category: 'Academic',
    isUrgent: false,
    content:
      'The National Board of Accreditation (NBA) has extended accreditation for the B.Tech Computer Science and Engineering programme for the next 3 academic cycles following successful compliance review.',
  },
];

export const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'aud-001',
    timestamp: '2026-10-20T09:05:00Z',
    actorName: 'Prof. Deepa V',
    actorRole: 'FACULTY',
    action: 'RECORD_ATTENDANCE',
    entityType: 'AttendanceSession',
    entityId: 'sess-01',
    details: 'Logged period 1 attendance for batch CSE-S5 in course CST301 (4 students marked, 1 absent).',
  },
  {
    id: 'aud-002',
    timestamp: '2026-10-22T10:15:00Z',
    actorName: 'Dr. Smitha Dharan',
    actorRole: 'ADMIN',
    action: 'PUBLISH_CIRCULAR',
    entityType: 'Circular',
    entityId: 'CIRC-2026-104',
    details: 'Published KTU Semester 5 Examination registration advisory notice.',
  },
  {
    id: 'aud-003',
    timestamp: '2026-10-24T09:02:00Z',
    actorName: 'Dr. Smitha Dharan',
    actorRole: 'ADMIN',
    action: 'APPROVE_PUBLICATION',
    entityType: 'EditorialStory',
    entityId: 'story-01',
    details: 'Approved @humansofcek curated story featuring Anjali Krishnan after media rights and student consent sign-off.',
  },
];
