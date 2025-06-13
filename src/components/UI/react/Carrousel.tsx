import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarrouselImage {
  src: any;
  alt: string;
  title: string;
}

interface CarrouselProps {
  images: CarrouselImage[];
  className?: string;
}

const Carrousel: React.FC<CarrouselProps> = ({ images, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const imgObj = images && images[index] ? images[index] : undefined;
  const imgSrc = imgObj?.src?.src ? imgObj.src.src : imgObj?.src;

  // Animation variants
  const variants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {imgObj && (
          <motion.img
            key={index}
            src={imgSrc}
            alt={imgObj.alt}
            title={imgObj.title}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Carrousel;
