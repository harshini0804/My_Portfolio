import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt,
  FaGithub, FaBootstrap, FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss, SiFastapi, SiFramer,
  SiMongodb, SiPostgresql, SiMongoose, SiOracle, SiNodedotjs, SiNextdotjs, SiReactrouter, SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML", icon: <FaHtml5 size={40} color="#e34c26" /> },
      { name: "CSS", icon: <FaCss3Alt size={40} color="#264de4" /> },
      { name: "JavaScript", icon: <FaJs size={40} color="#f0db4f" /> },
      // { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
      // { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38bdf8" /> },
      // { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7952B3" /> },
      { name: "Python", icon: <FaPython size={40} color="#306998" /> },
      { name: "SQL", icon: <FaDatabase size={40} color="#336791" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "FastAPI", icon: <SiFastapi size={40} color="#009688" /> },
      { name: "ReactJS", icon: <FaReact size={40} color="#F44250" /> },
    ],
  },
  {
    title: "Database",
    skills: [
    //   { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
    //   { name: "Mongoose", icon: <SiMongoose size={40} color="#800000" /> },
    //   { name: "Oracle", icon: <SiOracle size={40} color="#F80000" /> },
      {name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" />,}
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt size={40} color="#f1502f" /> },
      { name: "GitHub", icon: <FaGithub size={40} color="#ffffff" /> },
      { name: "VS Code", icon: <VscCode size={40} color="#0078d7" /> },
      { name: "Swagger", icon: <SiFramer size={40} color="#009688" /> },
      { name: "Postman", icon: <SiPostman size={40} color="#FF6C37" /> },
      { name: "SQL", icon: <FaDatabase size={40} color="#336791" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">Skills</h2>

      <div className="grid gap-16 w-full max-w-5xl">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-start">
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 hover:scale-105 transition-transform"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
