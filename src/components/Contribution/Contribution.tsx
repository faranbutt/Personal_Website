import { Separator } from "../ui/separator";
import Link from "next/link";
export default function Contributions(){
    
    return (
        <div className="w-[300px] md:w-[500px] md:h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 md:text-left"><div className="text-[#FF014F]">05.</div><div className="text-2xl md:text-4xl font-black">Contributions 🌟</div></div>
                <Separator />
                <div className="text-sm md:text-lg flex gap-2">
                    <ul className="">
                    <Link href="https://holopin.me/faranbutt"><li className="text-gray-600  hover:text-[#FF014F] flex justify-start gap-3"><span className="text-[#FF014F]">▹</span>Hacktoberfest<span></span></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}