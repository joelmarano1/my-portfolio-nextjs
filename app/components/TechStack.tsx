import Link from "next/link"
import { FaArrowRight, FaCpanel, FaFacebookF, FaGithubAlt, FaLaravel, FaLinkedinIn, FaPhp, FaTelegramPlane} from "react-icons/fa"
import { MotionDiv } from "./MotionDiv"
import { variants, variantsLTR,variantsRTL } from "../constants"
import { TbBrandBootstrap, TbBrandCSharp, TbBrandCss3, TbBrandJavascript, TbBrandLaravel, TbBrandNextjs, TbBrandPhp, TbBrandReact, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { SiChakraui, SiDevexpress, SiHtml5, SiJquery, SiMysql, SiVisualbasic } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
const TechStack = () => {  
 
  return (
    <section className="grid lg:grid-cols-12  pt-[100px] lg:pt-[0px]  grid-cols-1 gap-10 lg:gap-10 lg:px-4 pb-32">
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
            <h1 className="text-md text-white pl-1">SKILLS</h1>
            <h1 className="text-3xl md:text-5xl vio-text font-extrabold"><span className="text-white">My Tech</span>Stack</h1>
        </MotionDiv>
      </div>
      <div className="lg:col-span-6 rounded-lg h-full ">
        <MotionDiv 
            variants={variants}
            initial="hidden"
            transition={{
            delay:0.5,
            ease:"linear",
            duration:1,
            layout:'position'
            }}
            viewport={{amount:0}}
            whileInView="visible">
            
            <h1 className="text-2xl md:text-3xl font-semibold text-white underline underline-offset-8 decoration-[#9340FF]">Frontend </h1>
            <div className=" mt-5 text-slate-300  text-center grid grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-10 text-xs ">
                <div className="flex flex-col items-center scaleLogo hover:text-[#E8D44D]">
                    <TbBrandJavascript size="52" />
                    <span>Javascript</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#1163A4]">
                    <SiJquery size="52" />
                    <span>JQuery</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#5ED3F3]">
                    <TbBrandReact size="52" />
                    <span>React.js</span>
                </div>
                <div className="flex flex-col items-center scaleLogo ">
                    <TbBrandNextjs size="52" />
                    <span>Next.js</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#2F74C0]">
                    <TbBrandTypescript size="52" />
                    <span>Typescript</span>
                </div>  
                <div className="flex flex-col items-center scaleLogo hover:text-[#38BDF8]">
                    <TbBrandTailwind size="52" />
                    <span>Tailwind</span>
                </div>  
                <div className="flex flex-col items-center scaleLogo hover:text-[#319795]">
                    <SiChakraui size="52" />
                    <span>ChakraUI</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#7B11F3]">
                    <TbBrandBootstrap size="52" />
                    <span>Bootstrap</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#E96228]">
                    <AiOutlineHtml5 size="52" />
                    <span>HTML</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#2862E9]">
                    <TbBrandCss3 size="52" />
                    <span>CSS</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#EC7E21]">
                    <SiDevexpress size="52" />
                    <span>DevExpress</span>
                </div>
            </div>
        </MotionDiv>
      </div>
      <div  className="lg:col-span-6 rounded-lg h-full ">
        <MotionDiv 
            variants={variants}
            initial="hidden"
            transition={{
            delay:0.5,
            ease:"easeIn",
            duration:1,
            layout:'position'

            }}
            viewport={{amount:0}}
            whileInView="visible"
        >
            <h1 className="text-2xl md:text-3xl font-semibold text-white underline underline-offset-8 decoration-[#9340FF]">Backend </h1>
            <div className=" mt-5 text-slate-300  text-center grid grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-10 text-xs ">
                <div className="flex flex-col items-center scaleLogo hover:text-[#57629E] ">
                    <FaPhp size="52" />
                    <span>PHP</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#E8392C]">
                    <FaLaravel size="52" />
                    <span>Laravel</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#964D91]">
                    <TbBrandCSharp size="52" />
                    <span>CSharp</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#195D93]">
                    <SiVisualbasic size="52" />
                    <span>VB.NET</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#42759C]">
                    <SiMysql size="52" />
                    <span>MySQL</span>
                </div>
                <div className="flex flex-col items-center scaleLogo hover:text-[#F7692B]">
                    <FaCpanel size="52" />
                    <span>cPanel</span>
                </div>  
            </div>
        </MotionDiv>
      </div>
    </section>

   
  )
}

export default TechStack