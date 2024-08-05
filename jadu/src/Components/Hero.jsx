import profilepic from "../assets/Namandeep.jpg";
const Hero = () => {
  return (
    <div className="borer-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">NAMANDEEP SINGH</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">FrontEnd Developer</span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">An individual with a keen interest in Software programs, possessing good interpersonal and analytical 
skills, Post graduated in Computer Science and Application Having Ability to create innovative & 
interactive web designs to boost customer engagement. Excellent knowledge in Front end 
technologies like Javascript ,HTML,CSS , React.Js & other UI frameworks and Java in backend 
technology</p>
            </div>
            </div>
            <div className="w-full lg:w-96 lg:p-8 ml-24">
            <div className="flex justify-center
            ">
                <img src={profilepic} alt="Namandeep Singh" className="rounded-3xl border-4 border-neutral-800" />
            </div>

            </div>
        </div>
    </div>
  ) 
}

export default Hero