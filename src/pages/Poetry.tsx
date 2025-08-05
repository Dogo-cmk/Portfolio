import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const poems = [
  {
    id: 1,
    title: "All said",
    content: `Hey God, can we talk?
Stop whatever the f*** you're doing and listen.
Called a lot of times, but you were always busy...`,
  },
  {
    id: 2,
    title: "Anxiety",
    content: `I just realized I have anxiety, maybe it's because I overthink...`,
  },
  {
    id: 3,
    title: "And Why",
    content: `I wish I could numb this pain
I thought by now I wouldn't complain
Lost my heart, but kept the veins`,
  },
  {
    id: 4,
    title: "Broken Hearts",
    content: `Before I start, I just wanna say
I'm glad you're happy.
The same can't be said for me
'Cause I am acting...`,
  },
  {
    id: 5,
    title: "Closure Without Healing",
    content: `I feel like I am at a standstill
And I have no one to tell me I am Okay
So I am stuck with the thought in my head that never go away`,
  },
  {
    id: 6,
    title: "Complicated",
    content: `I know I'm complicated, smile one moment, sad the next
Sorry I left you waiting, my heart's been aching
No one broke it, 'cause I know that's what y'all been saying`,
  },
  {
    id: 7,
    title: "Does God Feel Human",
    content: `I don't believe, but I believe
Because that's how they raised me
But there's one thing I believe in
And I'm going to say it with the part of me that actually believes
So here's what I believe:`,
  },
  {
    id: 8,
    title: "Does God Feel Human 2",
    content: `Hey God, it's me again
I actually ain't surprised you didn't pick up, went straight to voicemail
I am calling you cause I need someone to talk to`,
  },
  {
    id: 9,
    title: "Family",
    content: `Hey mom I need you
But why do you always make it feel I disturbing you
Trying to be better for you so I fit into society
But it's hard cause I have to deal with the fact of you leaving me
I hate that I took the worse parts of you`,
  },
  {
    id: 10,
    title: "From Sleepless Night To Sleepless Night",
    content: `I don't sleep cause when I do, 9 out of 10 dreams are dreams of you
So I just stay awake and try to avoid you
I know I shouldn't do it but I still do it`,
  },
  {
    id: 11,
    title: "Life's Thoughts",
    content: `I tried to talk with a phrase, then I found out it didn't work,
So I stopped. Guess you can say it's the end of a phase.
Try not to listen to the words my demons say,
Remember the times my demons and I used to play.
Now all they make me do is stand in the rain,`,
  },
  {
    id: 12,
    title: "Lonely",
    content: `Does anyone feel like me? Show a hand
Don't really need a lot, just wanna find my peace
Cause I need another way without sleep
Why you looking confused like you don't know what's up?`,
  },
  {
    id: 13,
    title: "Lonely But Never Alone",
    content: `Stuck in my head, makes me feel alone
Maybe the problems I have shouldn't have been told
Cause now I see everyone I shared them with go
Starting to think I should just be quiet, cause everyone gives up`,
  },
  {
    id: 14,
    title: "Never Left",
    content: `Feel like I am loosing myself again
Every morning I stare at the mirror and I don't see my reflection anymore
All I see is a kid trapped in his own thoughts begging for a way out with the keys in his hands
And that's when I start to hear the voices again`,
  },
];

export default function Poetry() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-indigo-700 mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Poetry
      </motion.h1>

      <div className="space-y-10 max-w-3xl mx-auto">
        {poems.map((poem) => (
          <motion.article
            key={poem.id}
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-2xl font-semibold text-indigo-600 mb-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              {poem.title}
            </motion.h2>

            <motion.p
              className="text-gray-700 leading-relaxed whitespace-pre-line"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {poem.content.length > 159
                ? poem.content.slice(0, 159) + "..."
                : poem.content}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Link
                to={`/poetry/${poem.id}`}
                className="mt-4 inline-block text-sm text-indigo-500 hover:underline"
              >
                Read more →
              </Link>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
