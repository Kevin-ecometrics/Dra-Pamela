import React from "react";

interface MissionItem {
  title: string;
  background: string;
}

interface MissionProps {
  mission: MissionItem[];
}

const Mision: React.FC<MissionProps> = ({ mission }) => {
  return (
    <main className="py-16  px-4 sm:px-8 md:px-16">
      <section
        className="flex items-center justify-between gap-8"
        aria-label="Misión"
      >
        {mission.map((item, index) => (
          <div
            key={index}
            className={`${item.background} px-6 py-4 w-full sm:w-[300px] h-[480px] flex items-center justify-center`}
          >
            <h1 className="font-prata text-4xl text-center text-[#798672]">
              {item.title}
            </h1>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Mision;
