import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileIcon from "./Harshini Profile Pic2 Edited.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20 flex justify-center items-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.img
          src={profileIcon} // ✅ Replace with your image path
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-cyan-500 shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* About Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold mb-6 leading-relaxed text-white relative">
          <p className="ml-44">I'm <span className="text-cyan-400">Harshini Gunturi</span>, a full stack developer</p>
          <p className="ml-16">passionate about building clean, responsive, and dynamic web.</p>
          <p className="text-center">applications.</p>
          </div>


          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m a curious and passionate <strong className="text-white">Full Stack Developer</strong> focused on crafting scalable web applications using modern technologies. I am currently pursuing Masters in Computer Applications. I enjoy solving real-world problems using clean and efficient code.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm skilled in <strong className="text-white">React, FastAPI, Python, HTML, CSS</strong> and love building full-stack projects from the ground up. I’m constantly learning new tools and frameworks to enhance my development workflow.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-white">
            <a
              href="https://github.com/harshini0804"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/harshini-gunturi-225098304/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:harshinigunturi08@gmail.com"
              className="hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
