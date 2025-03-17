import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function ContactInfo({
  footer,
  header,
}: {
  footer: boolean;
  header: boolean;
}) {
  return (
    <div
      data-aos={!header && !footer ? "fade-right" : ""}
      className={`flex h-full w-full items-start justify-start gap-5 p-2 text-white ${header ? "flex-col md:flex-row" : "flex-col"}`}
    >
      <div className="flex items-center justify-center gap-5">
        <Phone className="h-[40px] w-[40px]" />
        <div className="flex flex-col items-start justify-center text-start">
          <h3
            className={`${footer ? "text-base" : "text-xl"} tracking-widest text-white`}
          >
            TELEFONO
          </h3>
          <p
            className={`text-lg font-[200] tracking-wider text-white ${footer ? "text-sm" : "text-xl"}`}
          >
            (+598) 091 480 888
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <Mail className="h-[40px] w-[40px]" />
        <div className="flex flex-col items-start justify-center text-start">
          <h3
            className={`${footer ? "text-base" : "text-xl"} tracking-widest text-white`}
          >
            EMAIL
          </h3>
          <p
            className={`text-lg font-[200] tracking-wider text-white ${footer ? "text-sm" : "text-xl"}`}
          >
            contact@websvortex.com
          </p>
        </div>
      </div>

      <Link
        target="_blank"
        className="flex items-center justify-center gap-5"
        href="https://www.instagram.com/vortexwebs/"
      >
        <Instagram className="h-[40px] w-[40px]" />
        <div className="flex flex-col items-start justify-center text-start">
          <h3
            className={`${footer ? "text-base" : "text-xl"} tracking-widest text-white`}
          >
            INSTAGRAM
          </h3>
          <p
            className={`text-lg font-[200] tracking-wider text-white ${footer ? "text-sm" : "text-xl"}`}
          >
            VortexWebs
          </p>
        </div>
      </Link>
    </div>
  );
}
