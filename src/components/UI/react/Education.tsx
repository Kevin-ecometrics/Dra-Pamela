import React from "react";

interface EducationItem {
  date: string;
  title: string;
  image: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 place-items-center">
      {education.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-80">
          <h1 className="font-prata text-xl text-black mb-4">{item.date}</h1>
          <h1 className="font-poppins text-md font-light text-center">
            {item.title}
          </h1>
          <img
            src={item.image}
            alt="education"
            className="hover:scale-125 mt-4 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default Education;
