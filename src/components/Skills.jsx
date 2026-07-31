import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt,
  FaGithub, FaDatabase
} from "react-icons/fa";
import {
  SiFastapi, SiFramer, SiPostgresql, SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { motion } from "framer-motion";

// Note: icon size is set to "1em" and scaled via the wrapping div's
// text-3xl/sm:text-4xl classes, so icons shrink gracefully on small screens
// instead of overflowing a 2-column mobile grid.
const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML", icon: <FaHtml5 size="1em" color="#e34c26" /> },
      { name: "CSS", icon: <FaCss3Alt size="1em" color="#264de4" /> },
      { name: "JavaScript", icon: <FaJs size="1em" color="#f0db4f" /> },
      { name: "Python", icon: <FaPython size="1em" color="#306998" /> },
      { name: "SQL", icon: <FaDatabase size="1em" color="#336791" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "FastAPI", icon: <SiFastapi size="1em" color="#009688" /> },
      { name: "ReactJS", icon: <FaReact size="1em" color="#F44250" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size="1em" color="#336791" /> },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size="1em" color="#f1502f" /> },
      { name: "GitHub", icon: <FaGithub size="1em" color="#ffffff" /> },
      { name: "VS Code", icon: <VscCode size="1em" color="#0078d7" /> },
      { name: "Swagger", icon: <SiFramer size="1em" color="#009688" /> },
      { name: "Postman", icon: <SiPostman size="1em" color="#FF6C37" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-4 sm:px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">Skills</h2>

      <div className="grid gap-12 sm:gap-16 w-full max-w-5xl">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-left mb-6">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6 sm:gap-8 justify-items-start">
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 sm:gap-3 text-3xl sm:text-4xl hover:scale-105 transition-transform"
                >
                  {skill.icon}
                  <span className="text-sm sm:text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
