"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { useAppSelector } from "@/store/hooks";

const Timeline = () => {
  const t = useAppSelector((state) => state.language.translations);

  return (
    <section
      id="timeline"
      className="min-h-screen flex  justify-center py-6 md:py-6 2xl:py-8"
    >
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 text-xl md:text-2xl font-bold mb-6"
        >
          {t.experience.title} {">"}_
        </motion.h2>

        <div className="space-y-6">
          {t.experience.experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-teal-950/40 to-cyan-950/40 backdrop-blur-sm border border-teal-700/50 rounded-xl overflow-hidden hover:shadow-2xl hover:transition-shadow duration-300"
            >
              <div className="border-b border-teal-700/50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-400/20 p-2 rounded-lg">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-bold">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 text-sm md:text-base">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="sm:hidden border-b border-teal-700/50 px-6 py-3 flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {exp.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + detailIndex * 0.05,
                      }}
                      className="flex gap-3 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="w-5 h-5 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                      </div>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify">
                        {detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t border-teal-700/50 px-6 py-3 bg-gray-900/30">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="text-cyan-400">●</span>
                  <span>Experience #{exp.id.toString().padStart(2, "0")}</span>
                  <span className="text-gray-700">|</span>
                  <span className="text-purple-400">
                    {exp.details.length} details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
          
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 bg-gradient-to-br from-teal-950/40 to-cyan-950/40 backdrop-blur-sm border border-teal-700/50 rounded-xl overflow-hidden"
        >
          <div className="border-b border-teal-700/50 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <h4 className="text-gray-500">📂 career-journey</h4>
            <div></div>
          </div>

          <div className="p-6 space-y-3">
            <div>
              <span className="text-cyan-400 mr-2">{"➜"}</span>
              <span className="text-purple-400 mr-2">{"~"}</span>
              <span className="text-gray-400">cat experience-summary.txt</span>
            </div>
            <div className="text-gray-400 text-sm">
              <span className="text-green-400">✓</span> Total Experience:{" "}
              {t.experience.experiences.length} positions
            </div>
            <div className="text-gray-400 text-sm">
              <span className="text-cyan-400">→</span> Currently: Software
              Developer @ Intertech
            </div>
            <div className="text-gray-400 text-sm">
              <span className="text-purple-400">⚡</span> Expertise: Full-Stack
              Development, .NET, React, Next.js
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
