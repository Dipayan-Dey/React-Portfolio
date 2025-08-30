import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Download,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import CV from "../assets/My_Cv_.pdf"
const ResumeSection = () => {
  const handleDownloadCV = () => {
    
    window.open(CV, "_blank");

  };

  const experience = [
    {
      id: 1,
      title: "Web Developer Intern - CodeClause",
      description:
        "Successfully completed a web development internship at CodeClause, where I built and optimized responsive web applications. Gained hands-on experience with HTML, CSS, JavaScript, and React while working on real-world projects to improve functionality and user experience.",
      link: "https://www.linkedin.com/in/dipayan-dey-033b38309/overlay/experience/2714249463/multiple-media-viewer/?profileId=ACoAAE6n_ScB1Kpue_pGGXOyxZAt_hO8HTu_6rA&treasuryMediaId=1756484777776", // replace with your specific CodeClause project repo if available
      gridClass: "",
    },

    {
      id: 2,
      title: "Java Developer Intern - Easy2Learning Pvt Ltd",
      description:
        "Worked as a Java Developer Intern at Easy2Learning Pvt Ltd, where I gained practical experience in core Java and object-oriented programming concepts. Built and debugged Java applications, implemented features using OOP principles, and worked with exception handling, multithreading, and file handling to strengthen backend development skills.",
      link: "https://www.linkedin.com/in/dipayan-dey-033b38309/overlay/1733253992652/single-media-viewer/?profileId=ACoAAE6n_ScB1Kpue_pGGXOyxZAt_hO8HTu_6rA", // replace with your Easy2Learning project repo if available
      gridClass: "",
    },
    // },
    //     {
    //       id: 3,
    //       title: "Customer Churn Analysis",
    //       description:
    //         "Analyzed customer data to identify churn patterns and key influencing factors. Conducted data cleaning, EDA, and visualized trends in engagement and retention. Suggested strategies to reduce churn.",
    //       link: "https://github.com/Mr-Dipayan-Dey/Data-Analysis-End-To-End-Project-Basic-Level-/tree/main/Customer%20Churn%20Analysis",
    //       gridClass: "md:col-span-2",
    //     },
  ];

  return (
    <section id="resume" className="py-20 bg-transparent" >
      <div className="container mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4 pb-6">
            {"<>"} <span className="text-white">My</span> Resume {"</>"}
          </h2>
          <button
            onClick={handleDownloadCV}
            className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-2xl">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <div className="p-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full">
              <MapPin size={18} className="text-white" />
            </div>
            <span className="text-sm md:text-base">
              Karakberia, Joypur, Bankura, West Bengal, 722154
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <div className="p-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full">
              <Phone size={18} className="text-white" />
            </div>
            <span className="text-sm md:text-base">8389806944</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <div className="p-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full">
              <Mail size={18} className="text-white" />
            </div>
            <span className="text-sm md:text-base">dipayandey49@gmail.com</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Work Experience */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-2xl">💼</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Work Experience
                </h3>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-orange-400 rounded-full"></div>

                <div className="mb-6">
                  <div className="text-orange-400 font-semibold mb-2">
                    Current - Fresher
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    Aspiring Data Analyst & MERN Stack Developer
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 font-medium mb-5">
                    {/* Self-Directed Learning */}
                  </div>

                  {/* JSON Styled Content */}
                  <div className="transition-colors">
                    {/* Top bar with circles */}
                    {/* <div className="flex items-center space-x-2 mb-6">
                      <div className="w-3 h-3 bg-red-500 rounded-full "></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full "></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full "></div>
                      <span className="text-neutral-400 ml-4 font-mono text-sm">
                        resume.js
                      </span>
                    </div> */}

                    {/* Code Content */}
                    <div className="font-mono text-sm space-y-2">
                      <div className="text-purple-400">
                        const <span className="text-blue-400">resume</span> ={" "}
                        {"{"}
                      </div>

                      <div className="text-neutral-400 ml-4">
                        title:{" "}
                        <span className="text-green-400">
                          'Aspiring Data Analyst & MERN Stack Developer'
                        </span>
                        ,
                      </div>

                      <div className="text-neutral-400 ml-4">
                        status:{" "}
                        <span className="text-green-400">
                          'Current - Fresher'
                        </span>
                        ,
                      </div>

                      <div className="text-neutral-400 ml-4">
                        learning:{" "}
                        <span className="text-green-400">
                          'Self-Directed Learning'
                        </span>
                        ,
                      </div>

                      <div className="text-neutral-400 ml-4">skills: {"{"}</div>
                      <div className="ml-8 text-neutral-400">
                        DataAnalysis: [
                        <span className="text-green-400">'Python'</span>,{" "}
                        <span className="text-green-400">'Pandas'</span>,{" "}
                        <span className="text-green-400">'NumPy'</span>,{" "}
                        <span className="text-green-400">'Matplotlib'</span>,{" "}
                        <span className="text-green-400">'Seaborn'</span>],
                      </div>
                      <div className="ml-8 text-neutral-400">
                        MERNStack: [
                        <span className="text-green-400">'React'</span>,{" "}
                        <span className="text-green-400">'Node.js'</span>,{" "}
                        <span className="text-green-400">'Express.js'</span>,{" "}
                        <span className="text-green-400">'MongoDB'</span>]
                      </div>
                      <div className="text-neutral-400 ml-4">{"},"}</div>

                      <div className="text-neutral-400 ml-4">
                        about:{" "}
                        <span className="text-green-400">
                          'Enthusiastic and detail-oriented professional with
                          hands-on experience in both Data Analysis and MERN
                          Stack Development. Passionate about solving real-world
                          problems through data-driven insights and full-stack
                          solutions.'
                        </span>
                      </div>

                      <div className="text-purple-400">{"}"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-2xl">
                  <Briefcase />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Work Experience
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className={`bg-white/5 rounded-xl p-6 border border-white/10 hover:border-orange-400/30 transition-all duration-300 group ${exp.gridClass}`}
                  >
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed  tracking-wide">
                      {exp.description}
                    </p>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
                    >
                      Check Certificate <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">🎓</div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Education
                </h3>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-orange-400 rounded-full"></div>

                <div>
                  <div className="text-orange-400 font-semibold text-sm mb-2">
                    2021 - 2024
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                    Diploma in Computer Science & Technology
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-3">
                    Uluberia Government Polytechnic College
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    Achieved 79% marks. Specialized in software engineering and
                    core studies in programming fundamentals, data structures,
                    algorithms, and web development. Participated in multiple
                    hackathons and coding competitions.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">⚡</div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Skills
                </h3>
              </div>

              <div className="space-y-6">
                {/* Programming Languages */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "Java"].map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Data Analysis & Visualization */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">
                    Data Analysis & Visualization
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Pandas", "NumPy", "Matplotlib", "Seaborn"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* MERN Stack Development */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">
                    MERN Stack Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "Express.js", "React.js", "Node.js"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Jupyter Notebook",
                      "Excel",
                      "GitHub",
                      "Power BI",
                      "VS Code",
                      "Postman",
                      "Figma",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Data Formats */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-sm">
                    Data Formats
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["CSV", "XLSX", "JSON"].map((format) => (
                      <span
                        key={format}
                        className="px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">🌐</div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Languages
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["English", "Bengali", "Hindi"].map((language) => (
                  <div
                    key={language}
                    className="bg-white/5 rounded-lg p-3 text-center border border-white/10"
                  >
                    <span className="text-gray-800 dark:text-white font-medium text-sm">
                      {language}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
