import React from "react";

const InspirationalQuotes = () => {
  const quotes = [
    {
      text: "Education is not the filling of a pail, but the lighting of a fire.",
      author: "William Butler Yeats",
    },
    {
      text: "Play is the highest form of research.",
      author: "Albert Einstein",
      note: "A reminder of the power of play in early childhood education.",
    },
    {
      text: "Children learn as they play. Most importantly, in play children learn how to learn.",
      author: "O. Fred Donaldson",
    },
    {
      text: "Every child is a different kind of flower, and all together they make this world a beautiful garden.",
      author: "Unknown",
    },
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
    },
    {
      text: "What the best and wisest parent wants for their child, that must the community want for all its children.",
      author: "John Dewey",
    },
    {
      text: "When we give children choice, voice, and agency, we prepare them not just for school, but for life.",
      author: "Unknown",
      note: "Reflects modern views on child-centered learning.",
    },
    {
      text: "The future of the world is in my classroom today.",
      author: "Ivan Welton Fitzwater",
    },
    {
      text: "It is easier to build strong children than to repair broken men.",
      author: "Frederick Douglass",
    },
    {
      text: "The environment must be rich in motives which lend interest to activity and invite the child to conduct his own experiences.",
      author: "Maria Montessori",
    },
  ];

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">

          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg mb-8">
            Inspirational Quotes
          </h1>

          <p className="text-green-100 text-center text-lg mb-10 max-w-3xl mx-auto">
            A collection of quotes that inspire my philosophy of teaching, learning,
            and creativity — spanning both Early Childhood Education and education at large.
          </p>

          <div className="space-y-6">
            {quotes.map((q, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-sm shadow-lg"
              >
                <p className="text-white text-xl italic">“{q.text}”</p>
                <p className="text-green-200 mt-2 text-right">— {q.author}</p>
                {q.note && (
                  <p className="text-green-300 text-sm mt-1 italic">{q.note}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default InspirationalQuotes;
