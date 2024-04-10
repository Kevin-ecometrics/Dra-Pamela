import React from "react";
import ReactModal from "react-modal";
import { motion } from "framer-motion";

interface MyComponentProps {
  image: string;
  content: string[]; // Cambia esto
  confirmText: string;
  cancelButton: React.ReactNode; // Cambia esto
  isOpen: boolean;
  onRequestClose: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({
  image,
  content,
  confirmText,
  cancelButton,
  isOpen,
  onRequestClose,
}) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        ariaHideApp={false}
        className="bg-white rounded shadow-lg max-w-lg mx-auto mt-10 p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-b pb-4 mb-4 flex gap-4">
            <img
              src={`/${image}.png`}
              alt="Logo de la página web"
              className="w-64 h-15 mx-auto"
            />{" "}
          </div>
          <div className="mb-6 flex flex-col">
            <h1 className="mb-4 text-center">
              Gracias por agendar una cita con nosotros, te esperamos con gusto.
            </h1>
            {content.map((item, index) => (
              <p key={index} className="text-gray-700 text-center">
                {item}
              </p>
            ))}
          </div>
          <div className="border-t pt-4 mt-4 flex justify-center">
            <button className="bg-[#798672] text-white font-bold py-2 px-12 rounded mr-2">
              {cancelButton}
            </button>
            <button
              onClick={onRequestClose}
              className="bg-white text-black border border-black hover:bg-gray-100 font-bold py-2 px-12 rounded"
            >
              {confirmText}
            </button>
          </div>
        </motion.div>
      </ReactModal>
    </div>
  );
};

export default MyComponent;
