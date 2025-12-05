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
            Growing up in a close-knit community in the Mid-Western part of Nigeria shaped 
            my values, identity, and understanding of the world. I was surrounded by culture, 
            stories, and relationships that gradually inspired my passion for education. My 
            journey toward becoming a teacher was not a single event, but a collection of 
            experiences that revealed the transformative power of learning.
          </p>

          {/* <p className="text-green-100 text-lg leading-relaxed">
            One of the most defining influences in my life was my mathematics teacher, 
            <span className="font-semibold text-green-200"> Mr. Olajinre</span>, whose patience, 
            creativity, and student-centered approach changed how I saw learning. His classroom 
            made math enjoyable and accessible, and his dedication helped me understand how 
            powerful inclusive teaching can be. My own struggles with math strengthened my 
            resilience and deepened my belief in differentiated instruction—meeting students 
            where they are and helping them grow confidently.
          </p> */}

          <p className="text-green-100 text-lg leading-relaxed">
            My passion for teaching continued to grow when I volunteered as a peer mentor for 
            elementary learners. Supporting students from underserved communities showed me the 
            importance of equity, belonging, and representation in education. Seeing a shy student 
            gradually gain confidence reminded me that teaching is not only academic—it is deeply 
            relational and rooted in empathy.
          </p>

          <p className="text-green-100 text-lg leading-relaxed">
            These experiences shaped my belief that education should inspire curiosity, foster 
            resilience, and value every learner’s voice. As I continue my journey as an educator, 
            I hope to create learning spaces where students feel seen, empowered, and supported. 
            My story is still unfolding, but it is built on a foundation of passion, reflection, 
            and a commitment to transformative teaching.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Autobiography;
