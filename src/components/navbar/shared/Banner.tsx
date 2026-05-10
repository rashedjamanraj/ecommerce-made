import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import bannerImg from "@/assests/banner.jpg"

const Banner = () => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white bg-slate-100'>
      <div className=' px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8'>
        {/* image */}
        <div>
          <Image src={bannerImg} alt='banner' className="md:w-full md:h-103 md:object-cover"/>

          
        </div>
        
        {/* content */}
        <div className=' space-y-4 flex flex-col'>
          <h4 className='text-sm font-medium text-gray-500'>Technology</h4>
          <h2 className='text-2xl font-bold'>Scientific knowledge to the practical aims of human life</h2>
          <p>Problem solving, particularly in artificial intelligence, may be characterized as a systematic search through a range of possible actions in order to reach some predefined goal or solution.</p> <br />
          <p>A special-purpose method is tailor-made for a particular problem and often exploits very specific features of the situation in which the problem is embedded. In contrast, a general-purpose method is applicable to a wide variety of problems. </p>
          <Button variant="default" className=' cursor-pointer'>Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default Banner
