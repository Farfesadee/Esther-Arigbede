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

        {/* SUMMARY BLOCK */}
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl text-white mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 drop-shadow">
            Field Experiences
          </h1>

          <div className="space-y-5 text-green-100 leading-relaxed">

            <p>
              My field experience taught me powerful lessons about professionalism,
              responsibility, and the everyday realities of teaching. I learned that being 
              professional means showing up prepared, dependable, respectful, and kind. I 
              supported classroom routines, encouraged positive behaviour, and observed how 
              even the smallest actions can influence a child’s day.
            </p>

            <p>
              These experiences strengthened my belief that <span className="text-green-200 font-semibold">
              role modeling is essential in education</span>. Children imitate what they see, so teachers must 
              demonstrate patience, fairness, calmness, and respect at all times. I realized 
              that the best learning happens when educators maintain a warm and composed presence.
            </p>

            <p>
              I gained a deeper understanding of the “invisible work” of teaching—planning, 
              documenting, taking notes, organizing materials, and collaborating with families 
              and staff. Teaching is truly a shared effort built on communication, teamwork, 
              and professionalism.
            </p>

            <p>
              A moment that stood out to me occurred during our field trip to the Regina Public 
              Library. When a student had a tantrum over a computer, the teacher handled the 
              situation with such calm professionalism that it caused no disruption. Within 
              minutes, support arrived, and the situation was resolved smoothly. Watching this 
              reminded me of the kind of teacher I want to become: <span className="text-green-200 font-semibold">
              one who leads with composure, care, and professionalism</span>.
            </p>

            <p>
              This experience also raised important questions for my growth as an educator:  
              How can teachers maintain composure during stressful moments?  
              How do you balance strong boundaries with warmth?  
              What strategies can improve communication and documentation?
            </p>

            <p>
              From both my field experience and class lessons, I now understand teacher 
              professionalism as doing your best every day, treating others with respect, 
              and caring for students in responsible, meaningful ways. Professionalism is 
              expressed through daily choices, actions, and interactions.
            </p>

            <p>
              Teacher professionalism matters to me because I want to be a trustworthy, caring, 
              and reflective educator. When teachers act professionally, students feel safe, 
              respected, and ready to learn. My field experience showed me that students learn 
              more from a teacher’s behaviour than from their words. Whether in the classroom, 
              at the library, or during a field trip, professionalism guides good decision-
              making and helps create positive, supportive learning environments.
            </p>

          </div>
        </div>

        {/* IMAGE SECTION */}
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
