import profilepic from "../assets/Namandeep.jpg";
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div className="border-b-2 border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                < motion.h1 whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-6xl" > NAMANDEEP SINGH</motion.h1>
                <motion.span  whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">FrontEnd Developer</motion.span>
                <motion.p whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} className="my-2 max-w-xl py-6 font-light tracking-tighter">An individual with a keen interest in Software programs, possessing good interpersonal and analytical 
skills, Post graduated in Computer Science and Application Having Ability to create innovative & 
interactive web designs to boost customer engagement. Excellent knowledge in Front end 
technologies like Javascript ,HTML,CSS , React.Js & other UI frameworks and Java in backend 
technology</motion.p>
            </div>
            </div>
            <div className="w-full lg:w-96 lg:p-8 ml-24">
            <div className="flex justify-center
            ">
                <motion.img whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1.5}} src={profilepic} alt="Namandeep Singh" className="rounded-3xl border-4 border-neutral-800" />
            </div>

            </div>
        </div>
    </div>
  ) 
}

export default Hero