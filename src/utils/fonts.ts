import { Lexend, Goldman } from "next/font/google";

export const lexend = Lexend({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const goldman = Goldman({
    subsets: ["latin"],
    weight: ["400", "700"],
});