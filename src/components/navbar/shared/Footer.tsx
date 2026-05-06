import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineX } from "react-icons/ai";



const Footer = () => {
  return (
    <footer className=" py-4  bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-30">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
           <Link href="/" className=""> <span className=" text-white px-1 mr-0.5 bg-rose-600 text-2xl rounded-bl-lg rounded-tr-lg">E</span>-commerce Made</Link>
          <p className="text-xs text-gray-500 dark:text-gray-400">
          Building a better digital experience for everyone.
          </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-gray-600 dark:text-gray-400">
            <a href="/about" className="hover:text-gray-900 dark:hover:text-white">
              About Us
            </a>
            <a href="/services" className="hover:text-gray-900 dark:hover:text-white">
              Services
            </a>
            <a href="/contact" className="hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
            <a href="/privacy" className="hover:text-gray-900 dark:hover:text-white">
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/RasedJamanRaj"
              aria-label="Twitter"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineX size={24} />
            </a>
            <a
              href="https://instagram.com/rashedjamanraj"
              aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineInstagram size={24} />
            </a>
            <a
              href="https://github.com/rashedjamanraj"
              aria-label="Github"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiOutlineGithub size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center md:flex md:justify-between md:items-center">
          <p className='text-sm'> Copyright &copy; {new Date().getFullYear()} <Link href="/" className=" text-blue-600 hover:text-red-400">E-commerce Made</Link> All rights reserved</p>

          <Button variant="outline" className="mt-4 md:mt-0 dark:bg-gray-900 dark:text-white cursor-pointer">
            Subscribe
          </Button>
        </div>
      </div>
      <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-30 text-sm">Developed by- <span className='text-sky-500 font-light italic'>Rashed Jaman Raj</span></p>
    </footer>
  )
}

export default Footer
