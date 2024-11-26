import { ServiciosCards } from "./ui/ServiciosCards";

export function Servicios() {
  return (
    <section className="mt-[110vh]">
      <div className="h-[10vh] bg-main-default w-full flex items-center justify-center">
        <h2 className="text-3xl text-white">Nuestros servicios</h2>
      </div>
     <ServiciosCards />
    </section>
  );
}
