"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [pcMenuOpen, setPcMenuOpen] = useState(false);
  const headerRef = useRef(null);

  console.log(mobileMenuOpen);

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
      className={`z-50 flex min-h-[10vh] items-center justify-between px-5 md:px-72`}
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
          className="z-50 cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
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
       
          <div className="absolute left-0 top-0 z-50 mt-[10vh] flex h-[200px] w-full flex-col items-center justify-center gap-5 border-b-2 border-main-default text-white">
            {" "}
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
      
      )}
    </header>
  );
}
