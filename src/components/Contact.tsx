import { INPUT_DATA } from "@/utils/consts";
import { goldman } from "@/utils/fonts";
import { FormEvent, useRef } from "react";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="flex w-full flex-col items-center justify-center gap-8">
      <h2
        className={` ${goldman.className} text-5xl tracking-[0.02em] text-white md:py-10 md:text-6xl`}
      >
        Contactanos
      </h2>

      <div className="flex h-full md:h-[60vh] px-5 md:px-0 w-full flex-col items-center justify-center gap-5 md:flex-row">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-[25%]"
        >
          {INPUT_DATA.map((input) =>
            input.name !== "message" ? (
              <input
                key={input.name}
                className="my-3 w-full border-b-2 border-main-default bg-transparent p-2 text-white outline-none"
                placeholder={input.placeholder}
                name={input.name}
              />
            ) : (
              <textarea
                key={input.name}
                className="my-3 h-[210px] w-full rounded-md border-2 border-main-default bg-transparent p-2 text-white outline-none"
                placeholder={input.placeholder}
                name={input.name}
                style={{ resize: "none" }}
              />
            ),
          )}
        </form>

        <div className="h-[500px] md:h-full w-full rounded-md bg-[#3B3B3B] md:w-[25%]"></div>
      </div>
    </section>
  );
}
