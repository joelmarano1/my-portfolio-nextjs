import Link from "next/link"
import { FaArrowRight, FaFacebookF, FaGithubAlt, FaLinkedinIn, FaTelegramPlane} from "react-icons/fa"
import {motion} from 'framer-motion'
import { MotionDiv } from "./MotionDiv"
import { variantsLTR,variantsRTL } from "../constants"
const Hero = () => {  
 
  return (
    <section className="grid lg:grid-cols-12 pt-[100px] lg:pt-[0px] gap-0 grid-cols-1  items-center lg:px-4 pb-12 ">
      <MotionDiv 
        variants={variantsLTR}
        initial="hidden"
        transition={{
          delay:0,
          ease:"anticipate",
          duration:0.75,
        }}
        viewport={{amount:0}}
        whileInView="visible"
        className="lg:col-span-6">
        <div className="grid lg:grid-cols-9 grid-cols-6">
          <div className="lg:col-span-1 col-span-1">
            <div className="flex flex-col justify-items-center pt-14 gap-10 text-2xl text-white">
              <Link href={'https://www.facebook.com/jhoel029'} target="_blank">
                <FaFacebookF />
              </Link>
              <Link href={'https://www.linkedin.com/in/joel-mara%C3%B1o-b33623187/'} target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link href={'https://github.com/joelmarano1'} target="_blank">
                <FaGithubAlt/>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-5">
            <div className=" mb-[50px] lg:mb-0 text-white">
              <div className="flex items-center">
                  <span className="text-md sm:text-3xl pl-1 font-medium "> Hello, I'm </span>
                  <span className='vio-text text-lg sm:text-3xl pl-2 font-semibold'> Joel Maraño <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></span>  
              </div>
              <h1 className="pt-3 text-5xl lg:text-6xl font-bold "><span className="">Full Stack</span> <span className="vio-text">Developer</span></h1>
              <p className='lg:pb-10 pb-8 pt-2 pl-1 text-[.65rem]  md:text-md lg:text-lg text-gray-400'>A dedicated programmer who crafts websites and applications full-time, driven by both passion and livelihood.</p>
              <div className="flex flex-col lg:flex-row lg:items-center justify-start gap-4">
                <Link href='#'>
                  <button  className="flex items-center text-center lg:text-start  p-[.63rem] px-16 lg:px-[1rem] bg-violet-800 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-violet-700 ">
                    My Projects <FaArrowRight className="ml-2"/>
                  </button> 
                </Link>
                <Link href='mailto:joelmarano1@gmail.com'>
                  <button  className="flex items-center text-center lg:text-start  p-2 outline px-16 lg:px-[1rem] text-white font-semibold rounded-full shadow-md hover:text-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-opacity-75">
                    Contact Me <FaTelegramPlane className="ml-2"/>
                  </button> 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
      <MotionDiv 
        variants={variantsRTL}
        initial="hidden"
        whileInView="visible"
        transition={{
          delay:0,
          ease:"anticipate",
          duration:0.75,
        }}
        viewport={{amount:0}}
        className="lg:col-span-6">
        <div className="lg:block hidden">
          <svg className="hero__blob  " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs >
              <clipPath id="shape"  >
                <path fill="#9340FF" d="M48.6,-54.3C61.7,-46.9,70.1,-30.4,73.6,-12.7C77,5,75.5,23.9,65.4,34.4C55.3,45,36.7,47.3,20.3,51.5C3.8,55.6,-10.4,61.6,-20.4,57.4C-30.4,53.1,-36.2,38.7,-39.6,26.1C-43.1,13.5,-44.3,2.7,-45.9,-11.6C-47.5,-25.9,-49.6,-43.7,-42,-52C-34.4,-60.3,-17.2,-59.2,0.3,-59.5C17.7,-59.8,35.5,-61.6,48.6,-54.3Z" transform="translate(100 100)" />
              </clipPath>
            </defs>
            <image 
              className="hero__blob-img "
              xlinkHref="imghero1.jpg" 
              clipPath="url(#shape)"
              x={'52'}
              y={'42'}
            />
          </svg>
        </div>
        <div className="lg:hidden block">
            <img src="imghero1.jpg" className="rounded-3xl w-full h-48 object-cover" alt="" />
        </div>
      </MotionDiv>
    </section>
  )
}

export default Hero