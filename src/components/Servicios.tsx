import { goldman } from "@/utils/fonts";
import { ListItem } from "./ui/ListItem";
import {
  BRANDING_DATA,
  DESAROLLO_DIGITALES_DATA,
  ESTRATIEGIAS_DIGITALES_DATA,
} from "@/utils/consts";

export function Servicios() {
  return (
    <section className="mt-[105vh]">
      <div className="flex h-[10vh] w-full items-center justify-center bg-main-default">
        <h2
          className={` ${goldman.className} md:text-4xl text-3xl tracking-[0.02em] text-white`}
        >
          Nuestros servicios
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-around gap-20 py-20 md:py-32 md:flex-row md:items-start px-10 md:px-20">
        <ListItem
          title="Estrategias Digitales"
          info={ESTRATIEGIAS_DIGITALES_DATA}
        />
        <ListItem title="Branding y Diseño" info={BRANDING_DATA} />
        <ListItem title="Desarrollo Digital" info={DESAROLLO_DIGITALES_DATA} />
      </div>
    </section>
  );
}
