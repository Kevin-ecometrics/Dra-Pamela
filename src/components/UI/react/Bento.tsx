import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const BentoGrid: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    primary: string;
    secondary: string;
  } | null>(null);

  const photos = [
    {
      src: "/gallery/gallery1.png",
      srcTwo: "/gallery/gallery1B.png",
      width: 1028,
      height: 1400,
      alt: "0-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery2.png",
      srcTwo: "/gallery/gallery2.png",
      width: 728,
      height: 1000,
      alt: "1-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery3.png",
      srcTwo: "/gallery/gallery3.png",
      width: 728,
      height: 1000,
      alt: "2-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery4.png",
      srcTwo: "/gallery/gallery4.png",
      width: 728,
      height: 1000,
      alt: "3-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery5.png",
      srcTwo: "/gallery/gallery5.png",
      width: 728,
      height: 1000,
      alt: "4-pic",
      title: "title",
    },
    {
      src: "/gallery/pamela_gallery.webp",
      srcTwo: "/gallery/pamela_gallery.webp",
      width: 1028,
      height: 728,
      alt: "5-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery6.png",
      srcTwo: "/gallery/gallery6B.png",
      width: 728,
      height: 1000,
      alt: "6-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery7.png",
      srcTwo: "/gallery/gallery7.png",
      width: 728,
      height: 1000,
      alt: "7-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery8.png",
      srcTwo: "/gallery/gallery8.png",
      width: 1028,
      height: 1428,
      alt: "8-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery9.png",
      srcTwo: "/gallery/gallery9.png",
      width: 1028,
      height: 728,
      alt: "9-pic",
      title: "title",
    },
    {
      src: "/gallery/pamela_gallery2.webp",
      srcTwo: "/gallery/pamela_gallery2.webp",
      width: 1028,
      height: 728,
      alt: "10-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery10.png",
      srcTwo: "/gallery/gallery10B.png",
      width: 1028,
      height: 728,
      alt: "11-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery11.png",
      srcTwo: "/gallery/gallery11.png",
      width: 1028,
      height: 528,
      alt: "12-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery12.png",
      srcTwo: "/gallery/gallery12.png",
      width: 1028,
      height: 528,
      alt: "13-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery13.png",
      srcTwo: "/gallery/gallery13.png",
      width: 1028,
      height: 528,
      alt: "14-pic",
      title: "title",
    },
    {
      src: "/gallery/pamela_gallery3.webp",
      srcTwo: "/gallery/pamela_gallery3.webp",
      width: 1028,
      height: 728,
      alt: "15-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery14.png",
      srcTwo: "/gallery/gallery14.png",
      width: 1028,
      height: 728,
      alt: "16-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery15.png",
      srcTwo: "/gallery/gallery15.png",
      width: 1028,
      height: 728,
      alt: "17-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery16.png",
      srcTwo: "/gallery/gallery16.png",
      width: 1028,
      height: 728,
      alt: "18-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery17.png",
      srcTwo: "/gallery/gallery17.png",
      width: 1028,
      height: 728,
      alt: "19-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery18.png",
      srcTwo: "/gallery/gallery18.png",
      width: 1028,
      height: 728,
      alt: "20-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery19.png",
      srcTwo: "/gallery/gallery19.png",
      width: 1028,
      height: 728,
      alt: "21-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery22.png",
      srcTwo: "/gallery/gallery22B.png",
      width: 1028,
      height: 728,
      alt: "22-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery20.png",
      srcTwo: "/gallery/gallery20.png",
      width: 1028,
      height: 728,
      alt: "23-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery21.png",
      srcTwo: "/gallery/gallery21.png",
      width: 1028,
      height: 728,
      alt: "24-pic",
      title: "title",
    },
    {
      src: "/gallery/pamela_gallery4.webp",
      srcTwo: "/gallery/pamela_gallery4.webp",
      width: 1028,
      height: 728,
      alt: "25-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery23.png",
      srcTwo: "/gallery/gallery23B.png",
      width: 1028,
      height: 728,
      alt: "26-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery24.png",
      srcTwo: "/gallery/gallery24.png",
      width: 1028,
      height: 728,
      alt: "27-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery25.png",
      srcTwo: "/gallery/gallery25.png",
      width: 1028,
      height: 728,
      alt: "28-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery26.png",
      srcTwo: "/gallery/gallery26.png",
      width: 1028,
      height: 728,
      alt: "29-pic",
      title: "title",
    },
    {
      src: "/gallery/gallery27.png",
      srcTwo: "/gallery/gallery27.png",
      width: 1028,
      height: 728,
      alt: "30-pic",
      title: "title",
    },
  ];

  const gridPositions = [
    "col-span-2 row-span-2", // 1
    "col-start-3", // 2
    "col-start-4", // 3
    "col-start-3 row-start-2", // 4
    "col-start-4 row-start-2", // 5
    "col-span-4 row-span-2 row-start-3", // 6
    "col-span-2 row-span-2 col-start-3 row-start-5", // 7
    "col-start-1 row-start-5", // 8
    "col-start-2 row-start-5", // 9
    "col-span-2 row-start-6", // 10
    "col-span-4 row-span-2 row-start-7", // 11
    "col-span-2 row-span-2 row-start-9", // 12
    "col-start-3 row-start-9", // 13
    "col-start-4 row-start-9", // 14
    "col-start-3 col-span-2 row-start-10",
    "col-span-4 row-span-2 row-start-11", // 16
    "col-start-1", // 17
    "col-start-2", // 18
    "col-start-3", // 19
    "col-start-4", // 20
    "col-span-4 row-span-2 row-start-14", // 21
    "col-span-2 row-start-16", // 22
    "col-start-3 col-span-2 row-span-2 row-start-16", // 23
    "col-start-1 row-start-17", // 24
    "col-start-2 row-start-17", // 25
    "col-span-4 row-span-2 row-start-18", // 26
    "col-span-2 row-span-2 row-start-20", // 27
    "col-start-3 row-start-20", // 28
    "col-start-4 row-start-20", // 29
    "col-start-3 row-start-21", // 30
    "col-start-4 row-start-21", // 31
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
        <div className="md:grid md:grid-cols-4 md:grid-rows-21 gap-8">
          {Array.from({ length: 31 }).map((_, i) => {
            const classNames = [
              gridPositions[i] || "",
              "rounded-xl",
              "p-1",
              "transition-transform",
              "duration-500",
              "ease-in-out",
              "hover:scale-105",
            ].join(" ");

            const photo = photos[i];

            return (
              <div key={i} className={classNames}>
                {photo ? (
                  i === 0 || i === 6 || i === 11 || i === 22 || i === 26 ? (
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
                  )
                ) : (
                  <div className="bg-gray-200 h-full w-full rounded-xl flex items-center justify-center text-gray-500">
                    Placeholder {i + 1}
                  </div>
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
