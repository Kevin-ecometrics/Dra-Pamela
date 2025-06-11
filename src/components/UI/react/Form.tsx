import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface FormProps {
  Lang: boolean; // true = inglés, false = español
}

const Form: React.FC<FormProps> = ({ Lang }) => {
  interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }

  const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const texts = {
    es: {
      heading1: "Déjame un mensaje",
      heading2:
        "Me gusta recibir mensaje de mis pacientes. Contestaré lo más pronto posible.",
      placeholders: {
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono",
        message: "Mensaje",
      },
      button: "Enviar",
      toast: {
        loading: "Enviando...",
        success: "¡Mensaje enviado!",
        error: "Error al mandar el mensaje.",
      },
    },
    en: {
      heading1: "Leave me a message",
      heading2:
        "I like receiving messages from my patients. I will reply as soon as possible.",
      placeholders: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
      },
      button: "Send",
      toast: {
        loading: "Sending...",
        success: "Message sent!",
        error: "Error sending the message.",
      },
    },
  };

  const t = Lang ? texts.en : texts.es;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.name === "phone" && /[^0-9]/.test(event.target.value)) {
      return;
    }
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const promise = axios.post(
      `${import.meta.env.PUBLIC_URL}/api/data`,
      formData
    );
    toast.promise(promise, {
      loading: t.toast.loading,
      success: <b>{t.toast.success}</b>,
      error: <b>{t.toast.error}</b>,
    });
    try {
      await promise;
      setFormData(initialFormData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex justify-center items-center flex-col my-12">
      <h1 className="text-[#798672] font-prata font-normal text-3xl md:text-6xl mb-4 px-4">
        {t.heading1}
      </h1>
      <h2 className="text-[#AA9170] font-poppins font-medium text-lg md:text-xl mb-8 px-12 md:px-4">
        {t.heading2}
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="border border-[#9C9C9C] px-4 py-2 rounded-md focus:outline-none mb-2 md:w-[600px]"
          placeholder={t.placeholders.name}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <div className="flex flex-col md:flex-row md:space-x-2">
          <input
            type="email"
            name="email"
            className="border border-[#9C9C9C] focus:outline-none px-4 py-2 rounded-md mb-2  md:w-[290px]"
            placeholder={t.placeholders.email}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            maxLength={10}
            name="phone"
            className="border focus:outline-none border-[#9C9C9C] px-4 py-2 rounded-md mb-2  md:w-[300px]"
            placeholder={t.placeholders.phone}
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          className="border focus:outline-none border-[#9C9C9C] px-4 py-2 rounded-md mb-2"
          placeholder={t.placeholders.message}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="flex justify-center items-center my-6">
          <button
            type="submit"
            className="bg-[#798672] px-12 rounded-2xl focus:outline-none text-white py-2"
          >
            {t.button}
          </button>
        </div>
        <hr className="bg-[#9C9C9C]" />
      </form>
      <Toaster position="top-right" />
    </section>
  );
};

export default Form;
