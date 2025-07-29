"use client";
import { FC } from "react";
import { motion } from "framer-motion";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "The Adventure Buddy",
    role: "Frontend Developer",
    duration: "July 2024 - October 2024",
    description: "Built responsive UIs using React, Tailwind, and TypeScript.",
    tech: ["React", "Tailwind", "TypeScript", "Framer Motion"],
  },

];

const ExperienceSection: FC = () => {
  return (
    <section className="py-20  ">
      <div className="flex justify-center items-center bg-black text-white h-[100px] mb-20">
        <h2 className="text-4xl font-bold ">Experience</h2>
      </div>
      <div className="space-y-10 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f5] p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-lg"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-sm opacity-70">{exp.duration}</span>
            </div>
            <p className="text-xl font-medium mt-1 text-[#3778C2] leading-6">{exp.company}</p>
            <p className="mt-4 tracking-tight">{exp.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[#3778C2] font-medium rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
