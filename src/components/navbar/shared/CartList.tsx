"use client";

import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Image from "next/image";
import { CartProvider, useCart } from "@/components/navbar/shared/CartContext";

type CartListProps = {
  activePanel: string;
  handleClose: () => void;
  setOrderSummary: (value: boolean) => void;
};

const CartList = ({
  activePanel,
  handleClose,
  setOrderSummary,
}: CartListProps) => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const quantityIncrement = (product: any) => {
    product.quantity = (product.quantity || 1) + 1;
  };
  const quantityDecrement = (product: any) => {
    if (product.quantity > 1) product.quantity -= 1;
  };

  const subtotal = cart.reduce(
    (acc, item: any) => acc + item.price * (item.quantity || 1),
    0,
  );
  const shippingFee = cart.length > 0 ? 10 : 0;
  const orderTotal = subtotal + shippingFee;

  return (
    <>
      {activePanel === "cartlist" && (
        <div className="fixed inset-0 z-30" onClick={handleClose} />
      )}

      <div
        className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed right-0 top-0 bottom-0 z-40 w-full md:w-100 border-l border-zinc-300 transform transition-transform duration-300 ${
          activePanel === "cartlist" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* heading */}
        <div className="px-10">
          <h3 className="text-3xl font-bold text-zinc-800 text-center mt-5">
            Your Cart
          </h3>
        </div>

        {/* cart items */}
        <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-zinc-800 text-center">Your cart is empty</p>
          ) : (
            cart.map((product: any, index: number) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-5 py-1 border-y border-zinc-300 ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-white"
                }`}
              >
                {/* image */}
                <div className="w-20 h-20 relative">
                  <Image
                    src={product.thumbnail || product.images?.[0]}
                    alt={product.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* details */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-zinc-800 text-lg">
                      {product.title}
                    </h4>
                    <button
                      className="w-7 h-7 bg-red-600 rounded-full text-white flex items-center justify-center cursor-pointer active:bg-red-800 mr-6"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-rose-600 font-semibold">
                      $ {product.price.toFixed(2)}
                    </span>
                    <div className="flex gap-2 py-2">
                     
                      <button onClick={() => updateQuantity(product.id, "dec")}>
                        <FaMinus className=" cursor-pointer"/> 
                      </button>
                      <span>{product.quantity || 1}</span>
                      <button onClick={() => updateQuantity(product.id, "inc")}>
                        <FaPlus className="cursor-pointer"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* totals */}
        <div className="px-10 border-y border-zinc-300">
          <div className="flex justify-between pt-2">
            <span className="text-zinc-800">Subtotal</span>
            <span className="text-zinc-800">$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-zinc-800">Shipping & handlings</span>
            <span className="text-zinc-800">$ {shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-t border-zinc-300">
            <span className="text-amber-600 text-lg font-bold">
              Order Total
            </span>
            <span className="text-amber-600 text-lg font-bold">
              $ {orderTotal.toFixed(2)}
            </span>
          </div>
        </div>

        {/* buttons */}
        <div className="flex gap-2 mb-3 px-10">
          <button
            className="bg-red-600 text-white flex-1 h-[7vh] text-lg font-semibold rounded-lg active:bg-red-700 cursor-pointer"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className={`text-white flex-1 h-[7vh] text-lg font-semibold rounded-lg ${
              cart.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-700 cursor-pointer active:bg-green-800"
            }`}
            disabled={cart.length === 0}
            onClick={() => setOrderSummary(true)}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartList;
