import { motion } from "framer-motion";

export default function ProjectCard({ image, title, description, tech, demoLink, githubLink }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg border border-cyan-500 w-full max-w-sm flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full aspect-video overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
          <p className="text-white mb-4">{description}</p>
        </div>

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="bg-cyan-200 text-black text-sm px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Live Demo
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
