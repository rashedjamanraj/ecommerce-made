import Banner from "@/components/navbar/shared/Banner";
import NewsCard from "@/components/navbar/shared/NewsCard";
import NewsLetter from "@/components/navbar/shared/NewsLetter";
import { Product  } from "@/types/news";
import { log } from "console";
import Image from "next/image";

export default async function Home () {
  
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  const news = data.products;

  return (
    <div className=" py-12 px-1 md:px-20">
    <Banner />
    
     <div className=" py-12 ">
      <h2 className=" text-2xl font-bold mb-8">Latest Product</h2>
      <div className=" grid grid-cols-1  lg:grid-cols-3 gap-6">

        {
          news.slice(0, 3).map((products: Product ) => (
            <NewsCard key={products?.id} products={products}/>
          ))
        }
      </div>
     </div>

     <NewsLetter />
    </div>
  );
}
