import { Separator } from "../ui/separator";
import Link from "next/link";
export default function Certifications(){
    
    return (
        <div className="w-[300px] md:w-[500px] md:h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 md:text-left"><div className="text-[#FF014F]">08.</div><div className="text-2xl md:text-4xl font-black">Certifications 📜</div></div>
                <Separator />
                <div className="text-sm md:text-lg flex gap-2">
                    <ul className="">
                    <Link href="https://drive.google.com/drive/folders/16_ZBOVS1iff-_usYPbuPN20uZ4pGhpUn"><li className="text-gray-600  hover:text-[#FF014F] flex justify-start gap-3"><span className="text-[#FF014F]">▹</span>Computer Hacking Forensic Investigator - EC Council<span></span></li></Link>
                    <Link href="https://www.coursera.org/account/accomplishments/certificate/ST9GW95WTEMK"><li className="text-gray-600  hover:text-[#FF014F] flex justify-start gap-3"><span className="text-[#FF014F]">▹</span>IBM Data Engineering Professional Certificate<span></span></li></Link>
                    <Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/TLUM4M3UVXXY"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F] "><span className="text-[#FF014F]">▹</span>Machine Learning Specialization - Coursera<span></span></li></Link>
                    <Link href="https://www.coursera.org/account/accomplishments/specialization/certificate/N5899YD3PH29"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F] "><span className="text-[#FF014F]">▹</span><span>Python for Everybody Specialization - Coursera</span></li></Link>
                    <Link href="https://www.coursera.org/account/accomplishments/certificate/YU7TENBPQR3X"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F] "><span className="text-[#FF014F]">▹</span>Mathematics for Machine Learning - Coursera<span></span></li></Link>
                    <Link href="https://www.coursera.org/account/accomplishments/certificate/GRLRCFGTVKYK"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F] "><span className="text-[#FF014F]">▹</span>Agile Development and Scrum - Coursera<span></span></li></Link>
                            
                    </ul>
                </div>
            </div>
        </div>
    );
}