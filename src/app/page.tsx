"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Hero } from "@/components/Hero";
import { Servicios } from "@/components/Servicios";

export default function Intro() {
  const logoRef = useRef(null);


  useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      logoRef.current,
      {
        y: 220,
        x: -220,
      },
      {
        y: 0,
        x: 0,
        clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        duration: 4,
        ease: "slow",
      },
    );

    gsap.to(logoRef.current, {
      opacity: 0,
      duration: 1,
      ease: "slow",
      delay: 4.3,
    });

  }, []);

  // Mover todo esto a un hero (Acomodar todo para no usar el absolute y que pueda tener un h predefinido)
  return (
    <section>
      <div
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
        ref={logoRef}
        style={{
          clipPath: "polygon(0% 50%, 0% 100%, 50% 100%, 0% 100%)",
          overflowY: "hidden",
        }}
      >
        <Image src="/MFM.png" alt="MFM" height={500} width={500} />
      </div>
      <Hero />
      <Servicios />
    </section>
  );
}
