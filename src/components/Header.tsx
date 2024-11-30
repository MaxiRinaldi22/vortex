"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import useOnTop from "@/hooks/useOnTop";
import { LINKS } from "@/utils/consts";
import { ContactInfo } from "./ui/ContactInfo";
import { Link } from "react-scroll";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileRef = useRef(null);
  const headerRef = useRef(null);
  const top = useOnTop();

  // HAY QUE DESACTIVAR EL SCROLL ON Y CUANDO ESTA ABIERTO EL MOBILEMENU
  const handleDespawn = () => {
    if (mobileRef.current) {
      gsap.to(mobileRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        duration: 2,
        ease: "slow",
        onComplete: () => setMenuOpen(false),
      });
    }
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(mobileRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 2,
        ease: "slow",
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3, delay: 4.7 },
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed z-50 flex min-h-[10vh] w-full items-center justify-between px-5 transition duration-700 ease-in-out md:px-72 ${top ? "bg-transparent" : "bg-[#1F1F1F]/80 shadow-xl backdrop-blur-md"} `}
    >
      <Link to="inicio" duration={2000} className="cursor-pointer z-50" smooth={true} offset={-100}>
        <Image
          src="/vortexText.png"
          height={160}
          width={160}
          className="z-50 hidden md:block"
          alt="MFM logo"
        />
        <Image
          src="/vortexText.png"
          height={110}
          width={110}
          className="z-50 block md:hidden"
          alt="MFM logo"
        />
      </Link>

      {menuOpen ? (
        <button className="z-50 cursor-pointer" onClick={() => handleDespawn()}>
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
          className="z-50 cursor-pointer"
          onClick={() => setMenuOpen(true)}
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

      {menuOpen && (
        <div
          ref={mobileRef}
          className="absolute left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-between gap-5 bg-[#1F1F1F]/95 py-6 text-4xl tracking-widest text-white backdrop-blur-md"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}

        >
          <div className="flex h-full flex-col items-center justify-center gap-5">
            {LINKS.map((link) => (
              <Link
                to={link.href}
                duration={2000}
                smooth={true}
                offset={-100}
                key={link.title}
                onClick={() => handleDespawn()}
                className="cursor-pointer text-lg font-semibold tracking-[0.2em] text-white transition-all duration-150 ease-in-out hover:text-main-default md:text-3xl"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            <ContactInfo footer={true} header={true} />
          </div>
        </div>
      )}
    </header>
  );
}
