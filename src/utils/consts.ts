import { CLIENTES_TYPE, DATA, TIMELINE_DATA_TYPE } from "./types";
import gf from "/public/clientes/gf.png";
import dr from "/public/clientes/dr.png";
import LPD from "/public/clientes/LPD.png";

export const LINKS = [
  {
    title: "Inicio",
    href: "inicio",
  },
  {
    title: "Nuestros Servicios",
    href: "servicios",
  },
  {
    title: "Metodolgia de Trabajo",
    href: "metodologia",
  },
  {
    title: "Contacto",
    href: "contacto",
  },
];

export const CLIENTS: CLIENTES_TYPE[] = [
  { img: gf, alt: "GF Barber Studio logo", scale: 70, href: "https://gfbarberstudio.com/" },
  { img: dr, alt: "DR Construcciones en steel logo", scale: 100, href: "https://drconstruccionesensteel.com/" },
  { img: LPD, alt: "Liceo Padre Domingo logo", scale: 44, href:"https://colegiopadredomingo.edu.uy/" },
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

export const TIMELINE_DATA: TIMELINE_DATA_TYPE[] = [
  {
    number: "01",
    title: "Entender negocio y objetivos del cliente",
    description:
      "Lo primero es comprender a fondo el negocio del cliente, incluyendo sus productos o servicios, así como el branding de la empresa y los objetivos que busca alcanzar.",
  },
  {
    number: "02",
    title: "Definir el tono y estilo",
    description:
      "Una vez entendamos la identidad del negocio, crearemos diferentes moodboards que nos ayuden a definir la linea grafica que vamos a seguir en el desarrollo de la web.",
  },
  {
    number: "03",
    title: "Diseño de wireframes",
    description:
      "Los wireframes son una representación visual de la estructura de un sitio web. Estos los usaremos para planificar la arquitectura y la navegación del sitio, tanto en mobile como en desktop.",
  },
  {
    number: "04",
    title: "Diseño web",
    description:
      "Una vez definidos los wireframes, procederemos a desarrollar el diseño visual del sitio web. Esto nos permitirá anticipar su apariencia y navegación, estableciendo la versión final de su aspecto.",
  },
  {
    number: "05",
    title: "Desarrollo web",
    description:
      "Con el diseño visual aprobado, iniciaremos el desarrollo del sitio web. En esta etapa, transformaremos el diseño en un producto funcional, asegurando que cada componente funcione correctamente y sea totalmente responsive.",
  },
  {
    number: "06",
    title: "Implementación del contenido",
    description:
      "Finalizado el desarrollo, pasamos a la implementación del contenido. En esta etapa, incorporamos textos, imágenes y demás elementos, garantizando una estructura clara y una comunicación efectiva.",
  },
  {
    number: "07",
    title: "Optimización SEO",
    description:
      "Una vez implementado el contenido, nos enfocamos en la optimización SEO. Este proceso mejora la visibilidad del sitio en los motores de búsqueda mediante estrategias como la optimización de palabras clave, metaetiquetas y velocidad de carga.",
  },
];

export const INPUT_DATA = [
  {
    placeholder: "Nombre",
    name: "user_name",
    type: "text",
  },
  {
    placeholder: "Apellido",
    name: "user_last_name",
    type: "text",
  },
  {
    placeholder: "Empresa",
    name: "user_company",
    type: "text",
  },
  {
    placeholder: "Email",
    name: "user_email",
    type: "email",
  },

  {
    placeholder: "Telefono",
    name: "user_phone",
    type: "tel",
  },
  {
    placeholder: "Mensaje",
    name: "message",
  },
];
