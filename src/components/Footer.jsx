import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-sm">© {year} Harshini Gunturi. All rights reserved.</p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/harshini0804"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harshini-gunturi-225098304/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:harshinigunturi08@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer text-sm hover:text-cyan-400 transition-colors"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
