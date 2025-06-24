import React, { useState, useEffect } from "react";
import SwitchLanguageButton from "./SwitchLanguageButton";

interface NavItem {
  href: string;
  label: string;
}

interface FormProps {
  Lang: boolean; // true = English, false = Spanish (o viceversa)
}

const navItemsES: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/galeria/", label: "Galería" },
  { href: "/servicios/", label: "Servicios" },
  { href: "/blog/", label: "Blog" },
  { href: "/cita/", label: "Agendar Cita" },
];

const navItemsEN: NavItem[] = [
  { href: "/en/", label: "Home" },
  { href: "/en/gallery/", label: "Gallery" },
  { href: "/en/services/", label: "Services" },
  { href: "/en/blog/", label: "Blog" },
  { href: "/en/appointment/", label: "Book Appointment" },
];

const Navbar: React.FC<FormProps> = ({ Lang }) => {
  const [pathname, setPathname] = useState("");
  const year = new Date().getFullYear();

  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Blogs URLs and titles depending on Lang
  const blogsURL = Lang
    ? [
        {
          href: "/blog/secretos-de-una-rinoplastia-exitosa",
          title: "Successful Rhinoplasty",
        },
        {
          href: "/blog/mirada-renovada-blefaroplastia-y-sus-beneficios",
          title: "Blepharoplasty Benefits",
        },
        {
          href: "/blog/la-ciencia-del-rejuvenecimiento-facial-tratamientos-no-quirurgicos",
          title: "Facial Rejuvenation",
        },
      ]
    : [
        {
          href: "/blog/secretos-de-una-rinoplastia-exitosa",
          title: "Rinoplastia Exitosa",
        },
        {
          href: "/blog/mirada-renovada-blefaroplastia-y-sus-beneficios",
          title: "Blefaroplastia Beneficios",
        },
        {
          href: "/blog/la-ciencia-del-rejuvenecimiento-facial-tratamientos-no-quirurgicos",
          title: "Rejuvenecimiento Facial",
        },
      ];

  const navItems = Lang ? navItemsEN : navItemsES;

  const isBlogPage = blogsURL.some((blog) => blog.href === pathname);

  return (
    <>
      <nav
        className={`
          bg-[#798672] text-white shadow-2xl
          fixed top-0 left-0 right-0 z-40
          transition-all duration-300 ease-in-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
        aria-label={Lang ? "Main Navigation" : "Navegación Principal"}
      >
        <p className="md:flex md:justify-end font-poppins py-3 px-4">
          {Lang ? "schedule M-S 9:00am-5:00pm" : "Horario L-S 9:00am-5:00pm"}
        </p>
        <div className="text-white shadow-2xl">
          <div className="mx-auto px-4 flex justify-between items-center">
            <a
              href={Lang ? "/en/" : "/"}
              className="text-lg font-bold"
              aria-label={Lang ? "Home" : "Inicio"}
            >
              <img
                src="/Dra. Pamela especialista en cirugia de cabeza cuello y otorrinolaringologia.png"
                alt={
                  Lang
                    ? "Dr. Pamela guarantees procedures with a comprehensive approach in facial surgery and otorhinolaryngology"
                    : "La Doctora Pamela garantiza procedimientos con enfoque integral en la cirugía facial y otorrinolaringología"
                }
                title={
                  Lang
                    ? "Dr. Pamela guarantees procedures with a comprehensive approach in facial surgery and otorhinolaryngology"
                    : "La Doctora Pamela garantiza procedimientos con enfoque integral en la cirugía facial y otorrinolaringología"
                }
              />
            </a>
            {isBlogPage ? (
              <ul className="hidden md:flex space-x-4">
                {blogsURL.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                        pathname === item.href ? "text-white font-bold" : ""
                      }`}
                      aria-label={item.title}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="hidden md:flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                        pathname === item.href ? "text-white font-bold" : ""
                      }`}
                      aria-label={item.label}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex items-center space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+526634395024/?text=I would like more information about your services."
                title={
                  Lang
                    ? "Dr Pamela | Contact via WhatsApp"
                    : "Dra Pamela | Contacto vía WhatsApp"
                }
              >
                <li className="flex items-center gap-2 cursor-pointer">
                  <img
                    src="/Contactanos via WhatsApp para agendar con la Doctora Pamela.svg"
                    title="whatsapp-icon"
                    alt="whatsapp-icon"
                  />
                  {Lang ? "WhatsApp" : "WhatsApp"}
                </li>
              </a>
              <div className="hidden md:block">
                <SwitchLanguageButton />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={Lang ? "Toggle mobile menu" : "Alternar menú móvil"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
          onClick={toggleMobileMenu}
          aria-label={Lang ? "Close menu overlay" : "Cerrar menú"}
        />
      )}
      <aside
        className={`fixed top-0 left-0 w-full h-full text-center bg-[#798672] p-0 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        aria-label={Lang ? "Mobile Navigation" : "Navegación móvil"}
        style={{ minWidth: "100vw" }}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700 bg-[#798672]">
          <a href={Lang ? "/en/" : "/"} className="flex-1 flex justify-center">
            <img
              src="/Dra. Pamela especialista en cirugia de cabeza cuello y otorrinolaringologia.png"
              alt={
                Lang
                  ? "Dr. Pamela guarantees procedures with a comprehensive approach in facial surgery and otorhinolaryngology"
                  : "La Doctora Pamela garantiza procedimientos con enfoque integral en la cirugía facial y otorrinolaringología"
              }
              title={
                Lang
                  ? "Dr. Pamela guarantees procedures with a comprehensive approach in facial surgery and otorhinolaryngology"
                  : "La Doctora Pamela garantiza procedimientos con enfoque integral en la cirugía facial y otorrinolaringología"
              }
              className="h-12 mx-auto"
            />
          </a>
          <button
            className="text-white focus:outline-none ml-2"
            onClick={toggleMobileMenu}
            aria-label={Lang ? "Close mobile menu" : "Cerrar menú móvil"}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          {isBlogPage ? (
            <ul>
              {blogsURL.map((item) => (
                <li key={item.href} className="mb-4 font-bold py-2">
                  <a
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-gray-200 hover:bg-[#6a7a5e] hover:text-white transition-colors duration-200 ${
                      pathname === item.href
                        ? "bg-[#6a7a5e] text-white font-bold"
                        : ""
                    }`}
                    aria-label={item.title}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {navItems.map((item) => (
                <li key={item.href} className="mb-4 font-bold">
                  <a
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-gray-200 hover:bg-[#6a7a5e] hover:text-white transition-colors duration-200 ${
                      pathname === item.href
                        ? "bg-[#6a7a5e] text-white font-bold"
                        : ""
                    }`}
                    aria-label={item.label}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {/* WhatsApp Button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+526634395024/?text=I would like more information about your services."
            title={
              Lang
                ? "Dr Pamela | Contact via WhatsApp"
                : "Dra Pamela | Contacto vía WhatsApp"
            }
            className="block mt-8 mb-4"
          >
            <button
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow transition"
              aria-label="WhatsApp"
            >
              <img
                src="/Contactanos via WhatsApp para agendar con la Doctora Pamela.svg"
                title="whatsapp-icon"
                alt="whatsapp-icon"
                className="h-6 w-6"
              />
              {Lang ? "WhatsApp" : "WhatsApp"}
            </button>
          </a>
          <SwitchLanguageButton />
        </nav>
        {/* Footer */}
        <div className="py-2">
          <hr className="border-white opacity-40" />
          <p className="text-center text-white text-md mt-8">
            {Lang
              ? `All rights reserved by Dr. Pamela Perez ${year} ©. `
              : `Todos los derechos reservados por Dra. Pamela Perez ${year} ©. `}
            <a
              className="hover:underline"
              href="http://www.doctorapamelaperez.com/"
              title={
                Lang
                  ? "Dr. Pamela Perez | Absolute Personalization"
                  : "Dra. Pamela Perez | Personalización Absoluta"
              }
            >
              doctorapamelaperez.com
            </a>
            {Lang ? " is developed by " : " está desarrollado por "}
            <a
              className="hover:underline"
              href="https://ecommetrica.com/"
              title="Ecommetrica | eCommerce meticulously appraised."
            >
              ecommetrica.com
            </a>
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
