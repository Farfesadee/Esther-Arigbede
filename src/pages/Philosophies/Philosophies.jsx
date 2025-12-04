import React from "react";

const Philosophies = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">

          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Educational Philosophies
          </h1>

          <p className="text-green-100 mt-6 leading-8 text-lg">
            My educational philosophies guide my approach to Art Education.
            These beliefs shape how I engage with learners, create inclusive
            environments, and encourage students to communicate their ideas
            through artistic expression. Explore my core beliefs and the
            inspirational quotes that influence my teaching journey.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Philosophies;
