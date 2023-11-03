import { Separator } from "../ui/separator";
import Link from "next/link";
export default function Acheievements(){
    
    return (
        <div className="w-[300px] md:w-[500px] md:h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 md:text-left"><div className="text-[#FF014F]">07.</div><div className="text-2xl md:text-4xl font-black">Acheivements 🥇</div></div>
                <Separator />
                <div className="text-sm md:text-lg flex gap-2">
                    <ul className="">
                    <Link href="https://lablab.ai/event/seamlessm4t-24-hours-hackathon/team-translators/language-lab"><li className="text-gray-600  hover:text-[#FF014F] flex justify-start gap-3"><span className="text-[#FF014F]">▹</span>2nd Position in SeamlessM4T 24-hours Hackathon<span></span></li></Link>
                    <Link href="https://lablab.ai/u/@faran_butt176/clmozq9da006v9d19lh13njzc"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F] "><span className="text-[#FF014F]">▹</span>3rd Position in AudioCraft Hackathon<span></span></li></Link>
                    <Link href="https://lablab.ai/u/@faran_butt176/clm63pjxg0045dh191ol1q2nb"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F] "><span className="text-[#FF014F]">▹</span>3rd Position in StableCode 24-hours Hackathon<span></span></li></Link>
                    <Link href="https://lablab.ai/u/@faran_butt176/clm8wnsn500sjcp14qpuy3l4u"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F] "><span className="text-[#FF014F]">▹</span>5th Position in Llama 2 Hackathon Hackathon<span></span></li></Link>
                    <Link href="https://lablab.ai/u/@faran_butt176/clm252jld005lcm1ap18f1fbg"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F] "><span className="text-[#FF014F]">▹</span>Top 25 Finalists in Autonomous Agents Hackathon<span></span></li></Link>
                    <Link href="https://lablab.ai/event/fine-tuning-24-hours-challenge/finetuners/lec2learn-finetuning-ai-models"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F]"><span className="text-[#FF014F]">▹</span>Partipation in Fine-Tuning 24-hours Challenge<span></span></li></Link>
                    <Link href="#"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F]"><span className="text-[#FF014F]">▹</span>Partipation in NASA Space Apps Challenge<span></span></li></Link>
                    <Link href="#"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F]"><span className="text-[#FF014F]">▹</span>Received 100% Scholorship for AI diploma from NUST<span></span></li></Link>
                    <Link href="https://drive.google.com/drive/folders/14t3VDAxqBMAIkfUHFuxb699Kq0YVHS8t"><li className="text-gray-600 flex justify-start gap-3 hover:text-[#FF014F]"><span className="text-[#FF014F]">▹</span>Secured a Research Internship at the Intelligent Robotics Lab as the top-performing candidate<span></span></li></Link>
                            
                    </ul>
                </div>
            </div>
        </div>
    );
}