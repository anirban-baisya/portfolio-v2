//ALL your resume content as JS objects/arrays 
export const personalInfo = {
  name: "Anirban Baisya",
  title: "Front-End Developer",
  subtitle: "& DevOps Enthusiast",
  email: "anirban.baisya2020@vitbhopal.ac.in",
  phone: "7908492494",
  location: "West Bengal, India",
  github: "anirban-baisya",
  summary:
    "3+ years of experience in software development, specializing in frontend development with React.js and React Native, along with automation, CI/CD pipelines, and cloud infrastructure. Passionate about bridging the gap between development and operations — building dynamic, responsive UIs while ensuring efficient, scalable, and reliable systems.",
  profiles: {
    github: "https://github.com/anirban-baisya",
    linkedin: "https://linkedin.com/in/anirban-baisya",
    stackoverflow: "https://stackoverflow.com/users/19115687/anirban-baisya",
  },
};

export const stats = [
  { value: "3+", label: "Years Exp." },
  { value: "5+", label: "Projects" },
  { value: "40%", label: "Deploy Faster" },
  { value: "2", label: "Companies" },
];

export const skills = {
  Frontend: {
    color: "#6c63ff",
    bg: "rgba(108,99,255,0.1)",
    border: "rgba(108,99,255,0.25)",
    items: ["React.js", "React Native", "JavaScript", "Redux Toolkit", "Next.js", "HTML5", "CSS3"],
  },
  "DevOps & Infra": {
    color: "#43e97b",
    bg: "rgba(67,233,123,0.1)",
    border: "rgba(67,233,123,0.25)",
    items: ["Docker", "Kubernetes", "CI/CD", "Containerization", "Orchestration", "Shell Scripting", "Linux"],
  },
  "Cloud (AWS)": {
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.1)",
    border: "rgba(56,189,248,0.25)",
    items: ["VPC", "ECS", "EC2", "EBS", "S3", "EKS", "IAM"],
  },
  Payments: {
    color: "#ff6584",
    bg: "rgba(255,101,132,0.1)",
    border: "rgba(255,101,132,0.25)",
    items: ["Stripe", "Paytm"],
  },
  Other: {
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.1)",
    border: "rgba(251,191,36,0.25)",
    items: ["Python", "Git", "GitHub", "Agile", "Cross-functional Collaboration"],
  },
};

export const workHistory = [
  {
    company: "Legalkart",
    role: "Junior Software Developer",
    start: "July 2023",
    end: "August 2025",
    logo: "⚖️",
    color: "#6c63ff",
    responsibilities: [
      "Enhanced and maintained scalable web and mobile applications using Next.js, React.js and React Native.",
      "Integrated payment gateways including Paytm and Stripe, enabling secure online transactions and improving checkout experience.",
      "Collaborated with cross-functional teams to identify opportunities for automation and process improvements.",
    ],
    tags: ["Next.js", "React.js", "React Native", "Stripe", "Paytm"],
  },
  {
    company: "Almetric Consultancy Service Pvt. Ltd.",
    role: "Junior Software Developer",
    start: "March 2022",
    end: "April 2023",
    logo: "🏢",
    color: "#43e97b",
    responsibilities: [
      "Delivered end-to-end development for multiple client projects: an E-commerce app (React.js), an Elearning platform (Next.js), and a Service provider app (React Native).",
      "Conducted rigorous testing to ensure application stability and performance.",
      "Collaborated with teams to identify automation opportunities and process improvements.",
    ],
    tags: ["React.js", "Next.js", "React Native", "Testing"],
  },
  {
  company: "Freelance",
  role: "Frontend Developer (Freelance)",
  start: "October 2025",
  end: "Present",
  logo: "💻",
  color: "#ff6584",
  responsibilities: [
    "Developed responsive and dynamic web applications using React.js, Next.js, and JavaScript.",
    "Built reusable UI components and optimized performance for faster load times and better user experience.",
    "Integrated third-party APIs and payment gateways like Stripe and Paytm.",
  ],
  tags: ["React.js", "React Native", "Next.js", "JavaScript", "Stripe", "Paytm", "API Integration"],
  },
];

export const education = [
  {
    institution: "Vellore Institute of Technology",
    degree: "Master of Computer Applications (MCA)",
    score: "CGPA: 8.13",
    start: "2020",
    end: "2022",
    location: "Bhopal, India",
    icon: "🎓",
  },
  {
    institution: "Swami Vivekananda Institute of Modern Studies",
    degree: "Bachelor of Computer Applications (BCA)",
    score: "DGPA: 7.71",
    start: "2017",
    end: "2020",
    location: "Barrackpore, West Bengal",
    icon: "🏛️",
  },
  {
    institution: "Coochbehar Rambhola High School",
    degree: "Higher Secondary Education",
    score: "66.50%",
    start: "2016",
    end: "2017",
    location: "Coochbehar, West Bengal",
    icon: "🏫",
  },
  {
    institution: "Coochbehar Rambhola High School",
    degree: "Secondary Education",
    score: "53.42%",
    start: "2014",
    end: "2015",
    location: "Coochbehar, West Bengal",
    icon: "📚",
  },
];

export const projects = [
  {
    title: "CI/CD Pipeline – Reddit Clone",
    subtitle: "Highly Scalable Application Delivery",
    description:
      "Designed and implemented a robust CI/CD pipeline for a Reddit clone using Docker, Docker Hub, and Kubernetes Minikube — enabling a seamless, automated workflow from code commit to deployment.",
    highlights: [
      "Automated pipeline integrating code changes with thorough testing before deployment",
      "Container image publishing to Docker Hub on every successful build",
      "Kubernetes Minikube deployment with high availability via services and ingress",
      "React.js frontend for a dynamic, responsive user interface",
    ],
    tech: ["Docker", "Kubernetes", "Minikube", "CI/CD", "React.js", "Docker Hub"],
    icon: "🚀",
    color: "#6c63ff",
    github: "https://github.com/anirban-baisya",
  },
];

export const achievements = [
  {
    icon: "🏗️",
    text: "Played a key role in migrating monolithic applications to microservices architecture.",
    color: "#6c63ff",
  },
  {
    icon: "⚡",
    text: "Successfully automated application deployments, reducing deployment time by 40%.",
    color: "#43e97b",
  },
];

export const certifications = [
  { name: "Full Stack Development", issuer: "Grey Campus", date: "Feb 2021", icon: "🎯" },
  { name: "Full Stack Dev Internship", issuer: "ProGrad", date: "Jul 2021 – Mar 2022", icon: "💼" },
  { name: "C & C++ Programming", issuer: "Ramakrishna Mission (Belur Math)", date: "Sep 2018 – Jan 2019", icon: "💻" },
  { name: "HTML Quiz Certificate", issuer: "Techgig", date: "Feb 2021", icon: "🏆" },
];
