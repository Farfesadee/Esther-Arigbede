import React from "react";
import bgImg from "../../assets/field-bg.jpg"; // your background image
import img1 from "../../assets/field1.jpg";    // your field images
import img2 from "../../assets/field2.jpg";

const FieldExperiences = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-12">

        {/* Text block */}
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl text-white mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 drop-shadow">
            Field Experiences
          </h1>

          <div className="space-y-5 text-green-100 leading-relaxed text-center">
            <p>
              My field experiences allowed me to engage directly with students and teachers,
              gaining practical insight into classroom dynamics, lesson design, and the role
              of creativity in learning.
            </p>

            <p>
              Working in real educational environments helped me understand the importance of
              patience, flexibility, and meaningful student connection. These experiences have
              strengthened my passion for teaching and affirmed my commitment to Art Education.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-12">
          <img
            src={img1}
            alt="Field Experience 1"
            className="w-full h-100 object-cover rounded-xl shadow-lg ring-2 ring-green-700"
          />
          <img
            src={img2}
            alt="Field Experience 2"
            className="w-full h-100 object-cover rounded-xl shadow-lg ring-2 ring-green-700"
          />
        </div>

      </div>
    </div>
  );
};

export default FieldExperiences;
