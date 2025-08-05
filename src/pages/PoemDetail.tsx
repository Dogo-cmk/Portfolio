import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import poems from "./data/poems";

export default function PoemDetail() {
  const { id } = useParams();
  const poem = poems.find((p) => p.id === Number(id));

  if (!poem) {
    return <div className="p-8 text-red-500">Poem not found.</div>;
  }

  const lines = poem.content.split("\n").filter((line) => line.trim() !== "");

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        {/* Title animation */}
        <motion.h1
          className="text-4xl font-winky text-indigo-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {poem.title}
        </motion.h1>

        {/* Animate each line */}
        <div className="space-y-2">
          {lines.map((line, idx) => (
            <motion.p
              key={idx}
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
