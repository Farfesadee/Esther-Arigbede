import React from "react";

const Education = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519682337058-a94d519337bc')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
          
          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Education
          </h1>

          <p className="text-green-100 mt-6 leading-8 text-lg">
            {/* Keep this simple as you requested */}
            My educational journey includes foundational studies in Art
            Education, focusing on creativity, visual expression, and
            pedagogical approaches for young learners. I continue to build my
            skills in visual arts, classroom engagement, and inclusive learning
            practices at the University of Regina.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Education;
