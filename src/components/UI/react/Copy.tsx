import React from "react";
import { FiCopy } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

interface CopyProps {
  Lang: boolean;
}

const messages = {
  es: {
    copied: "¡Enlace copiado al portapapeles!",
    error: "Error al copiar el enlace",
    label: "Copiar enlace",
  },
  en: {
    copied: "Link copied to clipboard!",
    error: "Error copying the link",
    label: "Copy link",
  },
};

const Copy: React.FC<CopyProps> = ({ Lang }) => {
  const langKey = Lang ? "en" : "es";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success(messages[langKey].copied);
    } catch (err) {
      toast.error(messages[langKey].error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "#333",
        fontSize: "1rem",
      }}
      aria-label={messages[langKey].label}
      type="button"
    >
      <FiCopy size={20} />
      {messages[langKey].label}
      <Toaster position="top-right" />
    </button>
  );
};

export default Copy;
