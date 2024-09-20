import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importa Framer Motion

interface Link {
  text: string;
  description: string;
}

interface FooterListProps {
  links: Link[];
}

interface ModalContent {
  title: string;
  description: string;
}

// Componente Modal que recibe el contenido del modal y una función para cerrarlo
const Modal: React.FC<{ content: ModalContent; onClose: () => void }> = ({
  content,
  onClose,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 font-poppins">
    <motion.div
      className="bg-white p-8 rounded-lg max-w-lg w-full relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="absolute top-4 right-4 text-black hover:text-gray-400 bg-transparent border-none text-4xl cursor-pointer"
        onClick={onClose}
      >
        &times;
      </button>
      <h2 className="text-2xl mb-4">{content.title}</h2>
      <p>{content.description}</p>
    </motion.div>
  </div>
);

// Componente FooterList que recibe una lista de enlaces y muestra un modal al hacer clic en ellos
const FooterList: React.FC<FooterListProps> = ({ links }) => {
  // Estado para almacenar el contenido del modal
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  // Función para abrir el modal con el título y la descripción del enlace clicado
  const openModal = (title: string, description: string) => {
    setModalContent({ title, description });
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      {/* Lista de enlaces */}
      <ul className="flex flex-col md:flex-row items-center mb-6 text-xl text-white gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <button
              className="hover:underline bg-transparent border-none text-white cursor-pointer"
              title={link.text}
              onClick={() => openModal(link.text, link.description)}
            >
              {link.text}
            </button>
          </li>
        ))}
      </ul>

      {/* Renderizado condicional del modal con animación */}
      <AnimatePresence mode="popLayout">
        {modalContent && <Modal content={modalContent} onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default FooterList;
