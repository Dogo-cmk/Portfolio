// Projects.tsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my poetry and coding projects.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    image: "/images/portfolio-app.jpg",
   
  },
  {
    title: "Poetry App",
    description: "A web app to read, filter, and explore my poetry collections.",
    tech: ["React", "Framer Motion", "Firebase"],
    image: "/images/poetry-app.jpg",
    
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-700 mb-8">Projects</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-indigo-700">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
