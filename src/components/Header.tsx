"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import useOnTop from "@/hooks/UseOnTop";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  
  // const [pcMenuOpen, setPcMenuOpen] = useState(false);
  const openRef = useRef(null);
  const closeRef = useRef(null);
  const mobileRef = useRef(null);
  const headerRef = useRef(null);
  const top = useOnTop();

  // HAY QUE DESACTIVAR EL SCROLL ON Y CUANDO ESTA ABIERTO EL MOBILEMENU
  // useEffect(() => {
  //   if (mobileMenuOpen) {
  //     document.body.style.overflow = "hidden"; // Asegura que ambos ejes estén bloqueados
  //     document.body.style.height = "100%"; // Evita el scroll vertical
  //   } else {
  //     document.body.style.overflow = "auto"; // Vuelve al estado normal
  //     document.body.style.height = "auto";
  //   }

  //   // Cleanup al desmontar
  //   return () => {
  //     document.body.style.overflow = "auto";
  //     document.body.style.height = "auto";
  //   };
  // }, [mobileMenuOpen]);

  const handleDespawn = () => {
    if (mobileRef.current) {
      gsap.to(mobileRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        duration: 1,
        ease: "slow",
        onComplete: () => setMobileMenuOpen(false),
      });
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to(mobileRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 2,
        ease: "slow",
      });
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3, delay: 5.7 },
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed z-50 flex min-h-[10vh] w-full items-center justify-between px-5 transition duration-700 ease-in-out md:px-72 ${top ? "bg-transparent" : "bg-[#1F1F1F]/80 shadow-xl backdrop-blur-md"} ${mobileMenuOpen ? "bg-[#1F1F1F]/80 backdrop-blur-md" : ""}`}
    >
      <Image
        src="/MFM.png"
        height={100}
        width={100}
        className="hidden md:block"
        alt="MFM logo"
      />
      <Image
        src="/MFM.png"
        height={60}
        width={60}
        className="block md:hidden"
        alt="MFM logo"
      />

      {mobileMenuOpen ? (
        <button
          ref={closeRef}
          className="z-50 cursor-pointer"
          onClick={() => handleDespawn()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="rgba(41,195,195,1)"
          >
            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
          </svg>
        </button>
      ) : (
        <button
          ref={openRef}
          className="z-50 cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="36"
            height="36"
            fill="rgba(41,195,195,1)"
          >
            <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"></path>
          </svg>
        </button>
      )}

      {mobileMenuOpen && (
        <div
          ref={mobileRef}
          className="absolute left-0 top-0 z-50 mt-[10vh] flex h-[90vh] w-full flex-col items-center justify-center gap-5 bg-[#1F1F1F]/95 text-4xl tracking-widest text-white backdrop-blur-md"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
       >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </header>
  );
}
