// import { motion } from "framer-motion";

// export default function ProjectCard({ image, title, description, tech, demoLink, githubLink }) {
//   return (
//     <motion.div
//       className="bg-gray-800 rounded-lg shadow-lg shadow-lg border border-cyan-500 w-[380px] h-[500px] flex flex-col overflow-hidden"
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Top: Project Image */}
//       <motion.img
//         src={image}
//         alt={title}
//         className="w-full h-64 object-cover rounded-t-xl"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.3 }}
//       />

//       {/* Bottom: Content */}
//       <div className="p-5 flex flex-col justify-between flex-grow">
//         <div>
//           <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
//           <p className="text-white mb-4">{description}</p>
//         </div>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {tech.map((item, idx) => (
//             <span
//               key={idx}
//               className="bg-cyan-200 text-black text-sm px-3 py-1 rounded-full"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* <div className="flex gap-3">
//           <a
//             href={demoLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//           >
//             Live Demo
//           </a>
//           <a
//             href={githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-cyan-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
//           >
//             GitHub
//           </a>
//         </div> */}
//       </div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

export default function ProjectCard({ image, title, description, tech, demoLink, githubLink }) {
  return (
    <motion.div
      // No changes here
      className="bg-gray-800 rounded-lg shadow-lg border border-cyan-500 w-full max-w-sm sm:max-w-none sm:w-[calc(50%-1rem)] lg:w-96 flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* --- CHANGES START HERE --- */}
      {/* 1. Added a wrapper div for the image */}
      <div className="w-full aspect-video overflow-hidden"> 
        {/*
          - 'aspect-video' sets a 16:9 aspect ratio. You can also use others like 'aspect-square' or custom ones like 'aspect-[4/3]'.
          - 'overflow-hidden' is important to contain the image.
        */}
        <motion.img
          src={image}
          alt={title}
          // 2. Image now fills the wrapper div instead of having a fixed height
          className="w-full h-full object-cover" 
          whileHover={{ scale: 1.05 }} // Increased scale slightly for a better effect
          transition={{ duration: 0.3 }}
        />
      </div>
      {/* --- CHANGES END HERE --- */}

      {/* Bottom: Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
          <p className="text-white mb-4">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-4"> {/* Added mt-auto and pt-4 for better spacing */}
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="bg-cyan-200 text-black text-sm px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}