"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Code,
  RefreshCw,
  Users,
  BadgeCheck,
} from "lucide-react";
import { useAppSelector } from "@/store/hooks";

const Home = () => {
  const t = useAppSelector((state) => state.language.translations);

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t.home.skills.items[0].title,
      description: t.home.skills.items[0].description,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t.home.skills.items[1].title,
      description: t.home.skills.items[1].description,
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: t.home.skills.items[2].title,
      description: t.home.skills.items[2].description,
    },
  ];

  const techStack = [
    {
      category: t.home.techStack.categories.frontend,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      ),
      color: "cyan",
      technologies: [
        "React",
        "Next.js",
        "Flutter",
        "Tailwind CSS",
        "TypeScript",
        "Redux Toolkit",
      ],
    },
    {
      category: t.home.techStack.categories.backend,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 11 2-2-2-2" />
          <path d="M11 13h4" />
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        </svg>
      ),
      color: "purple",
      technologies: ["C# / .NET", "Node.js", "Express.js"],
    },
    {
      category: t.home.techStack.categories.database,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      ),
      color: "gray",
      technologies: ["MSSQL", "MongoDB", "MySQL"],
    },
    {
      category: t.home.techStack.categories.tools,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
        </svg>
      ),
      color: "orange",
      technologies: [
        "Git",
        "ELK",
        "Postman",
        "TFS",
        "Jira",
        "Xunit",
        "Jenkins",
        "Kubernates",
      ],
    },
  ];

  return (
    <section
      id="home"
      className="h-content flex mt-16 md:mt-12 xl:mt-16 2xl:mt-12 justify-center pt-6 md:pt-6 2xl:pt-8"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-cyan-400 text-xl md:text-2xl font-bold"
            >
              {t.home.header} {">"}_
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 hover:shadow-2xl hover:transition-shadow duration-300 "
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                    <div className="w-full h-full rounded-lg overflow-hidden bg-gray-800">
                      <img
                        src="https://qqhkuxtkfzejqnldouzo.supabase.co/storage/v1/object/public/portfolio-images/blog-images/WhatsApp%20Image%202026-01-04%20at%2021.59.27.jpeg"
                        alt="Furkan Akif İşlek"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-cyan-400 text-black text-xs font-bold px-2 py-1 rounded">
                    {t.home.profileBadge}
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {t.home.profileTitle}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4">
                    {t.home.profileRole}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                    {t.home.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-400 border border-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-6 text-justify">
                {t.home.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.a
                  href="https://www.linkedin.com/in/furkanislek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.home.linkedinButton}
                </motion.a>
                <motion.a
                  href="/Furkan_Akif_ISLEK.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors border border-gray-700"
                >
                  <Download className="w-4 h-4" />
                  {t.home.cvButton}
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
            >
              <h4 className="text-cyan-400 text-sm font-bold mb-3 uppercase">
                {t.home.sectionTitle}
              </h4>
              <p
                className="text-gray-400 text-sm leading-relaxed text-justify"
                dangerouslySetInnerHTML={{ __html: t.home.sectionDescription1 }}
              />
              <p className="text-gray-400 text-sm leading-relaxed mt-4 text-justify">
                {t.home.sectionDescription2}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-teal-950/40 to-cyan-950/40 backdrop-blur-sm border border-teal-700/50 rounded-xl overflow-hidden"
            >
              <div className=" border-b border-teal-700/50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="text-gray-500">{t.home.terminalFolder}</h4>
                <div></div>
              </div>

              <div className="p-6 space-y-8 flex flex-col gap-0">
                <div>
                  <span className="text-cyan-400 mr-2">{"➜"}</span>
                  <span className="text-purple-400 mr-2">{"~"}</span>
                  <span className="text-gray-400">
                    {t.home.terminalCommand}
                  </span>
                </div>
                <div className="text-gray-400 flex flex-col gap-2">
                  <span className="text-gray-400">
                    {t.home.terminalOutput1}
                  </span>
                  <span className="text-gray-400">
                    {t.home.terminalOutput2}
                  </span>
                </div>
                <div>
                  <span className="text-green-400">
                    {t.home.terminalSuccess}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 mt-4 md:mt-6 xl:mt-8"
          >
            <div className="bg-gradient-to-br from-teal-950/40 to-cyan-950/40 backdrop-blur-sm border border-teal-700/50 rounded-xl overflow-hidden">
              <div className=" border-b border-teal-700/50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-400/20 p-2 rounded-lg">
                    <BadgeCheck className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-cyan-400 text-xl font-bold uppercase">
                    {t.home.skills.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="p-6 space-y-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="text-purple-400 flex-shrink-0 mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h5 className="text-white text-lg font-semibold mb-2">
                        {skill.title}
                      </h5>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-950/40 to-cyan-950/40 backdrop-blur-sm border border-teal-700/50 rounded-xl overflow-hidden">
              <div className=" border-b border-teal-700/50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-400/20 p-2 rounded-lg">
                    <BadgeCheck className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-cyan-400 text-xl font-bold uppercase">
                    {t.home.techStack.title}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-6 space-y-8">
                {techStack.map((tool, index) => {
                  const colorClasses = {
                    cyan: "bg-cyan-500/20 border-cyan-500/30 hover:bg-cyan-500/30",
                    purple:
                      "bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30",
                    gray: "bg-gray-500/20 border-gray-500/30 hover:bg-gray-500/30",
                    orange:
                      "bg-orange-500/20 border-orange-500/30 hover:bg-orange-500/30",
                  };

                  return (
                    <div key={index} className="hover:cursor-default">
                      <h5 className="text-gray-400 text-md font-semibold mb-2 uppercase">
                        {tool.category}
                      </h5>
                      <div className="flex flex-wrap gap-2 px-2 py-1 rounded-md leading-relaxed">
                        {tool.technologies.map((technology, techIndex) => (
                          <div
                            key={techIndex}
                            className={`${
                              colorClasses[
                                tool.color as keyof typeof colorClasses
                              ]
                            } backdrop-blur-sm border px-3 py-2 rounded-md leading-relaxed flex items-center gap-2 transition-colors duration-200`}
                          >
                            <span className="flex-shrink-0">{tool.icon}</span>
                            <span className="text-white text-xs md:text-md">
                              {technology}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
