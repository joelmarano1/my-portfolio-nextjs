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
        title: 'OTTSS v.1',
        logo:'/ssprojects/tieza-logo.png',
        company:'TIEZA',
        url:'https://traveltaxservices.tieza.online/public/fulltax',
        description:"A web app enabling convenient online tax payments for Philippine passengers. Present the acknowledgment receipt at the airport for a hassle-free experience."
    },
    {
        title: 'CollectPro Listings',
        logo:'/ssprojects/collectprologo.png',
        company:'CollectGroup UK',
        url:'',
        description:"An e-commerce platform allowing users to seamlessly integrate eBay, Shopify, and Etsy accounts, facilitating effortless cross-listing of products across diverse e-commerce channels."
        
    },
];