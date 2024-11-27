"use client";

import { DATA, OPEN_STATE, REF_OBJECT } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import Aos from "aos";

export function ListItem({ title, info, img }: { title: string; info: DATA[], img: StaticImageData }) {
  const [open, setOpen] = useState<OPEN_STATE>(
    info.reduce((acc, _, index) => ({ ...acc, [index]: false }), {}),
  );
  const liRef = useRef<REF_OBJECT>(
    info.reduce((acc, _, index) => ({ ...acc, [index]: null }), {}),
  );

  const handleOpen = (index: number) => {
    if (open[index]) {
      handleDespawn(index);
      console.log("despawn");
      
    } else {
      console.log("spawn");
      setOpen((prev) => ({ ...prev, [index]: true }));
    }
  };

  const handleDespawn = (index: number) => {
    if (liRef.current[index]) {
      gsap.to(liRef.current[index], {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        duration: 0.5,
        ease: "slow",
        onComplete: () => setOpen((prev) => ({ ...prev, [index]: false })),
      });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, [])

  useEffect(() => {
    Object.keys(open).forEach((index) => {
      const numberIndex = Number(index);
      if (open[numberIndex]) {
        gsap.to(liRef.current[numberIndex], {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.5,
          ease: "slow",
        });
      }
    });
  }, [open]);

  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-3 w-full">
      <div className="h-44 w-44 border border-main-default rounded-full p-5 ">
        <Image src={img} alt="imagen" className="h-full w-full"/>

      </div>
      <h3 className="pb-10 text-2xl tracking-widest text-white w-full text-center">{title}</h3>
      <ul className="flex w-[450px] flex-col gap-6 text-base font-[200] md:w-full text-white">
        {info.map((item, i) => (
          <li key={item.title} className="flex w-full flex-col md:px-0 px-14">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* <div className="h-2 w-2 rounded-full bg-white"></div> */}
                <h4 className="font-[300]">{item.title}</h4>
              </div>
              <button
                onClick={() => handleOpen(i)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                  className={`transition duration-500 ease-in-out ${open[i] ? "" : "rotate-180"}`}
                >
                  <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
                </svg>
              </button>
            </div>
            {/* FALTA AÑADIR ANIMACION PARA ABRIR Y CERRAR */}
            {open[i] && (
              <p
                ref={(el) => {
                  if (el) {
                    liRef.current[i] = el;
                  }
                }}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                className="mt-2 text-sm font-[200] text-neutral-300 tracking-widest max-w-[500px]"
              >
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
