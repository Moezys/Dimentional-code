import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Left side: Logo */}
          <a href="#home" className="flex items-center gap-2 group cursor-pointer">
            <img src="/logo.png" alt="dimentional code" className="w-12 h-12 sm:w-16 sm:h-16" />
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Dimentional </span>
              <span className="text-gray-400">Code</span>
            </span>
          </a>

          {/* Center/Right: Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
            <a href="#Pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
            <a href="#Testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
          </div>

          {/* Mobile menu button */}
          <button className='md:hidden p-2 text-gray-300 hover:text-white' onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
            {mobileMenuIsOpen ? <X className='w-5 h-5 sm:w-6 sm:h-6' /> : <Menu className='w-5 h-5 sm:w-6 sm:h-6' />}
          </button>
        </div>
      </div>
      {mobileMenuIsOpen && (
        <div className='md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 animate-in slide-in-from-top duration-300'>
          <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
            <a href="#features" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
            <a href="#Pricing" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
            <a href="#Testimonials" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar