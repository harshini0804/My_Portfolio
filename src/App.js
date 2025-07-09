import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";




function App() {
  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Sections */}
     <Navbar />
      <Hero />
      <About />
      <Projects />

      <section id="about" className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-4xl font-semibold">About Me</h2>
      </section>

      <section id="projects" className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h2 className="text-4xl font-semibold">Projects</h2>
      </section>

      <section id="contact" className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-4xl font-semibold">Contact</h2>
      </section>
    </div>
  );
}

export default App;