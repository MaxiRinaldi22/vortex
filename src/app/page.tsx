"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Hero } from "@/components/Hero";
import { Servicios } from "@/components/Servicios";
import { TimeLine } from "@/components/TimeLine";
import { Contact } from "@/components/Contact";

export default function Intro() {
  const logoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      logoRef.current,
      {
        y: 220,
        x: -220,
        froce3D: true,
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
        <Image
          src="/vortex.png"
          alt="Vortex Webs logo"
          height={500}
          width={500}
          priority
        />
      </div>
      {/* <div>
        PONER UNA FLECHA QUE BAJE HACIA ABAJO CUANDO ESTE EN TOP Y SI NO ESTA EN TOP QUE SEA PARA ARRIBA
      </div> */}
      <Hero />
      <Servicios />
      <TimeLine />
      <Contact />
    </section>
  );
}
