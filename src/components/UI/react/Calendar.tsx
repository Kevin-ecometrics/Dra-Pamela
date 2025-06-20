import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import type { Day, CalendarDigit } from "react-modern-calendar-datepicker";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Modal from "./Modal.tsx";
import PDFDocument from "./Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { motion } from "framer-motion";
import logo from "@assets/Acerca de la Dra. Pamela donde se funciona experiencia tecnica y compromiso con la trasformacion que va mas alla de la superficie.png";
interface Language {
  Lang: boolean;
}
const App: React.FC<Language> = ({ Lang }) => {
  interface BookedHour {
    date: string;
    hour: string;
  }
  type DateObject = {
    year: number;
    month: number;
    day: number;
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    setName("");
    setEmail("");
    setPhone("");
    setSelectedTime("");
  };
  const [open, setOpen] = React.useState(false);
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedHours, setBookedHours] = useState<BookedHour[]>([]);
  const [resetSelect, setResetSelect] = useState(false); // Estado para reiniciar el select
  const hours = Array.from({ length: 9 }, (_, i) => 9 + i);
  const allHoursBooked = hours.every((hour) => {
    const time24 = hour < 10 ? `0${hour}:00:00` : `${hour}:00:00`;
    const date = selectedDay
      ? `${selectedDay.year}-${
          selectedDay.month < 10 ? "0" + selectedDay.month : selectedDay.month
        }-${selectedDay.day < 10 ? "0" + selectedDay.day : selectedDay.day}`
      : "";
    return bookedHours.some((bh) => bh.date === date && bh.hour === time24);
  });
  const texts = {
    es: {
      noAvailable: "No hay horario disponible",
      selectHour: "Selecciona una hora",
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      schedule: "Agendar",
      loadingDoc: "Cargando documento...",
      downloadPDF: "Descargar PDF",
      close: "Cerrar",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      nameLabel: "Nombre",
      hourLabel: "Hora",
      dateLabel: "Fecha de la cita",
      addressLabel: "Dirección",
      address: `P.º del Centenario 9580
          Zona Urbana Rio Tijuana
          22010 Tijuana, B.C.`,
      phoneAlert:
        "El teléfono debe contener solo números y tener exactamente 10 dígitos",
      months: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      weekDays: [
        { name: "Domingo", short: "D", isWeekend: true },
        { name: "Lunes", short: "L" },
        { name: "Martes", short: "M" },
        { name: "Miércoles", short: "M" },
        { name: "Jueves", short: "J" },
        { name: "Viernes", short: "V" },
        { name: "Sábado", short: "S", isWeekend: false },
      ],
      nextMonth: "Mes siguiente",
      previousMonth: "Mes anterior",
      openMonthSelector: "Abrir selector de mes",
      openYearSelector: "Abrir selector de año",
      closeMonthSelector: "Cerrar selector de mes",
      closeYearSelector: "Cerrar selector de año",
      defaultPlaceholder: "Seleccionar...",
      from: "de",
      to: "a",
      digitSeparator: ",",
    },
    en: {
      noAvailable: "No available slots",
      selectHour: "Select a time",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      schedule: "Book",
      loadingDoc: "Loading document...",
      downloadPDF: "Download PDF",
      close: "Close",
      emailLabel: "Email",
      phoneLabel: "Phone",
      nameLabel: "Name",
      hourLabel: "Time",
      dateLabel: "Appointment date",
      addressLabel: "Address",
      address: `P.º del Centenario 9580
          Zona Urbana Rio Tijuana
          22010 Tijuana, B.C.`,
      phoneAlert: "Phone must be exactly 10 digits and only numbers",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      weekDays: [
        { name: "Sunday", short: "S", isWeekend: true },
        { name: "Monday", short: "M" },
        { name: "Tuesday", short: "T" },
        { name: "Wednesday", short: "W" },
        { name: "Thursday", short: "T" },
        { name: "Friday", short: "F" },
        { name: "Saturday", short: "S", isWeekend: false },
      ],
      nextMonth: "Next Month",
      previousMonth: "Previous Month",
      openMonthSelector: "Open Month Selector",
      openYearSelector: "Open Year Selector",
      closeMonthSelector: "Close Month Selector",
      closeYearSelector: "Close Year Selector",
      defaultPlaceholder: "Select...",
      from: "from",
      to: "to",
      digitSeparator: ",",
    },
  };

  const t = Lang ? texts.en : texts.es;

  const title = allHoursBooked ? t.noAvailable : t.selectHour;
  const myCustomLocale = {
    months: t.months,
    weekDays: t.weekDays,
    weekStartingIndex: 0,
    getToday(gregorainTodayObject: DateObject): DateObject {
      return gregorainTodayObject;
    },
    toNativeDate(date: DateObject): Date {
      return new Date(date.year, date.month - 1, date.day);
    },
    getMonthLength(date: DateObject): number {
      return new Date(date.year, date.month, 0).getDate();
    },
    transformDigit(digit: number): number {
      return digit;
    },
    nextMonth: t.nextMonth,
    previousMonth: t.previousMonth,
    openMonthSelector: t.openMonthSelector,
    openYearSelector: t.openYearSelector,
    closeMonthSelector: t.closeMonthSelector,
    closeYearSelector: t.closeYearSelector,
    defaultPlaceholder: t.defaultPlaceholder,
    from: t.from,
    to: t.to,
    digitSeparator: t.digitSeparator,
    yearLetterSkip: 0,
    isRtl: false,
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isNumeric = /^\d+$/.test(phone);

    if (!isNumeric || phone.length !== 10) {
      alert(t.phoneAlert);
      return;
    }

    let timeIn24HourFormat = parseInt(selectedTime);
    if (timeIn24HourFormat >= 1 && timeIn24HourFormat <= 6) {
      timeIn24HourFormat += 12;
    }

    const BookingData = {
      name,
      email,
      phone,
      date: selectedDay
        ? `${selectedDay.year}-${selectedDay.month}-${selectedDay.day} ${timeIn24HourFormat}:00:00`
        : "",
    };

    let apiUrl;

    if (import.meta.env.MODE === "production") {
      apiUrl = `${import.meta.env.PUBLIC_URL}/booking`;
    } else {
      apiUrl = "http://localhost:3000/booking";
    }

    try {
      const response = await axios.post(apiUrl, BookingData);
      console.log(response);
      toast.success("Reservación exitosa");
      setResetSelect((prevState) => !prevState);
      setOpen(!open);
      setOpen(true);
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getBookedHours() {
      let apiUrl;

      if (import.meta.env.MODE === "production") {
        apiUrl = `${import.meta.env.PUBLIC_URL}/bookedHours`;
      } else {
        apiUrl = "http://localhost:3000/bookedHours";
      }

      try {
        const response = await axios.get(apiUrl);
        setBookedHours(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getBookedHours();
  }, [resetSelect]);

  const today = new Date();
  const localDate = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };

  return (
    <div className="flex gap-4">
      <Calendar
        value={selectedDay}
        colorPrimary="#798672"
        minimumDate={localDate}
        onChange={(value: Day) => setSelectedDay(value)}
        calendarClassName="border-2 border-gray-800 rounded-xl"
        locale={{
          ...myCustomLocale,
          transformDigit: (digit: CalendarDigit) => digit,
        }}
        shouldHighlightWeekends
      />
      {selectedDay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <form
            onSubmit={handleSubmit}
            className="flex gap-4 flex-col items-center"
          >
            <input
              type="text"
              className="border-2 border-gray-300 p-2 rounded-md text-center focus:outline-none w-80"
              value={`${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`}
              readOnly
            />
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
              className="border-2 border-gray-300 p-2 rounded-md text-center focus:outline-none w-80"
            >
              <option value="">{title}</option>
              {hours.map((hour) => {
                const time =
                  hour <= 11
                    ? `${hour}:00 AM`
                    : hour === 12
                    ? `12:00 PM`
                    : `${hour - 12}:00 PM`;
                const time24 = hour < 10 ? `0${hour}:00:00` : `${hour}:00:00`;
                const date = selectedDay
                  ? `${selectedDay.year}-${
                      selectedDay.month < 10
                        ? "0" + selectedDay.month
                        : selectedDay.month
                    }-${
                      selectedDay.day < 10
                        ? "0" + selectedDay.day
                        : selectedDay.day
                    }`
                  : "";
                if (
                  bookedHours.some(
                    (bh) => bh.date === date && bh.hour === time24
                  )
                ) {
                  return null;
                }
                return (
                  <option key={hour} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              className="border-2 border-gray-300 p-2 rounded-md text-center focus:outline-none w-80"
              placeholder={t.fullName}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="border-2 border-gray-300 p-2 rounded-md text-center focus:outline-none w-80"
              placeholder={t.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              className="border-2 border-gray-300 p-2 rounded-md text-center focus:outline-none w-80"
              placeholder={t.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={10}
            />
            <button
              className="bg-[#798672] text-white p-2 rounded-md w-80 focus:outline-none  transition duration-300 ease-in-out"
              type="submit"
            >
              {t.schedule}
            </button>
          </form>
          <Toaster position="top-right" />
          <Modal
            cancelButton={
              <PDFDownloadLink
                document={
                  <PDFDocument
                    email={email}
                    date={`${new Date(
                      selectedDay.year,
                      selectedDay.month - 1,
                      selectedDay.day
                    ).toLocaleDateString(Lang ? "en-US" : "es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}`}
                    modalEvent="Dra. Pamela Perez"
                    modalLocation={t.address}
                    time={selectedTime}
                  />
                }
                fileName={`Cita_${name}_${new Date(
                  selectedDay.year,
                  selectedDay.month - 1,
                  selectedDay.day
                ).toLocaleDateString(Lang ? "en-US" : "es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}.pdf`}
              >
                {({ loading }) => (loading ? t.loadingDoc : t.downloadPDF)}
              </PDFDownloadLink>
            }
            confirmText={t.close}
            content={[
              `${t.emailLabel}: ${email}`,
              `${t.phoneLabel}: ${phone}`,
              `${t.nameLabel}: ${name}`,
              `${t.hourLabel}: ${selectedTime}`,
              `${t.dateLabel}: ${new Date(
                selectedDay.year,
                selectedDay.month - 1,
                selectedDay.day
              ).toLocaleDateString(Lang ? "en-US" : "es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`,
              `${t.addressLabel}: ${t.address}`,
            ]}
            image="logo_alternativo"
            isOpen={isOpen}
            onRequestClose={handleClose}
          />{" "}
        </motion.div>
      )}
    </div>
  );
};

export default App;
