"use client";
import { useState } from "react";
import { CloseIcon, OpenIcon } from "./icons";

export function ServiciosCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number | null) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex w-full gap-3 flex-col items-center">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`w-full bg-[#1F1F1F] shadow-lg transition-all p-1 duration-300 ${
            expandedIndex === index ? "h-[400px]" : "h-[200px]"
          } relative flex items-end justify-end`}
        >
          <button className="absolut" onClick={() => toggleCard(index)}>
            {expandedIndex === index ? <CloseIcon /> : <OpenIcon />}
          </button>
        </div>
      ))}
    </div>
  );
}
