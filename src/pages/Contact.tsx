import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleHover = () => {
    if (!name || !email || !message) {
      const randomX = Math.floor(Math.random() * 200) - 100;
      const randomY = Math.floor(Math.random() * 120) - 60;
      setX(randomX);
      setY(randomY);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6 text-center sm:text-left">
          Contact Me
        </h1>

        {submitted ? (
          <motion.div
            className="bg-white shadow-lg rounded-xl p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Thank You!</h2>
            <p className="text-gray-700">Your message has been sent successfully.</p>
          </motion.div>
        ) : (
          <form
            action="https://formsubmit.co/ajax/dogobomiadelayi@gmail.com"
            method="POST"
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 relative"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = {
                name,
                email,
                message,
                _captcha: "false",
              };

              fetch("https://formsubmit.co/ajax/dogobomiadelayi@gmail.com", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify(formData),
              })
                .then((res) => {
                  if (res.ok) {
                    setSubmitted(true);
                  } else {
                    alert("Something went wrong. Please try again.");
                  }
                })
                .catch(() => alert("Something went wrong."));
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <div className="relative h-12">
              <motion.button
                type="submit"
                className="absolute bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
                animate={{ x, y }}
                transition={{ type: "spring", stiffness: 120 }}
                onMouseEnter={handleHover}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
