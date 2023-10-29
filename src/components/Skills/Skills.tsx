import { BiLogoPython } from 'react-icons/bi';
import { Separator } from "../ui/separator"
export default function Skills(){
    return (
        <div className="w-[500px] h-full bg-gradient-to-br from-[#E3E9EC] to-[#FEFFFF] flex p-5">
            <div className="flex flex-col w-full p-5">
                <div className="flex items-center gap-3 text-left"><div className="text-[#FF014F]">02.</div><div className="text-4xl">Skills</div></div>
                <Separator />
                <div className="flex flex-col gap">
                    <div className=''>
                        <div className="text-[#FF014F] text-lg">Programming Languages</div>
                        <div className="flex flex-col">
                            <div className='flex justify-between'><div>Python</div> <div>Javascript</div></div>
                            <div className='flex justify-between'><div>C++/C</div> <div>Java</div></div>
                            <div className='flex justify-between'><div>HTML</div> <div>CSS</div></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FF014F] text-lg">Databases</div>
                        <div className="flex flex-col">
                            <div className='flex justify-between'><div>MySQL</div> <div>PostgreSQL</div></div>
                            <div className='flex justify-between'><div>SQL</div> <div>NoSQL</div></div>
                            <div className='flex justify-between'><div>GraphQL</div> <div>MongoDB</div></div>
                            <div className='flex justify-between'><div>Cassandra</div> <div>DB2</div></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FF014F] text-lg">Frameworks</div>
                        <div className="flex flex-col">
                            <div className='flex justify-between'><div>Nextjs/React</div> <div>D3.js</div></div>
                            <div className='flex justify-between'><div>Express.js</div> <div>FastAPI</div></div>
                            <div className='flex justify-between'><div>Flask</div> <div>Angular.js</div></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FF014F] text-lg">Design & Container Orchestration</div>
                        <div className="flex flex-col">
                            <div className='flex justify-between'><div>Docker</div> <div>Kubernetes</div></div>
                            <div className='flex justify-between'><div>Microservice Architecture</div> <div>RestAPI</div></div>
                            <div className='flex justify-between'><div>(GH-Actions)CI/CD</div><div>Terraform</div></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#FF014F] text-lg">ML/AI & BigData</div>
                        <div className="flex flex-col">
                            <div className='flex justify-between'><div>Numpy</div> <div>Pandas</div></div>
                            <div className='flex justify-between'><div>Tensorflow</div> <div>Apache Spark</div></div>
                            <div className='flex justify-between'><div>Apache Kafka</div><div>Snowflake</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}