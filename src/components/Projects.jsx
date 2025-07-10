import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/images/readme-gen.png",
    title: "GitHub Readme Generator",
    description:
      "Easily create and preview GitHub README files with markdown. No signup required.",
    tech: ["React", "Tailwind CSS", "Markdown", "Netlify", "Vite"],
    demoLink: "https://readme-gen-demo-link.com",
    githubLink: "https://github.com/yourusername/readme-generator",
  },
  {
    image: "/images/ats-checker.png",
    title: "ATS Resume Checker",
    description:
      "AI-powered resume analysis tool with keyword matching and improvement tips.",
    tech: ["React", "Tailwind CSS", "OpenAI", "Render", "Framer"],
    demoLink: "https://ats-checker-demo.com",
    githubLink: "https://github.com/yourusername/ats-checker",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12">Projects</h2>

      <div className="flex flex-wrap gap-10 justify-center">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
