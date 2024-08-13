import logo from "../assets/NS.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import { motion } from "framer-motion";
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
})
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
   <motion.img variants={iconVariants(1)} initial="initial" animate="animate"src={logo} className="mx-2 w-20 h-20 rounded-3xl"alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <motion.a variants={iconVariants(2)} initial="initial" animate="animate" href="https://www.linkedin.com/in/namandeep-singh-b5205117a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin/></motion.a>
            <motion.a variants={iconVariants(3)} initial="initial" animate="animate"href="https://github.com/Naman-27-02">
            <FaGithub className="cursor-pointer"/>
            </motion.a>
            <motion.a  variants={iconVariants(2.5)} initial="initial" animate="animate"href="https://www.instagram.com/singh.naman27/">
            <FaInstagram/></motion.a>
            <motion.a variants={iconVariants(4)} initial="initial" animate="animate"href="">
            <FaSquareXTwitter className="cursor-pointer"/>
            </motion.a>
            

        </div>
    </nav>
  )
}

export default Navbar