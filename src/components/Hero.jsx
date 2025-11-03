import { useState, useEffect } from 'react'
import { ChevronDown, Sparkles, ArrowRight, Play } from 'lucide-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { codeExample, floatingCards } from '../data/CodeExample'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'


const Hero = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState('App.jsx')

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className='absolute inset-0 opacity-30' style={{ background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 30%)` }} />

      <div className='max-w-7xl mx-auto text-center relative w-full'>
        <div className='max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative'>
          <div className='text-center lg:text-left'>
            <div className='inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-400/10 border border-gray-100/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700'>
              <Sparkles className='w-4 h-4'/>
              <span className='text-xs sm:text-sm text-gray-200'>Introducing Dimensional Code AI</span>
            </div>

            <h1 className='text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100'>
              <span>Code </span>
              <span className='text-gray-500'>Intelligence</span>
              <span> for Modern Development</span>
            </h1>

            <p className='text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed'>
              Accelerate your development process with AI-powered code suggestions and automation.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300'>
              <button className='group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-gray-600 to-gray-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2'>
                <span>Get Started Now </span>
                <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300' />
              </button>

              <button className='group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2'>
                <div className='p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors'>
                  <Play className='w-4 h-4 sm:w-5 sm:h-5' />
                </div>
                <span> Watch Demo</span>
              </button>
            </div>
          </div>
          <div className='relative order-2 w-full'>
            <div className='relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10'>
              <div className='bg-gradient-to-br from-gray-600/20 to-gray-600/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] w-full lg:h-[450px] lg:w-full border-white/5'>
                {/* IDE header */}
                <div className='flex items-center justify-between px-3 sm:px-4 py-4 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10'>
                  <div className='flex items-center sm:space-x-2'>
                    <div className='flex items-center space-x-1 sm:space-x-2'>
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500' />
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500' />
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500' />
                    </div>
                    <span className='text-xs sm:text-sm text-gray-300 '>Dimensional Code</span>
                  </div>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                </div>
                <div className='p-3 sm:p-4 relative h-full'>
                  {/* File Tabs */}
                  <div className='flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto'>
                    <button onClick={() => setActiveTab('App.jsx')} className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === 'App.jsx' ? 'bg-gray-200/30 text-white border-blue-400/20' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'} transition-all duration-200 white-space-nowrap cursor-pointer`}>App.jsx</button>
                    <button onClick={() => setActiveTab('Hero.jsx')} className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === 'Hero.jsx' ? 'bg-gray-200/30 text-white border-blue-400/20' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'} transition-all duration-200 white-space-nowrap cursor-pointer`}>Hero.jsx</button>
                    <button onClick={() => setActiveTab('Navbar.jsx')} className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === 'Navbar.jsx' ? 'bg-gray-200/30 text-white border-blue-400/20' : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'} transition-all duration-200 white-space-nowrap cursor-pointer`}>Navbar.jsx</button>
                  </div>
                  {/* Code Content */}
                  <div className='relative overflow-hidden flex-grow'>
                    <SyntaxHighlighter language='javascript' style={materialDark} customStyle={{ margin: 0, borderRadius: '8px', fontSize: '11px', lineHeight: '1.4', height: '100%', border: '1px solid #3c3c3c' }}>
                      {codeExample[activeTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${floatingCards[activeTab].bgColor} backdrop-blur-xl rounded-lg p-4 border-white/20 shadow-2xl`}>
                <div className='flex items-center space-x-2 mb-2'>
                  <div className={`w-6 h-6 ${floatingCards[activeTab].iconColor} flex items-center justify-center text-sm font-bold`}>{floatingCards[activeTab].icon}</div>
                  <span className={`text-sm font-medium ${floatingCards[activeTab].textColor}`}>{floatingCards[activeTab].title}</span>
                </div>
                <div className={`text-sm text-left ${floatingCards[activeTab].contentColor}`}>{floatingCards[activeTab].content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero