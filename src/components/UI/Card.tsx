import React, { useState } from "react";

// Tipo para manejar tanto strings como ImageMetadata de Astro
type ImageSource =
  | string
  | { src: string; width?: number; height?: number; format?: string };

interface ComponentProps {
  title: string;
  image: ImageSource;
  hoverImage: ImageSource; // Nueva prop para la segunda imagen
  titleImage: string;
  link: string;
  button: string;
  subtitle: string;
}

const HoverImageComponent: React.FC<ComponentProps> = ({
  title,
  image,
  hoverImage,
  titleImage,
  link,
  button,
  subtitle,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Función para obtener la URL de la imagen
  const getImageSrc = (imageSource: ImageSource): string => {
    return typeof imageSource === "string" ? imageSource : imageSource.src;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 border border-[#798672] rounded-xl p-6 shadow-sm">
      {/* Imagen con hover */}
      <a
        href={link}
        className="w-full md:w-1/3 block group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={getImageSrc(isHovered ? hoverImage : image)}
          title={titleImage}
          alt={titleImage}
          className="rounded-xl w-screen md:w-auto transition-all duration-500 group-hover:scale-105"
        />
      </a>

      {/* Título */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <p className="text-xl md:text-2xl font-semibold text-[#6C5545] font-poppins leading-snug mb-8">
          {title}
        </p>
        <p className="line-clamp-3 float-right">{subtitle}</p>
      </div>

      {/* Botón */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <a
          href={link}
          className="text-[#6C5545] text-lg md:text-xl font-medium font-poppins border-2 border-[#6C5545] rounded-lg px-5 py-2 transition-all duration-300 hover:bg-[#6C5545] hover:text-white w-screen md:w-auto"
        >
          {button}
        </a>
      </div>
    </div>
  );
};

export default HoverImageComponent;
