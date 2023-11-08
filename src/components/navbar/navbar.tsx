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
                            <Link href={part.link} className="flex gap-1 justify-center items-center">
                        <span className="text-[#FF014F] text-sm">0{part.key}.</span><span className="hover:text-[#FF014F] cursor-pointer">{part.part}</span>
                            </Link>
                            </div>
                   ))}
                </div>
                <div><Link href={'https://github.com/faranbutt'} target="_blank" ><Image src={'/github.png'} alt={'github'} width={40} height={40} className="bg- rounded-full hover:bg-[#FF014F] bg-black p-1" /></Link></div>
                <div><Link href={'https://www.linkedin.com/in/faranbutt/'} target="_blank" ><Image src={'/linkedin.png'} alt={'github'} width={40} height={40} className="bg- rounded-full hover:bg-[#FF014F] bg-white " /></Link></div>
                <div>
                
                <button className="flex justify-center items-center px-3 py-2 border-2 border-[#FF014F] text-[#FF014F] text-sm rounded-lg hover:bg-[#FF014F] hover:text-white hover:border-white bg-[#ECF0F3]"><Link href={'https://docs.google.com/document/d/12BUQn_Q-3RoG2fiYv3_eO0og4DovFFcAWXqJjSFaWlI/edit?usp=sharing'} target="_blank">Resume</Link></button>
                </div>
            </div>
            </div>
            <div className="md:hidden lg:hidden">
                <button className="flex justify-center items-center px-3 py-2 border-2 border-[#FF014F] text-[#FF014F] text-sm rounded-lg hover:bg-[#FF014F] hover:text-white hover:border-white bg-[#ECF0F3]"><Link href={'https://docs.google.com/document/d/12BUQn_Q-3RoG2fiYv3_eO0og4DovFFcAWXqJjSFaWlI/edit?usp=sharing'} target="_blank">Resume</Link></button>
            </div>
            <div className="md:hidden lg:hidden">
                <div className="flex justify-end items-end">
                <button className={`flex justify-end p-2 rounded-xl border-2 border-[#FF014F] hover:bg-[#FF014F]`} onClick={handleMenuToggle}>
                    {menuOpen ? (<XCircle />) : (<Menu />)}
                </button>
                </div>
                {menuOpen && <div className="w-[200px] bg-[#FF014F] rounded-xl border-2 border-white z-10">
                    <ul className="p-3 text-center">
                    {navParts.map((part)=>(
                            <li className="text-white py-1 hover:bg-white hover:text-[#FF014F] cursor-pointer" key={part.key}><Link href={part.link}>{part.part}</Link></li>
                        ))}
                        <li className="text-white py-1 hover:bg-white hover:text-[#FF014F] cursor-pointer"><Link href={'https://docs.google.com/document/d/12BUQn_Q-3RoG2fiYv3_eO0og4DovFFcAWXqJjSFaWlI/edit?usp=sharing'} target="_blank">📋Resume</Link></li>
                        <li className="text-white py-1 hover:bg-white hover:text-[#FF014F] cursor-pointer"><Link href={'https://github.com/faranbutt'} className="flex justify-center items-center gap-2"><div><Image src={'/github.png'} alt={'github'} width={20} height={20} className="bg- rounded-full hover:bg-[#FF014F] bg-black" /></div><div>Github</div></Link></li>
                        <li className="text-white py-1 hover:bg-white hover:text-[#FF014F] cursor-pointer"><Link href={'https://www.linkedin.com/in/faranbutt/'} className="flex justify-center items-center gap-2"><div><Image src={'/linkedin.png'} alt={'github'} width={20} height={20} className="bg- rounded-full hover:bg-[#FF014F] bg-white" /></div><div>Linkedin</div></Link></li>
                                                
                    </ul>
                    
                    </div>}
            </div>
        </nav>

    );
}