import { Separator } from "../ui/separator";

export default function About(){
    return (
        <div id="about" className="w-[300px] md:w-[500px] md:h-96 bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl">
            <div className="flex flex-col">
                <div className="flex items-center gap-3 md:text-left"><div className="text-[#FF014F]">01.</div><div className="text-2xl md:text-4xl font-black">About Me 👨🏻‍💻</div></div>
                <Separator />
                <div className="text-sm md:text-lg flex flex-col gap-2">
                    <div>Interestingly, I got introduced to programming in my freshman year at Air University, Islamabad where I completed my <span className="text-[#FF014F]">Bachelors in Electrical Engineering(2016-2020)</span></div>
                    <div>I have worked as a Research Intern at <span className="text-[#FF014F]">NCAI NUST</span> for 6 months</div>
                    <div>I have participated in <span className="text-[#FF014F]">10 International Hackathons</span> won <span className="text-[#FF014F]">5 International Hackathons</span> conducted by LabLab.ai </div>
                </div>
            </div>
        </div>
    );
}