import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        className="text-4xl font-bold text-indigo-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Thank You!
      </motion.h1>
      <motion.p
        className="text-gray-700 text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Your message has been sent successfully. I'll get back to you soon!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          to="/"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
