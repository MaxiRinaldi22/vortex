"use client";

import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

import { goldman } from "@/utils/fonts";

export function ContactBtn() {
  const btnRef = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, scale: 0.7 },
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

  return (
    <div className="flex h-12 w-full items-center justify-center">
      <div
        ref={blurRef}
        className="absolute h-12 w-[360px] rounded-full bg-main-default opacity-0 blur-[8px] filter"
      ></div>
      <button
        ref={btnRef}
        className={`absolute z-50 flex h-12 w-[350px] cursor-pointer items-center justify-center rounded-full bg-main-default px-7 py-2 text-xl tracking-[0.2em] text-white will-change-transform ${goldman.className}`}
      >
        <Link
          to="contacto"
          className="will-change-transform"
          duration={2000}
          smooth={true}
          offset={-100}
        >
          ¡Contáctanos ahora!
        </Link>
      </button>
    </div>
  );
}
