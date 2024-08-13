import AboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";
function About()
{
    return(
      <div className="border-b-2 border-neutral-900 pb-4">
        <motion.h1 whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}} className="my-20 text-center text-4xl">About 
            <span className="text-neutral-500"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
            <motion.div whileInView={{opacity: 1,x:0}}
            initial={{opacity:0 ,x:-100}}
            transition={{duration :0.5}}className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={AboutImg} alt="" className="rounded-2xl"/>
            </div>
            </motion.div>
            <div className="w-full lg:w-1/2">
            <motion.div whileInView={{opacity: 1,x:0}}
            initial={{opacity:0 ,x:100}}
            transition={{duration :0.5}}
            className="flex justify-center lg:justify-start">
                <p className="my-4 max-w-xl  py-6">I’m a passionate Frontend Developer with a strong focus on creating dynamic and engaging web applications. I specialize in React and  other Frontend Technologies .I have a good Knowledge of Java, leveraging these technologies to build responsive and user-friendly interfaces.
In addition to my technical skills, I have a keen eye for design and a deep understanding of user experience principles. I enjoy tackling complex problems and turning them into simple, beautiful solutions.
When I’m not coding, you’ll find me indulging in my hobbies, which include gaming and playing cricket. These activities not only help me relax but also teach me the importance of strategy, teamwork, and quick decision-making – skills that are invaluable in the tech world.
I’m always excited to learn new technologies and take on new challenges. Let’s create something amazing together!</p>
            </motion.div>
            </div>
        </div>
      </div>
    )
}
export default About