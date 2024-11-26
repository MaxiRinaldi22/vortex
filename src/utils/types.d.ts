import { StaticImageData } from "next/image";

export type CLIENTES_TYPE = {
  img: StaticImageData;
  alt: string;
  scale: number;
};

export type DATA = {
  title: string;
  description: string;
}