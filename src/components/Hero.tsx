"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ContactBtn } from "@/components/ui/ContactBtn";
import { CLIENTS } from "@/utils/consts";
import gsap from "gsap";

export function Hero() {
  const mainTextRef = useRef(null);
  const lineRef = useRef(null);
  const blurRef = useRef(null);
  const workBtnRef = useRef(null);
  const clientsRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mainTextRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: "slow",
        delay: 5.7,
      },
    );

    gsap.to(
      lineRef.current,

      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 3,
        ease: "slow",
        delay: 5.9,
      },
    );

    gsap.to(blurRef.current, {
      yoyo: true,
      duration: 1,
      repeat: -1,
      opacity: 1,
      ease: "slow",
      delay: 8.5,
    });

    gsap.fromTo(
      workBtnRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: "slow",
        delay: 5.7,
      },
    );

    gsap.fromTo(
      clientsRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: "slow",
        delay: 5.7,
      },
    );

    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: "slow",
        delay: 5.7,
      },
    );
  }, []);

  return (
    <>
      <div className="z-40 flex flex-col items-center justify-center gap-3">
        <h1
          ref={mainTextRef}
          className="absolute left-1/2 top-[30%] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center text-center text-[40px] font-[200] text-white will-change-transform md:top-[36%] md:gap-4 md:p-0 md:text-7xl"
        >
          Nuestro objetivo es llevar tu negocio al
          <br />
          <span className="font-[600]"> siguente nivel</span>
        </h1>

        <div
          ref={lineRef}
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 transform md:top-[47%]"
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
        >
          <div className="h-[2px] w-[300px] bg-main-default md:w-[520px]"></div>
        </div>
        <div
          ref={blurRef}
          className="absolute left-1/2 top-[45%] h-[4px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform bg-main-default opacity-0 blur-[5px] filter md:top-[47%] md:w-[520px]"
        ></div>
      </div>

      <div className="absolute left-1/2 top-[68%] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 px-5 md:top-[65%] md:gap-6">
        <p
          ref={workBtnRef}
          className="w-full text-center text-lg font-[200] text-white will-change-transform md:text-2xl"
        >
          ¿Empezamos a trabajar juntos?
        </p>
        <ContactBtn />
      </div>

      <div className="absolute left-1/2 top-[97%] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-5 px-5 md:top-[92%] md:flex-row md:justify-between md:pl-[328px] md:pr-[196px]">
        <h2
          ref={clientsRef}
          className="flex w-full justify-center text-base font-[400] text-neutral-600 will-change-transform md:w-80 md:items-start md:justify-start md:text-xl"
        >
          Clientes que han confiado en nosotros
        </h2>
        <div
          ref={imgRef}
          className="flex w-full items-center justify-center gap-5 md:justify-end md:pr-32"
        >
          {CLIENTS.map((elements) => {
            return (
              <div
                key={elements.alt}
                className="flex items-center justify-center"
              >
                {/* PONER A TODOS LOS LOGOS CON EL MISMO TAMANO */}
                <Image
                  src={elements.img}
                  alt={elements.alt}
                  height={elements.scale}
                  width={elements.scale}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
