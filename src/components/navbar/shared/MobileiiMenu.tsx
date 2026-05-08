

"use client"

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useCart } from './CartContext';
import { HiShoppingCart } from 'react-icons/hi2';
import CartList from './CartList';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState("");
  const {cart} = useCart();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }


  return (
    <div className=" lg:hidden flex items-center gap-4">
      {/* Hamburger toggle */}
          <div onClick={toggleMenu} className='cursor-pointer'>
            {
              isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24}  />
            }
          </div>

          {/* Cart button */}
          <button onClick={() => setActivePanel("cartlist")}>
            <HiShoppingCart size={26}/>
            { cart.length > 0 && (
              <span className="absolute top-4 right-2 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          {/* Slide-in Cart Panel */}
          <CartList 
            activePanel={activePanel}
            handleClose={() => setActivePanel("")}
            setOrderSummary={(val) => console.log(`Checkout: ${val}`)}
          />
        </div>
  )
}

export default MobileMenu
