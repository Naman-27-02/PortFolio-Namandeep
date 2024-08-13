import React from 'react'
import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { animate, motion } from 'framer-motion';
const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
       duration:duration,
       ease:"linear",
       repeat:Infinity,
       repeatType:"reverse",
    }
  },

});
  
const Techologies = () => {
  return (
    <div className='border-b-2 border-neutral-900 pb-24'>
        <motion.h1  whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}} className='text-center text-4xl my-16'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div  variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandJavascript className='text-7xl text-yellow-300'/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div  variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div variants={iconVariants(1)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className='text-7xl text-red-500'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Techologies