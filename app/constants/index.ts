import { Montserrat } from "next/font/google";
import PrevArrow from "../components/slick-customize/PrevArrow"

export const montserrat = Montserrat({
    weight: ['400','500','600','700'],
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
export const SCREENSHOTS = [
    {
        title: 'Cartera Official',
        tag:'cartera',
        images:[
            '/ssprojects/cartera1.png',
            '/ssprojects/cartera2.png',
        ]
    },
    {
        title: 'OTTSS v.1',
        tag:'ottss',
        images:[
            '/ssprojects/onlinettax.png',
            '/ssprojects/onlinettax2.png',
            '/ssprojects/onlinettax3.png',
            '/ssprojects/onlinettax4.png',
        ]
    },
    {
        title: 'CollectPro Listings',
        tag:'listings',
        images:[
            '/ssprojects/crosslist.png',
            '/ssprojects/crosslist2.png',
            '/ssprojects/crosslist3.png',
            '/ssprojects/crosslist4.png',
        ]
    },
    {
        title: 'PAWTASTIC',
        tag:'pawtastic',
        images:[
            '/ssprojects/paw1.png',
            '/ssprojects/paw2.png',
            '/ssprojects/paw3.png',
        ]
    },
];
export const ABOUT = [
    {
        years: '7+',
        type: 'Years of Experience'
    },
    {
        years: '9+',
        type: 'Finished Projects'
    },
    {
        years: '6',
        type: 'Companies Worked'
    },
]