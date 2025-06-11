import React, { useState, useEffect } from "react";

interface NavItem {
  href: string;
  label: string;
}

interface FormProps {
  Lang: boolean; // true = English, false = Spanish (o viceversa)
}

const navItemsES: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/gallery", label: "Galería" },
  { href: "/services", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/appointment", label: "Agendar Cita" },
];

const navItemsEN: NavItem[] = [
  { href: "/en/", label: "Home" },
  { href: "/en/gallery", label: "Gallery" },
  { href: "/en/services", label: "Services" },
  { href: "/en/blog", label: "Blog" },
  { href: "/en/appointment", label: "Book Appointment" },
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
          {Lang
            ? "Monday - Saturday: 9:00 AM - 5:00 PM"
            : "Lunes - Sábado: 9:00 AM - 5:00 PM"}{" "}
          &nbsp;
          <span className="block">
            {Lang ? "Sunday: Closed" : "Domingo: Cerrado"}
          </span>
        </p>
        <div className="text-white shadow-2xl">
          <div className="mx-auto px-4 flex justify-between items-center">
            <a
              href="/"
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
      <aside
        className={`fixed top-0 right-0 h-full text-center bg-[#798672] p-4 transform border border-gray-800 transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        aria-label={Lang ? "Mobile Navigation" : "Navegación móvil"}
      >
        <div className="flex justify-end">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={Lang ? "Close mobile menu" : "Cerrar menú móvil"}
          >
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
          </button>
        </div>

        <a href="/">
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
          <ul className="px-4">
            {blogsURL.map((item) => (
              <li key={item.href} className="mb-4 font-bold py-2">
                <a
                  href={item.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                    pathname === item.href ? "text-white font-bold " : ""
                  }`}
                  aria-label={item.title}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="px-4">
            {navItems.map((item) => (
              <li key={item.href} className="mb-4 font-bold">
                <a
                  href={item.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                    pathname === item.href ? "text-white font-bold " : ""
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className="absolute bottom-0 left-0 w-full py-6 text-white text-center border-t border-white">
          <p>
            {Lang
              ? `Dr. Pamela Perez ${year} ©.`
              : `Dra. Pamela Perez ${year} ©.`}
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
