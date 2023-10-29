import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Detail from '@/components/detail/detail'
export default async function Home() {

  return (
    <main className='flex pt-16'>
      <div className='flex flex-col gap-4 pl-32 w-1/2'>
      <div className='flex justify-center items-center'>
        <Image src={'/faran.jpg'}  alt='profile-pic' width={200} height={200} className='rounded-full border-[5px] border-[#fefefe]'/>
      </div>      
      <div className='flex flex-col gap-3 items-center text-left'>
        <div className='text-5xl font-extrabold'>
        👋 Hi I&apos;m <span className='text-[#FF014F]'>Faran Butt</span> 
        </div>
        <div className='text-gray-600 text-2xl font-bold'>I love coding Intelligent Systems</div>
        <div className='text-gray-600 pl-20'>
        <div>I am a graduate student with Bachelors in Electrical Engineering from <span className='font-bold text-[#FF014F]'>Air University Islamabad</span></div>
         <div className='pt-2'>I have an extensive background in both research and the corporate sector in Pakistan, with a notable role as a Research Intern at the <span className='text-[#FF014F]'>National Center of Artificial Intelligence Pakistan</span>. My skill set includes strong proficiency in <span className='text-[#FF014F]'>Python, Javascript, C++, Docker, Kubernetes, various Machine Learning frameworks </span> and <span className='text-[#FF014F]'>Linux</span>, complemented by a deep understanding of <span className='text-[#FF014F]'>SQL/NoSQL</span> databases and software systems.</div>
        </div>
        </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <Detail />
      </div>
    </main>
  )
}
