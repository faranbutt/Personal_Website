import { Separator } from "../ui/separator";
import Link from "next/link";
export default function Acheievements(){
    
    return (
        <div className="w-[500px] h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl text-gray-500">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 text-left"><div className="text-[#FF014F]">06.</div><div className="text-4xl text-black font-black">Acheivements 🥇</div></div>
                <Separator />
                <div className="text-lg flex gap-2">
                    <ul className="">
                    <Link href="https://lablab.ai/event/seamlessm4t-24-hours-hackathon/team-translators/language-lab"><li className="text-gray-600 flex justify-start gap-3"><span className="text-[#FF014F]">▹</span>2nd Position in SeamlessM4T 24-hours Hackathon<span></span></li></Link>
                    <Link href="https://lablab.ai/u/@faran_butt176/clmozq9da006v9d19lh13njzc"><li className="text-gray-600 flex justify-start gap-3"><span className="text-[#FF014F]">▹</span>3rd Position in AudioCraft Hackathon<span></span></li></Link>
                    <Link href="https://lablab.ai/u/@faran_butt176/clmozq9da006v9d19lh13njzc"><li className="text-gray-600 flex justify-start gap-3"><span className="text-[#FF014F]">▹</span>2nd Position in AudioCraft Hackathon<span></span></li></Link>
                    <Link href="https://lablab.ai/u/@faran_butt176/clmozq9da006v9d19lh13njzc"><li className="text-gray-600 flex justify-start gap-3"><span className="text-[#FF014F]">▹</span>2nd Position in AudioCraft Hackathon<span></span></li></Link>
                            
                    </ul>
                </div>
            </div>
        </div>
    );
}