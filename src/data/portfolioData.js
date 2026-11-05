export const personalInfo = {
  name: 'Sukhsagar Jangde',
  title: 'Software Developer & Full-Stack Engineer',
  roles: ['Software Developer', 'Full-Stack Engineer', 'MERN Stack Developer', 'React.js & Next.js Developer', 'Node.js Backend Developer'],
  location: 'Raipur, Chhattisgarh, India',
  email: 'sagarjangde86@gmail.com',
  phone: '+91 6263171801',
  linkedin: 'https://www.linkedin.com/in/sukhsagar-jangde-4b0186178/',
  github: 'https://github.com/SUKHSAGAR86',
  resumeUrl: '/Sukhsagar_Jangde_Resume.pdf',
  avatarImage: '/images/sukhsagar-courthouse.jpg',
  portraitImage: '/images/sukhsagar-portrait.jpg',
  availability: 'Available for Engineering Roles & Projects',
  bio: {
    hero: 'Building high-reliability web applications, secure REST APIs, and database-driven solutions across the NIC & MeitY government ecosystem.',
    summary: 'Software Developer with 2+ years of professional engineering experience working within the National Informatics Centre (NIC) and Ministry of Electronics & IT (MeitY) ecosystem. Experienced in architecting robust frontend applications with React.js & Next.js, engineering high-throughput backend services in Node.js & Express, and optimizing relational databases across MSSQL, MySQL, and PostgreSQL. Proven track record across 8+ full-stack projects, with 4+ successfully deployed and actively serving citizens, judicial institutions, and government departments.',
    quote: 'Real engineering is not about abstract templates — it is about delivering secure, resilient, and accessible software that operates flawlessly under real-world demands.'
  },
  stats: [
    { label: 'Years Experience', value: '2+', subtext: 'NIC & MeitY ecosystem' },
    { label: 'Full-Stack Systems', value: '8+', subtext: 'Architected & engineered' },
    { label: 'Live Deployments', value: '4+', subtext: 'Serving active public & judicial users' },
    { label: 'Security & RBAC', value: '100%', subtext: 'SHA-256, JWT, granular access control' },
  ],
};

export const projectsData = [
  {
    id: 'cis-periphery',
    title: 'Case Information System (CIS Periphery)',
    subtitle: 'High Court Judicial Periphery Platform',
    organization: 'High Court of Chhattisgarh, Bilaspur (NIC)',
    role: 'Frontend Engineer',
    period: 'Apr 2026 – July 2026',
    category: 'Government & Judicial',
    featured: true,
    description: 'A mission-critical judicial portal module engineered for the High Court of Chhattisgarh, Bilaspur under the NIC e-Courts ecosystem. Developed high-performance, accessible, and responsive user interfaces that enable advocates, judicial clerks, and citizens to inspect case statuses, causelists, judicial orders, and periphery filings with zero latency.',
    highlights: [
      'Engineered and enhanced responsive user interfaces using React.js, JavaScript, and Bootstrap tailored for judicial speed and strict accessibility guidelines.',
      'Architected intuitive data-dense tables and search filters for rapid case query processing across thousands of daily proceedings.',
      'Streamlined case periphery submission workflows, reducing user input friction and validation latency.',
      'Collaborated closely with NIC technical leads and judicial stakeholders to ensure seamless integration with national e-Courts core systems.'
    ],
    techStack: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs', 'AJAX'],
    securityArchitecture: ['Input Sanitization', 'Judicial Role Segregation', 'Accessible Compliance', 'Audit Trail Integrity'],
    metrics: [
      { label: 'Domain', value: 'Judicial / e-Courts' },
      { label: 'User Base', value: 'Advocates & Litigants' },
      { label: 'UI Latency', value: '< 200ms Search' },
    ],
    liveStatus: 'Live Judicial System',
  },
  {
    id: 'samvad-adv-management',
    title: 'Advertisement Management System',
    subtitle: 'State-Wide Government Media & Allocation Platform',
    organization: 'Chhattisgarh Samvad, Government of Chhattisgarh',
    role: 'Full-Stack Software Engineer',
    period: 'Jan 2025 – Mar 2026',
    category: 'Government & Judicial',
    featured: true,
    description: 'An enterprise-scale end-to-end advertisement lifecycle and financial allocation system built for Chhattisgarh Samvad. Coordinates multi-channel advertising (Print, Electronic Media, Outdoor Hoardings, Digital Display) for all state government departments, managing Avak entry, document verification, multi-tier officer approval hierarchies, publisher allocations, and bill submission auditing.',
    highlights: [
      'Developed and maintained comprehensive Client and Admin modules handling state-wide government advertisement requisitions.',
      'Implemented full workflow state machine: Avak entry, multi-stage departmental forwarding, rejection handling, and media-wise distribution channels.',
      'Engineered publisher billing submission and verification workflows, automating bill audits, tariff checks, and payment sanction milestones.',
      'Architected secure MSSQL relational database schemas with complex stored procedures, indexing, and high-concurrency transaction handling.',
      'Implemented SHA-256 cryptographic hashing and granular Role-Based Access Control (RBAC) across officers, verifiers, and publishers.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'Microsoft SQL Server (MSSQL)', 'JWT', 'RBAC', 'SHA-256', 'Bootstrap'],
    securityArchitecture: ['SHA-256 Checksums', 'Multi-Level RBAC', 'JWT Token Rotation', 'Tamper-Evident Audit Logging'],
    metrics: [
      { label: 'Media Channels', value: '4 Channels' },
      { label: 'Workflows', value: 'Multi-Tier Approvals' },
      { label: 'Database', value: 'MSSQL Relational' },
    ],
    liveStatus: 'Active Production',
  },
  {
    id: 'dpr-web-portal',
    title: 'Department of Public Relations Web Portal & CMS',
    subtitle: 'Dynamic State Government Media Publishing Hub',
    organization: 'Department of Public Relations, Government of Chhattisgarh',
    role: 'Full-Stack Developer',
    period: 'Jan 2025 – Mar 2026',
    category: 'Government & Judicial',
    featured: true,
    description: 'The official public relations digital portal and content management engine for the Department of Public Relations (DPRCG). Delivers state press releases, ministerial announcements, high-definition photo/video galleries, and news bulletins to millions of citizens with sub-second page delivery and a fortified administrative publishing portal.',
    highlights: [
      'Engineered a dynamic, highly responsive citizen-facing portal paired with a fortified admin dashboard for real-time editorial management.',
      'Built secure RESTful APIs integrated with Microsoft SQL Server (MSSQL) supporting media uploads, categorized press releases, and archived notices.',
      'Developed dynamic CRUD operations with rich text editing, draft previews, and publication scheduling.',
      'Integrated cryptographic SHA-256 authentication and role hierarchies to prevent unauthorized modifications to official government dispatches.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MSSQL', 'Bootstrap', 'REST APIs', 'SHA-256 Security'],
    securityArchitecture: ['SHA-256 Authentication', 'RBAC Content Publishing', 'XSS & SQL Injection Protection', 'API Rate Limiting'],
    metrics: [
      { label: 'Public Traffic', value: 'Statewide Audience' },
      { label: 'Content Pipeline', value: 'Real-time News & Media' },
      { label: 'Security Grade', value: 'MeitY Standard Compliant' },
    ],
    liveStatus: 'Active Production',
  },
  {
    id: 'task-management-system',
    title: 'Enterprise Task & Workflow Platform',
    subtitle: 'Role-Based Team Productivity & Tracking Engine',
    organization: 'Full-Stack Engineering Project',
    role: 'Lead Full-Stack Developer',
    category: 'Enterprise Full-Stack',
    featured: true,
    description: 'A comprehensive full-stack enterprise productivity platform built from scratch to streamline organizational delegation, employee accountability, and milestone tracking. Features separate role-based workspaces for administrators and team members with real-time assignment alerts, status burndown charts, and secure authenticated endpoints.',
    highlights: [
      'Architected end-to-end role-based permissions distinguishing Admin governance from Employee operational workspaces.',
      'Designed and optimized MySQL relational database models for relational tasks, milestones, comments, and priority tags.',
      'Implemented robust JWT authentication token handling and SHA-256 password cryptography.',
      'Constructed responsive, interactive dashboards featuring progress meters, task assignment matrices, and search filters.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'SHA-256', 'Bootstrap', 'REST APIs'],
    securityArchitecture: ['JWT Authentication', 'SHA-256 Password Hashing', 'Parameterized Queries', 'Scoped API Routes'],
    metrics: [
      { label: 'Architecture', value: 'Full-Stack REST' },
      { label: 'Auth System', value: 'JWT + SHA-256' },
      { label: 'Data Store', value: 'MySQL Relational' },
    ],
    liveStatus: 'Production Deployed',
  },
];

export const experienceData = [
  {
    id: 'pioneer-highcourt',
    role: 'Software Developer',
    company: 'Pioneer e Solutions Pvt Ltd',
    client: 'High Court of Chhattisgarh, Bilaspur (NIC)',
    location: 'Bilaspur / Raipur, Chhattisgarh',
    period: 'Apr 2026 – July 2026',
    employmentType: 'Full-time / On-site Contract',
    summary: 'Deployed as a Software Developer on the High Court of Chhattisgarh e-Courts periphery project in direct coordination with the National Informatics Centre (NIC).',
    achievements: [
      'Spearheaded frontend enhancement for the Case Information System (CIS Periphery), modernizing judicial UI components using React.js and Bootstrap.',
      'Developed responsive, accessible query modules allowing swift retrieval of court causelists, case history, and advocate records.',
      'Ensured strict compliance with judicial digital accessibility guidelines and low-bandwidth optimizations for district court access.',
      'Collaborated directly with judicial officers and NIC engineers to translate complex legal procedural rules into seamless frontend state workflows.'
    ],
    skills: ['React.js', 'JavaScript (ES6+)', 'Bootstrap', 'REST APIs', 'Judicial UI/UX', 'NIC e-Courts Ecosystem'],
    badge: 'High Court of Chhattisgarh (NIC)',
  },
  {
    id: 'netprophets-dpr',
    role: 'Software Engineer',
    company: 'NetProphets Cyberworks Pvt Ltd',
    client: 'Department of Public Relations, Chhattisgarh (NIC)',
    location: 'New Raipur, Chhattisgarh',
    period: 'Jan 2025 – Mar 2026',
    employmentType: 'Full-time / On-site',
    summary: 'Engineered and maintained mission-critical full-stack government applications, serving the Department of Public Relations and Chhattisgarh Samvad under the NIC ecosystem.',
    achievements: [
      'Architected the end-to-end Advertisement Management System for Chhattisgarh Samvad, digitizing requisition, Avak verification, officer approvals, and publisher bill clearances.',
      'Developed and maintained the state-level Department of Public Relations Web Portal, handling dynamic press releases, media galleries, and government notices.',
      'Engineered high-performance RESTful APIs in Node.js and Express, integrated with Microsoft SQL Server (MSSQL) database schemas.',
      'Implemented SHA-256 cryptographic security layers and enterprise Role-Based Access Control (RBAC) across diverse administrative officer ranks.',
      'Optimized MSSQL queries and indexes, ensuring rapid retrieval and report generation for multi-crore public advertisement disbursements.'
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MSSQL', 'JWT', 'RBAC', 'SHA-256', 'RESTful APIs', 'Bootstrap'],
    badge: 'NIC / MeitY Government Ecosystem',
  },
  {
    id: 'adyant-internship',
    role: 'Full Stack Web Developer (Internship)',
    company: 'Adyant SoftTech',
    client: 'Software Product Engineering',
    location: 'Raipur, Chhattisgarh',
    period: 'Feb 2024 – Aug 2024',
    employmentType: 'Full-time Internship',
    summary: 'Completed intensive 6-month hands-on full-stack development internship focusing on modern MERN stack architecture, relational databases, and enterprise RESTful API patterns.',
    achievements: [
      'Built dynamic, responsive web interfaces using React.js with modular component state and clean CSS architecture.',
      'Designed backend REST APIs using Node.js and Express.js with JSON payloads, input validation, and structured error handling.',
      'Learned and implemented production database modeling across MySQL and MongoDB, writing optimized joins and aggregation pipelines.',
      'Practiced version control workflows with Git & GitHub, participating in code reviews, bug fixing, and Postman API contract testing.'
    ],
    skills: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Postman', 'JavaScript'],
    badge: 'MERN Stack Engineering',
  },
];

export const skillCategories = [
  {
    title: 'Frontend Architecture',
    tagline: 'Modern, high-performance, accessible user experiences',
    skills: [
      { name: 'React.js', level: 'Expert', note: 'Hooks, Context, Component Lifecycle, Reusable Architecture', isKey: true },
      { name: 'Next.js', level: 'Advanced', note: 'App Router, Server & Client Components, SEO & Metadata', isKey: true },
      { name: 'JavaScript (ES6+)', level: 'Expert', note: 'Async/Await, Closures, DOM manipulation, Clean Code', isKey: true },
      { name: 'HTML5 & Semantic Web', level: 'Expert', note: 'Accessible structure, SEO semantics, Cross-browser', isKey: false },
      { name: 'SCSS / Sass', level: 'Advanced', note: 'Variables, Mixins, Breakpoints, BEM, Modular Architecture', isKey: true },
      { name: 'Bootstrap', level: 'Expert', note: 'Rapid responsive layouts, Government portal standards', isKey: false },
      { name: 'Tailwind CSS', level: 'Advanced', note: 'Utility-first rapid prototyping & component design', isKey: false },
      { name: 'Material UI', level: 'Proficient', note: 'Enterprise component theming & design systems', isKey: false },
    ],
  },
  {
    title: 'Backend & System APIs',
    tagline: 'Scalable services, secure authentication, and robust data flow',
    skills: [
      { name: 'Node.js', level: 'Advanced', note: 'Event-driven architecture, file systems, asynchronous streams', isKey: true },
      { name: 'Express.js', level: 'Advanced', note: 'RESTful API routing, middleware pipelines, error handlers', isKey: true },
      { name: 'REST & RESTful APIs', level: 'Expert', note: 'Contract design, JSON schemas, status codes, documentation', isKey: true },
      { name: 'Security & Auth', level: 'Advanced', note: 'JWT, SHA-256 Hashing, Role-Based Access Control (RBAC)', isKey: true },
      { name: 'AJAX & Fetch API', level: 'Expert', note: 'Asynchronous data synchronization and error resilience', isKey: false },
      { name: 'API Management', level: 'Advanced', note: 'Payload optimization, rate limiting, token rotation', isKey: false },
    ],
  },
  {
    title: 'Databases & Data Modeling',
    tagline: 'Relational integrity, high-throughput queries, and structured schemas',
    skills: [
      { name: 'Microsoft SQL Server (MSSQL)', level: 'Advanced', note: 'Government portal schemas, Stored Procedures, Indexing', isKey: true },
      { name: 'MySQL', level: 'Advanced', note: 'Relational normalization, foreign keys, complex JOIN queries', isKey: true },
      { name: 'MongoDB', level: 'Proficient', note: 'NoSQL collections, document indexing, aggregation pipelines', isKey: false },
      { name: 'PostgreSQL', level: 'Proficient', note: 'Relational data modeling, ACID transactions, data types', isKey: false },
    ],
  },
  {
    title: 'Tooling, Testing & DevOps',
    tagline: 'Precision testing, version control, and collaborative delivery',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', note: 'Branching, PRs, merge conflict resolution, repository management', isKey: true },
      { name: 'Postman', level: 'Expert', note: 'API testing, automated test scripts, mock servers, environments', isKey: true },
      { name: 'Responsive Web Design', level: 'Expert', note: 'Mobile-first layout, touch-friendly interfaces, responsive typography', isKey: true },
      { name: 'Prompt Engineering', level: 'Certified', note: 'AI workflows, productivity acceleration, LLM integration', isKey: false },
    ],
  },
];

export const educationData = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Pt. Ravishankar Shukla University, Raipur',
    location: 'Raipur, Chhattisgarh, India',
    period: '2022 – 2024',
    details: 'Advanced computer science curriculum covering Software Engineering, Advanced Database Management Systems (DBMS), Data Structures & Algorithms, Network Security, Object-Oriented System Design, and Enterprise Web Technologies.',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dr. J. P. Mishra Govt. PG Science College, Mungeli',
    location: 'Atal Bihari Vajpayee Vishwavidyalaya (ABVV), Bilaspur, Chhattisgarh',
    period: '2019 – 2022',
    details: 'Foundation in Computer Science, C/C++ programming, Web Development, Database Systems, Computer Architecture, and Discrete Mathematics.',
  },
];

export const certificationsData = [
  {
    id: 'cert-adyant',
    title: 'Internship Certificate — Full Stack Web Development',
    issuer: 'Adyant SoftTech, Raipur',
    date: 'Feb 2024 – Aug 2024',
    description: 'Six months rigorous hands-on software development training in MERN stack architecture, full-stack application lifecycle, and database-driven web solutions.',
  },
  {
    id: 'cert-react',
    title: 'UI Full Stack with ReactJS',
    issuer: 'Naresh I Technologies, Hyderabad',
    date: 'Professional Certification',
    description: 'Comprehensive industry program covering modern React.js patterns, Redux state management, component architecture, responsive UI design, and REST API integration.',
  },
  {
    id: 'cert-prompt',
    title: 'Prompt Engineering Certification',
    issuer: 'Simplilearn SkillUp',
    date: 'Professional Certification',
    description: 'Trained in prompt architectures, LLM workflow optimization, code generation assistance, and developer productivity amplification.',
  },
];
