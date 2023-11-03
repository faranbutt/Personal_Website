'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu, XCircle } from "lucide-react";
import { useState } from "react";


export default function Navbar(){
const navParts = [
    {
        key:1,
        part:"About",
        link:'#about'
    },
    {
        key:2,
        part:"Experience",
        link:"#experience"
    },
    {
        key:3,
        part:"Skills",
        link:"#skills"

    },
    {
        key:4,
        part:"Projects",
        link:"#projects"
    },
]
const [menuOpen, setisMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    console.log("Fire")
    setisMenuOpen(!menuOpen);
  }
    return (
        <nav className="flex px-2 md:px-10 pt-4 md:mb-4 fixed w-screen justify-between z-0">
            <div className="w-[100px] md:w-[200px] md:h-[200px]">
                <Image src={'/logo2.gif'} alt="logo-faran" width={200} height={200}/>
            </div>
           <div className="hidden sm:block"> 
            <div className="flex justify-center items-center gap-5 bg-[#ECF0F3]">
                <div className="flex justify-center items-center gap-5">
                    {navParts.map((part)=>(
                         <div key={part.key} className="flex gap-2">
                        <span className="text-[#FF014F] text-sm">0{part.key}.</span><span className="hover:text-[#FF014F] cursor-pointer">{part.part}</span>
                            </div>
                   ))}
                </div>
                <div><Link href={'https://github.com/faranbutt'} target="_blank" ><Image src={'/github.png'} alt={'github'} width={40} height={40} className="bg- rounded-full hover:bg-[#FF014F] bg-black p-1" /></Link></div>
                <div>
                
                <button className="flex justify-center items-center px-3 py-2 border-2 border-[#FF014F] text-[#FF014F] text-sm rounded-lg hover:bg-[#FF014F] hover:text-white hover:border-white bg-[#ECF0F3]">Resume</button>
                </div>
            </div>
            </div>
            <div className="lg:hidden">
                <button className="flex justify-center items-center px-3 py-2 border-2 border-[#FF014F] text-[#FF014F] text-sm rounded-lg hover:bg-[#FF014F] hover:text-white hover:border-white bg-[#ECF0F3]">Resume</button>
            </div>
            <div className="lg:hidden">
                <div className="flex justify-end items-end">
                <button className={`flex justify-end p-2 rounded-xl border-2 border-[#FF014F] hover:bg-[#FF014F]`} onClick={handleMenuToggle}>
                    {menuOpen ? (<XCircle />) : (<Menu />)}
                </button>
                </div>
                {menuOpen && <div className="w-[200px] bg-[#FF014F] rounded-xl border-2 border-white z-10">
                    <ul className="p-3 text-center">
                        <li className="text-white py-1 hover:bg-white hover:text-[#FF014F] cursor-pointer">Resume</li>
                        <li className="text-white py-1 hover:bg-white hover:text-[#FF014F] cursor-pointer">Github</li>
                        <li className="text-white py-1 hover:bg-white hover:text-[#FF014F] cursor-pointer">Linkedin</li>
                        
                        {navParts.map((part)=>(
                            <li className="text-white py-1 hover:bg-white hover:text-[#FF014F] cursor-pointer" key={part.key}><Link href={part.link}>{part.part}</Link></li>
                        ))}
                    </ul>
                    
                    </div>}
            </div>
        </nav>

    );
}