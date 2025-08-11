import { motion } from "framer-motion";
import { ClockIcon } from "@heroicons/react/24/outline"; // Using a clock icon

export default function ComingSoon() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Start invisible & slightly down
      animate={{ opacity: 1, y: 0 }} // Fade & slide up
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-center px-4"
    >
      {/* Animated Icon */}
      <motion.div
        animate={{ rotate: [0, 20, -20, 0] }} // Sway left & right
        transition={{ repeat: Infinity, duration: 2 }}
        className="mb-6"
      >
        <ClockIcon className="w-16 h-16 text-indigo-600" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold text-indigo-700 mb-4"
      >
        Coming Soon
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-600 max-w-md mb-8"
      >
        This project is currently under development. Stay tuned — it’s going to be worth the wait!
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        href="/projects"
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Back to Projects
      </motion.a>
    </motion.section>
  );
}
