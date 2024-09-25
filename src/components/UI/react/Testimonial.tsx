import React from "react";
import "./Laptop.css";

const Testimonial: React.FC = () => {
  return (
    <>
      <main className="md:container mx-auto lg:block hidden">
        <h1 className="text-[#798672] text-5xl font-prata text-start">
          Testimonios
        </h1>
        <section>
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
      </main>
    </>
  );
};

export default Testimonial;
