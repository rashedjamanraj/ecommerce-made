"use client"

import { fetchNews } from '@/lib/fetchNews';
import React, { useEffect, useState } from 'react'
import { Product } from '@/types/news';
import SearchBar from './SearchBar';
import CetegoryFilter from './CetegoryFilter';
import NewsCard from '../navbar/shared/NewsCard';

const NewsesList = () => {
  const [news, setNews] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");


  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    }
    getNews();
  }, [category, search])

  console.log(news)
  return (
    <div>
      <div className=' p-1 flex flex-col md:flex-row md:item-center justify-between gap-4 md:gap-12 mb-5 ' >
        <SearchBar onSearch={setSearch}/>

        <CetegoryFilter onCategoryChange={setCategory}/>
      </div>

      {/* News Card */}
      <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6'>
        { 
          news.map((product) => (
            <NewsCard key={product.id} products={product}/>
          ))
        }
      </div>
    </div>
  )
}

export default NewsesList
