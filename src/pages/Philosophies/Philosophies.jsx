import React from "react";

const Philosophies = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20 space-y-8">

          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Educational Philosophies
          </h1>

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-green-200 mb-3">
              My Philosophy of Education
            </h2>
            <p className="text-green-100 leading-7 text-lg">
              I believe that education should be a safe and welcoming experience for every learner.
              Children learn best when they feel comfortable, respected, and understood. My goal as
              an educator is to create a classroom where students feel like they belong and where
              their voices matter.
            </p>
          </section>

          {/* Inclusion */}
          <section>
            <h2 className="text-2xl font-semibold text-green-200 mb-3">
              Inclusion
            </h2>
            <p className="text-green-100 leading-7 text-lg">
              Inclusion is at the heart of my teaching. To me, it means making sure every student
              feels valued and supported. I want each child to feel seen—both for who they are and
              who they are becoming. This includes creating a positive environment, encouraging
              kindness, and ensuring that all students have the opportunity to participate and
              succeed.
            </p>
          </section>

          {/* Relationships */}
          <section>
            <h2 className="text-2xl font-semibold text-green-200 mb-3">
              Relationships in Learning
            </h2>
            <p className="text-green-100 leading-7 text-lg">
              Building strong, caring relationships is an important part of how I teach. When
              students know that their teacher believes in them, they are more confident and more
              willing to try new things. I take time to listen, connect, and understand my students
              so that learning becomes meaningful to them.
            </p>
          </section>

          {/* Cultural Responsiveness */}
          <section>
            <h2 className="text-2xl font-semibold text-green-200 mb-3">
              Cultural Responsiveness
            </h2>
            <p className="text-green-100 leading-7 text-lg">
              Every student comes with their own background, identity, and story. I believe it is
              important to honour these differences in the classroom. By including diverse
              perspectives, respecting cultural identities, and creating space for all voices, I hope
              to make learning a place where every child feels respected and represented.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Philosophies;
