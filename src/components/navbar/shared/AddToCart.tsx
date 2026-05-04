"use client";

import { useCart } from "@/components/navbar/shared/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "react-toastify";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const handleCheckout = () => {
    toast.info("Checkout process started!");
  };

  return (
    <div className="px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((products) => (
            <div
              key={products.id}
              className="flex items-center justify-between border p-4 rounded-md shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={products.thumbnail || products.images?.[0]}
                  alt={products.title}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <h2 className="font-semibold">{products.title}</h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {products.description}
                  </p>
                </div>
              </div>
              <Button
                variant="destructive"
                onClick={() => {
                  removeFromCart(products.id);
                  toast.error(`${products.title} removed from cart`);
                }}
              >
                Remove
              </Button>
            </div>
          ))}

          <div className="mt-8 flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-bold">Total products: {cart.length}</h2>
            <Button variant="default" className="font-semibold" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
