import React from "react";

interface misionProps {
  title: string;
  background: string;
}

interface Props {
  mision: misionProps[];
}

const Mision: React.FC<Props> = ({ mision }) => {
  return (
    <main className="py-16 container px-16">
      <section className="flex justify-between items-center gap-16">
        {mision.map((mision, index) => (
          <div
            key={index}
            className={`${mision.background} px-8 h-[480px] w-[300px] py-4`}
          >
            <h1 className="font-prata text-5xl text-center text-[#798672] mb-4">
              {mision.title}
            </h1>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Mision;
