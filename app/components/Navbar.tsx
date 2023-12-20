import Link from "next/link"
import { MotionDiv } from "./MotionDiv"
import { variants } from "../constants"

const Navbar = () => {
  return (
    <>
    <MotionDiv 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{
        delay:0,
        ease:"anticipate",
        duration:0.5,
      }}>
       <nav className="flex items-center  justify-between   px-2 md:px-2 lg:px-5 2xl:px-56 relative z-30 pt-5 pb-0 lg:pb-10">
        <span className='cursor-pointer text-white text-2xl font-bold'>
            &lt;/dev&gt;
        </span>
        <span className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
        </span>
      </nav>
    </MotionDiv>
    </>
  )
}

export default Navbar