import ProjectCard from "./ProjectCard";
import tasksImg from "../assets/images/tasks.png";
import dbImg from "../assets/images/db1.jpeg";
import mylandingImage from "../assets/images/TaskPilotLanding.png";
import myportfolioImage from "../assets/images/PortfolioLanding.png";
import aiLandingImg from "../assets/images/Landing.png";
import ExpenseTrackerLanding from "../assets/images/ETLanding2.png";

const projects = [
  {
    image: tasksImg,
    title: "SprintFlow — Cloud-Native SaaS Project Management Platform",
    description:
      "A production-grade multi-tenant Kanban SaaS app built with FastAPI and React, deployed on AWS using 9 services (EC2, RDS, S3, CloudFront, SNS, SQS, SES, Lambda, SSM) provisioned via Terraform — featuring async email notifications, AI-powered task refinement, role-based access control, and a fully automated GitHub Actions CI/CD pipeline, all within the AWS free tier.",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Terraform", "AWS", "GitHub Actions"],
    githubLink: "https://github.com/harshini0804/SprintFlow.git",
  },
  {
    image: dbImg,
    title: "CinePulse-Indic: Cross-Linguistic Sentiment Mapping of Pan-Indian Cinema using Multilingual Transformers",
    description:
      "A a Generative AI powered NLP system that performs Aspect-Based Sentiment Analysis on multilingual audience comments for Pan-Indian films, comparing how Hindi and Telugu communities perceive the same film across 6 cinematic dimensions — acting, audio, dubbing, plot, direction, and technical quality.",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Terraform", "AWS", "GitHub Actions"],
    githubLink: "https://github.com/harshini0804/SprintFlow.git",
  },
  {
    image: aiLandingImg,
    title: "ContentCrafter - AI Powered Content Generator",
    description:
      "AI-powered app that generates real-time course content using transformer models, with a React preview, save interface, automating manual content creation, reducing content preparation time and improving content organization.",
    tech: ["FastAPI", "HTML", "CSS", "JavaScript", "ReactJS", "HuggingFace"],
    githubLink: "https://github.com/harshini0804/AI_Course_Quiz_Generator.git",
  },  
  {
    image: mylandingImage,
    title: "TaskPilot - Personal Task Manager",
    description:
      "A task management system with user authentication, task creation, update, deletion, filtering, and status control. Supports marking tasks as completed or archived, with dynamic tables and modal-based task creation.",
    tech: ["FastAPI", "ReactJS", "HTML", "CSS", "JavaScript", "SQLAlchemy", "PostgreSQL"],
    // demoLink: "https://task-manager-app-frontend-y8wy.onrender.com",
    githubLink: "https://github.com/harshini0804/Project-1.git",
  },
  {
    image: myportfolioImage,
    title: "My Portfolio",
    description:
      "A curated collection of my full stack development projects built with modern technologies like React, FastAPI, and Tailwind CSS. Each project showcases my skills in designing, developing, and deploying scalable applications from scratch.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    // Fixed: this previously pointed to Project-1.git (TaskPilot's repo) instead of this portfolio's own repo.
    githubLink: "https://github.com/harshini0804/My_Portfolio",
  },
  
  // {
  //   image: ExpenseTrackerLanding,
  //   title: "SpendWise - Expense Tracker for Personal Finance Management",
  //   description:
  //     "SpendWise is a full-stack expense tracker built with React and FastAPI, designed to empower users with a clear, visual understanding of their finances. The application provides a comprehensive suite of tools, including an interactive dashboard with real-time charts, detailed report generation with CSV export, and a complete system for setting and tracking monthly budgets.",
  //   tech: ["FastAPI", "HTML", "CSS", "JavaScript", "React", "Recharts"],
  //   // TODO: this still points to the same repo as ContentCrafter above — confirm the correct SpendWise repo URL.
  //   githubLink: "https://github.com/harshini0804/AI_Course_Quiz_Generator.git",
  // },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 flex flex-col items-center relative"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 z-10 relative">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 z-10 relative w-full max-w-6xl justify-items-center">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
