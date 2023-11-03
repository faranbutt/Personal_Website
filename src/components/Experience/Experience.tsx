'use client'
import { Separator } from "../ui/separator";
import { useState } from "react";
export default function Experience(){
    const [job,setJob] = useState('job1');
    return (
        <div id="experience" className="w-[300px] md:w-[500px] md:h-96 bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 md:text-left"><div className="text-[#FF014F]">02.</div><div className="text-2xl md:text-4xl font-black">Experience 🔍</div></div>
                <Separator />
                <div className="md:text-lg flex flex-col md:flex-row gap-2">
                    <div className="flex flex-row md:flex-col">
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${job == 'job1' && 'text-[#FF014F]'}`} onClick={()=>setJob('job1')}>NCAI</div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${job == 'job2' && 'text-[#FF014F]'}`} onClick={()=>setJob('job2')}>Technosol</div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${job == 'job3' && 'text-[#FF014F]'}`} onClick={()=>setJob('job3')}>KSEW</div>
                    </div>
                    <div className="w-full h-full">
                        {job =='job1'&& <div>
                            <div className="text-lg md:text-2xl font-extrabold">Research Intern <span className="text-[#FF014F]">@ NCAI</span></div>
                            <ul className="text-sm md:text-md">
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Integrated AR technology (Magic Leap headset, Unity) into an Autonomous Wheelchair project.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Developed an advanced SLAM algorithm for precise and speedy mapping using laser range finder and stereo camera data.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Upgraded hardware by migrating to Raspberry Pi, enhancing system performance.</span></li>
                            </ul>
                            </div>
                            }
                        {job =='job2'&& <div>
                        <div className="text-lg md:text-2xl font-extrabold">Embedded Engineer <span className="text-[#FF014F]">@ Technosol</span></div>
                            <ul className="text-sm md:text-md">
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Responsible for developing solutions to help debug over 100+ bugs and accelerate testing and development of the product to reduce the person-hours by 80%.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Developed and programmed Arduino Circuit Boards for various automation applications, ensuring efficient and reliable performance.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Successfully debugged complex projects, identifying and resolving issues to meet project deadlines and quality standards.</span></li>
                            </ul>
                            
                            </div>}
                        {job =='job3'&& <div>
                        <div className="text-lg md:text-2xl font-extrabold">OJT <span className="text-[#FF014F]">@ Karachi Shipyard</span></div>
                            <ul className="text-sm md:text-md">
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Enhanced the reliability and stability of Site 2&apos;s Ship Lift Transfer Systems by effectively maintaining the main Power Grid.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Responsible for teaching technicians about the installation of equipment including PLC panels.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Consistently delivered daily progress reports to both Karachi Shipyard and IŞIK ENGINEERING, ensuring transparent communication and alignment on project milestones.</span></li>

                            </ul>
                            
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}