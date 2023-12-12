import Link from "next/link"
import { FaArrowRight, FaEye, FaFacebookF, FaGithubAlt, FaLinkedinIn, FaRegEye, FaTelegramPlane} from "react-icons/fa"
import { MotionDiv } from "./MotionDiv"
import {  variants, variantsLTR,variantsRTL } from "../constants"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { TbBrandReact, TbBrandTailwind,TbBrandBootstrap } from "react-icons/tb"
import {FaPhp,FaLaravel} from "react-icons/fa"
import {SiJquery}  from "react-icons/si";
const MyProject = () => {  
  const PROJECTS = [
    {
        title: 'PAWTASTIC',
        logo:'/ssprojects/paw.png',
        company:'PETS',
        url:'https://pawtastic-tawny.vercel.app/',
        description:"An work examination related to React.js that I transformed into my personal project; essentially, it's a scheduling system designed for pets.",
        stack:  [
          TbBrandReact,
          TbBrandTailwind,
        ]
    },
    {
        title: 'CollectPro Listings',
        logo:'/ssprojects/collectprologo.png',
        company:'CollectGroup UK',
        url:'',
        description:"An e-commerce platform allowing users to seamlessly integrate eBay, Shopify, and Etsy accounts, facilitating effortless cross-listing of products across diverse e-commerce channels.",
        stack: [
          FaPhp,
          FaLaravel,
          TbBrandBootstrap,
          SiJquery,
        ]
    },
    {
        title: 'OTTSS v.1',
        logo:'/ssprojects/tieza-logo.png',
        company:'TIEZA',
        url:'https://traveltaxservices.tieza.online/public/fulltax',
        description:"A web app enabling convenient online tax payments for Philippine passengers. Present the acknowledgment receipt at the airport for a hassle-free experience.",
        stack: [
          FaPhp,
          FaLaravel,
          TbBrandBootstrap,
          SiJquery,
        ]
    },
];
  return (
    <section className="grid lg:grid-cols-12  pt-[100px] lg:pt-[0px]  grid-cols-1 gap-10 lg:gap-10 lg:px-4 lg:pb-32">
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
                    stacks={project.stack}
                />
                ))}
            
          </div>
      </div>
      <div className="lg:col-span-12">
      

      </div>
    </section>
  )
}
interface IconProps {
  size?: number;
}
type ProjectItem = {
  title: string;
  logo: string;
  company: string;
  url:string,
  description:string;
  stacks: React.ElementType<IconProps>[] ,
}

const ProjectItem = ({ title, logo, company,url,description,stacks }: ProjectItem) => {
return (
    <MotionDiv
    variants={variants}
    initial="hidden"
    transition={{
    delay:0,
    ease:"anticipate",
    duration:.5,
    }}
    viewport={{amount:0}}
    whileInView="visible"
    >
      <div  className=" px-5 py-3 lg:p-10 min-h-[130px] max-h-[150px] lg:max-h-[308px] lg:min-h-[308px] min-w-[250px] max-w-[250px] lg:max-w-[508px] lg:min-w-[508px] rounded-lg bg-[#201537] ">
        <div className="flex flex-row justify-between items-center pb-3 lg:pb-0 ">
          <div>
            <h1 className="text-md lg:text-lg font-extrabold text-white">{title}</h1>
            <h1 className="text-[.65rem] lg:text-xs font-light text-white">{company}</h1>
          </div>
            <img src={logo} alt=""   className="lg:hidden  object-contain h-20 lg:h-36 xl:h-44 ml-10"/>
        </div>
        <div className="pb-3 lg:pb-5 flex lg:flex-row justify-between lg:items-center lg:h-44">
            <div className="text-white text-xl lg:text-lg">
              <p className="md:text-xs lg:text-xs hidden lg:block font-light">{description}</p>
            </div>
            <img src={logo} alt="" draggable="false" className="hidden lg:block object-contain lg:h-36 xl:h-40 ml-10"/>
        </div>
        <div className=" text-lg lg:text-2xl text-white flex flex-row justify-between items-center gap-5">
            <div className="flex flex-row gap-2">
                {stacks.map((IconComponent, index) => (
                  <IconComponent key={index}  className="text-[#9543ff] text-lg lg:text-2xl" />
                ))}
            </div>
            <div className="flex flex-row gap-3">
              <FaEye className="cursor-pointer  hover:text-[#9543ff]"/>
              { url.length > 0 ? (
                <Link href={url} target="_blank">
                  <FaArrowUpRightFromSquare className="cursor-pointer hover:text-[#9543ff]"/>
                </Link>
              ) : "" } 
            </div>
        </div>
      </div>
    </MotionDiv>
  )
}
export default MyProject