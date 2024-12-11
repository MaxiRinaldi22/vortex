"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ContactBtn } from "@/components/ui/ContactBtn";
import { CLIENTS } from "@/utils/consts";
import gsap from "gsap";
import { goldman } from "@/utils/fonts";

export function Hero() {
  const mainTextRef = useRef(null);
  const workBtnRef = useRef(null);
  const solRef = useRef(null);
  const blurRef = useRef(null);
  const iconsRef = useRef(null)
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

    gsap.to(solRef.current, {
      yoyo: true,
      repeat: -1,
      textShadow: "2px 2px 5px rgba(51, 246, 246, 0.6)",
      ease: "slow",
      duration: 1,
      delay: 8.5,
    });

    gsap.fromTo(
      blurRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "slow",
        delay: 8.5,
      },
    );

    gsap.fromTo(
      iconsRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "slow",
        delay: 9,
      },
    );
  }, []);

  return (
    <>
      <div
        id="inicio"
        className="z-40 flex flex-col items-center justify-center gap-3"
      >
        <h1
          ref={mainTextRef}
          className="absolute left-1/2 top-[30%] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-3 px-5 text-center text-3xl font-[300] text-white drop-shadow-2xl will-change-transform md:top-[36%] md:gap-7 md:p-0 md:text-5xl 2xl:text-7xl"
        >
          Las mejores
          <br />
          <span
            ref={solRef}
            className={`${goldman.className} text-3xl font-[400] text-main-default md:text-5xl 2xl:text-7xl md:tracking-widest`}
            style={{
              textShadow: "2px 2px 5px rgba(51, 246, 246, 0)",
            }}
          >
            soluciones digitales creativas
          </span>
          para destacat tu marca.
        </h1>
      </div>

      <div
        ref={blurRef}
        className="absolute left-1/2 top-[10%] z-[-10] flex h-[200px] w-[300px] -translate-x-1/2 -translate-y-[5%] transform flex-col items-center justify-center gap-3 rounded-full bg-main-dark px-5 blur-3xl md:top-[54%] md:h-[300px] md:w-[900px] md:-translate-y-[126%]"
      ></div>

      <div className="absolute left-1/2 top-[90%] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 px-5 md:top-[90%] md:gap-5">
        <p
          ref={workBtnRef}
          className="w-full text-center text-sm font-[200] tracking-[0.2em] text-white will-change-transform md:text-lg"
        ></p>
        <ContactBtn />
      </div>

      <div ref={iconsRef} className="absolute left-1/2 top-[63%] flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-5 px-7 md:top-[68%] md:justify-between md:gap-6">
        <div className="flex items-center justify-center gap-5 border-y px-3 py-3 md:gap-20">
          {CLIENTS.map((elements, i) => (
            <div
              ref={(el) => {
                if (el) {
                  imgRef.current[i] = el;
                }
              }}
              key={elements.alt}
              className="flex items-center justify-center"
            >
              <a
                className="cursor-pointer"
                href={elements.href}
                target="_blank"
              >
                <Image
                  src={elements.img}
                  alt={elements.alt}
                  height={elements.scale}
                  width={elements.scale}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
