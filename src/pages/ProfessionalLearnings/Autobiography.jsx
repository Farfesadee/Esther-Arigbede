import React from "react";
import img1 from "../../assets/autobiography.jpg"; // your autobiography image

const Autobiography = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500534314209-a26db0f5a59a?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content wrapper */}
      <div className="relative z-10 flex w-full min-h-screen">

        {/* LEFT — IMAGE */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <div className="w-96 h-96 rounded-2xl overflow-hidden border-4 border-green-700 shadow-2xl">
            <img
              src={img1}
              alt="Autobiography"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT — TEXT */}
        <div className="w-1/2 flex flex-col justify-center px-12 py-20 text-white space-y-6">

          <h1 className="text-4xl font-bold drop-shadow-lg">
            Autobiography
          </h1>

          <p className="text-green-100 text-lg leading-relaxed">
            My story is rooted in creativity, curiosity, and a growing passion for 
            art education. Throughout my journey, I have discovered how the arts can 
            shape identity, build community, and inspire deep reflection.
          </p>

          <p className="text-green-100 text-lg leading-relaxed">
            My experiences, both personal and academic, have helped me understand 
            the importance of expression whether through painting, drawing, storytelling, or simply observing the world with intention.
          </p>

          <p className="text-green-100 text-lg leading-relaxed">
            As I continue my path as an educator, I strive to create learning spaces 
            where creativity is celebrated, every voice matters, and students feel 
            empowered to explore who they are. Art has shaped my journey, and it 
            continues to guide the way I see, teach, and connect with others.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Autobiography;
