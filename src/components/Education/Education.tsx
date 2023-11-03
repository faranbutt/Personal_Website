'use client'
import { Separator } from "../ui/separator";
import { useState } from "react";
export default function Education(){
    const [education,seteducation] = useState('air');
    return (
        <div className="w-[300px] md:w-[500px] md:h-96 bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 md:text-left"><div className="text-[#FF014F]">06.</div><div className="text-2xl md:text-4xl font-black">Education 🎓</div></div>
                <Separator />
                <div className="text-sm md:text-lg flex gap-2">
                    <div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${education == 'air' && 'text-[#FF014F]'}`} onClick={()=>seteducation('air')}>AIR</div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${education == 'nust' && 'text-[#FF014F]'}`} onClick={()=>seteducation('nust')}>NUST</div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${education == 'piaic' && 'text-[#FF014F]'}`} onClick={()=>seteducation('piaic')}>PIAIC</div>
                    </div>
                    <div className="w-full h-full">
                        {education =='air'&& <div className="ml-2">
                            <div className="text-xl font-extrabold">Bachelor in Electrical Engineering</div>
                            <div className="text-[#FF014F] italic">Air University</div>
                            <div className="text-[#FF014F] italic">2016-2020</div>
                            <div className="border-2 border-[#FF014F] font-extrabold text-white bg-[#FF014F]">Courses:</div>
                            <ul className="border-2 border-l-[#FF014F] border-r-[#FF014F] border-b-[#FF014F]">
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2">▹</span><span>Data Structures & Algorithms</span></li>
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2">▹</span><span>Computer Networks</span></li>
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2 ">▹</span><span>Digital Logic Design</span></li>
                            </ul>
                            </div>
                            }
                        {education =='nust'&& <div className="ml-2">
                            <div className="text-xl font-extrabold">Diploma in Artifical Intelligence (Robotics)</div>
                            <div className="text-[#FF014F] italic">National University of Sciences & Technology</div>
                            <div className="text-[#FF014F] italic">Apr 2023 - Oct 2023</div>
                            <div className="border-2 border-[#FF014F] font-extrabold text-white bg-[#FF014F]">Courses:</div>
                            <ul className="border-2 border-l-[#FF014F] border-r-[#FF014F] border-b-[#FF014F]">
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2">▹</span><span>Data Structures & Algorithms</span></li>
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2">▹</span><span>Python Programming</span></li>
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2 ">▹</span><span>Robotics (I,II,III)</span></li>
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2 ">▹</span><span>Machine Learning</span></li>
                            </ul>
                            </div>}
                        {education =='piaic'&& <div className="ml-2">
                            <div className="text-xl font-extrabold">Web 3.0 & Generative AI</div>
                            <div className="text-[#FF014F] italic">Presidential Intiative for Artifical Intelligence</div>
                            <div className="text-[#FF014F] italic">Sep 2023 - Oct 2023</div>
                            <div className="border-2 border-[#FF014F] font-extrabold text-white bg-[#FF014F]">Courses:</div>
                            <ul className="border-2 border-l-[#FF014F] border-r-[#FF014F] border-b-[#FF014F]">
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2">▹</span><span>Full Stack Dev with Next.js</span></li>
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2">▹</span><span>Generative AI with Langchain</span></li>
                                <li className="text-gray-600 flex gap-3"><span className="text-[#FF014F] ml-2 ">▹</span><span>Web3.0 with Hardhat, Solidity</span></li>
                            </ul>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}