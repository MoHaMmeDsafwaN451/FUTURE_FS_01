// Edit this file to update portfolio content. Keep all claims factual.

export const profile = {
  name: 'Mohammed Safwan',
  roles: [
    'B.Tech Student in AI & Data Science',
    'AI / ML Developer',
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
  { label: 'Featured projects', value: '4' },
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
    github: '',
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
    detail: 'Percentage: 68.',
  },
  {
    title: 'Secondary Education — SSLC',
    place: 'P. K. M. M. H. S. S, Kottakkal, Malappuram',
    period: 'Jun 2020 — Mar 2021',
    detail: 'Grade: 7 A+.',
  },
]

export const experience = [
  {
    title: 'Intern',
    place: 'TechbyHeart, Kottakkal (On-site)',
    period: 'Apr 2024 — May 2024',
    detail: 'Conducted vulnerability analysis of 5+ web applications using Nessus; learned 10+ core OSINT techniques; and gained hands-on exposure to cybersecurity frameworks and Kali Linux tools.',
  },
  {
    title: 'Full Stack Web Development Intern',
    place: 'Future Interns',
    period: 'Aug 2026 — Sep 2026',
    detail: 'Current internship focused on React-based portfolio development, responsive web development, and Git/GitHub workflow.',
  },
]

export const certificates = [
  { title: 'Young Innovative Program — Machine Learning & Generative AI', issuer: 'Kerala Knowledge Economy Mission', year: '' },
  { title: 'Python Intern Developer', issuer: 'Inker Robotics', year: '' },
  { title: 'One Million Prompters', issuer: 'Details to be added', year: '' },
  { title: 'AI Appreciate & AI Aware', issuer: 'Details to be added', year: '' },
]

// Add a Formspree endpoint only after you create and test the form.
export const contactFormEndpoint = 'https://formspree.io/f/mljrywgw'
