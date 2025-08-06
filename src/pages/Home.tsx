// Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-4">
        Oluwadogobomi Adelayi
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-6">
        Developer · Poet · Deep Thinker
      </p>
      <p className="max-w-xl text-gray-600 mb-8">
        I build meaningful web experiences and write poetry about life, things I go through,
        and raw unfiltered emotions cleverly written in rhymes.
        Explore my work, my thoughts, and my journey in life.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/projects"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500 transition"
        >
          View Projects
        </Link>
        <Link
          to="/poetry"
          className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50 transition"
        >
          Read Poems
        </Link>
      </div>
    </section>
  );
}

