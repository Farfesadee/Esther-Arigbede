import React from "react";
import img1 from "../../assets/reconciliation1.jpg"; // your reconciliation image

const JourneyReconciliation = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529921879218-f9cc5a3a3439?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex w-full min-h-screen">

        {/* LEFT: TEXT */}
        <div className="w-1/2 flex flex-col justify-center px-12 py-20 text-white space-y-6">

          <h1 className="text-4xl font-bold drop-shadow-lg">
            Journey Towards Truth & Reconciliation
          </h1>

          <p className="text-green-100 text-lg leading-relaxed">
            My journey toward reconciliation has been one of learning, listening, and
            unlearning. Through my studies, I have developed a deeper understanding of
            Indigenous histories, cultures, and the impact of colonialism.
          </p>

          <p className="text-green-100 text-lg leading-relaxed">
            Art has become a meaningful way for me to connect with reconciliation work.
            By engaging with visual storytelling, I have learned to honour diverse voices
            and reflect on how art education can support healing and understanding.
          </p>

          <p className="text-green-100 text-lg leading-relaxed">
            As a future educator, I am committed to creating learning spaces where all
            students feel valued, respected, and represented. Reconciliation is an ongoing
            process — one that requires humility, empathy, and continuous growth.
          </p>

        </div>

        {/* RIGHT: IMAGE */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <div className="w-100 h-100 rounded-2xl overflow-hidden border-4 border-green-700 shadow-2xl">
            <img
              src={img1}
              alt="Reconciliation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default JourneyReconciliation;
