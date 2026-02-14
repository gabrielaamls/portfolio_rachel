import type { Portfolio, TagColors } from "../types/portfolio";

export const PORTFOLIO_INFO: Portfolio = {
  meta: {
    createdAt: new Date().toISOString(),
    locale: "en-US",
    url: "https://github.com/RachelNababan",
    pdf: "/RachelNababan_CV.pdf",
  },
  personal: {
    name: "Rachel Nababan",
    title: "Informatics Student — Frontend Developer & UI/UX Designer",
    headline: "HTML · CSS · JavaScript · Laravel · Figma · Quality Assurance",
    // Single profile image
    avatar: { url: "./profile.jpeg", label: "Rachel Nababan" },
    summary:
      "Undergraduate Informatics student with a strong interest in web development, particularly in Frontend Development, Quality Assurance, and UI/UX Design. Passionate about learning new technologies and continuously improving technical and problem-solving skills. Able to work both independently and collaboratively in a team environment. Currently seeking opportunities to gain professional experience and contribute to real-world technology projects.",
    // optional hero summary used in the site hero; keeps a concise, senior-level intro tuned to your data
    hero: {
      summary:
        "Informatics student specializing in Frontend Development and UI/UX Design. I create responsive, user-centered interfaces and ensure quality through comprehensive testing. Experienced in working with modern web technologies and passionate about delivering intuitive user experiences.",
    },
    contact: {
      email: "rachelnababan0509@gmail.com",
      phone: "+6281361095477",
      location: "Medan, Indonesia",
      website: "https://github.com/RachelNababan",
      socials: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/rachel-putri-sevira-nababan",
          icon: "SiLinkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/RachelNababan",
          icon: "SiGithub",
        },
      ],
    },
  },
  highlights: [
    "Informatics Student at Del Institute of Technology (2022 – 2026)",
    "Frontend Developer & UI/UX Designer Intern at PT Hutabyte Abhinaya Inovasi",
    "Experience with HTML, CSS, JavaScript, Laravel, Figma, and Quality Assurance",
  ],
  skills: [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "HTML5",
          level: 85,
          icon: "SiHtml5",
          category: "frontend",
          years: 2,
          note: "Used in multiple projects",
        },
        {
          name: "CSS3",
          level: 85,
          icon: "SiCss3",
          category: "frontend",
          years: 2,
          note: "Used in multiple projects",
        },
        {
          name: "JavaScript",
          level: 80,
          icon: "SiJavascript",
          category: "frontend",
          years: 2,
          note: "Used in web applications",
        },
        {
          name: "PHP",
          level: 75,
          icon: "SiPhp",
          category: "frontend",
          years: 2,
          note: "Backend integration",
        },
        {
          name: "Laravel",
          level: 75,
          icon: "SiLaravel",
          category: "frontend",
          years: 1,
          note: "Used in several projects",
        },
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        {
          name: "Figma",
          level: 85,
          icon: "SiFigma",
          category: "design",
          years: 2,
          note: "Primary design tool",
        },
        {
          name: "Draw.io",
          level: 70,
          category: "design",
          years: 1,
          note: "For flowcharts and diagrams",
        },
      ],
    },
    {
      title: "Quality Assurance & Testing",
      skills: [
        {
          name: "Katalon",
          level: 75,
          category: "testing",
          years: 1,
          note: "Automated testing",
        },
        {
          name: "Postman",
          level: 80,
          icon: "SiPostman",
          category: "testing",
          years: 1,
          note: "API testing",
        },
        {
          name: "Selenium",
          level: 70,
          icon: "SiSelenium",
          category: "testing",
          years: 1,
          note: "Web automation",
        },
        {
          name: "Manual Testing",
          level: 85,
          category: "testing",
          years: 2,
          note: "Debugging and documentation",
        },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          level: 75,
          icon: "SiPython",
          category: "backend",
          years: 2,
        },
        {
          name: "C",
          level: 70,
          icon: "SiC",
          category: "backend",
          years: 2,
        },
        {
          name: "SQL",
          level: 75,
          category: "database",
          years: 2,
          note: "Database management",
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          level: 78,
          icon: "SiMysql",
          category: "database",
          years: 2,
          note: "Used in multiple projects",
        },
      ],
    },
  ],
  experience: [
    {
      id: "hutabyte-2025",
      title: "Frontend Developer and UI/UX Designer",
      company: "PT Hutabyte Abhinaya Inovasi",
      location: "Toba, Indonesia",
      date: { start: "2025-08", end: "2026-02" },
      summary:
        "Performed frontend development and UI/UX design for web-based applications, focusing on responsive interfaces and user-centered design principles.",
      bullets: [
        "Performed frontend development and UI/UX design for web-based applications, focusing on responsive interfaces and user-centered design principles.",
        "Identified usability issues and proposed interface improvements to enhance user experience and application accessibility.",
        "Collaborated with backend developers and project stakeholders to ensure design consistency, feature functionality, and smooth system integration.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Figma", "Laravel"],
    },
    {
      id: "goritax-2025",
      title: "Software Developer Internship",
      company: "PT Goritax Prospera Indonesia",
      location: "Jakarta Selatan, Indonesia",
      date: { start: "2025-06", end: "2025-08" },
      summary:
        "Performed frontend development for web applications, implementing user interface components based on design specifications and system requirements.",
      bullets: [
        "Performed frontend development for web applications, implementing user interface components based on design specifications and system requirements.",
        "Designed UI/UX prototypes and interface improvements to enhance usability and user experience.",
        "Conducted manual testing and quality assurance processes, including debugging and documenting application issues in collaboration with the development team.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Figma"],
    },
    {
      id: "it-del-assistant-2025",
      title: "Lecturer Assistant of Software Engineering",
      company: "Del Institute of Technology",
      location: "Toba, Indonesia",
      date: { start: "2025-02", end: "2025-05" },
      summary:
        "Assisted students in understanding software engineering concepts, system design, and implementation practices.",
      bullets: [
        "Assisted students in understanding software engineering concepts, system design, and implementation practices.",
        "Developed learning materials and practical exercises to support students' understanding of software development processes.",
        "Evaluated assignments and provided constructive feedback to improve students' analytical and problem-solving skills.",
      ],
      tech: ["Software Engineering", "Teaching"],
    },
  ],
  projects: [
    {
      id: "simba-project",
      title: "Student Guidance and Guardianship Management Information System (SIMBA)",
      description:
        "A web-based system that facilitates communication between students, dormitories, academic advisors, parents, and administrative staff. Designed intuitive and responsive user interfaces for the system.",
      tags: ["UI/UX Design", "Figma", "Laravel", "Web Development"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
      date: { start: "2025-01", end: "2025-05" },
      bullets: [
        "Designed intuitive and responsive user interfaces for the system.",
        "Developed dashboard interface concepts for violation monitoring and student guidance data.",
        "Designed communication interface features between academic staff and parents.",
        "Collaborated with developers to ensure design implementation aligned with system requirements.",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/pardzheri/pam-2025-simba.git",
          icon: "SiGithub"
        }
      ],
    },
    {
      id: "it-del-sis",
      title: "Student Information System (IT Del Parent Information System)",
      description:
        "A web application designed to monitor and manage student violations at IT Del, ensuring transparency and timely updates for parents and relevant stakeholders.",
      tags: ["UI/UX Design", "QA", "Figma", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Laravel"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop",
      date: { start: "2024-10", end: "2024-12" },
      bullets: [
        "Designed user-centered interfaces through wireframes and interactive prototypes using Figma.",
        "Conducted user flow design and interface evaluation to improve usability.",
        "Performed quality assurance testing to ensure system functionality and interface consistency.",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/zzzXenon/k4_proyek-sistem-pelanggaran.git",
          icon: "SiGithub"
        }
      ],
    },
    {
      id: "sma-balige",
      title: "SMA N 1 Balige Information System Website",
      description:
        "A web-based information system developed to manage the Student Creativity Program (PKM) at SMA Negeri 1 Balige.",
      tags: ["Frontend Development", "HTML", "CSS", "JavaScript", "PHP", "MySQL", "Laravel"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      date: { start: "2024-10", end: "2024-11" },
      bullets: [
        "Designed and implemented responsive and user-friendly web interfaces.",
        "Collaborated with the development team to integrate frontend components with backend services.",
        "Improved usability through structured layout design and consistent UI components.",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/delcom-itdel/pabwe-pkm-proyek-2024-k2.git",
          icon: "SiGithub"
        }
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Informatics",
      school: "Del Institute of Technology",
      location: "Toba, Indonesia",
      date: "2022-2026 (Expected)",
      gpa: "3.21/4.00",
    },
  ],
  certifications: [],
  extras: {
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Indonesian", level: "Native" },
    ],
    interests: ["Web Development", "UI/UX Design", "Software Quality Assurance"],
    softSkills: [
      {
        name: "Teamwork",
        description: "Collaborative team player with experience working in diverse groups",
        icon: "👥"
      },
      {
        name: "Leadership",
        description: "Vice Chair of MPH with proven ability to coordinate and lead initiatives",
        icon: "🎯"
      },
      {
        name: "Communication",
        description: "Effective communicator across technical and non-technical audiences",
        icon: "💬"
      },
      {
        name: "Time Management",
        description: "Efficiently manage multiple projects and academic responsibilities",
        icon: "⏱️"
      },
      {
        name: "Problem Solving",
        description: "Analytical thinker skilled at debugging and finding creative solutions",
        icon: "🧩"
      },
      {
        name: "Critical Thinking",
        description: "Strategic approach to challenges with data-driven decision making",
        icon: "🤔"
      }
    ],
    organizations: [
      {
        name: "Association Consultative Assembly (MPH)",
        role: "Vice Chair",
        date: "Sep 2024 - Nov 2025",
        description: "Supported the Chair in coordinating organizational activities and decision-making processes. Coordinated and communicated student aspirations within the assembly.",
      },
      {
        name: "Informatics Student Association",
        role: "Member, Interest and Talent Division",
        date: "July 2023 - June 2024",
        description: "Organized student development activities such as workshops, competitions, and training programs. Facilitated student aspirations and collaborated with internal teams and external communities.",
      },
    ],
  },
};

// ---------- SMALL HELPERS ----------
export const tagColors: TagColors = {
  React: "bg-blue-100 text-blue-800",
  CSS: "bg-teal-100 text-teal-800",
  CSS3: "bg-teal-100 text-teal-800",
  HTML: "bg-orange-100 text-orange-800",
  JavaScript: "bg-yellow-100 text-yellow-800",
  PHP: "bg-purple-100 text-purple-800",
  MySQL: "bg-blue-100 text-blue-800",
  Laravel: "bg-red-100 text-red-800",
  Figma: "bg-pink-100 text-pink-800",
  "UI/UX Design": "bg-purple-100 text-purple-800",
  "Frontend Development": "bg-blue-100 text-blue-800",
  "Web Development": "bg-green-100 text-green-800",
  QA: "bg-yellow-100 text-yellow-800",
  Tailwind: "bg-teal-100 text-teal-800",
  Stripe: "bg-purple-100 text-purple-800",
  "Design System": "bg-yellow-100 text-yellow-800",
  D3: "bg-amber-100 text-amber-800",
  Realtime: "bg-green-100 text-green-800",
  Storybook: "bg-pink-100 text-pink-800",
  "NPM Package": "bg-red-100 text-red-800",
  "Material-UI": "bg-indigo-100 text-indigo-800",
  Chatbot: "bg-violet-100 text-violet-800",
  OpenAI: "bg-gray-100 text-gray-800",
  "Hugging Face": "bg-orange-100 text-orange-800",
  Beginner: "bg-cyan-100 text-cyan-800",
  "Beginner Project": "bg-cyan-100 text-cyan-800",
  FastAPI: "bg-teal-500 text-white",
  MongoDB: "bg-green-600 text-white",
  Terraform: "bg-purple-600 text-white",
  IaC: "bg-indigo-500 text-white",
  AWS: "bg-orange-500 text-white",
  Azure: "bg-blue-600 text-white",
  GCP: "bg-red-600 text-white",
  Algorithms: "bg-blue-500 text-blue-100",
  DSA: "bg-purple-300 text-purple-900",
  ML: "bg-blue-200 text-blue-800",
  AI: "bg-gray-200 text-gray-800",
  "AI & ML": "bg-amber-100 text-amber-900",
  Visualization: "bg-orange-100 text-purple-900",
  "Next.js": "bg-black text-white",
  "Full Stack": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
};
