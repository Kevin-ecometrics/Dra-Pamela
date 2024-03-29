import React, { useState } from "react";
import ServiceIcon from "@components/icons/serviceIcon";
import MedicalIcon from "@components/icons/medicalIcon";

const services = [
  {
    title: "Rinoseptumplastia o rinoplastia",
    description:
      "Cirugía de corrección de problemas nasales tanto funcionales como estéticos o cosméticos.",
    imageURL: "operacion.avif",
    link: "rinoseptumplastia_o_rinoplastia",
  },
  {
    title: "Blefaroplastia",
    description:
      "Cirugía de corrección de párpados superiores o inferiores por exceso de piel o grasa.",
    imageURL: "operacion.avif",
    link: "blefaroplastia",
  },
  {
    title: "Liposucción de cuello y papada",
    description:
      "Cirugía de extracción de grasa localizada en el cuello y papada.",
    imageURL: "operacion.avif",
    link: "liposuccion_de_cuello_y_papada",
  },
  {
    title: "Mentoplastia",
    description:
      "Cirugía de colocación de implante en mentón para su aumento definitivo.",
    imageURL: "operacion.avif",
    link: "mentoplastia",
  },
  {
    title: "Bichectomia",
    description:
      "Extracción quirúrgica de las bolsas de bichat para redefinir el rostro.",
    imageURL: "operacion.avif",
    link: "bichectomia",
  },
  {
    title: "Otoplastia",
    description:
      "Cirugía de orejas para corrección de deformidades o alteraciones.",
    imageURL: "operacion.avif",
    link: "otoplastia",
  },
  {
    title: "Levantamiento de temporal",
    description:
      "Cirugía de lifting de tercio medio para rejuvenecimiento facial si cicatrices visibles.",
    imageURL: "operacion.avif",
    link: "levantamiento_de_temporal",
  },
  {
    title: "Levantamiento de cejas",
    description: "Cirugía de corrección de altura de cejas.",
    imageURL: "operacion.avif",
    link: "levantamiento_de_cejas",
  },
  {
    title: "Levantamiento de labio",
    description:
      "Cirugía para rejuvenecimiento de labios también llamada bullhorn lip lift.",
    imageURL: "operacion.avif",
    link: "levantamiento_de_labio",
  },
  {
    title: "Meloplastia",
    description: "Resección de mucosa bucal para redefinir rostro.",
    imageURL: "operacion.avif",
    link: "meloplastia",
  },
  {
    title: "Aplicación de botox",
    description:
      "Toxina botulínica que relaja la musculatura lo que da una relajación de las líneas de la expresión facial.",
    imageURL: "operacion.avif",
    link: "aplicacion_de_botox",
  },
  {
    title: "Ácido hialurónico en labios",
    description:
      "Colocación para su aumento o definición, así como corrección de asimetrías visibles.",
    imageURL: "operacion.avif",
    link: "acido_hialuronico_en_labios",
  },
  {
    title: "Armonización facial",
    description:
      "Aplicación de ácido hialurónico o grasa en áreas que carecen de volumen para lograr las proporciones faciales ideales o más armónicas.",
    imageURL: "operacion.avif",
    link: "armonizacion_facial",
  },
  {
    title: "Perfilamiento mandibular",
    description:
      "Colocación de ácido hialurónico o hidroxiapatita de calcio en mandíbula para su definición.",
    imageURL: "operacion.avif",
    link: "perfilamiento_mandibular",
  },
  {
    title: "Ácido hialurónico en pómulos",
    description:
      "Colocación para lograr elevar pómulo o evitar signos de envejecimiento.",
    imageURL: "operacion.avif",
    link: "acido_hialuronico_en_pomulos",
  },
  {
    title: "Dermapen",
    description:
      "Micro agujas que penetran la piel logrando una luminosidad al rostro.",
    imageURL: "operacion.avif",
    link: "dermapen",
  },
  {
    title: "Tratamiento en ojeras",
    description:
      "Colocación de NCTF por mesoterapia para lograr disminuir coloración y mejorar la transición del párpado.",
    imageURL: "operacion.avif",
    link: "tratamiento_en_ojeras",
  },
  {
    title: "Valoración de consulta de Otorrinolaringología",
    description: "",
    imageURL: "operacion.avif",
    link: "valoracion_de_consulta_de_otorrinolaringologia",
  },
  {
    title: "Injerto con grasa o transferencia en rostro",
    description:
      "Para redefinir los sitios de pérdida de grasa o mejorar las proporciones faciales.",
    imageURL: "operacion.avif",
    link: "injerto_con_grasa_o_transferencia_en_rostro",
  },
];

interface Service {
  title: string;
  description: string;
  imageURL: string;
  link: string;
}

const ServicePage = 8;

const ServiceComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = Math.ceil(services.length / ServicePage);

  const currentServices = services.slice(
    (currentPage - 1) * ServicePage,
    currentPage * ServicePage
  );
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
          {currentServices.map((service: Service, index: number) => (
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

              <MedicalIcon className="w-12 h-12 stroke-white rounded-full bg-[#798672] px-2 mb-2 group-hover:bg-white  group-hover:stroke-[#798672] z-10" />
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
        <div className="flex justify-center px-4 gap-4 items-center">
          <nav>
            <ul className="inline-flex -space-x-px text-base h-10">
              <li style={{ display: currentPage === 1 ? "none" : "block" }}>
                <button
                  onClick={() => {
                    setCurrentPage((oldPage) => Math.max(oldPage - 1, 1));
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-[#798672] rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Anterior
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setCurrentPage(index + 1);
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-[#798672] hover:bg-gray-100 hover:text-gray-700 ${
                      currentPage === index + 1
                        ? "text-white bg-[#798672] "
                        : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                style={{
                  display: currentPage === totalPages ? "none" : "block",
                }}
              >
                <button
                  onClick={() => {
                    setCurrentPage((oldPage) =>
                      Math.min(oldPage + 1, totalPages)
                    );
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-[#798672] rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
};
export default ServiceComponent;
