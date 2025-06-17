import React from "react";
import ServiceIcon from "@components/icons/serviceIcon";

interface Language {
  Lang: boolean;
}

const services = [
  {
    title: {
      es: "Rinoseptumplastia o Rinoplastia",
      en: "Rhinoseptoplasty or Rhinoplasty",
    },
    description: {
      es: "Cirugía de corrección de problemas nasales tanto funcionales como estéticos o cosméticos.",
      en: "Surgery to correct nasal problems, both functional and cosmetic.",
    },
    imageURL: "/servicio1.avif",
    link: {
      es: "rinoseptumplastia_o_rinoplastia",
      en: "rhinoseptoplasty_or_rhinoplasty",
    },
    icon: "/icono1A.webp",
    hoverIcon: "/icono1B.webp",
  },
  {
    title: {
      es: "Blefaroplastia",
      en: "Blepharoplasty",
    },
    description: {
      es: "Cirugía de corrección de párpados superiores o inferiores por exceso de piel o grasa.",
      en: "Surgery to correct upper or lower eyelids due to excess skin or fat.",
    },
    imageURL: "/servicio2.webp",
    icon: "/icono2A.webp",
    hoverIcon: "/icono2B.webp",
    link: {
      es: "blefaroplastia",
      en: "blepharoplasty",
    },
  },
  {
    title: {
      es: "Liposucción de cuello y papada",
      en: "Neck and Chin Liposuction",
    },
    description: {
      es: "Cirugía de extracción de grasa localizada en el cuello y papada.",
      en: "Surgical removal of localized fat in the neck and chin.",
    },
    imageURL: "/servicio3.webp",
    icon: "/icono18A.webp",
    hoverIcon: "/icono18B.webp",
    link: {
      es: "liposuccion_de_cuello_y_papada",
      en: "neck_and_chin_liposuction",
    },
  },
  {
    title: {
      es: "Mentoplastia",
      en: "Mentoplasty",
    },
    description: {
      es: "Cirugía de colocación de implante en mentón para su aumento definitivo.",
      en: "Chin implant surgery for permanent augmentation.",
    },
    imageURL: "/servicio4.webp",
    icon: "/icono4A.webp",
    hoverIcon: "/icono4B.webp",
    link: {
      es: "mentoplastia",
      en: "mentoplasty",
    },
  },
  {
    title: {
      es: "Bichectomia",
      en: "Buccal Fat Removal",
    },
    description: {
      es: "Extracción quirúrgica de las bolsas de bichat para redefinir el rostro.",
      en: "Surgical removal of buccal fat to redefine the face.",
    },
    imageURL: "/servicio5.webp",
    icon: "/icono5A.webp",
    hoverIcon: "/icono5B.webp",
    link: {
      es: "bichectomia",
      en: "buccal_fat_removal",
    },
  },
  {
    title: {
      es: "Otoplastia",
      en: "Otoplasty",
    },
    description: {
      es: "Cirugía de orejas para corrección de deformidades o alteraciones.",
      en: "Ear surgery to correct deformities or irregularities.",
    },
    imageURL: "/servicio6.webp",
    icon: "/icono6A.webp",
    hoverIcon: "/icono6B.webp",
    link: {
      es: "otoplastia",
      en: "otoplasty",
    },
  },
  {
    title: {
      es: "Levantamiento De Temporal",
      en: "Temporal Lift",
    },
    description: {
      es: "Cirugía de lifting de tercio medio para rejuvenecimiento facial sin cicatrices visibles.",
      en: "Mid-face lifting surgery for facial rejuvenation without visible scars.",
    },
    imageURL: "/servicio7.webp",
    icon: "/icono7A.webp",
    hoverIcon: "/icono7B.webp",
    link: {
      es: "levantamiento_de_temporal",
      en: "temporal_lifting",
    },
  },
  {
    title: {
      es: "Levantamiento De Cejas",
      en: "Brow Lift",
    },
    description: {
      es: "Cirugía de corrección de altura de cejas.",
      en: "Surgery to correct eyebrow height.",
    },
    imageURL: "/servicio8.webp",
    icon: "/icono8A.webp",
    hoverIcon: "/icono8B.webp",
    link: {
      es: "levantamiento_de_cejas",
      en: "brow_lifting",
    },
  },
  {
    title: {
      es: "Levantamiento De Labio",
      en: "Lip Lift",
    },
    description: {
      es: "Cirugía para rejuvenecimiento de labios también llamada bullhorn lip lift.",
      en: "Lip rejuvenation surgery, also called bullhorn lip lift.",
    },
    imageURL: "/servicio1.avif",
    icon: "/icono9A.webp",
    hoverIcon: "/icono9B.webp",
    link: {
      es: "levantamiento_de_labio",
      en: "lip_lifting",
    },
  },
  {
    title: {
      es: "Meloplastia",
      en: "Meloplasty",
    },
    description: {
      es: "Resección de mucosa bucal para redefinir rostro.",
      en: "Oral mucosa resection to redefine the face.",
    },
    imageURL: "/servicio9.webp",
    icon: "/icono10A.webp",
    hoverIcon: "/icono10B.webp",
    link: {
      es: "meloplastia",
      en: "meloplasty",
    },
  },
  {
    title: {
      es: "Aplicación De Botox",
      en: "Botox Application",
    },
    description: {
      es: "Toxina botulínica que relaja la musculatura lo que da una relajación de las líneas de la expresión facial.",
      en: "Botulinum toxin relaxes muscles, reducing facial expression lines.",
    },
    imageURL: "/servicio10.webp",
    icon: "/icono11A.webp",
    hoverIcon: "/icono11B.webp",
    link: {
      es: "aplicacion_de_botox",
      en: "botox_application",
    },
  },
  {
    title: {
      es: "Ácido Hialurónico",
      en: "Hyaluronic Acid",
    },
    description: {
      es: "Colocación para su aumento o definición, así como corrección de asimetrías visibles.",
      en: "Used for enhancement, definition, and correction of visible asymmetries.",
    },
    imageURL: "/servicio11.webp",
    icon: "/icono12A.webp",
    hoverIcon: "/icono12B.webp",
    link: {
      es: "acido_hialuronico",
      en: "hyaluronic_acid",
    },
  },
  {
    title: {
      es: "Armonización Facial",
      en: "Facial Harmonization",
    },
    description: {
      es: "Aplicación de ácido hialurónico o grasa en áreas que carecen de volumen para lograr las proporciones faciales ideales o más armónicas.",
      en: "Application of hyaluronic acid or fat to restore volume and facial balance.",
    },
    imageURL: "/servicio12.webp",
    icon: "/icono13A.webp",
    hoverIcon: "/icono13B.webp",
    link: {
      es: "armonizacion_facial",
      en: "facial_harmonization",
    },
  },
  {
    title: {
      es: "Perfilamiento Mandibular",
      en: "Jawline Contouring",
    },
    description: {
      es: "Colocación de ácido hialurónico o hidroxiapatita de calcio en mandíbula para su definición.",
      en: "Jawline definition using hyaluronic acid or calcium hydroxyapatite.",
    },
    imageURL: "/servicio13.webp",
    icon: "/icono14A.webp",
    hoverIcon: "/icono14B.webp",
    link: {
      es: "perfilamiento_mandibular",
      en: "jawline_contouring",
    },
  },
  {
    title: {
      es: "Tratamiento En Ojeras",
      en: "Under-Eye Treatment",
    },
    description: {
      es: "Colocación de NCTF por mesoterapia para lograr disminuir coloración y mejorar la transición del párpado.",
      en: "NCTF mesotherapy to reduce discoloration and smooth eyelid transition.",
    },
    imageURL: "/servicio14.webp",
    icon: "/icono15A.webp",
    hoverIcon: "/icono15B.webp",
    link: {
      es: "tratamiento_en_ojeras",
      en: "under_eye_treatment",
    },
  },
  {
    title: {
      es: "Injerto con grasa o transferencia en rostro",
      en: "Fat Grafting or Transfer to the Face",
    },
    description: {
      es: "Para redefinir los sitios de pérdida de grasa o mejorar las proporciones faciales.",
      en: "To restore fat loss areas and improve facial proportions.",
    },
    imageURL: "/servicio15.webp",
    icon: "/icono16A.webp",
    hoverIcon: "/icono16B.webp",
    link: {
      es: "injerto_con_grasa_o_transferencia_en_rostro",
      en: "fat_grafting_or_transfer_to_face",
    },
  },
];

interface Service {
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  imageURL: string;
  link: {
    es: string;
    en: string;
  };
  icon?: string;
  hoverIcon?: string;
}

const ServiceComponent: React.FC<Language> = ({ Lang }) => {
  return (
    <main>
      <section
        id="services"
        className="flex flex-col px-4 md:px-24 py-8 font-poppins"
      >
        <div className="flex items-center gap-2 mb-4 justify-center">
          <ServiceIcon />
          <h1 className="text-[#798672] font-bold text-3xl">
            {Lang ? "Our Services" : "Nuestros servicios"}
          </h1>
        </div>
        <p className="text-center text-[#798672] text-2xl mb-2">
          {Lang
            ? "Discover everything we offer for you"
            : "Conoce todo lo que ofrecemos para ti"}
        </p>
        <hr className="border-[#798672] border-1 w-full" />
        <div className="mt-8">
          <iframe
            className="w-full h-[600px] mb-8"
            src="https://www.youtube.com/embed/1yswKIKXJEo?si=p244s4FRMXGEB47o"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

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
                  alt={`${Lang ? service.title.en : service.title.es} icon`}
                  className="w-12 h-12 rounded-full bg-[#798672]  mb-2 group-hover:hidden"
                />
                <img
                  src={service.hoverIcon}
                  alt={`${
                    Lang ? service.title.en : service.title.es
                  } hover icon`}
                  className="w-12 h-12 rounded-full bg-white  mb-2 hidden group-hover:block"
                />
              </div>
              <h2 className="text-[#798672] font-bold text-xl group-hover:text-white z-10 text-center mb-4">
                {Lang ? service.title.en : service.title.es}
              </h2>
              <p className="text-center text-sm text-[#798672] group-hover:text-white z-10">
                {Lang ? service.description.en : service.description.es}
              </p>
              <a
                href={`${Lang ? "/en/services/" : "/servicios/"}${
                  Lang ? service.link.en : service.link.es
                }/`}
                className="mt-4 px-6 py-2 bg-[#798672] text-white rounded-full transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:text-[#798672] z-10"
              >
                {Lang ? "View Service" : "Ver Servicio"}
              </a>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default ServiceComponent;
