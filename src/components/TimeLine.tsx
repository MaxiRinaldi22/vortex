import { TIMELINE_DATA } from "@/utils/consts";
import { goldman } from "@/utils/fonts";

export function TimeLine() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 md:gap-24">
      <div className="flex w-full flex-col items-center justify-center gap-5 px-5 md:px-0">
        <h2
          className={` ${goldman.className} text-3xl tracking-[0.02em] text-white md:text-7xl`}
        >
          Metodologia de trabajo
        </h2>
        <p className="max-w-[800px] font-[200] text-white md:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid a
          corrupti quam voluptatem inventore est nam accusamus voluptas
          exercitationem. Soluta iste, libero aliquam fugit voluptatem in nisi
          corrupti ullam et ut iusto neque, cupiditate ipsum?
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center px-5">
        {/* Línea vertical */}
        <div className="absolute left-9 h-full w-[2px] bg-main-default md:left-1/2"></div>

        {/* Elementos de la línea de tiempo */}
        {TIMELINE_DATA.map((step, index) => (
          <div
            key={index}
            className={`relative flex w-full items-center md:justify-center md:pl-[472px] ${index % 2 === 0 ? "flex-row md:pl-[472px]" : "md:flex-row-reverse md:mr-[940px]"}`}
          >
            <p
              className={`top-42 absolute hidden md:block ${index % 2 !== 0 ? "right-[calc(50%-36rem)]" : "left-[836px]"} text-5xl text-white`}
            >
              {step.number}
            </p>
            {/* Círculo */}
            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-[5px] border-[#1f1f1f] bg-main-default"></div>

            <div
              className={`flex flex-col items-start pt-32 md:pt-20  ${index % 2 === 0 ? "pl-5 md:pl-5" : "pl-5 md:pl-0 md:pr-5"}`}
            >
              <p className="absolute top-16 text-5xl text-white md:hidden">
                {step.number}
              </p>
              {/* Contenedor del cuadro con punta */}
              <div className="relative h-64 w-72 rounded-lg bg-[#3B3B3B] p-2 text-white md:h-36 md:w-[450px]">
                {/* Punta del cuadro */}
                <div className={`absolute right-[286px] top-[54px] h-0 w-0 border-y-[10px] border-r-[10px] border-y-transparent border-r-[#3B3B3B] ${index % 2 !== 0 ? "md:rotate-180 md:-right-[10px]" : "md:right-[450px]"} md:top-[22px]`}></div>
                {/* Contenido del cuadro */}
                <h4 className="text-base md:text-xl tracking-wider w-full">{step.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
