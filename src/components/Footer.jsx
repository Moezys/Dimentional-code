import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  Product: ["Features", "Pricing", "Documentation", "Changelog", "Release Notes"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: ["Help Center", "Community", "Tutorials", "Webinars", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
}


const Footer = () => {
  return (
    <footer className='border-t border-gray-700 bg-black/50 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
        {/* main footer content */}
        <div className='hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12'>
          <div className='col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left'>
            <div className='flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4'>
              <div className='rounded-lg'>
                <img src='/logo.png' alt='Dimensional Code Logo' className='w-6 h-6 sm:w-8 sm:h-8' />
              </div>
              <span className='text-lg sm:text-xl font-bold'>
                <span className='text-white'>Dimensional </span>
                <span className='text-gray-400'>Code</span>
              </span>
            </div>
            <p className='text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base'>
              Empowering developers with AI-driven code intelligence for a smarter development experience.
            </p>
            <div className='flex justify-center sm:justify-start space-x-3 sm:space-x-4'>
              <a href='#' className='p-2 sm:p-2.5 bg-gray-600 rounded-lg hover:bg-gray-300 transition-colors duration-200'>
                <Github className='w-4 h-4 sm:w-5 sm:h-5' />
              </a>
              <a href='#' className='p-2 sm:p-2.5 bg-gray-600 rounded-lg hover:bg-gray-300 transition-colors duration-200'>
                <Twitter className='w-4 h-4 sm:w-5 sm:h-5' />
              </a>
              <a href='#' className='p-2 sm:p-2.5 bg-gray-600 rounded-lg hover:bg-gray-300 transition-colors duration-200'>
                <Linkedin className='w-4 h-4 sm:w-5 sm:h-5' />
              </a>
              <a href='#' className='p-2 sm:p-2.5 bg-gray-600 rounded-lg hover:bg-gray-300 transition-colors duration-200'>
                <Mail className='w-4 h-4 sm:w-5 sm:h-5' />
              </a>
            </div>
          </div>
          {/* footer links */}
          <div className='sm:col-span-3 lg:col-span-4'>
            <div className='grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12'>
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className='font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base'>{category}</h3>
                  <ul className='space-y-2 sm:space-y-3'>
                    {links.map((link) => (
                      <li key={link}>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-base'>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer