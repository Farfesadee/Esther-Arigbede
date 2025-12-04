import React from "react";

const IBelieve = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">

          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            I Believe
          </h1>

          <p className="text-green-100 mt-6 leading-8 text-lg">
            I believe that art is a powerful tool for self-expression and 
            communication. Every learner brings unique experiences,
            perspectives, and creativity into the classroom. By nurturing
            artistic expression, I help students develop confidence, curiosity,
            and a deeper understanding of themselves and their world.
          </p>

          <p className="text-green-100 mt-6 leading-8 text-lg">
            I believe that an inclusive art classroom values all voices and 
            encourages students to explore, take risks, and grow through 
            meaningful artistic experiences. Art connects us, empowers us,
            and opens doors to new ideas and possibilities.
          </p>

        </div>

      </div>
    </div>
  );
};

export default IBelieve;
