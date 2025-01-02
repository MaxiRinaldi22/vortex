"use client";

import { Link } from "react-scroll";
import Image from "next/image";

import logo from "/public/vortexText.png";
import { ContactInfo } from "./ui/ContactInfo";
import { LINKS } from "@/utils/consts";

export function Footer() {
  return (
    <footer className="flex h-fit flex-col items-center justify-center bg-[#272727] pt-8">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Image
          src={logo}
          alt="logo"
          width={270}
          className="mb-4 md:mb-0 md:mr-4"
        />

        <div className="h-0.5 w-[90%] bg-gradient-to-r from-transparent via-white to-transparent md:h-[120px] md:w-[2px] md:bg-gradient-to-b"></div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <div className="mt-4 flex w-full flex-col items-start justify-start gap-1 px-[72px] md:mt-0 md:justify-center md:gap-0 md:px-0 md:pl-10">
            {LINKS.map((link) => (
              <button
                key={link.title}
                className="text-lg font-[200] tracking-widest text-white transition duration-300 ease-in-out hover:text-main-default md:text-base"
              >
                <Link
                  to={link.href}
                  duration={2000}
                  smooth={true}
                  offset={-100}
                >
                  {link.title}
                </Link>
              </button>
            ))}
          </div>
          <div className="w-full px-[59px]">
            <ContactInfo footer={true} header={false} />
          </div>
        </div>
      </div>
      <p className="mb-1 mt-4 text-center text-sm font-[100] tracking-widest text-neutral-300 md:mt-6">
        © {new Date().getFullYear()} Vortex Webs. Todos los derechos reservados
      </p>
    </footer>
  );
}
