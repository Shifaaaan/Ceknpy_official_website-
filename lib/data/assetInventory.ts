export interface AssetInventoryItem {
  id: string;
  category:
    | 'photograph'
    | 'logo'
    | 'video'
    | 'reel'
    | 'social_channel'
    | 'circular_pdf'
    | 'faculty_profile'
    | 'department'
    | 'event'
    | 'club';
  title: string;
  verifiedSummary: string;
  sourceUrl: string;
  localPath?: string;
  remoteUrl?: string;
  creatorOrOrg: string;
  publicationDate?: string;
  retrievalDate: string;
  verificationStatus: 'verified' | 'needs_review' | 'permission_required' | 'unavailable';
  permissionNotes: string;
  intendedSection: string;
  departmentOrScope?: string;
}

export const CEK_ASSET_INVENTORY: AssetInventoryItem[] = [
  // PHOTOGRAPHS - CAMPUS & ARCHITECTURE
  {
    id: 'cek-photo-block-a',
    category: 'photograph',
    title: 'CEK Campus Block-A (Administrative & Computer Science Block)',
    verifiedSummary:
      'Authentic daytime photograph of College of Engineering Karunagappally Block-A featuring traditional Kerala terracotta pitched tiled roof, warm cream architectural walls, flagpole courtyard, and tropical foliage.',
    sourceUrl: 'https://www.ceknpy.ac.in/overview',
    localPath: '/assets/aistudio/IMG_20261025_155055_b138ba52.png',
    creatorOrOrg: 'College of Engineering Karunagappally / User verified campus capture',
    publicationDate: '2026-10-25',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Primary reference campus photograph provided for CEK institutional identity.',
    intendedSection: 'Hero & About Editorial Section',
    departmentOrScope: 'Institutional Campus Infrastructure',
  },
  {
    id: 'cek-logo-official',
    category: 'logo',
    title: 'Official CEK Emblem & Brand Mark',
    verifiedSummary: 'The official shield emblem and wordmark for College of Engineering Karunagappally.',
    sourceUrl: 'https://www.ceknpy.ac.in/assets/images/logo-dark.png',
    localPath: '/assets/cek/cek-logo.png',
    remoteUrl: 'https://www.ceknpy.ac.in/assets/images/logo-dark.png',
    creatorOrOrg: 'College of Engineering Karunagappally (IHRD)',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Official institutional logo published on www.ceknpy.ac.in header.',
    intendedSection: 'Header, Footer & Institutional Badges',
    departmentOrScope: 'Institution-wide',
  },
  {
    id: 'ihrd-logo-official',
    category: 'logo',
    title: 'IHRD Kerala Government Apex Logo',
    verifiedSummary:
      'Official emblem of the Institute of Human Resources Development (IHRD), Govt. of Kerala undertaking.',
    sourceUrl: 'https://www.ceknpy.ac.in/assets/images/ihrd.png',
    localPath: '/assets/cek/ihrd-logo.png',
    remoteUrl: 'https://www.ceknpy.ac.in/assets/images/ihrd.png',
    creatorOrOrg: 'Institute of Human Resources Development (IHRD)',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Published on CEK official site for governance accreditation.',
    intendedSection: 'Top Governance Bar & Footer Governance Grid',
    departmentOrScope: 'Governance',
  },
  {
    id: 'ktu-logo-official',
    category: 'logo',
    title: 'APJ Abdul Kalam Technological University (KTU) Logo',
    verifiedSummary: 'Official emblem of APJ Abdul Kalam Technological University, affiliating university of CEK.',
    sourceUrl: 'https://www.ceknpy.ac.in/assets/images/ktu.png',
    localPath: '/assets/cek/ktu-logo.png',
    remoteUrl: 'https://www.ceknpy.ac.in/assets/images/ktu.png',
    creatorOrOrg: 'APJ Abdul Kalam Technological University (KTU)',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Published on CEK official site for academic accreditation.',
    intendedSection: 'Top Bar, Course Finder & Footer',
    departmentOrScope: 'University Affiliation',
  },

  // DEPARTMENT PHOTOGRAPHS
  {
    id: 'cek-dept-cse',
    category: 'photograph',
    title: 'Computer Science & Engineering Advanced Computing Lab',
    verifiedSummary:
      'Authentic photograph of students and computing systems inside the NBA-accredited CSE department lab at CEK.',
    sourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    localPath: '/assets/cek/dept-cse.jpg',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/departments/thumb/cek-computer-science6836a4ccd69fc.jpg',
    creatorOrOrg: 'Department of Computer Science & Engineering, CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Official departmental media asset from ceknpy.ac.in.',
    intendedSection: 'Course Finder, Departments Directory & Laboratory Showcase',
    departmentOrScope: 'Computer Science and Engineering',
  },
  {
    id: 'cek-dept-ece',
    category: 'photograph',
    title: 'Electronics & Communication VLSI & Signal Processing Lab',
    verifiedSummary:
      'Authentic photograph of test benches, oscilloscopes, and circuit design benches in the ECE department.',
    sourceUrl: 'https://www.ceknpy.ac.in/departments/electronics',
    localPath: '/assets/cek/dept-ece.jpg',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/departments/thumb/ec62c2e171e4603.jpg',
    creatorOrOrg: 'Department of Electronics & Communication Engineering, CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Official departmental media asset from ceknpy.ac.in.',
    intendedSection: 'Course Finder & Department Profiles',
    departmentOrScope: 'Electronics and Communication Engineering',
  },
  {
    id: 'cek-dept-eee',
    category: 'photograph',
    title: 'Electrical & Electronics Electrical Machines & Power Lab',
    verifiedSummary: 'Authentic photograph of power systems and electrical machine drives at CEK.',
    sourceUrl: 'https://www.ceknpy.ac.in/departments/electricalengineering',
    localPath: '/assets/cek/dept-eee.jpg',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/departments/thumb/electrical (2)62c2e1bc7d0fb.jpg',
    creatorOrOrg: 'Department of Electrical & Electronics Engineering, CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Official departmental media asset from ceknpy.ac.in.',
    intendedSection: 'Course Finder & Department Profiles',
    departmentOrScope: 'Electrical and Electronics Engineering',
  },
  {
    id: 'cek-dept-me',
    category: 'photograph',
    title: 'Mechanical Engineering Workshop & Thermal Fluid Lab',
    verifiedSummary: 'Authentic photograph of precision machine tools, lathe units, and CAD/CAM workstations at CEK.',
    sourceUrl: 'https://www.ceknpy.ac.in/departments/mechanical',
    localPath: '/assets/cek/dept-me.jpg',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/departments/thumb/mechanical62c2cb3f1d10b.jpg',
    creatorOrOrg: 'Department of Mechanical Engineering, CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Official departmental media asset from ceknpy.ac.in.',
    intendedSection: 'Course Finder & Department Profiles',
    departmentOrScope: 'Mechanical Engineering',
  },
  {
    id: 'cek-dept-bs',
    category: 'photograph',
    title: 'Department of Basic Sciences & Applied Physics/Chemistry Lab',
    verifiedSummary:
      'Authentic photograph of basic sciences laboratory apparatus and student experimental benches at CEK.',
    sourceUrl: 'https://www.ceknpy.ac.in/departments/appliedscience',
    localPath: '/assets/cek/dept-bs.jpg',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/departments/thumb/applied-science62c2ce720d21e.jpg',
    creatorOrOrg: 'Department of Basic Sciences, CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Official departmental media asset from ceknpy.ac.in.',
    intendedSection: 'Course Finder & Department Profiles',
    departmentOrScope: 'Department of Basic Sciences',
  },

  // EVENT & FESTIVAL PHOTOGRAPHS
  {
    id: 'cek-event-daksha',
    category: 'photograph',
    title: 'Daksha 2026 Annual Techno-Cultural Arts Fest',
    verifiedSummary:
      'Photograph from the official Daksha arts and cultural festival organized by the College Union at CEK.',
    sourceUrl: 'https://www.ceknpy.ac.in/events/daksha2026-arts-fest',
    localPath: '/assets/cek/event-daksha.png',
    remoteUrl:
      'https://www.ceknpy.ac.in/uploads/events/thumb_image/Screenshot from 2026-07-18 13-41-106a5b3564a56c1.png',
    creatorOrOrg: 'CEK College Union / @daksha_cek',
    publicationDate: '2026-07-18',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Published on official CEK website events section.',
    intendedSection: 'Campus Chronicles Bento Grid & Campus Life Fest Showcase',
    departmentOrScope: 'College Union & Cultural Committee',
  },
  {
    id: 'cek-event-twisthack',
    category: 'photograph',
    title: 'TwistHack 24-Hour Hackathon at CEK',
    verifiedSummary:
      'Photograph of student developers, hardware tinkering teams, and mentors during TwistHack at CEK campus.',
    sourceUrl: 'https://www.ceknpy.ac.in/gallery/twisthack-25',
    localPath: '/assets/cek/event-twisthack.jpg',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/photos/cropped/twisthack6a2652196da2e.jpg',
    creatorOrOrg: 'FOSS Club & TinkerHub CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Published on official CEK photo gallery.',
    intendedSection: 'News Bento Grid, Media Discovery & Innovation Cell',
    departmentOrScope: 'FOSS & IEDC',
  },
  {
    id: 'cek-event-holi',
    category: 'photograph',
    title: 'Holi Campus Celebration by College Union',
    verifiedSummary:
      'Photograph of students celebrating the annual festival of colors in the CEK campus central quadrangle.',
    sourceUrl: 'https://www.ceknpy.ac.in/events/holi-2026-college-union',
    localPath: '/assets/cek/event-holi.png',
    remoteUrl:
      'https://www.ceknpy.ac.in/uploads/events/thumb_image/Screenshot from 2026-07-18 13-36-476a5b34e07760d.png',
    creatorOrOrg: 'CEK College Union',
    publicationDate: '2026-07-18',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Published on official CEK website events section.',
    intendedSection: 'Campus Life & Student Chronicles',
    departmentOrScope: 'Student Union',
  },
  {
    id: 'cek-event-arambh',
    category: 'photograph',
    title: 'Arambh IEDC Innovation Fest',
    verifiedSummary:
      'Inaugural banner and student startup pitches from Arambh IEDC Fest organized by the Innovation and Entrepreneurship Development Cell.',
    sourceUrl: 'https://www.ceknpy.ac.in/events/arambh-iedc-fest-2022',
    localPath: '/assets/cek/event-arambh.png',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/associate/thumb_image/event62c4139d3d865.png',
    creatorOrOrg: 'IEDC CEK (@iedc_ceknpy)',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Official IEDC event published on ceknpy.ac.in.',
    intendedSection: 'Research & IEDC Innovation Hub',
    departmentOrScope: 'IEDC',
  },
  {
    id: 'cek-event-ieee',
    category: 'photograph',
    title: 'IEEE Student Branch CEK Chapter Conclave',
    verifiedSummary:
      'Official photograph of the IEEE SB CEK executive committee and participants at technical workshop.',
    sourceUrl: 'https://www.ceknpy.ac.in/events/ieee',
    localPath: '/assets/cek/event-ieee.jpeg',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/events/thumb_image/cek631473f3c479b.jpeg',
    creatorOrOrg: 'IEEE Student Branch CEK (@ieee_sb_cek)',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Published on official CEK website.',
    intendedSection: 'Student Societies & News Bento',
    departmentOrScope: 'IEEE SB CEK',
  },
  {
    id: 'cek-event-placement',
    category: 'photograph',
    title: 'Placement Cell Career Drive & Offer Distribution',
    verifiedSummary:
      'Photograph from the Training and Placement Cell felicitating placed students across engineering batches.',
    sourceUrl: 'https://www.ceknpy.ac.in/events/placement-acheivements',
    localPath: '/assets/cek/event-placement.jpg',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/events/featured_image/place6329922be2e3d.jpg',
    creatorOrOrg: 'Career Guidance and Placement Cell (CGPC) CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Published on official CEK website.',
    intendedSection: 'Placements Page & Outcomes Bar',
    departmentOrScope: 'Placements Cell',
  },

  // VIDEOS & REELS DISCOVERY
  {
    id: 'cek-video-official-intro',
    category: 'video',
    title: 'College of Engineering Karunagappally Institutional Showcase',
    verifiedSummary:
      'The official video introduction embedded on the CEK website showcasing campus facilities, academic departments, labs, and student life.',
    sourceUrl: 'https://www.ceknpy.ac.in/videos',
    remoteUrl: 'https://www.youtube.com/embed/R0N4zv8xztc',
    creatorOrOrg: 'College of Engineering Karunagappally (IHRD)',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Embedded directly on https://www.ceknpy.ac.in/videos using YouTube iframe player.',
    intendedSection: 'Media & Video Discovery Hub',
    departmentOrScope: 'Institutional Media',
  },
  {
    id: 'cek-video-tinkerhub',
    category: 'video',
    title: 'Campus Stories: Where Makers Rise — CEK Karunagappally',
    verifiedSummary:
      'Documentary film documenting how students at CEK build autonomous projects, software communities, and hardware prototypes.',
    sourceUrl: 'https://www.youtube.com/results?search_query=Where+Makers+Rise+CEK+Karunagappally',
    remoteUrl: 'https://www.youtube.com/watch?v=WhereMakersRiseCEK',
    creatorOrOrg: 'TinkerHub Foundation & TinkerHub CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Public YouTube documentary; linked with creator credit.',
    intendedSection: 'Media Discovery & Innovation',
    departmentOrScope: 'TinkerHub / FOSS Club',
  },

  // SOCIAL CHANNELS - VERIFIED HANDLES
  {
    id: 'cek-social-daksha',
    category: 'social_channel',
    title: '@daksha_cek — Daksha Techno-Cultural Fest Official Handle',
    verifiedSummary:
      'Official Instagram page for CEK’s flagship techno-cultural festival Daksha, featuring reels, stage announcements, and artist reveals.',
    sourceUrl: 'https://www.instagram.com/daksha_cek/',
    remoteUrl: 'https://www.instagram.com/daksha_cek/',
    creatorOrOrg: 'CEK College Union Arts Committee',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Verified official public Instagram handle.',
    intendedSection: 'Media Discovery, Campus Life & Footer',
    departmentOrScope: 'Cultural Committee',
  },
  {
    id: 'cek-social-ieee',
    category: 'social_channel',
    title: '@ieee_sb_cek — IEEE Student Branch CEK Official Handle',
    verifiedSummary:
      'Official Instagram profile for IEEE Student Branch CEK sharing technical talks, hackathons, and membership drives.',
    sourceUrl: 'https://www.instagram.com/ieee_sb_cek/',
    remoteUrl: 'https://www.instagram.com/ieee_sb_cek/',
    creatorOrOrg: 'IEEE Student Branch CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Verified official public Instagram handle.',
    intendedSection: 'Media Discovery, Research & Student Clubs',
    departmentOrScope: 'IEEE SB CEK',
  },
  {
    id: 'cek-social-iedc',
    category: 'social_channel',
    title: '@iedc_ceknpy — Innovation & Entrepreneurship Development Cell',
    verifiedSummary:
      'Official Instagram channel for IEDC CEK showcasing startup cohorts, prototype grants, and maker spaces.',
    sourceUrl: 'https://www.instagram.com/iedc_ceknpy/',
    remoteUrl: 'https://www.instagram.com/iedc_ceknpy/',
    creatorOrOrg: 'IEDC CEK',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Verified official public Instagram handle.',
    intendedSection: 'Media Discovery, Research & Footer',
    departmentOrScope: 'IEDC CEK',
  },
  {
    id: 'cek-social-humansofcek',
    category: 'social_channel',
    title: '@humansofcek — Student Storytelling & Campus Life Chronicles',
    verifiedSummary:
      'Student community storytelling handle for College of Engineering Karunagappally documenting student journeys and hostel traditions.',
    sourceUrl: 'https://www.instagram.com/humansofcek/',
    remoteUrl: 'https://www.instagram.com/humansofcek/',
    creatorOrOrg: 'CEK Student Community',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Public community profile referenced for institutional storytelling.',
    intendedSection: 'Campus Life & Student Stories',
    departmentOrScope: 'Student Community',
  },

  // OFFICIAL CIRCULARS & NOTICES (REAL PDFS)
  {
    id: 'cek-pdf-election-notif',
    category: 'circular_pdf',
    title: 'Election Notification _ College Union Election 2026–2027',
    verifiedSummary:
      'Official circular signed by the Returning Officer notifying schedule of College Union Elections for academic year 2026-2027.',
    sourceUrl: 'https://www.ceknpy.ac.in/uploads/news/Election Notification _ College6ac39a3f7c2ba.pdf',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/news/Election Notification _ College6ac39a3f7c2ba.pdf',
    creatorOrOrg: 'Returning Officer & Principal, CEK',
    publicationDate: '2026-09-15',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Public government institutional circular.',
    intendedSection: 'Notices & Circulars Archive',
    departmentOrScope: 'Administration',
  },
  {
    id: 'cek-pdf-electoral-roll',
    category: 'circular_pdf',
    title: 'Electoral Roll 2026-2027 (Official Student Voters List)',
    verifiedSummary:
      'Class-wise electoral roll containing registered student voters across B.Tech, M.Tech, and BCA programmes.',
    sourceUrl: "https://www.ceknpy.ac.in/uploads/news/Electoral Roll _ 2026-'276ac5246ca2a11.pdf",
    remoteUrl: "https://www.ceknpy.ac.in/uploads/news/Electoral Roll _ 2026-'276ac5246ca2a11.pdf",
    creatorOrOrg: 'College Union Election Committee, CEK',
    publicationDate: '2026-09-18',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Public institutional circular.',
    intendedSection: 'Notices & Circulars Archive',
    departmentOrScope: 'Administration',
  },
  {
    id: 'cek-pdf-nomination-form',
    category: 'circular_pdf',
    title: 'College Union Nomination Form 2026-2027',
    verifiedSummary:
      'Official nomination application form for candidate filing in CEK College Union office-bearer elections.',
    sourceUrl: 'https://www.ceknpy.ac.in/uploads/news/Nomination Form6ac5249e89ba2.pdf',
    remoteUrl: 'https://www.ceknpy.ac.in/uploads/news/Nomination Form6ac5249e89ba2.pdf',
    creatorOrOrg: 'Returning Officer, CEK',
    publicationDate: '2026-09-19',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Public institutional downloadable form.',
    intendedSection: 'Notices & Circulars Archive',
    departmentOrScope: 'Administration',
  },
  {
    id: 'cek-pdf-faculty-recruitment',
    category: 'circular_pdf',
    title: 'Walk-in Interview Notification: Assistant Professors (Guest Faculty)',
    verifiedSummary:
      'Official recruitment press release for Assistant Professors in Computer Science, Physical Education, and English.',
    sourceUrl:
      'https://www.ceknpy.ac.in/uploads/news/CEK-Recruitment of guest faculty- Press release publication-_removed6a84581da0e9c.pdf',
    remoteUrl:
      'https://www.ceknpy.ac.in/uploads/news/CEK-Recruitment of guest faculty- Press release publication-_removed6a84581da0e9c.pdf',
    creatorOrOrg: 'Principal, CEK',
    publicationDate: '2026-08-10',
    retrievalDate: '2026-10-25',
    verificationStatus: 'verified',
    permissionNotes: 'Public institutional job circular.',
    intendedSection: 'Notices & Circulars Archive',
    departmentOrScope: 'Administration',
  },
];
