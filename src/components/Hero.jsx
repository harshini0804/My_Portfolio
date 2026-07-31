import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white text-center px-4 sm:px-6"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Harshini Gunturi
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-semibold mb-6">
        Full Stack Developer
      </h2>
      <p className="text-base sm:text-lg md:text-xl max-w-xl mb-8">
        Passionate about building full stack apps with React, FastAPI, and modern tech. I love turning ideas into real products.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-md font-medium cursor-pointer transition text-center"
        >
          View Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-md font-medium cursor-pointer transition text-center"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
