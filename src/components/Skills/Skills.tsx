import { BiLogoPython } from 'react-icons/bi';
import { Separator } from "../ui/separator"
export default function Skills(){
    return (
        <div id='skills' className="w-[300px] md:w-[500px] md:h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5 rounded-lg shadow-xl">
            <div className="flex flex-col w-full p-5">
                <div className="flex items-center gap-3 md:text-left"><div className="text-[#FF014F]">03.</div><div className="text-2xl md:text-4xl font-black">Skills 🛠️</div></div>
                <Separator />
                <div className="flex flex-col gap">
                    <div className=''>
                        <div className="text-[#FF014F] text-lg">Programming Languages 🐍</div>
                        <div className="flex flex-col text-sm md:text-md">
                            <div className='flex justify-between'><div>Python</div> <div>Javascript</div></div>
                            <div className='flex justify-between'><div>C++/C</div> <div>Java</div></div>
                            <div className='flex justify-between'><div>HTML</div> <div>CSS</div></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FF014F] text-lg">Databases 🗄️</div>
                        <div className="flex flex-col text-sm md:text-md">
                            <div className='flex justify-between'><div>MySQL</div> <div>PostgreSQL</div></div>
                            <div className='flex justify-between'><div>SQL</div> <div>NoSQL</div></div>
                            <div className='flex justify-between'><div>GraphQL</div> <div>MongoDB</div></div>
                            <div className='flex justify-between'><div>Cassandra</div> <div>DB2</div></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FF014F] text-lg">Frameworks 🌐</div>
                        <div className="flex flex-col text-sm md:text-md">
                            <div className='flex justify-between'><div>Nextjs/React</div> <div>D3.js</div></div>
                            <div className='flex justify-between'><div>Express.js</div> <div>FastAPI</div></div>
                            <div className='flex justify-between'><div>Flask</div> <div>Angular.js</div></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FF014F] text-lg">Design & Container Orchestration 📦</div>
                        <div className="flex flex-col text-sm md:text-md">
                            <div className='flex justify-between'><div>Docker</div> <div>Kubernetes</div></div>
                            <div className='flex justify-between'><div>Microservices Architecture</div> <div>RestAPI</div></div>
                            <div className='flex justify-between'><div>(GH-Actions)CI/CD</div><div>Terraform</div></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FF014F] text-lg">ML/AI & BigData 🧠</div>
                        <div className="flex flex-col text-sm md:text-md">
                            <div className='flex justify-between'><div>Numpy</div> <div>Pandas</div></div>
                            <div className='flex justify-between'><div>Tensorflow</div> <div>Pytorch</div></div>
                            <div className='flex justify-between'><div>OpenCV</div><div>Apache Spark</div></div>
                            <div className='flex justify-between'><div>Apache Kafka</div><div>Hadoop</div></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FF014F] text-lg">Robotics 🤖</div>
                        <div className="flex flex-col text-sm md:text-md">
                            <div className='flex justify-between'><div>ROS</div> <div>Linux</div></div>
                            <div className='flex justify-between'><div>Arduino</div> <div>Solid Works</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}