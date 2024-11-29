export function ContactInfo({
  footer,
  header,
}: {
  footer: boolean;
  header: boolean;
}) {
  return (
    <div
      data-aos={!header && !footer ? "fade-right" : ""}
      className={`flex h-full w-full items-start justify-start gap-5 p-2 ${header ? "flex-col md:flex-row" : "flex-col"}`}
    >
      <div className="flex items-center justify-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={footer ? 40 : 60}
          height={footer ? 40 : 60}
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"
          />
        </svg>
        <div>
          <h3
            className={`${footer ? "text-base" : "text-xl"} tracking-widest text-white`}
          >
            TELEFONO
          </h3>
          <p
            className={`text-lg font-[200] tracking-wider text-white ${footer ? "text-sm" : "text-xl"}`}
          >
            (+598) 092 024 300
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={footer ? 40 : 60}
          height={footer ? 40 : 60}
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
          />
        </svg>
        <div>
          <h3
            className={`${footer ? "text-base" : "text-xl"} tracking-widest text-white`}
          >
            EMAIL
          </h3>
          <p
            className={`text-lg font-[200] tracking-wider text-white ${footer ? "text-sm" : "text-xl"}`}
          >
            websvortex@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
