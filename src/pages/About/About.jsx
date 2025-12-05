import React from "react";
import myPhoto from "../../assets/my-photo.jpg";

const AboutMe = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
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

          {/* Photo */}
          <div className="flex justify-center mt-6">
            <img
              src={myPhoto}
              alt="My Photo"
              className="w-40 h-40 rounded-full object-cover ring-4 ring-green-700 shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="text-green-100 mt-6 leading-8 text-lg space-y-6">

            <p>
              My name is{" "}
              <span className="font-semibold text-green-200">
                Esther Bunmi-Arigbede
              </span>, and I am a passionate emerging educator with a deep love
              for creativity, connection, and learning. I enjoy exploring the world
              through music, cooking, art, and meaningful conversations. These
              interests shape the way I see education — as a space where curiosity
              is nurtured, individuality is celebrated, and learning becomes a joyful
              experience.
            </p>

            <p>
              I believe that every child carries their own unique rhythm, much like a
              song waiting to be discovered. My love for music inspires me to create
              learning environments that feel harmonious, expressive, and welcoming.
              Cooking teaches me patience, creativity, and the beauty of turning simple
              ingredients into something meaningful — a metaphor I often relate to
              teaching and child development.
            </p>

            <p>
              As a student in the Faculty of Education at the{" "}
              <span className="text-green-200">University of Regina</span>, I am
              growing into an educator who values empathy, inclusiveness, and
              hands-on learning. I am especially passionate about Early Childhood
              Education, where imagination, play, and exploration form the foundation
              for lifelong learning.
            </p>

            <p>
              My journey continues to be shaped by the people I meet, the stories I
              hear, and the experiences I gather. I look forward to becoming the kind
              of educator who not only teaches, but also inspires, encourages, and
              empowers every learner who enters my classroom.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
