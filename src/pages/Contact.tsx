import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleHover = () => {
    if (!name || !email) {
      // Pick random positions to move
      const randomX = Math.floor(Math.random() * 200) - 100; // range -100 to +100
      const randomY = Math.floor(Math.random() * 120) - 60;  // range -60 to +60
      setX(randomX);
      setY(randomY);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    alert("Form submitted!");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Contact Me</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 relative h-96"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>

          {/* Escaping Motion Button */}
          <motion.button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition absolute"
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 120 }}
            onMouseEnter={handleHover}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
