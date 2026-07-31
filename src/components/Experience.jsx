import { motion } from "framer-motion";

const timeline = [
  {
    title: "Masters of Computer Applications",
    org: "RVCE, 2025–2027",
    desc: "Currently Pursuing MCA with a strong foundation in programming, databases, and web technologies.",
  },
  {
    title: "Intern - Python Developer",
    org: "Tech Mahindra Jan/Feb 2025",
    desc: "Developed a full-featured ATM interface using Python, implementing key banking functions and enhancing my skills in programming, UI design, and real-world software development.",
  },
  {
    title: "Bachelor of Computer Applications",
    org: "CAIAS, 2022–2025",
    desc: "Graduated with a BCA degree, holding a solid academic record and a strong foundation in programming, databases, machine learning, and web development.",
  },
  {
    title: "High School",
    org: "Oxford English School - ICSE",
    desc: "Learnt Programming in Java in grade 10th",
  },
];

export default function Experience() {
  return (
    <section
      id="journey"
      className="min-h-screen bg-black text-white px-4 md:px-10 py-20"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
        My Journey
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line: left-aligned on mobile (own column), centered from md up */}
        <div className="absolute top-0 left-4 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-cyan-400 rounded" />

        <div className="space-y-12 md:space-y-20">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } items-start md:items-center w-full pl-12 md:pl-0`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    isLeft ? "md:pr-10" : "md:pl-10"
                  } text-left`}
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-cyan-500">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-cyan-300 mb-1">{item.org}</p>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>

                {/* Timeline Dot: left-aligned on mobile, centered on md+ */}
                <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-black z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
