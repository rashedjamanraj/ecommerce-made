"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/types/news";

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, type: "inc" | "dec") => void; 
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

   useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };


  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, type: "inc" | "dec") => {
  setCart((prev) =>
    prev.map((item) => {
      if (item.id === id) {
        const newQty =
          type === "inc" ? (item.quantity || 1) + 1 : Math.max((item.quantity || 1) - 1, 1);
        return { ...item, quantity: newQty };
      }
      return item;
    })
  );
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
  {children}
</CartContext.Provider>

  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};