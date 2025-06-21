import React from "react";

interface EducationItem {
  date: string;
  title: string;
  image: string;
  background: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="bg-[#F8F8F8]">
      <section className="px-4 sm:px-8 md:px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mb-8 px-4">
          {education.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center w-[250px] p-6 transform transition duration-300 hover:scale-[1.03] ${item.background}`}
            >
              <h1 className="font-prata text-lg md:text-xl text-black mb-2 text-center">
                {item.date}
              </h1>
              <h2 className="font-poppins text-sm md:text-base font-light text-center mb-4">
                {item.title}
              </h2>
              <div className="overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt="education"
                  className=" object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>{" "}
      </section>
    </div>
  );
};

export default Education;
