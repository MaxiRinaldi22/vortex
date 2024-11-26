import { CLIENTES_TYPE, DATA } from "./types";
import gf from "/public/clientes/gf.png";
import dr from "/public/clientes/dr.png";
import LPD from "/public/clientes/LPD.png";


export const CLIENTS: CLIENTES_TYPE[] = [
  { img: gf, alt: "GF Barber Studio logo", scale: 70 },
  { img: dr, alt: "DR Construcciones en steel logo", scale: 100 },
  { img: LPD, alt: "Liceo Padre Domingo logo", scale: 44 },
];

export const ESTRATIEGIAS_DIGITALES_DATA: DATA[] = [
  {
    title: "Diseño de estrategias de contenido",
    description:
      "Planificación para estructurar y presentar información de manera efectiva y atractiva",
  },
  {
    title: "Optimización para posicionamiento digital",
    description:
      "Mejoras técnicas y estratégicas para aumentar la visibilidad en buscadores y campañas pagadas",
  },
  {
    title: "Creación de experiencias centradas en el usuario",
    description:
      "Diseño y desarrollo enfocados en mejorar la interacción y satisfacción del usuario",
  },
];

export const BRANDING_DATA: DATA[] = [
  {
    title: "Desarrollo de marcas únicas e impactantes",
    description:
      "Creación de identidades visuales que reflejen la esencia y valores de una empresa",
  },
  {
    title: "Rebranding",
    description:
      "Renovación de la identidad de una marca para actualizarla o mejorar su percepción",
  },
  {
    title: "Diseño visual para comunicación gráfica y digital",
    description:
      "Creación de elementos visuales como logotipos, banners, y materiales para web y redes sociales",
  },
  {
    title: "Animaciones para enriquecer interacción y storytelling",
    description:
      "Uso de movimientos visuales para captar atención y transmitir mensajes",
  },
];

export const DESAROLLO_DIGITALES_DATA: DATA[] = [
  {
    title: "Creación de interfaces modernas y funcionales",
    description:
      "Diseño de pantallas que sean intuitivas, estéticas y fáciles de usar",
  },
  {
    title: "Desarrollo de soluciones web personalizadas",
    description:
      "Programación de sitios y plataformas adaptadas a las necesidades específicas del cliente",
  },
  {
    title: "Organización clara del contenido",
    description:
      "Estructuración lógica y eficiente de la información para facilitar su comprensión",
  },
  {
    title: "Diseño responsive",
    description:
      "Adaptación de sitios web para que sean compatibles con dispositivos móviles, tablets y computadoras",
  },
];
