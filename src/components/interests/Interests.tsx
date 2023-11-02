import { Separator } from "../ui/separator";

export default function ReasarchInterests(){
    
    return (
        <div className="w-[500px] h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl text-gray-500">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 text-left"><div className="text-[#FF014F]">04.</div><div className="text-4xl text-black font-black">Reasearch Interests 🔍</div></div>
                <Separator />
                <div className="text-lg flex gap-2">
                    <ul className="">
                            <li className="text-gray-600 flex justify-start gap-3"><span className="text-[#FF014F]">▹</span><span>Distributed Computing</span></li>
                            <li className="text-gray-600 flex justify-start gap-3"><span className="text-[#FF014F]">▹</span><span>Natural Language Processing</span></li>
                            <li className="text-gray-600 flex justify-start gap-3"><span className="text-[#FF014F]">▹</span><span>Robotics Preception and Localization</span></li>
                            <li className="text-gray-600 flex justify-start gap-3"><span className="text-[#FF014F]">▹</span><span>Computer Vision</span></li>
                            <li className="text-gray-600 flex justify-start gap-3"><span className="text-[#FF014F]">▹</span><span>Algorithms</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}