import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
   <img src={logo} className="mx-2 w-10"alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin className="cursor-pointer"/>
            <FaGithub className="cursor-pointer"/>
            <FaInstagram className="cursor-pointer"/>
            <FaSquareXTwitter className="cursor-pointer"/>

        </div>
    </nav>
  )
}

export default Navbar