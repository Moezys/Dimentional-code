

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Developer at TechCorp',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback: 'Dimensional Code AI has completely transformed how I write code. The intelligent suggestions save me hours every day and help me write cleaner, more efficient code.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupHub',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback: 'Our team productivity increased by 40% after implementing Dimensional Code. The seamless IDE integration made adoption effortless, and the AI suggestions are remarkably accurate.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Full Stack Engineer at DevSolutions',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    feedback: 'The customizable workflows feature is a game-changer. I can tailor the AI to match my coding style perfectly. It feels like having an expert pair programmer available 24/7.',
  }
]

const Testimonials = () => {
  return (
    <section id="Testimonials" className="py-16 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* leftside header */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What Our Users Say
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Here's what our users have to say about us.</p>
          </div>
          {/* rightside testimonials */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 sm:space-y-8">
            {testimonials.map((testimonial, key) => (
              <div key={key} className="bg-gray-800/50 p-4 sm:p-6 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="flex-grow">
                    <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.feedback}</p>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials