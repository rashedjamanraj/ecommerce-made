

"use client"

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineGithub, AiOutlineInstagram, AiOutlineMenu, AiOutlineX } from 'react-icons/ai'
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
            <AiOutlineMenu size={24} />
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

          {/* Mobile menu drawer */}
      
        <div className={`fixed inset-0 z-50 flex transform transition-transform duration-300  ease-in-out ${
          isMenuOpen ? "  translate-x-0" : "-translate-x-full "
        }`}>
          <div className="w-2/3 bg-sky-700 shadow-md p-6 relative flex flex-col justify-between h-full">
          {/* Close button top-right */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white  hover:text-rose-600 "
            >
              <AiOutlineClose size={24} />
            </button>
            <ul className="flex flex-col gap-4 text-white  font-medium">
            <li><a href="/news">Products</a></li>
            {/* <li><a href="/services">Services</a></li> */}
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          
          {/*  Social links footer */}
          <div className="flex space-x-4  mb-8">
            <a
              href="https://twitter.com/RasedJamanRaj"
              aria-label="Twitter"
              className="text-white dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-400"
            >
              <AiOutlineX size={24} />
            </a>
            <a
              href="https://instagram.com/rashedjamanraj"
              aria-label="Instagram"
              className="text-white dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-400"
            >
              <AiOutlineInstagram size={24} />
            </a>
            <a
              href="https://github.com/rashedjamanraj"
              aria-label="Github"
              className="text-white dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-400"
            >
              <AiOutlineGithub size={24} />
            </a>
          </div>
          </div>

          {/* Empty overlay (1/3 width) */}
          <div className='w-1/3' onClick={toggleMenu}>
            
          </div>
        </div>
        </div>
  )
}

export default MobileMenu
