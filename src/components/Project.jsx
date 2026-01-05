import { useState } from "react";
import { Eye, Github, ExternalLink, ArrowRight, Search, GithubIcon, X } from "lucide-react";
import curiox from "../assets/ProjectImage/FullStack/curiox.png";
import taskflow from "../assets/ProjectImage/FullStack/taskflow.png";
import music from "../assets/ProjectImage/Frontend/music.png";
import ride from "../assets/ProjectImage/Frontend/ride.png";
import todo from "../assets/ProjectImage/Frontend/todo.png";
import vcAssist from "../assets/ProjectImage/Frontend/vcAssist.png";
import portfolio from "../assets/ProjectImage/Frontend/Portfolio.png";
import cafeImg from "../assets/ProjectImage/FullStack/cafe.png";
import NutriScan from "../assets/ProjectImage/FullStack/nutriscanai.png";
export default function Project() {
  //  const ViewProjects =()=>{
  //   alert(`
  //     For Web Projects : ${<a href="https://github.com/Dipayan-Dey"> Web</a>}
  //     `)
  // }
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Full Stack");
  const [show,setShow]=useState(false)

  const projects = [
    {
      id: 1,
      title: "Curiox – E-Learning Platform",
      description:
        "An interactive e-learning website built with the MERN stack, offering video lectures, quizzes, progress tracking, and user authentication. Designed for scalable online education with a smooth and engaging learning experience.",
      image: curiox, // your imported image
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Tailwind CSS",
        "Cloudinary",
        "Multer"
      ],
      liveUrl: "https://curiox.vercel.app",
      githubUrl: "https://github.com/Dipayan-Dey/Curiox-educational-platform",
      // featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "TaskFlow – Task Management Platform",
      description:
        "TaskFlow is a MERN stack-based task management application that enables teams to collaborate efficiently with real-time updates, task tracking, and seamless project organization.",
      image: taskflow, // your imported image
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveUrl: "https://dipayan-task-flow.vercel.app/", // replace with your deployed link
      githubUrl: "https://github.com/Dipayan-Dey/Mern-Stack-TaskFlow", // replace with your repo link
      // featured: true,
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Cafe Management System",
      description:
        "Cafe Management System is a comprehensive MERN stack application designed to streamline cafe operations. It features menu management, order processing, and customer management for efficient service.",
      image: cafeImg, // your imported image
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveUrl: "https://cafe-management-system-puce.vercel.app/", // replace with your deployed link
      githubUrl: "https://github.com/Dipayan-Dey/cafe-management-system", // replace with your repo link
      // featured: true,
      category: "Full Stack",
    },
    {
      id: 4,
      title: "NutriScan AI – Diet Analysis Platform",
      description:
        "NutriScan AI is an innovative diet analysis application that leverages AI to provide personalized nutrition insights. Users can scan food items to receive detailed nutritional information and dietary recommendations. Built with cutting-edge AI technologies, NutriScan AI aims to promote healthier eating habits through data-driven insights.",
      image: NutriScan, // your imported image
      technologies: ["MongoDB", "FastAPI", "React.js", "Tailwind CSS"," Python", "Llama2"],
      liveUrl: "https://nutriscanhq.vercel.app/", // replace with your deployed link
      githubUrl: "https://github.com/Dipayan-Dey/NutriScan-AI", // replace with your repo link
      // featured: true,
      category: "Full Stack",
    },
    {
  id: 3,
  title: "Music Player – Web App",
  description:
    "A sleek and responsive music player built with modern web technologies. Features include play/pause, next/previous track, volume control, and playlist management for a smooth listening experience.",
  image: music, // your imported image
  technologies: ["HTML", "CSS", "JavaScript"],
  liveUrl: "https://dipayan-dey.github.io/IntermediateProject/", // replace with your deployed link
  githubUrl: "https://github.com/Dipayan-Dey/IntermediateProject", // replace with your repo link
  // featured: false,
  category: "Frontend",
}
,
    {
  id: 4,
  title: "Ride Booking Website",
  description:
    "DreamRideWithSubho is a modern and responsive ride booking website frontend built with React and Tailwind CSS. It offers a smooth UI, intuitive navigation, and a clean design for booking rides effortlessly.",
  image: ride, // your imported image
  technologies: ["React.js", "Tailwind CSS"],
  liveUrl: "https://dreamridewithsubho.vercel.app/", // replace with your deployed link
  githubUrl: "https://github.com/Dipayan-Dey/subhajit-blog-profile-frontend", // replace with your repo link
  // featured: true,
  category: "Frontend",
},
{
  id: 5,
  title: "Virtual Assistant Alexa",
  description:
    "A voice-enabled virtual assistant built with HTML, CSS, and JavaScript. It can process basic voice commands, respond with actions, and provide an interactive user experience directly in the browser.",
  image: vcAssist, // your imported image
  technologies: ["HTML", "CSS", "JavaScript"],
  liveUrl: "https://dipayan-dey.github.io/virtual-ai-assistant/", // replace with your deployed link
  githubUrl: "https://github.com/Dipayan-Dey/virtual-ai-assistant", // replace with your repo link
  // featured: false,
  category: "Frontend",
},
{
  id: 6,
  title: "Portfolio Website",
  description:
    "A personal portfolio website built with React.js and Tailwind CSS to showcase projects, skills, and experience. It features a clean design, responsive layout, and smooth navigation for an engaging user experience. ",
  image: portfolio, // your imported image
  technologies: ["React.js", "Tailwind CSS"],
  liveUrl: "https://www.dipayandey.site", // replace with your deployed link
  githubUrl: "https://github.com/Dipayan-Dey/React-Portfolio", // replace with your repo link
  // featured: false,
  category: "Frontend",
},
,
{
  id: 6,
  title: "Virat Kohli Performance Analysis",
  description:
    "A detailed performance analysis of Virat Kohli using Power BI. The project includes statistical insights, visualizations, and trends of his batting across formats, leveraging DAX queries for advanced calculations and metrics.",
  image: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-Dashboard-Power-BI/raw/main/Virat%20Kohali/image.png", // your imported image of Power BI dashboard or chart
  technologies: ["Power BI", "DAX", "Data Analysis", "Statistical Analysis"],
  liveUrl: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-Dashboard-Power-BI/raw/main/Virat%20Kohali/image.png", // replace with your published Power BI link
  githubUrl: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-Dashboard-Power-BI/tree/main/Virat%20Kohali", // replace with your repo link
  category: "Power BI",
},
{
  id: 7,
  title: "Superstore Data Analysis",
  description:
    "A comprehensive data analysis of Superstore sales and operations using Power BI. The project features interactive dashboards, key business insights, and trend analysis to help understand sales performance and customer behavior.",
  image: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-Dashboard-Power-BI/raw/main/Store%20Data%20Analysis/dashboard.png",
  technologies: ["Power BI", "Data Analysis", "Visualization", "Business Intelligence", "DAX"],
  liveUrl: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-Dashboard-Power-BI/raw/main/Store%20Data%20Analysis/dashboard.png", // replace with your published Power BI link if available
  githubUrl: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-Dashboard-Power-BI/tree/main/Store%20Data%20Analysis",
  category: "Power BI",
},
{
  id: 8,
  title: "Student Performance Analysis",
  description:
    "A detailed analysis of student performance using Python libraries like NumPy, Pandas, Matplotlib, and Seaborn. This project explores statistical trends, visualizations, and insights to understand factors affecting student outcomes.",
  image: "https://camo.githubusercontent.com/6352380bc1af8851f95386ac473f4f7d7438db8e0c400a40245d765e5917c100/68747470733a2f2f626c6f672e6b696e656d732e636f6d2f636f6e74656e742f696d616765732f323031382f30342f547261636b696e675f486561646c696e652e706e67",
  technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Statistical Analysis"],
  liveUrl: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-End-To-End-Project-Basic-Level-/tree/main/Student%20Performance%20Analysis",
  githubUrl: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-End-To-End-Project-Basic-Level-/tree/main/Student%20Performance%20Analysis",
  category: "Data Analysis",
},
{
  id: 9,
  title: "World Population Analysis",
  description:
    "A comprehensive analysis of world population trends using Python and data visualization techniques. The project provides insights into population growth, distribution, and key statistical patterns across countries and regions.",
  image: "https://miro.medium.com/v2/resize:fit:1200/0*KPd-f6b46ys2f9Q1.jpg",
  technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statistical Analysis", "Data Visualization"],
  liveUrl: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-End-To-End-Project-Basic-Level-/tree/main/World%20Population%20Analysis",
  githubUrl: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-End-To-End-Project-Basic-Level-/tree/main/World%20Population%20Analysis",
  category: "Data Analysis",
}





  ];

  const categories = [
    // "All",
    "Full Stack",
    "Frontend",
    "Data Analysis",
    "Power BI",
    "AI/ML",
    "Web Development",
  ];

  // Filter + Search logic
  const filteredProjects = projects.filter((project) => {
  const searchText = search.toLowerCase();

  
  const matchesCategory =
    project.category.toLowerCase() === filter.toLowerCase();

  // Search check
  const matchesSearch =
    project.title.toLowerCase().includes(searchText) ||
    project.description.toLowerCase().includes(searchText) ||
    project.technologies.some((tech) =>
      tech.toLowerCase().includes(searchText)
    );

  return matchesCategory && matchesSearch;
});


  return (
    <section className="" id="projects">
      <div
        className={
          "transition-all duration-1000 delay-700 " +
          (true ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
        }
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono" >
            {"<>"} Featured{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Projects {"</>"}
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-mono" >
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* 🔹 Search + Filter Controls */}
       <div className="w-full px-4 sm:px-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-8 lg:mb-12">
        
        {/* Search Bar */}
        <div className="relative w-full sm:w-96 lg:w-80 order-2 lg:order-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-neutral-500" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 w-full rounded-lg border border-neutral-700 bg-neutral-900 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm sm:text-base transition-all duration-300"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 order-1 lg:order-2 w-full lg:w-auto">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`cursor-pointer px-3 sm:px-4 lg:px-5 border border-neutral-700 py-2 sm:py-2.5 lg:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-sm lg:text-base whitespace-nowrap hover:scale-105 transform ${
                filter === cat
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent shadow-lg shadow-orange-500/25"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:border-neutral-600 hover:text-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* View All Projects Section */}
      <div className="text-center relative mb-5">
        <a href="https://github.com/Dipayan-Dey" terget="_blank" 
          // onClick={() => setShow(prev => !prev)}
          // onMouseLeave={()=>setShow(prev => !prev)}
          className="cursor-pointer group inline-flex items-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base hover:scale-105 transform"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>

        {/* Overlay Modal */}
        {/* <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl p-4 sm:p-6 w-72 sm:w-80 lg:w-96 transition-all duration-300 z-50 ${
            show
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-2 invisible'
          }`}
        > */}
          {/* Modal Header */}
          {/* <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-white">View Projects</h2>
            <button
              onClick={() => setShow(false)}
              className="text-neutral-400 hover:text-orange-400 transition-colors duration-300 p-1 hover:scale-110 transform"
            >
              <X className="w-5 h-5" />
            </button>
          </div> */}
          
          {/* Modal Content */}
          {/* <div className="flex flex-col gap-3 sm:gap-4">
            <a
              href="https://github.com/Dipayan-Dey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white transition-all duration-300 rounded-xl flex justify-center items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:scale-105 transform group"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6  transition-transform duration-300" />
              <span className="font-medium text-sm sm:text-base">Web Development</span>
            </a>
            
            <a
              href="https://github.com/Mr-Dipayan-Dey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white transition-all duration-300 rounded-xl flex justify-center items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:scale-105 transform group"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6  transition-transform duration-300" />
              <span className="font-medium text-sm sm:text-base">Data Analysis</span>
            </a>
          </div>
        </div> */}

        {/* Click outside to close modal */}
        {/* {show && (
          <div 
            // className="fixed inset-0 z-40 bg-black bg-opacity-20 lg:bg-transparent" 
            // onClick={() => setShow(false)}
          />
        )} */}
      </div>
    </div>

        {/* 🔹 Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-neutral-400 col-span-2">
              No projects found.
            </p>
          )}
        </div>

     

        
      </div>
    </section>
  );

 
}
