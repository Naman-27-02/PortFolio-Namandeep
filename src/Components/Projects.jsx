import React from 'react'
import PROJ from "../assets/P3.png";
import PROJ2 from "../assets/P2.png";
import PROJ1 from "../assets/P1.jpeg";
import { motion } from 'framer-motion';
let arr=[{title:"Tic-Tac-Teo Game",img:PROJ1,desc:"The Tic-Tac-Toe Game is a classic two-player game implemented using HTML, CSS, and Java. This project aims to provide an engaging and interactive experience for users by allowing them to play against each other on a digital platform. The game features a simple and intuitive user interface, making it easy for players of all ages to enjoy.",techno:["Html        ",       "Css        ",   "Java Script"]}
    ,{title:"Stone Paper Scissors Games",img:PROJ2,desc:"The Stone-Paper-Scissors Game is a classic hand game implemented using HTML, CSS, and JavaScript. This project aims to provide a simple and fun digital version of the popular game, allowing players to compete against the computer. The game features a clean and intuitive user interface, making it accessible and enjoyable for users of all ages.",techno:["Html        ","Css        ","Java Script"]},
    {title:"Currency Converter",img:PROJ,desc:"The Currency Converter application is a web-based tool developed using ReactJS. It allows users to convert amounts between different currencies with real-time exchange rates. The application features a user-friendly interface and provides quick and accurate currency conversion, making it a valuable tool for travelers, businesses, and anyone dealing with multiple currencies.",techno:["React JS"]}]

const Projects = () => {
  return (
    <div className='border-b-2 border-neutral-900 pb-4'>
        <motion.div  whileInView={{opacity:1,y:0}}
        initial={{opacity:1,y:-100}}
        transition={{duration:1.5}}className='text-center my-20 text-4xl'>Projects</motion.div>
       <div>
        {
            arr.map((val)=>{
                return <div className=' mb-8  flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{opacity:1,x:0}}
                    initial={{opacity:1,x:500}}
                    transition={{duration:2}}className='w-full lg:1/4'>
                    <img src={val.img} width={300} height={300}alt="" className='mb-6 rounded' />
                    </motion.div>
                     <motion.div
                     whileInView={{opacity:1,x:0}}
                     initial={{opacity:1,x:-100}}
                     transition={{duration:2}}>
                      <h6 className='mb-2 font-semibold'>{val.title}</h6>
                      <p className='mb-4 text-neutral-400'>{val.desc}</p>
                        <p className='mr-2 flex bg-neutral-900 w-80 mt-3 rounded-2xl  px-1 py-2 text-sm font-medium text-purple-800 cursor-pointer'>
                            <span className='text-white font-semibold'>Technologies Used-</span>
                            {
                                val.techno
                            }
                        </p>
                        
                        
                     
                     </motion.div>
                    </div>
        
            })
        }
       </div>
        
    </div>
  )
}

export default Projects