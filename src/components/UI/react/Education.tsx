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
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-16 ">
      {education.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-96">
          <h1 className="font-prata text-xl text-black mb-4">{item.date}</h1>
          <h1 className="font-poppins text-md font-light">{item.title}</h1>
          <img
            src={item.image}
            alt="education"
            className="hover:scale-125 mt-4"
          />
        </div>
      ))}
    </div>
  );
};

export default Education;
