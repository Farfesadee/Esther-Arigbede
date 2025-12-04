import React from "react";

const Autobiography = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80";

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
          
          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Autobiography
          </h1>

          <p className="text-green-100 mt-6 leading-8 text-lg">
            My journey in Art Education is shaped by meaningful experiences,
            cultural influences, and a genuine passion for creativity. Growing
            up, I discovered that art was more than a subject—it was a language
            through which I could express emotions, ideas, and perspectives that
            words could not capture.
          </p>

          <p className="text-green-100 mt-6 leading-8 text-lg">
            As I continue my studies at the University of Regina, I am learning
            to embrace new methods of teaching, value diverse artistic voices,
            and create inclusive spaces for students. My story is one of growth,
            exploration, and a deep commitment to helping others experience the
            transformative power of art.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Autobiography;
