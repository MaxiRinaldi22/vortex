"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { goldman } from "@/utils/fonts";

export function ContactBtn() {
  const btnRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.5 },
      {
        scale: 1,
        opacity: 1,
        duration: 3,
        ease: "slow",
        delay: 5.7,
      },
    );

    gsap.to(
      blurRef.current,

      {
        yoyo: true,
        repeat: -1,
        ease: "slow",
        opacity: 1,
        duration: 1,
        delay: 8.5,
      },
    );
  }, []);


  // Hace un rebot raro la animacion de el boton
  return (
    <div className="flex h-12 w-full items-center justify-center">
      <div
        ref={blurRef}
        className="absolute h-12 w-[260px] rounded-full bg-main-default opacity-0 blur-[8px] filter"
      ></div>
      <button
        ref={btnRef}
        className={`will-change-transform absolute flex items-center  justify-center z-50 h-12 w-[250px] rounded-full bg-main-default px-7 py-2 text-xl tracking-[0.2em] text-white ${goldman.className}`}
      >
        CONTACTANOS
      </button>
    </div>
  );
}
