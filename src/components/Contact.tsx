"use client";

import { INPUT_DATA } from "@/utils/consts";
import { goldman } from "@/utils/fonts";
import { FormEvent, useEffect, useRef } from "react";
import { ContactInfo } from "./ui/ContactInfo";
import Aos from "aos";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="flex w-full flex-col items-center justify-center gap-14 pb-14">
        <div
          data-aos="zoom-in"
          className="flex w-full flex-col items-center justify-center gap-1 md:pt-10"
        >
          <h2
            className={`${goldman.className} text-4xl tracking-[0.1em] text-white md:text-6xl`}
          >
            CONTACTANOS
          </h2>
          <h3 className="text-lg font-[200] tracking-wider text-white">
            ¿Como podemos ayudarte?
          </h3>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-5 md:w-1/2 md:flex-row-reverse md:items-start mb-6  md:px-0">
          <form
            data-aos="fade-left"
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
            className="w-full mb-6"
          >
            {INPUT_DATA.map((input) =>
              input.name !== "message" ? (
                <input
                  key={input.name}
                  className="my-3 w-full border-b-2 border-main-default bg-transparent p-2 text-lg tracking-wider text-white outline-none"
                  placeholder={input.placeholder}
                  name={input.name}
                />
              ) : (
                <textarea
                  key={input.name}
                  className="my-3 h-[210px] w-full rounded-md border-2 border-main-default bg-transparent p-2 text-lg tracking-wider text-white outline-none"
                  placeholder={input.placeholder}
                  name={input.name}
                  style={{ resize: "none" }}
                />
              ),
            )}
          </form>

          <ContactInfo footer={false} header={false} />
        </div>
      </section>
      <div className="flex h-fit w-full items-center justify-center bg-main-default py-7 text-center">
        <h3 className={`${goldman.className} text-3xl text-white md:text-4xl`}>
          VAMOS A SEGUIR CRECIENDO JUNTOS
        </h3>
      </div>
    </>
  );
}
