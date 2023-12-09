import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
    //  weight: "700",
    subsets: ['latin'],
    display: 'swap',
    })
export const variantsLTR = {
    hidden: {  opacity:0,  x:-100,},
    visible: {opacity: 1, x:0},
};
export const variantsRTL = {
    hidden: {  opacity:0,  x:100,},
    visible: {opacity: 1, x:0},
};