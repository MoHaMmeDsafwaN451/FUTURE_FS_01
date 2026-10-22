// Edit this file to update portfolio content. Keep all claims factual.

export const profile = {
  name: 'Mohammed Safwan',
  roles: [
    'B.Tech Student in AI & Data Science',
    'AI / ML Developer',
    'Computer Vision Developer',
    'Full Stack Web Development Intern',
  ],
  tagline:
    'I build practical applications with artificial intelligence, computer vision, and modern web technologies.',
  location: 'Tirur, India',
  email: 'mohammedsafwank451@gmail.com',
  phone: '+91 89438 47906',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  socials: {
    github: 'https://github.com/MoHaMmeDsafwaN451',
    linkedin: 'https://www.linkedin.com/in/mohammed-safwan-483781305',
    twitter: '',
  },
  about: `I'm Mohammed Safwan, a B.Tech student in Artificial Intelligence and Data Science. I enjoy building practical AI and machine-learning applications, particularly in computer vision and predictive modelling. I'm also expanding my full-stack web-development skills and applying them to projects that solve real-world problems.`,
}

export const stats = [
  { label: 'Featured projects', value: '5' },
  { label: 'Education', value: 'AI & DS' },
  { label: 'Based in', value: 'Tirur, IN' },
]

export const skills = [
  {
    category: 'Frameworks & Libraries',
    items: ['TensorFlow', 'OpenCV', 'Scikit-learn', 'Keras', 'React', 'Node.js', 'Django', 'NestJS', 'Next.js', 'Angular', 'Flask'],
  },
  {
    category: 'Programming Languages',
    items: ['Python', 'C', 'C++', 'SQL', 'R', 'JavaScript', 'C#', 'Kotlin'],
  },
  {
    category: 'Tools & Platforms',
    items: ['HTML', 'CSS', 'GitHub', 'Linux', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Professional Skills',
    items: ['Teamwork', 'Leadership', 'People Management', 'Collaboration', 'Decision Making'],
  },
  {
    category: 'Languages',
    items: ['English', 'Malayalam', 'Hindi', 'Arabic'],
  },
  {
    category: 'Databases & Backend',
    items: ['MongoDB', 'Mongoose', 'Node.js', 'REST APIs', 'JWT Authentication'],
  },
]

export const projects = [
  {
    title: 'AI Virtual Controller',
    description:
      'A real-time hand-gesture controller that maps five core system functions, including volume, brightness, and mouse control, to replace physical peripherals.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'PyAutoGUI'],
    github: '',
    demo: '',
  },
  {
    title: 'Stock Market Prediction',
    description:
      'A time-series forecasting dashboard that visualises stock trends, uses Yahoo Finance data, and applies Prophet and Scikit-learn models. Containerised with Docker for deployment.',
    stack: ['Streamlit', 'yfinance', 'Pandas', 'NumPy', 'Prophet', 'Scikit-learn', 'Plotly', 'Docker'],
    github: 'https://stockmarketprediction-uvuye87wngmtovzbywaahd.streamlit.app/',
    demo: '',
  },
  {
    title: 'Mask Detection',
    description:
      'A real-time webcam face-mask detection system using CNN models to classify masked and unmasked faces from labelled image data.',
    stack: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'CNN'],
    github: '',
    demo: '',
  },
  {
    title: 'Mini CRM',
    description:
      'A full-stack Mini CRM (Client Lead Management System) application for managing client leads, tracking follow-ups, and updating lead statuses. Features secure admin authentication, lead CRUD operations, search and filtering, notes, and a dashboard',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt'],
    github: 'future-fs-02-phi-seven.vercel.app',
    demo: '',
  },
  {
    title: 'Animal Recognition',
    description:
      'A CNN-based animal-recognition model for the Animal-10 dataset. As Research & Planning Lead, achieved 85% accuracy across images captured from different angles.',
    stack: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'CNN'],
    github: '',
    demo: '',
  },
]

export const education = [
  {
    title: 'B.Tech in Artificial Intelligence and Data Science',
    place: 'KMCT Institute of Technology and Management, Kuttippuram',
    period: 'Aug 2025 — 2028',
    detail: 'Studying machine learning and data science to build smart systems for real-world challenges.',
  },
  {
    title: 'Diploma in Artificial Intelligence and Machine Learning',
    place: 'Sree Narayana Institute of Technology, Adoor',
    period: 'Aug 2023 — May 2025',
    detail: 'CGPA: 7.45. Built foundations in computing, data structures, mathematics for AI/ML, predictive modelling, and computer vision.',
  },
  {
    title: 'Higher Secondary Education — Computer Science',
    place: 'Government Higher Secondary School, Niramaruthur, Malappuram',
    period: 'Jun 2021 — Mar 2023',
    detail: '',
  },
  {
    title: 'Secondary Education — SSLC',
    place: 'P. K. M. M. H. S. S, Kottakkal, Malappuram',
    period: 'Jun 2020 — Mar 2021',
    detail: '',
  },
]

export const experience = [
  {
    title: 'Cybersecurity Intern',
    place: 'TechbyHeart, Kottakkal (On-site)',
    period: 'Apr 2024 — May 2024',
    detail: 'Conducted vulnerability assessments of 5+ web applications using Nessus, explored OSINT techniques for information gathering and reconnaissance, and gained hands-on experience with Kali Linux and web application security testing.',
  },
  {
    title: 'Full Stack Developer Intern',
    place: 'Future Interns (Remote)',
    period: 'Aug 2026 — Sep 2026',
    detail: 'Developed and deployed a full-stack Mini CRM using React, Node.js, Express.js, and MongoDB. Implemented JWT-based authentication, lead management, status tracking, follow-up scheduling, and dashboard analytics. Used GitHub for version control and Vercel for deployment.',
  },
]

export const certificates = [
  { title: 'Young Innovative Program', issuer: 'Kerala Knowledge Economy Mission', year: '2024' },
  { title: 'Microsoft Azure Essentialsr', issuer: 'Microsoft Press', year: '2026' },
  { title: 'One Million Prompters', issuer: 'Dubai Centre for Artificial Intelligence', year: '2025' },
  { title: 'AI Appreciate & AI Aware', issuer: 'AI For All — Intel, CBSE & Digital India', year: '2026' },
  { title: 'Data Science, R & AI Workshop', issuer: 'Zoople Technologies Pvt. Ltd', year: '2026' },
  { title: 'Robotics & Machine Learning Exhibition Volunteer', issuer: 'Inker Robotics', year: '2025' },
]

// Add a Formspree endpoint only after you create and test the form.
export const contactFormEndpoint = 'https://formspree.io/f/mljrywgw'
