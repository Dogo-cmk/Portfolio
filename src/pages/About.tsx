import { useScroll, useTransform, motion } from "framer-motion";
import { PencilSquareIcon, CodeBracketIcon, LightBulbIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const timelineData = [
  {
    year: "2022",
    title: "Started Writing Poetry",
    description: "Began writing poems in SS3, discovering a voice through words and emotions.",
    image: "/images/poetry.jpg",
  },
  {
    year: "2021 - Present",
    title: "Learning to Code",
    description: "Started diving into web development with React, TypeScript, and Tailwind. Still learning because growth never stops.",
    image: "/images/code.jpg",
  },
  {
    year: "2024 - Present",
    title: "Working on My First Poetry Collection",
    description: "Compiling over 30 poems into a cohesive chapbook exploring pain, faith, and self-discovery.",
    image: "/images/book.jpeg",
  },
  {
    year: "2025",
    title: "Started Building My Portfolio",
    description: "Merging my art and code to create a digital home for my poems and projects.",
    image: "/images/portfolio.jpg",
  },
  {
    year: "June 2025 - Present",
    title: "Internship",
    description: "Improving my skills while working at BrandDrive in solving real world problems.",
    image: "/images/onboardingimage.svg",
  },
];

export default function About() {
  const cards = [
    { icon: PencilSquareIcon, title: "Poet", text: "30+ emotionally raw poems exploring trauma, faith, and identity.", gradient: "from-indigo-500 to-purple-600" },
    { icon: CodeBracketIcon, title: "Developer", text: "React + TypeScript + TailwindCSS developer focused on emotion-driven web experiences.", gradient: "from-green-500 to-emerald-600" },
    { icon: LightBulbIcon, title: "Creative Vision", text: "Blending art and code to turn personal stories into meaningful digital spaces.", gradient: "from-pink-500 to-rose-600" },
    { icon: MapPinIcon, title: "Location", text: "Based in Nigeria, building from the heart.", gradient: "from-orange-500 to-yellow-500" },
  ];

  // Parallax background
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);

  // Animated quote
  const quote = "I write what I can't scream and code what I can't explain.";
  const letters = quote.split("");

  // Animated story sentences
  const storyText =
    "I'm Oluwadogobomi Adelayi — I'm a poet, a wordsmith, developer and so much more. I'm someone who lives in the spaces between words and code, a place only the mind can wander. I write to show the words I can't say, the thoughts that can't be said aloud, the pain felt that can't be explained. Poetry gave me a way to speak when words were stuck in my throat. Technology gave me a way to create when the world felt too big to touch. Today, I use both to explore pain, purpose, and the things we are all too afraid to say out loud.";
  const sentences = storyText.split(". ").map((s) => s + ".");

  return (
    <section className="relative min-h-screen text-gray-800 overflow-hidden">
      {/* Parallax gradient background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      />

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          {/* Heading */}
          <motion.h1
            className="text-4xl font-bold text-indigo-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About Me
          </motion.h1>

          {/* Animated Quote */}
          <motion.blockquote className="italic text-lg text-gray-600 border-l-4 border-indigo-300 pl-4 leading-relaxed">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.blockquote>

          {/* Animated Story */}
          <div className="space-y-2">
            {sentences.map((sentence, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-gray-700"
              >
                {sentence}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Animated color-changing wave before highlights */}
        <div className="overflow-hidden">
          <motion.svg
            className="w-full h-16"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.path
              d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,208C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160V320H0Z"
              initial={{ fill: "#EEF2FF" }}
              animate={{ fill: ["#EEF2FF", "#E0E7FF", "#F3E8FF", "#EEF2FF"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/* Highlights Section */}
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className={`rounded-xl shadow p-6 flex flex-col items-start bg-gradient-to-br ${card.gradient} text-white cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-white mb-3" />
                  </motion.div>
                  <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                  <motion.p
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.text}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Animated color-changing wave before timeline */}
        <div className="overflow-hidden rotate-180">
          <motion.svg
            className="w-full h-16"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.path
              d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,208C840,224,960,224,1080,213.3C1200,203,1320,181,1380,170.7L1440,160V320H0Z"
              initial={{ fill: "#F5F3FF" }}
              animate={{ fill: ["#F5F3FF", "#EDE9FE", "#FFF7ED", "#F5F3FF"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        {/* Timeline Section */}
        <div className="space-y-10 max-w-4xl mx-auto px-6 py-12">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-lg h-60"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text Content */}
              <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white">
                <motion.p
                  className="text-sm text-indigo-200 font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.year}
                </motion.p>
                <motion.h3
                  className="text-2xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="mt-2 text-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA Section */}
          <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 mt-20">
            <div className="max-w-3xl mx-auto text-center px-6">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Let’s Build Something Meaningful Together
              </motion.h2>
              <motion.p
                className="text-lg text-indigo-100 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Whether it’s a story told through code or a poem written in ink, I’d love to create with you.
              </motion.p>

              <div className="flex justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/contact"
                    className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-100 transition"
                  >
                    Contact Me
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/poetry"
                    className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition"
                  >
                    Read My Poetry
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
      </div>
    </section>
  );
}

