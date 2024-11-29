import Image from "next/image";
import logo from "/public/vortexText.png";
import { LINKS } from "@/utils/consts";
import Link from "next/link";
import { ContactInfo } from "./ui/ContactInfo";

export function Footer() {
  return (
    <footer className="flex h-fit flex-col items-center justify-center bg-[#3B3B3B] pt-8">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Image
          src={logo}
          alt="logo"
          width={270}
          className="mb-4 md:mb-0 md:mr-4"
        />

        <div className="h-0.5 w-[90%] bg-gradient-to-r from-transparent via-white to-transparent md:h-[120px] md:w-[2px] md:bg-gradient-to-b"></div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <div className="mt-4 flex w-full md:justify-center flex-col items-start justify-start gap-1 md:px-0 md:pl-10 px-[72px] md:mt-0 md:gap-0">
            {LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-lg md:text-base font-[200] tracking-widest text-white transition duration-300 ease-in-out hover:text-main-default"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="w-full px-[59px]">
            <ContactInfo footer={true} header={false} />
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm tracking-widest font-[100] mb-1 text-neutral-300 md:mt-6">
        © 2023 Vortex Webs. Todos los derechos reservados
      </p>
    </footer>
  );
}
