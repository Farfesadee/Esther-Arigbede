import React from "react";
import myPhoto from "../../assets/my-photo.jpg";

const Home = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content Layout */}
      <div className="relative z-10 flex w-full min-h-screen">

        {/* LEFT HALF — IMAGE */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <div className="w-100 h-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-green-700">
            <img
              src={myPhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT HALF — TEXT */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Welcome to My Portfolio
          </h1>

          <p className="mt-6 text-lg md:text-xl text-green-200 max-w-lg drop-shadow leading-relaxed">
            Welcome to my learning journey a space where creativity, curiosity,
            and early childhood education come together. As a student in Early Childhood
            Education at the University of Regina, I am passionate about understanding how
            young children learn, express themselves, and make meaning of the world around them.
            <br /><br />
            This portfolio reflects who I am becoming as an educator: someone who values
            imagination, celebrates diversity, and believes in nurturing children’s natural
            sense of wonder. Through play, art, storytelling, and meaningful relationships,
            I strive to support each child’s growth in a warm, inclusive, and engaging environment.
            You’re invited to explore my work, my experiences, and the moments shaping the teacher
            I aspire to be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
