import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "./Bento.css";

const BentoGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    primary: string;
    secondary: string;
  } | null>(null);

  const photos = [
    {
      src: "/gallery1.png",
      srcTwo: "/gallery1B.png",
      width: 1028,
      height: 1400,
      alt: "1-pic",
      title: "title",
    },
    {
      src: "/gallery2.png",
      srcTwo: "/gallery2.png",
      width: 728,
      height: 1000,
      alt: "2-pic",
      title: "title",
    },
    {
      src: "/gallery3.png",
      srcTwo: "/gallery3.png",
      width: 728,
      height: 1000,
      alt: "3-pic",
      title: "title",
    },
    {
      src: "/gallery4.png",
      srcTwo: "/gallery4.png",
      width: 728,
      height: 1000,
      alt: "4-pic",
      title: "title",
    },
    {
      src: "/gallery5.png",
      srcTwo: "/gallery5.png",
      width: 728,
      height: 1000,
      alt: "5-pic",
      title: "title",
    },
    {
      src: "/gallery6.png",
      srcTwo: "/gallery6.png",
      width: 728,
      height: 1000,
      alt: "6-pic",
      title: "title",
    },
    {
      src: "/gallery7.png",
      srcTwo: "/gallery7.png",
      width: 728,
      height: 1000,
      alt: "7-pic",
      title: "title",
    },
    {
      src: "/gallery9.png",
      srcTwo: "/gallery9B.png",
      width: 1028,
      height: 1428,
      alt: "8-pic",
      title: "title",
    },
    {
      src: "/gallery8.png",
      srcTwo: "/gallery8.png",
      width: 1028,
      height: 728,
      alt: "9-pic",
      title: "title",
    },
  ];

  const handleImageClick = (primary: string, secondary: string) => {
    setSelectedImage({ primary, secondary });
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[1100px] px-8 my-4">
        <div className="container">
          {photos.map((photo, i) => {
            const classNames = [
              "rounded-xl",
              "p-1",
              "transition-transform",
              "duration-500",
              "ease-in-out",
              "hover:scale-105",
              i === 0 || i === 7 ? "md:col-span-2 md:row-span-2" : "",
              i === 8 ? "md:row-span-2 md:col-span-2" : "",
            ].join(" ");

            return (
              <div key={i} className={classNames}>
                {i === 0 || i === 7 ? (
                  <div className="compare-slider-container">
                    <ReactCompareSlider
                      itemOne={
                        <ReactCompareSliderImage
                          src={photo.src}
                          alt={photo.alt}
                        />
                      }
                      itemTwo={
                        <ReactCompareSliderImage
                          src={photo.srcTwo}
                          alt={photo.alt}
                          className="object-cover rounded-xl"
                        />
                      }
                    />
                  </div>
                ) : (
                  <img
                    onClick={() => handleImageClick(photo.src, photo.srcTwo)}
                    src={photo.src}
                    alt={photo.alt}
                    title={photo.title}
                    loading="lazy"
                    className="size-full object-cover rounded-xl"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-400 bg-transparent border-none text-4xl cursor-pointer"
              onClick={handleClose}
            >
              &times;
            </button>
            <motion.img
              src={selectedImage.secondary}
              alt="Selected"
              className="max-w-full max-h-full rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BentoGrid;
