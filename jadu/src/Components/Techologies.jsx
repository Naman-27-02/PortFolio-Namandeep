import React from 'react'
import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
const Techologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='text-center text-4xl my-16'>Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className='text-7xl text-yellow-300'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className='text-7xl text-orange-600'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className='text-7xl text-red-500'/>
            </div>
        </div>
    </div>
  )
}

export default Techologies