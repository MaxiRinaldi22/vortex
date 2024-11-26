"use client";

import { useIsMobile } from "@/hooks/useMobile";
import { TIMELINE_DATA } from "@/utils/consts";
import { goldman } from "@/utils/fonts";
import Aos from "aos";
import { useEffect } from "react";

export function TimeLine() {
  const mobile = useIsMobile()

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, [])
  
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 md:gap-24">
      <div className="flex w-full flex-col items-center justify-center gap-5 px-5 md:px-0">
        <h2
          className={`${goldman.className} text-3xl tracking-[0.02em] text-white md:text-7xl`}
        >
          Metodologia de trabajo
        </h2>
        <p className="max-w-[800px] font-[200] text-white md:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid a
          corrupti quam voluptatem inventore est nam accusamus voluptas
          exercitationem. Soluta iste, libero aliquam fugit voluptatem in nisi
          corrupti ullam et ut iusto neque, cupiditate ipsum?
        </p>
      </div>
      <div className="relative mb-20 flex w-full flex-col items-center px-5 pb-10">
        {/* Línea vertical */}
        <div className="absolute left-9 h-full w-[2px] bg-main-default md:left-1/2"></div>

        {/* Elementos de la línea de tiempo */}
        {TIMELINE_DATA.map((step, index) => (
          <div
            key={index}
            className={`relative flex w-full items-center md:justify-center md:pl-[472px] ${index % 2 === 0 ? "flex-row md:pl-[472px]" : "md:mr-[940px] md:flex-row-reverse"}`}
          >
            <p
              className={`top-42 absolute hidden md:block ${index % 2 !== 0 ? "right-[calc(50%-36rem)]" : "left-[836px]"} text-5xl text-white`}
            >
              {step.number}
            </p>
            {/* Círculo */}
            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-[5px] border-[#1f1f1f] bg-main-default"></div>

            <div
              className={`flex flex-col items-start pt-32 md:pt-20 ${index % 2 === 0 ? "pl-5 md:pl-5" : "pl-5 md:pl-0 md:pr-5"}`}
            >
              <p className="absolute top-16 text-5xl text-white md:hidden">
                {step.number}
              </p>
              {/* Contenedor del cuadro con punta */}
              <div data-aos={mobile ? "fade-left" : index % 2 === 0 ? "fade-left" : "fade-right"} className="relative h-64 w-72 rounded-lg bg-[#3B3B3B] p-2 text-white md:h-44 md:w-[450px] md:pl-3">
                {/* Punta del cuadro */}
                <div
                  className={`absolute right-[286px] top-[54px] h-0 w-0 border-y-[10px] border-r-[10px] border-y-transparent border-r-[#3B3B3B] ${index % 2 !== 0 ? "md:-right-[10px] md:rotate-180" : "md:right-[450px]"} md:top-[39px]`}
                ></div>
                {/* Contenido del cuadro */}
                <div className="flex h-full flex-col items-start justify-start gap-4 md:gap-2">
                  <h4 className="w-full text-2xl tracking-wider">
                    {step.title}
                  </h4>
                  <p className="text-sm font-[200] tracking-widest md text-neutral-300 ">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
