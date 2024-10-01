import React from "react";
import "./Laptop.css";
import "./phone.css";

const Testimonial: React.FC = () => {
  return (
    <>
      <main className="md:container mx-auto lg:block ">
        <h1 className="text-[#798672] text-5xl font-prata text-start md:mb-0 mb-12">
          Testimonios
        </h1>
        <section className="hidden md:block">
          <div id="macbook">
            <div id="top">
              <div id="camera"></div>
              <div id="screen">
                <video
                  src="/testimonios.mp4"
                  autoPlay
                  playsInline
                  loop
                  muted
                ></video>
              </div>
            </div>
            <div id="bottom">
              <div id="keyboard">
                <div id="top-shade"></div>
                <div id="line"></div>
              </div>
              <div id="shade"></div>
            </div>
          </div>
        </section>
        <section className="block md:hidden">
          <div className="iphone-case case-1">
            <video
              src="/testimoniosMobile.mp4"
              className="h-[500px] rounded-3xl"
              autoPlay
              loop
              playsInline
              muted
            ></video>
          </div>
        </section>
      </main>
    </>
  );
};

export default Testimonial;
