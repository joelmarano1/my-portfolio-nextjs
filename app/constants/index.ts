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
export const variants = {
    hidden: {  opacity:0, },
    visible: {opacity: 1, },
};
export const PROJECTS = [
    {
        title: 'PAWTASTIC',
        logo:'/ssprojects/paw.png',
        company:'PETS',
        url:'https://pawtastic-tawny.vercel.app/',
        description:"An work examination related to React.js that I transformed into my personal project; essentially, it's a scheduling system designed for pets.",
    
    },
    {
        title: 'CollectPro Listings',
        logo:'/ssprojects/collectprologo.png',
        company:'CollectGroup UK',
        url:'',
        description:"An e-commerce platform allowing users to seamlessly integrate eBay, Shopify, and Etsy accounts, facilitating effortless cross-listing of products across diverse e-commerce channels.",
        
    },
    {
        title: 'OTTSS v.1',
        logo:'/ssprojects/tieza-logo.png',
        company:'TIEZA',
        url:'https://traveltaxservices.tieza.online/public/fulltax',
        description:"A web app enabling convenient online tax payments for Philippine passengers. Present the acknowledgment receipt at the airport for a hassle-free experience."
    },
];