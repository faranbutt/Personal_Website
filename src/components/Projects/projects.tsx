'use client'

import { Separator } from "../ui/separator";
import { useState } from 'react';

export default function Projects(){
    const [genre,setGenre] = useState('full');
    return (
        <div className="w-[500px] h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl text-gray-500">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 text-left"><div className="text-[#FF014F]">04.</div><div className="text-4xl text-black font-black">Projects 🔍</div></div>
                <Separator />
                <div className="text-lg flex gap-2">
                    <div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${genre == 'full' && 'text-[#FF014F]'}`} onClick={()=>setGenre('full')}>Full Stack Development</div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${genre == 'ai' && 'text-[#FF014F]'}`} onClick={()=>setGenre('ai')}>AI</div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${genre == 'robotics' && 'text-[#FF014F]'}`} onClick={()=>setGenre('robotics')}>Robotics</div>
                    </div>
                    <div className="w-full h-full">
                        {genre =='full'&& <div>
                                      
                                      fara
                            
                                  </div>
                            }
                        {genre =='ai'&& <div>
                        <div className="text-2xl font-extrabold">Embedded Engineer <span className="text-[#FF014F]">@ Technosol</span></div>
                            <ul className="">
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Responsible for developing solutions to help debug over 100+ bugs and accelerate testing and development of the product to reduce the person-hours by 80%.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Developed and programmed Arduino Circuit Boards for various automation applications, ensuring efficient and reliable performance.</span></li>
                                <li className="text-gray-600 flex justify-between gap-3"><span className="text-[#FF014F]">▹</span><span>Successfully debugged complex projects, identifying and resolving issues to meet project deadlines and quality standards.</span></li>
                            </ul>
                            
                            </div>}
                        {genre =='robotics'&& <div>
                        <div className="text-2xl font-extrabold">OJT <span className="text-[#FF014F]">@ Karachi Shipyard</span></div>
                            <ul className="">
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