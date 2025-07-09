export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
        <p className="text-lg leading-8">
          I'm a passionate Full Stack Developer with a BCA degree, excited about building end-to-end web applications. 
          I enjoy working with modern frameworks like React, FastAPI, and Python, and I love learning how different parts 
          of a system come together to solve real problems.
        </p>
        <p className="text-lg mt-4 leading-8">
          From writing clean frontend components to designing efficient backend APIs, I enjoy every part of the development process. 
          I'm a fast learner and always excited to explore new technologies, libraries, and tools that make development faster and better.
        </p>
      </div>
    </section>
  );
}
