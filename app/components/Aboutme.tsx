import Image from "next/image"
import { ABOUT, variants, variantsLTR } from "../constants"
import { MotionDiv } from "./MotionDiv"

const Aboutme = () => {
  type AboutItem = {
    years: string,
    type:string,
  }
  return (
    <section className="grid lg:grid-cols-12 pt-[100px] lg:pt-[0px] gap-5 grid-cols-1  items-center lg:px-4 lg:pb-72 ">
        <div className="lg:col-span-12 pb-5 lg:pb-24">
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
                <h1 className="text-xs lg:text-md text-white lg:pl-1">About</h1>
                <h1 className="text-2xl md:text-5xl vio-text font-extrabold"><span className="text-white">My Code </span>Adventure</h1>
            </MotionDiv>
        </div>
        <div className="lg:col-span-6 flex flex-row justify-center">
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
            <Image src="/Coder.png" alt=""  className="about__blob h-[150px] w-[150px] lg:w-[300px] lg:h-[300px]" height={300} width={300} />
          </MotionDiv>
        </div>
        <div className="lg:col-span-6 ">
          <MotionDiv
                variants={variants}
                initial="hidden"
                transition={{
                delay:0,
                ease:"linear",
                duration:0.75,
                }}
                viewport={{amount:0}}
                whileInView="visible"
                >
             <div className="text-white text-xs lg:text-lg">
                <p className="indent-10 pb-2">
                  In 2018, I entered the programming field as a <span className="vio-text font-semibold">C# developer</span>, focusing on desktop applications, database management, and direct client training with on-the-spot debugging. In 2021, I transitioned to web development, currently employed as a <span className="vio-text font-semibold">PHP/Laravel Developer</span> in a private company. 
                </p>
                <p className="indent-10">
                  Additionally, I'm working on side projects involving <span className="vio-text font-semibold">React/Next.js</span> and <span className="vio-text font-semibold">PHP/Laravel</span>, while also improving my skills in cloud server management.
                </p>
             </div>
             <div className="flex flex-row gap-10 lg:gap-16 pt-5 ">
                  {ABOUT.map((about:AboutItem) => 
                    <div className="flex flex-col text-center align-middle">
                        <h1 className="vio-text text-2xl lg:text-5xl font-extrabold">{about.years}</h1>
                        <h1 className="text-xs lg:text-md text-white">{about.type}</h1>
                    </div>
                  )}
             </div>
          </MotionDiv>
        </div>
    </section>
  )
}

export default Aboutme