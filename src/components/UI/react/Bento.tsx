import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const BentoGrid: React.FC = () => {
  const photos = [
    {
      src: "/gallery1.png",
      width: 1028,
      height: 728,
      alt: "1-pic",
      title: "title"
    },
    {
      src: "/gallery2.png",
      width: 728,
      height: 728,
      alt: "2-pic",
      title: "title"
    },
    {
      src: "/gallery3.png",
      width: 728,
      height: 728,
      alt: "3-pic",
      title: "title"
    },
    {
      src: "/gallery4.png",
      width: 728,
      height: 728,
      alt: "4-pic",
      title: "title"
    },
    {
      src: "/gallery5.png",
      width: 728,
      height: 728,
      alt: "5-pic",
      title: "title"
    },
    {
      src: "/gallery6.png",
      width: 728,
      height: 728,
      alt: "6-pic",
      title: "title"
    },
    {
      src: "/gallery7.png",
      width: 728,
      height: 728,
      alt: "7-pic",
      title: "title"
    },
    {
      src: "/gallery9.png",
      width: 1028,
      height: 728,
      alt: "8-pic",
      title: "title"
    },
    {
      src: "/gallery8.png",
      width: 1028,
      height: 728,
      alt: "9-pic",
      title: "title"
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1100px] px-8 my-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Gallery id="my-gallery" withCaption>
            {photos.map((photo, i) => (
              <div
                key={i}
                className={` rounded-xl ${
                  i === 0
                    ? "md:col-span-2 md:row-span-2"
                    : i === 1 || i === 2 || i === 3 || i === 4
                    ? "md:col-span-1 md:row-span-1"
                    : i === 5 || i === 6 
                    ? "md:col-span-1 md:row-span-1"
                    : i === 7
                    ? "md:col-span-2 md:row-span-2"
                    : i === 8
                    ? "md:col-span-2 md:row-span-1"
                    : i === 9
                }
                `}
              >
                <Item
                  original={photo.src}
                  thumbnail={photo.src}
                  width={photo.width}
                  height={photo.height}
                  caption={photo.src}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={photo.src}
                      alt={photo.alt}
                      title={photo.title}
                      loading="lazy"
                      className="size-full object-cover rounded-xl p-1 transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  )}
                </Item>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
