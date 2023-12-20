import Link from "next/link"
import { MotionDiv } from "./MotionDiv"
import { variants } from "../constants"
import ThemeSwitch from "./ThemeSwitch"

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
        <span className='cursor-pointer dark:text-[#2C3F50] text-white text-2xl font-bold'>
            &lt;/dev&gt;
        </span>
        <span className='cursor-pointer text-white'>
           <ThemeSwitch/>
        </span>
      </nav>
    </MotionDiv>
    </>
  )
}

export default Navbar