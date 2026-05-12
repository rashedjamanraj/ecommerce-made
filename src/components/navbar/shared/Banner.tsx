import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import bannerImg from "@/assests/banner-pic.png"

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
          <h4 className='text-sm font-medium text-gray-500'>E-commerce</h4>
          <h2 className='text-2xl font-bold'>Our team and our community is always here to support you</h2>
          <p>This product is a perfect blend of elegance, quality, and functionality. Crafted with premium materials and designed for modern lifestyles, it offers durability and style in every detail. Its sleek appearance and user-friendly features make it ideal for daily use, while the refined craftsmanship ensures long-lasting performance. Whether you’re upgrading your home, wardrobe, or workspace, this product delivers both comfort and sophistication. It’s not just an item—it’s an experience that enhances your everyday life.</p>
          <Button variant="default" className=' cursor-pointer'>Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default Banner
