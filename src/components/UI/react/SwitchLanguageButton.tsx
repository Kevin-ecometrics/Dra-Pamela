// Si usas TypeScript, cambia la extensión a .tsx

import React from "react";

// Tipos para los slugs
type BlogSlugES =
  | "la-ciencia-del-rejuvenecimiento-facial-tratamientos-no-quirurgicos"
  | "mirada-renovada-blefaroplastia-y-sus-beneficios"
  | "secretos-de-una-rinoplastia-exitosa";

type BlogSlugEN =
  | "science-of-facial-rejuvenation-non-surgical-treatments"
  | "refreshed-gaze-blepharoplasty-benefits"
  | "secrets-of-a-successful-rhinoplasty";

type ServiceSlugES =
  | "acido_hialuronico"
  | "aplicacion_de_botox"
  | "armonizacion_facial"
  | "bichectomia"
  | "blefaroplastia"
  | "injerto_con_grasa_o_transferencia_en_rostro"
  | "levantamiento_de_cejas"
  | "levantamiento_de_labio"
  | "levantamiento_de_temporal"
  | "liposuccion_de_cuello_y_papada"
  | "meloplastia"
  | "mentoplastia"
  | "otoplastia"
  | "perfilamiento_mandibular"
  | "rinoseptumplastia_o_rinoplastia"
  | "tratamiento_en_ojeras";

type ServiceSlugEN =
  | "hyaluronic_acid"
  | "botox_injection"
  | "facial_harmonization"
  | "buccal_fat_removal"
  | "blepharoplasty"
  | "fat_grafting_or_transfer_in_face"
  | "brow_lifting"
  | "lip_lifting"
  | "temporal_lifting"
  | "neck_and_chin_liposuction"
  | "meloplasty"
  | "mentoplasty"
  | "otoplasty"
  | "mandibular_contouring"
  | "rhinoseptoplasty_or_rhinoplasty"
  | "dark_circle_treatment";

// Mapeo de slugs de blogs
const blogSlugMap: {
  esToEn: Record<BlogSlugES, BlogSlugEN>;
  enToEs: Record<BlogSlugEN, BlogSlugES>;
} = {
  esToEn: {
    "la-ciencia-del-rejuvenecimiento-facial-tratamientos-no-quirurgicos":
      "science-of-facial-rejuvenation-non-surgical-treatments",
    "mirada-renovada-blefaroplastia-y-sus-beneficios":
      "refreshed-gaze-blepharoplasty-benefits",
    "secretos-de-una-rinoplastia-exitosa":
      "secrets-of-a-successful-rhinoplasty",
  },
  enToEs: {
    "science-of-facial-rejuvenation-non-surgical-treatments":
      "la-ciencia-del-rejuvenecimiento-facial-tratamientos-no-quirurgicos",
    "refreshed-gaze-blepharoplasty-benefits":
      "mirada-renovada-blefaroplastia-y-sus-beneficios",
    "secrets-of-a-successful-rhinoplasty":
      "secretos-de-una-rinoplastia-exitosa",
  },
};

// Mapeo de slugs de servicios
const serviceSlugMap: {
  esToEn: Record<ServiceSlugES, ServiceSlugEN>;
  enToEs: Record<ServiceSlugEN, ServiceSlugES>;
} = {
  esToEn: {
    acido_hialuronico: "hyaluronic_acid",
    aplicacion_de_botox: "botox_injection",
    armonizacion_facial: "facial_harmonization",
    bichectomia: "buccal_fat_removal",
    blefaroplastia: "blepharoplasty",
    injerto_con_grasa_o_transferencia_en_rostro:
      "fat_grafting_or_transfer_in_face",
    levantamiento_de_cejas: "brow_lifting",
    levantamiento_de_labio: "lip_lifting",
    levantamiento_de_temporal: "temporal_lifting",
    liposuccion_de_cuello_y_papada: "neck_and_chin_liposuction",
    meloplastia: "meloplasty",
    mentoplastia: "mentoplasty",
    otoplastia: "otoplasty",
    perfilamiento_mandibular: "mandibular_contouring",
    rinoseptumplastia_o_rinoplastia: "rhinoseptoplasty_or_rhinoplasty",
    tratamiento_en_ojeras: "dark_circle_treatment",
  },
  enToEs: {
    hyaluronic_acid: "acido_hialuronico",
    botox_injection: "aplicacion_de_botox",
    facial_harmonization: "armonizacion_facial",
    buccal_fat_removal: "bichectomia",
    blepharoplasty: "blefaroplastia",
    fat_grafting_or_transfer_in_face:
      "injerto_con_grasa_o_transferencia_en_rostro",
    brow_lifting: "levantamiento_de_cejas",
    lip_lifting: "levantamiento_de_labio",
    temporal_lifting: "levantamiento_de_temporal",
    neck_and_chin_liposuction: "liposuccion_de_cuello_y_papada",
    meloplasty: "meloplastia",
    mentoplasty: "mentoplastia",
    otoplasty: "otoplastia",
    mandibular_contouring: "perfilamiento_mandibular",
    rhinoseptoplasty_or_rhinoplasty: "rinoseptumplastia_o_rinoplastia",
    dark_circle_treatment: "tratamiento_en_ojeras",
  },
};

function getSwitchUrl(pathname: string): string {
  const blogEsMatch = pathname.match(/^\/blog\/([^/]+)\/?$/);
  const blogEnMatch = pathname.match(/^\/en\/blog\/([^/]+)\/?$/);

  if (blogEsMatch) {
    const slugEs = blogEsMatch[1] as BlogSlugES;
    const slugEn = blogSlugMap.esToEn[slugEs];
    if (slugEn) return `/en/blog/${slugEn}/`;
  }
  if (blogEnMatch) {
    const slugEn = blogEnMatch[1] as BlogSlugEN;
    const slugEs = blogSlugMap.enToEs[slugEn];
    if (slugEs) return `/blog/${slugEs}/`;
  }

  // Servicio individual ES: /servicios/[slug]/
  // Servicio individual EN: /en/services/[slug]/
  const serviceEsMatch = pathname.match(/^\/servicios\/([^/]+)\/?$/);
  const serviceEnMatch = pathname.match(/^\/en\/services\/([^/]+)\/?$/);

  if (serviceEsMatch) {
    const slugEs = serviceEsMatch[1] as ServiceSlugES;
    const slugEn = serviceSlugMap.esToEn[slugEs];
    if (slugEn) return `/en/services/${slugEn}/`;
  }
  if (serviceEnMatch) {
    const slugEn = serviceEnMatch[1] as ServiceSlugEN;
    const slugEs = serviceSlugMap.enToEs[slugEn];
    if (slugEs) return `/servicios/${slugEs}/`;
  }

  let path = pathname.endsWith("/") ? pathname : pathname + "/";

  const routeMap = [
    { es: "/", en: "/en/" },
    { es: "/galeria/", en: "/en/gallery/" },
    { es: "/servicios/", en: "/en/services/" },
    { es: "/blog/", en: "/en/blog/" },
    { es: "/cita/", en: "/en/appointment/" },
  ];

  const esMatch = routeMap.find((r) => r.es === path);
  if (esMatch) return esMatch.en;

  const enMatch = routeMap.find((r) => r.en === path);
  if (enMatch) return enMatch.es;

  if (path.startsWith("/en/")) return path.replace(/^\/en/, "") || "/";
  return "/en" + (path === "/" ? "/" : path);
}

const SwitchLanguageButton: React.FC = () => {
  const isEnglish =
    typeof window !== "undefined" && window.location.pathname.startsWith("/en");

  const handleSwitch = () => {
    const { pathname, search, hash } = window.location;
    const newPath = getSwitchUrl(pathname) + search + hash;
    window.location.assign(newPath);
  };

  return (
    <button
      onClick={handleSwitch}
      className={`px-4 py-2 rounded-full transition-colors duration-200 bg-[#798672] border-white border text-white
        hover:bg-[#A2948D] focus:outline-none  cursor-pointer`}
      aria-label={isEnglish ? "Cambiar a Español" : "Switch to English"}
    >
      {isEnglish ? "Español" : "English"}
    </button>
  );
};

export default SwitchLanguageButton;
