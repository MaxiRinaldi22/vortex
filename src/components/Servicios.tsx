"use client"

import { goldman } from "@/utils/fonts";
import { ListItem } from "./ui/ListItem";
import {
  BRANDING_DATA,
  DESAROLLO_DIGITALES_DATA,
  ESTRATIEGIAS_DIGITALES_DATA,
} from "@/utils/consts";

// Img
import graphic from "/public/services/graphic.png";
import light from "/public/services/light.png";
import work from "/public/services/work.png";
import { useEffect } from "react";
import Aos from "aos";

export function Servicios() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  return (
    <section className="mt-[105vh]">
      <div className="flex h-[10vh] md:h-[13vh] w-full items-center justify-center bg-main-default">
        <h2
          data-aos="zoom-in"
          className={` ${goldman.className} text-2xl tracking-[0.02em] text-white md:text-4xl`}
        >
          NUESTROS SERVICIOS
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-around gap-20 px-10 py-20 md:flex-row md:items-start md:px-20 md:py-44">
        <ListItem
          img={graphic}
          title="Estrategias Digitales"
          info={ESTRATIEGIAS_DIGITALES_DATA}
        />
        <ListItem title="Branding y Diseño" info={BRANDING_DATA} img={light} />
        <ListItem
          title="Desarrollo Digital"
          info={DESAROLLO_DIGITALES_DATA}
          img={work}
        />
      </div>
    </section>
  );
}
