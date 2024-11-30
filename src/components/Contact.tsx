"use client";

import { INPUT_DATA } from "@/utils/consts";
import { goldman } from "@/utils/fonts";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ContactInfo } from "./ui/ContactInfo";
import emailjs from "@emailjs/browser";
import Aos from "aos";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_last_name: "",
    user_company: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current ?? "",
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );

    setMensajeEnviado(true);
    setFormData({
      user_name: "",
      user_last_name: "",
      user_company: "",
      user_email: "",
      user_phone: "",
      message: "",
    });
  };

  return (
    <>
      <section
        id="contacto"
        className="flex w-full flex-col items-center justify-center gap-14 pb-14"
      >
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

        <div className="mb-6 flex h-full w-full flex-col items-center justify-center gap-5 px-5 md:w-1/2 md:flex-row-reverse md:items-start md:px-0">
          <form
            data-aos="fade-left"
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
            className="mb-6 w-full"
          >
            {INPUT_DATA.map((input) =>
              input.name !== "message" ? (
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  key={input.name}
                  className="my-3 w-full border-b-2 border-main-default bg-transparent p-2 text-lg tracking-wider text-white outline-none"
                  placeholder={input.placeholder}
                  name={input.name}
                  required
                  value={formData[input.name as keyof typeof formData]}
                />
              ) : (
                <textarea
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  key={input.name}
                  className="my-3 h-[210px] w-full rounded-md border-2 border-main-default bg-transparent p-2 text-lg tracking-wider text-white outline-none"
                  placeholder={input.placeholder}
                  name={input.name}
                  value={formData[input.name as keyof typeof formData]}
                  style={{ resize: "none" }}
                />
              ),
            )}

            <button
              type="submit"
              className={`z-50 flex h-12 w-full cursor-pointer items-center justify-center rounded-full border-2 border-main-default bg-main-default px-7 py-2 text-xl tracking-[0.2em] text-white transition-all duration-300 will-change-transform hover:bg-transparent hover:text-main-default ${goldman.className}`}
            >
              ENVIAR
            </button>
            {mensajeEnviado && (
              <p className="pt-3 text-center font-[200] tracking-widest text-white">
                Muchas gracias por comunicarte con nosotros. En breve nos
                pondremos en contacto.
              </p>
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
