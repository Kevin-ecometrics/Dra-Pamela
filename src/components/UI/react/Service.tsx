import React from "react";
import ServiceIcon from "@components/icons/serviceIcon";

const services = [
  {
    title: "Rinoseptumplastia o Rinoplastia",
    description:
      "Cirugía de corrección de problemas nasales tanto funcionales como estéticos o cosméticos.",
    imageURL: "servicio1.avif",
    link: "rinoseptumplastia_o_rinoplastia",
    icon: "/icono1A.webp",
    hoverIcon: "/icono1B.webp",
  },
  {
    title: "Blefaroplastia",
    description:
      "Cirugía de corrección de párpados superiores o inferiores por exceso de piel o grasa.",
    imageURL: "servicio2.webp",
    icon: "/icono2A.webp",
    hoverIcon: "/icono2B.webp",
    link: "blefaroplastia",
  },
  {
    title: "Liposucción de cuello y papada",
    description:
      "Cirugía de extracción de grasa localizada en el cuello y papada.",
    imageURL: "servicio3.webp",
    icon: "/icono18A.webp",
    hoverIcon: "/icono18B.webp",
    link: "liposuccion_de_cuello_y_papada",
  },
  {
    title: "Mentoplastia",
    description:
      "Cirugía de colocación de implante en mentón para su aumento definitivo.",
    imageURL: "servicio4.webp",
    icon: "/icono4A.webp",
    hoverIcon: "/icono4B.webp",
    link: "mentoplastia",
  },
  {
    title: "Bichectomia",
    description:
      "Extracción quirúrgica de las bolsas de bichat para redefinir el rostro.",
    imageURL: "servicio5.webp",
    icon: "/icono5A.webp",
    hoverIcon: "/icono5B.webp",
    link: "bichectomia",
  },
  {
    title: "Otoplastia",
    description:
      "Cirugía de orejas para corrección de deformidades o alteraciones.",
    imageURL: "servicio6.webp",
    icon: "/icono6A.webp",
    hoverIcon: "/icono6B.webp",
    link: "otoplastia",
  },
  {
    title: "Levantamiento De Temporal",
    description:
      "Cirugía de lifting de tercio medio para rejuvenecimiento facial si cicatrices visibles.",
    imageURL: "servicio7.webp",
    icon: "/icono7A.webp",
    hoverIcon: "/icono7B.webp",
    link: "levantamiento_de_temporal",
  },
  {
    title: "Levantamiento De Cejas",
    description: "Cirugía de corrección de altura de cejas.",
    imageURL: "servicio8.webp",
    icon: "/icono8A.webp",
    hoverIcon: "/icono8B.webp",
    link: "levantamiento_de_cejas",
  },
  {
    title: "Levantamiento De Labio",
    description:
      "Cirugía para rejuvenecimiento de labios también llamada bullhorn lip lift.",
    imageURL: "servicio1.avif",
    icon: "/icono9A.webp",
    hoverIcon: "/icono9B.webp",
    link: "levantamiento_de_labio",
  },
  {
    title: "Meloplastia",
    description: "Resección de mucosa bucal para redefinir rostro.",
    imageURL: "servicio9.webp",
    icon: "/icono10A.webp",
    hoverIcon: "/icono10B.webp",
    link: "meloplastia",
  },
  {
    title: "Aplicación De Botox",
    description:
      "Toxina botulínica que relaja la musculatura lo que da una relajación de las líneas de la expresión facial.",
    imageURL: "servicio10.webp",
    icon: "/icono11A.webp",
    hoverIcon: "/icono11B.webp",
    link: "aplicacion_de_botox",
  },
  {
    title: "Ácido Hialurónico",
    description:
      "Colocación para su aumento o definición, así como corrección de asimetrías visibles.",
    imageURL: "servicio11.webp",
    icon: "/icono12A.webp",
    hoverIcon: "/icono12B.webp",
    link: "acido_hialuronico",
  },
  {
    title: "Armonización Facial",
    description:
      "Aplicación de ácido hialurónico o grasa en áreas que carecen de volumen para lograr las proporciones faciales ideales o más armónicas.",
    imageURL: "servicio12.webp",
    icon: "/icono13A.webp",
    hoverIcon: "/icono13B.webp",
    link: "armonizacion_facial",
  },
  {
    title: "Perfilamiento Mandibular",
    description:
      "Colocación de ácido hialurónico o hidroxiapatita de calcio en mandíbula para su definición.",
    imageURL: "servicio13.webp",
    icon: "/icono14A.webp",
    hoverIcon: "/icono14B.webp",
    link: "perfilamiento_mandibular",
  },
  {
    title: "Tratamiento En Ojeras",
    description:
      "Colocación de NCTF por mesoterapia para lograr disminuir coloración y mejorar la transición del párpado.",
    imageURL: "servicio14.webp",
    icon: "/icono15A.webp",
    hoverIcon: "/icono15B.webp",
    link: "tratamiento_en_ojeras",
  },
  {
    title: "Injerto con grasa o transferencia en rostro",
    description:
      "Para redefinir los sitios de pérdida de grasa o mejorar las proporciones faciales.",
    imageURL: "servicio15.webp",
    icon: "/icono16A.webp",
    hoverIcon: "/icono16B.webp",
    link: "injerto_con_grasa_o_transferencia_en_rostro",
  },
];

interface Service {
  title: string;
  description: string;
  imageURL: string;
  link: string;
  icon?: string;
  hoverIcon?: string;
}

const ServiceComponent: React.FC = () => {
  return (
    <main>
      <section
        id="services"
        className="flex flex-col px-4 md:px-24 py-8 font-poppins"
      >
        <div className="flex items-center gap-2 mb-4 justify-center">
          <ServiceIcon />
          <h1 className="text-[#798672] font-bold text-3xl">
            Nuestros servicios
          </h1>
        </div>
        <p className="text-center text-[#798672] text-2xl mb-2">
          Conoce todo lo que ofrecemos para ti
        </p>
        <hr className="border-[#798672] border-1 w-full" />

        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className="relative overflow-hidden flex flex-col items-center justify-center p-4 m-4 bg-[#f5f5f5] rounded-lg group transform transition-all duration-500 ease-in-out border-[#798672] border-2"
            >
              <div className="absolute inset-0 bg-[#798672] transform scale-x-0 group-hover:scale-x-50 origin-left transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-[#798672] transform scale-x-0 group-hover:scale-x-50 origin-right transition-transform duration-500 ease-in-out" />
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-500 ease-in-out"
                style={{ backgroundImage: `url(${service.imageURL})` }}
              />

              <div className="relative z-10">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-12 h-12 rounded-full bg-[#798672]  mb-2 group-hover:hidden"
                />
                <img
                  src={service.hoverIcon}
                  alt={`${service.title} hover icon`}
                  className="w-12 h-12 rounded-full bg-white  mb-2 hidden group-hover:block"
                />
              </div>

              <h2 className="text-[#798672] font-bold text-xl group-hover:text-white z-10 text-center mb-4">
                {service.title}
              </h2>
              <a
                href={`/services/${service.link}`}
                className="mt-4 px-6 py-2 bg-[#798672] text-white rounded-full transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:text-[#798672] z-10"
              >
                Ver Servicio
              </a>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};
export default ServiceComponent;
