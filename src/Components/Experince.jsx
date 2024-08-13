import React from 'react'
import { motion } from 'framer-motion';
let arr=[{year:"2024-Present",Experince:"WebDevloper Intern",company:"Unified Mentor",disc:"Developed and maintained web applications using React.js and Tailwind CSS, enhancing user experience and interface design. Wrote clean, efficient, and well-documented code, adhering to industry best practices and coding standards. Participated in code reviews, providing and receiving constructive feedback to improve code quality. Debugged and resolved issues in existing codebases, ensuring optimal performance and user satisfaction. Utilized version control systems (Git) for efficient project management and collaboration. Stayed updated with the latest web development trends and technologies to incorporate innovative solutions. "
    ,techno:["React",   "JavaScript",  "TailwindCss"]}];


const Experince = () => {
  return (
    <div className='border-b-2 border-neutral-900 pb-4'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:1,y:-100}}
        transition={{duration:1.5}}className='text-center text-4xl my-16'>Experience</motion.h1> 
        <div>
            {arr.map((val)=>{
                 return <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{opacity: 1,x:0}}
                    initial={{opacity :0,x:-100}}
                    transition={{duration:1}} className='w-full lg:w-1/4'>
                   <p className='mb-2 text-sm text-neutral-400'>{val.year}</p>
                    </motion.div>
                  <motion.div  whileInView={{opacity: 1,x:0}}
                    initial={{opacity :0,x:100}}
                    transition={{duration:1.5}}className='w-full max-w-xl lg:3/4'>
                  <h6 className='mb-1 font-semibold'>{val.Experince}-<span className='text-sm text-purple-400'>{val.company}</span></h6>
                  <p className='mb-4 text-neutral-400'>{val.disc}</p>
                  <p className='mr-2 flex justify-evenly mt-3 rounded-2xl  px-1 py-2 text-sm font-medium text-purple-800 cursor-pointer'>{val.techno.map((tech)=>{
                    return <span>{tech}</span>
                  })}</p>
                  </motion.div>
                </div>
            })}

        </div>
        

    </div>
  )
}

export default Experince