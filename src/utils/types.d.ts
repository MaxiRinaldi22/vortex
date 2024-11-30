import { StaticImageData } from "next/image";

export type CLIENTES_TYPE = {
  img: StaticImageData;
  alt: string;
  scale: number;
  href: string
};

export type DATA = {
  title: string;
  description: string;
}

export type OPEN_STATE = {
  [key: number]: boolean
}

export type REF_OBJECT = {
  [key: number]: HTMLParagraphElement | null
}

export type TIMELINE_DATA_TYPE = {
  number: string;
  title: string;
  description: string;
}