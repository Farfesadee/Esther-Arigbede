import React from "react";
import bgImg from "../../assets/reconciliation-bg.jpg"; // your nature background

const JourneyReconciliation = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 py-12">
        
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl text-white mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 drop-shadow">
            Journey Towards Reconciliation
          </h1>

          <div className="space-y-5 text-green-100 leading-relaxed text-center">
            <p>
              My journey toward reconciliation has been one of learning, listening, and
              unlearning. Through my studies, I have developed a deeper understanding of
              Indigenous histories, cultures, and the impact of colonialism.
            </p>

            <p>
              Art has become a meaningful way for me to connect with reconciliation work.
              By engaging with visual storytelling, I have learned to honour diverse voices
              and reflect on how art education can support healing and understanding.
            </p>

            <p>
              As a future educator, I am committed to creating learning spaces where all
              students feel valued, respected, and represented. Reconciliation is an ongoing
              process — one that requires humility, empathy, and continuous growth.
            </p>
          </div>
        </div>

        {/* Optional image space (add if needed later) */}
      </div>
    </div>
  );
};

export default JourneyReconciliation;
