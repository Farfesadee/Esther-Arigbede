import React from "react";

const Experience = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588075592405-851622a4bbb0')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">

          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Experience
          </h1>

          <p className="text-green-100 mt-6 leading-8 text-lg">
            {/* Keep details simple and clean */}
            My experience in Art Education continues to grow through classroom
            engagement, creative exploration, and hands-on learning activities.
            I participate in academic tasks, practical teaching moments, and
            reflective practices that help shape my understanding of effective
            visual arts instruction for diverse learners.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Experience;
