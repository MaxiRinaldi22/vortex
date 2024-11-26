"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ContactBtn } from "@/components/ui/ContactBtn";
import { CLIENTS } from "@/utils/consts";
import gsap from "gsap";
import { goldman } from "@/utils/fonts";

export function Hero() {
  const mainTextRef = useRef(null);
  const lineRef = useRef(null);
  const blurRef = useRef(null);
  const workBtnRef = useRef(null);
  const imgRef = useRef<HTMLDivElement[]>([]);

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
      imgRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        stagger: 1,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        delay: 9,
      },
    );
  }, []);

  return (
    <>
      <div className="z-40 flex flex-col items-center justify-center gap-3">
        <h1
          ref={mainTextRef}
          className="absolute left-1/2 top-[30%] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-3 px-5 text-center text-3xl font-[100] text-white will-change-transform md:top-[36%] md:gap-7 md:p-0 md:text-7xl"
        >
          Nuestro objetivo es llevar tu negocio al
          <br />
          <span
            className={`${goldman.className} font-[400] md:tracking-widest`}
          >
            SIGUIENTE NIVEL
          </span>
        </h1>

        <div
          ref={lineRef}
          className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 transform md:top-[46%]"
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
        >
          <div className="h-[2px] w-[300px] bg-main-default md:w-[800px]"></div>
        </div>
        <div
          ref={blurRef}
          className="absolute left-1/2 top-[40%] h-[4px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform bg-main-default opacity-0 blur-[5px] filter md:top-[46%] md:w-[800px]"
        ></div>
      </div>

      <div className="absolute left-1/2 top-[63%] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 px-5 md:top-[68%] md:gap-5">
        <p
          ref={workBtnRef}
          className="w-full text-center text-sm font-[200] tracking-[0.2em] text-white will-change-transform md:text-lg"
        >
          ¿Empezamos a trabajar juntos?
        </p>
        <ContactBtn />
      </div>

      <div className="absolute left-1/2 top-[93%] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-5 px-7 md:top-[94%] md:justify-between md:gap-6">
        <div className="flex w-full items-center justify-center gap-5 md:gap-20">
          {CLIENTS.map((elements, i) => {
            return (
              <div
                ref={(el) => {
                  if (el) {
                    imgRef.current[i] = el;
                  }
                }}
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
