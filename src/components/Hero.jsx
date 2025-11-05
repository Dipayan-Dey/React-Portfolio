<style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
        }
        
        @keyframes float-code {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-very-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
            text-shadow: 0 0 10px currentColor; 
          }
          50% { 
            opacity: 0.import { useState, useEffect, useRef } from "react";`}</style>;

import { useState, useEffect, useRef } from "react";
import ResumeSection from "./ResumeSection";
import { SiFiverr } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

import "../App.css";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ExternalLink,
  Download,
  Code,
  Database,
  Palette,
  Server,
  Star,
  Eye,
  CheckCircle,
  ArrowRight,
  Send,
  Heart,
  Coffee,
  Zap,
  BarChart2,
  Wrench,
} from "lucide-react";
import logo from "../assets/me.png";
import RunningText from "./RunningText";
import Footer from "./Footer";
import Project from "./Project";
import { TbBrandFiverr } from "react-icons/tb";
export default function Hero() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState("programming");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);
  const animationRef = useRef();

  const animatedWords = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Full-Stack",
  ];

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [mousePosition]);

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // User Data Variables - Easily customizable
  const userData = {
    name: "Dipayan Dey",
    tagline: "Crafting digital experiences with code and creativity",
    location: "Kolkata , West Bengal",
    email: "deydipayan2006@gmail.com",
    phone: "+91 9239219193",
    website: "https://www.fiverr.com/dipayandey2006",
    resumeUrl: "/resume.pdf",
    avatar: logo,

    // Availability
    availableForHire: true,
    availabilityText: "Available for Working",

    // Bio
    bio: "Multifaceted Full Stack Developer, Power BI Developer, and Data Analyst with 3+ years of experience building scalable web solutions and delivering impactful data visualizations. Skilled in transforming raw data into compelling dashboards and actionable insights using Power BI, statistical techniques, and modern development tools. Passionate about merging technology and analytics to solve real-world problems, and actively engaged in learning and contributing to the tech community.",

    // Social Links
    social: {
      github: "https://github.com/Dipayan-Dey",
      linkedin: "https://www.linkedin.com/in/dipayan-dey-033b38309/",
      twitter: "https://x.com/DipayanDey1711?t=jXzyq4QeQY_OtsrFp6jYvw&s=09",
      website: "https://www.fiverr.com/dipayandey2006",
    },

    // Experience Stats
    stats: {
      experience: "3+",
      projects: "50+",
      clients: "25+",
      // coffees: "1000+",
    },
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern, scalable e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory, advanced search, and mobile-responsive design.",
      image:
        "https://images.pexels.com/photos/29421581/pexels-photo-29421581.jpeg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "PostgreSQL",
      ],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: true,
      category: "Web Development",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image:
        "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
      image:
        "https://images.pexels.com/photos/4443538/pexels-photo-4443538.jpeg",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: false,
      category: "Frontend",
    },
    {
      id: 4,
      title: "AI Chat Bot",
      description:
        "An intelligent chatbot powered by OpenAI's GPT, featuring natural language processing and context-aware conversations.",
      image:
        "https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg",
      technologies: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
      liveUrl: "https://ai-chatbot-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: true,
      category: "AI/ML",
    },
  ];

  const skills = {
    programming: [
      {
        name: "Python",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        bgColor: "bg-blue-100", // Python blue
      },
      {
        name: "JavaScript",
        level: 92,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        bgColor: "bg-yellow-100", // JavaScript yellow
      },
      {
        name: "TypeScript",
        level: 92,
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201",
        bgColor: "bg-blue-100", // JavaScript yellow
      },
      {
        name: "C++",
        level: 20,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        bgColor: "bg-blue-100", // C++ blue
      },
      {
        name: "SQL",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        bgColor: "bg-orange-100", // MySQL orange
      },
      {
        name: "Java",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        bgColor: "bg-red-100", // Java red
      },
      {
        name: "C",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        bgColor: "bg-blue-100", // C blue
      },
      {
        name: "Dart",
        level: 85,
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png?20140316083713",
        bgColor: "bg-green-100", // C blue
      },
    ],

    frontend: [
      {
        name: "React Js",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        bgColor: "bg-cyan-100", // React cyan
      },
      {
        name: "Next Js",
        level: 30,
        icon: "https://marcbruederlin.gallerycdn.vsassets.io/extensions/marcbruederlin/next-icons/0.1.0/1723747598319/Microsoft.VisualStudio.Services.Icons.Default",
        bgColor: "bg-gray-100", // Next gray
      },
      {
        name: "Tailwind CSS",
        level: 90,
        icon: "https://avatars.githubusercontent.com/u/30317862?s=200&v=4",
        bgColor: "bg-teal-100", // Tailwind teal
      },
      {
        name: "HTML5",
        level: 92,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        bgColor: "bg-orange-100", // HTML5 orange
      },
      {
        name: "CSS3",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        bgColor: "bg-blue-100", // CSS3 blue
      },
    ],

    backend: [
      {
        name: "Node.js",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        bgColor: "bg-green-100", // Node.js green
      },
      {
        name: "Express.js",
        level: 88,
        icon: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
        bgColor: "bg-gray-100", // Express gray
      },
      {
        name: "REST APIs",
        level: 92,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8pLM2nPCg_c9kGRQfWQgWHgm3sZbwPSsFg&s",
        bgColor: "bg-indigo-100", // REST APIs indigo
      },
    ],

    database: [
      {
        name: "MongoDB",
        level: 88,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        bgColor: "bg-green-100", // MongoDB green
      },
      {
        name: "MySQL",
        level: 85,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        bgColor: "bg-orange-100", // MySQL orange
      },
      {
        name: "PostgreSQL",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        bgColor: "bg-blue-100", // PostgreSQL blue
      },
    ],

    analysis: [
      {
        name: "Pandas",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        bgColor: "bg-purple-100", // Pandas purple
      },
      {
        name: "NumPy",
        level: 90,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        bgColor: "bg-blue-100", // NumPy blue
      },
      {
        name: "Matplotlib",
        level: 88,
        icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
        bgColor: "bg-blue-100", // Matplotlib blue
      },
      {
        name: "Seaborn",
        level: 85,
        icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg",
        bgColor: "bg-blue-100", // Seaborn blue
      },
      {
        name: "Excel",
        level: 90,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPG1TdKVdwV0MhHKMTtvb2ZNvfqkTslKSBw&s",
        bgColor: "bg-green-100", // Excel green
      },
      {
        name: "Power BI",
        level: 85,
        icon: "https://cdn.worldvectorlogo.com/logos/power-bi.svg",
        bgColor: "bg-yellow-100", // Power BI yellow
      },
    ],

    tools: [
      {
        name: "Git",
        level: 92,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        bgColor: "bg-orange-100", // Git orange
      },
      {
        name: "Jupyter Notebook",
        level: 95,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        bgColor: "bg-orange-100", // Jupyter orange
      },
      {
        name: "VS Code",
        level: 98,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        bgColor: "bg-blue-100", // VS Code blue
      },
      {
        name: "Vercel",
        level: 88,
        icon: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png",
        bgColor: "bg-gray-100", // Vercel black/gray
      },
      {
        name: "Figma",
        level: 80,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        bgColor: "bg-purple-100", // Figma purple
      },
      {
        name: "Docker",
        level: 75,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        bgColor: "bg-blue-100", // Docker blue
      },
    ],
  };

  useEffect(() => {
    setIsLoaded(true);

    // Auto-rotate projects
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const skillCategories = [
    { id: "programming", name: "Programming", icon: Code },
    { id: "frontend", name: "Frontend", icon: Palette },
    { id: "backend", name: "Backend", icon: Server },
    { id: "database", name: "Database", icon: Database },
    { id: "analysis", name: "Data Analysis", icon: BarChart2 },
    { id: "tools", name: "Tools & Platforms", icon: Wrench },
  ];

 
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Advanced Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.8 }}
      />

      {/* Dynamic Background Layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
       
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-float-reverse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float delay-2000"></div>

       
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />

        {/* Radial Waves */}
        <div className=" block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-orange-500/10 rounded-full animate-ping-slow"></div>
          <div className="absolute inset-8 border border-red-500/10 rounded-full animate-ping-slow delay-1000"></div>
          <div className="absolute inset-16 border border-blue-500/10 rounded-full animate-ping-slow delay-2000"></div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-1">
      

        {/* === Floating Code Symbols === */}
        <div className=" hidden md:block  absolute top-20 left-10 text-orange-400/30 text-4xl font-mono animate-float-code hover:scale-110 transition-transform">
          {"</>"}
        </div>
        <div className=" block  absolute top-40 right-20 text-blue-400/30 text-3xl font-mono animate-float-code delay-700 hover:scale-110 transition-transform">
          {"{}"}
        </div>
        <div className=" block  absolute bottom-40 left-20 text-green-400/30 text-5xl font-mono animate-float-code delay-1000 hover:scale-110 transition-transform">
          {"[]"}
        </div>
        <div className=" hidden md:block  absolute bottom-20 right-40 text-purple-400/30 text-2xl font-mono animate-float-code delay-1500 hover:scale-110 transition-transform">
          {"()"}
        </div>
        <div className=" block  absolute top-1/3 left-1/3 text-yellow-400/25 text-3xl font-mono animate-pulse-glow delay-800">
          {"console.log()"}
        </div>
        <div className=" block  absolute bottom-1/3 right-1/3 text-pink-400/25 text-2xl font-mono animate-pulse-glow delay-1200">
          {"const"}
        </div>
        <div className="hidden md:block  absolute top-2/3 left-1/5 text-indigo-400/25 text-2xl font-mono animate-pulse-glow delay-1600">
          {"function()"}
        </div>
        <div className=" hidden md:block  absolute top-1/5 right-1/5 text-emerald-400/25 text-3xl font-mono animate-pulse-glow delay-2000">
          {"=>"}
        </div>
        <div className=" block  absolute top-10 right-10 text-red-400/20 text-2xl font-mono animate-float-code delay-[1800ms]">
          {"<script>"}
        </div>
        <div className=" block  absolute bottom-10 left-10 text-cyan-400/20 text-2xl font-mono animate-float-code delay-[2000ms]">
          {"</script>"}
        </div>
        <div className=" block  absolute top-0 left-1/4 text-gray-400/20 text-sm font-mono animate-pulse-glow delay-1000">
          {"$ npm run dev"}
        </div>
        {/* <div className=" hidden md:block  absolute top-[70%] left-[65%] text-white/10 italic text-xs font-mono animate-float-code delay-[2300ms]">
    {"// Optimized for developers"}
  </div> */}
        {/* <div className=" hidden md:block  absolute top-1/2 right-10 text-gray-300/20 text-4xl animate-spin-slow">
    ⚙️
  </div> */}
        <div className=" hidden md:block  absolute top-[45%] left-[60%] text-fuchsia-400/20 text-base font-mono animate-float-code delay-[2400ms]">
          {"O(n log n)"}
        </div>
        {/* <div className=" hidden md:block  absolute top-[30%] left-[10%] text-sky-400/25 text-3xl animate-pulse-glow delay-[2600ms]">
    ⚛️
  </div> */}

        {/* === Glowing Dot Network === */}
        {/* <div className="absolute inset-0">
    {[...Array(25)].map((_, i) => (
      <div
        key={`dot-${i}`}
        className="absolute w-2 h-2 bg-orange-400/40 rounded-full animate-glow-pulse"
        style={{
          top: `${10 + (i * 5.3) % 90}%`,
          left: `${5 + (i * 7.1) % 95}%`,
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
  </div> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <section
          className="min-h-screen flex items-center justify-center py-20 relative mt-10 "
          id="portfolio"
        >
          <div
            className={
              "text-center transition-all duration-1000 " +
              (isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10")
            }
          >
            {/* Enhanced Avatar with Multiple Rings */}
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full animate-spin-slow">
                <div className="w-56 h-56 mx-auto rounded-full border-2 border-dashed border-orange-500/30"></div>
              </div>
              <div className="absolute inset-2 rounded-full animate-spin-reverse">
                <div className="w-52 h-52 mx-auto rounded-full border border-dotted border-red-500/20"></div>
              </div>

              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4  p-1 bg-gradient-to-r from-orange-500 to-red-500 hover:scale-110 transition-transform duration-300">
                <div>
                  <img
                    src={userData.avatar || "/placeholder.svg"}
                    alt={userData.name}
                    className="w-full h-full object-contain cursor-zoom-in"
                  />
                </div>
              </div>

              {/* Enhanced Availability Badge */}
              {userData.availableForHire && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <a href={userData.website} target="_blank"><span>{userData.availabilityText}</span></a>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Name & Title with Typewriter Effect */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl italic leading-tight hover:scale-105 transition-transform duration-300 tracking-wider transform mb-4 font-mono "
              style={{
                // fontFamily:
                //   "'Brush Script MT', 'Dancing Script', 'Lucida Handwriting', cursive",
                background:
                  "linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #c2410c 75%, #9a3412 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "900",
                textShadow: `
         1px 1px 0px #d97706,
         -1px -1px 0px #d97706,
         1px -1px 0px #d97706,
         -1px 1px 0px #d97706,
         2px 2px 4px rgba(0,0,0,0.4)
       `,
              }}
            >
              <span className="inline-block animate-fade-in-up">
                {userData.name}
              </span>
            </h1>

            {/* <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6 transition-all duration-500">
                <span 
                  key={currentWordIndex}
                  className="inline-block animate-pulse"
                >
                  {animatedWords[currentWordIndex]}
                </span>
              </h2>
            </div> */}

            <div>
              <RunningText />
            </div>

            <p
              className="tracking-[2px] text-2xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in delay-300 font-mono"
              
            >
              {userData.tagline}
            </p>

            {/* Enhanced Stats with Hover Effects */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12 max-w-2xl mx-auto font-mono font-bold">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black text-orange-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {userData.stats.experience}
                </div>
                <div className="text-neutral-400 text-sm group-hover:text-orange-300 transition-colors">
                  Years Experience
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black text-blue-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {userData.stats.projects}
                </div>
                <div className="text-neutral-400 text-sm group-hover:text-blue-300 transition-colors">
                  Projects Completed
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black text-green-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {userData.stats.clients}
                </div>
                <div className="text-neutral-400 text-sm group-hover:text-green-300 transition-colors">
                  Happy Clients
                </div>
              </div>
              {/* <div className="text-center group cursor-pointer">
                <div className="text-3xl font-black text-purple-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {userData.stats.coffees}
                </div>
                <div className="text-neutral-400 text-sm group-hover:text-purple-300 transition-colors">
                  Cups of Coffee
                </div>
              </div> */}
            </div>

            {/* Enhanced CTA Buttons with Magnetic Effect */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
              <a
                href="https://www.linkedin.com/in/dipayan-dey-033b38309/"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 shadow-lg sm:shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 relative overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none"
                onMouseEnter={(e) => {
                  if (window.innerWidth >= 640) {
                    e.target.style.transform = "scale(1.05) rotate(1deg)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1) rotate(0deg)";
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10 flex-shrink-0" />
                <span className="relative z-10 whitespace-nowrap">
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-lg sm:rounded-xl"></div>
              </a>

              <a
                href={userData.resumeUrl}
                download
                className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10 relative w-full sm:w-auto max-w-xs sm:max-w-none"
               
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5  transition-transform duration-300 flex-shrink-0" />
                <span className="whitespace-nowrap">Download Resume</span>
              </a>
            </div>

            {/* Enhanced Contact Info with Hover Effects */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400">
              <div className="flex items-center space-x-2 hover:text-orange-400 transition-colors cursor-pointer group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{userData.location}</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-green-400 transition-colors cursor-pointer group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{userData.phone}</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className=" " id="about">
          <div
            className={
              "transition-all duration-1000 delay-300 " +
              (isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-2">
              <h2
                className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-mono"
                // style={{
                //   fontFamily:
                //     "'Brush Script MT', 'Dancing Script', 'Lucida Handwriting', cursive",
                // }}
              >
                {"<>"} About <span></span>
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Me {"</>"}
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-mono">
                MERN Developer & Data Analyst solving real problems
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p
                  className="text-lg text-neutral-300 leading-relaxed mt-10 text-center md:text-st p-3 md:p-0"
                  style={{ fontFamily: "'Roboto', 'Lobster'" }}
                >
                  {userData.bio}
                </p>

                <div className="flex  justify-center gap-4">
                  {/* <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg hover:bg-neutral-800/50 transition-colors">
                    <Coffee className="w-5 h-5 text-orange-400" />
                    <span className="text-neutral-300">Coffee Enthusiast</span>
                  </div> */}
                  <div className="flex items-center  space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg hover:bg-neutral-800/50 transition-colors">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-neutral-300">
                      Open Source Contributor
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg hover:bg-neutral-800/50 transition-colors">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-neutral-300">Problem Solver</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-6">
                  <a
                    href={userData.social.github}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.linkedin}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.twitter}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-sky-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.website}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-green-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <TbBrandFiverr className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/30 transition-colors">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    <span className="text-neutral-400 ml-4 font-mono text-sm">
                      developer.js
                    </span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-purple-400">
                      const <span className="text-blue-400">developer</span> ={" "}
                      {"{"}
                    </div>
                    <div className="text-neutral-400 ml-4">
                      name:{" "}
                      <span className="text-green-400">'Dipayan Dey'</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      title:{" "}
                      <span className="text-green-400">
                        'Full Stack Developer || Data Analyst'
                      </span>
                      ,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      location:{" "}
                      <span className="text-green-400">
                        '{userData.location}'
                      </span>
                      ,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      available:{" "}
                      <span className="text-orange-400">
                        {userData.availableForHire.toString()}
                      </span>
                      ,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      skills: [<span className="text-green-400">'React'</span>,{" "}
                      <span className="text-green-400">'Node.js'</span>,{" "}
                      <span className="text-green-400">'TypeScript'</span>,{" "}
                      <span className="text-green-400">'Python'</span>,{" "}
                      <span className="text-green-400">'...'</span>
                      ],
                    </div>
                    <div className="text-neutral-400 ml-4">
                      passion:{" "}
                      <span className="text-green-400">
                        'Building amazing things'
                      </span>
                    </div>
                    <div className="text-purple-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20" id="skill">
          <div
            className={
              "transition-all duration-1000 delay-500 " +
              (isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono"
                // style={{
                //   fontFamily:
                //     "'Brush Script MT', 'Dancing Script', 'Lucida Handwriting', cursive",
                // }}
              >
                {"<>"} My{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Skills {"</>"}
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-mono">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            {/* Skill Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveSkillCategory(category.id)}
                  className={
                    " flex gap-2 cursor-pointer px-3 sm:px-4 lg:px-5 border border-neutral-700 py-2 sm:py-2.5 lg:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-sm lg:text-base whitespace-nowrap hover:scale-105 transform " +
                    (activeSkillCategory === category.id
                      ? "cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "cursor-pointer bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400")
                  }
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills[activeSkillCategory].map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`${skill.bgColor} border border-neutral-800 p-2 rounded-xl`}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-6 h-6"
                        />
                      </div>
                      <span className="text-white font-semibold ">
                        {skill.name}
                      </span>
                    </div>

                    <span className="text-orange-400  flex flex-col">
                      {skill.level}%
                      <span className="text-sm text-white text-right right-0">
                        {" "}
                        {skill.level >= 90
                          ? "Expert"
                          : skill.level >= 70
                          ? "Advanced"
                          : "Intermediate"}
                      </span>
                    </span>
                  </div>

                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Project />

        {/* Testimonials Section */}
        {/* <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-900 " +
              (isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Clients{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Say
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Testimonials from satisfied clients and collaborators
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-neutral-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="text-white font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-neutral-400 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <ResumeSection />
        {/* Contact Section */}
        <section className="py-20" id="contact">
          <div
            className={
              "transition-all duration-1000 delay-1100 " +
              (isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Work Together
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
                Ready to bring your ideas to life? Let's discuss your next
                project and create something amazing together.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                  I'm currently{" "}
                  {userData.availableForHire ? "available" : "not available"}{" "}
                  for new projects. Let's discuss how we can work together to
                  achieve your goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <a
                    href="https://wa.me/9239219193" // replace with your WhatsApp number
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105 flex items-center space-x-3"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300"
                    >
                      <path d="M12 .02C5.373.02 0 5.394 0 12.019c0 2.118.552 4.154 1.604 5.963L.05 23.95l6.14-1.536A11.94 11.94 0 0012 24.02c6.627 0 12-5.373 12-12s-5.373-11.998-12-11.998zm0 21.82c-1.872 0-3.693-.492-5.295-1.426l-.379-.225-3.644.911.97-3.553-.245-.374A9.815 9.815 0 012.18 12c0-5.421 4.406-9.82 9.82-9.82 5.42 0 9.82 4.399 9.82 9.82 0 5.414-4.4 9.82-9.82 9.82zm5.428-7.362c-.296-.148-1.754-.867-2.027-.965-.273-.099-.472-.148-.67.148-.197.296-.768.965-.94 1.162-.173.198-.347.223-.643.075-.296-.148-1.25-.461-2.38-1.471-.88-.785-1.474-1.753-1.647-2.05-.173-.296-.018-.456.13-.603.134-.133.296-.347.444-.52.148-.174.197-.296.296-.494.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.242-.58-.487-.501-.67-.51l-.572-.01c-.197 0-.52.074-.793.371s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.197 2.095 3.199 5.077 4.487.71.307 1.263.49 1.694.628.712.227 1.36.195 1.872.118.571-.084 1.754-.718 2.002-1.41.247-.692.247-1.286.173-1.41-.074-.124-.271-.198-.567-.346z" />
                    </svg> */}
                    <FaWhatsapp size={30} />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${userData.phone}`}
                    className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Schedule Call</span>
                  </a>
                </div>

                <div className="flex justify-center items-center space-x-8 text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Flexible Rates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}
