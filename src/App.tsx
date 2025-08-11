import { Routes, Route, Link } from 'react-router-dom';
import { HomeIcon, UserIcon, CodeBracketIcon, PencilSquareIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import PoemDetail from './pages/PoemDetail';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ComingSoon from './pages/ComingSoon';
import Poetry from './pages/Poetry';
import Contact from './pages/Contact';


function App() {
  const navLinks = [
    { to: "/", label: "Home", Icon: HomeIcon },
    { to: "/about", label: "About", Icon: UserIcon },
    { to: "/projects", label: "Projects", Icon: CodeBracketIcon },
    { to: "/poetry", label: "Poetry", Icon: PencilSquareIcon },
    { to: "/contact", label: "Contact", Icon: EnvelopeIcon },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navbar */}
      <motion.nav
        className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-4 sm:px-6 py-3 flex flex-wrap gap-4 sm:gap-6 items-center justify-center shadow-md"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {navLinks.map(({ to, label, Icon }) => (
          <motion.div
            key={label}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={to}
              className="flex items-center gap-2 hover:text-yellow-300 transition text-sm sm:text-base"
            >
              <Icon className="w-5 h-5" />
              {/* Split label into words for word-by-word animation */}
              {label.split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {word}
                </motion.span>
              ))}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path="/poetry/:id" element={<PoemDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </motion.div>
  );
}

export default App;
