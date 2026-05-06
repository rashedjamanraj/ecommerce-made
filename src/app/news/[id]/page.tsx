"use client";


import { useCart } from '@/components/navbar/shared/CartContext';
import { Product } from '@/types/news';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi2';
import { toast } from 'react-toastify';

const NewsDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    if (id) fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
  if (product) {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  }
};
    if (!product) return <p className="text-center mt-10">Loading...</p>;


  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold mb-5">{product.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image 
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            width={600}
            height={400}
            className="rounded shadow-md"
          />
        </div>

        <div className="flex-1">
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-rose-600 font-semibold text-xl mb-4">
            Price: $ {product.price}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 active:bg-gray-950 cursor-pointer"
          >
            Add to Cart <HiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsDetailsPage

