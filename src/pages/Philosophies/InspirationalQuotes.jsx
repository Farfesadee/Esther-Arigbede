import React from "react";

const InspirationalQuotes = () => {
  const bgImg =
    "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80";

  const quotes = [
    {
      text: "Art enables us to find ourselves and lose ourselves at the same time.",
      author: "Thomas Merton",
    },
    {
      text: "Creativity takes courage.",
      author: "Henri Matisse",
    },
    {
      text: "Every artist was first an amateur.",
      author: "Ralph Waldo Emerson",
    },
  ];

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
          Inspirational Quotes
        </h1>

        <p className="mt-3 text-green-200 text-center max-w-2xl">
          A collection of words that inspire creativity, reflection, and personal growth.
        </p>

        <div className="mt-10 grid gap-6 w-full max-w-3xl">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-white"
            >
              <p className="text-lg italic">“{q.text}”</p>
              <p className="mt-2 text-right text-sm text-green-200">— {q.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationalQuotes;
