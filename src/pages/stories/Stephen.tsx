import { Link } from "react-router-dom";
export default function AlexStory() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-extrabold text-center">
        Alex’s LSAT Journey
      </h1>

      <p className="mb-4">
        When Alex started with Elemental Prep he was scoring a 158 on timed
        practice tests…
      </p>

      {/* add more narrative sections, images, quotes, etc. */}

      <div className="mt-12 text-center">
        <a
          href="/student-stories"
          className="text-sky-600 hover:text-sky-800 underline"
        >
          ← Back to Student Stories
        </a>
      </div>
    </main>
  );
}