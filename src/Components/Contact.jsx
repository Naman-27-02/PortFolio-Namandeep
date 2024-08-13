import { motion } from "framer-motion";
function Contact()
{
    return(
        <div className="border-b-2 border-neutral-900 pb-20">
            < motion.h2 whileInView={{opacity:1,y:0}}
        initial={{opacity:1,y:-100}}
        transition={{duration:1.5}}className="my-10 text-center text-4xl">Get in Touch</motion.h2>
            <motion.div whileInView={{opacity: 1,x:0}}
                    initial={{opacity :0,x:100}}
                    transition={{duration:1.5}}className="text-center tracking-tighter">
             <p className="my-4">17/33 Sadar Bazar Sagar Madhya Pradesh</p>
             <p className="my-4">9109848958</p>
             <a href="#"className="my-4 border-b">namandeep259@gmail.com</a>
            </motion.div>
        </div>
    )
}
export default Contact;
