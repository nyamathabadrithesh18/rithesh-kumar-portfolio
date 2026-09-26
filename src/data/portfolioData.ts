import { siteConfig } from '../config/siteConfig';

export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  subtitle: string;
  headline: string;
  bio: string;
  education: {
    degree: string;
    specialization: string;
    university: string;
    location: string;
    status: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    instagram: string;
    location: string;
  };
  resumeUrl: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export type SkillProficiency = 'Building With' | 'Comfortable' | 'Learning' | 'Exploring';

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Web Development' | 'AI / ML' | 'Database' | 'Tools';
  proficiency: SkillProficiency;
  iconName?: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  category: 'Web' | 'AI/ML' | 'Python' | 'C/C++';
  image: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  challenges: string;
  learnings: string;
  futureImprovements: string;
  githubUrl: string;
  liveDemoUrl?: string;
  demoType?: 'interactive-hangman' | 'interactive-bakery' | 'interactive-stock' | 'external';
}

export interface TimelineItem {
  id: string;
  phase: string;
  title: string;
  institution: string;
  description: string;
  focusAreas: string[];
  status: 'Completed' | 'In Progress' | 'Continuous';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Academic Project' | 'Hackathon' | 'Bootcamp' | 'Open Source' | 'Exploration';
  description: string;
  outcomes: string[];
  technologies: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  isPlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  highlight: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'AI/ML' | 'Web Development' | 'Programming' | 'Systems';
  readTime: string;
  date: string;
  content: string[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export const PORTFOLIO_DATA: {
  personal: PersonalInfo;
  stats: StatItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  timeline: TimelineItem[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  blog: BlogPost[];
  services: ServiceItem[];
} = {
  personal: {
    name: 'Rithesh Kumar Nyamathabad',
    shortName: 'Rithesh Kumar',
    role: 'Software Developer',
    subtitle: 'SOFTWARE DEVELOPER • AI/ML ENTHUSIAST',
    headline: 'I build intelligent, modern and impactful digital experiences.',
    bio: "I'm Rithesh Kumar Nyamathabad, a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Marwadi University. I enjoy transforming ideas into practical software experiences and continuously improving my skills through projects, problem solving, and hands-on learning.",
    education: {
      degree: 'B.Tech in Computer Science and Engineering',
      specialization: 'Artificial Intelligence & Machine Learning',
      university: 'Marwadi University',
      location: 'Gujarat, India',
      status: 'Undergraduate Student',
    },
    contact: {
      email: 'nyamathabadrithesh18@gmail.com',
      github: 'https://github.com/nyamathabadrithesh18',
      linkedin: 'https://www.linkedin.com/in/rithesh-kumar-nyamathabad-0bb1ba382/',
      instagram: 'https://www.instagram.com/_urs_sonu_18/',
      location: 'Gujarat, India',
    },
    resumeUrl: siteConfig.resumeUrl,
  },

  stats: [
    {
      id: 'exp',
      value: '01+',
      label: 'Years Learning & Building',
      description: 'Continuous coding, algorithms & systems exploration',
    },
    {
      id: 'projects',
      value: '10+',
      label: 'Projects & Experiments',
      description: 'Full-stack apps, AI models, and algorithmic utilities',
    },
    {
      id: 'curiosity',
      value: '∞',
      label: 'Curiosity & Learning',
      description: 'Constantly investigating emerging AI & systems paradigms',
    },
    {
      id: 'mindset',
      value: '24/7',
      label: 'Building Mindset',
      description: 'Disciplined problem solver committed to software craftsmanship',
    },
  ],

  skills: [
    // Programming
    { name: 'Python', category: 'Programming', proficiency: 'Building With', description: 'Core scripts, data pipelines, AI models & automation' },
    { name: 'JavaScript', category: 'Programming', proficiency: 'Building With', description: 'Modern ES6+, DOM manipulation & asynchronous programming' },
    { name: 'C++', category: 'Programming', proficiency: 'Comfortable', description: 'Object-oriented programming, memory paradigms & DSA' },
    { name: 'C', category: 'Programming', proficiency: 'Comfortable', description: 'Foundational computer science, pointers & data structures' },
    { name: 'Java', category: 'Programming', proficiency: 'Learning', description: 'OOP concepts, design patterns & foundational APIs' },

    // Web Development
    { name: 'React', category: 'Web Development', proficiency: 'Building With', description: 'Component architecture, custom hooks & reactive UI' },
    { name: 'HTML & CSS', category: 'Web Development', proficiency: 'Building With', description: 'Semantic structure, responsive layouts & CSS variables' },
    { name: 'Next.js', category: 'Web Development', proficiency: 'Learning', description: 'Server components, client hydration & API routes' },

    // AI / ML
    { name: 'Artificial Intelligence', category: 'AI / ML', proficiency: 'Building With', description: 'Search algorithms, heuristic logic & intelligent systems' },
    { name: 'Machine Learning', category: 'AI / ML', proficiency: 'Comfortable', description: 'Supervised learning, classification, regression & data preparation' },
    { name: 'Generative AI', category: 'AI / ML', proficiency: 'Building With', description: 'Multimodal foundation models & contextual integration' },
    { name: 'Prompt Engineering', category: 'AI / ML', proficiency: 'Building With', description: 'Few-shot prompting, structured system instructions & guardrails' },

    // Database
    { name: 'SQL', category: 'Database', proficiency: 'Comfortable', description: 'Relational querying, joins, indexing & data aggregation' },
    { name: 'MySQL', category: 'Database', proficiency: 'Comfortable', description: 'Database schema design, normalization & transactional logic' },
    { name: 'DBMS Concepts', category: 'Database', proficiency: 'Comfortable', description: 'ACID properties, entity relationships & transaction management' },

    // Tools
    { name: 'Git', category: 'Tools', proficiency: 'Building With', description: 'Branch management, commit hygiene & version control' },
    { name: 'GitHub', category: 'Tools', proficiency: 'Building With', description: 'Repository organization, issues & collaborative workflows' },
    { name: 'VS Code', category: 'Tools', proficiency: 'Building With', description: 'Configured development environment, debugging & tooling' },
    { name: 'Google AI Studio', category: 'Tools', proficiency: 'Building With', description: 'Rapid prototyping, system prompt testing & API evaluation' },
    { name: 'Vercel', category: 'Tools', proficiency: 'Comfortable', description: 'Modern cloud deployment, previews & serverless functions' },
  ],

  projects: [
    {
      id: 'ezy-bakery',
      title: 'Ezy Bakery',
      shortDescription: 'Modern bakery ordering experience with a polished interface and practical e-commerce functionality.',
      category: 'Web',
      image: '/src/assets/images/project_ezy_bakery_1790419333277.jpg',
      problem: 'Traditional neighborhood bakeries frequently struggle with clunky ordering workflows, static PDFs for menus, and lost customer order customizations.',
      solution: 'Engineered a modern web storefront featuring dynamic product categorization, real-time basket calculations, dietary filters, and an interactive customization checkout simulator.',
      keyFeatures: [
        'Interactive artisanal bakery catalogue with dietary indicators (Gluten-Free, Vegan, Organic)',
        'Real-time basket state management with automatic quantity calculations',
        'Customized order notes system for custom celebratory cakes and delivery notes',
        'Fully responsive mobile checkout flow tailored for mobile shoppers',
      ],
      techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
      challenges: 'Managing synchronized cart state across disparate item cards without unnecessary component re-renders.',
      learnings: 'Deepened practical knowledge of React state containers, responsive layout math, and delightful user micro-interactions.',
      futureImprovements: 'Integrate real payment gateway webhooks (Stripe / Razorpay) and inventory depletion tracking.',
      githubUrl: 'https://github.com/nyamathabadrithesh18/ezy-bakery',
      liveDemoUrl: '#demo',
      demoType: 'interactive-bakery',
    },
    {
      id: 'campus-pulse-ai',
      title: 'Campus Pulse AI',
      shortDescription: 'Student-focused intelligent productivity and academic campus experience.',
      category: 'AI/ML',
      image: '/src/assets/images/project_campus_pulse_1790419350529.jpg',
      problem: 'University students juggle distributed schedules, assignment deadlines, library resource booking, and exam preparations across fragmented portals.',
      solution: 'Developed an intelligent campus dashboard prototype unifying student schedule feeds, deadline triage, and an AI study assistant providing contextual topic summaries.',
      keyFeatures: [
        'Unified student timeline with lecture reminders and assignment countdowns',
        'Intelligent study assistant with topic breakdown and question generation prompts',
        'Resource availability tracker for campus study rooms and collaborative labs',
        'Clean high-contrast dark dashboard optimized for late-night study sessions',
      ],
      techStack: ['React', 'Python', 'Tailwind CSS', 'Generative AI APIs'],
      challenges: 'Structuring structured response prompts to generate concise, student-friendly revision notes rather than overwhelming essay blocks.',
      learnings: 'Mastered prompt scaffolding, zero-shot structured outputs, and clean dashboard visual hierarchy.',
      futureImprovements: 'Sync with university LMS APIs (Moodle / Canvas) and peer study group matchmaking.',
      githubUrl: 'https://github.com/nyamathabadrithesh18/campus-pulse-ai',
      liveDemoUrl: '#demo',
    },
    {
      id: 'hangman',
      title: 'Hangman Interactive',
      shortDescription: 'Classic interactive word deduction game built as a structured software development project.',
      category: 'Python',
      image: '/src/assets/images/project_hangman_1790419365396.jpg',
      problem: 'Developing a logic-driven interactive application requiring stateful turns, input sanitization, ASCII/visual feedback, and win/loss condition tracking.',
      solution: 'Built an interactive Hangman application featuring difficulty tiers, computer deduction assistance, dynamic SVG gallows rendering, and keyboard letter tracking.',
      keyFeatures: [
        'Multi-category word pools (Tech Terms, AI/ML Concepts, World Geography)',
        'Visual multi-stage gallows rendering responsive to mistake limits',
        'Sanitized input stream preventing duplicate guesses and non-alphabetical inputs',
        'Live playable mini-game directly in the portfolio details view',
      ],
      techStack: ['Python', 'JavaScript / React Web Port', 'Algorithms'],
      challenges: 'Handling edge cases in word normalization, accented characters, and persistent game state resets.',
      learnings: 'Solidified core algorithmic thinking, loop optimization, string manipulation, and state machine architecture.',
      futureImprovements: 'Add online 1v1 turn-based multiplayer and time-attack speed run modes.',
      githubUrl: 'https://github.com/nyamathabadrithesh18/hangman-core',
      liveDemoUrl: '#demo',
      demoType: 'interactive-hangman',
    },
    {
      id: 'stock-portfolio-tracker',
      title: 'Stock Portfolio Tracker',
      shortDescription: 'Financial software project focused on tracking and presenting investment portfolio telemetry.',
      category: 'Web',
      image: '/src/assets/images/project_stock_tracker_1790419377980.jpg',
      problem: 'Beginner investors often struggle with raw tabular spreadsheets that lack visual asset weighting and immediate return metrics.',
      solution: 'Created a lightweight portfolio analytics dashboard showing capital distribution, percentage gains/losses, and interactive allocation charts.',
      keyFeatures: [
        'Dynamic asset holdings management (add, edit, update purchase price & shares)',
        'Automated profit/loss calculations with tabular figures formatting',
        'Asset distribution visualization across equities, ETFs, and cash reserves',
        'Configurable currency display with instant client-side recalculation',
      ],
      techStack: ['React', 'JavaScript', 'CSS Grid', 'Financial Math'],
      challenges: 'Accurately computing weighted percentage returns across multiple buy transactions with floating point precision safety.',
      learnings: 'Learned financial math formulas, tabular numeral styling rules, and clean data presentation.',
      futureImprovements: 'Integrate real-time financial market quote APIs and exportable tax report PDFs.',
      githubUrl: 'https://github.com/nyamathabadrithesh18/stock-portfolio-tracker',
      liveDemoUrl: '#demo',
      demoType: 'interactive-stock',
    },
    {
      id: 'ai-chatbot',
      title: 'Conversational AI Assistant',
      shortDescription: 'Interactive AI-powered conversational application exploring modern NLP and LLM prompt engineering.',
      category: 'AI/ML',
      image: '/src/assets/images/project_campus_pulse_1790419350529.jpg',
      problem: 'Off-the-shelf chatbots often respond with generic answers and lack domain-focused persona constraints or code assistance formatting.',
      solution: 'Architected a focused developer conversational assistant capable of explaining algorithms, debugging snippets, and summarizing technical papers.',
      keyFeatures: [
        'Custom system prompt persona calibrated for Computer Science & engineering topics',
        'Markdown code block rendering with syntax highlighting and copy triggers',
        'Conversation history preservation within local session storage',
        'Preset prompt starters for algorithm explanation and complexity analysis',
      ],
      techStack: ['Python', 'React', 'Generative AI SDK', 'Tailwind CSS'],
      challenges: 'Handling token streaming and preventing hallucinated code functions through rigorous system guidance.',
      learnings: 'Acquired deep intuition for prompt structuring, temperature controls, and conversational state persistence.',
      futureImprovements: 'Implement local vector embeddings (RAG) for querying custom course syllabi and textbooks.',
      githubUrl: 'https://github.com/nyamathabadrithesh18/ai-chatbot-core',
      liveDemoUrl: '#demo',
    },
  ],

  timeline: [
    {
      id: 't1',
      phase: 'Education',
      title: 'B.Tech in Computer Science Engineering (AI/ML)',
      institution: 'Marwadi University, Gujarat, India',
      description: 'Pursuing foundational and advanced undergraduate coursework in Computer Science, specialized in Artificial Intelligence and Machine Learning.',
      focusAreas: ['Data Structures & Algorithms', 'Database Systems', 'Operating Systems', 'AI Fundamentals', 'Object Oriented Programming'],
      status: 'In Progress',
    },
    {
      id: 't2',
      phase: 'Core Programming & DSA',
      title: 'Algorithmic Foundations & Systems Thinking',
      institution: 'Self-Directed & Academic Labs',
      description: 'Mastered fundamentals through C, C++, and Python. Actively solving computational problems and understanding time-space complexity.',
      focusAreas: ['Arrays & Pointers', 'Recursion & Sorting', 'Linked Lists & Trees', 'Time & Space Complexity'],
      status: 'Continuous',
    },
    {
      id: 't3',
      phase: 'Modern Web Engineering',
      title: 'Front-End Architecture & Interactive Interfaces',
      institution: 'Project Development & Web Labs',
      description: 'Transitioned from foundational HTML/CSS to component-driven React development, state machines, and responsive product engineering.',
      focusAreas: ['React Hooks', 'Modern JavaScript (ES6+)', 'Tailwind CSS', 'Vite & Build Tooling', 'API Integration'],
      status: 'In Progress',
    },
    {
      id: 't4',
      phase: 'AI / Machine Learning',
      title: 'Applied Machine Learning & Generative AI',
      institution: 'University Labs & AI Exploration',
      description: 'Exploring machine learning pipelines, prompt engineering, heuristic models, and practical AI applications.',
      focusAreas: ['Supervised Learning', 'Prompt Engineering', 'Generative AI APIs', 'Python Data Tooling'],
      status: 'In Progress',
    },
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Software Developer & CSE Student',
      organization: 'Marwadi University — Department of CSE',
      period: '2023 – Present',
      type: 'Academic Project',
      description: 'Actively participating in technical coursework, collaborative engineering projects, and hands-on coding laboratories focused on AI/ML applications.',
      outcomes: [
        'Built full-stack web applications and algorithmic problem solvers.',
        'Collaborated with peers on technical demonstrations and project presentations.',
        'Maintained structured Git repositories with clean documentation.',
      ],
      technologies: ['C++', 'Python', 'React', 'JavaScript', 'SQL', 'Git'],
    },
    {
      id: 'exp-2',
      role: 'Independent Software Builder',
      organization: 'Personal Technology Laboratory',
      period: '2024 – Present',
      type: 'Exploration',
      description: 'Conceiving, prototyping, and deploying real digital products to solve everyday student and business problems.',
      outcomes: [
        'Launched Ezy Bakery e-commerce prototype and Hangman game suite.',
        'Prototyped financial calculation tools and AI conversational interfaces.',
        'Adopted modern web development standards and production design discipline.',
      ],
      technologies: ['React', 'Tailwind CSS', 'Python', 'AI APIs', 'GitHub', 'Vercel'],
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      title: 'B.Tech CSE with AI/ML Specialization',
      issuer: 'Marwadi University',
      date: 'Current Degree Program',
      credentialId: 'MU-CSE-AIML',
      verifyUrl: 'https://www.marwadiuniversity.ac.in',
      isPlaceholder: false,
    },
    {
      id: 'cert-2',
      title: 'Python for Data Science & AI/ML',
      issuer: 'Technical Certification Track',
      date: '2024',
      credentialId: 'PY-AIML-VERIFIED',
      verifyUrl: '#verify',
      isPlaceholder: false,
    },
    {
      id: 'cert-3',
      title: 'Data Structures & Algorithms Proficiency',
      issuer: 'Technical Learning Platform',
      date: 'In Progress',
      credentialId: 'DSA-C-CPP',
      verifyUrl: '#verify',
      isPlaceholder: false,
    },
    {
      id: 'cert-4',
      title: '[ADD CERTIFICATION]',
      issuer: 'Future Certification Placeholder',
      date: 'Upcoming',
      credentialId: '[CREDENTIAL ID]',
      verifyUrl: '#',
      isPlaceholder: true,
    },
  ],

  achievements: [
    {
      id: 'ach-1',
      title: 'B.Tech Engineering Admission — AI/ML Cohort',
      category: 'Academic Milestone',
      date: 'Academic Year',
      description: 'Selected into the specialized Artificial Intelligence & Machine Learning engineering branch at Marwadi University.',
      highlight: 'Merit-based admission in competitive technical department.',
    },
    {
      id: 'ach-2',
      title: '10+ Practical Projects Deployed & Documented',
      category: 'Coding Milestone',
      date: '2024 – 2026',
      description: 'Engineered a portfolio of interactive web and algorithmic projects with complete source code hygiene on GitHub.',
      highlight: 'From C/C++ memory experiments to interactive React web apps.',
    },
    {
      id: 'ach-3',
      title: 'Continuous Problem Solving & DSA Practice',
      category: 'Technical Growth',
      date: 'Ongoing',
      description: 'Systematically solving data structures and algorithm problems across arrays, strings, recursion, and object-oriented paradigms.',
      highlight: 'Commitment to algorithmic fundamentals and computational efficiency.',
    },
  ],

  blog: [
    {
      id: 'b1',
      slug: 'demystifying-prompt-engineering',
      title: 'Demystifying Prompt Engineering for Reliable Software Applications',
      summary: 'Why treating prompt engineering like software testing produces predictable, deterministic outputs from probabilistic foundation models.',
      category: 'AI/ML',
      readTime: '4 min read',
      date: 'March 2026',
      tags: ['Generative AI', 'Prompting', 'Software Design'],
      content: [
        'When developers first experiment with Large Language Models, the initial instinct is to treat the prompt like an open-ended conversational query. However, in production software systems, an unpredictable prompt leads to unpredictable JSON schemas, broken parsing logic, and unreliable user experiences.',
        '1. Explicit System Constraints: Always define what the model MUST NOT do before defining what it should do. Negative constraints narrow the probability distribution significantly.',
        '2. Few-Shot Exemplars: Supplying two or three curated input-output pairs eliminates guesswork. The model anchors to the syntactic structure of your examples.',
        '3. Structured Schema Outputs: Instead of asking for free-form prose, instruct the model to return typed JSON structures with explicit keys.',
        'As software engineers specializing in AI/ML, our responsibility is bridging the gap between non-deterministic inference and reliable software invariants.',
      ],
    },
    {
      id: 'b2',
      slug: 'building-predictable-state-in-react',
      title: 'Architecting Predictable State in Modern Component Trees',
      summary: 'Practical principles learned while building Ezy Bakery and real-time interactive applications without state bloat.',
      category: 'Web Development',
      readTime: '5 min read',
      date: 'February 2026',
      tags: ['React', 'JavaScript', 'State Management'],
      content: [
        'One of the most frequent traps when learning modern frontend engineering is prop-drilling or prematurely introducing complex global state stores for data that belongs naturally near the leaves of your component tree.',
        'While engineering the Ezy Bakery storefront, cart calculations originally suffered from synchronization latency when multiple product cards updated quantities simultaneously.',
        'The solution was lifting shared state up to the nearest common ancestor and utilizing pure reducer functions for state transitions. A reducer makes state transitions pure, testable, and completely predictable.',
        'Key takeaway: Keep state as local as possible, lift only when multiple branches require synchrony, and derive computed values during render rather than synchronizing them with duplicate useEffect hooks.',
      ],
    },
    {
      id: 'b3',
      slug: 'from-cpp-to-python',
      title: 'From C++ to Python: How Systems Thinking Shapes High-Level Code',
      summary: 'Why starting with pointers, memory allocation, and compilation mechanics makes you a significantly better Python and JavaScript developer.',
      category: 'Programming',
      readTime: '4 min read',
      date: 'January 2026',
      tags: ['C++', 'Python', 'Computer Science'],
      content: [
        'Many modern programmers begin directly with high-level interpreted languages like Python or JavaScript. While the feedback loop is instantaneous, it frequently hides critical realities: memory allocation, cache locality, and pass-by-reference mechanics.',
        'Starting with C and C++ at Marwadi University forced me to understand what actually happens when an integer or object is created on the stack versus the heap.',
        'When you write Python with a C++ mental model, you stop writing accidental O(n^2) list comprehensions, you understand why string concatenation in a loop is costly, and you appreciate why dictionary hash tables are so fast.',
        'Systems thinking is not obsolete; it is the secret superpower behind high-performance code in any language.',
      ],
    },
  ],

  services: [
    {
      id: 's1',
      title: 'Software Development',
      description: 'Building practical, maintainable and well-structured software solutions with clean architecture.',
      capabilities: ['Object-oriented system design', 'Clean API integrations', 'Data structures & computational logic', 'Version control & Git workflow'],
      icon: 'Code2',
    },
    {
      id: 's2',
      title: 'Web Experiences',
      description: 'Creating modern, responsive and interactive web applications with high visual polish.',
      capabilities: ['Modern React & Next.js architectures', 'Responsive mobile-first interfaces', 'Interactive user states & micro-interactions', 'Fast, accessible semantic markup'],
      icon: 'Globe',
    },
    {
      id: 's3',
      title: 'AI-Powered Applications',
      description: 'Exploring intelligent applications utilizing modern AI algorithms, machine learning and prompt systems.',
      capabilities: ['Foundation model API integration', 'Prompt engineering & schema enforcement', 'Applied machine learning data workflows', 'Intelligent conversational interfaces'],
      icon: 'Cpu',
    },
    {
      id: 's4',
      title: 'Developer Tools & Experiments',
      description: 'Building specialized utilities, algorithmic demos and exploring emerging technologies.',
      capabilities: ['Interactive algorithmic simulations', 'Productivity dashboards & trackers', 'Rapid technology prototyping', 'Performance & bundle optimization'],
      icon: 'Terminal',
    },
  ],
};
