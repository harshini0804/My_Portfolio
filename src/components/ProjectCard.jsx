export default function ProjectCard({ image, title, description, tech, demoLink, githubLink }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-md">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}

      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
