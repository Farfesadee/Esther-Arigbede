import React from "react";
import myPhoto from "../../assets/my-photo.jpg";  // your real picture

const Home = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Profile Image */}
        <div className="p-1 rounded-full bg-white/20 backdrop-blur-md shadow-xl">
          <img
            src={myPhoto}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover ring-4 ring-green-700 shadow-lg"
          />
        </div>

        {/* Text */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white drop-shadow-xl text-center">
          Welcome to My Portfolio
        </h1>

        <p className="mt-4 text-lg md:text-xl text-green-200 max-w-xl text-center drop-shadow">
          Exploring creativity, learning, and expression through the world of
          Art Education at the University of Regina.
        </p>
      </div>
    </div>
  );
};

export default Home;
