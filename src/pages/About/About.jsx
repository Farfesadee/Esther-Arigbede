import React from "react";
import myPhoto from "../../assets/my-photo.jpg"; // if you use a profile image here

const AboutMe = () => {
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

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
          
          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            About Me
          </h1>

          {/* Optional photo */}
          <div className="flex justify-center mt-6">
            <img
              src={myPhoto}
              alt="My Photo"
              className="w-40 h-40 rounded-full object-cover ring-4 ring-green-700 shadow-lg"
            />
          </div>

          <p className="text-green-100 mt-6 leading-8 text-lg">
            {/* Your actual bio text goes here */}
            I am an Art Education student at the University of Regina,
            passionate about creativity, expression, and building meaningful
            learning experiences through visual arts...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
