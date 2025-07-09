const projects = [
  {
    title: "Task Manager App",
    tech: "React, FastAPI, PostgreSQL",
    description:
      "A full stack task manager with authentication, task filtering, and archive/restore features.",
    link: "https://github.com/yourusername/task-manager-app",
  },
  {
    title: "Employee Management System",
    tech: "Python, FastAPI, Jinja2, SQLite",
    description:
      "Manage employees with CRUD operations, HTML templates, and dynamic data rendering.",
    link: "https://github.com/yourusername/employee-management-system",
  },
  {
    title: "Portfolio Website",
    tech: "React, TailwindCSS",
    description:
      "The site you're viewing now! Built from scratch with animations and particles.",
    link: "https://github.com/yourusername/portfolio",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-cyan-300 mb-2">{project.tech}</p>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-cyan-400 hover:underline"
            >
              View Code →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
    