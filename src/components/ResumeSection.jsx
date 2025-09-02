import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import {
  MapPin,
  Phone,
  Mail,
  Download,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import CV from "../assets/My_Cv_.pdf";
const ResumeSection = () => {
  const handleDownloadCV = () => {
    // Simulated CV download - replace with actual CV file
    // console.log("CV download initiated");
    window.open(CV, "_blank");
  };

  const experience = [
    {
      id: 1,
      title: "Web Developer Intern - CodeClause",
      description:
        "Successfully completed a web development internship at CodeClause, where I built and optimized responsive web applications. Gained hands-on experience with HTML, CSS, JavaScript, and React while working on real-world projects to improve functionality and user experience.",
      link: "https://www.linkedin.com/in/dipayan-dey-033b38309/overlay/experience/2714249463/multiple-media-viewer/?profileId=ACoAAE6n_ScB1Kpue_pGGXOyxZAt_hO8HTu_6rA&treasuryMediaId=1756484777776",
      gridClass: "",
    },
    {
      id: 2,
      title: "Java Developer Intern - Easy2Learning Pvt Ltd",
      description:
        "Worked as a Java Developer Intern at Easy2Learning Pvt Ltd, where I gained practical experience in core Java and object-oriented programming concepts. Built and debugged Java applications, implemented features using OOP principles, and worked with exception handling, multithreading, and file handling to strengthen backend development skills.",
      link: "https://www.linkedin.com/in/dipayan-dey-033b38309/overlay/1733253992652/single-media-viewer/?profileId=ACoAAE6n_ScB1Kpue_pGGXOyxZAt_hO8HTu_6rA",
      gridClass: "",
    },
  ];

  return (
    <section id="resume" className="bg-transparent mt-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4 pb-6"
            style={{
              fontFamily:
                "'Brush Script MT', 'Dancing Script', 'Lucida Handwriting', cursive",
            }}
          >
            {"<>"} <span className="text-white">My</span> Resume {"</>"}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto font-mono mb-8 px-4">
            MERN Stack Developer | Data Analytics Enthusiast
          </p>
          <button
            onClick={handleDownloadCV}
            className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 sm:px-6 py-3 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 bg-white/5 backdrop-blur-sm p-4 sm:p-6 lg:p-8 border border-white/10 rounded-2xl w-full">
          {/* Location */}
          <div className="flex items-start sm:items-center gap-3 w-full md:w-auto">
            <div className="p-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex-shrink-0">
              <MapPin
                size={16}
                className="text-white sm:w-[18px] sm:h-[18px]"
              />
            </div>
            <span className="text-sm sm:text-base break-words leading-relaxed">
              Karakberia, Joypur, Bankura, West Bengal, 722154
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="p-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex-shrink-0">
              <Phone size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
            </div>
            <span className="text-sm sm:text-base">8389806944</span>
          </div>

          {/* Email */}
          <div className="flex items-start sm:items-center gap-3 w-full md:w-auto">
            <div className="p-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex-shrink-0">
              <Mail size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
            </div>
            <span className="text-sm sm:text-base break-all">
              dipayandey49@gmail.com
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Resume Code Editor */}
            <div className="mb-8 lg:mb-12">
              <div className="max-w-full mx-auto">
                {/* Code Editor Window */}
                <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                  {/* Title Bar */}
                  <div className="bg-slate-800 px-4 sm:px-6 py-4 border-b border-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                        <span className="text-slate-400 ml-2 sm:ml-4 font-mono text-xs sm:text-sm">
                          resume.js
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-4 sm:p-6 lg:p-8 bg-slate-900 overflow-x-auto">
                    <div className="font-mono text-xs sm:text-sm lg:text-base leading-relaxed min-w-fit">
                      {/* Line numbers and Code */}
                      <div className="flex">
                        <div
                          className="text-slate-500 select-none mr-4 sm:mr-6 text-right hidden sm:block flex-shrink-0"
                          style={{
                            fontFamily:
                              "'Brush Script MT', 'Dancing Script', 'Lucida Handwriting', cursive",
                          }}
                        >
                          {Array.from({ length: 16 }, (_, i) => (
                            <div key={i + 1} className="leading-6 sm:leading-7">
                              {i + 1}
                            </div>
                          ))}
                        </div>

                        {/* Code */}
                        <div className="flex-1 min-w-0">
                          <div className="leading-6 sm:leading-7">
                            <span className="text-purple-400">const</span>{" "}
                            <span className="text-blue-400">resume</span>{" "}
                            <span className="text-white">=</span>{" "}
                            <span className="text-white">{"{"}</span>
                          </div>

                          <div className="leading-6 sm:leading-7 ml-2 sm:ml-4">
                            <span className="text-slate-300">title:</span>{" "}
                            <span className="text-green-400">
                              <ReactTyped
                                strings={[
                                  "'Aspiring Data Analyst'",
                                  "'MERN Stack Developer'",
                                ]}
                                typeSpeed={80} // typing speed
                                backSpeed={70} // backspace speed
                                loop // infinite loop
                              />
                            </span>
                            <span className="text-white">,</span>
                          </div>

                          <div className="leading-6 sm:leading-7 ml-2 sm:ml-4">
                            <span className="text-slate-300">status:</span>{" "}
                            <span className="text-green-400">
                              'Current - Fresher'
                            </span>
                            <span className="text-white">,</span>
                          </div>

                          <div className="leading-6 sm:leading-7 ml-2 sm:ml-4">
                            <span className="text-slate-300">learning:</span>{" "}
                            <span className="text-green-400">
                              'Self-Directed Learning'
                            </span>
                            <span className="text-white">,</span>
                          </div>

                          <div className="leading-6 sm:leading-7 ml-2 sm:ml-4">
                            <span className="text-slate-300">skills:</span>{" "}
                            <span className="text-white">{"{"}</span>
                          </div>

                          <div className="leading-6 sm:leading-7 ml-4 sm:ml-8">
                            <span className="text-slate-300">
                              DataAnalysis:
                            </span>{" "}
                            <span className="text-white">[</span>
                            <span className="text-green-400">'Python'</span>
                            <span className="text-white">,</span>{" "}
                            <span className="text-green-400">'Pandas'</span>
                            <span className="text-white">,</span>{" "}
                            <span className="text-green-400">'NumPy'</span>
                            <span className="text-white">,</span>{" "}
                            <span className="text-green-400">'Matplotlib'</span>
                            <span className="text-white">,</span>{" "}
                            <span className="text-green-400">'Seaborn'</span>
                            <span className="text-white">],</span>
                          </div>

                          <div className="leading-6 sm:leading-7 ml-4 sm:ml-8">
                            <span className="text-slate-300">MERNStack:</span>{" "}
                            <span className="text-white">[</span>
                            <span className="text-green-400">'React'</span>
                            <span className="text-white">,</span>{" "}
                            <span className="text-green-400">'Node.js'</span>
                            <span className="text-white">,</span>{" "}
                            <span className="text-green-400">'Express.js'</span>
                            <span className="text-white">,</span>{" "}
                            <span className="text-green-400">'MongoDB'</span>
                            <span className="text-white">]</span>
                          </div>

                          <div className="leading-6 sm:leading-7 ml-2 sm:ml-4">
                            <span className="text-white">{"}"}</span>
                            <span className="text-white">,</span>
                          </div>

                          <div className="leading-6 sm:leading-7 ml-2 sm:ml-4">
                            <span className="text-slate-300">about:</span>{" "}
                            <div className="text-green-400 break-words">
                              'Passionate Data Analyst and MERN Stack Developer
                              dedicated to building scalable web applications
                              and deriving actionable insights from data.
                              Committed to learning, problem-solving, and
                              delivering real-world solutions.'
                            </div>
                          </div>

                          <div className="leading-6 sm:leading-7">
                            <span className="text-white">{"}"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Status Bar */}
                  <div className="bg-slate-800 px-4 sm:px-6 py-3 border-t border-slate-700">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <span>JavaScript</span>
                        <span className="hidden sm:inline">UTF-8</span>
                        <span className="hidden sm:inline">LF</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <span className="hidden sm:inline">Ln 16, Col 1</span>
                        <span className="hidden md:inline">Spaces: 2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="text-xl sm:text-2xl">
                  <Briefcase />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Work Experience
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className={`bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 hover:border-orange-400/30 transition-all duration-300 group ${exp.gridClass}`}
                  >
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-orange-400 transition-colors leading-tight">
                      {exp.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed tracking-wide">
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
          <div className="space-y-6 sm:space-y-8">
            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="text-xl sm:text-2xl">🎓</div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Education
                </h3>
              </div>

              <div className="relative pl-4 sm:pl-6">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-orange-400 rounded-full"></div>

                <div>
                  <div className="text-orange-400 font-semibold text-xs sm:text-sm mb-2">
                    2023 - {new Date().getFullYear()}
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-1 text-sm sm:text-base leading-tight">
                    Diploma in Computer Science & Technology
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-sm mb-3">
                    Uluberia Government Polytechnic College
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Achieved 79% marks. Specialized in software engineering and
                    core studies in programming fundamentals, data structures,
                    algorithms, and web development. Participated in multiple
                    hackathons and coding competitions.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="text-xl sm:text-2xl">⚡</div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Skills
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Programming Languages */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 text-xs sm:text-sm">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "Java"].map((lang) => (
                      <span
                        key={lang}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Data Analysis & Visualization */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 text-xs sm:text-sm">
                    Data Analysis & Visualization
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Pandas", "NumPy", "Matplotlib", "Seaborn"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* MERN Stack Development */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 text-xs sm:text-sm">
                    MERN Stack Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "Express.js", "React.js", "Node.js"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 text-xs sm:text-sm">
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
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Data Formats */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 text-xs sm:text-sm">
                    Data Formats
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["CSV", "XLSX", "JSON"].map((format) => (
                      <span
                        key={format}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs rounded-full"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="text-xl sm:text-2xl">🌐</div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Languages
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["English", "Bengali", "Hindi"].map((language) => (
                  <div
                    key={language}
                    className="bg-white/5 rounded-lg p-3 text-center border border-white/10"
                  >
                    <span className="text-gray-800 dark:text-white font-medium text-xs sm:text-sm">
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
