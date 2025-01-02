"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import gsap from "gsap";

import useOnTop from "@/hooks/useOnTop";
import { ContactInfo } from "./ui/ContactInfo";
import { LINKS } from "@/utils/consts";

import Logo from "/public/vortexText.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileRef = useRef(null);
  const headerRef = useRef(null);
  const top = useOnTop();

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
      className={`fixed z-50 flex min-h-[10vh] w-full items-center justify-between px-5 transition duration-700 ease-in-out md:px-20 2xl:px-72 ${top ? "bg-transparent" : "bg-[#1F1F1F]/80 shadow-xl backdrop-blur-md"} `}
    >
      <Link
        to="inicio"
        duration={2000}
        className="z-50 cursor-pointer"
        smooth={true}
        offset={-100}
      >
        <Image
        src={Logo}
          height={160}
          width={160}
          className="z-50 hidden md:block"
          alt="MFM logo"
        />
        <Image
        src={Logo}
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
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="rgba(41,195,195,1)"
                d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414z"
              />
            </g>
          </svg>
        </button>
      ) : (
        <button
          className="z-50 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="rgba(41,195,195,1)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 6h10M4 12h16M7 12h13M7 18h10"
            />
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
