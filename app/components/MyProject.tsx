import Link from "next/link"
import { FaArrowRight, FaEye, FaFacebookF, FaGithubAlt, FaLinkedinIn, FaRegEye, FaTelegramPlane} from "react-icons/fa"
import { MotionDiv } from "./MotionDiv"
import { PROJECTS, variants, variantsLTR,variantsRTL } from "../constants"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
const MyProject = () => {  
 
  return (
    <section className="grid lg:grid-cols-12  pt-[100px] lg:pt-[0px]  grid-cols-1 gap-10 lg:gap-16 lg:px-4 lg:pb-32">
      <div className="lg:col-span-12">
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
            >
            <h1 className="text-md text-white pl-1">PROJECTS</h1>
            <h1 className="text-3xl md:text-5xl vio-text font-extrabold"><span className="text-white">Completed</span> Projects</h1>
        </MotionDiv>
      </div>
      <div className="lg:col-span-12  ">
          <div className="flex flex-row gap-5 overflow-x-scroll p-2 max-w-[1440px] hide-scrollbar ">
          {PROJECTS.map((project) => (
                <ProjectItem 
                    key={project.title}
                    title={project.title} 
                    logo={project.logo}
                    company={project.company}
                    url={project.url}
                    description={project.description}
                />
                ))}
            
          </div>
      </div>
    </section>
  )
}
type ProjectItem = {
  title: string;
  logo: string;
  company: string;
  url:string,
  description:string;
}

const ProjectItem = ({ title, logo, company,url,description }: ProjectItem) => {
return (
    <MotionDiv
    variants={variants}
    initial="hidden"
    transition={{
    delay:.5,
    ease:"anticipate",
    duration:1,
    }}
    viewport={{amount:0}}
    whileInView="visible"
    >
      <div className=" px-5 py-3 lg:p-10 min-h-[150px] max-h-[150px] lg:max-h-[308px] lg:min-h-[308px] min-w-[250px] max-w-[250px] lg:max-w-[508px] lg:min-w-[508px] rounded-lg bg-[#1F0E35] ">
        <div className="flex flex-row justify-between items-center pb-5 lg:pb-0 ">
          <div>
            <h1 className="text-md lg:text-lg font-extrabold text-white">{title}</h1>
            <h1 className="text-[.65rem] font-light text-white">{company}</h1>
          </div>
            <img src={logo} alt=""  className="lg:hidden relative top-5 lg:top-0 object-contain h-20 lg:h-36 xl:h-44 ml-10"/>
        </div>
        <div className="lg:pb-5 flex lg:flex-row justify-between  lg:items-center lg:h-44">
            <div className="text-white text-xl lg:text-lg">
              <p className="md:text-xs lg:text-sm hidden lg:block font-light">{description}</p>
            </div>
            <img src={logo} alt=""  className="hidden lg:block object-contain lg:h-36 xl:h-44 ml-10"/>
        </div>
        <div className=" text-lg lg:text-2xl text-white flex flex-row gap-5">
            <FaEye className="cursor-pointer"/>
            { url.length > 0 ? (
              <Link href={url} target="_blank">
                <FaArrowUpRightFromSquare className="cursor-pointer"/>
              </Link>
            ) : "" } 
        </div>
      </div>
    </MotionDiv>
  )
}
export default MyProject