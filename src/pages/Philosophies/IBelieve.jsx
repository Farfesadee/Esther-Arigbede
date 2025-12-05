import React from "react";

const IBelieve = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">

          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            I Believe
          </h1>

          <div className="mt-6 text-green-100 leading-8 space-y-6 text-lg">

            <p>
              <b>I believe in the power of holistic learning</b>. <br/>
              Education should nurture the
              whole child — socially, emotionally, physically, intellectually, and creatively.
              Learning is more than achieving outcomes; it is the development of identity, curiosity, confidence, and belonging.
            </p>

            <p>
              <b>I believe Early Childhood Education lays the foundation for lifelong
              learning</b>. <br/>
              Young children learn best through play, exploration, imagination, and relationships. I believe early learning environments should be warm, responsive, culturally affirming, and grounded in developmentally appropriate
              practice.
            </p>

            <p>
              <b>I believe in inclusive and responsive teaching</b>. <br/>
              Every child deserves to see themselves reflected in their classroom. I value diversity in language, culture, abilities, and experiences. I believe educators must prioritize equity, representation, and respect for all learners.
            </p>

            <p>
              <b>I believe in creativity and the arts as essential tools for learning</b>. <br/>
              Artistic expression enables children and students to communicate deeply and
              think with imagination and purpose. Across all ages, the arts foster confidence, critical thinking, and emotional understanding.
            </p>

            <p>
              <b>I believe relationships are the heart of education</b>. <br/>
              Students thrive when they feel safe, valued, and supported. I am committed to building genuine connections with learners, families, and communities — relationships rooted in
              empathy, trust, and respect.
            </p>

            <p>
              <b>I believe in inquiry, curiosity, and student voice</b>. <br/>
              Meaningful learning happens when students actively participate in their own learning journey.
              Encouraging questions, problem-solving, and reflection empowers children to
              become independent thinkers.
            </p>

            <p>
              <b>I believe education must prepare students for a changing world</b>. <br/>
              Learners
              need skills such as collaboration, communication, creativity, digital literacy,
              and cultural understanding. Education should help students navigate the world
              with confidence and compassion.
            </p>

            <p>
              <b>I believe educators are lifelong learners</b>. <br/>
              Teaching requires reflection,
              growth, and continuous learning. I am committed to evolving as an educator,
              embracing new ideas, and shaping learning spaces that inspire every child.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IBelieve;
