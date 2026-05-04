

import NewsesList from '@/components/newsshare/NewsesList'
import Link from 'next/link'
import React from 'react'


const Newspage = () => {
  return (
    <div className=' mx-auto items-center py-12 px-1 md:px-20'>
      <h2 className=' text-2xl font-bold mb-8'>Latest Product</h2>

      <NewsesList />
    </div>
  )
}

export default Newspage
