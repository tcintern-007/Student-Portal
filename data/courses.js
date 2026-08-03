export const courses = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    instructor: "John Smith",
    duration: "12 Weeks",
    level: "Beginner",
    description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js. Build responsive, full-stack applications from scratch.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    skills: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js", "MongoDB", "Responsive Design"],
    modules: [
      "Introduction to Web Technologies",
      "HTML5 Semantic Elements",
      "CSS3 Flexbox & Grid",
      "JavaScript Fundamentals",
      "React.js Components & Hooks",
      "Node.js & Express.js",
      "Database Integration",
      "Deployment & Hosting"
    ]
  },
  {
    id: 2,
    slug: "ai-engineering",
    title: "AI Engineering",
    instructor: "Sarah Johnson",
    duration: "16 Weeks",
    level: "Intermediate",
    description: "Dive deep into artificial intelligence, machine learning, and neural networks. Build intelligent systems that learn and adapt.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    skills: ["Python", "TensorFlow", "Neural Networks", "NLP", "Computer Vision", "MLOps"],
    modules: [
      "Python for AI",
      "Mathematics for ML",
      "Supervised Learning",
      "Neural Networks",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "MLOps & Deployment"
    ]
  },
  {
    id: 3,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    instructor: "Emily Davis",
    duration: "10 Weeks",
    level: "Beginner",
    description: "Learn user interface and user experience design principles. Create beautiful, intuitive digital products using Figma and industry best practices.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?w=600&h=400&fit=crop",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
    modules: [
      "Design Thinking",
      "User Research Methods",
      "Information Architecture",
      "Wireframing & Mockups",
      "UI Design Principles",
      "Prototyping in Figma",
      "Design Systems",
      "Usability Testing"
    ]
  },
  {
    id: 4,
    slug: "data-science",
    title: "Data Science",
    instructor: "Michael Chen",
    duration: "14 Weeks",
    level: "Intermediate",
    description: "Extract insights from data using Python, statistics, and machine learning. Become a data-driven decision maker.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    skills: ["Python", "Pandas", "SQL", "Statistics", "Data Visualization", "Machine Learning"],
    modules: [
      "Python for Data Science",
      "Data Collection & Cleaning",
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "SQL for Data Analysis",
      "Data Visualization",
      "Machine Learning Basics",
      "Capstone Project"
    ]
  },
  {
    id: 5,
    slug: "mobile-development",
    title: "Mobile Development",
    instructor: "David Wilson",
    duration: "12 Weeks",
    level: "Intermediate",
    description: "Build cross-platform mobile applications using React Native and Flutter. Deploy to iOS and Android app stores.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    skills: ["React Native", "Flutter", "iOS Development", "Android Development", "App Store Deployment", "Mobile UI Design"],
    modules: [
      "Mobile Development Fundamentals",
      "React Native Basics",
      "Flutter & Dart",
      "Navigation & Routing",
      "State Management",
      "API Integration",
      "Testing & Debugging",
      "App Store Deployment"
    ]
  },
  {
    id: 6,
    slug: "cybersecurity",
    title: "Cybersecurity",
    instructor: "Lisa Anderson",
    duration: "18 Weeks",
    level: "Advanced",
    description: "Protect systems and networks from digital attacks. Learn ethical hacking, security protocols, and defense strategies.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3a6f6?w=600&h=400&fit=crop",
    skills: ["Ethical Hacking", "Network Security", "Cryptography", "Penetration Testing", "Security Auditing", "Incident Response"],
    modules: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "Cryptography Basics",
      "Ethical Hacking",
      "Penetration Testing",
      "Security Auditing",
      "Incident Response",
      "Compliance & Governance"
    ]
  }
];

export const instructors = [
  {
    id: 1,
    name: "John Smith",
    expertise: "Web Development",
    experience: "12+ Years",
    bio: "Senior Full Stack Developer with expertise in React, Node.js, and cloud architecture.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    expertise: "AI Engineering",
    experience: "10+ Years",
    bio: "Machine Learning Engineer specializing in deep learning and natural language processing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Emily Davis",
    expertise: "UI/UX Design",
    experience: "8+ Years",
    bio: "Product Designer passionate about creating intuitive and accessible user experiences.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#"
    }
  },
  {
    id: 4,
    name: "Michael Chen",
    expertise: "Data Science",
    experience: "9+ Years",
    bio: "Data Scientist with a background in statistics, machine learning, and big data analytics.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 5,
    name: "David Wilson",
    expertise: "Mobile Development",
    experience: "7+ Years",
    bio: "Mobile app developer with experience building apps for iOS and Android using React Native.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 6,
    name: "Lisa Anderson",
    expertise: "Cybersecurity",
    experience: "11+ Years",
    bio: "Cybersecurity expert with experience in penetration testing and security architecture.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];
