import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar(){
const navParts = [
    {
        key:1,
        part:"About"
    },
    {
        key:2,
        part:"Experience"
    },
    {
        key:3,
        part:"About"
    },
]
    return (
        <div className="flex px-10 pt-4 fixed w-screen justify-between mb-10 z-20 bg-[#ECF0F3]">
            <div>
                <Image src={'/logo2.gif'} alt="logo-faran" width={200} height={200}/>
            </div>
            
            <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center gap-5">
                    {navParts.map((part)=>(
                         <div key={part.key} className="flex gap-2">
                        <span className="text-[#FF014F] text-sm">0{part.key}.</span><span className="hover:text-[#FF014F] cursor-pointer">{part.part}</span>
                            </div>
                   ))}
                </div>
                <div><Link href={'https://github.com/faranbutt?tab=repositories'}><Image src={'/github.png'} alt={'github'} width={40} height={40} className="bg- rounded-full hover:bg-[#FF014F] bg-black p-1" /></Link></div>
                <div>
                
                <button className="flex justify-center items-center px-3 py-2 border-2 border-[#FF014F] text-[#FF014F] text-sm rounded-lg hover:bg-[#FF014F] hover:text-white hover:border-white">Resume</button>
                </div>
            </div>
        </div>

    );
}