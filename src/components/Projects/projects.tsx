'use client'

import { Separator } from "../ui/separator";
import { useState } from 'react';
import Link from "next/link";
export default function Projects(){
    const [genre,setGenre] = useState('full');

    return (
        <div className="w-[500px] h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl text-gray-500">
            <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 text-left"><div className="text-[#FF014F]">04.</div><div className="text-4xl text-black font-black">Projects ☢️</div></div>
                <Separator />
                <div className="text-lg flex gap-2">
                    <div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${genre == 'full' && 'text-[#FF014F]'}`} onClick={()=>setGenre('full')}>Full Stack Development</div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${genre == 'ai' && 'text-[#FF014F]'}`} onClick={()=>setGenre('ai')}>AI</div>
                        <div className={`px-4 py-2 hover:bg-red-300 hover:text-[#FF014F] cursor-pointer ${genre == 'robotics' && 'text-[#FF014F]'}`} onClick={()=>setGenre('robotics')}>Robotics</div>
                    </div>
                    <div className="w-full h-full">
                        {genre =='full'&& <div>
                        
                        <ul className="flex flex-col">
                            <Link href={'https://dine-three.vercel.app/'} target="_blank">
                            <li className={`text-gray-600 flex justify-start flex-col hover:scale-125 text-sm cursor-pointer mb-2`}>
                                <div className="rounded-t-lg bg-[#FF014F] p-1 text-white flex justify-center items-center">
                                    Full-Stack Ecommerce Store
                                </div>
                                <div className="rounded-b-lg border-2 p-2 border-[#FF014F] ">
                                    A fullstack ecommerce store made with <span className="text-[#FF014F]">Next.js, Tailwind CSS, PostgreSQL, Stripe, Sanity CMS</span>.
                                </div>
                            </li>
                            </Link>
                            <Link href={'https://github.com/faranbutt/Vision-X'} target="_blank">
                            <li className={`text-gray-600 flex justify-start flex-col hover:scale-125 text-sm cursor-pointer`}>
                                <div className="rounded-t-lg bg-[#FF014F] p-1 text-white flex justify-center items-center">
                                    Vision X
                                </div>
                                <div className="rounded-b-lg border-2 p-2 border-[#FF014F]">
                                   Vision X is full stack app used for detecting head counts using image recognition.Its made using <span className="text-[#FF014F]">React, Express.js,Bcrypt,PostgreSQL,Clarifai</span>
                                </div>
                            </li>
                            </Link>
                        </ul>
                                  </div>
                            }
                        {genre =='ai'&& <div>
                            
                        <ul className="flex flex-col">
                            <Link href={'https://github.com/faranbutt/Fine-Tuning-Hackathon'} target="_blank">
                            <li className={`text-gray-600 flex justify-start flex-col hover:scale-125 text-sm cursor-pointer mb-2`}>
                                <div className="rounded-t-lg bg-[#FF014F] p-1 text-white flex justify-center items-center">
                                    Lec To Learn
                                </div>
                                <div className="rounded-b-lg border-2 p-2 border-[#FF014F] ">
                                Lec to Learn is the ultimate <span className="text-[#FF014F]">learning companion</span> that takes the complexity out of lectures.Tech used <span className="text-[#FF014F]">Flask, Openai, HTML, CSS, JS.</span>
                                </div>
                            </li>
                            </Link>
                            <Link href={'https://github.com/faranbutt/Language-Lab'} target="_blank">
                            <li className={`text-gray-600 flex justify-start flex-col hover:scale-125 text-sm cursor-pointer`}>
                                <div className="rounded-t-lg bg-[#FF014F] p-1 text-white flex justify-center items-center">
                                Language Lab
                                </div>
                                <div className="rounded-b-lg border-2 p-2 border-[#FF014F]">
                                  Language Lab helps non native speakers <span className="text-[#FF014F]">learn English Language</span> by using <span className="text-[#FF014F]">Seamless M4T model</span>. 
                                </div>
                            </li>
                            </Link>
                        </ul>
                        </div>
                        }
                        {genre =='robotics'&& <div>
                        <ul className="flex flex-col">
                            <Link href={'https://drive.google.com/drive/folders/16L5eNI0GvAsJc3VTj73Mt238ZhruWF6c'} target="_blank">
                            <li className={`text-gray-600 flex justify-start flex-col hover:scale-125 text-sm cursor-pointer mb-2`}>
                                <div className="rounded-t-lg bg-[#FF014F] p-1 text-white flex justify-center items-center">
                                Stair Climbing Robot
                                </div>
                                <div className="rounded-b-lg border-2 p-2 border-[#FF014F]">
                                Developed a <span className="text-[#FF014F]">Stair Climbing Robot</span> with <span className="text-[#FF014F]">self-adjusting platform</span> as a standout project during undergrad.
                                </div>
                            </li>
                            </Link>
                            <li className={`text-gray-600 flex justify-start flex-col hover:scale-125 text-sm cursor-pointer`}>
                                <div className="rounded-t-lg bg-[#FF014F] p-1 text-white flex justify-center items-center">
                                Wheel Chair Robot
                                </div>
                                <div className="rounded-b-lg border-2 p-2 border-[#FF014F]">
                                Served as a Research Assistant at NCAI, successfully integrating <span className="text-[#FF014F]">Augmented Reality</span> into an existing project. Additionally, upgraded hardware by migrating to  <span className="text-[#FF014F]">Raspberry Pi</span>, optimizing system performance. 
                                </div>
                            </li>
                        </ul>
                            
                            </div>}
                    </div>
                </div>
                <div className="flex justify-end items-end">
                    <button className="bg-[#FF014F] text-white font-bold px-3 py-2 rounded-full my-2"><Link href={'/AllProjects'}>More Projects</Link></button>
                </div>
            </div>
        </div>
    );
}