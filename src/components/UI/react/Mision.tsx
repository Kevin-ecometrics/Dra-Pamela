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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mb-8 px-4"
        aria-label="Mission Section"
      >
        {mission.map((item, index) => (
          <div
            key={index}
            className={`${item.background} shadow-lg px-6 py-8 w-[288px] max-w-sm min-h-[460px] flex flex-col justify-start items-center transition-all duration-300 hover:scale-[1.02]`}
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
