"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { NewsCardProps } from "@/types/news";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";

const NewsCard = ({ products }: NewsCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(products);
    toast.success(`${products.title} added to cart!`);
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`/news/${products?.id}`}>
        <Image
          src={products?.thumbnail || products?.images?.[0]}
          alt={products?.title || "Product image"}
          width={500}
          height={300}
          priority
          className="mb-5 md:h-56 rounded hover:scale-104 cursor-pointer transition-all duration-200"
        />
      </Link>

      <div>
        <h2 className="truncate text-xl font-semibold my-3">{products?.title}</h2>
        <p className="mb-4 line-clamp-4">{products?.description}</p>

        <Button
          variant="default"
          className="cursor-pointer gap-2 w-full font-medium active:bg-gray-800"
          onClick={handleAddToCart}
        >
          Add to Cart <HiShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
