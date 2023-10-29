'use client'
import { Separator } from "../ui/separator";
import { useState } from "react";
export default function Experience(){
    const [job,setJob] = useState('job1');
    const jobs = [
        {
            key:1,
            title:"NCAI",
            desc:[
                "very good work",
                "PAAPO"
            ]
        },
        {
            key:2,
            title:"Technosol",
            desc:[
                "techosol good",
                "tech no sol opo"
            ]
        }
    ]
    return (
        <div className="w-[500px] h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl text-gray-500">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 text-left"><div className="text-[#FF014F]">03.</div><div className="text-4xl text-black font-black">Experience ⌛</div></div>
                <Separator />
                <div className="text-lg flex gap-2">
                    <div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer`} onClick={()=>setJob('job1')}>NCAI</div>
                        <div className="px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer" onClick={()=>setJob('job2')}>Technosol</div>
                        <div className='px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer' onClick={()=>setJob('job3')}>KSEW</div>
                    </div>
                    <div className="w-full h-full">
                        {job =='job1'&& <div>
                            <div className="text-2xl font-extrabold">Research Intern <span className="text-[#FF014F]">@ NCAI</span></div>
                            <ul className="">
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Integrated AR technology (Magic Leap headset, Unity) into an Autonomous Wheelchair project.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Developed an advanced SLAM algorithm for precise and speedy mapping using laser range finder and stereo camera data.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Upgraded hardware by migrating to Raspberry Pi, enhancing system performance.</span></li>
                            </ul>
                            </div>
                            }
                        {job =='job2'&& <div>
                        <div className="text-2xl font-extrabold">Embedded Engineer <span className="text-[#FF014F]">@ Technosol</span></div>
                            <ul className="">
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Responsible for developing solutions to help debug over 100+ bugs and accelerate testing and development of the product to reduce the person-hours by 80%.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Developed and programmed Arduino Circuit Boards for various automation applications, ensuring efficient and reliable performance.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Successfully debugged complex projects, identifying and resolving issues to meet project deadlines and quality standards.</span></li>
                            </ul>
                            
                            </div>}
                        {job =='job3'&& <div>
                        <div className="text-2xl font-extrabold">OJT <span className="text-[#FF014F]">@ Karachi Shipyard</span></div>
                            <ul className="">
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Enhanced the reliability and stability of Site 2's Ship Lift Transfer Systems by effectively maintaining the main Power Grid.</span></li>
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