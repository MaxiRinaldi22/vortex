import { DATA } from "@/utils/types";

import { useState } from "react";

export function ListItem({ title, info }: { title: string; info: DATA[] }) {
  const [open, setOpen] = useState(Array(info.length).fill(false));

  const handleOpen = (index: number) => {
    setOpen((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item)),
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 ">
      <div className="h-44 w-44 rounded-full border-2 border-main-default"></div>
      <h3 className="text-2xl tracking-widest text-white pb-5">{title}</h3>
      <ul className="flex flex-col gap-5 text-base font-[200] w-[450px] text-white">
        {info.map((item, i) => (
          <li key={item.title}  className="flex flex-col w-full px-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-white"></div>
                <h4>{item.title}</h4>
              </div>
              <button onClick={() => handleOpen(i)}>
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
            {open[i] && <p className="font-[100] tracking-widest mt-2 text-sm">{item.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
