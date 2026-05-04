"use client"

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import MobileMenu from "./shared/MobileiiMenu";
import { HiShoppingCart } from "react-icons/hi2";
import { useCart } from "./shared/CartContext";





const Navbar = () => {
  const pathname = usePathname();
  const {cart} = useCart();
  return (
    <header className="py-4 md:px-20 shadow-md ">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl tracking-wide font-bold ">
          <Link href="/" className=""> <span className=" text-white px-1 mr-0.5 bg-rose-600 text-2xl rounded-bl-lg rounded-tr-lg">E</span>-commerce </Link>
          <p className="text-xxs text-gray-500 dark:text-gray-400">
        Building a better digital experience for everyone.
      </p>
        </div>

        {/* desktop menu */}
        <NavigationMenu className=" hidden mx-auto items-center  lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/news" className={`${pathname === '/news' ? 'text-rose-600 font-semibold cursor-pointer' : ""} hover:text-rose-600`}>Products</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/services" className={`${pathname === '/services' ? 'text-rose-600 font-semibold cursor-pointer' : ""} hover:text-rose-600`}>
              <NavigationMenuTrigger className=" font-normal ">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className=" text-gray-600 shadow-md rounded-md px-4 py-3   ">
                  <li>
                <NavigationMenuLink href="/services/web">Web Development</NavigationMenuLink>
                  </li>
                  <li>
                <NavigationMenuLink href="/services/apps">Mobile Apps</NavigationMenuLink>
                  </li>
                  <li>
                <NavigationMenuLink href="/services/seo">Seo</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/about" className={`${pathname === '/about' ? 'text-rose-600 font-semibold cursor-pointer' : ""} hover:text-rose-600`}>About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink href="/contact" className={`${pathname === '/contact' ? 'text-rose-600 font-semibold cursor-pointer' : ""} hover:text-rose-600`}>Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher, login, and cart */}
        <div className=" hidden lg:flex items-center ">
          <div className=" flex items-center space-x-4">
            <span className="mr-2">Dark Mode</span>
            <Switch className=" cursor-pointer"/>

            <Button variant="default" className=" cursor-pointer">Login</Button>

            {/* Cart button with count */}
            <Link href="/cart">
              <Button className="relative text-2xl rounded-t-full">
                <HiShoppingCart className=" text-2xl " />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs font-bold rounded-full px-2">
                    {cart.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* mobile hamber menu */}
       <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
