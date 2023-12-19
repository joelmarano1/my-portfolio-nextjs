import Link from "next/link"
import { FaArrowRight, FaFacebookF, FaGithubAlt, FaLinkedinIn, FaTelegramPlane} from "react-icons/fa"
import {motion} from 'framer-motion'
import { MotionDiv } from "./MotionDiv"
import { variantsLTR,variantsRTL } from "../constants"
import Image from "next/image"
const Hero = () => {  
 
  return (
    <section className="grid lg:grid-cols-12 pt-[100px] lg:pt-[0px] gap-0 grid-cols-1  items-center lg:px-4 lg:pb-28 ">
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
                  <button  className="flex items-center text-center lg:text-start  p-[.63rem]  px-14 xs:px-16 lg:px-[1rem] bg-violet-800 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-violet-700 ">
                    My Projects <FaArrowRight className="ml-2"/>
                  </button> 
                </Link>
                <Link href='mailto:joelmarano1@gmail.com'>
                  <button  className="flex items-center text-center lg:text-start  p-2 outline px-14 xs:px-16 lg:px-[1rem] text-white font-semibold rounded-full shadow-md hover:text-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-opacity-75">
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
          <div className="absolute">

          </div>
          <svg className="hero__blob" viewBox="0 0 200 200">
              <defs>
                  <clipPath id="svgPath" >
                      <path fill="#FFFFFF"   d="M61.3,-50.8C74.9,-31.7,78.5,-6.5,72.3,14.9C66.2,36.3,50.3,53.9,34.4,55.3C18.6,56.7,2.8,41.9,-12.9,32.2C-28.6,22.6,-44.2,18.1,-50.9,6.5C-57.6,-5.1,-55.4,-23.8,-45.5,-42C-35.5,-60.3,-17.8,-78.1,3,-80.5C23.8,-82.9,47.6,-69.9,61.3,-50.8Z" transform="translate(100 100)" />
                  </clipPath>
              </defs>
              <image 
              className="hero__blob-img "
              xlinkHref="imghero1.jpg" 
              clipPath="url(#svgPath)"
              x={'25'}
              y={'-10'}
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