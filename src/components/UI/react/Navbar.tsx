import React, { useState, useEffect } from "react";

interface NavItem {
  href: string;
  label: string;
}

interface NavbarProps {
  location: {
    pathname: string;
  };
}

const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/gallery", label: "Galeria" },
  { href: "/services", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/appointment", label: "Agendar Cita" },
];

const Navbar: React.FC<NavbarProps> = ({ location }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Check initial scroll position

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  let blogsURL = [
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

  const isBlogPage = blogsURL.some((blog) => blog.href === location.pathname);

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
        aria-label="Main Navigation"
      >
        <span className="flex justify-center md:justify-end font-poppins py-3 px-4">
          Lunes - Sabado: 9:00am - 5:00pm Domingo: Cerrado
        </span>
        <div className=" text-white shadow-2xl">
          <div className="mx-auto px-4 flex justify-between items-center">
            <a href="/" className="text-lg font-bold" aria-label="Inicio">
              <img
                src="/Dra. Pamela especialista en cirugia de cabeza cuello y otorrinolaringologia.png"
                alt="Logo"
              />
            </a>
            {isBlogPage ? (
              <ul className="hidden md:flex space-x-4">
                {blogsURL.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                        location.pathname === item.href
                          ? "text-white font-bold"
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
              <ul className="hidden md:flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                        location.pathname === item.href
                          ? "text-white font-bold"
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

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+526644468960/?text=Quiero obtener mas información sobre sus servicios."
              title="Dra Pamela | Contacto vía WhatsApp"
            >
              <li className="flex items-center gap-2">
                <img
                  src="/Contactanos via WhatsApp para agendar con la Doctora Pamela.svg"
                  title="whatsapp-icon"
                  alt="whatsapp-icon"
                />
                WhatsApp
              </li>
            </a>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
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
        className={`fixed top-0 right-0 h-full bg-[#798672] p-4 transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        aria-label="Mobile Navigation"
      >
        <div className="flex justify-end">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
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
        {isBlogPage ? (
          <ul className="">
            {blogsURL.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-white font-bold"
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
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-white font-bold"
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
      </aside>
    </>
  );
};

export default Navbar;
