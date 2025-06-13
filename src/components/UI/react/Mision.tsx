import React from "react";

interface MissionItem {
  title: string;
  background: string;
  description: string;
  textcolor: string;
}

interface MissionProps {
  mission: MissionItem[];
}

const Mision: React.FC<MissionProps> = ({ mission }) => {
  return (
    <main className="py-16 px-4 sm:px-8 md:px-16">
      <section
        className="flex flex-wrap justify-center items-start gap-12"
        aria-label="Mission Section"
      >
        {mission.map((item, index) => (
          <div
            key={index}
            className={`${item.background} shadow-lg px-6 py-8 w-full max-w-sm min-h-[460px] flex flex-col justify-start items-center transition-all duration-300 hover:scale-[1.02]`}
          >
            <h1
              className={`font-prata text-5xl text-center ${item.textcolor} mb-4`}
            >
              {item.title}
            </h1>
            <p className="text-base text-center text-black font-light leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Mision;
